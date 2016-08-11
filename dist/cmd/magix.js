/*Magix3.0.9 Licensed MIT*/define("magix",["$"],function(n){var t,e=n("$"),r=function(n,t){n?seajs.use(n,t):t&&t()},i=function(){},o=function(n,t,e,r,o){return i[x]=t[x],o=new i,O(o,e),O(n,r),o.constructor=n,n[x]=o,n},a=e.isPlainObject,u=e.isArray,c=function(n,t){e(n).html(t)},f=function(n,t,r,i){t&&!f[n]&&(f[n]=1,r=e(y+S),r.length?(i=r.prop("styleSheet"),i?i.cssText+=t:r.append(t)):e("head").append('<style id="'+S+'">'+t+"</style>"))},s=0,h="",$=[],d=$.slice,p=function(){},v=",",l=null,m=window,g=document,y="#",b="",w="object",x="prototype",k="/",V=/[#?].*$/,q=/([^=&?\/#]+)=?([^&#?]*)/g,I=/(?!^)=|&/,U=function(n){return(n||"mx_")+s++},S=U(),P=U(),j={rootId:U(),defaultView:P,error:function(n){throw n}},A=j.hasOwnProperty,T=function(n){return typeof n==w?n:g.getElementById(n)},Z=function(n,t,e){if(n=T(n),t=T(t),n&&t&&(e=n==t,!e))try{e=t.contains?t.contains(n):16&t.compareDocumentPosition(n)}catch(r){}return e},O=function(n,t,e){for(e in t)n[e]=t[e];return n},C=function(n,t,e,r,i,o){for(u(n)||(n=[n]),u(t)||(t=[t]),r=0;o=n[r];r++)try{i=o&&o.apply(e,t)}catch(a){j.error(a)}return i},E=function(n,t){return n&&A.call(n,t)},H=function(n,t){return t.f-n.f||t.t-n.t},R=function(n,t,e,r){r=this,r.c=[],r.b=0|t||5,r.x=r.b+(n||20),r.r=e};O(R[x],{get:function(n){var t=this,e=t.c,r=e[b+n];return r&&(r.f++,r.t=s++,r=r.v),r},each:function(n,t,e,r,i){for(e=this,r=e.c,i=r.length-1;i>-1;i--)n(r[i].v,t,e)},set:function(n,t){var e=this,r=e.c,i=b+n,o=r[i],a=e.b;if(!o){if(r.length>=e.x)for(r.sort(H);a--;)o=r.pop(),o.f>0&&e.del(o.o);o={o:n},r.push(o),r[i]=o}o.v=t,o.f=1,o.t=s++},del:function(n){n=b+n;var t=this.c,e=t[n],r=this.r;e&&(e.f=-1,e.v=h,delete t[n],r&&C(r,e.o,e))},has:function(n){return E(this.c,b+n)}});var F,M=new R,B=function(n,t,e){try{e=decodeURIComponent(e)}catch(r){}F[t]=e},D=function(n){var t,e=M.get(n);return e||(F={},t=n.replace(V,h),n==t&&I.test(t)&&(t=h),n.replace(t,h).replace(q,B),M.set(n,e={a:t,b:F})),{path:e.a,params:O({},e.b)}},L=function(n,t,e){var r,i,o,a=[];for(i in t)r=t[i]+h,(!e||r||E(e,i))&&(r=encodeURIComponent(r),a.push(o=i+"="+r));return o&&(n+=(n&&(~n.indexOf("?")?"&":"?"))+a.join("&")),n},N=function(n,t){var e,r,i,o={};if(n&&(i=n.length))for(e=0;i>e;e++)r=n[e],o[t&&r?r[t]:r]=t?r:(0|o[r])+1;return o},J=Object.keys||function(n,t,e){t=[];for(e in n)E(n,e)&&t.push(e);return t},Q={config:function(n,t){return t=j,n&&(t=a(n)?O(t,n):t[n]),t},boot:function(n){O(j,n),r(j.ini,function(t){O(j,t),O(j,n),r(j.exts,function(){pn.on("changed",Sn),pn.bind()})})},toMap:N,toTry:C,toUrl:L,parseUrl:D,mix:O,has:E,keys:J,inside:Z,node:T,applyStyle:f,guid:U,Cache:R},_="on",z={fire:function(n,t,e,r){var i,o,a,u,c=b+n,f=this,s=f[c];if(t||(t={}),t.type||(t.type=n),s)for(i=s.length,o=i-1;i--;)a=r?i:o-i,u=s[a],u.d?(s.splice(a,1),o--):C(u.f,t,f);s=f[_+n],s&&C(s,t,f),e&&f.off(n)},on:function(n,t){var e=this,r=b+n,i=e[r]||(e[r]=[]);i.push({f:t})},off:function(n,t){var e,r,i=b+n,o=this,a=o[i];if(t){if(a)for(e=a.length;e--;)if(r=a[e],r.f==t&&!r.d){r.d=1;break}}else delete o[i],delete o[_+n]}};Q.Event=z;var G,K,W,X,Y,nn,tn="path",en="view",rn="params",on=new R,an=new R,un=m.location,cn={params:{},href:h},fn=/(?:^https?:\/\/[^\/]+|#.*$)/gi,sn=/^[^#]*#?!?/,hn=function(n,t,e){if(n){e=this[rn],n=(n+h).split(v);for(var r=0;r<n.length&&!(t=E(e,n[r]));r++);}return t},$n=function(n){if(W||(W=j.routes||{},X=j.unmatchView,Y=j.defaultView,nn=j.defaultPath||k,W[nn]||(W[nn]=Y)),!n[en]){var t=n.hash[tn]||pn.edge&&n.query[tn]||nn;n[tn]=t,n[en]=W[t]||X||Y}},dn=function(n,t){var e=n.href,r=t.href,i=e+b+r,o=an.get(i);if(!o){var a,u,c,f;o={isParam:hn,force:!n.href},o[rn]=f={};var s,h,$=n[rn],d=t[rn],p=[tn,en].concat(J($),J(d));for(s=p.length-1;s>=0;s--)h=p[s],1==s&&($=n,d=t,f=o),u=$[h],c=d[h],u!=c&&(f[h]={from:u,to:c},a=1);an.set(i,o={a:a,b:o})}return o},pn=O({update:function(n,t,e,r){n=L(n,t,e.query[rn]),n!=e.srcHash&&(n="#!"+n,r?un.replace(n):un.hash=n)},parse:function(n){n=n||un.href;var t,e,r,i,o=on.get(n);return o||(t=n.replace(fn,h),e=n.replace(sn,h),r=D(t),i=D(e),o={href:n,srcQuery:t,srcHash:e,query:r,hash:i,params:O(O({},r[rn]),i[rn])},$n(o),on.set(n,o)),o},diff:function(){var n=pn.parse(),t=dn(cn,cn=n);return t.a&&(K=cn[rn],pn.fire("changed",G=t.b)),G},to:function(n,t,e){!t&&a(n)&&(t=n,n=h);var r=D(n),i=r[rn],o=r[tn],u=cn[tn];if(O(i,t),o)for(u in cn.query[rn])E(i,u)||(i[u]=h);else K&&(o=u,i=O(O({},K),i));pn.update(o,K=i,cn,e)}},z);Q.Router=pn,pn.bind=function(){e(m).on("hashchange",pn.diff),pn.diff()};var vn,ln,mn=/(\w+):\s*([^,\}]+)\s*/g,gn=/(['"])(.*)\1/,yn=/^[\d\.]+$/,bn=function(n,t,e){n.$d||n.$h||n.$cc!=n.$rc||(n.$cr||(n.$cr=1,n.$ca=0,n.fire("created")),t=n.id,e=kn[n.pId],e&&!E(e.$r,t)&&(e.$r[t]=1,e.$rc++,bn(e)))},wn=function(n,t,e,r){t||(t={}),!n.$ca&&n.$cr&&(n.$cr=0,n.$ca=1,n.fire("alter",t),e=n.id,r=kn[n.pId],r&&E(r.$r,e)&&(r.$rc--,delete r.$r[e],wn(r,t)))},xn=function(n,e){return vn||(t=g.body,n=j.rootId,e=T(n),e||(t.id=n),vn=new Pn(n)),vn},kn={},Vn=function(n,t){E(kn,n)||(kn[n]=t,Pn.fire("add",{vframe:t}))},qn=function(n,t,e){for(t=n.$il;t.length;)e=t.shift(),e.r||n.invoke(e.n,e.a),delete t[e.k]},In=function(n,t,e){e=kn[n],e&&(delete kn[n],Pn.fire("remove",{vframe:e,fcc:t}))},Un=function(n,t){if(n&&(t=n.$v)&&t.$s>0){var e=Nn(t);e&&t.render();for(var r=n.children(),i=r.length,o=0;i>o;)Un(kn[r[o++]])}},Sn=function(n){var t,e=xn();(t=n.view)?e.mountView(t.to):Un(e)},Pn=function(n,t,e){e=this,e.id=n,e.$c={},e.$cc=0,e.$rc=0,e.$s=1,e.$r={},e.$il=[],e.pId=t,Vn(n,e)};O(Pn,O({root:xn,all:function(){return kn},get:function(n){return kn[n]}},z)),O(O(Pn[x],z),{mountView:function(n,t){var e,i,o,a=this,u=T(a.id);!a.$a&&u&&(a.$a=1,a.$t=u.innerHTML),a.unmountView(),a.$d=0,u&&n&&(a.path=n,e=D(n),i=++a.$s,r(e.path,function(n){if(i==a.$s){Ln(n);var r=O(e.params,t),c=decodeURIComponent(u.getAttribute("mx-options"));c&&(c=C(Function("return "+c)),O(r,c));var f=u.getAttribute("mx-data");if(f){var s=a.parent();s=s&&s.$v;var h={},$=function(n){for(var t=n.split("."),e=s;t.length&&e;)e=e[t.shift()];return e};f.replace(mn,function(n,t,e){n=e.match(gn),e=n?n[2]:yn.test(e)?parseFloat(e):$(e),h[t]=e}),O(r,h)}o=new n({owner:a,id:a.id},r),a.$v=o,Bn(o),o.init(r),o.render(),o.tmpl||o.$p||o.endUpdate()}}))},unmountView:function(){var n,t,e=this,r=e.$v;e.$il=[],r&&(ln||(t=1,ln={id:e.id}),e.$d=1,e.unmountZone(0,1),wn(e,ln),e.$v=0,Jn(r),n=T(e.id),n&&e.$a&&c(n,e.$t),t&&(ln=0)),e.$s++},mountVframe:function(n,t,e){var r,i=this;return wn(i),r=kn[n],r||(E(i.$c,n)||(i.$cl=h,i.$cc++),i.$c[n]=n,r=new Pn(n,i.id)),r.mountView(t,e),r},mountZone:function(n,t){var r,i,o,a=this;n=n||a.id;var u=e(y+n+" [mx-view]");for(a.$h=1,a.unmountZone(n,1),r=u.length-1;r>=0;r--)i=u[r],o=i.id||(i.id=U()),a.mountVframe(o,i.getAttribute("mx-view"),t);a.$h=0,bn(a)},unmountVframe:function(n,t){var e,r,i,o=this;n=n?o.$c[n]:o.id,e=kn[n],e&&(r=e.$cr,i=e.pId,e.unmountView(),In(n,r),e.id=e.pId=h,e=kn[i],e&&E(e.$c,n)&&(delete e.$c[n],e.$cl=h,e.$cc--,t||bn(e)))},unmountZone:function(n,t){var e,r=this,i=r.$c;for(e in i)(!n||e!=n&&Z(e,n))&&r.unmountVframe(e,1);t||bn(r)},parent:function(n,t){for(t=this,n=n>>>0||1;t&&n--;)t=kn[t.pId];return t},children:function(n){return n=this,n.$cl||(n.$cl=J(n.$c))},invoke:function(n,t){var e,r,i,o,a,u,c=this;return(r=c.$v)&&r.$p?e=(i=r[n])&&C(i,t,r):(a=c.$il,o=a[u=b+n],o&&(o.r=1),o={n:n,a:t,k:u},a.push(o),a[u]=o),e}}),Q.Vframe=Pn;var jn=function(n,t,r,i){e(n)[i?"off":_](t,r)},An="parentNode",Tn=new R(30,10),Zn=/([^\(]+)\(([\s\S]*)?\)/,On={},Cn=function(n){for(var e,r,i,o,a,u,c,f,s,h,d=n.target,p=n.type,v="mx-"+p,l=[];d!=t&&1==d.nodeType;){if(e=d.getAttribute(v)){if(l=[],a=d.$f,!a)for(u=d;u=u[An];)if(E(kn,c=u.id)){d.$f=a=c;break}a?(i=kn[a],o=i&&i.$v,o&&o.$s>0&&(f=Tn.get(e),f||(f=e.match(Zn)||$,f={n:f[1],i:f[2]},f.p=f.i&&C(Function("return "+f.i))||{},Tn.set(e,f)),s=f.n+b+p,h=o[s],h&&(n.current=d,n.params=f.p,C(h,n,o)))):j.error(Error("bad:"+e))}if((r=d.$)&&r[p]||n.mxStop||n.isPropagationStopped())break;l.push(d),d=d[An]||t}for(;d=l.pop();)r=d.$||(d.$={}),r[p]=1},En=function(n,e){var r=0|On[n],i=r>0?1:0;r+=e?-i:i,r||(jn(t,n,Cn,e),e||(r=1)),On[n]=r},Hn=/^([^<]+)<([^>]+)>$/,Rn=function(n,t){var e,r,i=n.$r;for(e in i)r=i[e],(t||r.x)&&Fn(i,e,1)},Fn=function(n,t,e){var r,i,o=n[t];return o&&(i=o.e,r=i.destroy,r&&e&&C(r,$,i),delete n[t]),i},Mn=function(n,t,e){t=n.render,n.render=function(){e=this,e.$s>0&&(e.$s++,e.fire("rendercall"),Rn(e),C(t,d.call(arguments),e))}},Bn=function(n,t){var e,r=n.$eo;for(e in r)En(e,t)},Dn=[],Ln=function(n){if(!n[b]){n[b]=1;var t,e,r,i,o,a=n[x],u={};for(o in a)if(t=a[o],e=o.match(Hn))for(r=e[1],i=e[2],i=i.split(v);e=i.pop();)u[e]=1,a[r+b+e]=t;Mn(a),a.$eo=u}},Nn=function(n){var t,e=n.$l;return e.f&&(e.p&&(t=G.path),t||(t=G.isParam(e.k))),t},Jn=function(n){n.$s>0&&(n.$s=0,n.fire("destroy",0,1,1),Rn(n,1),Bn(n,1)),n.$s--},Qn=function(n,t){t=this,O(t,n),t.$l={k:[]},t.$r={},t.$s=1,C(Dn,n,t)},_n=Qn[x];O(Qn,{merge:function(n,t){t=n&&n.ctor,t&&Dn.push(t),O(_n,n)},extend:function(n,t){var e=this;n=n||{};var r=n.ctor,i=[];r&&i.push(r);var a=function(n,t){e.call(this,n,t),C(i,t,this)},u=n.mixins;if(u)for(var c,f=u.length;--f>=0;)c=u[f],r=c.ctor,r&&i.push(r),O(n,r);return a.extend=e.extend,o(a,e,n,t)}}),O(O(_n,z),{render:p,init:p,beginUpdate:function(n,t){t=this,t.$s>0&&t.$p&&t.owner.unmountZone(n,1)},endUpdate:function(n,t,e,r){t=this,t.$s>0&&(r=t.$p,t.$p=1,e=t.owner,e.mountZone(n),r||qn(e))},wrapAsync:function(n,t){var e=this,r=e.$s;return function(){r>0&&r==e.$s&&n&&n.apply(t||e,arguments)}},observe:function(n,t){var e,r,i=this;e=i.$l,e.f=1,r=e.k,t&&(e.p=t),n&&(e.k=r.concat((n+h).split(v)))},capture:function(n,t,e,r,i){return r=this.$r,Fn(r,n,1),i={e:t,x:e},r[n]=i,t},release:function(n,t){return Fn(this.$r,n,t)},share:function(n,t){var e=this;e.$sd||(e.$sd={}),e.$sd[n]=t},getShared:function(n){var t,e=this,r=e.$sd;if(r&&(t=E(r,n)))return r[n];var i=e.owner.parent();return i?i.invoke("getShared",n):void 0},setHTML:function(n,t){var e,r=this;r.beginUpdate(n),r.$s>0&&(e=T(n),e&&c(e,t)),r.endUpdate(n)}}),Q.View=Qn;var zn=e.type,Gn=e.proxy,Kn=e.now||Date.now,Wn=JSON.stringify,Xn=function(){this.id=U("b"),this.$={}};O(Xn[x],{get:function(n,t,e){var r=this,i=arguments.length,o=i>=2,a=r.$,c=a;if(i){for(var f,s=u(n)?d.call(n):(n+h).split(".");(f=s.shift())&&c;)c=c[f];f&&(c=e)}return o&&zn(t)!=zn(c)&&(j.error(Error("type neq:"+n+"\n"+Wn(a))),c=t),c},set:function(n,t){var e,r=this;a(n)||(e={},e[n]=t,n=e),O(r.$,n)}});var Yn=1,nt=2,tt=function(n,t,e){e=this[n],delete this[n],C(e,t,e.e)},et=function(n,t,e,r,i,o){var a=[],u=l,c=0;return function(f,s){var h,$=this;c++;var d=$.$m,p=d.k;a[f+1]=$;var v={bag:$,error:s};if(s)u=s,t.fire("fail",v),h=1;else if(!o.has(p)){p&&o.set(p,$),d.t=Kn();var m=d.a;m&&C(m,$,$),d.x&&t.clear(d.x),t.fire("done",v),h=1}if(!e.$o){var g=c==r;g&&(e.$b=0,i==nt&&(a[0]=u,C(n,a,e))),i==Yn&&C(n,[s?s:l,$,g,f],e)}h&&t.fire("end",v)}},rt=function(n,t,e,r,i){if(n.$o)return n;if(n.$b)return n.enqueue(function(){rt(this,t,e,r,i)});n.$b=1;var o=n.constructor,a=o.$r;u(t)||(t=[t]);for(var c,f=t.length,s=et(e,o,n,f,r,o.$c),h=0;f>h;h++)if(c=t[h]){var $,d=o.get(c,i),p=d.e,v=p.$m.k,l=Gn(s,p,h);v&&a[v]?a[v].push(l):d.u?(v&&($=[l],$.e=p,a[v]=$,l=Gn(tt,a,v)),o.$s(p,l)):l()}return n},it=function(){var n=this;n.id=U("s"),n.$q=[]};O(it[x],{all:function(n,t){return rt(this,n,t,nt)},save:function(n,t){return rt(this,n,t,nt,1)},one:function(n,t){return rt(this,n,t,Yn)},enqueue:function(n){var t=this;return t.$o||(t.$q.push(n),t.dequeue(t.$a)),t},dequeue:function(){var n=this,t=d.call(arguments);n.$b||n.$o||(n.$b=1,setTimeout(function(){if(n.$b=0,!n.$o){var e=n.$q.shift();e&&C(e,n.$a=t,n)}},0))},destroy:function(n){n=this,n.$o=1,n.$q=0}});var ot=function(n,t,e){return e=[Wn(t),Wn(n)],e.join(b)},at=function(n,t,e,r){r=n&&n.$m,r&&t[r.n]&&e.del(r.k)},ut=O({add:function(n){var t=this,e=t.$m;u(n)||(n=[n]);for(var r,i,o=n.length-1;o>-1;o--)r=n[o],r&&(i=r.name,r.cache=0|r.cache,e[i]=r)},create:function(n){var t=this,e=t.meta(n),r=e.cache,i=new Xn;i.set(e),i.$m={n:e.name,a:e.after,x:e.cleans,k:r&&ot(e,n)},a(n)&&i.set(n);var o=e.before;return o&&C(o,i,i),t.fire("begin",{bag:i}),i},meta:function(n){var t=this,e=t.$m,r=n.name||n,i=e[r];return i||n},get:function(n,t){var e,r,i=this;return t||(e=i.cached(n)),e||(e=i.create(n),r=1),{e:e,u:r}},clear:function(n){this.$c.each(at,N((n+h).split(v)))},cached:function(n){var t,e,r=this,i=r.$c,o=r.meta(n),a=o.cache;if(a&&(e=ot(o,n)),e){var u=r.$r,c=u[e];c?t=c.e:(t=i.get(e),t&&a>0&&Kn()-t.$m.t>a&&(t=0))}return t}},z);it.extend=function(n,t,e){var r=this,i=function(){r.call(this)};return i.$s=n,i.$c=new R(t,e),i.$r={},i.$m={},o(i,r,l,ut)},Q.Service=it;var ct=function(n,t){var e=this,r=n&&n.ctor,i=function(){var n=this,t=arguments;e.apply(n,t),r&&r.apply(n,t)};return i.extend=ct,o(i,e,n,t)};return O(p[x],z),p.extend=ct,Q.Base=p,define(P,function(){return Qn.extend()}),Q});