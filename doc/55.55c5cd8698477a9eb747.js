(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{U89g:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return i});var l=n("CcnG"),a=(n("d2mR"),n("Ip0R"),l.Qa({encapsulation:2,styles:[],data:{}}));function i(e){return l.mb(0,[],null,null)}},XIHC:function(e,t){Prism.languages.typescript=Prism.languages.extend("javascript",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield|module|declare|constructor|namespace|abstract|require|type)\b/,builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console)\b/}),Prism.languages.ts=Prism.languages.typescript},d2mR:function(e,t,n){"use strict";n.d(t,"a",function(){return l}),n.d(t,"b",function(){return a}),n("wZee"),n("XIHC");var l=function(){function e(e,t){this._renderer=e,this._el=t,this.nativeElement=t.nativeElement}return e.prototype.ngAfterViewInit=function(){this.preNode=this._renderer.createElement("pre"),this.codeNode=this._renderer.createElement("code"),this._renderer.addClass(this.codeNode,"language-"+this.language),this._renderer.appendChild(this.nativeElement,this.preNode),this._renderer.appendChild(this.preNode,this.codeNode),this.codeNode.textContent=this.code,Prism.highlightElement(this.codeNode)},e}(),a=function(){}},dP4j:function(e,t,n){"use strict";n.r(t);var l=n("CcnG"),a=function(){},i=n("gTgE"),r=n("pMnS"),u=n("U89g"),o=n("d2mR"),s=n("O4vx"),c=n("Ip0R"),d=function(){function e(e){this.http=e,this.gaugeChartData=[["Label","Value"],["Memory",80],["CPU",55],["Network",68]],this.getHtmlAndTypeScriptCode()}return e.prototype.getHtmlAndTypeScriptCode=function(){var e,t,n=this;this.http.get("assets/data/code/dashboard/gauge/chart.html",{responseType:"text"}).subscribe(function(t){e=t},function(e){},function(){n.htmlCode=e}),this.http.get("assets/data/code/dashboard/gauge/chart.text",{responseType:"text"}).subscribe(function(e){t=e},function(e){},function(){n.typeScriptCode=t}),this.http.get("assets/data/code/dashboard/gauge/datasource.json",{responseType:"text"}).subscribe(function(e){t=e},function(e){},function(){n.dataSourceCode=t})},e.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},e.prototype.ngOnInit=function(){},e}(),g=n("t/Na"),p=l.Qa({encapsulation:2,styles:[],data:{}});function h(e){return l.mb(0,[(e()(),l.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),l.Sa(1,0,null,null,1,"prism-block",[],null,null,null,u.b,u.a)),l.Ra(2,4243456,null,0,o.a,[l.F,l.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,t){e(t,2,0,t.component.htmlCode,"html")},null)}function m(e){return l.mb(0,[(e()(),l.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),l.Sa(1,0,null,null,1,"prism-block",[],null,null,null,u.b,u.a)),l.Ra(2,4243456,null,0,o.a,[l.F,l.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,t){e(t,2,0,t.component.typeScriptCode,"typescript")},null)}function b(e){return l.mb(0,[(e()(),l.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),l.Sa(1,0,null,null,1,"prism-block",[],null,null,null,u.b,u.a)),l.Ra(2,4243456,null,0,o.a,[l.F,l.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,t){e(t,2,0,t.component.dataSourceCode,"json")},null)}function f(e){return l.mb(0,[(e()(),l.Sa(0,0,null,null,72,"amexio-card",[["header","true"]],null,[["document","click"],["document","scroll"]],function(e,t,n){var a=!0;return"document:click"===t&&(a=!1!==l.cb(e,1).onWindowClick()&&a),"document:scroll"===t&&(a=!1!==l.cb(e,1).onscroll()&&a),a},i.Rb,i.i)),l.Ra(1,5357568,null,3,s.h,[],{header:[0,"header"]},null),l.ib(603979776,1,{amexioHeader:1}),l.ib(603979776,2,{amexioBody:1}),l.ib(603979776,3,{amexioFooter:1}),(e()(),l.Sa(5,0,null,0,2,"amexio-header",[],null,null,null,i.ac,i.r)),l.Ra(6,114688,[[1,4]],0,s.v,[],null,null),(e()(),l.kb(-1,0,[" Gauge Chart "])),(e()(),l.Sa(8,0,null,1,64,"amexio-body",[],null,null,null,i.Nb,i.e)),l.Ra(9,114688,[[2,4]],0,s.d,[],null,null),(e()(),l.Sa(10,0,null,0,6,"p",[],null,null,null,null,null)),(e()(),l.kb(-1,null,["A gauge with a dial, rendered within the browser using SVG. Guages are available under "])),(e()(),l.Sa(12,0,null,null,1,"code",[],null,null,null,null,null)),(e()(),l.kb(-1,null,["AmexioDashboardModule"])),(e()(),l.kb(-1,null,[" from "])),(e()(),l.Sa(15,0,null,null,1,"code",[],null,null,null,null,null)),(e()(),l.kb(-1,null,["amexio-ng-extensions/dashboard"])),(e()(),l.Sa(17,16777216,null,0,55,"amexio-tab-view",[],null,[["document","click"],["document","scroll"]],function(e,t,n){var a=!0;return"document:click"===t&&(a=!1!==l.cb(e,18).onWindowClick()&&a),"document:scroll"===t&&(a=!1!==l.cb(e,18).onscroll()&&a),a},i.lc,i.C)),l.Ra(18,5357568,null,2,s.L,[l.F,l.k,l.R],null,null),l.ib(603979776,4,{queryTabs:1}),l.ib(603979776,5,{queryAction:1}),(e()(),l.Sa(21,0,null,1,8,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,i.mc,i.D)),l.Ra(22,114688,[[4,4]],0,s.M,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),l.Sa(23,0,null,0,6,"amexio-row",[],null,null,null,i.hc,i.y)),l.Ra(24,1163264,null,0,s.H,[],null,null),(e()(),l.Sa(25,0,null,0,4,"amexio-column",[["size","12"]],[[1,"class",0]],null,null,i.Tb,i.k)),l.Ra(26,114688,null,0,s.k,[],{size:[0,"size"]},null),(e()(),l.Sa(27,0,null,0,2,"amexio-dashboard-gauge",[],null,null,null,i.Mc,i.Da)),l.Ra(28,1163264,null,1,s.Xa,[s.Na],{height:[0,"height"],data:[1,"data"],redcolorfrom:[2,"redcolorfrom"],redcolorto:[3,"redcolorto"],yellowcolorfrom:[4,"yellowcolorfrom"],yellowcolorto:[5,"yellowcolorto"],scalevalue:[6,"scalevalue"]},null),l.ib(603979776,6,{chartTitleComp:1}),(e()(),l.Sa(30,0,null,1,20,"amexio-tab",[["title","API Reference"]],null,null,null,i.mc,i.D)),l.Ra(31,114688,[[4,4]],0,s.M,[],{title:[0,"title"]},null),(e()(),l.Sa(32,0,null,0,18,"amexio-datagrid",[["title","Properties<amexio-dashboard-gauge>"]],null,[["document","scroll"],["document","click"]],function(e,t,n){var a=!0;return"document:scroll"===t&&(a=!1!==l.cb(e,33).onscroll()&&a),"document:click"===t&&(a=!1!==l.cb(e,33).onclick()&&a),a},i.rd,i.ib)),l.Ra(33,1163264,null,1,s.Pb,[l.l,s.Ka,l.i],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),l.ib(603979776,7,{columnRef:1}),(e()(),l.Sa(35,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.sd,i.jb)),l.Ra(36,49152,[[7,4]],2,s.Qb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),l.ib(335544320,8,{headerTemplate:0}),l.ib(335544320,9,{bodyTemplate:0}),(e()(),l.Sa(39,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.sd,i.jb)),l.Ra(40,49152,[[7,4]],2,s.Qb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),l.ib(335544320,10,{headerTemplate:0}),l.ib(335544320,11,{bodyTemplate:0}),(e()(),l.Sa(43,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.sd,i.jb)),l.Ra(44,49152,[[7,4]],2,s.Qb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),l.ib(335544320,12,{headerTemplate:0}),l.ib(335544320,13,{bodyTemplate:0}),(e()(),l.Sa(47,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.sd,i.jb)),l.Ra(48,49152,[[7,4]],2,s.Qb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),l.ib(335544320,14,{headerTemplate:0}),l.ib(335544320,15,{bodyTemplate:0}),(e()(),l.Sa(51,0,null,1,16,"amexio-tab",[["title","Source"]],null,null,null,i.mc,i.D)),l.Ra(52,114688,[[4,4]],0,s.M,[],{title:[0,"title"]},null),(e()(),l.Sa(53,0,null,0,14,"amexio-vertical-tab-view",[],null,null,null,i.oc,i.F)),l.Ra(54,5357568,null,1,s.Q,[l.F],null,null),l.ib(603979776,16,{queryTabs:1}),(e()(),l.Sa(56,0,null,0,3,"amexio-tab",[["title","HTML"]],null,null,null,i.mc,i.D)),l.Ra(57,114688,[[16,4]],0,s.M,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),l.Ja(16777216,null,0,1,null,h)),l.Ra(59,16384,null,0,c.l,[l.R,l.O],{ngIf:[0,"ngIf"]},null),(e()(),l.Sa(60,0,null,0,3,"amexio-tab",[["title","Type Script"]],null,null,null,i.mc,i.D)),l.Ra(61,114688,[[16,4]],0,s.M,[],{title:[0,"title"]},null),(e()(),l.Ja(16777216,null,0,1,null,m)),l.Ra(63,16384,null,0,c.l,[l.R,l.O],{ngIf:[0,"ngIf"]},null),(e()(),l.Sa(64,0,null,0,3,"amexio-tab",[["title","Data Source"]],null,null,null,i.mc,i.D)),l.Ra(65,114688,[[16,4]],0,s.M,[],{title:[0,"title"]},null),(e()(),l.Ja(16777216,null,0,1,null,b)),l.Ra(67,16384,null,0,c.l,[l.R,l.O],{ngIf:[0,"ngIf"]},null),(e()(),l.Sa(68,0,null,1,4,"amexio-tab",[["title","Live"]],null,null,null,i.mc,i.D)),l.Ra(69,114688,[[4,4]],0,s.M,[],{title:[0,"title"]},null),(e()(),l.Sa(70,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(e()(),l.kb(-1,null,["Amexio Sandbox"])),(e()(),l.Sa(72,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-v4-gauge?embed=1&file=app/dashboard/gauge/gauge.demo.html"],["style","width: 100%; height: 600px"]],null,null,null,null,null))],function(e,t){var n=t.component;e(t,1,0,"true"),e(t,6,0),e(t,9,0),e(t,18,0),e(t,22,0,"Demo","true"),e(t,24,0),e(t,26,0,"12"),e(t,28,0,"400px",n.gaugeChartData,90,100,75,90,5),e(t,31,0,"API Reference"),e(t,33,0,"Properties<amexio-dashboard-gauge>","assets/apireference/dashboard/gauge.json","get","dashboard",!1,!1),e(t,36,0,"Name","name",!1,"string",15),e(t,40,0,"Type","type",!1,"string",10),e(t,44,0,"Default","default",!1,"string",10),e(t,48,0,"Description","description",!1,"string",65),e(t,52,0,"Source"),e(t,54,0),e(t,57,0,"HTML",!0),e(t,59,0,n.htmlCode),e(t,61,0,"Type Script"),e(t,63,0,n.typeScriptCode),e(t,65,0,"Data Source"),e(t,67,0,n.dataSourceCode),e(t,69,0,"Live")},function(e,t){e(t,25,0,l.cb(t,26).role)})}var y=l.Oa("gauge-dashboard-demo",d,function(e){return l.mb(0,[(e()(),l.Sa(0,0,null,null,1,"gauge-dashboard-demo",[],null,null,null,f,p)),l.Ra(1,114688,null,0,d,[g.c],null,null)],function(e,t){e(t,1,0)},null)},{},{},[]),k=n("gIcY"),v=n("ZYCi");n.d(t,"GaugeDemoModuleNgFactory",function(){return w});var w=l.Pa(a,[],function(e){return l.Za([l.ab(512,l.k,l.Ea,[[8,[i.a,r.a,y]],[3,l.k],l.z]),l.ab(4608,c.n,c.m,[l.w,[2,c.w]]),l.ab(4608,k.v,k.v,[]),l.ab(4608,g.i,g.o,[c.c,l.D,g.m]),l.ab(4608,g.p,g.p,[g.i,g.n]),l.ab(5120,g.a,function(e){return[e]},[g.p]),l.ab(4608,g.l,g.l,[]),l.ab(6144,g.j,null,[g.l]),l.ab(4608,g.h,g.h,[g.j]),l.ab(6144,g.b,null,[g.h]),l.ab(4608,g.f,g.k,[g.b,l.s]),l.ab(4608,g.c,g.c,[g.f]),l.ab(4608,s.Ka,s.Ka,[g.c]),l.ab(4608,s.Ua,s.Ua,[l.D]),l.ab(4608,s.bb,s.bb,[]),l.ab(4608,s.sc,s.sc,[]),l.ab(4608,s.Na,s.Na,[]),l.ab(1073742336,c.b,c.b,[]),l.ab(1073742336,k.s,k.s,[]),l.ab(1073742336,k.e,k.e,[]),l.ab(1073742336,g.e,g.e,[]),l.ab(1073742336,g.d,g.d,[]),l.ab(1073742336,s.w,s.w,[]),l.ab(1073742336,s.u,s.u,[]),l.ab(1073742336,s.z,s.z,[]),l.ab(1073742336,s.B,s.B,[]),l.ab(1073742336,s.E,s.E,[]),l.ab(1073742336,s.m,s.m,[]),l.ab(1073742336,s.S,s.S,[]),l.ab(1073742336,o.b,o.b,[]),l.ab(1073742336,s.l,s.l,[]),l.ab(1073742336,v.n,v.n,[[2,v.t],[2,v.m]]),l.ab(1073742336,a,a,[]),l.ab(256,g.m,"XSRF-TOKEN",[]),l.ab(256,g.n,"X-XSRF-TOKEN",[]),l.ab(1024,v.i,function(){return[[{path:"",component:d,pathMatch:"full"}]]},[])])})},wZee:function(e,t){var n="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},l=function(){var e=/\blang(?:uage)?-([\w-]+)\b/i,t=0,l=n.Prism={manual:n.Prism&&n.Prism.manual,disableWorkerMessageHandler:n.Prism&&n.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof a?new a(e.type,l.util.encode(e.content),e.alias):"Array"===l.util.type(e)?e.map(l.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function(e,t){var n=l.util.type(e);switch(t=t||{},n){case"Object":if(t[l.util.objId(e)])return t[l.util.objId(e)];var a={};for(var i in t[l.util.objId(e)]=a,e)e.hasOwnProperty(i)&&(a[i]=l.util.clone(e[i],t));return a;case"Array":return t[l.util.objId(e)]?t[l.util.objId(e)]:(a=[],t[l.util.objId(e)]=a,e.forEach(function(e,n){a[n]=l.util.clone(e,t)}),a)}return e}},languages:{extend:function(e,t){var n=l.util.clone(l.languages[e]);for(var a in t)n[a]=t[a];return n},insertBefore:function(e,t,n,a){var i=(a=a||l.languages)[e];if(2==arguments.length){for(var r in n=arguments[1])n.hasOwnProperty(r)&&(i[r]=n[r]);return i}var u={};for(var o in i)if(i.hasOwnProperty(o)){if(o==t)for(var r in n)n.hasOwnProperty(r)&&(u[r]=n[r]);u[o]=i[o]}return l.languages.DFS(l.languages,function(t,n){n===a[e]&&t!=e&&(this[t]=u)}),a[e]=u},DFS:function(e,t,n,a){for(var i in a=a||{},e)e.hasOwnProperty(i)&&(t.call(e,i,e[i],n||i),"Object"!==l.util.type(e[i])||a[l.util.objId(e[i])]?"Array"!==l.util.type(e[i])||a[l.util.objId(e[i])]||(a[l.util.objId(e[i])]=!0,l.languages.DFS(e[i],t,i,a)):(a[l.util.objId(e[i])]=!0,l.languages.DFS(e[i],t,null,a)))}},plugins:{},highlightAll:function(e,t){l.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var a={callback:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};l.hooks.run("before-highlightall",a);for(var i,r=a.elements||e.querySelectorAll(a.selector),u=0;i=r[u++];)l.highlightElement(i,!0===t,a.callback)},highlightElement:function(t,a,i){for(var r,u,o=t;o&&!e.test(o.className);)o=o.parentNode;o&&(r=(o.className.match(e)||[,""])[1].toLowerCase(),u=l.languages[r]),t.className=t.className.replace(e,"").replace(/\s+/g," ")+" language-"+r,t.parentNode&&/pre/i.test((o=t.parentNode).nodeName)&&(o.className=o.className.replace(e,"").replace(/\s+/g," ")+" language-"+r);var s={element:t,language:r,grammar:u,code:t.textContent};if(l.hooks.run("before-sanity-check",s),!s.code||!s.grammar)return s.code&&(l.hooks.run("before-highlight",s),s.element.textContent=s.code,l.hooks.run("after-highlight",s)),void l.hooks.run("complete",s);if(l.hooks.run("before-highlight",s),a&&n.Worker){var c=new Worker(l.filename);c.onmessage=function(e){s.highlightedCode=e.data,l.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,i&&i.call(s.element),l.hooks.run("after-highlight",s),l.hooks.run("complete",s)},c.postMessage(JSON.stringify({language:s.language,code:s.code,immediateClose:!0}))}else s.highlightedCode=l.highlight(s.code,s.grammar,s.language),l.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,i&&i.call(t),l.hooks.run("after-highlight",s),l.hooks.run("complete",s)},highlight:function(e,t,n){var i={code:e,grammar:t,language:n};return l.hooks.run("before-tokenize",i),i.tokens=l.tokenize(i.code,i.grammar),l.hooks.run("after-tokenize",i),a.stringify(l.util.encode(i.tokens),i.language)},matchGrammar:function(e,t,n,a,i,r,u){var o=l.Token;for(var s in n)if(n.hasOwnProperty(s)&&n[s]){if(s==u)return;var c=n[s];c="Array"===l.util.type(c)?c:[c];for(var d=0;d<c.length;++d){var g=c[d],p=g.inside,h=!!g.lookbehind,m=!!g.greedy,b=0,f=g.alias;if(m&&!g.pattern.global){var y=g.pattern.toString().match(/[imuy]*$/)[0];g.pattern=RegExp(g.pattern.source,y+"g")}g=g.pattern||g;for(var k=a,v=i;k<t.length;v+=t[k].length,++k){var w=t[k];if(t.length>e.length)return;if(!(w instanceof o)){if(m&&k!=t.length-1){if(g.lastIndex=v,!(R=g.exec(e)))break;for(var x=R.index+(h?R[1].length:0),S=R.index+R[0].length,F=k,C=v,A=t.length;F<A&&(C<S||!t[F].type&&!t[F-1].greedy);++F)x>=(C+=t[F].length)&&(++k,v=C);if(t[k]instanceof o)continue;j=F-k,w=e.slice(v,C),R.index-=v}else{g.lastIndex=0;var R=g.exec(w),j=1}if(R){h&&(b=R[1]?R[1].length:0),S=(x=R.index+b)+(R=R[0].slice(b)).length;var N=w.slice(0,x),T=w.slice(S),P=[k,j];N&&(++k,v+=N.length,P.push(N));var E=new o(s,p?l.tokenize(R,p):R,f,R,m);if(P.push(E),T&&P.push(T),Array.prototype.splice.apply(t,P),1!=j&&l.matchGrammar(e,t,n,k,v,!0,s),r)break}else if(r)break}}}}},tokenize:function(e,t,n){var a=[e],i=t.rest;if(i){for(var r in i)t[r]=i[r];delete t.rest}return l.matchGrammar(e,a,t,0,0,!1),a},hooks:{all:{},add:function(e,t){var n=l.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=l.hooks.all[e];if(n&&n.length)for(var a,i=0;a=n[i++];)a(t)}}},a=l.Token=function(e,t,n,l,a){this.type=e,this.content=t,this.alias=n,this.length=0|(l||"").length,this.greedy=!!a};if(a.stringify=function(e,t,n){if("string"==typeof e)return e;if("Array"===l.util.type(e))return e.map(function(n){return a.stringify(n,t,e)}).join("");var i={type:e.type,content:a.stringify(e.content,t,n),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:n};if(e.alias){var r="Array"===l.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,r)}l.hooks.run("wrap",i);var u=Object.keys(i.attributes).map(function(e){return e+'="'+(i.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+(u?" "+u:"")+">"+i.content+"</"+i.tag+">"},!n.document)return n.addEventListener?(l.disableWorkerMessageHandler||n.addEventListener("message",function(e){var t=JSON.parse(e.data),a=t.language,i=t.immediateClose;n.postMessage(l.highlight(t.code,l.languages[a],a)),i&&n.close()},!1),n.Prism):n.Prism;var i=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return i&&(l.filename=i.src,l.manual||i.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(l.highlightAll):window.setTimeout(l.highlightAll,16):document.addEventListener("DOMContentLoaded",l.highlightAll))),n.Prism}();void 0!==e&&e.exports&&(e.exports=l),"undefined"!=typeof global&&(global.Prism=l),l.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},l.languages.markup.tag.inside["attr-value"].inside.entity=l.languages.markup.entity,l.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),l.languages.xml=l.languages.markup,l.languages.html=l.languages.markup,l.languages.mathml=l.languages.markup,l.languages.svg=l.languages.markup,l.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},l.languages.css.atrule.inside.rest=l.languages.css,l.languages.markup&&(l.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:l.languages.css,alias:"language-css",greedy:!0}}),l.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:l.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:l.languages.css}},alias:"language-css"}},l.languages.markup.tag)),l.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},l.languages.javascript=l.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),l.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/}),l.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:l.languages.javascript}},string:/[\s\S]+/}}}),l.languages.markup&&l.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:l.languages.javascript,alias:"language-javascript",greedy:!0}}),l.languages.js=l.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(t){for(var n,a=t.getAttribute("data-src"),i=t,r=/\blang(?:uage)?-(?!\*)([\w-]+)\b/i;i&&!r.test(i.className);)i=i.parentNode;if(i&&(n=(t.className.match(r)||[,""])[1]),!n){var u=(a.match(/\.(\w+)$/)||[,""])[1];n=e[u]||u}var o=document.createElement("code");o.className="language-"+n,t.textContent="",o.textContent="Loading\u2026",t.appendChild(o);var s=new XMLHttpRequest;s.open("GET",a,!0),s.onreadystatechange=function(){4==s.readyState&&(s.status<400&&s.responseText?(o.textContent=s.responseText,l.highlightElement(o)):o.textContent=s.status>=400?"\u2716 Error "+s.status+" while fetching file: "+s.statusText:"\u2716 Error: File does not exist or is empty")},t.hasAttribute("data-download-link")&&l.plugins.toolbar&&l.plugins.toolbar.registerButton("download-file",function(){var e=document.createElement("a");return e.textContent=t.getAttribute("data-download-link-label")||"Download",e.setAttribute("download",""),e.href=a,e}),s.send(null)})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}}]);