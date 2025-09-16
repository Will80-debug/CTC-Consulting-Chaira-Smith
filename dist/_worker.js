var kt=Object.defineProperty;var He=e=>{throw TypeError(e)};var Ct=(e,t,a)=>t in e?kt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var h=(e,t,a)=>Ct(e,typeof t!="symbol"?t+"":t,a),Ae=(e,t,a)=>t.has(e)||He("Cannot "+a);var o=(e,t,a)=>(Ae(e,t,"read from private field"),a?a.call(e):t.get(e)),u=(e,t,a)=>t.has(e)?He("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),p=(e,t,a,s)=>(Ae(e,t,"write to private field"),s?s.call(e,a):t.set(e,a),a),x=(e,t,a)=>(Ae(e,t,"access private method"),a);var Me=(e,t,a,s)=>({set _(i){p(e,t,i,a)},get _(){return o(e,t,s)}});var Ne=(e,t,a)=>(s,i)=>{let l=-1;return r(0);async function r(d){if(d<=l)throw new Error("next() called multiple times");l=d;let n,c=!1,m;if(e[d]?(m=e[d][0][0],s.req.routeIndex=d):m=d===e.length&&i||void 0,m)try{n=await m(s,()=>r(d+1))}catch(g){if(g instanceof Error&&t)s.error=g,n=await t(g,s),c=!0;else throw g}else s.finalized===!1&&a&&(n=await a(s));return n&&(s.finalized===!1||c)&&(s.res=n),s}},jt=Symbol(),St=async(e,t=Object.create(null))=>{const{all:a=!1,dot:s=!1}=t,l=(e instanceof lt?e.raw.headers:e.headers).get("Content-Type");return l!=null&&l.startsWith("multipart/form-data")||l!=null&&l.startsWith("application/x-www-form-urlencoded")?Et(e,{all:a,dot:s}):{}};async function Et(e,t){const a=await e.formData();return a?Tt(a,t):{}}function Tt(e,t){const a=Object.create(null);return e.forEach((s,i)=>{t.all||i.endsWith("[]")?qt(a,i,s):a[i]=s}),t.dot&&Object.entries(a).forEach(([s,i])=>{s.includes(".")&&(zt(a,s,i),delete a[s])}),a}var qt=(e,t,a)=>{e[t]!==void 0?Array.isArray(e[t])?e[t].push(a):e[t]=[e[t],a]:t.endsWith("[]")?e[t]=[a]:e[t]=a},zt=(e,t,a)=>{let s=e;const i=t.split(".");i.forEach((l,r)=>{r===i.length-1?s[l]=a:((!s[l]||typeof s[l]!="object"||Array.isArray(s[l])||s[l]instanceof File)&&(s[l]=Object.create(null)),s=s[l])})},et=e=>{const t=e.split("/");return t[0]===""&&t.shift(),t},Pt=e=>{const{groups:t,path:a}=At(e),s=et(a);return Ot(s,t)},At=e=>{const t=[];return e=e.replace(/\{[^}]+\}/g,(a,s)=>{const i=`@${s}`;return t.push([i,a]),i}),{groups:t,path:e}},Ot=(e,t)=>{for(let a=t.length-1;a>=0;a--){const[s]=t[a];for(let i=e.length-1;i>=0;i--)if(e[i].includes(s)){e[i]=e[i].replace(s,t[a][1]);break}}return e},Ce={},Rt=(e,t)=>{if(e==="*")return"*";const a=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(a){const s=`${e}#${t}`;return Ce[s]||(a[2]?Ce[s]=t&&t[0]!==":"&&t[0]!=="*"?[s,a[1],new RegExp(`^${a[2]}(?=/${t})`)]:[e,a[1],new RegExp(`^${a[2]}$`)]:Ce[s]=[e,a[1],!0]),Ce[s]}return null},Fe=(e,t)=>{try{return t(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,a=>{try{return t(a)}catch{return a}})}},It=e=>Fe(e,decodeURI),tt=e=>{const t=e.url,a=t.indexOf("/",t.indexOf(":")+4);let s=a;for(;s<t.length;s++){const i=t.charCodeAt(s);if(i===37){const l=t.indexOf("?",s),r=t.slice(a,l===-1?void 0:l);return It(r.includes("%25")?r.replace(/%25/g,"%2525"):r)}else if(i===63)break}return t.slice(a,s)},Lt=e=>{const t=tt(e);return t.length>1&&t.at(-1)==="/"?t.slice(0,-1):t},se=(e,t,...a)=>(a.length&&(t=se(t,...a)),`${(e==null?void 0:e[0])==="/"?"":"/"}${e}${t==="/"?"":`${(e==null?void 0:e.at(-1))==="/"?"":"/"}${(t==null?void 0:t[0])==="/"?t.slice(1):t}`}`),at=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(":"))return null;const t=e.split("/"),a=[];let s="";return t.forEach(i=>{if(i!==""&&!/\:/.test(i))s+="/"+i;else if(/\:/.test(i))if(/\?/.test(i)){a.length===0&&s===""?a.push("/"):a.push(s);const l=i.replace("?","");s+="/"+l,a.push(s)}else s+="/"+i}),a.filter((i,l,r)=>r.indexOf(i)===l)},Oe=e=>/[%+]/.test(e)?(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),e.indexOf("%")!==-1?Fe(e,it):e):e,st=(e,t,a)=>{let s;if(!a&&t&&!/[%+]/.test(t)){let r=e.indexOf(`?${t}`,8);for(r===-1&&(r=e.indexOf(`&${t}`,8));r!==-1;){const d=e.charCodeAt(r+t.length+1);if(d===61){const n=r+t.length+2,c=e.indexOf("&",n);return Oe(e.slice(n,c===-1?void 0:c))}else if(d==38||isNaN(d))return"";r=e.indexOf(`&${t}`,r+1)}if(s=/[%+]/.test(e),!s)return}const i={};s??(s=/[%+]/.test(e));let l=e.indexOf("?",8);for(;l!==-1;){const r=e.indexOf("&",l+1);let d=e.indexOf("=",l);d>r&&r!==-1&&(d=-1);let n=e.slice(l+1,d===-1?r===-1?void 0:r:d);if(s&&(n=Oe(n)),l=r,n==="")continue;let c;d===-1?c="":(c=e.slice(d+1,r===-1?void 0:r),s&&(c=Oe(c))),a?(i[n]&&Array.isArray(i[n])||(i[n]=[]),i[n].push(c)):i[n]??(i[n]=c)}return t?i[t]:i},Ft=st,Dt=(e,t)=>st(e,t,!0),it=decodeURIComponent,_e=e=>Fe(e,it),oe,q,M,ot,rt,Ie,_,Be,lt=(Be=class{constructor(e,t="/",a=[[]]){u(this,M);h(this,"raw");u(this,oe);u(this,q);h(this,"routeIndex",0);h(this,"path");h(this,"bodyCache",{});u(this,_,e=>{const{bodyCache:t,raw:a}=this,s=t[e];if(s)return s;const i=Object.keys(t)[0];return i?t[i].then(l=>(i==="json"&&(l=JSON.stringify(l)),new Response(l)[e]())):t[e]=a[e]()});this.raw=e,this.path=t,p(this,q,a),p(this,oe,{})}param(e){return e?x(this,M,ot).call(this,e):x(this,M,rt).call(this)}query(e){return Ft(this.url,e)}queries(e){return Dt(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;const t={};return this.raw.headers.forEach((a,s)=>{t[s]=a}),t}async parseBody(e){var t;return(t=this.bodyCache).parsedBody??(t.parsedBody=await St(this,e))}json(){return o(this,_).call(this,"text").then(e=>JSON.parse(e))}text(){return o(this,_).call(this,"text")}arrayBuffer(){return o(this,_).call(this,"arrayBuffer")}blob(){return o(this,_).call(this,"blob")}formData(){return o(this,_).call(this,"formData")}addValidatedData(e,t){o(this,oe)[e]=t}valid(e){return o(this,oe)[e]}get url(){return this.raw.url}get method(){return this.raw.method}get[jt](){return o(this,q)}get matchedRoutes(){return o(this,q)[0].map(([[,e]])=>e)}get routePath(){return o(this,q)[0].map(([[,e]])=>e)[this.routeIndex].path}},oe=new WeakMap,q=new WeakMap,M=new WeakSet,ot=function(e){const t=o(this,q)[0][this.routeIndex][1][e],a=x(this,M,Ie).call(this,t);return a?/\%/.test(a)?_e(a):a:void 0},rt=function(){const e={},t=Object.keys(o(this,q)[0][this.routeIndex][1]);for(const a of t){const s=x(this,M,Ie).call(this,o(this,q)[0][this.routeIndex][1][a]);s&&typeof s=="string"&&(e[a]=/\%/.test(s)?_e(s):s)}return e},Ie=function(e){return o(this,q)[1]?o(this,q)[1][e]:e},_=new WeakMap,Be),Ht={Stringify:1},nt=async(e,t,a,s,i)=>{typeof e=="object"&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));const l=e.callbacks;return l!=null&&l.length?(i?i[0]+=e:i=[e],Promise.all(l.map(d=>d({phase:t,buffer:i,context:s}))).then(d=>Promise.all(d.filter(Boolean).map(n=>nt(n,t,!1,s,i))).then(()=>i[0]))):Promise.resolve(e)},Mt="text/plain; charset=UTF-8",Re=(e,t)=>({"Content-Type":e,...t}),xe,ve,L,re,F,E,be,ne,de,K,ye,we,$,ie,Ve,Nt=(Ve=class{constructor(e,t){u(this,$);u(this,xe);u(this,ve);h(this,"env",{});u(this,L);h(this,"finalized",!1);h(this,"error");u(this,re);u(this,F);u(this,E);u(this,be);u(this,ne);u(this,de);u(this,K);u(this,ye);u(this,we);h(this,"render",(...e)=>(o(this,ne)??p(this,ne,t=>this.html(t)),o(this,ne).call(this,...e)));h(this,"setLayout",e=>p(this,be,e));h(this,"getLayout",()=>o(this,be));h(this,"setRenderer",e=>{p(this,ne,e)});h(this,"header",(e,t,a)=>{this.finalized&&p(this,E,new Response(o(this,E).body,o(this,E)));const s=o(this,E)?o(this,E).headers:o(this,K)??p(this,K,new Headers);t===void 0?s.delete(e):a!=null&&a.append?s.append(e,t):s.set(e,t)});h(this,"status",e=>{p(this,re,e)});h(this,"set",(e,t)=>{o(this,L)??p(this,L,new Map),o(this,L).set(e,t)});h(this,"get",e=>o(this,L)?o(this,L).get(e):void 0);h(this,"newResponse",(...e)=>x(this,$,ie).call(this,...e));h(this,"body",(e,t,a)=>x(this,$,ie).call(this,e,t,a));h(this,"text",(e,t,a)=>!o(this,K)&&!o(this,re)&&!t&&!a&&!this.finalized?new Response(e):x(this,$,ie).call(this,e,t,Re(Mt,a)));h(this,"json",(e,t,a)=>x(this,$,ie).call(this,JSON.stringify(e),t,Re("application/json",a)));h(this,"html",(e,t,a)=>{const s=i=>x(this,$,ie).call(this,i,t,Re("text/html; charset=UTF-8",a));return typeof e=="object"?nt(e,Ht.Stringify,!1,{}).then(s):s(e)});h(this,"redirect",(e,t)=>{const a=String(e);return this.header("Location",/[^\x00-\xFF]/.test(a)?encodeURI(a):a),this.newResponse(null,t??302)});h(this,"notFound",()=>(o(this,de)??p(this,de,()=>new Response),o(this,de).call(this,this)));p(this,xe,e),t&&(p(this,F,t.executionCtx),this.env=t.env,p(this,de,t.notFoundHandler),p(this,we,t.path),p(this,ye,t.matchResult))}get req(){return o(this,ve)??p(this,ve,new lt(o(this,xe),o(this,we),o(this,ye))),o(this,ve)}get event(){if(o(this,F)&&"respondWith"in o(this,F))return o(this,F);throw Error("This context has no FetchEvent")}get executionCtx(){if(o(this,F))return o(this,F);throw Error("This context has no ExecutionContext")}get res(){return o(this,E)||p(this,E,new Response(null,{headers:o(this,K)??p(this,K,new Headers)}))}set res(e){if(o(this,E)&&e){e=new Response(e.body,e);for(const[t,a]of o(this,E).headers.entries())if(t!=="content-type")if(t==="set-cookie"){const s=o(this,E).headers.getSetCookie();e.headers.delete("set-cookie");for(const i of s)e.headers.append("set-cookie",i)}else e.headers.set(t,a)}p(this,E,e),this.finalized=!0}get var(){return o(this,L)?Object.fromEntries(o(this,L)):{}}},xe=new WeakMap,ve=new WeakMap,L=new WeakMap,re=new WeakMap,F=new WeakMap,E=new WeakMap,be=new WeakMap,ne=new WeakMap,de=new WeakMap,K=new WeakMap,ye=new WeakMap,we=new WeakMap,$=new WeakSet,ie=function(e,t,a){const s=o(this,E)?new Headers(o(this,E).headers):o(this,K)??new Headers;if(typeof t=="object"&&"headers"in t){const l=t.headers instanceof Headers?t.headers:new Headers(t.headers);for(const[r,d]of l)r.toLowerCase()==="set-cookie"?s.append(r,d):s.set(r,d)}if(a)for(const[l,r]of Object.entries(a))if(typeof r=="string")s.set(l,r);else{s.delete(l);for(const d of r)s.append(l,d)}const i=typeof t=="number"?t:(t==null?void 0:t.status)??o(this,re);return new Response(e,{status:i,headers:s})},Ve),w="ALL",_t="all",$t=["get","post","put","delete","options","patch"],dt="Can not add a route since the matcher is already built.",ct=class extends Error{},Wt="__COMPOSED_HANDLER",Gt=e=>e.text("404 Not Found",404),$e=(e,t)=>{if("getResponse"in e){const a=e.getResponse();return t.newResponse(a.body,a)}return console.error(e),t.text("Internal Server Error",500)},P,k,gt,A,U,je,Se,Ue,mt=(Ue=class{constructor(t={}){u(this,k);h(this,"get");h(this,"post");h(this,"put");h(this,"delete");h(this,"options");h(this,"patch");h(this,"all");h(this,"on");h(this,"use");h(this,"router");h(this,"getPath");h(this,"_basePath","/");u(this,P,"/");h(this,"routes",[]);u(this,A,Gt);h(this,"errorHandler",$e);h(this,"onError",t=>(this.errorHandler=t,this));h(this,"notFound",t=>(p(this,A,t),this));h(this,"fetch",(t,...a)=>x(this,k,Se).call(this,t,a[1],a[0],t.method));h(this,"request",(t,a,s,i)=>t instanceof Request?this.fetch(a?new Request(t,a):t,s,i):(t=t.toString(),this.fetch(new Request(/^https?:\/\//.test(t)?t:`http://localhost${se("/",t)}`,a),s,i)));h(this,"fire",()=>{addEventListener("fetch",t=>{t.respondWith(x(this,k,Se).call(this,t.request,t,void 0,t.request.method))})});[...$t,_t].forEach(l=>{this[l]=(r,...d)=>(typeof r=="string"?p(this,P,r):x(this,k,U).call(this,l,o(this,P),r),d.forEach(n=>{x(this,k,U).call(this,l,o(this,P),n)}),this)}),this.on=(l,r,...d)=>{for(const n of[r].flat()){p(this,P,n);for(const c of[l].flat())d.map(m=>{x(this,k,U).call(this,c.toUpperCase(),o(this,P),m)})}return this},this.use=(l,...r)=>(typeof l=="string"?p(this,P,l):(p(this,P,"*"),r.unshift(l)),r.forEach(d=>{x(this,k,U).call(this,w,o(this,P),d)}),this);const{strict:s,...i}=t;Object.assign(this,i),this.getPath=s??!0?t.getPath??tt:Lt}route(t,a){const s=this.basePath(t);return a.routes.map(i=>{var r;let l;a.errorHandler===$e?l=i.handler:(l=async(d,n)=>(await Ne([],a.errorHandler)(d,()=>i.handler(d,n))).res,l[Wt]=i.handler),x(r=s,k,U).call(r,i.method,i.path,l)}),this}basePath(t){const a=x(this,k,gt).call(this);return a._basePath=se(this._basePath,t),a}mount(t,a,s){let i,l;s&&(typeof s=="function"?l=s:(l=s.optionHandler,s.replaceRequest===!1?i=n=>n:i=s.replaceRequest));const r=l?n=>{const c=l(n);return Array.isArray(c)?c:[c]}:n=>{let c;try{c=n.executionCtx}catch{}return[n.env,c]};i||(i=(()=>{const n=se(this._basePath,t),c=n==="/"?0:n.length;return m=>{const g=new URL(m.url);return g.pathname=g.pathname.slice(c)||"/",new Request(g,m)}})());const d=async(n,c)=>{const m=await a(i(n.req.raw),...r(n));if(m)return m;await c()};return x(this,k,U).call(this,w,se(t,"*"),d),this}},P=new WeakMap,k=new WeakSet,gt=function(){const t=new mt({router:this.router,getPath:this.getPath});return t.errorHandler=this.errorHandler,p(t,A,o(this,A)),t.routes=this.routes,t},A=new WeakMap,U=function(t,a,s){t=t.toUpperCase(),a=se(this._basePath,a);const i={basePath:this._basePath,path:a,method:t,handler:s};this.router.add(t,a,[s,i]),this.routes.push(i)},je=function(t,a){if(t instanceof Error)return this.errorHandler(t,a);throw t},Se=function(t,a,s,i){if(i==="HEAD")return(async()=>new Response(null,await x(this,k,Se).call(this,t,a,s,"GET")))();const l=this.getPath(t,{env:s}),r=this.router.match(i,l),d=new Nt(t,{path:l,matchResult:r,env:s,executionCtx:a,notFoundHandler:o(this,A)});if(r[0].length===1){let c;try{c=r[0][0][0][0](d,async()=>{d.res=await o(this,A).call(this,d)})}catch(m){return x(this,k,je).call(this,m,d)}return c instanceof Promise?c.then(m=>m||(d.finalized?d.res:o(this,A).call(this,d))).catch(m=>x(this,k,je).call(this,m,d)):c??o(this,A).call(this,d)}const n=Ne(r[0],this.errorHandler,o(this,A));return(async()=>{try{const c=await n(d);if(!c.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return c.res}catch(c){return x(this,k,je).call(this,c,d)}})()},Ue),Te="[^/]+",fe=".*",ue="(?:|/.*)",le=Symbol(),Bt=new Set(".\\+*[^]$()");function Vt(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1||e===fe||e===ue?1:t===fe||t===ue?-1:e===Te?1:t===Te?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var J,Q,O,Ye,Le=(Ye=class{constructor(){u(this,J);u(this,Q);u(this,O,Object.create(null))}insert(t,a,s,i,l){if(t.length===0){if(o(this,J)!==void 0)throw le;if(l)return;p(this,J,a);return}const[r,...d]=t,n=r==="*"?d.length===0?["","",fe]:["","",Te]:r==="/*"?["","",ue]:r.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let c;if(n){const m=n[1];let g=n[2]||Te;if(m&&n[2]&&(g===".*"||(g=g.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(g))))throw le;if(c=o(this,O)[g],!c){if(Object.keys(o(this,O)).some(f=>f!==fe&&f!==ue))throw le;if(l)return;c=o(this,O)[g]=new Le,m!==""&&p(c,Q,i.varIndex++)}!l&&m!==""&&s.push([m,o(c,Q)])}else if(c=o(this,O)[r],!c){if(Object.keys(o(this,O)).some(m=>m.length>1&&m!==fe&&m!==ue))throw le;if(l)return;c=o(this,O)[r]=new Le}c.insert(d,a,s,i,l)}buildRegExpStr(){const a=Object.keys(o(this,O)).sort(Vt).map(s=>{const i=o(this,O)[s];return(typeof o(i,Q)=="number"?`(${s})@${o(i,Q)}`:Bt.has(s)?`\\${s}`:s)+i.buildRegExpStr()});return typeof o(this,J)=="number"&&a.unshift(`#${o(this,J)}`),a.length===0?"":a.length===1?a[0]:"(?:"+a.join("|")+")"}},J=new WeakMap,Q=new WeakMap,O=new WeakMap,Ye),qe,ke,Ke,Ut=(Ke=class{constructor(){u(this,qe,{varIndex:0});u(this,ke,new Le)}insert(e,t,a){const s=[],i=[];for(let r=0;;){let d=!1;if(e=e.replace(/\{[^}]+\}/g,n=>{const c=`@\\${r}`;return i[r]=[c,n],r++,d=!0,c}),!d)break}const l=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let r=i.length-1;r>=0;r--){const[d]=i[r];for(let n=l.length-1;n>=0;n--)if(l[n].indexOf(d)!==-1){l[n]=l[n].replace(d,i[r][1]);break}}return o(this,ke).insert(l,t,s,o(this,qe),a),s}buildRegExp(){let e=o(this,ke).buildRegExpStr();if(e==="")return[/^$/,[],[]];let t=0;const a=[],s=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(i,l,r)=>l!==void 0?(a[++t]=Number(l),"$()"):(r!==void 0&&(s[Number(r)]=++t),"")),[new RegExp(`^${e}`),a,s]}},qe=new WeakMap,ke=new WeakMap,Ke),pt=[],Yt=[/^$/,[],Object.create(null)],Ee=Object.create(null);function ht(e){return Ee[e]??(Ee[e]=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(t,a)=>a?`\\${a}`:"(?:|/.*)")}$`))}function Kt(){Ee=Object.create(null)}function Jt(e){var c;const t=new Ut,a=[];if(e.length===0)return Yt;const s=e.map(m=>[!/\*|\/:/.test(m[0]),...m]).sort(([m,g],[f,y])=>m?1:f?-1:g.length-y.length),i=Object.create(null);for(let m=0,g=-1,f=s.length;m<f;m++){const[y,T,v]=s[m];y?i[T]=[v.map(([S])=>[S,Object.create(null)]),pt]:g++;let b;try{b=t.insert(T,g,y)}catch(S){throw S===le?new ct(T):S}y||(a[g]=v.map(([S,te])=>{const ge=Object.create(null);for(te-=1;te>=0;te--){const[R,ze]=b[te];ge[R]=ze}return[S,ge]}))}const[l,r,d]=t.buildRegExp();for(let m=0,g=a.length;m<g;m++)for(let f=0,y=a[m].length;f<y;f++){const T=(c=a[m][f])==null?void 0:c[1];if(!T)continue;const v=Object.keys(T);for(let b=0,S=v.length;b<S;b++)T[v[b]]=d[T[v[b]]]}const n=[];for(const m in r)n[m]=a[r[m]];return[l,n,i]}function ae(e,t){if(e){for(const a of Object.keys(e).sort((s,i)=>i.length-s.length))if(ht(a).test(t))return[...e[a]]}}var W,G,me,ft,ut,Je,Qt=(Je=class{constructor(){u(this,me);h(this,"name","RegExpRouter");u(this,W);u(this,G);p(this,W,{[w]:Object.create(null)}),p(this,G,{[w]:Object.create(null)})}add(e,t,a){var d;const s=o(this,W),i=o(this,G);if(!s||!i)throw new Error(dt);s[e]||[s,i].forEach(n=>{n[e]=Object.create(null),Object.keys(n[w]).forEach(c=>{n[e][c]=[...n[w][c]]})}),t==="/*"&&(t="*");const l=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){const n=ht(t);e===w?Object.keys(s).forEach(c=>{var m;(m=s[c])[t]||(m[t]=ae(s[c],t)||ae(s[w],t)||[])}):(d=s[e])[t]||(d[t]=ae(s[e],t)||ae(s[w],t)||[]),Object.keys(s).forEach(c=>{(e===w||e===c)&&Object.keys(s[c]).forEach(m=>{n.test(m)&&s[c][m].push([a,l])})}),Object.keys(i).forEach(c=>{(e===w||e===c)&&Object.keys(i[c]).forEach(m=>n.test(m)&&i[c][m].push([a,l]))});return}const r=at(t)||[t];for(let n=0,c=r.length;n<c;n++){const m=r[n];Object.keys(i).forEach(g=>{var f;(e===w||e===g)&&((f=i[g])[m]||(f[m]=[...ae(s[g],m)||ae(s[w],m)||[]]),i[g][m].push([a,l-c+n+1]))})}}match(e,t){Kt();const a=x(this,me,ft).call(this);return this.match=(s,i)=>{const l=a[s]||a[w],r=l[2][i];if(r)return r;const d=i.match(l[0]);if(!d)return[[],pt];const n=d.indexOf("",1);return[l[1][n],d]},this.match(e,t)}},W=new WeakMap,G=new WeakMap,me=new WeakSet,ft=function(){const e=Object.create(null);return Object.keys(o(this,G)).concat(Object.keys(o(this,W))).forEach(t=>{e[t]||(e[t]=x(this,me,ut).call(this,t))}),p(this,W,p(this,G,void 0)),e},ut=function(e){const t=[];let a=e===w;return[o(this,W),o(this,G)].forEach(s=>{const i=s[e]?Object.keys(s[e]).map(l=>[l,s[e][l]]):[];i.length!==0?(a||(a=!0),t.push(...i)):e!==w&&t.push(...Object.keys(s[w]).map(l=>[l,s[w][l]]))}),a?Jt(t):null},Je),B,D,Qe,Xt=(Qe=class{constructor(e){h(this,"name","SmartRouter");u(this,B,[]);u(this,D,[]);p(this,B,e.routers)}add(e,t,a){if(!o(this,D))throw new Error(dt);o(this,D).push([e,t,a])}match(e,t){if(!o(this,D))throw new Error("Fatal error");const a=o(this,B),s=o(this,D),i=a.length;let l=0,r;for(;l<i;l++){const d=a[l];try{for(let n=0,c=s.length;n<c;n++)d.add(...s[n]);r=d.match(e,t)}catch(n){if(n instanceof ct)continue;throw n}this.match=d.match.bind(d),p(this,B,[d]),p(this,D,void 0);break}if(l===i)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,r}get activeRouter(){if(o(this,D)||o(this,B).length!==1)throw new Error("No active router has been determined yet.");return o(this,B)[0]}},B=new WeakMap,D=new WeakMap,Qe),he=Object.create(null),V,j,X,ce,C,H,Y,Xe,xt=(Xe=class{constructor(e,t,a){u(this,H);u(this,V);u(this,j);u(this,X);u(this,ce,0);u(this,C,he);if(p(this,j,a||Object.create(null)),p(this,V,[]),e&&t){const s=Object.create(null);s[e]={handler:t,possibleKeys:[],score:0},p(this,V,[s])}p(this,X,[])}insert(e,t,a){p(this,ce,++Me(this,ce)._);let s=this;const i=Pt(t),l=[];for(let r=0,d=i.length;r<d;r++){const n=i[r],c=i[r+1],m=Rt(n,c),g=Array.isArray(m)?m[0]:n;if(g in o(s,j)){s=o(s,j)[g],m&&l.push(m[1]);continue}o(s,j)[g]=new xt,m&&(o(s,X).push(m),l.push(m[1])),s=o(s,j)[g]}return o(s,V).push({[e]:{handler:a,possibleKeys:l.filter((r,d,n)=>n.indexOf(r)===d),score:o(this,ce)}}),s}search(e,t){var d;const a=[];p(this,C,he);let i=[this];const l=et(t),r=[];for(let n=0,c=l.length;n<c;n++){const m=l[n],g=n===c-1,f=[];for(let y=0,T=i.length;y<T;y++){const v=i[y],b=o(v,j)[m];b&&(p(b,C,o(v,C)),g?(o(b,j)["*"]&&a.push(...x(this,H,Y).call(this,o(b,j)["*"],e,o(v,C))),a.push(...x(this,H,Y).call(this,b,e,o(v,C)))):f.push(b));for(let S=0,te=o(v,X).length;S<te;S++){const ge=o(v,X)[S],R=o(v,C)===he?{}:{...o(v,C)};if(ge==="*"){const N=o(v,j)["*"];N&&(a.push(...x(this,H,Y).call(this,N,e,o(v,C))),p(N,C,R),f.push(N));continue}const[ze,De,pe]=ge;if(!m&&!(pe instanceof RegExp))continue;const I=o(v,j)[ze],wt=l.slice(n).join("/");if(pe instanceof RegExp){const N=pe.exec(wt);if(N){if(R[De]=N[0],a.push(...x(this,H,Y).call(this,I,e,o(v,C),R)),Object.keys(o(I,j)).length){p(I,C,R);const Pe=((d=N[0].match(/\//))==null?void 0:d.length)??0;(r[Pe]||(r[Pe]=[])).push(I)}continue}}(pe===!0||pe.test(m))&&(R[De]=m,g?(a.push(...x(this,H,Y).call(this,I,e,R,o(v,C))),o(I,j)["*"]&&a.push(...x(this,H,Y).call(this,o(I,j)["*"],e,R,o(v,C)))):(p(I,C,R),f.push(I)))}}i=f.concat(r.shift()??[])}return a.length>1&&a.sort((n,c)=>n.score-c.score),[a.map(({handler:n,params:c})=>[n,c])]}},V=new WeakMap,j=new WeakMap,X=new WeakMap,ce=new WeakMap,C=new WeakMap,H=new WeakSet,Y=function(e,t,a,s){const i=[];for(let l=0,r=o(e,V).length;l<r;l++){const d=o(e,V)[l],n=d[t]||d[w],c={};if(n!==void 0&&(n.params=Object.create(null),i.push(n),a!==he||s&&s!==he))for(let m=0,g=n.possibleKeys.length;m<g;m++){const f=n.possibleKeys[m],y=c[n.score];n.params[f]=s!=null&&s[f]&&!y?s[f]:a[f]??(s==null?void 0:s[f]),c[n.score]=!0}}return i},Xe),Z,Ze,Zt=(Ze=class{constructor(){h(this,"name","TrieRouter");u(this,Z);p(this,Z,new xt)}add(e,t,a){const s=at(t);if(s){for(let i=0,l=s.length;i<l;i++)o(this,Z).insert(e,s[i],a);return}o(this,Z).insert(e,t,a)}match(e,t){return o(this,Z).search(e,t)}},Z=new WeakMap,Ze),vt=class extends mt{constructor(e={}){super(e),this.router=e.router??new Xt({routers:[new Qt,new Zt]})}},ea=e=>{const a={...{origin:"*",allowMethods:["GET","HEAD","PUT","POST","DELETE","PATCH"],allowHeaders:[],exposeHeaders:[]},...e},s=(l=>typeof l=="string"?l==="*"?()=>l:r=>l===r?r:null:typeof l=="function"?l:r=>l.includes(r)?r:null)(a.origin),i=(l=>typeof l=="function"?l:Array.isArray(l)?()=>l:()=>[])(a.allowMethods);return async function(r,d){var m;function n(g,f){r.res.headers.set(g,f)}const c=await s(r.req.header("origin")||"",r);if(c&&n("Access-Control-Allow-Origin",c),a.origin!=="*"){const g=r.req.header("Vary");g?n("Vary",g):n("Vary","Origin")}if(a.credentials&&n("Access-Control-Allow-Credentials","true"),(m=a.exposeHeaders)!=null&&m.length&&n("Access-Control-Expose-Headers",a.exposeHeaders.join(",")),r.req.method==="OPTIONS"){a.maxAge!=null&&n("Access-Control-Max-Age",a.maxAge.toString());const g=await i(r.req.header("origin")||"",r);g.length&&n("Access-Control-Allow-Methods",g.join(","));let f=a.allowHeaders;if(!(f!=null&&f.length)){const y=r.req.header("Access-Control-Request-Headers");y&&(f=y.split(/\s*,\s*/))}return f!=null&&f.length&&(n("Access-Control-Allow-Headers",f.join(",")),r.res.headers.append("Vary","Access-Control-Request-Headers")),r.res.headers.delete("Content-Length"),r.res.headers.delete("Content-Type"),new Response(null,{headers:r.res.headers,status:204,statusText:"No Content"})}await d()}},ta=/^\s*(?:text\/(?!event-stream(?:[;\s]|$))[^;\s]+|application\/(?:javascript|json|xml|xml-dtd|ecmascript|dart|postscript|rtf|tar|toml|vnd\.dart|vnd\.ms-fontobject|vnd\.ms-opentype|wasm|x-httpd-php|x-javascript|x-ns-proxy-autoconfig|x-sh|x-tar|x-virtualbox-hdd|x-virtualbox-ova|x-virtualbox-ovf|x-virtualbox-vbox|x-virtualbox-vdi|x-virtualbox-vhd|x-virtualbox-vmdk|x-www-form-urlencoded)|font\/(?:otf|ttf)|image\/(?:bmp|vnd\.adobe\.photoshop|vnd\.microsoft\.icon|vnd\.ms-dds|x-icon|x-ms-bmp)|message\/rfc822|model\/gltf-binary|x-shader\/x-fragment|x-shader\/x-vertex|[^;\s]+?\+(?:json|text|xml|yaml))(?:[;\s]|$)/i,We=(e,t=sa)=>{const a=/\.([a-zA-Z0-9]+?)$/,s=e.match(a);if(!s)return;let i=t[s[1]];return i&&i.startsWith("text")&&(i+="; charset=utf-8"),i},aa={aac:"audio/aac",avi:"video/x-msvideo",avif:"image/avif",av1:"video/av1",bin:"application/octet-stream",bmp:"image/bmp",css:"text/css",csv:"text/csv",eot:"application/vnd.ms-fontobject",epub:"application/epub+zip",gif:"image/gif",gz:"application/gzip",htm:"text/html",html:"text/html",ico:"image/x-icon",ics:"text/calendar",jpeg:"image/jpeg",jpg:"image/jpeg",js:"text/javascript",json:"application/json",jsonld:"application/ld+json",map:"application/json",mid:"audio/x-midi",midi:"audio/x-midi",mjs:"text/javascript",mp3:"audio/mpeg",mp4:"video/mp4",mpeg:"video/mpeg",oga:"audio/ogg",ogv:"video/ogg",ogx:"application/ogg",opus:"audio/opus",otf:"font/otf",pdf:"application/pdf",png:"image/png",rtf:"application/rtf",svg:"image/svg+xml",tif:"image/tiff",tiff:"image/tiff",ts:"video/mp2t",ttf:"font/ttf",txt:"text/plain",wasm:"application/wasm",webm:"video/webm",weba:"audio/webm",webmanifest:"application/manifest+json",webp:"image/webp",woff:"font/woff",woff2:"font/woff2",xhtml:"application/xhtml+xml",xml:"application/xml",zip:"application/zip","3gp":"video/3gpp","3g2":"video/3gpp2",gltf:"model/gltf+json",glb:"model/gltf-binary"},sa=aa,ia=(...e)=>{let t=e.filter(i=>i!=="").join("/");t=t.replace(new RegExp("(?<=\\/)\\/+","g"),"");const a=t.split("/"),s=[];for(const i of a)i===".."&&s.length>0&&s.at(-1)!==".."?s.pop():i!=="."&&s.push(i);return s.join("/")||"."},bt={br:".br",zstd:".zst",gzip:".gz"},la=Object.keys(bt),oa="index.html",ra=e=>{const t=e.root??"./",a=e.path,s=e.join??ia;return async(i,l)=>{var m,g,f,y;if(i.finalized)return l();let r;if(e.path)r=e.path;else try{if(r=decodeURIComponent(i.req.path),/(?:^|[\/\\])\.\.(?:$|[\/\\])/.test(r))throw new Error}catch{return await((m=e.onNotFound)==null?void 0:m.call(e,i.req.path,i)),l()}let d=s(t,!a&&e.rewriteRequestPath?e.rewriteRequestPath(r):r);e.isDir&&await e.isDir(d)&&(d=s(d,oa));const n=e.getContent;let c=await n(d,i);if(c instanceof Response)return i.newResponse(c.body,c);if(c){const T=e.mimes&&We(d,e.mimes)||We(d);if(i.header("Content-Type",T||"application/octet-stream"),e.precompressed&&(!T||ta.test(T))){const v=new Set((g=i.req.header("Accept-Encoding"))==null?void 0:g.split(",").map(b=>b.trim()));for(const b of la){if(!v.has(b))continue;const S=await n(d+bt[b],i);if(S){c=S,i.header("Content-Encoding",b),i.header("Vary","Accept-Encoding",{append:!0});break}}}return await((f=e.onFound)==null?void 0:f.call(e,d,i)),i.body(c)}await((y=e.onNotFound)==null?void 0:y.call(e,d,i)),await l()}},na=async(e,t)=>{let a;t&&t.manifest?typeof t.manifest=="string"?a=JSON.parse(t.manifest):a=t.manifest:typeof __STATIC_CONTENT_MANIFEST=="string"?a=JSON.parse(__STATIC_CONTENT_MANIFEST):a=__STATIC_CONTENT_MANIFEST;let s;t&&t.namespace?s=t.namespace:s=__STATIC_CONTENT;const i=a[e]||e;if(!i)return null;const l=await s.get(i,{type:"stream"});return l||null},da=e=>async function(a,s){return ra({...e,getContent:async l=>na(l,{manifest:e.manifest,namespace:e.namespace?e.namespace:a.env?a.env.__STATIC_CONTENT:void 0})})(a,s)},ca=e=>da(e);function ee({children:e,title:t,currentPage:a}){return`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${t} - CTS Consulting</title>
    <meta name="description" content="CTS Consulting helps organizations build safe, equitable cultures using the LLI Framework™. From insight to impact with real strategy, accountability, and outcomes.">
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"><\/script>
    
    <!-- Font Awesome -->
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
    
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- AOS Animation Library -->
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    
    <!-- Custom CSS -->
    <link href="/static/styles.css?v=2025091601" rel="stylesheet">
    
    <!-- Tailwind Config -->
    <script>
      tailwind.config = {
        theme: {
          extend: {
            fontFamily: {
              'inter': ['Inter', 'sans-serif'],
              'playfair': ['Playfair Display', 'serif'],
            },
            colors: {
              primary: {
                50: '#f0f9ff',
                100: '#e0f2fe',
                200: '#bae6fd',
                300: '#7dd3fc',
                400: '#38bdf8',
                500: '#0ea5e9',
                600: '#0284c7',
                700: '#0369a1',
                800: '#075985',
                900: '#0c4a6e',
              },
              accent: {
                50: '#fdf4ff',
                100: '#fae8ff',
                200: '#f5d0fe',
                300: '#f0abfc',
                400: '#e879f9',
                500: '#d946ef',
                600: '#c026d3',
                700: '#a21caf',
                800: '#86198f',
                900: '#701a75',
              },
              gold: {
                50: '#fffbeb',
                100: '#fef3c7',
                200: '#fde68a',
                300: '#fcd34d',
                400: '#fbbf24',
                500: '#f59e0b',
                600: '#d97706',
                700: '#b45309',
                800: '#92400e',
                900: '#78350f',
              }
            }
          }
        }
      }
    <\/script>
</head>
<body class="font-inter text-gray-900 antialiased">
    
    <!-- Navigation -->
    <nav id="navbar" class="fixed w-full top-0 z-50 bg-black bg-opacity-90 backdrop-blur-sm shadow-lg">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <div class="flex-shrink-0">
                    <a href="/" class="text-2xl font-bold text-white font-playfair">CTS Consulting</a>
                </div>
                
                <!-- Desktop Navigation -->
                <div class="block">
                    <div class="ml-10 flex items-baseline space-x-4 lg:space-x-8">
                        <a href="/" class="nav-link ${a==="home"?"active":""}" style="color: white !important; font-weight: bold !important; font-size: 16px !important;">Home</a>
                        <a href="/about" class="nav-link ${a==="about"?"active":""}" style="color: white !important; font-weight: bold !important; font-size: 16px !important;">About</a>
                        <a href="/framework" class="nav-link ${a==="framework"?"active":""}" style="color: white !important; font-weight: bold !important; font-size: 16px !important;">LLI Framework™</a>
                        <a href="/assessment" class="nav-link ${a==="assessment"?"active":""}" style="color: white !important; font-weight: bold !important; font-size: 16px !important;">Assessment</a>
                        <a href="/services" class="nav-link ${a==="services"?"active":""}" style="color: white !important; font-weight: bold !important; font-size: 16px !important;">Services</a>
                        <a href="/founder" class="nav-link ${a==="founder"?"active":""}" style="color: white !important; font-weight: bold !important; font-size: 16px !important;">Founder</a>
                        <a href="/contact" class="nav-link ${a==="contact"?"active":""}" style="color: white !important; font-weight: bold !important; font-size: 16px !important;">Contact</a>
                    </div>
                </div>
                
                <!-- Mobile menu button -->
                <div class="md:hidden">
                    <button id="mobile-menu-btn" class="text-white hover:text-gold-300 transition-colors">
                        <i class="fas fa-bars text-xl"></i>
                    </button>
                </div>
            </div>
        </div>
        
        <!-- Mobile Navigation Menu -->
        <div id="mobile-menu" class="hidden md:hidden">
            <div class="px-2 pt-2 pb-3 space-y-1 bg-black bg-opacity-90 backdrop-blur-sm">
                <a href="/" class="mobile-nav-link ${a==="home"?"active":""}">Home</a>
                <a href="/about" class="mobile-nav-link ${a==="about"?"active":""}">About</a>
                <a href="/framework" class="mobile-nav-link ${a==="framework"?"active":""}">LLI Framework™</a>
                <a href="/assessment" class="mobile-nav-link ${a==="assessment"?"active":""}">Assessment</a>
                <a href="/services" class="mobile-nav-link ${a==="services"?"active":""}">Services</a>
                <a href="/founder" class="mobile-nav-link ${a==="founder"?"active":""}">Founder</a>
                <a href="/contact" class="mobile-nav-link ${a==="contact"?"active":""}">Contact</a>
            </div>
        </div>
    </nav>

    <!-- Main Content -->
    <main class="pt-16">
        ${e}
    </main>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Brand -->
                <div>
                    <h3 class="text-2xl font-bold mb-4 font-playfair">CTS Consulting</h3>
                    <p class="text-gray-300 mb-4">
                        Building a world where equity is not just a value — it's an outcome.
                    </p>
                    <p class="text-gold-400 font-semibold">
                        "Listen. Learn. Implement.™ Transform Together."
                    </p>
                </div>
                
                <!-- Quick Links -->
                <div>
                    <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
                    <ul class="space-y-2">
                        <li><a href="/about" class="text-gray-300 hover:text-gold-400 transition-colors">About</a></li>
                        <li><a href="/framework" class="text-gray-300 hover:text-gold-400 transition-colors">LLI Framework™</a></li>
                        <li><a href="/services" class="text-gray-300 hover:text-gold-400 transition-colors">Services</a></li>
                        <li><a href="/founder" class="text-gray-300 hover:text-gold-400 transition-colors">Founder</a></li>
                        <li><a href="/contact" class="text-gray-300 hover:text-gold-400 transition-colors">Contact</a></li>
                    </ul>
                </div>
                
                <!-- Contact Info -->
                <div>
                    <h4 class="text-lg font-semibold mb-4">Get in Touch</h4>
                    <div class="space-y-2 text-gray-300">
                        <p><i class="fas fa-envelope mr-2"></i> hello@ctsconsulting.com</p>
                        <p><i class="fas fa-phone mr-2"></i> (585) 905-1772</p>
                        <p><i class="fas fa-map-marker-alt mr-2"></i> Rochester, NY</p>
                    </div>
                </div>
            </div>
            
            <div class="border-t border-gray-800 mt-8 pt-8 text-center">
                <p class="text-gray-400">
                    &copy; 2024 CTS Consulting. All rights reserved. | LLI Framework™ is a trademark of CTS Consulting.
                </p>
            </div>
        </div>
    </footer>

    <!-- Scripts -->
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"><\/script>
    <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"><\/script>
    <script src="/static/app.js"><\/script>
</body>
</html>
  `}const z=new vt;z.use("/api/*",ea());z.use("/static/*",ca({root:"./public"}));z.get("/api/contact",e=>e.json({message:"Contact endpoint ready"}));z.post("/api/contact",async e=>{try{const{name:t,email:a,organization:s,industry:i,message:l,service:r}=await e.req.json();return e.json({success:!0,message:"Thank you for your message! We will get back to you soon.",data:{name:t,email:a,organization:s,industry:i,service:r}})}catch{return e.json({success:!1,message:"Failed to process your message"},400)}});z.get("/",e=>e.html(ee({children:`
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
        <!-- Background -->
        <div class="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900"></div>
        <div class="absolute inset-0 bg-black bg-opacity-30"></div>
        
        <!-- Animated background elements -->
        <div class="absolute inset-0 overflow-hidden">
            <div class="floating-shape w-64 h-64 bg-gold-500 bg-opacity-10 rounded-full absolute top-1/4 left-1/4 animate-pulse"></div>
            <div class="floating-shape w-32 h-32 bg-accent-500 bg-opacity-20 rounded-full absolute bottom-1/4 right-1/4 animate-bounce"></div>
            <div class="floating-shape w-48 h-48 bg-primary-400 bg-opacity-15 rounded-full absolute top-3/4 left-1/2 animate-ping"></div>
        </div>
        
        <!-- Content -->
        <div class="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
            <div data-aos="fade-up" data-aos-duration="1000">
                <h1 class="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 font-playfair leading-tight">
                    Transform Your 
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
                        Organization
                    </span>
                </h1>
            </div>
            
            <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                <p class="text-xl sm:text-2xl text-gray-200 mb-8 leading-relaxed">
                    Build safe, equitable cultures with the <strong class="text-gold-400">LLI Framework™</strong><br>
                    From insight to impact — with real strategy, accountability, and outcomes.
                </p>
            </div>
            
            <div data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000" class="space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center">
                <a href="/assessment" class="inline-block bg-gradient-to-r from-gold-500 to-gold-600 text-black px-8 py-4 rounded-full font-semibold text-lg hover:from-gold-400 hover:to-gold-500 transform hover:scale-105 transition-all duration-300 shadow-lg">
                    <i class="fas fa-chart-line mr-2"></i>
                    Take Free Assessment
                </a>
                <a href="/contact" class="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary-900 transition-all duration-300">
                    <i class="fas fa-rocket mr-2"></i>
                    Start Your Transformation
                </a>
            </div>
            
            <!-- Animated Key Stats -->
            <div data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000" class="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div class="text-center">
                    <div class="stat-number text-4xl font-bold text-gold-400 mb-2" data-target="500" data-suffix="+">0+</div>
                    <div class="text-gray-300">Leaders Transformed</div>
                </div>
                <div class="text-center">
                    <div class="stat-number text-4xl font-bold text-gold-400 mb-2" data-target="95" data-suffix="%">0%</div>
                    <div class="text-gray-300">Client Satisfaction</div>
                </div>
                <div class="text-center">
                    <div class="stat-number text-4xl font-bold text-gold-400 mb-2" data-target="15" data-suffix="+">0+</div>
                    <div class="text-gray-300">Years Experience</div>
                </div>
                <div class="text-center">
                    <div class="stat-number text-4xl font-bold text-gold-400 mb-2" data-target="3" data-suffix="x">0x</div>
                    <div class="text-gray-300">Faster Results</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Featured Success Images Gallery -->
    <section class="py-16 bg-white">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12" data-aos="fade-up">
                <h2 class="text-3xl font-bold text-gray-900 mb-6 font-playfair">Real Transformation in Action</h2>
                
                <!-- Main Featured Image -->
                <div class="relative rounded-2xl overflow-hidden shadow-2xl mb-8">
                    <img 
                        src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&q=80" 
                        alt="Diverse team of professionals collaborating in modern office environment"
                        class="w-full h-80 object-contain bg-gray-50"
                        loading="lazy"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div class="absolute bottom-8 left-8 text-white">
                        <h3 class="text-2xl font-bold mb-2">Real People, Real Transformation</h3>
                        <p class="text-lg opacity-90">Empowering diverse teams through the LLI Framework™</p>
                    </div>
                </div>
                
                <!-- Image Grid -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="relative rounded-xl overflow-hidden shadow-lg image-hover">
                        <img 
                            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80" 
                            alt="Professional woman in business meeting discussing equity strategies"
                            class="w-full h-48 object-cover"
                            loading="lazy"
                        />
                        <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div class="absolute bottom-4 left-4 text-white">
                            <h4 class="font-semibold">Leadership Coaching</h4>
                        </div>
                    </div>
                    
                    <div class="relative rounded-xl overflow-hidden shadow-lg image-hover">
                        <img 
                            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80" 
                            alt="Diverse team collaboration and strategic planning session"
                            class="w-full h-48 object-cover"
                            loading="lazy"
                        />
                        <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div class="absolute bottom-4 left-4 text-white">
                            <h4 class="font-semibold">Team Development</h4>
                        </div>
                    </div>
                    
                    <div class="relative rounded-xl overflow-hidden shadow-lg image-hover">
                        <img 
                            src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&q=80" 
                            alt="Organizational culture and workplace equity transformation"
                            class="w-full h-48 object-cover"
                            loading="lazy"
                        />
                        <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div class="absolute bottom-4 left-4 text-white">
                            <h4 class="font-semibold">Culture Change</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- People & Stories Section -->
    <section class="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16" data-aos="fade-up">
                <h2 class="text-4xl font-bold text-gray-900 mb-6 font-playfair">The Faces Behind Transformation</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Meet the people who make organizational change possible - from executives to team members, everyone plays a vital role
                </p>
            </div>
            
            <!-- People Gallery -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                <!-- Executive Leader -->
                <div class="relative rounded-2xl overflow-hidden shadow-xl image-hover" data-aos="fade-up" data-aos-delay="100">
                    <img 
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80" 
                        alt="Professional executive leader implementing equity strategies"
                        class="w-full h-64 object-cover"
                        loading="lazy"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div class="absolute bottom-6 left-6 text-white">
                        <h4 class="text-xl font-bold mb-2">Executive Leadership</h4>
                        <p class="text-sm opacity-90">"The LLI Framework changed how we approach culture transformation."</p>
                        <div class="mt-3 flex items-center">
                            <div class="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                            <span class="text-xs">Fortune 500 CEO</span>
                        </div>
                    </div>
                </div>
                
                <!-- Team Collaborator -->
                <div class="relative rounded-2xl overflow-hidden shadow-xl image-hover" data-aos="fade-up" data-aos-delay="200">
                    <img 
                        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&q=80" 
                        alt="Diverse team member participating in workshop"
                        class="w-full h-64 object-cover"
                        loading="lazy"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div class="absolute bottom-6 left-6 text-white">
                        <h4 class="text-xl font-bold mb-2">Team Innovation</h4>
                        <p class="text-sm opacity-90">"I finally feel heard and valued in our workplace."</p>
                        <div class="mt-3 flex items-center">
                            <div class="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                            <span class="text-xs">Product Manager</span>
                        </div>
                    </div>
                </div>
                
                <!-- Diverse Team -->
                <div class="relative rounded-2xl overflow-hidden shadow-xl image-hover" data-aos="fade-up" data-aos-delay="300">
                    <img 
                        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&q=80" 
                        alt="Diverse team of professionals working together in collaborative space"
                        class="w-full h-64 object-cover"
                        loading="lazy"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div class="absolute bottom-6 left-6 text-white">
                        <h4 class="text-xl font-bold mb-2">Collaborative Culture</h4>
                        <p class="text-sm opacity-90">"Our team dynamics have completely transformed."</p>
                        <div class="mt-3 flex items-center">
                            <div class="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                            <span class="text-xs">Development Team</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Portrait Grid -->
            <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4" data-aos="fade-up">
                <div class="relative rounded-xl overflow-hidden shadow-lg image-hover">
                    <img 
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80" 
                        alt="Professional woman executive leader"
                        class="w-full h-32 object-cover"
                        loading="lazy"
                    />
                    <div class="absolute inset-0 bg-black/20"></div>
                </div>
                
                <div class="relative rounded-xl overflow-hidden shadow-lg image-hover">
                    <img 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80" 
                        alt="Professional man business leader"
                        class="w-full h-32 object-cover"
                        loading="lazy"
                    />
                    <div class="absolute inset-0 bg-black/20"></div>
                </div>
                
                <div class="relative rounded-xl overflow-hidden shadow-lg image-hover">
                    <img 
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80" 
                        alt="Professional businesswoman in meeting"
                        class="w-full h-32 object-cover"
                        loading="lazy"
                    />
                    <div class="absolute inset-0 bg-black/20"></div>
                </div>
                
                <div class="relative rounded-xl overflow-hidden shadow-lg image-hover">
                    <img 
                        src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=200&q=80" 
                        alt="Professional man team leader"
                        class="w-full h-32 object-cover"
                        loading="lazy"
                    />
                    <div class="absolute inset-0 bg-black/20"></div>
                </div>
                
                <div class="relative rounded-xl overflow-hidden shadow-lg image-hover">
                    <img 
                        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=200&q=80" 
                        alt="Young professional woman consultant"
                        class="w-full h-32 object-cover"
                        loading="lazy"
                    />
                    <div class="absolute inset-0 bg-black/20"></div>
                </div>
                
                <div class="relative rounded-xl overflow-hidden shadow-lg image-hover">
                    <img 
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&q=80" 
                        alt="Professional businessman consultant"
                        class="w-full h-32 object-cover"
                        loading="lazy"
                    />
                    <div class="absolute inset-0 bg-black/20"></div>
                </div>
            </div>
        </div>
    </section>

    <!-- Additional Success Stories with Full Images -->
    <section class="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12" data-aos="fade-up">
                <h2 class="text-3xl font-bold text-gray-900 mb-6 font-playfair">Our Expertise in Action</h2>
                <p class="text-lg text-gray-600 max-w-3xl mx-auto">
                    From boardrooms to team meetings, see how we create lasting transformation
                </p>
            </div>
            
            <!-- Large Image Showcase Grid -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <!-- Consulting Excellence -->
                <div class="relative rounded-2xl overflow-hidden shadow-xl image-hover" data-aos="fade-right">
                    <img 
                        src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=600&q=80" 
                        alt="Executive consulting and strategic leadership development"
                        class="w-full h-72 object-contain bg-white"
                        loading="lazy"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div class="absolute bottom-6 left-6 text-white">
                        <h3 class="text-2xl font-bold mb-2">Executive Consulting</h3>
                        <p class="text-lg opacity-90">Strategic leadership transformation at the highest levels</p>
                        <div class="mt-3 flex items-center">
                            <div class="flex space-x-1">
                                <i class="fas fa-star text-gold-400"></i>
                                <i class="fas fa-star text-gold-400"></i>
                                <i class="fas fa-star text-gold-400"></i>
                                <i class="fas fa-star text-gold-400"></i>
                                <i class="fas fa-star text-gold-400"></i>
                            </div>
                            <span class="ml-2 text-sm">Certified Excellence</span>
                        </div>
                    </div>
                </div>
                
                <!-- Team Development -->
                <div class="relative rounded-2xl overflow-hidden shadow-xl image-hover" data-aos="fade-left">
                    <img 
                        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80" 
                        alt="Team development and collaborative workplace culture"
                        class="w-full h-72 object-contain bg-white"
                        loading="lazy"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div class="absolute bottom-6 left-6 text-white">
                        <h3 class="text-2xl font-bold mb-2">Team Development</h3>
                        <p class="text-lg opacity-90">Building high-performing, inclusive teams</p>
                        <div class="mt-3 flex items-center">
                            <span class="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                98% Success Rate
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Smaller Image Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6" data-aos="fade-up">
                <div class="relative rounded-xl overflow-hidden shadow-lg image-hover">
                    <img 
                        src="https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=300&q=80" 
                        alt="Workshop facilitation and training sessions"
                        class="w-full h-48 object-contain bg-gray-50"
                        loading="lazy"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div class="absolute bottom-4 left-4 text-white">
                        <h5 class="font-semibold">Workshops</h5>
                        <p class="text-xs opacity-90">Interactive Training</p>
                    </div>
                </div>
                
                <div class="relative rounded-xl overflow-hidden shadow-lg image-hover">
                    <img 
                        src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=300&q=80" 
                        alt="Individual coaching and mentorship programs"
                        class="w-full h-48 object-contain bg-gray-50"
                        loading="lazy"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div class="absolute bottom-4 left-4 text-white">
                        <h5 class="font-semibold">Coaching</h5>
                        <p class="text-xs opacity-90">Personal Development</p>
                    </div>
                </div>
                
                <div class="relative rounded-xl overflow-hidden shadow-lg image-hover">
                    <img 
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&q=80" 
                        alt="Strategic planning and organizational assessment"
                        class="w-full h-48 object-contain bg-gray-50"
                        loading="lazy"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div class="absolute bottom-4 left-4 text-white">
                        <h5 class="font-semibold">Strategy</h5>
                        <p class="text-xs opacity-90">Planning & Assessment</p>
                    </div>
                </div>
                
                <div class="relative rounded-xl overflow-hidden shadow-lg image-hover">
                    <img 
                        src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=300&q=80" 
                        alt="Culture transformation and organizational change"
                        class="w-full h-48 object-contain bg-gray-50"
                        loading="lazy"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div class="absolute bottom-4 left-4 text-white">
                        <h5 class="font-semibold">Culture</h5>
                        <p class="text-xs opacity-90">Transformation</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Quick Overview -->
    <section class="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <!-- Content -->
                <div data-aos="fade-right">
                    <h2 class="text-4xl font-bold text-gray-900 mb-6 font-playfair">Why Choose CTS Consulting?</h2>
                    <div class="space-y-6">
                        <div class="flex items-start">
                            <div class="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                <i class="fas fa-award text-white text-xl"></i>
                            </div>
                            <div>
                                <h3 class="text-xl font-semibold text-gray-900 mb-2">Proven LLI Framework™</h3>
                                <p class="text-gray-600">Our signature Listen → Learn → Implement methodology delivers measurable, sustainable change.</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start">
                            <div class="w-12 h-12 bg-gradient-to-r from-gold-500 to-gold-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                <i class="fas fa-users text-white text-xl"></i>
                            </div>
                            <div>
                                <h3 class="text-xl font-semibold text-gray-900 mb-2">15+ Years Experience</h3>
                                <p class="text-gray-600">Deep expertise in organizational transformation, leadership development, and equity strategy.</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start">
                            <div class="w-12 h-12 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                <i class="fas fa-heart text-white text-xl"></i>
                            </div>
                            <div>
                                <h3 class="text-xl font-semibold text-gray-900 mb-2">Holistic Approach</h3>
                                <p class="text-gray-600">Strategy with soul — rooted in values, guided by data, committed to lasting transformation.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mt-8 space-x-4">
                        <a href="/about" class="inline-block bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                            Learn More About Us
                        </a>
                        <a href="/framework" class="inline-block bg-transparent border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all">
                            Explore LLI Framework™
                        </a>
                    </div>
                </div>
                
                <!-- Images Stack -->
                <div data-aos="fade-left">
                    <div class="relative">
                        <!-- Main Image -->
                        <img 
                            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80" 
                            alt="Diversity, equity, inclusion and belonging workplace transformation"
                            class="w-full h-96 object-contain bg-white rounded-2xl shadow-xl"
                            loading="lazy"
                        />
                        <div class="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-lg">
                            <div class="text-center">
                                <div class="text-3xl font-bold text-primary-600 mb-1">95%</div>
                                <div class="text-sm text-gray-600">Success Rate</div>
                            </div>
                        </div>
                        
                        <!-- Small overlay images -->
                        <div class="absolute -top-6 -left-6 w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
                            <img 
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" 
                                alt="African American professional consultant headshot"
                                class="w-full h-full object-cover bg-gray-100"
                                loading="lazy"
                            />
                        </div>
                        
                        <div class="absolute -bottom-2 -left-6 w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
                            <img 
                                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80" 
                                alt="African American diverse leadership team member"
                                class="w-full h-full object-cover bg-gray-100"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Professional Portfolio Gallery -->
    <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16" data-aos="fade-up">
                <h2 class="text-4xl font-bold text-gray-900 mb-6 font-playfair">Professional Excellence Portfolio</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Showcasing our comprehensive approach to organizational transformation
                </p>
            </div>
            
            <!-- Hero Image Grid -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                <!-- Leadership Training -->
                <div class="lg:col-span-2">
                    <div class="relative rounded-2xl overflow-hidden shadow-2xl image-hover h-80" data-aos="fade-right">
                        <img 
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80" 
                            alt="Executive leadership team in strategic planning meeting"
                            class="w-full h-full object-contain bg-gray-50"
                            loading="lazy"
                        />
                        <div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>
                        <div class="absolute bottom-8 left-8 text-white max-w-md">
                            <h3 class="text-3xl font-bold mb-3">Leadership Excellence</h3>
                            <p class="text-lg opacity-90 mb-4">Transforming executive teams through strategic coaching and development</p>
                            <div class="flex items-center space-x-4">
                                <span class="bg-gold-500 text-black px-4 py-2 rounded-full text-sm font-semibold">
                                    500+ Leaders Trained
                                </span>
                                <span class="text-gold-400 font-semibold">97% Success Rate</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Statistics Card -->
                <div class="space-y-4" data-aos="fade-left">
                    <div class="bg-gradient-to-br from-primary-500 to-primary-600 p-8 rounded-2xl text-white">
                        <h4 class="text-2xl font-bold mb-4">Impact Statistics</h4>
                        <div class="space-y-4">
                            <div class="flex justify-between items-center">
                                <span>Client Retention</span>
                                <span class="text-2xl font-bold text-gold-400">98%</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span>Avg. Improvement</span>
                                <span class="text-2xl font-bold text-gold-400">85%</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span>Project Success</span>
                                <span class="text-2xl font-bold text-gold-400">97%</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="relative rounded-xl overflow-hidden shadow-xl image-hover">
                        <img 
                            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&q=80" 
                            alt="Team workshop and collaborative training session"
                            class="w-full h-40 object-contain bg-gray-50"
                            loading="lazy"
                        />
                        <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <div class="text-center text-white">
                                <h5 class="font-bold text-lg">Team Workshops</h5>
                                <p class="text-sm opacity-90">Interactive & Engaging</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Services Showcase -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6" data-aos="fade-up">
                <div class="relative group">
                    <div class="relative rounded-xl overflow-hidden shadow-lg image-hover">
                        <img 
                            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=300&q=80" 
                            alt="Strategic consulting and business planning"
                            class="w-full h-32 object-contain bg-gradient-to-br from-blue-50 to-white"
                            loading="lazy"
                        />
                        <div class="absolute inset-0 bg-primary-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <div class="text-center text-white">
                                <i class="fas fa-chart-line text-2xl mb-2"></i>
                                <p class="font-semibold">Strategic Planning</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="relative group">
                    <div class="relative rounded-xl overflow-hidden shadow-lg image-hover">
                        <img 
                            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80" 
                            alt="Executive coaching and leadership mentorship"
                            class="w-full h-32 object-contain bg-gradient-to-br from-purple-50 to-white"
                            loading="lazy"
                        />
                        <div class="absolute inset-0 bg-accent-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <div class="text-center text-white">
                                <i class="fas fa-user-tie text-2xl mb-2"></i>
                                <p class="font-semibold">Executive Coaching</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="relative group">
                    <div class="relative rounded-xl overflow-hidden shadow-lg image-hover">
                        <img 
                            src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&q=80" 
                            alt="Cultural transformation and organizational development"
                            class="w-full h-32 object-contain bg-gradient-to-br from-green-50 to-white"
                            loading="lazy"
                        />
                        <div class="absolute inset-0 bg-green-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <div class="text-center text-white">
                                <i class="fas fa-seedling text-2xl mb-2"></i>
                                <p class="font-semibold">Culture Change</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="relative group">
                    <div class="relative rounded-xl overflow-hidden shadow-lg image-hover">
                        <img 
                            src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=300&q=80" 
                            alt="Assessment tools and organizational analysis"
                            class="w-full h-32 object-contain bg-gradient-to-br from-orange-50 to-white"
                            loading="lazy"
                        />
                        <div class="absolute inset-0 bg-gold-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <div class="text-center text-white">
                                <i class="fas fa-clipboard-check text-2xl mb-2"></i>
                                <p class="font-semibold">Assessments</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Call to Action -->
    <section class="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900 text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div data-aos="fade-up" data-aos-duration="1000">
                <h2 class="text-4xl sm:text-5xl font-bold mb-6 font-playfair">
                    Ready to Transform Your Organization?
                </h2>
                <p class="text-xl text-gray-200 mb-8 leading-relaxed">
                    Take our free assessment to discover where your organization stands today and get personalized recommendations for your equity journey.
                </p>
                <div class="space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center">
                    <a href="/assessment" class="inline-block bg-gradient-to-r from-gold-500 to-gold-600 text-black px-8 py-4 rounded-full font-semibold text-lg hover:from-gold-400 hover:to-gold-500 transform hover:scale-105 transition-all duration-300 shadow-lg">
                        <i class="fas fa-chart-line mr-2"></i>
                        Take Free Assessment
                    </a>
                    <a href="/contact" class="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary-900 transition-all duration-300">
                        <i class="fas fa-calendar mr-2"></i>
                        Schedule Consultation
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Diverse Leadership Spotlight -->
    <section class="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16" data-aos="fade-up">
                <h2 class="text-4xl font-bold text-gray-900 mb-6 font-playfair">Celebrating Diverse Leadership</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Empowering leaders from all backgrounds to drive meaningful organizational change
                </p>
            </div>
            
            <!-- Leadership Gallery -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                <div class="relative group" data-aos="fade-up" data-aos-delay="100">
                    <div class="relative rounded-2xl overflow-hidden shadow-xl image-hover">
                        <img 
                            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80" 
                            alt="Executive woman leader"
                            class="w-full h-80 object-cover"
                            loading="lazy"
                        />
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div class="absolute bottom-6 left-6 text-white">
                            <h4 class="text-lg font-bold mb-1">Executive Excellence</h4>
                            <p class="text-sm opacity-90">Leading with purpose</p>
                        </div>
                        <div class="absolute top-4 right-4">
                            <div class="bg-gold-500 text-black px-3 py-1 rounded-full text-xs font-semibold">
                                CEO
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="relative group" data-aos="fade-up" data-aos-delay="200">
                    <div class="relative rounded-2xl overflow-hidden shadow-xl image-hover">
                        <img 
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80" 
                            alt="Professional man in leadership role"
                            class="w-full h-80 object-cover"
                            loading="lazy"
                        />
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div class="absolute bottom-6 left-6 text-white">
                            <h4 class="text-lg font-bold mb-1">Strategic Vision</h4>
                            <p class="text-sm opacity-90">Innovative thinking</p>
                        </div>
                        <div class="absolute top-4 right-4">
                            <div class="bg-primary-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                CTO
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="relative group" data-aos="fade-up" data-aos-delay="300">
                    <div class="relative rounded-2xl overflow-hidden shadow-xl image-hover">
                        <img 
                            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&q=80" 
                            alt="Young professional woman"
                            class="w-full h-80 object-cover"
                            loading="lazy"
                        />
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div class="absolute bottom-6 left-6 text-white">
                            <h4 class="text-lg font-bold mb-1">Rising Leader</h4>
                            <p class="text-sm opacity-90">Future focused</p>
                        </div>
                        <div class="absolute top-4 right-4">
                            <div class="bg-accent-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                VP
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="relative group" data-aos="fade-up" data-aos-delay="400">
                    <div class="relative rounded-2xl overflow-hidden shadow-xl image-hover">
                        <img 
                            src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=300&q=80" 
                            alt="Professional man executive"
                            class="w-full h-80 object-cover"
                            loading="lazy"
                        />
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div class="absolute bottom-6 left-6 text-white">
                            <h4 class="text-lg font-bold mb-1">Transformational</h4>
                            <p class="text-sm opacity-90">Change catalyst</p>
                        </div>
                        <div class="absolute top-4 right-4">
                            <div class="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                COO
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Success Metrics -->
            <div class="bg-white rounded-2xl p-8 shadow-lg" data-aos="fade-up">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div>
                        <div class="text-4xl font-bold text-primary-600 mb-2">85%</div>
                        <div class="text-gray-600">Leadership diversity increase</div>
                    </div>
                    <div>
                        <div class="text-4xl font-bold text-gold-600 mb-2">92%</div>
                        <div class="text-gray-600">Employee engagement improvement</div>
                    </div>
                    <div>
                        <div class="text-4xl font-bold text-accent-600 mb-2">500+</div>
                        <div class="text-gray-600">Leaders developed</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Client Success Stories with Images -->
    <section class="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16" data-aos="fade-up">
                <h2 class="text-4xl font-bold text-white mb-6 font-playfair">Transformations That Inspire</h2>
                <p class="text-xl text-gray-300 max-w-3xl mx-auto">
                    See how organizations like yours have achieved remarkable results with our proven approach
                </p>
            </div>
            
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                <!-- Success Story 1 -->
                <div data-aos="fade-right">
                    <div class="relative rounded-2xl overflow-hidden shadow-2xl">
                        <img 
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80" 
                            alt="Corporate boardroom transformation and leadership development"
                            class="w-full h-64 object-cover"
                            loading="lazy"
                        />
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        <div class="absolute bottom-6 left-6 text-white">
                            <h3 class="text-2xl font-bold mb-2">Fortune 500 Transformation</h3>
                            <p class="text-lg opacity-90">85% improvement in leadership inclusivity scores</p>
                        </div>
                    </div>
                </div>
                
                <div data-aos="fade-left">
                    <div class="text-white space-y-6">
                        <div class="flex items-center space-x-4">
                            <div class="w-16 h-16 bg-gradient-to-r from-gold-500 to-gold-600 rounded-full flex items-center justify-center flex-shrink-0">
                                <i class="fas fa-trophy text-white text-2xl"></i>
                            </div>
                            <div>
                                <h4 class="text-xl font-semibold mb-1">Award-Winning Culture</h4>
                                <p class="text-gray-300">Recognized as "Best Place to Work" after our engagement</p>
                            </div>
                        </div>
                        <div class="flex items-center space-x-4">
                            <div class="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                                <i class="fas fa-chart-line text-white text-2xl"></i>
                            </div>
                            <div>
                                <h4 class="text-xl font-semibold mb-1">Measurable Results</h4>
                                <p class="text-gray-300">40% increase in employee engagement within 12 months</p>
                            </div>
                        </div>
                        <div class="flex items-center space-x-4">
                            <div class="w-16 h-16 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full flex items-center justify-center flex-shrink-0">
                                <i class="fas fa-users text-white text-2xl"></i>
                            </div>
                            <div>
                                <h4 class="text-xl font-semibold mb-1">Leadership Excellence</h4>
                                <p class="text-gray-300">95% of leaders completed advanced equity training</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Image Gallery -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-aos="fade-up">
                <div class="relative rounded-xl overflow-hidden shadow-lg image-hover">
                    <img 
                        src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=300&q=80" 
                        alt="Team collaboration and diversity training session"
                        class="w-full h-48 object-cover"
                        loading="lazy"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div class="absolute bottom-4 left-4 text-white">
                        <h5 class="font-semibold">Workshop Excellence</h5>
                        <p class="text-sm opacity-90">Interactive Learning</p>
                    </div>
                </div>
                
                <div class="relative rounded-xl overflow-hidden shadow-lg image-hover">
                    <img 
                        src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=300&q=80" 
                        alt="Executive coaching and leadership development session"
                        class="w-full h-48 object-cover"
                        loading="lazy"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div class="absolute bottom-4 left-4 text-white">
                        <h5 class="font-semibold">Executive Coaching</h5>
                        <p class="text-sm opacity-90">1-on-1 Development</p>
                    </div>
                </div>
                
                <div class="relative rounded-xl overflow-hidden shadow-lg image-hover">
                    <img 
                        src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=300&q=80" 
                        alt="Workplace culture assessment and strategic planning"
                        class="w-full h-48 object-cover"
                        loading="lazy"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div class="absolute bottom-4 left-4 text-white">
                        <h5 class="font-semibold">Culture Assessment</h5>
                        <p class="text-sm opacity-90">Data-Driven Insights</p>
                    </div>
                </div>
                
                <div class="relative rounded-xl overflow-hidden shadow-lg image-hover">
                    <img 
                        src="https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=300&q=80" 
                        alt="Team building and organizational development activities"
                        class="w-full h-48 object-cover"
                        loading="lazy"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div class="absolute bottom-4 left-4 text-white">
                        <h5 class="font-semibold">Team Building</h5>
                        <p class="text-sm opacity-90">Stronger Connections</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  `,title:"Equity Strategy & Transformation",currentPage:"home"})));z.get("/about",e=>e.html(ee({children:`
    <!-- Page Header -->
    <section class="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900 text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 class="text-5xl sm:text-6xl font-bold mb-6 font-playfair">About CTS Consulting</h1>
            <p class="text-xl text-gray-200 leading-relaxed">
                Building a world where equity is not just a value — it's an outcome.
            </p>
        </div>
    </section>

    <!-- Vision & Mission -->
    <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <!-- Vision -->
                <div data-aos="fade-right" data-aos-duration="1000">
                    <div class="bg-gradient-to-br from-primary-50 to-accent-50 p-8 rounded-2xl shadow-lg">
                        <div class="flex items-center mb-6">
                            <div class="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mr-4">
                                <i class="fas fa-eye text-white text-xl"></i>
                            </div>
                            <h3 class="text-2xl font-bold text-gray-900 font-playfair">Our Vision</h3>
                        </div>
                        <p class="text-lg text-gray-700 leading-relaxed">
                            To build a world where equity is not just a value — it's an outcome. 
                            Where leaders lead with integrity, teams feel safe, and communities feel heard.
                        </p>
                    </div>
                </div>
                
                <!-- Image Stack -->
                <div data-aos="fade-left" data-aos-duration="1000">
                    <div class="relative">
                        <img 
                            src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=600&q=80" 
                            alt="Building diverse and inclusive workspaces"
                            class="w-full h-80 object-contain bg-gray-50 rounded-2xl shadow-xl"
                            loading="lazy"
                        />
                        <!-- Overlaid smaller images -->
                        <div class="absolute -bottom-8 -right-8 grid grid-cols-2 gap-2">
                            <img 
                                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=150&q=80" 
                                alt="Professional team meeting diverse perspectives"
                                class="w-16 h-16 object-cover rounded-lg shadow-lg border-2 border-white"
                                loading="lazy"
                            />
                            <img 
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&q=80" 
                                alt="Leadership coaching and mentorship"
                                class="w-16 h-16 object-cover rounded-lg shadow-lg border-2 border-white"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Our Values -->
    <section class="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16" data-aos="fade-up">
                <h2 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 font-playfair">Our Core Values</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    These values guide every interaction, strategy, and outcome we create together.
                </p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow" data-aos="fade-up" data-aos-delay="100">
                    <div class="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-balance-scale text-white text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-4 text-center">Equity without ego</h3>
                    <p class="text-gray-600 text-center">Putting outcomes before recognition, focusing on sustainable change rather than performative actions.</p>
                </div>
                
                <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow" data-aos="fade-up" data-aos-delay="200">
                    <div class="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-ear-listen text-white text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-4 text-center">Listening before leading</h3>
                    <p class="text-gray-600 text-center">Understanding diverse perspectives and experiences before developing strategies and solutions.</p>
                </div>
                
                <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow" data-aos="fade-up" data-aos-delay="300">
                    <div class="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-heart text-white text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-4 text-center">Wellness is a right</h3>
                    <p class="text-gray-600 text-center">Supporting whole-person wellbeing as fundamental to creating thriving, equitable organizations.</p>
                </div>
                
                <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow" data-aos="fade-up" data-aos-delay="400">
                    <div class="w-16 h-16 bg-gold-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-shield-alt text-white text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-4 text-center">Safety is a strategy</h3>
                    <p class="text-gray-600 text-center">Creating psychological safety by design, not by accident, in every organizational system.</p>
                </div>
                
                <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow" data-aos="fade-up" data-aos-delay="500">
                    <div class="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-compass text-white text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-4 text-center">Truth is our guide</h3>
                    <p class="text-gray-600 text-center">Data-driven, authentic approaches that address root causes, not just symptoms.</p>
                </div>
                
                <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow" data-aos="fade-up" data-aos-delay="600">
                    <div class="w-16 h-16 bg-accent-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-hands-helping text-white text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-4 text-center">Collaboration over control</h3>
                    <p class="text-gray-600 text-center">Co-creating solutions with stakeholders rather than imposing external fixes.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Our Approach -->
    <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div data-aos="fade-right">
                    <div class="space-y-4">
                        <!-- Main transformation image -->
                        <img 
                            src="https://images.unsplash.com/photo-1600880292630-53c7234d3bd0?w=600&q=80" 
                            alt="Organizational transformation process methodology"
                            class="w-full h-64 object-contain bg-gray-50 rounded-2xl shadow-xl"
                            loading="lazy"
                        />
                        
                        <!-- Process images grid -->
                        <div class="grid grid-cols-3 gap-3">
                            <div class="relative rounded-lg overflow-hidden shadow-lg image-hover">
                                <img 
                                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=200&q=80" 
                                    alt="Team listening and collaboration session"
                                    class="w-full h-20 object-cover"
                                    loading="lazy"
                                />
                                <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                                    <span class="text-white text-xs font-semibold">Listen</span>
                                </div>
                            </div>
                            
                            <div class="relative rounded-lg overflow-hidden shadow-lg image-hover">
                                <img 
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&q=80" 
                                    alt="Strategic learning and development"
                                    class="w-full h-20 object-cover"
                                    loading="lazy"
                                />
                                <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                                    <span class="text-white text-xs font-semibold">Learn</span>
                                </div>
                            </div>
                            
                            <div class="relative rounded-lg overflow-hidden shadow-lg image-hover">
                                <img 
                                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=200&q=80" 
                                    alt="Implementation and action planning"
                                    class="w-full h-20 object-cover"
                                    loading="lazy"
                                />
                                <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                                    <span class="text-white text-xs font-semibold">Implement</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div data-aos="fade-left">
                    <h2 class="text-4xl font-bold text-gray-900 mb-6 font-playfair">Our Approach is Different</h2>
                    <div class="space-y-6">
                        <div class="flex items-start">
                            <i class="fas fa-check-circle text-primary-500 text-xl mr-4 mt-1"></i>
                            <div>
                                <h3 class="text-lg font-semibold text-gray-900 mb-2">Intentional, Not Performative</h3>
                                <p class="text-gray-600">Every strategy is designed for concrete, measurable shifts that create lasting change.</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start">
                            <i class="fas fa-check-circle text-primary-500 text-xl mr-4 mt-1"></i>
                            <div>
                                <h3 class="text-lg font-semibold text-gray-900 mb-2">Systems-Level Focus</h3>
                                <p class="text-gray-600">We move beyond "diversity days" to embed equity into organizational DNA.</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start">
                            <i class="fas fa-check-circle text-primary-500 text-xl mr-4 mt-1"></i>
                            <div>
                                <h3 class="text-lg font-semibold text-gray-900 mb-2">Data-Driven Outcomes</h3>
                                <p class="text-gray-600">Real strategy, real accountability, and real outcomes that you can measure and sustain.</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start">
                            <i class="fas fa-check-circle text-primary-500 text-xl mr-4 mt-1"></i>
                            <div>
                                <h3 class="text-lg font-semibold text-gray-900 mb-2">Holistic Transformation</h3>
                                <p class="text-gray-600">Strategy with soul — blending analytical rigor with authentic human connection.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Our Impact Gallery -->
    <section class="py-20 bg-gradient-to-br from-gray-900 via-primary-900 to-accent-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16" data-aos="fade-up">
                <h2 class="text-4xl font-bold text-white mb-6 font-playfair">Our Impact in Action</h2>
                <p class="text-xl text-gray-300 max-w-3xl mx-auto">
                    Witness the transformation happening in organizations worldwide
                </p>
            </div>
            
            <!-- Impact Stories Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                <div class="relative rounded-2xl overflow-hidden shadow-2xl image-hover" data-aos="fade-up" data-aos-delay="100">
                    <img 
                        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80" 
                        alt="Executive leadership team implementing equity strategies"
                        class="w-full h-64 object-cover"
                        loading="lazy"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div class="absolute bottom-6 left-6 text-white">
                        <h4 class="text-xl font-bold mb-2">Leadership Excellence</h4>
                        <p class="text-sm opacity-90">C-Suite Transformation</p>
                        <div class="mt-2 flex items-center">
                            <span class="text-gold-400 font-bold text-lg">92%</span>
                            <span class="text-sm ml-2">Improvement Rate</span>
                        </div>
                    </div>
                </div>
                
                <div class="relative rounded-2xl overflow-hidden shadow-2xl image-hover" data-aos="fade-up" data-aos-delay="200">
                    <img 
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80" 
                        alt="Diverse team collaboration and psychological safety"
                        class="w-full h-64 object-cover"
                        loading="lazy"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div class="absolute bottom-6 left-6 text-white">
                        <h4 class="text-xl font-bold mb-2">Team Dynamics</h4>
                        <p class="text-sm opacity-90">Psychological Safety</p>
                        <div class="mt-2 flex items-center">
                            <span class="text-gold-400 font-bold text-lg">89%</span>
                            <span class="text-sm ml-2">Safety Increase</span>
                        </div>
                    </div>
                </div>
                
                <div class="relative rounded-2xl overflow-hidden shadow-2xl image-hover" data-aos="fade-up" data-aos-delay="300">
                    <img 
                        src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&q=80" 
                        alt="Organizational culture transformation and workplace equity"
                        class="w-full h-64 object-cover"
                        loading="lazy"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div class="absolute bottom-6 left-6 text-white">
                        <h4 class="text-xl font-bold mb-2">Culture Shift</h4>
                        <p class="text-sm opacity-90">Organizational Change</p>
                        <div class="mt-2 flex items-center">
                            <span class="text-gold-400 font-bold text-lg">96%</span>
                            <span class="text-sm ml-2">Engagement Score</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Awards and Recognition -->
            <div class="text-center" data-aos="fade-up">
                <h3 class="text-2xl font-bold text-white mb-8">Recognition & Awards</h3>
                <div class="flex flex-wrap justify-center items-center gap-8 opacity-80">
                    <div class="flex items-center space-x-3">
                        <i class="fas fa-trophy text-gold-400 text-2xl"></i>
                        <span class="text-white">Best Consulting Firm 2024</span>
                    </div>
                    <div class="flex items-center space-x-3">
                        <i class="fas fa-star text-gold-400 text-2xl"></i>
                        <span class="text-white">Excellence in DEI</span>
                    </div>
                    <div class="flex items-center space-x-3">
                        <i class="fas fa-medal text-gold-400 text-2xl"></i>
                        <span class="text-white">Industry Innovation Award</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Call to Action -->
    <section class="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900 text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-4xl sm:text-5xl font-bold mb-6 font-playfair">Ready to Learn More?</h2>
            <p class="text-xl text-gray-200 mb-8">
                Discover how our LLI Framework™ can transform your organization's culture and outcomes.
            </p>
            <div class="space-x-6">
                <a href="/framework" class="inline-block bg-gradient-to-r from-gold-500 to-gold-600 text-black px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                    Explore LLI Framework™
                </a>
                <a href="/assessment" class="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary-900 transition-all duration-300">
                    Take Assessment
                </a>
            </div>
        </div>
    </section>
  `,title:"About Us - Our Vision & Values",currentPage:"about"})));z.get("/framework",e=>e.html(ee({children:`
    <!-- Page Header -->
    <section class="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900 text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 class="text-5xl sm:text-6xl font-bold mb-6 font-playfair">The LLI Framework™</h1>
            <p class="text-xl text-gray-200 leading-relaxed">
                Our signature 3-part system for sustainable change: From insight to impact with real strategy, accountability, and outcomes.
            </p>
        </div>
    </section>

    <!-- Framework Overview Image -->
    <section class="py-16 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <img 
                src="https://digitalleadership.com/wp-content/uploads/2022/11/Strategic-Planning-Process.webp" 
                alt="Strategic planning process visualization representing the LLI Framework methodology"
                class="w-full h-64 object-contain rounded-lg shadow-lg mx-auto"
                loading="lazy"
            />
        </div>
    </section>

    <!-- LLI Framework Steps -->
    <section class="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900 text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <!-- Listen -->
                <div class="framework-step listen" data-aos="fade-up" data-aos-delay="100">
                    <div class="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-2xl text-center h-full">
                        <div class="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-2xl font-bold text-white mb-6 mx-auto">1</div>
                        <h3 class="text-3xl font-bold mb-4 font-playfair">Listen</h3>
                        <div class="w-16 h-1 bg-primary-400 mx-auto mb-6 rounded-full"></div>
                        <ul class="text-left space-y-3 text-gray-200">
                            <li class="flex items-start">
                                <i class="fas fa-check-circle text-primary-400 mr-3 mt-1"></i>
                                Conduct comprehensive listening tours
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check-circle text-primary-400 mr-3 mt-1"></i>
                                Assess organizational culture deeply
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check-circle text-primary-400 mr-3 mt-1"></i>
                                Create safe spaces to hear truth
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check-circle text-primary-400 mr-3 mt-1"></i>
                                Identify systemic barriers and gaps
                            </li>
                        </ul>
                    </div>
                </div>
                
                <!-- Learn -->
                <div class="framework-step learn" data-aos="fade-up" data-aos-delay="200">
                    <div class="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-2xl text-center h-full">
                        <div class="w-16 h-16 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full flex items-center justify-center text-2xl font-bold text-white mb-6 mx-auto">2</div>
                        <h3 class="text-3xl font-bold mb-4 font-playfair">Learn</h3>
                        <div class="w-16 h-1 bg-accent-400 mx-auto mb-6 rounded-full"></div>
                        <ul class="text-left space-y-3 text-gray-200">
                            <li class="flex items-start">
                                <i class="fas fa-check-circle text-accent-400 mr-3 mt-1"></i>
                                Build data-driven strategy
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check-circle text-accent-400 mr-3 mt-1"></i>
                                Examine root causes honestly
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check-circle text-accent-400 mr-3 mt-1"></i>
                                Reflect with organizational honesty
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check-circle text-accent-400 mr-3 mt-1"></i>
                                Design sustainable solutions
                            </li>
                        </ul>
                    </div>
                </div>
                
                <!-- Implement -->
                <div class="framework-step implement" data-aos="fade-up" data-aos-delay="300">
                    <div class="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-2xl text-center h-full">
                        <div class="w-16 h-16 bg-gradient-to-r from-gold-500 to-gold-600 rounded-full flex items-center justify-center text-2xl font-bold text-white mb-6 mx-auto">3</div>
                        <h3 class="text-3xl font-bold mb-4 font-playfair">Implement</h3>
                        <div class="w-16 h-1 bg-gold-400 mx-auto mb-6 rounded-full"></div>
                        <ul class="text-left space-y-3 text-gray-200">
                            <li class="flex items-start">
                                <i class="fas fa-check-circle text-gold-400 mr-3 mt-1"></i>
                                Co-create policy changes
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check-circle text-gold-400 mr-3 mt-1"></i>
                                Shift behaviors and structures
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check-circle text-gold-400 mr-3 mt-1"></i>
                                Ensure lasting transformation
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check-circle text-gold-400 mr-3 mt-1"></i>
                                Measure real outcomes
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Framework in Action -->
    <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16" data-aos="fade-up">
                <h2 class="text-4xl font-bold text-gray-900 mb-6 font-playfair">The Framework in Action</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    See how the LLI Framework™ creates lasting organizational transformation
                </p>
            </div>
            
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div data-aos="fade-right">
                    <img 
                        src="https://www.gartner.com/ngw/globalassets/en/articles/images/how-to-increase-change-management-success.png" 
                        alt="Change management success methodology"
                        class="w-full h-96 object-cover rounded-2xl shadow-xl"
                        loading="lazy"
                    />
                </div>
                
                <div data-aos="fade-left">
                    <h3 class="text-2xl font-bold text-gray-900 mb-6">Real Results, Measured Impact</h3>
                    <div class="space-y-4">
                        <div class="bg-primary-50 p-4 rounded-lg border-l-4 border-primary-500">
                            <h4 class="font-semibold text-gray-900 mb-1">Healthcare Organization</h4>
                            <p class="text-gray-600">65% improvement in psychological safety scores within 6 months</p>
                        </div>
                        <div class="bg-gold-50 p-4 rounded-lg border-l-4 border-gold-500">
                            <h4 class="font-semibold text-gray-900 mb-1">Tech Company</h4>
                            <p class="text-gray-600">40% increase in diverse leadership representation in 1 year</p>
                        </div>
                        <div class="bg-accent-50 p-4 rounded-lg border-l-4 border-accent-500">
                            <h4 class="font-semibold text-gray-900 mb-1">Nonprofit Organization</h4>
                            <p class="text-gray-600">89% employee satisfaction with new equity initiatives</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900 text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-4xl font-bold mb-6 font-playfair">Ready to Implement the LLI Framework™?</h2>
            <p class="text-xl text-gray-200 mb-8">
                Start your transformation journey with our proven methodology.
            </p>
            <div class="space-x-6">
                <a href="/assessment" class="inline-block bg-gradient-to-r from-gold-500 to-gold-600 text-black px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                    Take Assessment
                </a>
                <a href="/contact" class="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary-900 transition-all duration-300">
                    Schedule Consultation
                </a>
            </div>
        </div>
    </section>
  `,title:"LLI Framework™ - Our Proven Methodology",currentPage:"framework"})));z.get("/assessment",e=>e.html(ee({children:`
    <!-- Page Header -->
    <section class="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900 text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 class="text-5xl sm:text-6xl font-bold mb-6 font-playfair">Equity Readiness Assessment</h1>
            <p class="text-xl text-gray-200 leading-relaxed">
                Discover where your organization stands today and get personalized recommendations for your transformation journey.
            </p>
        </div>
    </section>

    <!-- Assessment Tool -->
    <section class="py-20 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12" data-aos="fade-up">
                <h2 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 font-playfair">Where Is Your Organization Today?</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Take our free 2-minute assessment to discover your organization's equity readiness and get personalized recommendations.
                </p>
            </div>
            
            <div class="bg-gradient-to-br from-gray-50 to-primary-50 rounded-3xl p-8 shadow-xl">
                <div id="assessment-container">
                    <!-- Assessment Questions -->
                    <div id="assessment-questions" class="space-y-8">
                        <div class="assessment-question" data-question="1">
                            <h3 class="text-xl font-semibold text-gray-900 mb-4">1. How would you describe your organization's current approach to equity and inclusion?</h3>
                            <div class="space-y-3">
                                <label class="flex items-center p-4 bg-white rounded-lg hover:bg-primary-50 cursor-pointer transition-colors">
                                    <input type="radio" name="q1" value="1" class="mr-3">
                                    <span>We haven't started formal equity initiatives yet</span>
                                </label>
                                <label class="flex items-center p-4 bg-white rounded-lg hover:bg-primary-50 cursor-pointer transition-colors">
                                    <input type="radio" name="q1" value="2" class="mr-3">
                                    <span>We have some diversity programs but limited systematic approach</span>
                                </label>
                                <label class="flex items-center p-4 bg-white rounded-lg hover:bg-primary-50 cursor-pointer transition-colors">
                                    <input type="radio" name="q1" value="3" class="mr-3">
                                    <span>We have established programs with some measurement</span>
                                </label>
                                <label class="flex items-center p-4 bg-white rounded-lg hover:bg-primary-50 cursor-pointer transition-colors">
                                    <input type="radio" name="q1" value="4" class="mr-3">
                                    <span>Equity is integrated throughout our organizational systems</span>
                                </label>
                            </div>
                        </div>
                        
                        <div class="assessment-question hidden" data-question="2">
                            <h3 class="text-xl font-semibold text-gray-900 mb-4">2. How do employees typically respond when discussing workplace equity?</h3>
                            <div class="space-y-3">
                                <label class="flex items-center p-4 bg-white rounded-lg hover:bg-primary-50 cursor-pointer transition-colors">
                                    <input type="radio" name="q2" value="1" class="mr-3">
                                    <span>Conversations are avoided or met with resistance</span>
                                </label>
                                <label class="flex items-center p-4 bg-white rounded-lg hover:bg-primary-50 cursor-pointer transition-colors">
                                    <input type="radio" name="q2" value="2" class="mr-3">
                                    <span>Some engage, but many remain silent or uncomfortable</span>
                                </label>
                                <label class="flex items-center p-4 bg-white rounded-lg hover:bg-primary-50 cursor-pointer transition-colors">
                                    <input type="radio" name="q2" value="3" class="mr-3">
                                    <span>Most participate, though depth varies</span>
                                </label>
                                <label class="flex items-center p-4 bg-white rounded-lg hover:bg-primary-50 cursor-pointer transition-colors">
                                    <input type="radio" name="q2" value="4" class="mr-3">
                                    <span>Open, honest dialogue is the norm across all levels</span>
                                </label>
                            </div>
                        </div>
                        
                        <div class="assessment-question hidden" data-question="3">
                            <h3 class="text-xl font-semibold text-gray-900 mb-4">3. How do you currently measure success in equity and inclusion efforts?</h3>
                            <div class="space-y-3">
                                <label class="flex items-center p-4 bg-white rounded-lg hover:bg-primary-50 cursor-pointer transition-colors">
                                    <input type="radio" name="q3" value="1" class="mr-3">
                                    <span>We don't have formal measurement systems</span>
                                </label>
                                <label class="flex items-center p-4 bg-white rounded-lg hover:bg-primary-50 cursor-pointer transition-colors">
                                    <input type="radio" name="q3" value="2" class="mr-3">
                                    <span>Basic demographic tracking and compliance metrics</span>
                                </label>
                                <label class="flex items-center p-4 bg-white rounded-lg hover:bg-primary-50 cursor-pointer transition-colors">
                                    <input type="radio" name="q3" value="3" class="mr-3">
                                    <span>Regular surveys and some outcome tracking</span>
                                </label>
                                <label class="flex items-center p-4 bg-white rounded-lg hover:bg-primary-50 cursor-pointer transition-colors">
                                    <input type="radio" name="q3" value="4" class="mr-3">
                                    <span>Comprehensive metrics with regular assessment and adjustment</span>
                                </label>
                            </div>
                        </div>
                        
                        <div class="assessment-question hidden" data-question="4">
                            <h3 class="text-xl font-semibold text-gray-900 mb-4">4. How would you rate psychological safety in your workplace?</h3>
                            <div class="space-y-3">
                                <label class="flex items-center p-4 bg-white rounded-lg hover:bg-primary-50 cursor-pointer transition-colors">
                                    <input type="radio" name="q4" value="1" class="mr-3">
                                    <span>People often fear speaking up or sharing concerns</span>
                                </label>
                                <label class="flex items-center p-4 bg-white rounded-lg hover:bg-primary-50 cursor-pointer transition-colors">
                                    <input type="radio" name="q4" value="2" class="mr-3">
                                    <span>Some feel safe, but it's inconsistent across teams</span>
                                </label>
                                <label class="flex items-center p-4 bg-white rounded-lg hover:bg-primary-50 cursor-pointer transition-colors">
                                    <input type="radio" name="q4" value="3" class="mr-3">
                                    <span>Most feel comfortable sharing ideas and feedback</span>
                                </label>
                                <label class="flex items-center p-4 bg-white rounded-lg hover:bg-primary-50 cursor-pointer transition-colors">
                                    <input type="radio" name="q4" value="4" class="mr-3">
                                    <span>Strong culture of openness, trust, and authentic dialogue</span>
                                </label>
                            </div>
                        </div>
                        
                        <div class="assessment-question hidden" data-question="5">
                            <h3 class="text-xl font-semibold text-gray-900 mb-4">5. What's your organization's primary industry?</h3>
                            <div class="space-y-3">
                                <label class="flex items-center p-4 bg-white rounded-lg hover:bg-primary-50 cursor-pointer transition-colors">
                                    <input type="radio" name="q5" value="healthcare" class="mr-3">
                                    <span>Healthcare & Medical</span>
                                </label>
                                <label class="flex items-center p-4 bg-white rounded-lg hover:bg-primary-50 cursor-pointer transition-colors">
                                    <input type="radio" name="q5" value="nonprofit" class="mr-3">
                                    <span>Nonprofit & Philanthropy</span>
                                </label>
                                <label class="flex items-center p-4 bg-white rounded-lg hover:bg-primary-50 cursor-pointer transition-colors">
                                    <input type="radio" name="q5" value="education" class="mr-3">
                                    <span>Education & Academic</span>
                                </label>
                                <label class="flex items-center p-4 bg-white rounded-lg hover:bg-primary-50 cursor-pointer transition-colors">
                                    <input type="radio" name="q5" value="corporate" class="mr-3">
                                    <span>Corporate & Business</span>
                                </label>
                                <label class="flex items-center p-4 bg-white rounded-lg hover:bg-primary-50 cursor-pointer transition-colors">
                                    <input type="radio" name="q5" value="government" class="mr-3">
                                    <span>Government & Public Sector</span>
                                </label>
                                <label class="flex items-center p-4 bg-white rounded-lg hover:bg-primary-50 cursor-pointer transition-colors">
                                    <input type="radio" name="q5" value="other" class="mr-3">
                                    <span>Other</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Navigation Buttons -->
                    <div class="flex justify-between mt-8">
                        <button id="prev-btn" class="hidden bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                            <i class="fas fa-arrow-left mr-2"></i>Previous
                        </button>
                        <div class="ml-auto">
                            <button id="next-btn" class="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                                Next <i class="fas fa-arrow-right ml-2"></i>
                            </button>
                            <button id="submit-assessment" class="hidden bg-gold-500 hover:bg-gold-600 text-black px-8 py-3 rounded-lg font-semibold transition-colors">
                                <i class="fas fa-chart-line mr-2"></i>Get My Results
                            </button>
                        </div>
                    </div>
                    
                    <!-- Progress Bar -->
                    <div class="mt-6">
                        <div class="flex justify-between text-sm text-gray-600 mb-2">
                            <span>Progress</span>
                            <span id="progress-text">1 of 5</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-3">
                            <div id="progress-bar" class="bg-gradient-to-r from-primary-500 to-accent-500 h-3 rounded-full transition-all duration-500" style="width: 20%"></div>
                        </div>
                    </div>
                </div>
                
                <!-- Assessment Results -->
                <div id="assessment-results" class="hidden">
                    <div class="text-center mb-8">
                        <div class="inline-block p-6 bg-gradient-to-r from-primary-100 to-accent-100 rounded-full mb-4">
                            <div id="score-display" class="text-4xl font-bold text-primary-700">85</div>
                        </div>
                        <h3 class="text-2xl font-bold text-gray-900 mb-2">Your Equity Readiness Score</h3>
                        <p id="score-description" class="text-lg text-gray-600 mb-6">Your organization shows strong foundation with room for strategic growth.</p>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div class="bg-white p-6 rounded-xl shadow-sm">
                            <h4 class="text-lg font-semibold text-gray-900 mb-3">
                                <i class="fas fa-lightbulb text-gold-500 mr-2"></i>Recommended Next Steps
                            </h4>
                            <ul id="recommendations" class="space-y-2 text-gray-700">
                                <!-- Populated by JavaScript -->
                            </ul>
                        </div>
                        
                        <div class="bg-white p-6 rounded-xl shadow-sm">
                            <h4 class="text-lg font-semibold text-gray-900 mb-3">
                                <i class="fas fa-target text-primary-500 mr-2"></i>Suggested Services
                            </h4>
                            <ul id="suggested-services" class="space-y-2 text-gray-700">
                                <!-- Populated by JavaScript -->
                            </ul>
                        </div>
                    </div>
                    
                    <div class="text-center">
                        <a href="/contact" class="inline-block bg-gradient-to-r from-primary-500 to-accent-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 mr-4">
                            <i class="fas fa-calendar mr-2"></i>Schedule Consultation
                        </a>
                        <button id="retake-assessment" class="inline-block bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-full font-semibold transition-colors">
                            <i class="fas fa-redo mr-2"></i>Retake Assessment
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Why Take Assessment -->
    <section class="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div data-aos="fade-right">
                    <h2 class="text-4xl font-bold text-gray-900 mb-6 font-playfair">Why Take This Assessment?</h2>
                    <div class="space-y-6">
                        <div class="flex items-start">
                            <i class="fas fa-map text-primary-500 text-xl mr-4 mt-1"></i>
                            <div>
                                <h3 class="text-lg font-semibold text-gray-900 mb-2">Know Where You Stand</h3>
                                <p class="text-gray-600">Get an honest assessment of your organization's current equity maturity level.</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start">
                            <i class="fas fa-route text-gold-500 text-xl mr-4 mt-1"></i>
                            <div>
                                <h3 class="text-lg font-semibold text-gray-900 mb-2">Personalized Roadmap</h3>
                                <p class="text-gray-600">Receive tailored recommendations based on your specific needs and industry.</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start">
                            <i class="fas fa-target text-accent-500 text-xl mr-4 mt-1"></i>
                            <div>
                                <h3 class="text-lg font-semibold text-gray-900 mb-2">Strategic Priority</h3>
                                <p class="text-gray-600">Identify the highest-impact areas for your transformation journey.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div data-aos="fade-left">
                    <img 
                        src="https://www.aihr.com/wp-content/uploads/Organizational-Transformation.jpg" 
                        alt="Organizational transformation assessment and planning"
                        class="w-full h-96 object-cover rounded-2xl shadow-xl"
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    </section>
  `,title:"Free Equity Assessment - Discover Your Readiness",currentPage:"assessment"})));z.get("/services",async e=>{const{servicesPage:t}=await Promise.resolve().then(()=>pa);return e.html(ee({children:t,title:"Our Services - Comprehensive Equity Solutions",currentPage:"services"}))});z.get("/founder",e=>e.html(ee({children:`
    <!-- Page Header -->
    <section class="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900 text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 class="text-5xl sm:text-6xl font-bold mb-6 font-playfair">Meet Our Founder</h1>
            <p class="text-xl text-gray-200 leading-relaxed">
                "Listen. Learn. Implement.™ Transform Together."
            </p>
        </div>
    </section>

    <!-- Founder Profile -->
    <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <!-- Founder Image -->
                <div data-aos="fade-right" data-aos-duration="1000">
                    <div class="image-hover relative">
                        <div class="aspect-w-4 aspect-h-5 bg-gradient-to-br from-primary-200 to-accent-200 rounded-2xl overflow-hidden shadow-2xl">
                            <img 
                                src="https://page.gensparksite.com/v1/base64_upload/d2587015bf5f776d9212e72f6427e4d6" 
                                alt="Chiara Smith, MA - Founder and CEO of CTS Consulting" 
                                class="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                                loading="lazy"
                            />
                        </div>
                        
                        <!-- Achievement badges -->
                        <div class="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-lg">
                            <div class="text-center">
                                <div class="text-2xl font-bold text-primary-600">15+</div>
                                <div class="text-xs text-gray-600">Years</div>
                            </div>
                        </div>
                        
                        <div class="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-lg">
                            <div class="text-center">
                                <div class="text-lg font-bold text-gold-600">LLI™</div>
                                <div class="text-xs text-gray-600">Creator</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Founder Content -->
                <div data-aos="fade-left" data-aos-duration="1000">
                    <div class="space-y-6">
                        <div>
                            <h2 class="text-4xl font-bold text-gray-900 mb-4 font-playfair">Chiara Smith, MA</h2>
                            <div class="space-y-2 text-lg text-gray-600">
                                <p class="font-semibold text-xl">Founder • Equity Strategist • Community Architect</p>
                                <p class="font-semibold text-primary-600">CEO of CTS Consulting™ | Creator of the LLI Framework™</p>
                            </div>
                        </div>
                        
                        <div class="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full"></div>
                        
                        <div class="space-y-4 text-gray-700 leading-relaxed">
                            <p>
                                Chiara Smith, MA, is a trusted equity advisor and thought leader committed to systems change. 
                                As the Founder and CEO of CTS Consulting™, she supports organizations, institutions, and communities 
                                in building cultures grounded in psychological safety, racial equity, and collective well-being.
                            </p>
                            
                            <p>
                                With over 15 years in strategy, leadership development, and community engagement work, 
                                Chiara's approach is always intentional — not performative. Whether through coaching, 
                                listening sessions, or strategic planning, her focus is on concrete shifts that last.
                            </p>
                        </div>
                        
                        <div class="bg-primary-50 p-6 rounded-lg border-l-4 border-primary-500">
                            <h3 class="font-bold text-primary-800 mb-2 flex items-center">
                                <i class="fas fa-star text-gold-500 mr-2"></i>
                                Notable Achievement
                            </h3>
                            <p class="text-primary-700">
                                Author of "The Illusion of Inclusive Workspaces and the Psychological Safety of BIPOC Colleagues" — 
                                Grant makers In Health's most-read article of 2021, sparking national conversations on organizational wellness.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Credentials & Experience -->
    <section class="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16" data-aos="fade-up">
                <h2 class="text-4xl font-bold text-gray-900 mb-6 font-playfair">Experience & Credentials</h2>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div class="bg-white p-6 rounded-xl shadow-lg text-center" data-aos="fade-up" data-aos-delay="100">
                    <i class="fas fa-graduation-cap text-4xl text-primary-500 mb-4"></i>
                    <h3 class="text-lg font-bold text-gray-900 mb-2">Masters Degree</h3>
                    <p class="text-gray-600">Human Relations</p>
                </div>
                
                <div class="bg-white p-6 rounded-xl shadow-lg text-center" data-aos="fade-up" data-aos-delay="200">
                    <i class="fas fa-award text-4xl text-gold-500 mb-4"></i>
                    <h3 class="text-lg font-bold text-gray-900 mb-2">15+ Years</h3>
                    <p class="text-gray-600">Strategy & Leadership Development</p>
                </div>
                
                <div class="bg-white p-6 rounded-xl shadow-lg text-center" data-aos="fade-up" data-aos-delay="300">
                    <i class="fas fa-map-marker-alt text-4xl text-accent-500 mb-4"></i>
                    <h3 class="text-lg font-bold text-gray-900 mb-2">Rochester Native</h3>
                    <p class="text-gray-600">Deep Community Roots</p>
                </div>
                
                <div class="bg-white p-6 rounded-xl shadow-lg text-center" data-aos="fade-up" data-aos-delay="400">
                    <i class="fas fa-lightbulb text-4xl text-green-500 mb-4"></i>
                    <h3 class="text-lg font-bold text-gray-900 mb-2">Framework Creator</h3>
                    <p class="text-gray-600">LLI Framework™ Innovator</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Leadership Philosophy -->
    <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div data-aos="fade-right">
                    <img 
                        src="https://www.ccl.org/wp-content/uploads/2023/03/leading-with-wellbeing-infographic-center-for-creative-leadership.png.webp" 
                        alt="Leading with wellbeing - culture, leadership and wellbeing interconnection"
                        class="w-full h-96 object-cover rounded-2xl shadow-xl"
                        loading="lazy"
                    />
                </div>
                
                <div data-aos="fade-left">
                    <h2 class="text-4xl font-bold text-gray-900 mb-6 font-playfair">Leadership Philosophy</h2>
                    <div class="space-y-6">
                        <blockquote class="text-lg italic text-gray-700 border-l-4 border-gold-500 pl-6">
                            "Her leadership style blends strategy with soul — rooted in values, guided by data, 
                            and committed to crafting spaces where people feel seen, safe, and supported."
                        </blockquote>
                        
                        <div class="space-y-4">
                            <div class="flex items-start">
                                <i class="fas fa-heart text-primary-500 text-xl mr-4 mt-1"></i>
                                <div>
                                    <h3 class="text-lg font-semibold text-gray-900 mb-2">Values-Driven Leadership</h3>
                                    <p class="text-gray-600">Every strategy rooted in authentic values and genuine care for human dignity.</p>
                                </div>
                            </div>
                            
                            <div class="flex items-start">
                                <i class="fas fa-chart-line text-accent-500 text-xl mr-4 mt-1"></i>
                                <div>
                                    <h3 class="text-lg font-semibold text-gray-900 mb-2">Data-Informed Decisions</h3>
                                    <p class="text-gray-600">Combining emotional intelligence with analytical rigor for sustainable outcomes.</p>
                                </div>
                            </div>
                            
                            <div class="flex items-start">
                                <i class="fas fa-users text-gold-500 text-xl mr-4 mt-1"></i>
                                <div>
                                    <h3 class="text-lg font-semibold text-gray-900 mb-2">Community-Centered Approach</h3>
                                    <p class="text-gray-600">Building solutions with communities, not for them — authentic co-creation at every step.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Fun Facts & Impact -->
    <section class="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16" data-aos="fade-up">
                <h2 class="text-4xl font-bold text-gray-900 mb-6 font-playfair">Beyond Consulting</h2>
                <p class="text-xl text-gray-600">Community impact and entrepreneurial ventures</p>
            </div>
            
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div class="bg-white p-8 rounded-2xl shadow-lg" data-aos="fade-up" data-aos-delay="100">
                    <div class="flex items-center mb-6">
                        <i class="fas fa-leaf text-3xl text-green-500 mr-4"></i>
                        <h3 class="text-2xl font-bold text-gray-900">Do Gooder: The Earth Conscious Brand™</h3>
                    </div>
                    <p class="text-gray-600 leading-relaxed">
                        Creative force behind an innovative sustainable brand that combines environmental consciousness 
                        with social impact, demonstrating how business can be a force for positive change.
                    </p>
                </div>
                
                <div class="bg-white p-8 rounded-2xl shadow-lg" data-aos="fade-up" data-aos-delay="200">
                    <div class="flex items-center mb-6">
                        <i class="fas fa-utensils text-3xl text-gold-500 mr-4"></i>
                        <h3 class="text-2xl font-bold text-gray-900">14621 Food Stands Initiative</h3>
                    </div>
                    <p class="text-gray-600 leading-relaxed">
                        Founded mutual-aid initiative that fed thousands during the COVID-19 pandemic, 
                        demonstrating community-centered leadership and rapid response to crisis through 
                        grassroots organizing and authentic community partnership.
                    </p>
                </div>
            </div>
            
            <!-- Speaking & Recognition -->
            <div class="mt-16 text-center" data-aos="fade-up">
                <div class="bg-gradient-to-r from-primary-50 to-accent-50 p-8 rounded-2xl">
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Speaking & Recognition</h3>
                    <p class="text-lg text-gray-700 mb-6">
                        Chiara has spoken at national forums on leadership, health equity, and community power, 
                        sharing insights that bridge grassroots organizing with institutional transformation.
                    </p>
                    <div class="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                        <span class="bg-white px-4 py-2 rounded-full">National Health Equity Forums</span>
                        <span class="bg-white px-4 py-2 rounded-full">Leadership Development Conferences</span>
                        <span class="bg-white px-4 py-2 rounded-full">Community Power Symposiums</span>
                        <span class="bg-white px-4 py-2 rounded-full">Grant makers In Health Publications</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900 text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-4xl font-bold mb-6 font-playfair">Ready to Work with Chiara?</h2>
            <p class="text-xl text-gray-200 mb-8">
                Experience firsthand what values-driven, data-informed leadership can do for your organization.
            </p>
            <div class="space-x-6">
                <a href="/assessment" class="inline-block bg-gradient-to-r from-gold-500 to-gold-600 text-black px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                    Start with Assessment
                </a>
                <a href="/contact" class="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary-900 transition-all duration-300">
                    Schedule Meeting
                </a>
            </div>
        </div>
    </section>
  `,title:"Chiara Smith, MA - Founder & CEO",currentPage:"founder"})));z.get("/contact",e=>e.html(ee({children:`
    <!-- Page Header -->
    <section class="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900 text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 class="text-5xl sm:text-6xl font-bold mb-6 font-playfair">Get in Touch</h1>
            <p class="text-xl text-gray-200 leading-relaxed">
                Ready to start your transformation journey? Let's begin the conversation about building safe, equitable cultures together.
            </p>
        </div>
    </section>

    <!-- Contact Methods -->
    <section class="py-16 bg-white">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="text-center" data-aos="fade-up" data-aos-delay="100">
                    <div class="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-phone text-white text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
                    <p class="text-gray-600 mb-3">Speak directly with our team</p>
                    <a href="tel:+15859051772" class="text-primary-600 hover:text-primary-800 font-semibold text-lg">
                        (585) 905-1772
                    </a>
                </div>
                
                <div class="text-center" data-aos="fade-up" data-aos-delay="200">
                    <div class="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-envelope text-white text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                    <p class="text-gray-600 mb-3">Send us a detailed message</p>
                    <a href="mailto:hello@ctsconsulting.com" class="text-accent-600 hover:text-accent-800 font-semibold text-lg">
                        hello@ctsconsulting.com
                    </a>
                </div>
                
                <div class="text-center" data-aos="fade-up" data-aos-delay="300">
                    <div class="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-map-marker-alt text-white text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
                    <p class="text-gray-600 mb-3">Rochester, NY & Virtual</p>
                    <span class="text-gold-600 font-semibold text-lg">
                        Consultations Available
                    </span>
                </div>
            </div>
        </div>
    </section>

    <!-- Main Contact Section -->
    <section class="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <!-- Contact Form -->
                <div data-aos="fade-right" data-aos-duration="1000">
                    <div class="bg-white p-8 rounded-2xl shadow-xl">
                        <h2 class="text-3xl font-bold text-gray-900 mb-6 font-playfair">Start Your Transformation</h2>
                        <p class="text-gray-600 mb-8">
                            Ready to build safe, equitable cultures? Let's begin the conversation about your organization's journey.
                        </p>
                        
                        <form id="contact-form" class="space-y-6">
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label for="name" class="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        name="name" 
                                        required 
                                        class="form-input"
                                        placeholder="Your full name"
                                    >
                                </div>
                                <div>
                                    <label for="email" class="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="email" 
                                        required 
                                        class="form-input"
                                        placeholder="your.email@example.com"
                                    >
                                </div>
                            </div>
                            
                            <div>
                                <label for="organization" class="block text-sm font-semibold text-gray-700 mb-2">Organization</label>
                                <input 
                                    type="text" 
                                    id="organization" 
                                    name="organization" 
                                    class="form-input"
                                    placeholder="Your organization name"
                                >
                            </div>
                            
                            <div>
                                <label for="industry" class="block text-sm font-semibold text-gray-700 mb-2">Organization Type</label>
                                <select id="industry" name="industry" class="form-input" onchange="updateServiceRecommendations()">
                                    <option value="">Select your industry...</option>
                                    <option value="healthcare">Healthcare & Medical</option>
                                    <option value="nonprofit">Nonprofit & Philanthropy</option>
                                    <option value="education">Education & Academic</option>
                                    <option value="corporate">Corporate & Business</option>
                                    <option value="government">Government & Public Sector</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            
                            <div>
                                <label for="service" class="block text-sm font-semibold text-gray-700 mb-2">
                                    Recommended Services 
                                    <span id="industry-note" class="text-primary-600 text-sm font-normal"></span>
                                </label>
                                <select id="service" name="service" class="form-input">
                                    <option value="">Select a service area...</option>
                                    <option value="lli-framework">LLI Framework™ Implementation</option>
                                    <option value="psychological-safety">Psychological Safety & Culture</option>
                                    <option value="racial-equity">Racial & Philanthropic Equity</option>
                                    <option value="organizational-development">Organizational Development</option>
                                    <option value="violence-prevention">Violence Prevention</option>
                                    <option value="wellness-leadership">Wellness-Centered Leadership</option>
                                    <option value="strategic-planning">Strategic Planning</option>
                                    <option value="consultation">General Consultation</option>
                                </select>
                            </div>
                            
                            <div id="smart-recommendations" class="hidden bg-primary-50 p-4 rounded-lg border border-primary-200">
                                <h4 class="font-semibold text-primary-800 mb-2">
                                    <i class="fas fa-lightbulb text-primary-600 mr-2"></i>
                                    Based on your industry, we recommend:
                                </h4>
                                <ul id="recommended-services-list" class="text-sm text-primary-700 space-y-1">
                                    <!-- Populated by JavaScript -->
                                </ul>
                            </div>
                            
                            <div>
                                <label for="message" class="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    rows="4" 
                                    required 
                                    class="form-input"
                                    placeholder="Tell us about your organization's needs and goals..."
                                ></textarea>
                            </div>
                            
                            <button 
                                type="submit" 
                                class="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-primary-400 hover:to-primary-500 transform hover:scale-105 transition-all duration-300 shadow-lg"
                            >
                                <i class="fas fa-paper-plane mr-2"></i>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
                
                <!-- Contact Information & Benefits -->
                <div data-aos="fade-left" data-aos-duration="1000">
                    <div class="space-y-8">
                        <!-- Why Choose Us -->
                        <div class="bg-white p-8 rounded-2xl shadow-lg">
                            <h3 class="text-2xl font-bold text-gray-900 mb-6 font-playfair">Why Choose CTS Consulting?</h3>
                            
                            <div class="space-y-6">
                                <div class="flex items-start">
                                    <i class="fas fa-star text-gold-500 text-xl mr-4 mt-1"></i>
                                    <div>
                                        <div class="font-semibold text-gray-900 mb-1">Proven Framework</div>
                                        <div class="text-gray-600">LLI Framework™ with measurable outcomes and 95% satisfaction rate</div>
                                    </div>
                                </div>
                                
                                <div class="flex items-start">
                                    <i class="fas fa-users text-primary-500 text-xl mr-4 mt-1"></i>
                                    <div>
                                        <div class="font-semibold text-gray-900 mb-1">15+ Years Experience</div>
                                        <div class="text-gray-600">500+ leaders transformed across healthcare, nonprofit, education, and corporate sectors</div>
                                    </div>
                                </div>
                                
                                <div class="flex items-start">
                                    <i class="fas fa-heart text-accent-500 text-xl mr-4 mt-1"></i>
                                    <div>
                                        <div class="font-semibold text-gray-900 mb-1">Holistic Approach</div>
                                        <div class="text-gray-600">Strategy with soul — rooted in values, guided by data, committed to lasting change</div>
                                    </div>
                                </div>
                                
                                <div class="flex items-start">
                                    <i class="fas fa-chart-line text-gold-500 text-xl mr-4 mt-1"></i>
                                    <div>
                                        <div class="font-semibold text-gray-900 mb-1">Real Results</div>
                                        <div class="text-gray-600">3x faster transformation with sustainable, systems-level change that lasts</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Next Steps -->
                        <div class="bg-gradient-to-br from-primary-50 to-accent-50 p-8 rounded-2xl border border-primary-200">
                            <h3 class="text-xl font-bold text-gray-900 mb-6">What Happens Next?</h3>
                            
                            <div class="space-y-4">
                                <div class="flex items-start">
                                    <div class="w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold">1</div>
                                    <div>
                                        <div class="font-semibold text-gray-900">Initial Consultation</div>
                                        <div class="text-gray-600 text-sm">30-minute discovery call to understand your needs</div>
                                    </div>
                                </div>
                                
                                <div class="flex items-start">
                                    <div class="w-6 h-6 bg-accent-500 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold">2</div>
                                    <div>
                                        <div class="font-semibold text-gray-900">Customized Proposal</div>
                                        <div class="text-gray-600 text-sm">Tailored strategy and timeline for your transformation</div>
                                    </div>
                                </div>
                                
                                <div class="flex items-start">
                                    <div class="w-6 h-6 bg-gold-500 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold">3</div>
                                    <div>
                                        <div class="font-semibold text-gray-900">LLI Framework™ Implementation</div>
                                        <div class="text-gray-600 text-sm">Begin your journey from insight to impact</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Social Connect -->
                        <div class="bg-white p-8 rounded-2xl shadow-lg text-center">
                            <h3 class="text-xl font-bold text-gray-900 mb-4">Connect With Us</h3>
                            <p class="text-gray-600 mb-6">Follow our journey and get insights on equity transformation</p>
                            <div class="flex justify-center space-x-4">
                                <a href="#" class="w-12 h-12 bg-primary-100 hover:bg-primary-200 rounded-full flex items-center justify-center transition-colors">
                                    <i class="fab fa-linkedin-in text-primary-600"></i>
                                </a>
                                <a href="#" class="w-12 h-12 bg-accent-100 hover:bg-accent-200 rounded-full flex items-center justify-center transition-colors">
                                    <i class="fab fa-twitter text-accent-600"></i>
                                </a>
                                <a href="#" class="w-12 h-12 bg-gold-100 hover:bg-gold-200 rounded-full flex items-center justify-center transition-colors">
                                    <i class="fab fa-instagram text-gold-600"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Alternative Contact Methods -->
    <section class="py-20 bg-white">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div data-aos="fade-up">
                <h2 class="text-3xl font-bold text-gray-900 mb-8 font-playfair">Prefer a Different Approach?</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-2xl">
                        <i class="fas fa-chart-line text-4xl text-primary-600 mb-4"></i>
                        <h3 class="text-xl font-bold text-gray-900 mb-4">Start with Assessment</h3>
                        <p class="text-gray-600 mb-6">
                            Not sure where to begin? Take our free assessment to get personalized recommendations.
                        </p>
                        <a href="/assessment" class="inline-block bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-full font-semibold transition-colors">
                            Take Free Assessment
                        </a>
                    </div>
                    
                    <div class="bg-gradient-to-br from-gold-50 to-gold-100 p-8 rounded-2xl">
                        <i class="fas fa-phone text-4xl text-gold-600 mb-4"></i>
                        <h3 class="text-xl font-bold text-gray-900 mb-4">Call Directly</h3>
                        <p class="text-gray-600 mb-6">
                            Prefer to speak directly? Call us for an immediate conversation about your needs.
                        </p>
                        <a href="tel:+15859051772" class="inline-block bg-gold-500 hover:bg-gold-600 text-black px-6 py-3 rounded-full font-semibold transition-colors">
                            (585) 905-1772
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  `,title:"Contact Us - Start Your Transformation",currentPage:"contact"})));const Ge=new vt,ma=Object.assign({"/src/index.tsx":z});let yt=!1;for(const[,e]of Object.entries(ma))e&&(Ge.route("/",e),Ge.notFound(e.notFoundHandler),yt=!0);if(!yt)throw new Error("Can't import modules from ['/src/index.tsx','/app/server.ts']");const ga=`
    <!-- Page Header -->
    <section class="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900 text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 class="text-5xl sm:text-6xl font-bold mb-6 font-playfair">Our Services</h1>
            <p class="text-xl text-gray-200 leading-relaxed">
                Comprehensive strategies for building equitable, thriving organizations across all sectors.
            </p>
        </div>
    </section>

    <!-- Services Hero Image -->
    <section class="py-16 bg-white">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                    src="https://images.stockcake.com/public/a/5/6/a56b32a4-b194-421b-b91f-7568de83494f_large/corporate-meeting-discussion-stockcake.jpg" 
                    alt="Professional consulting team conducting strategic planning session"
                    class="w-full h-80 object-cover"
                    loading="lazy"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div class="absolute bottom-8 left-8 text-white">
                    <h3 class="text-2xl font-bold mb-2">Transforming Organizations Through Strategic Consulting</h3>
                    <p class="text-lg opacity-90">Evidence-based approaches that create lasting change</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Core Services -->
    <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16" data-aos="fade-up">
                <h2 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 font-playfair">Core Focus Areas</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Comprehensive strategies for building equitable, thriving organizations
                </p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Psychological Safety -->
                <div class="service-card" data-aos="fade-up" data-aos-delay="100">
                    <div class="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center mb-6">
                        <i class="fas fa-shield-alt text-white text-2xl"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Psychological Safety & Workplace Culture</h3>
                    <p class="text-gray-600 leading-relaxed mb-6">
                        Create environments where all team members feel safe to contribute, question, and innovate without fear.
                    </p>
                    <ul class="space-y-2 text-gray-600 mb-6">
                        <li class="flex items-center"><i class="fas fa-check text-primary-500 mr-2"></i> Culture assessments</li>
                        <li class="flex items-center"><i class="fas fa-check text-primary-500 mr-2"></i> Safety audits</li>
                        <li class="flex items-center"><i class="fas fa-check text-primary-500 mr-2"></i> Team workshops</li>
                        <li class="flex items-center"><i class="fas fa-check text-primary-500 mr-2"></i> Leadership training</li>
                    </ul>
                    <div class="bg-primary-50 p-4 rounded-lg">
                        <h4 class="font-semibold text-primary-800 mb-2">Typical Outcomes:</h4>
                        <p class="text-primary-700 text-sm">40-60% improvement in team engagement and innovation metrics</p>
                    </div>
                </div>
                
                <!-- Racial & Philanthropic Equity -->
                <div class="service-card" data-aos="fade-up" data-aos-delay="200">
                    <div class="w-16 h-16 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full flex items-center justify-center mb-6">
                        <i class="fas fa-balance-scale text-white text-2xl"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Racial & Philanthropic Equity</h3>
                    <p class="text-gray-600 leading-relaxed mb-6">
                        Address systemic inequities and build truly inclusive practices that create measurable change.
                    </p>
                    <ul class="space-y-2 text-gray-600 mb-6">
                        <li class="flex items-center"><i class="fas fa-check text-accent-500 mr-2"></i> Equity audits</li>
                        <li class="flex items-center"><i class="fas fa-check text-accent-500 mr-2"></i> Policy development</li>
                        <li class="flex items-center"><i class="fas fa-check text-accent-500 mr-2"></i> Impact measurement</li>
                        <li class="flex items-center"><i class="fas fa-check text-accent-500 mr-2"></i> Community partnerships</li>
                    </ul>
                    <div class="bg-accent-50 p-4 rounded-lg">
                        <h4 class="font-semibold text-accent-800 mb-2">Proven Impact:</h4>
                        <p class="text-accent-700 text-sm">Most-read article of 2021 on BIPOC psychological safety (GIH)</p>
                    </div>
                </div>
                
                <!-- Organizational Development -->
                <div class="service-card" data-aos="fade-up" data-aos-delay="300">
                    <div class="w-16 h-16 bg-gradient-to-r from-gold-500 to-gold-600 rounded-full flex items-center justify-center mb-6">
                        <i class="fas fa-sitemap text-white text-2xl"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Organizational Development</h3>
                    <p class="text-gray-600 leading-relaxed mb-6">
                        Redesign systems, processes, and structures to support equity and excellence simultaneously.
                    </p>
                    <ul class="space-y-2 text-gray-600 mb-6">
                        <li class="flex items-center"><i class="fas fa-check text-gold-500 mr-2"></i> Systems mapping</li>
                        <li class="flex items-center"><i class="fas fa-check text-gold-500 mr-2"></i> Process redesign</li>
                        <li class="flex items-center"><i class="fas fa-check text-gold-500 mr-2"></i> Change management</li>
                        <li class="flex items-center"><i class="fas fa-check text-gold-500 mr-2"></i> Performance optimization</li>
                    </ul>
                    <div class="bg-gold-50 p-4 rounded-lg">
                        <h4 class="font-semibold text-gold-800 mb-2">Results Focus:</h4>
                        <p class="text-gold-700 text-sm">3x faster transformation vs traditional OD approaches</p>
                    </div>
                </div>
                
                <!-- Violence Prevention -->
                <div class="service-card" data-aos="fade-up" data-aos-delay="400">
                    <div class="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mb-6">
                        <i class="fas fa-hands-helping text-white text-2xl"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Violence Prevention & Community Engagement</h3>
                    <p class="text-gray-600 leading-relaxed mb-6">
                        Build safer communities through proactive prevention strategies and authentic engagement.
                    </p>
                    <ul class="space-y-2 text-gray-600 mb-6">
                        <li class="flex items-center"><i class="fas fa-check text-red-500 mr-2"></i> Prevention programs</li>
                        <li class="flex items-center"><i class="fas fa-check text-red-500 mr-2"></i> Community partnerships</li>
                        <li class="flex items-center"><i class="fas fa-check text-red-500 mr-2"></i> Training & education</li>
                        <li class="flex items-center"><i class="fas fa-check text-red-500 mr-2"></i> Crisis response</li>
                    </ul>
                    <div class="bg-red-50 p-4 rounded-lg">
                        <h4 class="font-semibold text-red-800 mb-2">Community Impact:</h4>
                        <p class="text-red-700 text-sm">Founded 14621 Food Stands, serving thousands during COVID-19</p>
                    </div>
                </div>
                
                <!-- Wellness-Centered Leadership -->
                <div class="service-card" data-aos="fade-up" data-aos-delay="500">
                    <div class="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mb-6">
                        <i class="fas fa-heart text-white text-2xl"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Wellness-Centered Leadership</h3>
                    <p class="text-gray-600 leading-relaxed mb-6">
                        Develop leaders who prioritize collective wellbeing while driving organizational success.
                    </p>
                    <ul class="space-y-2 text-gray-600 mb-6">
                        <li class="flex items-center"><i class="fas fa-check text-green-500 mr-2"></i> Leadership coaching</li>
                        <li class="flex items-center"><i class="fas fa-check text-green-500 mr-2"></i> Wellness frameworks</li>
                        <li class="flex items-center"><i class="fas fa-check text-green-500 mr-2"></i> Sustainable practices</li>
                        <li class="flex items-center"><i class="fas fa-check text-green-500 mr-2"></i> Stress management</li>
                    </ul>
                    <div class="bg-green-50 p-4 rounded-lg">
                        <h4 class="font-semibold text-green-800 mb-2">Leadership Growth:</h4>
                        <p class="text-green-700 text-sm">500+ leaders transformed through wellness-centered approaches</p>
                    </div>
                </div>
                
                <!-- Strategic Planning -->
                <div class="service-card" data-aos="fade-up" data-aos-delay="600">
                    <div class="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-6">
                        <i class="fas fa-chess text-white text-2xl"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Strategic Planning & Implementation</h3>
                    <p class="text-gray-600 leading-relaxed mb-6">
                        Develop and execute strategies that embed equity into every aspect of your operations.
                    </p>
                    <ul class="space-y-2 text-gray-600 mb-6">
                        <li class="flex items-center"><i class="fas fa-check text-purple-500 mr-2"></i> Strategic planning</li>
                        <li class="flex items-center"><i class="fas fa-check text-purple-500 mr-2"></i> Implementation support</li>
                        <li class="flex items-center"><i class="fas fa-check text-purple-500 mr-2"></i> Progress tracking</li>
                        <li class="flex items-center"><i class="fas fa-check text-purple-500 mr-2"></i> ROI measurement</li>
                    </ul>
                    <div class="bg-purple-50 p-4 rounded-lg">
                        <h4 class="font-semibold text-purple-800 mb-2">Success Rate:</h4>
                        <p class="text-purple-700 text-sm">95% client satisfaction with strategic outcomes delivered</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Industry Expertise -->
    <section class="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16" data-aos="fade-up">
                <h2 class="text-4xl font-bold text-gray-900 mb-6 font-playfair">Industry Expertise</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Tailored solutions for your sector's unique challenges and opportunities
                </p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="bg-white p-6 rounded-xl shadow-lg" data-aos="fade-up" data-aos-delay="100">
                    <i class="fas fa-hospital text-3xl text-primary-500 mb-4"></i>
                    <h3 class="text-xl font-bold text-gray-900 mb-3">Healthcare & Medical</h3>
                    <p class="text-gray-600">Patient care equity, BIPOC healthcare worker support, community health partnerships</p>
                </div>
                
                <div class="bg-white p-6 rounded-xl shadow-lg" data-aos="fade-up" data-aos-delay="200">
                    <i class="fas fa-hand-holding-heart text-3xl text-accent-500 mb-4"></i>
                    <h3 class="text-xl font-bold text-gray-900 mb-3">Nonprofit & Philanthropy</h3>
                    <p class="text-gray-600">Philanthropic equity assessment, board diversity, donor engagement strategies</p>
                </div>
                
                <div class="bg-white p-6 rounded-xl shadow-lg" data-aos="fade-up" data-aos-delay="300">
                    <i class="fas fa-graduation-cap text-3xl text-gold-500 mb-4"></i>
                    <h3 class="text-xl font-bold text-gray-900 mb-3">Education & Academic</h3>
                    <p class="text-gray-600">Student equity programs, faculty development, campus climate transformation</p>
                </div>
                
                <div class="bg-white p-6 rounded-xl shadow-lg" data-aos="fade-up" data-aos-delay="400">
                    <i class="fas fa-building text-3xl text-green-500 mb-4"></i>
                    <h3 class="text-xl font-bold text-gray-900 mb-3">Corporate & Business</h3>
                    <p class="text-gray-600">Workplace culture transformation, executive coaching, inclusive recruitment</p>
                </div>
                
                <div class="bg-white p-6 rounded-xl shadow-lg" data-aos="fade-up" data-aos-delay="500">
                    <i class="fas fa-landmark text-3xl text-purple-500 mb-4"></i>
                    <h3 class="text-xl font-bold text-gray-900 mb-3">Government & Public Sector</h3>
                    <p class="text-gray-600">Public service equity, community engagement, policy development support</p>
                </div>
                
                <div class="bg-white p-6 rounded-xl shadow-lg" data-aos="fade-up" data-aos-delay="600">
                    <i class="fas fa-cogs text-3xl text-red-500 mb-4"></i>
                    <h3 class="text-xl font-bold text-gray-900 mb-3">Custom Solutions</h3>
                    <p class="text-gray-600">Tailored LLI Framework™ implementation for unique organizational contexts</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Process Overview -->
    <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div data-aos="fade-right">
                    <h2 class="text-4xl font-bold text-gray-900 mb-6 font-playfair">Our Process</h2>
                    <div class="space-y-6">
                        <div class="flex items-start">
                            <div class="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold">1</div>
                            <div>
                                <h3 class="text-lg font-semibold text-gray-900 mb-1">Discovery & Assessment</h3>
                                <p class="text-gray-600">Deep organizational listening to understand current state and aspirations</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start">
                            <div class="w-8 h-8 bg-accent-500 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold">2</div>
                            <div>
                                <h3 class="text-lg font-semibold text-gray-900 mb-1">Strategy Development</h3>
                                <p class="text-gray-600">Co-create customized roadmap using LLI Framework™ methodology</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start">
                            <div class="w-8 h-8 bg-gold-500 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold">3</div>
                            <div>
                                <h3 class="text-lg font-semibold text-gray-900 mb-1">Implementation & Support</h3>
                                <p class="text-gray-600">Hands-on guidance through transformation with ongoing measurement</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start">
                            <div class="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold">4</div>
                            <div>
                                <h3 class="text-lg font-semibold text-gray-900 mb-1">Sustainability & Growth</h3>
                                <p class="text-gray-600">Ensure lasting change through systems integration and capacity building</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div data-aos="fade-left">
                    <img 
                        src="https://online.maryville.edu/wp-content/uploads/sites/97/2023/09/MVU-BAORGL-2020-Q1-Skyscraper-Organizational-Change-Management-Guide-for-Developing-Innovators-Leaders-miniIG1-v3.jpg" 
                        alt="Organizational change management process for innovative leaders"
                        class="w-full h-96 object-cover rounded-2xl shadow-xl"
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900 text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-4xl font-bold mb-6 font-playfair">Ready to Transform Your Organization?</h2>
            <p class="text-xl text-gray-200 mb-8">
                Discover which services align best with your organization's needs and goals.
            </p>
            <div class="space-x-6">
                <a href="/assessment" class="inline-block bg-gradient-to-r from-gold-500 to-gold-600 text-black px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                    Take Free Assessment
                </a>
                <a href="/contact" class="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary-900 transition-all duration-300">
                    Schedule Consultation
                </a>
            </div>
        </div>
    </section>
`,pa=Object.freeze(Object.defineProperty({__proto__:null,servicesPage:ga},Symbol.toStringTag,{value:"Module"}));export{Ge as default};
