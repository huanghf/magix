/*!3.8.1 MIT kooboy_li@163.com*/define("magix",["$"],e=>{let t,r,i=e.isPlainObject,n=e.isArray,o=0,a="",f=[],l=",",s=window,$=document,h=e($),c=s.setTimeout,d=function(){},u=JSON.stringify,p="\x1e",g="object",m="prototype",v="params",b="path",w="mx-view",y=/[#?].*$/,k=/([^=&?\/#]+)=?([^&#?]*)/g,x=/(?!^)=|&/,V=e=>(e||"mx_")+o++,I=V(),j={rootId:V(),defaultView:I,error(e){throw e}},_=e=>typeof e==g?e:$.getElementById(e),S=e=>!e||typeof e!=g,q=(e,t,r)=>{let i,n,o,a=0;for(o in e)i=e[o],n=t[o],S(i)&&n===i||(r[o]=1,a=1),t[o]=i;return a},A=(e,t,r)=>{if(e=_(e),t=_(t),e&&t&&!(r=e==t))try{r=16==(16&t.compareDocumentPosition(e))}catch(e){}return r},{assign:O,keys:T,hasOwnProperty:U}=Object,C=e("head"),P=(e,t)=>{t&&!P[e]&&(P[e]=1,C.append(`<style>${t}`))},Z=e=>e.id||(e.id=V()),H=(e,t,r,i,o)=>{t=t||f,n(e)||(e=[e]),n(t)||(t=[t]);for(o of e)try{i=o&&o.apply(r,t)}catch(e){j.error(e)}return i},E=(e,t)=>e&&U.call(e,t),N=(e,t,r)=>{let i,n;for(i in t)n=t[i],r[i]=(n+a)[0]==p?e[n]:n},z=(e,t)=>t.f-e.f||t.t-e.t,B=function(e,t,r,i){(i=this).c=[],i.b=t||5,i.x=i.b+(e||20),i.r=r};O(B[m],{get(e){let t=this.c[p+e];return t&&(t.f++,t.t=o++,t=t.v),t},each(e,t,r,i,n){i=(r=this).c;for(n of i)e(n.v,t,r)},set(e,t){let r=this,i=r.c,n=p+e,a=i[n],f=r.b;if(!a){if(i.length>=r.x)for(i.sort(z);f--;)(a=i.pop()).f>0&&r.del(a.o);a={o:e},i.push(a),i[n]=a}a.v=t,a.f=1,a.t=o++},del(e){e=p+e;let t=this.c,r=t[e],i=this.r;r&&(r.f=-1,r.v=a,delete t[e],i&&H(i,r.o))},has(e){return E(this.c,p+e)}});let L=(e,t)=>{if(e)if(I==e)r||(r=wt.extend()),t(r);else if(n(e))require(e,t);else try{t(require(e))}catch(r){require([e],t)}else t&&t()},M=function(){},R=(e,t,r,i,n)=>(M[m]=t[m],n=new M,O(n,r),O(e,i),n.constructor=e,e[m]=n,e),D=e.find||e.zepto,F=D.matchesSelector||D.matches,J=(e,t)=>{t=e.data,e.eventTarget=t.e,H(t.f,e,t.v)},Q=(t,r,i,n,o)=>{o&&(r+=`.${o.i}`),n?e(t).off(r,i):e(t).on(r,o,i)};let G,K=new B,W=0,X=(e,t,r)=>{try{r=decodeURIComponent(r)}catch(e){}G[t]=r},Y=e=>{let t,r=K.get(e);return r||(G={},e==(t=e.replace(y,a))&&x.test(t)&&(t=a),e.replace(t,a).replace(k,X),K.set(e,r={a:t,b:G})),{path:r.a,params:{...r.b}}},ee=(e,t,r)=>{let i,n,o,f=[];for(n in t)i=t[n]+a,(!r||i||E(r,n))&&(i=encodeURIComponent(i),f.push(o=n+"="+i));return o&&(e+=(e&&(~e.indexOf("?")?"&":"?"))+f.join("&")),e},te=(e,t)=>{let r,i={};if(e)for(r of e)i[t&&r?r[t]:r]=t?r:1+(0|i[r]);return i},re={config:(e,t)=>(t=j,e&&(t=i(e)?O(t,e):t[e]),t),boot(e){O(j,e),L(j.ini,t=>{O(j,t,e),L(j.exts,()=>{Ue.on("changed",Be),$e.on("changed",Be),W=1,qe()})})},toMap:te,toTry:H,toUrl:ee,parseUrl:Y,mix:O,has:E,keys:T,inside:A,node:_,applyStyle:P,guid:V,use:L,Cache:B,nodeId:Z},ie={fire(e,t,r,i){let n,o,f,l,s=this,$=s[p+e];if(t||(t={}),t.type||(t.type=e),$)for(o=(n=$.length)-1;n--;)(l=$[f=i?n:o-n]).f?(l.x=1,H(l.f,t,s),l.x=a):l.x||($.splice(f,1),o--);($=s[`on${e}`])&&H($,t,s),r&&s.off(e)},on(e,t){let r=p+e;(this[r]||(this[r]=[])).push({f:t})},off(e,t){let r,i=p+e,n=this,o=n[i];if(t){if(o)for(r of o)if(r.f==t){r.f=a;break}}else delete n[i],delete n[`on${e}`]}};re.Event=ie;let ne={},oe={},ae={},fe=0,le=e=>{e=(e+a).split(",");for(let t of e)E(oe,t)?oe[t]++:oe[t]=1;return e},se=e=>{let t,r;for(t of e)E(oe,t)&&((r=--oe[t])||(delete oe[t],delete ne[t]))};let $e={get(e){let t=e?ne[e]:ne;return t},set(e){fe=q(e,ne,ae)||fe},digest(e){e&&$e.set(e),fe&&(fe=0,this.fire("changed",{keys:ae}),ae={})},diff:()=>ae,clean:e=>({ctor(){e=le(e),this.on("destroy",()=>se(e))}}),...ie};re.State=$e;let he,ce,de,ue,pe,ge,me,ve,be="view",we=new B,ye=new B,ke=s.location,xe=0,Ve={query:{},params:{},href:a},Ie=/(?:^.*\/\/[^\/]+|#.*$)/gi,je=/^[^#]*#?!?/,_e=function(e){return this[v][e]||a},Se=(e,t)=>{e=`#!${e}`,t?ke.replace(e):ke.hash=e},qe=()=>{let e,t,r=Oe().srcHash;Q(s,"hashchange",(i,n,o)=>{t||(n=Oe(),(e=n.srcHash)!=r&&(o=(()=>{i.p=1,r=e,t=a,Se(e),Te()}),i={reject(){i.p=1,t=a,Se(r)},resolve:o,prevent(){t=1}},Ue.fire("change",i),t||i.p||o()))}),s.onbeforeunload=((e,t,r)=>{if(e=e||s.event,t={},Ue.fire("pageunload",t),r=t.msg)return e&&(e.returnValue=r),r}),Te()},Ae=$.title,Oe=e=>{e=e||ke.href;let t,r,n,o,f,l=we.get(e);return l||(t=e.replace(Ie,a),r=e.replace(je,a),n=Y(t),o=Y(r),f={...n[v],...o[v]},l={get:_e,href:e,srcQuery:t,srcHash:r,query:n,hash:o,params:f},W&&(((e,t)=>{if(ce||(ce=j.routes||{},de=j.unmatchView,ue=j.defaultView,pe=j.defaultPath||"/",ge=j.rewrite),!e[be]){let r=e.hash[b]||pe;ge&&(r=ge(r,e[v],ce)),t=ce[r]||de||ue,e[b]=r,e[be]=t,i(t)&&O(e,t)}})(l),we.set(e,l))),l},Te=()=>{let e=Oe(),t=((e,t)=>{let r=e.href,i=t.href,n=r+p+i,o=ye.get(n);if(!o){let i,a;o={params:a={},force:!r};let f,l=e[v],s=t[v],$=T(l).concat(T(s)),h=e=>{let t=l[e],r=s[e];t!=r&&(a[e]={from:t,to:r},i=1)};for(f of $)h(f);l=e,s=t,a=o,h(b),h(be),ye.set(n,o={a:i,b:o})}return o})(Ve,Ve=e);return!xe&&t.a&&((he=t.b)[b]&&($.title=e.title||Ae),Ue.fire("changed",he)),xe=0,he},Ue={parse:Oe,diff:Te,to(e,t,r,n){!t&&i(e)&&(t=e,e=a);let o=Y(e),f=o[v],l=o[b],s=Ve[b],$=Ve[v],h=Ve.query[v];if(O(f,t),l)for(s in h)E(f,s)||(f[s]=a);else $&&(l=s,f={...$,...f});var c,d,u,p;d=Ve,u=r,p=n,(c=ee(c=l,f,h))!=d.srcHash&&(xe=p,Se(c,u))},...ie};re.Router=Ue;let Ce=e=>{if(!e.$a&&!e.$b&&e.$cc==e.$rc){e.$cr||(e.$cr=1,e.$ca=0,e.fire("created"));let t,{id:r,pId:i}=e;(t=Ze[i])&&!E(t.$d,r)&&(t.$d[r]=1,t.$rc++,Ce(t))}},Pe=(e,t)=>{if(!e.$ca&&e.$cr){e.$cr=0,e.$ca=1,e.fire("alter",t);let r,{id:i,pId:n}=e;(r=Ze[n])&&E(r.$d,i)&&(r.$rc--,delete r.$d[i],Pe(r,t))}},Ze={},He=(e,t,r)=>{for(t=e.$e;t.length;)(r=t.shift()).r||e.invoke(r.n,r.a),delete t[r.k]},Ee=[],Ne=0,ze=(e,t,r)=>{if(e&&e.$f!=Ne&&(r=e.$v)&&r.$a>1){(t?((e,t,r)=>{let i,n=e.$os;if(n)for(i of n)if(r=E(t,i))break;return r})(r,t):bt(r))&&r.$b();let i,n=e.children();for(i of n)ze(Ze[i],t)}},Be=e=>{let r,i=(e=>(me||(t=$.body,e=j.rootId,_(e)||(t.id=e),me=new Le(e)),me))();(r=e[be])?i.mountView(r.to):(Ne=o++,ze(i,e.keys))},Le=function(e,t,r){var i,n;(r=this).id=e,r.$c={},r.$cc=0,r.$rc=0,r.$g=1,r.$d={},r.$e=[],r.pId=t,n=r,E(Ze,i=e)||(Ze[i]=n,Le.fire("add",{vframe:n}),(i=_(i))&&(i.vframe=n))};O(Le,{all:()=>Ze,get:e=>Ze[e]},ie),O(Le[m],ie,{mountView(e,t){let r,i,n,o,a,f,l=this,{id:s,pId:$,$g:h}=l,c=_(s);!l.$h&&c&&(l.$h=1,l.$i=c.innerHTML),l.unmountView(),l.$a=0,c&&e&&(l[b]=e,r=Y(e),n=r[b],i=++h,o=r[v],f=(f=(f=(f=Ze[$])&&f.$v)&&f.$d)&&f.$a,e.indexOf(p)>0&&N(f,o,o),l.$n=r[b],O(o,t),L(n,e=>{if(i==l.$g){if(!e)return j.error(Error(`id:${s} cannot load:${n}`));a=vt(e),n=new e(s,l,o,a),l.$v=n,l.$f=Ne,pt(n),H(n.init,o,n),n.$b(),n.$e||(l.$h=0,n.$f||n.endUpdate())}}))},unmountView(){let t,r,i=this,{$v:n,id:o}=i;i.$e=[],n&&(ve||(r=1,ve={id:o}),i.$a=1,i.unmountZone(0,1),Pe(i,ve),i.$v=0,n.$a>0&&(n.$a=0,n.fire("destroy",0,1,1),ct(n,1),pt(n,1),n.owner=0),n.$a--,(t=_(o))&&i.$h&&e(t).html(i.$i),r&&(ve=0)),i.$g++},mountVframe(e,t,r){let i,n=this,o=n.id,a=n.$c;return Pe(n,{id:e}),(i=Ze[e])||(E(a,e)||(n.$o=0,n.$cc++),a[e]=e,(i=Ee.pop())?Le.call(i,e,o):i=new Le(e,o)),i.mountView(t,r),i},mountZone(t,r){let i,n,o=this,a=[];t=t||o.id;let f=e(`#${t} [${w}]`);o.$b=1;for(i of f)n=Z(i),i.$a||(i.$a=1,a.push([n,i.getAttribute(w)]));for([n,i]of a)a[n]?j.error(Error(`vf.id duplicate:${n} at ${o[b]}`)):o.mountVframe(a[n]=n,i);o.$b=0,r||Ce(o)},unmountVframe(e,t){let r;if(e=e?this.$c[e]:this.id,r=Ze[e]){let{$cr:a,pId:f}=r;r.unmountView(),n=a,(o=Ze[i=e])&&(delete Ze[i],Le.fire("remove",{vframe:o,fcc:n}),(i=_(i))&&(i.$a=i.vframe=0)),r.id=r.pId=r.$c=r.$d=r.$h=0,r.off("alter"),r.off("created"),Ee.push(r),(r=Ze[f])&&E(r.$c,e)&&(delete r.$c[e],r.$o=0,r.$cc--,t||Ce(r))}var i,n,o},unmountZone(e,t){let r,i=this;for(r in i.$c)(!e||r!=e&&A(r,e))&&i.unmountVframe(r,1);t||Ce(i)},parent(e,t){for(t=this,e=e>>>0||1;t&&e--;)t=Ze[t.pId];return t},children(e){return(e=this).$o||(e.$o=T(e.$c))},invoke(e,t){let r,i,n,o,a,f=this.$e;return(i=this.$v)&&i.$f?r=(n=i[e])&&H(n,t,i):((o=f[a=p+e])&&(o.r=t===o.a),o={n:e,a:t,k:a},f.push(o),f[a]=o),r}}),re.Vframe=Le,e.fn.invokeView=function(e,t){if(this.length){let r=this[0].vframe;if(void 0===t)return r&&r.invoke(e);for(let i of this)(r=i.vframe)&&r.invoke(e,t)}};let Me=new B(30,10),Re=/(?:([\w\-]+)\x1e)?([^(]+)\(([\s\S]*)?\)/,De={},Fe={},Je=(e,r)=>{let i,n,o,a,l,s,$,h=[],c=e,d=e.getAttribute(`mx-${r}`),u=[],p=0;if(d&&((l=Me.get(d))||((l={v:(l=d.match(Re)||f)[1],n:l[2],i:l[3]}).p=l.i&&H(Function(`return ${l.i}`),f,e),Me.set(d,l)),l={...l,r:d},h.push(l)),l&&!l.v||Fe[r]){if(!($=e.$a))for(u.push(c);c!=t&&(c=c.parentNode);){if(Ze[n=c.id]||(n=c.$v)){$=n;break}u.push(c)}if($){for(d of u)d.$a=$;c=e.id,Ze[c]&&(p=$=c);do{if((i=Ze[$])&&(s=i.$v)){a=(o=s.$so)[r];for(n in a)o={r:n,v:$,n:n},n?F(e,n)&&h.push(o):p&&h.unshift(o);if(s.$e&&!p){l&&!l.v&&(l.v=$);break}p=0}}while(i&&($=i.pId))}}return h},Qe=e=>{let r,i,n,o,a,f,l,s,{target:$,type:h}=e,c=[];for(;$!=t;){if((r=Je($,h)).length){c=[];for(let{v:t,r:i,n:c,p:d,i:u}of r){if(l!=t){if(l&&e.isPropagationStopped())break;l=t}if(o=(n=Ze[t])&&n.$v){if((f=o[a=c+p+h])&&(e.eventTarget=$,s=d||{},u&&u.indexOf(p)>0&&N(o.$d.$a,s,s={}),e[v]=s,H(f,e,o),e.isImmediatePropagationStopped()))break;0}else e.stopPropagation();0}}if((i=$.$)&&i[h]||e.isPropagationStopped())break;c.push($),$=$.parentNode||t}for($ of c)(i=$.$||($.$={}))[h]=1},Ge=(e,r,i)=>{let n=0|De[e],o=i?-1:1;n&&i!==n||Q(t,e,Qe,i),De[e]=n+o,r&&(Fe[e]=(0|Fe[e])+o)},Ke={input_value:1,input_checked:1,input_disabled:1,input_readonly:1,textarea_value:1,textarea_checked:1,textarea_disabled:1,textarea_readonly:1,option_selected:1},We={area:1,br:1,col:1,embed:1,hr:1,img:1,input:1,param:1,source:1,track:1,wbr:1},Xe=/^<([a-z\d]+)((?:\s+[-A-Za-z\d_]+(?:="[^"]*")?)*)\s*(\/?)>/,Ye=/([-A-Za-z\d_]+)(?:="([^"]*)")?/g,et=/^<\/[a-z\d+]+>/,tt=(e,t)=>{let r=Z(t);e.$c[r]?e.unmountVframe(r,1):e.unmountZone(r,1)},rt=(e,t,r,i)=>{let n,o,a;for(n of t.i)o=n.d,E(r.j,o)||(n.e?"value"==o?e.value="":e[o]=!1:"id"==o?i.d.push([e,""]):e.removeAttribute(o));for(n of r.i)o=n.d,a=n.f,t.j[o]!=a&&(n.e?"value"==o?e.value=a:e[o]=!0:"id"==o?i.d.push([e,a]):e.setAttribute(o,a))},it=(e,t,r,i,n,o,a,f,l)=>{if(3==(l=e.h))return $.createTextNode(e.b);f="svg"==l?"http://www.w3.org/2000/svg":t.namespaceURI,(i=$.createElementNS(f,l)).innerHTML=e.b;for(n of e.i)o=n.d,a=n.f,n.e?"value"==o?i.value=a:i[o]=!0:"id"==o?r.d.push([i,a]):i.setAttribute(o,a);return i},nt=(e,t,r,i,n,o,a)=>{let f,l,s,$,h,c,d,u,p,g,m,v,b,w=e.childNodes,y={};if(t){for(f=(h=t.a).length,l=(c=r.a).length,s=0;s<f;s++)(g=(d=h[s]).k)&&(y[g]={l:w[s],m:d});for(s=0;s<l;s++)if(d=h[s],m=y[g=(u=c[s]).k]){if(v=m.l,b=m.m,v!=w[s]){for(h.splice(s,0,d=b),$=h.length;$--;)if(h[$].k==g){h.splice($,1);break}e.insertBefore(v,w[s])}ot(w[s],e,d,u,i,n,o,a)}else d?y[d.k]?(h.splice(s,0,u),f++,e.insertBefore(it(u,e,i),w[s])):ot(w[s],e,d,u,i,n,o,a):e.appendChild(it(u,e,i));for(s=l;s<f;s++)p=e.lastChild,tt(n,p),e.removeChild(p),i.c=1}else i.c=1,e.innerHTML=r.b},ot=(e,t,r,i,n,o,a,f)=>{if(r.h==i.h)if(3==r.h)r.b!=i.b&&(e.nodeValue=i.b);else{let t,l,s,$,h,c,d,u,g=i.j[w],m=i.b,y=Ze[e.id];g&&y?($=y.$v,c=(h=Y(g))[v],g.indexOf(p)>-1&&N(a,c,c),d=m!=y.$i,u=!$.$e,y.$n==h[b]&&$.$g?(y.$i=m,y[b]=g,h={keys:f,inner:m,deep:u,html:d},rt(e,r,i,n),H($.$g,[c,h],$)&&$.$b(),l=h.deep):(s=1,l=1,t=1)):(t=1,l=1,s=y),s&&y.unmountVframe(0,1),t&&rt(e,r,i,n),l&&!We[i.h]&&(n.c=1,nt(e,r,i,n,o,a,f))}else tt(o,e),t.replaceChild(it(i,t,n),e),n.c=1},at=(e,t,r,i)=>{let n,o,a,l,s=e.$b,$=Ze[s],c=$&&$.$v,d={d:[]},u=_(s);if(c&&c.$a>0&&(n=c.$e)){if(r){l=(e=>{let t,r,i,n,o,a,l,s,$,h,c,d=e.length,u=0,p={a:[],b:e},g=[{c:p}],m=(e,t)=>{t.replace(Ye,(t,r,i)=>{"id"==r&&(c=i),a.push({d:r,e:Ke[e+"_"+r],f:i}),$[r]=i})};for(;u<d;)t=1,0==(i=e.slice(u)).indexOf("</")?(n=i.match(et))&&(s=(p=g.pop()).c,a=e.slice(p.g,u),"textarea"==s.h?(s.i.push({d:"value",f:a,e:1}),s.j.value=a,s.a=f):s.b=a,p=g[g.length-1].c,u+=n[0].length,t=0):"<"==i[0]&&(n=i.match(Xe))&&(o=n[1],l=n[3]||We[o],a=[],$={},c="",m(o,n[2]),s={k:c,h:o,i:a,j:$,a:[]},u+=n[0].length,p.a.push(s),l||(g.push({c:s,g:u}),p=s),t=0),t&&(u+=(h=(r=i.indexOf("<"))<0?i:i.substring(0,r)).length,s={h:3,b:h},p.a.push(s));return p})(o=$t(n(p,t),s)),nt(u,e.$d,l,d,$,t,i),e.$d=l;for(a of d.d)a[0].id=a[1];d.c&&(c.endUpdate(s),h.trigger({type:"htmlchanged",vId:s}))}c.fire("domready")}},ft=function(e){this.$b=e,this.$c=1,this.$a={vId:e,[p]:1},this.$k={}};O(ft[m],{get(e,t){return t=this.$a,e&&(t=t[e]),t},set(e){let t=this,{$a:r,$k:i}=t;return e&&(t.$c=q(e,r,i)||t.$c),t},digest(e,t,r){let i=this;return i.set(e),e=i.$a,t=i.$k,r=i.$c,i.$c=0,i.$k={},at(i,e,r,t),i},snapshot(){return this.$e=u(this.$a),this},altered(){let e=this;if(e.$e)return e.$e!=u(e.$a)}});let lt=/^(\$?)([^<]*)<([^>]+)>$/,st=/\x1f/g,$t=(e,t)=>(e+a).replace(st,t),ht=(e,t,r)=>(e.$h?r=e:((r=function(e){H(r.$h,e,this)}).$h=[e],r.$i=1),r.$h=r.$h.concat(t.$h||t),r),ct=(e,t)=>{let r,i,n=e.$r;for(r in n)i=n[r],(t||i.x)&&dt(n,r,1)},dt=(e,t,r,i)=>{let n,o,a=e[t];return a&&a!=i&&((n=(o=a.e).destroy)&&r&&H(n,f,o),delete e[t]),o},ut=(e,t,r,i,n)=>{i=e[t],e[t]=e[r]=function(...e){(n=this).$a>0&&(n.$a++,n.fire("rendercall"),ct(n),H(i,e,n))}},pt=(e,t)=>{let r,{$eo:i,$so:n,$el:o,id:a}=e;for(r in i)Ge(r,n[r],t);for(r of o)Q(r.e,r.n,J,t,{i:a,v:e,f:r.f,e:r.e})},gt=[],mt={win:s,doc:$},vt=e=>{if(!e[p]){e[p]=[];let t,r,i,n,o,a,f,s,$,h=e[m],c={},d=[],u={},g={};if(r=h.mixins){for(o of r)for(f in o)t=o[f],i=g[f],"ctor"!=f?(lt.test(f)&&(i?t=ht(i,t):t.$i=1),g[f]=t):e[p].push(t);for(f in g)E(h,f)||(h[f]=g[f])}for(f in h)if(t=h[f],r=f.match(lt)){[,a,i,n]=r,n=n.split(l);for(s of n){if(o=mt[i],$=1,a){if(o){d.push({f:t,e:o,n:s});continue}$=2,(o=u[s])||(o=u[s]={}),o[i]=1}c[s]=c[s]|$,(o=h[s=i+p+s])?o.$i&&(t.$i?h[s]=ht(o,t):E(h,f)&&(h[s]=t)):h[s]=t}}ut(h,"render","$b"),h.$eo=c,h.$el=d,h.$so=u,h.$e=h.tmpl,h.$g=h.assign}return e[p]},bt=e=>{let t,r,i,n=e.$l;if(n.f&&(n.p&&(t=he[b]),!t&&n.k)){i=he[v];for(r of n.k)if(t=E(i,r))break}return t},wt=function(e,t,r,i){(i=this).owner=t,i.id=e,i.$l={k:[]},i.$r={},i.$a=1,i.updater=i.$d=new ft(i.id),H(gt,r,i)},yt=wt[m];O(wt,{merge(...e){let t,r;for(t of e)(r=t&&t.ctor)&&gt.push(r),O(yt,t)},extend(e,t){let r=this,i=(e=e||{}).ctor,n=[];i&&n.push(i);let o=function(e,t,i,o){r.call(this,e,t,i),H(n.concat(o),i,this)};return o.extend=r.extend,R(o,r,e,t)}}),O(yt,ie,{init:d,wrapEvent(e){return $t(e,this.id)},beginUpdate(e,t){(t=this).$a>0&&t.$f&&t.owner.unmountZone(e,1)},endUpdate(e,t,r,i,n){(r=this).$a>0&&(e=e||r.id,t?n=t:(n=r.$f,r.$f=1),(i=r.owner).mountZone(e,t),n||c(r.wrapAsync(He),0,i))},wrapAsync(e,t){let r=this,i=r.$a;return(...n)=>{if(i>0&&i==r.$a)return e.apply(t||r,n)}},observeLocation(e,t){let r;(r=this.$l).f=1,i(e)&&(t=e[b],e=e[v]),r.p=t,e&&(r.k=(e+a).split(l))},observeState(e){this.$os=(e+a).split(l)},capture(e,t,r,i){return i=this.$r,t?(dt(i,e,1,t),i[e]={e:t,x:r}):t=(i=i[e])&&i.e,t},release(e,t){return dt(this.$r,e,t)},leaveTip(e,t){let r=this,i=n=>{let o="a",a="b";"change"!=n.type&&(o="b",a="a"),i[o]?(n.prevent(),n.reject()):t()?(n.prevent(),i[a]=1,r.leaveConfirm(e,()=>{i[a]=0,n.resolve()},()=>{i[a]=0,n.reject()})):n.resolve()},n=r=>{t()&&(r.msg=e)};Ue.on("change",i),Ue.on("pageunload",n),r.on("unload",i),r.on("destroy",()=>{Ue.off("change",i),Ue.off("pageunload",n)})},render:d}),re.View=wt;let kt=e.type,xt=e.now||Date.now,Vt=function(){this.id=V("b"),this.$={}};O(Vt[m],{get(e,t,r){let i,o=t!=r,f=this.$;if(e){let t,i=n(e)?e.slice():(e+a).split(".");for(;(t=i.shift())&&f;)f=f[t];t&&(f=r)}return o&&(i=kt(t))!=kt(f)&&(f=t),f},set(e,t){i(e)||(e={[e]:t}),O(this.$,e)}});let It=function(e,t,r){(r=this[e])&&(delete this[e],H(r,t,r.e))},jt=(e,t,r,i,n,o)=>{let a=[],f=0,l=0;return function(s,$){let h,c=this;l++;let d=c.$b,u=d.k;a[s+1]=c;let p,g={bag:c,error:$};if($?(f=$,t.fire("fail",g),h=1):o.has(u)||(u&&o.set(u,c),d.t=xt(),(p=d.a)&&H(p,c,c),(p=d.x)&&t.clear(p),t.fire("done",g),h=1),!r.$d){let t=l==i;t&&(r.$e=0,2==n&&(a[0]=f,H(e,a,r))),1==n&&H(e,[$||null,c,t,s],r)}h&&t.fire("end",g)}},_t=(e,t,r,i,o)=>{if(e.$d)return e;if(e.$e)return e.enqueue(_t.bind(e,e,t,r,i,o));e.$e=1,n(t)||(t=[t]);let a=e.constructor,f=0,l=a.$f,s=jt(r,a,e,t.length,i,a.$c);for(let e of t)if(e){let t,r=a.get(e,o),i=r.e,n=i.$b.k,$=s.bind(i,f++);n&&l[n]?l[n].push($):r.u?(n&&((t=[$]).e=i,l[n]=t,$=It.bind(l,n)),a.$s(i,$)):$()}return e},St=function(){let e=this;e.id=V("s"),e.$g=[]};O(St[m],{all(e,t){return _t(this,e,t,2)},save(e,t){return _t(this,e,t,2,1)},one(e,t){return _t(this,e,t,1)},enqueue(e){let t=this;return t.$d||(t.$g.push(e),t.dequeue(t.$h)),t},dequeue(...e){let t,r=this;r.$e||r.$d||(r.$e=1,c(()=>{r.$e=0,r.$d||(t=r.$g.shift())&&H(t,r.$h=e)},0))},destroy(e){(e=this).$d=1,e.$g=0}});let qt=(e,t)=>[u(t),u(e)].join(p),At=(e,t,r,i)=>{(i=e&&e.$b)&&t[i.n]&&r.del(i.k)},Ot={add(e){let t,r=this.$b;n(e)||(e=[e]);for(t of e)if(t){let{name:e,cache:i}=t;t.cache=0|i,r[e]=t}},create(e){let t=this.meta(e),r=0|e.cache||t.cache,n=new Vt;n.set(t),n.$b={n:t.name,a:t.after,x:t.cleans,k:r&&qt(t,e)},i(e)&&n.set(e);let o=t.before;return o&&H(o,n,n),this.fire("begin",{bag:n}),n},meta(e){return this.$b[e.name||e]||e},get(e,t){let r,i,n=this;return t||(r=n.cached(e)),r||(r=n.create(e),i=1),{e:r,u:i}},clear(e){this.$c.each(At,te((e+a).split(l)))},cached(e){let t,r,i=this,n=i.$c,o=i.meta(e),a=0|e.cache||o.cache;if(a&&(r=qt(o,e)),r){let e=i.$f[r];e?t=e.e:(t=n.get(r))&&xt()-t.$b.t>a&&(n.del(r),t=0)}return t},...ie};return St.extend=((e,t,r)=>{let i=function(){St.call(this)};return i.$s=e,i.$c=new B(t,r),i.$f={},i.$b={},R(i,St,null,Ot)}),re.Service=St,O(d[m],ie),d.extend=function e(t,r){let i=this,n=t&&t.ctor,o=function(...e){i.apply(this,e),n&&n.apply(this,e)};return o.extend=e,R(o,i,t,r)},re.Base=d,re});