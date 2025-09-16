var wt=Object.defineProperty;var He=e=>{throw TypeError(e)};var Ct=(e,t,s)=>t in e?wt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var m=(e,t,s)=>Ct(e,typeof t!="symbol"?t+"":t,s),Ae=(e,t,s)=>t.has(e)||He("Cannot "+s);var l=(e,t,s)=>(Ae(e,t,"read from private field"),s?s.call(e):t.get(e)),p=(e,t,s)=>t.has(e)?He("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),u=(e,t,s,a)=>(Ae(e,t,"write to private field"),a?a.call(e,s):t.set(e,s),s),x=(e,t,s)=>(Ae(e,t,"access private method"),s);var _e=(e,t,s,a)=>({set _(i){u(e,t,i,s)},get _(){return l(e,t,a)}});var qe=(e,t,s)=>(a,i)=>{let r=-1;return o(0);async function o(c){if(c<=r)throw new Error("next() called multiple times");r=c;let n,d=!1,f;if(e[c]?(f=e[c][0][0],a.req.routeIndex=c):f=c===e.length&&i||void 0,f)try{n=await f(a,()=>o(c+1))}catch(h){if(h instanceof Error&&t)a.error=h,n=await t(h,a),d=!0;else throw h}else a.finalized===!1&&s&&(n=await s(a));return n&&(a.finalized===!1||d)&&(a.res=n),a}},kt=Symbol(),St=async(e,t=Object.create(null))=>{const{all:s=!1,dot:a=!1}=t,r=(e instanceof it?e.raw.headers:e.headers).get("Content-Type");return r!=null&&r.startsWith("multipart/form-data")||r!=null&&r.startsWith("application/x-www-form-urlencoded")?Et(e,{all:s,dot:a}):{}};async function Et(e,t){const s=await e.formData();return s?jt(s,t):{}}function jt(e,t){const s=Object.create(null);return e.forEach((a,i)=>{t.all||i.endsWith("[]")?Tt(s,i,a):s[i]=a}),t.dot&&Object.entries(s).forEach(([a,i])=>{a.includes(".")&&(Rt(s,a,i),delete s[a])}),s}var Tt=(e,t,s)=>{e[t]!==void 0?Array.isArray(e[t])?e[t].push(s):e[t]=[e[t],s]:t.endsWith("[]")?e[t]=[s]:e[t]=s},Rt=(e,t,s)=>{let a=e;const i=t.split(".");i.forEach((r,o)=>{o===i.length-1?a[r]=s:((!a[r]||typeof a[r]!="object"||Array.isArray(a[r])||a[r]instanceof File)&&(a[r]=Object.create(null)),a=a[r])})},Ze=e=>{const t=e.split("/");return t[0]===""&&t.shift(),t},Ot=e=>{const{groups:t,path:s}=At(e),a=Ze(s);return Pt(a,t)},At=e=>{const t=[];return e=e.replace(/\{[^}]+\}/g,(s,a)=>{const i=`@${a}`;return t.push([i,s]),i}),{groups:t,path:e}},Pt=(e,t)=>{for(let s=t.length-1;s>=0;s--){const[a]=t[s];for(let i=e.length-1;i>=0;i--)if(e[i].includes(a)){e[i]=e[i].replace(a,t[s][1]);break}}return e},Ce={},Lt=(e,t)=>{if(e==="*")return"*";const s=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(s){const a=`${e}#${t}`;return Ce[a]||(s[2]?Ce[a]=t&&t[0]!==":"&&t[0]!=="*"?[a,s[1],new RegExp(`^${s[2]}(?=/${t})`)]:[e,s[1],new RegExp(`^${s[2]}$`)]:Ce[a]=[e,s[1],!0]),Ce[a]}return null},Ne=(e,t)=>{try{return t(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,s=>{try{return t(s)}catch{return s}})}},It=e=>Ne(e,decodeURI),et=e=>{const t=e.url,s=t.indexOf("/",t.indexOf(":")+4);let a=s;for(;a<t.length;a++){const i=t.charCodeAt(a);if(i===37){const r=t.indexOf("?",a),o=t.slice(s,r===-1?void 0:r);return It(o.includes("%25")?o.replace(/%25/g,"%2525"):o)}else if(i===63)break}return t.slice(s,a)},Ft=e=>{const t=et(e);return t.length>1&&t.at(-1)==="/"?t.slice(0,-1):t},te=(e,t,...s)=>(s.length&&(t=te(t,...s)),`${(e==null?void 0:e[0])==="/"?"":"/"}${e}${t==="/"?"":`${(e==null?void 0:e.at(-1))==="/"?"":"/"}${(t==null?void 0:t[0])==="/"?t.slice(1):t}`}`),tt=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(":"))return null;const t=e.split("/"),s=[];let a="";return t.forEach(i=>{if(i!==""&&!/\:/.test(i))a+="/"+i;else if(/\:/.test(i))if(/\?/.test(i)){s.length===0&&a===""?s.push("/"):s.push(a);const r=i.replace("?","");a+="/"+r,s.push(a)}else a+="/"+i}),s.filter((i,r,o)=>o.indexOf(i)===r)},Pe=e=>/[%+]/.test(e)?(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),e.indexOf("%")!==-1?Ne(e,at):e):e,st=(e,t,s)=>{let a;if(!s&&t&&!/[%+]/.test(t)){let o=e.indexOf(`?${t}`,8);for(o===-1&&(o=e.indexOf(`&${t}`,8));o!==-1;){const c=e.charCodeAt(o+t.length+1);if(c===61){const n=o+t.length+2,d=e.indexOf("&",n);return Pe(e.slice(n,d===-1?void 0:d))}else if(c==38||isNaN(c))return"";o=e.indexOf(`&${t}`,o+1)}if(a=/[%+]/.test(e),!a)return}const i={};a??(a=/[%+]/.test(e));let r=e.indexOf("?",8);for(;r!==-1;){const o=e.indexOf("&",r+1);let c=e.indexOf("=",r);c>o&&o!==-1&&(c=-1);let n=e.slice(r+1,c===-1?o===-1?void 0:o:c);if(a&&(n=Pe(n)),r=o,n==="")continue;let d;c===-1?d="":(d=e.slice(c+1,o===-1?void 0:o),a&&(d=Pe(d))),s?(i[n]&&Array.isArray(i[n])||(i[n]=[]),i[n].push(d)):i[n]??(i[n]=d)}return t?i[t]:i},Nt=st,Dt=(e,t)=>st(e,t,!0),at=decodeURIComponent,ze=e=>Ne(e,at),ie,R,_,rt,lt,Ie,z,Ue,it=(Ue=class{constructor(e,t="/",s=[[]]){p(this,_);m(this,"raw");p(this,ie);p(this,R);m(this,"routeIndex",0);m(this,"path");m(this,"bodyCache",{});p(this,z,e=>{const{bodyCache:t,raw:s}=this,a=t[e];if(a)return a;const i=Object.keys(t)[0];return i?t[i].then(r=>(i==="json"&&(r=JSON.stringify(r)),new Response(r)[e]())):t[e]=s[e]()});this.raw=e,this.path=t,u(this,R,s),u(this,ie,{})}param(e){return e?x(this,_,rt).call(this,e):x(this,_,lt).call(this)}query(e){return Nt(this.url,e)}queries(e){return Dt(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;const t={};return this.raw.headers.forEach((s,a)=>{t[a]=s}),t}async parseBody(e){var t;return(t=this.bodyCache).parsedBody??(t.parsedBody=await St(this,e))}json(){return l(this,z).call(this,"text").then(e=>JSON.parse(e))}text(){return l(this,z).call(this,"text")}arrayBuffer(){return l(this,z).call(this,"arrayBuffer")}blob(){return l(this,z).call(this,"blob")}formData(){return l(this,z).call(this,"formData")}addValidatedData(e,t){l(this,ie)[e]=t}valid(e){return l(this,ie)[e]}get url(){return this.raw.url}get method(){return this.raw.method}get[kt](){return l(this,R)}get matchedRoutes(){return l(this,R)[0].map(([[,e]])=>e)}get routePath(){return l(this,R)[0].map(([[,e]])=>e)[this.routeIndex].path}},ie=new WeakMap,R=new WeakMap,_=new WeakSet,rt=function(e){const t=l(this,R)[0][this.routeIndex][1][e],s=x(this,_,Ie).call(this,t);return s?/\%/.test(s)?ze(s):s:void 0},lt=function(){const e={},t=Object.keys(l(this,R)[0][this.routeIndex][1]);for(const s of t){const a=x(this,_,Ie).call(this,l(this,R)[0][this.routeIndex][1][s]);a&&typeof a=="string"&&(e[s]=/\%/.test(a)?ze(a):a)}return e},Ie=function(e){return l(this,R)[1]?l(this,R)[1][e]:e},z=new WeakMap,Ue),Ht={Stringify:1},ot=async(e,t,s,a,i)=>{typeof e=="object"&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));const r=e.callbacks;return r!=null&&r.length?(i?i[0]+=e:i=[e],Promise.all(r.map(c=>c({phase:t,buffer:i,context:a}))).then(c=>Promise.all(c.filter(Boolean).map(n=>ot(n,t,!1,a,i))).then(()=>i[0]))):Promise.resolve(e)},_t="text/plain; charset=UTF-8",Le=(e,t)=>({"Content-Type":e,...t}),pe,xe,F,re,N,j,ve,le,oe,G,ye,be,M,se,Ve,qt=(Ve=class{constructor(e,t){p(this,M);p(this,pe);p(this,xe);m(this,"env",{});p(this,F);m(this,"finalized",!1);m(this,"error");p(this,re);p(this,N);p(this,j);p(this,ve);p(this,le);p(this,oe);p(this,G);p(this,ye);p(this,be);m(this,"render",(...e)=>(l(this,le)??u(this,le,t=>this.html(t)),l(this,le).call(this,...e)));m(this,"setLayout",e=>u(this,ve,e));m(this,"getLayout",()=>l(this,ve));m(this,"setRenderer",e=>{u(this,le,e)});m(this,"header",(e,t,s)=>{this.finalized&&u(this,j,new Response(l(this,j).body,l(this,j)));const a=l(this,j)?l(this,j).headers:l(this,G)??u(this,G,new Headers);t===void 0?a.delete(e):s!=null&&s.append?a.append(e,t):a.set(e,t)});m(this,"status",e=>{u(this,re,e)});m(this,"set",(e,t)=>{l(this,F)??u(this,F,new Map),l(this,F).set(e,t)});m(this,"get",e=>l(this,F)?l(this,F).get(e):void 0);m(this,"newResponse",(...e)=>x(this,M,se).call(this,...e));m(this,"body",(e,t,s)=>x(this,M,se).call(this,e,t,s));m(this,"text",(e,t,s)=>!l(this,G)&&!l(this,re)&&!t&&!s&&!this.finalized?new Response(e):x(this,M,se).call(this,e,t,Le(_t,s)));m(this,"json",(e,t,s)=>x(this,M,se).call(this,JSON.stringify(e),t,Le("application/json",s)));m(this,"html",(e,t,s)=>{const a=i=>x(this,M,se).call(this,i,t,Le("text/html; charset=UTF-8",s));return typeof e=="object"?ot(e,Ht.Stringify,!1,{}).then(a):a(e)});m(this,"redirect",(e,t)=>{const s=String(e);return this.header("Location",/[^\x00-\xFF]/.test(s)?encodeURI(s):s),this.newResponse(null,t??302)});m(this,"notFound",()=>(l(this,oe)??u(this,oe,()=>new Response),l(this,oe).call(this,this)));u(this,pe,e),t&&(u(this,N,t.executionCtx),this.env=t.env,u(this,oe,t.notFoundHandler),u(this,be,t.path),u(this,ye,t.matchResult))}get req(){return l(this,xe)??u(this,xe,new it(l(this,pe),l(this,be),l(this,ye))),l(this,xe)}get event(){if(l(this,N)&&"respondWith"in l(this,N))return l(this,N);throw Error("This context has no FetchEvent")}get executionCtx(){if(l(this,N))return l(this,N);throw Error("This context has no ExecutionContext")}get res(){return l(this,j)||u(this,j,new Response(null,{headers:l(this,G)??u(this,G,new Headers)}))}set res(e){if(l(this,j)&&e){e=new Response(e.body,e);for(const[t,s]of l(this,j).headers.entries())if(t!=="content-type")if(t==="set-cookie"){const a=l(this,j).headers.getSetCookie();e.headers.delete("set-cookie");for(const i of a)e.headers.append("set-cookie",i)}else e.headers.set(t,s)}u(this,j,e),this.finalized=!0}get var(){return l(this,F)?Object.fromEntries(l(this,F)):{}}},pe=new WeakMap,xe=new WeakMap,F=new WeakMap,re=new WeakMap,N=new WeakMap,j=new WeakMap,ve=new WeakMap,le=new WeakMap,oe=new WeakMap,G=new WeakMap,ye=new WeakMap,be=new WeakMap,M=new WeakSet,se=function(e,t,s){const a=l(this,j)?new Headers(l(this,j).headers):l(this,G)??new Headers;if(typeof t=="object"&&"headers"in t){const r=t.headers instanceof Headers?t.headers:new Headers(t.headers);for(const[o,c]of r)o.toLowerCase()==="set-cookie"?a.append(o,c):a.set(o,c)}if(s)for(const[r,o]of Object.entries(s))if(typeof o=="string")a.set(r,o);else{a.delete(r);for(const c of o)a.append(r,c)}const i=typeof t=="number"?t:(t==null?void 0:t.status)??l(this,re);return new Response(e,{status:i,headers:a})},Ve),w="ALL",zt="all",Mt=["get","post","put","delete","options","patch"],nt="Can not add a route since the matcher is already built.",ct=class extends Error{},$t="__COMPOSED_HANDLER",Wt=e=>e.text("404 Not Found",404),Me=(e,t)=>{if("getResponse"in e){const s=e.getResponse();return t.newResponse(s.body,s)}return console.error(e),t.text("Internal Server Error",500)},O,C,ft,A,B,ke,Se,Be,dt=(Be=class{constructor(t={}){p(this,C);m(this,"get");m(this,"post");m(this,"put");m(this,"delete");m(this,"options");m(this,"patch");m(this,"all");m(this,"on");m(this,"use");m(this,"router");m(this,"getPath");m(this,"_basePath","/");p(this,O,"/");m(this,"routes",[]);p(this,A,Wt);m(this,"errorHandler",Me);m(this,"onError",t=>(this.errorHandler=t,this));m(this,"notFound",t=>(u(this,A,t),this));m(this,"fetch",(t,...s)=>x(this,C,Se).call(this,t,s[1],s[0],t.method));m(this,"request",(t,s,a,i)=>t instanceof Request?this.fetch(s?new Request(t,s):t,a,i):(t=t.toString(),this.fetch(new Request(/^https?:\/\//.test(t)?t:`http://localhost${te("/",t)}`,s),a,i)));m(this,"fire",()=>{addEventListener("fetch",t=>{t.respondWith(x(this,C,Se).call(this,t.request,t,void 0,t.request.method))})});[...Mt,zt].forEach(r=>{this[r]=(o,...c)=>(typeof o=="string"?u(this,O,o):x(this,C,B).call(this,r,l(this,O),o),c.forEach(n=>{x(this,C,B).call(this,r,l(this,O),n)}),this)}),this.on=(r,o,...c)=>{for(const n of[o].flat()){u(this,O,n);for(const d of[r].flat())c.map(f=>{x(this,C,B).call(this,d.toUpperCase(),l(this,O),f)})}return this},this.use=(r,...o)=>(typeof r=="string"?u(this,O,r):(u(this,O,"*"),o.unshift(r)),o.forEach(c=>{x(this,C,B).call(this,w,l(this,O),c)}),this);const{strict:a,...i}=t;Object.assign(this,i),this.getPath=a??!0?t.getPath??et:Ft}route(t,s){const a=this.basePath(t);return s.routes.map(i=>{var o;let r;s.errorHandler===Me?r=i.handler:(r=async(c,n)=>(await qe([],s.errorHandler)(c,()=>i.handler(c,n))).res,r[$t]=i.handler),x(o=a,C,B).call(o,i.method,i.path,r)}),this}basePath(t){const s=x(this,C,ft).call(this);return s._basePath=te(this._basePath,t),s}mount(t,s,a){let i,r;a&&(typeof a=="function"?r=a:(r=a.optionHandler,a.replaceRequest===!1?i=n=>n:i=a.replaceRequest));const o=r?n=>{const d=r(n);return Array.isArray(d)?d:[d]}:n=>{let d;try{d=n.executionCtx}catch{}return[n.env,d]};i||(i=(()=>{const n=te(this._basePath,t),d=n==="/"?0:n.length;return f=>{const h=new URL(f.url);return h.pathname=h.pathname.slice(d)||"/",new Request(h,f)}})());const c=async(n,d)=>{const f=await s(i(n.req.raw),...o(n));if(f)return f;await d()};return x(this,C,B).call(this,w,te(t,"*"),c),this}},O=new WeakMap,C=new WeakSet,ft=function(){const t=new dt({router:this.router,getPath:this.getPath});return t.errorHandler=this.errorHandler,u(t,A,l(this,A)),t.routes=this.routes,t},A=new WeakMap,B=function(t,s,a){t=t.toUpperCase(),s=te(this._basePath,s);const i={basePath:this._basePath,path:s,method:t,handler:a};this.router.add(t,s,[a,i]),this.routes.push(i)},ke=function(t,s){if(t instanceof Error)return this.errorHandler(t,s);throw t},Se=function(t,s,a,i){if(i==="HEAD")return(async()=>new Response(null,await x(this,C,Se).call(this,t,s,a,"GET")))();const r=this.getPath(t,{env:a}),o=this.router.match(i,r),c=new qt(t,{path:r,matchResult:o,env:a,executionCtx:s,notFoundHandler:l(this,A)});if(o[0].length===1){let d;try{d=o[0][0][0][0](c,async()=>{c.res=await l(this,A).call(this,c)})}catch(f){return x(this,C,ke).call(this,f,c)}return d instanceof Promise?d.then(f=>f||(c.finalized?c.res:l(this,A).call(this,c))).catch(f=>x(this,C,ke).call(this,f,c)):d??l(this,A).call(this,c)}const n=qe(o[0],this.errorHandler,l(this,A));return(async()=>{try{const d=await n(c);if(!d.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return d.res}catch(d){return x(this,C,ke).call(this,d,c)}})()},Be),je="[^/]+",me=".*",ge="(?:|/.*)",ae=Symbol(),Ut=new Set(".\\+*[^]$()");function Vt(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1||e===me||e===ge?1:t===me||t===ge?-1:e===je?1:t===je?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var K,J,P,Ye,Fe=(Ye=class{constructor(){p(this,K);p(this,J);p(this,P,Object.create(null))}insert(t,s,a,i,r){if(t.length===0){if(l(this,K)!==void 0)throw ae;if(r)return;u(this,K,s);return}const[o,...c]=t,n=o==="*"?c.length===0?["","",me]:["","",je]:o==="/*"?["","",ge]:o.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let d;if(n){const f=n[1];let h=n[2]||je;if(f&&n[2]&&(h===".*"||(h=h.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(h))))throw ae;if(d=l(this,P)[h],!d){if(Object.keys(l(this,P)).some(g=>g!==me&&g!==ge))throw ae;if(r)return;d=l(this,P)[h]=new Fe,f!==""&&u(d,J,i.varIndex++)}!r&&f!==""&&a.push([f,l(d,J)])}else if(d=l(this,P)[o],!d){if(Object.keys(l(this,P)).some(f=>f.length>1&&f!==me&&f!==ge))throw ae;if(r)return;d=l(this,P)[o]=new Fe}d.insert(c,s,a,i,r)}buildRegExpStr(){const s=Object.keys(l(this,P)).sort(Vt).map(a=>{const i=l(this,P)[a];return(typeof l(i,J)=="number"?`(${a})@${l(i,J)}`:Ut.has(a)?`\\${a}`:a)+i.buildRegExpStr()});return typeof l(this,K)=="number"&&s.unshift(`#${l(this,K)}`),s.length===0?"":s.length===1?s[0]:"(?:"+s.join("|")+")"}},K=new WeakMap,J=new WeakMap,P=new WeakMap,Ye),Te,we,Ge,Bt=(Ge=class{constructor(){p(this,Te,{varIndex:0});p(this,we,new Fe)}insert(e,t,s){const a=[],i=[];for(let o=0;;){let c=!1;if(e=e.replace(/\{[^}]+\}/g,n=>{const d=`@\\${o}`;return i[o]=[d,n],o++,c=!0,d}),!c)break}const r=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let o=i.length-1;o>=0;o--){const[c]=i[o];for(let n=r.length-1;n>=0;n--)if(r[n].indexOf(c)!==-1){r[n]=r[n].replace(c,i[o][1]);break}}return l(this,we).insert(r,t,a,l(this,Te),s),a}buildRegExp(){let e=l(this,we).buildRegExpStr();if(e==="")return[/^$/,[],[]];let t=0;const s=[],a=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(i,r,o)=>r!==void 0?(s[++t]=Number(r),"$()"):(o!==void 0&&(a[Number(o)]=++t),"")),[new RegExp(`^${e}`),s,a]}},Te=new WeakMap,we=new WeakMap,Ge),ht=[],Yt=[/^$/,[],Object.create(null)],Ee=Object.create(null);function ut(e){return Ee[e]??(Ee[e]=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(t,s)=>s?`\\${s}`:"(?:|/.*)")}$`))}function Gt(){Ee=Object.create(null)}function Kt(e){var d;const t=new Bt,s=[];if(e.length===0)return Yt;const a=e.map(f=>[!/\*|\/:/.test(f[0]),...f]).sort(([f,h],[g,b])=>f?1:g?-1:h.length-b.length),i=Object.create(null);for(let f=0,h=-1,g=a.length;f<g;f++){const[b,T,v]=a[f];b?i[T]=[v.map(([E])=>[E,Object.create(null)]),ht]:h++;let y;try{y=t.insert(T,h,b)}catch(E){throw E===ae?new ct(T):E}b||(s[h]=v.map(([E,Z])=>{const fe=Object.create(null);for(Z-=1;Z>=0;Z--){const[L,Re]=y[Z];fe[L]=Re}return[E,fe]}))}const[r,o,c]=t.buildRegExp();for(let f=0,h=s.length;f<h;f++)for(let g=0,b=s[f].length;g<b;g++){const T=(d=s[f][g])==null?void 0:d[1];if(!T)continue;const v=Object.keys(T);for(let y=0,E=v.length;y<E;y++)T[v[y]]=c[T[v[y]]]}const n=[];for(const f in o)n[f]=s[o[f]];return[r,n,i]}function ee(e,t){if(e){for(const s of Object.keys(e).sort((a,i)=>i.length-a.length))if(ut(s).test(t))return[...e[s]]}}var $,W,ce,mt,gt,Ke,Jt=(Ke=class{constructor(){p(this,ce);m(this,"name","RegExpRouter");p(this,$);p(this,W);u(this,$,{[w]:Object.create(null)}),u(this,W,{[w]:Object.create(null)})}add(e,t,s){var c;const a=l(this,$),i=l(this,W);if(!a||!i)throw new Error(nt);a[e]||[a,i].forEach(n=>{n[e]=Object.create(null),Object.keys(n[w]).forEach(d=>{n[e][d]=[...n[w][d]]})}),t==="/*"&&(t="*");const r=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){const n=ut(t);e===w?Object.keys(a).forEach(d=>{var f;(f=a[d])[t]||(f[t]=ee(a[d],t)||ee(a[w],t)||[])}):(c=a[e])[t]||(c[t]=ee(a[e],t)||ee(a[w],t)||[]),Object.keys(a).forEach(d=>{(e===w||e===d)&&Object.keys(a[d]).forEach(f=>{n.test(f)&&a[d][f].push([s,r])})}),Object.keys(i).forEach(d=>{(e===w||e===d)&&Object.keys(i[d]).forEach(f=>n.test(f)&&i[d][f].push([s,r]))});return}const o=tt(t)||[t];for(let n=0,d=o.length;n<d;n++){const f=o[n];Object.keys(i).forEach(h=>{var g;(e===w||e===h)&&((g=i[h])[f]||(g[f]=[...ee(a[h],f)||ee(a[w],f)||[]]),i[h][f].push([s,r-d+n+1]))})}}match(e,t){Gt();const s=x(this,ce,mt).call(this);return this.match=(a,i)=>{const r=s[a]||s[w],o=r[2][i];if(o)return o;const c=i.match(r[0]);if(!c)return[[],ht];const n=c.indexOf("",1);return[r[1][n],c]},this.match(e,t)}},$=new WeakMap,W=new WeakMap,ce=new WeakSet,mt=function(){const e=Object.create(null);return Object.keys(l(this,W)).concat(Object.keys(l(this,$))).forEach(t=>{e[t]||(e[t]=x(this,ce,gt).call(this,t))}),u(this,$,u(this,W,void 0)),e},gt=function(e){const t=[];let s=e===w;return[l(this,$),l(this,W)].forEach(a=>{const i=a[e]?Object.keys(a[e]).map(r=>[r,a[e][r]]):[];i.length!==0?(s||(s=!0),t.push(...i)):e!==w&&t.push(...Object.keys(a[w]).map(r=>[r,a[w][r]]))}),s?Kt(t):null},Ke),U,D,Je,Xt=(Je=class{constructor(e){m(this,"name","SmartRouter");p(this,U,[]);p(this,D,[]);u(this,U,e.routers)}add(e,t,s){if(!l(this,D))throw new Error(nt);l(this,D).push([e,t,s])}match(e,t){if(!l(this,D))throw new Error("Fatal error");const s=l(this,U),a=l(this,D),i=s.length;let r=0,o;for(;r<i;r++){const c=s[r];try{for(let n=0,d=a.length;n<d;n++)c.add(...a[n]);o=c.match(e,t)}catch(n){if(n instanceof ct)continue;throw n}this.match=c.match.bind(c),u(this,U,[c]),u(this,D,void 0);break}if(r===i)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,o}get activeRouter(){if(l(this,D)||l(this,U).length!==1)throw new Error("No active router has been determined yet.");return l(this,U)[0]}},U=new WeakMap,D=new WeakMap,Je),ue=Object.create(null),V,S,X,ne,k,H,Y,Xe,pt=(Xe=class{constructor(e,t,s){p(this,H);p(this,V);p(this,S);p(this,X);p(this,ne,0);p(this,k,ue);if(u(this,S,s||Object.create(null)),u(this,V,[]),e&&t){const a=Object.create(null);a[e]={handler:t,possibleKeys:[],score:0},u(this,V,[a])}u(this,X,[])}insert(e,t,s){u(this,ne,++_e(this,ne)._);let a=this;const i=Ot(t),r=[];for(let o=0,c=i.length;o<c;o++){const n=i[o],d=i[o+1],f=Lt(n,d),h=Array.isArray(f)?f[0]:n;if(h in l(a,S)){a=l(a,S)[h],f&&r.push(f[1]);continue}l(a,S)[h]=new pt,f&&(l(a,X).push(f),r.push(f[1])),a=l(a,S)[h]}return l(a,V).push({[e]:{handler:s,possibleKeys:r.filter((o,c,n)=>n.indexOf(o)===c),score:l(this,ne)}}),a}search(e,t){var c;const s=[];u(this,k,ue);let i=[this];const r=Ze(t),o=[];for(let n=0,d=r.length;n<d;n++){const f=r[n],h=n===d-1,g=[];for(let b=0,T=i.length;b<T;b++){const v=i[b],y=l(v,S)[f];y&&(u(y,k,l(v,k)),h?(l(y,S)["*"]&&s.push(...x(this,H,Y).call(this,l(y,S)["*"],e,l(v,k))),s.push(...x(this,H,Y).call(this,y,e,l(v,k)))):g.push(y));for(let E=0,Z=l(v,X).length;E<Z;E++){const fe=l(v,X)[E],L=l(v,k)===ue?{}:{...l(v,k)};if(fe==="*"){const q=l(v,S)["*"];q&&(s.push(...x(this,H,Y).call(this,q,e,l(v,k))),u(q,k,L),g.push(q));continue}const[Re,De,he]=fe;if(!f&&!(he instanceof RegExp))continue;const I=l(v,S)[Re],bt=r.slice(n).join("/");if(he instanceof RegExp){const q=he.exec(bt);if(q){if(L[De]=q[0],s.push(...x(this,H,Y).call(this,I,e,l(v,k),L)),Object.keys(l(I,S)).length){u(I,k,L);const Oe=((c=q[0].match(/\//))==null?void 0:c.length)??0;(o[Oe]||(o[Oe]=[])).push(I)}continue}}(he===!0||he.test(f))&&(L[De]=f,h?(s.push(...x(this,H,Y).call(this,I,e,L,l(v,k))),l(I,S)["*"]&&s.push(...x(this,H,Y).call(this,l(I,S)["*"],e,L,l(v,k)))):(u(I,k,L),g.push(I)))}}i=g.concat(o.shift()??[])}return s.length>1&&s.sort((n,d)=>n.score-d.score),[s.map(({handler:n,params:d})=>[n,d])]}},V=new WeakMap,S=new WeakMap,X=new WeakMap,ne=new WeakMap,k=new WeakMap,H=new WeakSet,Y=function(e,t,s,a){const i=[];for(let r=0,o=l(e,V).length;r<o;r++){const c=l(e,V)[r],n=c[t]||c[w],d={};if(n!==void 0&&(n.params=Object.create(null),i.push(n),s!==ue||a&&a!==ue))for(let f=0,h=n.possibleKeys.length;f<h;f++){const g=n.possibleKeys[f],b=d[n.score];n.params[g]=a!=null&&a[g]&&!b?a[g]:s[g]??(a==null?void 0:a[g]),d[n.score]=!0}}return i},Xe),Q,Qe,Qt=(Qe=class{constructor(){m(this,"name","TrieRouter");p(this,Q);u(this,Q,new pt)}add(e,t,s){const a=tt(t);if(a){for(let i=0,r=a.length;i<r;i++)l(this,Q).insert(e,a[i],s);return}l(this,Q).insert(e,t,s)}match(e,t){return l(this,Q).search(e,t)}},Q=new WeakMap,Qe),xt=class extends dt{constructor(e={}){super(e),this.router=e.router??new Xt({routers:[new Jt,new Qt]})}},Zt=e=>{const s={...{origin:"*",allowMethods:["GET","HEAD","PUT","POST","DELETE","PATCH"],allowHeaders:[],exposeHeaders:[]},...e},a=(r=>typeof r=="string"?r==="*"?()=>r:o=>r===o?o:null:typeof r=="function"?r:o=>r.includes(o)?o:null)(s.origin),i=(r=>typeof r=="function"?r:Array.isArray(r)?()=>r:()=>[])(s.allowMethods);return async function(o,c){var f;function n(h,g){o.res.headers.set(h,g)}const d=await a(o.req.header("origin")||"",o);if(d&&n("Access-Control-Allow-Origin",d),s.origin!=="*"){const h=o.req.header("Vary");h?n("Vary",h):n("Vary","Origin")}if(s.credentials&&n("Access-Control-Allow-Credentials","true"),(f=s.exposeHeaders)!=null&&f.length&&n("Access-Control-Expose-Headers",s.exposeHeaders.join(",")),o.req.method==="OPTIONS"){s.maxAge!=null&&n("Access-Control-Max-Age",s.maxAge.toString());const h=await i(o.req.header("origin")||"",o);h.length&&n("Access-Control-Allow-Methods",h.join(","));let g=s.allowHeaders;if(!(g!=null&&g.length)){const b=o.req.header("Access-Control-Request-Headers");b&&(g=b.split(/\s*,\s*/))}return g!=null&&g.length&&(n("Access-Control-Allow-Headers",g.join(",")),o.res.headers.append("Vary","Access-Control-Request-Headers")),o.res.headers.delete("Content-Length"),o.res.headers.delete("Content-Type"),new Response(null,{headers:o.res.headers,status:204,statusText:"No Content"})}await c()}},es=/^\s*(?:text\/(?!event-stream(?:[;\s]|$))[^;\s]+|application\/(?:javascript|json|xml|xml-dtd|ecmascript|dart|postscript|rtf|tar|toml|vnd\.dart|vnd\.ms-fontobject|vnd\.ms-opentype|wasm|x-httpd-php|x-javascript|x-ns-proxy-autoconfig|x-sh|x-tar|x-virtualbox-hdd|x-virtualbox-ova|x-virtualbox-ovf|x-virtualbox-vbox|x-virtualbox-vdi|x-virtualbox-vhd|x-virtualbox-vmdk|x-www-form-urlencoded)|font\/(?:otf|ttf)|image\/(?:bmp|vnd\.adobe\.photoshop|vnd\.microsoft\.icon|vnd\.ms-dds|x-icon|x-ms-bmp)|message\/rfc822|model\/gltf-binary|x-shader\/x-fragment|x-shader\/x-vertex|[^;\s]+?\+(?:json|text|xml|yaml))(?:[;\s]|$)/i,$e=(e,t=ss)=>{const s=/\.([a-zA-Z0-9]+?)$/,a=e.match(s);if(!a)return;let i=t[a[1]];return i&&i.startsWith("text")&&(i+="; charset=utf-8"),i},ts={aac:"audio/aac",avi:"video/x-msvideo",avif:"image/avif",av1:"video/av1",bin:"application/octet-stream",bmp:"image/bmp",css:"text/css",csv:"text/csv",eot:"application/vnd.ms-fontobject",epub:"application/epub+zip",gif:"image/gif",gz:"application/gzip",htm:"text/html",html:"text/html",ico:"image/x-icon",ics:"text/calendar",jpeg:"image/jpeg",jpg:"image/jpeg",js:"text/javascript",json:"application/json",jsonld:"application/ld+json",map:"application/json",mid:"audio/x-midi",midi:"audio/x-midi",mjs:"text/javascript",mp3:"audio/mpeg",mp4:"video/mp4",mpeg:"video/mpeg",oga:"audio/ogg",ogv:"video/ogg",ogx:"application/ogg",opus:"audio/opus",otf:"font/otf",pdf:"application/pdf",png:"image/png",rtf:"application/rtf",svg:"image/svg+xml",tif:"image/tiff",tiff:"image/tiff",ts:"video/mp2t",ttf:"font/ttf",txt:"text/plain",wasm:"application/wasm",webm:"video/webm",weba:"audio/webm",webmanifest:"application/manifest+json",webp:"image/webp",woff:"font/woff",woff2:"font/woff2",xhtml:"application/xhtml+xml",xml:"application/xml",zip:"application/zip","3gp":"video/3gpp","3g2":"video/3gpp2",gltf:"model/gltf+json",glb:"model/gltf-binary"},ss=ts,as=(...e)=>{let t=e.filter(i=>i!=="").join("/");t=t.replace(new RegExp("(?<=\\/)\\/+","g"),"");const s=t.split("/"),a=[];for(const i of s)i===".."&&a.length>0&&a.at(-1)!==".."?a.pop():i!=="."&&a.push(i);return a.join("/")||"."},vt={br:".br",zstd:".zst",gzip:".gz"},is=Object.keys(vt),rs="index.html",ls=e=>{const t=e.root??"./",s=e.path,a=e.join??as;return async(i,r)=>{var f,h,g,b;if(i.finalized)return r();let o;if(e.path)o=e.path;else try{if(o=decodeURIComponent(i.req.path),/(?:^|[\/\\])\.\.(?:$|[\/\\])/.test(o))throw new Error}catch{return await((f=e.onNotFound)==null?void 0:f.call(e,i.req.path,i)),r()}let c=a(t,!s&&e.rewriteRequestPath?e.rewriteRequestPath(o):o);e.isDir&&await e.isDir(c)&&(c=a(c,rs));const n=e.getContent;let d=await n(c,i);if(d instanceof Response)return i.newResponse(d.body,d);if(d){const T=e.mimes&&$e(c,e.mimes)||$e(c);if(i.header("Content-Type",T||"application/octet-stream"),e.precompressed&&(!T||es.test(T))){const v=new Set((h=i.req.header("Accept-Encoding"))==null?void 0:h.split(",").map(y=>y.trim()));for(const y of is){if(!v.has(y))continue;const E=await n(c+vt[y],i);if(E){d=E,i.header("Content-Encoding",y),i.header("Vary","Accept-Encoding",{append:!0});break}}}return await((g=e.onFound)==null?void 0:g.call(e,c,i)),i.body(d)}await((b=e.onNotFound)==null?void 0:b.call(e,c,i)),await r()}},os=async(e,t)=>{let s;t&&t.manifest?typeof t.manifest=="string"?s=JSON.parse(t.manifest):s=t.manifest:typeof __STATIC_CONTENT_MANIFEST=="string"?s=JSON.parse(__STATIC_CONTENT_MANIFEST):s=__STATIC_CONTENT_MANIFEST;let a;t&&t.namespace?a=t.namespace:a=__STATIC_CONTENT;const i=s[e]||e;if(!i)return null;const r=await a.get(i,{type:"stream"});return r||null},ns=e=>async function(s,a){return ls({...e,getContent:async r=>os(r,{manifest:e.manifest,namespace:e.namespace?e.namespace:s.env?s.env.__STATIC_CONTENT:void 0})})(s,a)},cs=e=>ns(e);const de=new xt;de.use("/api/*",Zt());de.use("/static/*",cs({root:"./public"}));de.get("/api/contact",e=>e.json({message:"Contact endpoint ready"}));de.post("/api/contact",async e=>{try{const{name:t,email:s,organization:a,message:i,service:r}=await e.req.json();return e.json({success:!0,message:"Thank you for your message! We will get back to you soon.",data:{name:t,email:s,organization:a,service:r}})}catch{return e.json({success:!1,message:"Failed to process your message"},400)}});de.get("/",e=>e.html(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CTS Consulting - Equity • Strategy • Transformation</title>
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
    <link href="/static/styles.css" rel="stylesheet">
    
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
    <nav id="navbar" class="fixed w-full top-0 z-50 transition-all duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <div class="flex-shrink-0">
                    <a href="#home" class="text-2xl font-bold text-white font-playfair">CTS Consulting</a>
                </div>
                
                <!-- Desktop Navigation -->
                <div class="hidden md:block">
                    <div class="ml-10 flex items-baseline space-x-8">
                        <a href="#home" class="nav-link">Home</a>
                        <a href="#about" class="nav-link">About</a>
                        <a href="#framework" class="nav-link">LLI Framework™</a>
                        <a href="#services" class="nav-link">Services</a>
                        <a href="#founder" class="nav-link">Founder</a>
                        <a href="#contact" class="nav-link">Contact</a>
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
                <a href="#home" class="mobile-nav-link">Home</a>
                <a href="#about" class="mobile-nav-link">About</a>
                <a href="#framework" class="mobile-nav-link">LLI Framework™</a>
                <a href="#services" class="mobile-nav-link">Services</a>
                <a href="#founder" class="mobile-nav-link">Founder</a>
                <a href="#contact" class="mobile-nav-link">Contact</a>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="relative min-h-screen flex items-center justify-center overflow-hidden">
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
                <a href="#contact" class="inline-block bg-gradient-to-r from-gold-500 to-gold-600 text-black px-8 py-4 rounded-full font-semibold text-lg hover:from-gold-400 hover:to-gold-500 transform hover:scale-105 transition-all duration-300 shadow-lg">
                    <i class="fas fa-rocket mr-2"></i>
                    Start Your Transformation
                </a>
                <a href="#framework" class="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary-900 transition-all duration-300">
                    <i class="fas fa-lightbulb mr-2"></i>
                    Explore LLI Framework™
                </a>
            </div>
            
            <!-- Key Stats -->
            <div data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000" class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="text-center">
                    <div class="text-4xl font-bold text-gold-400 mb-2">15+</div>
                    <div class="text-gray-300">Years Experience</div>
                </div>
                <div class="text-center">
                    <div class="text-4xl font-bold text-gold-400 mb-2">100%</div>
                    <div class="text-gray-300">Equity Focused</div>
                </div>
                <div class="text-center">
                    <div class="text-4xl font-bold text-gold-400 mb-2">LLI™</div>
                    <div class="text-gray-300">Proven Framework</div>
                </div>
            </div>
        </div>
        
        <!-- Scroll indicator -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
            <a href="#about" class="block">
                <i class="fas fa-chevron-down text-2xl"></i>
            </a>
        </div>
    </section>

    <!-- About/Vision Section -->
    <section id="about" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16" data-aos="fade-up">
                <h2 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 font-playfair">Our Vision & Values</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Building a world where equity is not just a value — it's an outcome.
                </p>
            </div>
            
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
                
                <!-- Values -->
                <div data-aos="fade-left" data-aos-duration="1000">
                    <h3 class="text-2xl font-bold text-gray-900 mb-6 font-playfair">Our Core Values</h3>
                    <div class="space-y-4">
                        <div class="flex items-start">
                            <div class="w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                                <i class="fas fa-balance-scale text-white text-sm"></i>
                            </div>
                            <div>
                                <h4 class="font-semibold text-gray-900">Equity without ego</h4>
                                <p class="text-gray-600">Putting outcomes before recognition</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start">
                            <div class="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                                <i class="fas fa-ear-listen text-white text-sm"></i>
                            </div>
                            <div>
                                <h4 class="font-semibold text-gray-900">Listening before leading</h4>
                                <p class="text-gray-600">Understanding before action</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start">
                            <div class="w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                                <i class="fas fa-heart text-white text-sm"></i>
                            </div>
                            <div>
                                <h4 class="font-semibold text-gray-900">Wellness is a right</h4>
                                <p class="text-gray-600">Supporting whole-person wellbeing</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start">
                            <div class="w-8 h-8 bg-gold-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                                <i class="fas fa-shield-alt text-white text-sm"></i>
                            </div>
                            <div>
                                <h4 class="font-semibold text-gray-900">Safety is a strategy</h4>
                                <p class="text-gray-600">Creating psychological safety by design</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start">
                            <div class="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                                <i class="fas fa-compass text-white text-sm"></i>
                            </div>
                            <div>
                                <h4 class="font-semibold text-gray-900">Truth is our guide</h4>
                                <p class="text-gray-600">Data-driven, authentic approaches</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- We Help You Section -->
    <section class="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Hero Image -->
            <div class="text-center mb-12" data-aos="fade-up">
                <div class="max-w-4xl mx-auto mb-12">
                    <div class="relative rounded-2xl overflow-hidden shadow-2xl">
                        <img 
                            src="https://thediversitymovement.com/wp-content/uploads/2024/01/iStock-1481369283-scaled.jpg" 
                            alt="Diverse team collaboration representing inclusive workplace culture"
                            class="w-full h-64 sm:h-80 object-cover"
                            loading="lazy"
                        />
                        <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div class="absolute bottom-6 left-6 text-white">
                            <p class="text-lg font-semibold">Building Inclusive, Thriving Teams</p>
                            <p class="text-sm opacity-90">Real collaboration. Real outcomes.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="text-center mb-16" data-aos="fade-up">
                <h2 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 font-playfair">We Help You...</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Transform your organization with proven strategies and sustainable outcomes
                </p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div class="help-card" data-aos="fade-up" data-aos-delay="100">
                    <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center h-full">
                        <div class="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <i class="fas fa-handshake text-white text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mb-4">Cultivate Trust</h3>
                        <p class="text-gray-600 leading-relaxed">
                            Build authentic trust across your teams and community through transparent, equitable practices.
                        </p>
                    </div>
                </div>
                
                <div class="help-card" data-aos="fade-up" data-aos-delay="200">
                    <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center h-full">
                        <div class="w-16 h-16 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <i class="fas fa-users text-white text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mb-4">Safe Cultures</h3>
                        <p class="text-gray-600 leading-relaxed">
                            Create safe, honest, and equitable work cultures where everyone can thrive authentically.
                        </p>
                    </div>
                </div>
                
                <div class="help-card" data-aos="fade-up" data-aos-delay="300">
                    <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center h-full">
                        <div class="w-16 h-16 bg-gradient-to-r from-gold-500 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <i class="fas fa-dna text-white text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mb-4">Center Equity</h3>
                        <p class="text-gray-600 leading-relaxed">
                            Embed equity and wellness into your organizational DNA for lasting transformation.
                        </p>
                    </div>
                </div>
                
                <div class="help-card" data-aos="fade-up" data-aos-delay="400">
                    <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center h-full">
                        <div class="w-16 h-16 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <i class="fas fa-cogs text-white text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mb-4">Systems Change</h3>
                        <p class="text-gray-600 leading-relaxed">
                            Move beyond "diversity days" into meaningful, systems-level organizational change.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- LLI Framework Section -->
    <section id="framework" class="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900 text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16" data-aos="fade-up">
                <h2 class="text-4xl sm:text-5xl font-bold mb-6 font-playfair">The LLI Framework™</h2>
                <p class="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
                    Our signature 3-part system for sustainable change: From insight to impact with real strategy, accountability, and outcomes.
                </p>
                <div class="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto rounded-full"></div>
            </div>
            
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <!-- Listen -->
                <div class="framework-step listen" data-aos="fade-up" data-aos-delay="100">
                    <div class="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-2xl text-center h-full">
                        <div class="step-number mx-auto">1</div>
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
                        <div class="step-number mx-auto">2</div>
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
                        <div class="step-number mx-auto">3</div>
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
            
            <!-- Framework Visual -->
            <div class="text-center mt-16 mb-12" data-aos="fade-up" data-aos-delay="350">
                <div class="max-w-2xl mx-auto">
                    <img 
                        src="https://digitalleadership.com/wp-content/uploads/2022/11/Strategic-Planning-Process.webp" 
                        alt="Strategic planning process visualization representing the LLI Framework methodology"
                        class="w-full h-48 object-contain opacity-80 rounded-lg"
                        loading="lazy"
                    />
                </div>
            </div>
            
            <!-- Framework CTA -->
            <div class="text-center mt-16" data-aos="fade-up" data-aos-delay="400">
                <p class="text-xl text-gray-200 mb-8">
                    Ready to transform your organization with the LLI Framework™?
                </p>
                <a href="#contact" class="inline-block bg-gradient-to-r from-gold-500 to-gold-600 text-black px-8 py-4 rounded-full font-semibold text-lg hover:from-gold-400 hover:to-gold-500 transform hover:scale-105 transition-all duration-300 shadow-lg">
                    <i class="fas fa-comments mr-2"></i>
                    Start the Conversation
                </a>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-20 bg-white">
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
                    <ul class="space-y-2 text-gray-600">
                        <li class="flex items-center"><i class="fas fa-check text-primary-500 mr-2"></i> Culture assessments</li>
                        <li class="flex items-center"><i class="fas fa-check text-primary-500 mr-2"></i> Safety audits</li>
                        <li class="flex items-center"><i class="fas fa-check text-primary-500 mr-2"></i> Team workshops</li>
                    </ul>
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
                    <ul class="space-y-2 text-gray-600">
                        <li class="flex items-center"><i class="fas fa-check text-accent-500 mr-2"></i> Equity audits</li>
                        <li class="flex items-center"><i class="fas fa-check text-accent-500 mr-2"></i> Policy development</li>
                        <li class="flex items-center"><i class="fas fa-check text-accent-500 mr-2"></i> Impact measurement</li>
                    </ul>
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
                    <ul class="space-y-2 text-gray-600">
                        <li class="flex items-center"><i class="fas fa-check text-gold-500 mr-2"></i> Systems mapping</li>
                        <li class="flex items-center"><i class="fas fa-check text-gold-500 mr-2"></i> Process redesign</li>
                        <li class="flex items-center"><i class="fas fa-check text-gold-500 mr-2"></i> Change management</li>
                    </ul>
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
                    <ul class="space-y-2 text-gray-600">
                        <li class="flex items-center"><i class="fas fa-check text-red-500 mr-2"></i> Prevention programs</li>
                        <li class="flex items-center"><i class="fas fa-check text-red-500 mr-2"></i> Community partnerships</li>
                        <li class="flex items-center"><i class="fas fa-check text-red-500 mr-2"></i> Training & education</li>
                    </ul>
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
                    <ul class="space-y-2 text-gray-600">
                        <li class="flex items-center"><i class="fas fa-check text-green-500 mr-2"></i> Leadership coaching</li>
                        <li class="flex items-center"><i class="fas fa-check text-green-500 mr-2"></i> Wellness frameworks</li>
                        <li class="flex items-center"><i class="fas fa-check text-green-500 mr-2"></i> Sustainable practices</li>
                    </ul>
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
                    <ul class="space-y-2 text-gray-600">
                        <li class="flex items-center"><i class="fas fa-check text-purple-500 mr-2"></i> Strategic planning</li>
                        <li class="flex items-center"><i class="fas fa-check text-purple-500 mr-2"></i> Implementation support</li>
                        <li class="flex items-center"><i class="fas fa-check text-purple-500 mr-2"></i> Progress tracking</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Founder Section -->
    <section id="founder" class="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16" data-aos="fade-up">
                <h2 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 font-playfair">Meet Our Founder</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    "Listen. Learn. Implement.™ Transform Together."
                </p>
            </div>
            
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <!-- Founder Image -->
                <div class="order-2 lg:order-1" data-aos="fade-right" data-aos-duration="1000">
                    <div class="image-hover relative">
                        <div class="aspect-w-4 aspect-h-5 bg-gradient-to-br from-primary-200 to-accent-200 rounded-2xl overflow-hidden shadow-2xl">
                            <img 
                                src="https://page.gensparksite.com/v1/base64_upload/d2587015bf5f776d9212e72f6427e4d6" 
                                alt="Chiara Smith, Masters - Founder and CEO of CTS Consulting" 
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
                <div class="order-1 lg:order-2" data-aos="fade-left" data-aos-duration="1000">
                    <div class="space-y-6">
                        <div>
                            <h3 class="text-3xl font-bold text-gray-900 mb-2 font-playfair">Chiara Smith, Masters</h3>
                            <div class="space-y-2 text-lg text-gray-600">
                                <p class="font-semibold">Founder • Equity Strategist • Community Architect</p>
                                <p class="font-semibold text-primary-600">CEO of CTS Consulting™ | Creator of the LLI Framework™</p>
                            </div>
                        </div>
                        
                        <div class="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full"></div>
                        
                        <div class="space-y-4 text-gray-700 leading-relaxed">
                            <p>
                                Chiara Smith, Masters, is a trusted equity advisor and thought leader committed to systems change. 
                                As the Founder and CEO of CTS Consulting™, she supports organizations, institutions, and communities 
                                in building cultures grounded in psychological safety, racial equity, and collective well-being.
                            </p>
                            
                            <p>
                                With over 15 years in strategy, leadership development, and community engagement work, 
                                Chiara's approach is always intentional — not performative. Whether through coaching, 
                                listening sessions, or strategic planning, her focus is on concrete shifts that last.
                            </p>
                            
                            <p class="bg-primary-50 p-4 rounded-lg border-l-4 border-primary-500">
                                <strong>Notable Achievement:</strong> Author of "The Illusion of Inclusive Workspaces and the 
                                Psychological Safety of BIPOC Colleagues" — Grant makers In Health's most-read article of 2021.
                            </p>
                        </div>
                        
                        <!-- Credentials -->
                        <div class="grid grid-cols-2 gap-4 pt-6">
                            <div class="bg-white p-4 rounded-lg shadow-sm">
                                <div class="flex items-center">
                                    <i class="fas fa-graduation-cap text-primary-500 mr-3"></i>
                                    <div>
                                        <div class="font-semibold text-gray-900">Masters Degree</div>
                                        <div class="text-sm text-gray-600">Human Relations</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="bg-white p-4 rounded-lg shadow-sm">
                                <div class="flex items-center">
                                    <i class="fas fa-map-marker-alt text-accent-500 mr-3"></i>
                                    <div>
                                        <div class="font-semibold text-gray-900">Rochester Native</div>
                                        <div class="text-sm text-gray-600">Deep Community Roots</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Fun Fact -->
                        <div class="bg-gradient-to-r from-gold-50 to-gold-100 p-6 rounded-2xl border border-gold-200">
                            <h4 class="font-bold text-gray-900 mb-2 flex items-center">
                                <i class="fas fa-lightbulb text-gold-500 mr-2"></i>
                                Fun Fact
                            </h4>
                            <p class="text-gray-700">
                                Chiara is also the creative force behind <strong>Do Gooder: The Earth Conscious Brand™</strong> 
                                and the founder of the <strong>14621 Food Stands</strong>, a mutual-aid initiative that fed 
                                thousands during the COVID-19 pandemic.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Call to Action Section -->
    <section class="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900 text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div data-aos="fade-up" data-aos-duration="1000">
                <h2 class="text-4xl sm:text-5xl font-bold mb-6 font-playfair">
                    Your People Deserve Safe, Equity-Centered Spaces to Thrive
                </h2>
                <p class="text-xl text-gray-200 mb-8 leading-relaxed">
                    Let's co-create the systems that support that transformation.
                </p>
                <div class="space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center">
                    <a href="#contact" class="inline-block bg-gradient-to-r from-gold-500 to-gold-600 text-black px-8 py-4 rounded-full font-semibold text-lg hover:from-gold-400 hover:to-gold-500 transform hover:scale-105 transition-all duration-300 shadow-lg">
                        <i class="fas fa-calendar mr-2"></i>
                        Schedule Your Consultation
                    </a>
                    <a href="tel:+1-555-CTS-CONSULT" class="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary-900 transition-all duration-300">
                        <i class="fas fa-phone mr-2"></i>
                        Call Us Today
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16" data-aos="fade-up">
                <h2 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 font-playfair">Start Your Transformation</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Ready to build safe, equitable cultures? Let's begin the conversation about your organization's journey.
                </p>
            </div>
            
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <!-- Contact Form -->
                <div data-aos="fade-right" data-aos-duration="1000">
                    <div class="bg-gradient-to-br from-gray-50 to-primary-50 p-8 rounded-2xl shadow-lg">
                        <h3 class="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                        
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
                                <label for="service" class="block text-sm font-semibold text-gray-700 mb-2">Service Interest</label>
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
                
                <!-- Contact Information -->
                <div data-aos="fade-left" data-aos-duration="1000">
                    <div class="space-y-8">
                        <!-- Contact Details -->
                        <div class="bg-white p-8 rounded-2xl shadow-lg">
                            <h3 class="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                            
                            <div class="space-y-4">
                                <div class="flex items-center">
                                    <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                                        <i class="fas fa-envelope text-primary-600"></i>
                                    </div>
                                    <div>
                                        <div class="font-semibold text-gray-900">Email</div>
                                        <a href="mailto:hello@ctsconsulting.com" class="text-primary-600 hover:text-primary-800 transition-colors">
                                            hello@ctsconsulting.com
                                        </a>
                                    </div>
                                </div>
                                
                                <div class="flex items-center">
                                    <div class="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mr-4">
                                        <i class="fas fa-phone text-accent-600"></i>
                                    </div>
                                    <div>
                                        <div class="font-semibold text-gray-900">Phone</div>
                                        <a href="tel:+1-555-CTS-CONSULT" class="text-accent-600 hover:text-accent-800 transition-colors">
                                            +1 (555) CTS-CONSULT
                                        </a>
                                    </div>
                                </div>
                                
                                <div class="flex items-center">
                                    <div class="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mr-4">
                                        <i class="fas fa-map-marker-alt text-gold-600"></i>
                                    </div>
                                    <div>
                                        <div class="font-semibold text-gray-900">Location</div>
                                        <span class="text-gray-600">Rochester, NY & Virtual Consultations</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Why Choose Us -->
                        <div class="bg-gradient-to-br from-primary-50 to-accent-50 p-8 rounded-2xl">
                            <h3 class="text-2xl font-bold text-gray-900 mb-6">Why Choose CTS Consulting?</h3>
                            
                            <div class="space-y-4">
                                <div class="flex items-start">
                                    <i class="fas fa-star text-gold-500 mr-3 mt-1"></i>
                                    <div>
                                        <div class="font-semibold text-gray-900">Proven Framework</div>
                                        <div class="text-gray-600">LLI Framework™ with measurable outcomes</div>
                                    </div>
                                </div>
                                
                                <div class="flex items-start">
                                    <i class="fas fa-users text-primary-500 mr-3 mt-1"></i>
                                    <div>
                                        <div class="font-semibold text-gray-900">15+ Years Experience</div>
                                        <div class="text-gray-600">Deep expertise in equity and transformation</div>
                                    </div>
                                </div>
                                
                                <div class="flex items-start">
                                    <i class="fas fa-heart text-accent-500 mr-3 mt-1"></i>
                                    <div>
                                        <div class="font-semibold text-gray-900">Holistic Approach</div>
                                        <div class="text-gray-600">Strategy with soul, rooted in values</div>
                                    </div>
                                </div>
                                
                                <div class="flex items-start">
                                    <i class="fas fa-chart-line text-gold-500 mr-3 mt-1"></i>
                                    <div>
                                        <div class="font-semibold text-gray-900">Real Results</div>
                                        <div class="text-gray-600">Sustainable, systems-level change</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Social Links -->
                        <div class="bg-white p-8 rounded-2xl shadow-lg text-center">
                            <h3 class="text-xl font-bold text-gray-900 mb-4">Connect With Us</h3>
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
                        <li><a href="#about" class="text-gray-300 hover:text-gold-400 transition-colors">About</a></li>
                        <li><a href="#framework" class="text-gray-300 hover:text-gold-400 transition-colors">LLI Framework™</a></li>
                        <li><a href="#services" class="text-gray-300 hover:text-gold-400 transition-colors">Services</a></li>
                        <li><a href="#founder" class="text-gray-300 hover:text-gold-400 transition-colors">Founder</a></li>
                        <li><a href="#contact" class="text-gray-300 hover:text-gold-400 transition-colors">Contact</a></li>
                    </ul>
                </div>
                
                <!-- Contact Info -->
                <div>
                    <h4 class="text-lg font-semibold mb-4">Get in Touch</h4>
                    <div class="space-y-2 text-gray-300">
                        <p><i class="fas fa-envelope mr-2"></i> hello@ctsconsulting.com</p>
                        <p><i class="fas fa-phone mr-2"></i> +1 (555) CTS-CONSULT</p>
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
  `));const We=new xt,ds=Object.assign({"/src/index.tsx":de});let yt=!1;for(const[,e]of Object.entries(ds))e&&(We.route("/",e),We.notFound(e.notFoundHandler),yt=!0);if(!yt)throw new Error("Can't import modules from ['/src/index.tsx','/app/server.ts']");export{We as default};
