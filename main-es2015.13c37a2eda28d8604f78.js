(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{0:function(e,t,n){e.exports=n("zUnb")},vY5A:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return c}));var o=n("sEIs"),r=n("EM62");const a=[{path:"complex",loadChildren:()=>Promise.all([n.e(1),n.e(0),n.e(9)]).then(n.bind(null,"NIGn")).then(e=>e.ComplexModule),title:"On the Subject of Complicated Wires",tags:["wires","star","LED","red","blue","vertical","cut","multiple"]},{path:"search",loadChildren:()=>Promise.all([n.e(1),n.e(8)]).then(n.bind(null,"gA4M")).then(e=>e.SearchModule),exclude:!0},{path:"wires",loadChildren:()=>Promise.all([n.e(1),n.e(0),n.e(15)]).then(n.bind(null,"JKyo")).then(e=>e.WiresModule),title:"On the Subject of Wires",tags:["wires","top","bottom","cut","one","3","4","5","6"]},{path:"passwords",loadChildren:()=>Promise.all([n.e(1),n.e(0),n.e(12)]).then(n.bind(null,"FSSm")).then(e=>e.PasswordsModule),title:"On the Subject of Passwords",tags:["letters","words","dials","5","five","grid","guess"]},{path:"utils",loadChildren:()=>Promise.all([n.e(0),n.e(14)]).then(n.bind(null,"LAcE")).then(e=>e.UtilsModule),exclude:!0},{path:"memory",loadChildren:()=>Promise.all([n.e(1),n.e(0),n.e(10)]).then(n.bind(null,"qzbX")).then(e=>e.MemoryModule),title:"On the Subject Memory",tags:["memory","numbers","display","4","5","four","five"]},{path:"simon",loadChildren:()=>Promise.all([n.e(1),n.e(0),n.e(13)]).then(n.bind(null,"awc+")).then(e=>e.SimonSaysModule),title:"On the Subject of Simon Says",tags:["simon","4","four","red","green","yellow","blue"]},{path:"notepad",loadChildren:()=>Promise.all([n.e(1),n.e(0),n.e(11)]).then(n.bind(null,"wAkG")).then(e=>e.NotepadModule),title:"Notepad",tags:["util","module","helper"]},{path:"",pathMatch:"full",redirectTo:"search",exclude:!0},{path:"**",pathMatch:"full",redirectTo:"search",exclude:!0}];let c=(()=>{class e{}return e.\u0275mod=r.Hb({type:e}),e.\u0275inj=r.Gb({factory:function(t){return new(t||e)},imports:[[o.e.forRoot(a,{useHash:!0})],o.e]}),e})()},zUnb:function(e,t,n){"use strict";n.r(t);var o=n("EM62"),r=n("2kYt"),a=n("e4iD"),c=n("NDGq"),i=n("vY5A"),l=n("qFEQ"),s=n("sEIs"),u=n("GAih");function b(e,t){if(1&e){const e=o.Qb();o.Pb(0,"a",10),o.Xb("click",(function(){return o.ic(e),o.Zb().showNav=!1})),o.nc(1,"Search"),o.Ob(),o.Pb(2,"a",11),o.nc(3,"Manual"),o.Ob(),o.Pb(4,"a",12),o.Xb("click",(function(){return o.ic(e),o.Zb().showNav=!1})),o.nc(5,"Utils"),o.Ob(),o.Pb(6,"a",13),o.nc(7,"Github"),o.Ob()}}function d(e,t){1&e&&o.Lb(0)}function h(e,t){if(1&e&&(o.Pb(0,"nav",14),o.lc(1,d,1,0,"ng-container",8),o.Ob()),2&e){o.Zb();const e=o.hc(1);o.yb(1),o.ec("ngTemplateOutlet",e)}}function p(e,t){1&e&&o.Lb(0)}let f=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Db({type:e,selectors:[["app-header"]],decls:13,vars:5,consts:[["nav",""],["fxLayout","row",2,"margin-bottom","64px"],["routerLink","/","fxFlex.gt-sm","30","fxFlex","80",1,"title"],[3,"fxShow.sm","fxShow.xs","fxShow"],[3,"click"],["fxLayout","column","class","overlay",4,"ngIf"],["fxShow.gt-sm","true","fxShow","false"],["role","navigation","fxLayout","row","fxLayoutAlign","center"],[4,"ngTemplateOutlet"],["fxFlex",""],["routerLink","/search","routerLinkActive","active",1,"app-button",3,"click"],["href","https://www.bombmanual.com/web/index.html",1,"app-button"],["routerLink","/utils","routerLinkActive","active",1,"app-button",3,"click"],["href","http://github.com/bradtaniguchi/bomb-defuse-utils",1,"app-button"],["fxLayout","column",1,"overlay"]],template:function(e,t){if(1&e&&(o.lc(0,b,8,0,"ng-template",null,0,o.mc),o.Pb(2,"header",1),o.Pb(3,"a",2),o.nc(4,"Bomb Defuse Utils"),o.Ob(),o.Pb(5,"span",3),o.Pb(6,"button",4),o.Xb("click",(function(){return t.showNav=!t.showNav})),o.nc(7," Nav Menu "),o.Ob(),o.lc(8,h,2,1,"nav",5),o.Ob(),o.Pb(9,"span",6),o.Pb(10,"nav",7),o.lc(11,p,1,0,"ng-container",8),o.Ob(),o.Ob(),o.Kb(12,"span",9),o.Ob()),2&e){const e=o.hc(1);o.yb(5),o.ec("fxShow.sm",!0)("fxShow.xs",!0)("fxShow",!1),o.yb(3),o.ec("ngIf",t.showNav),o.yb(3),o.ec("ngTemplateOutlet",e)}},directives:[l.c,s.d,l.a,u.a,r.k,l.b,r.m,s.c],styles:[".title[_ngcontent-%COMP%] {\n        margin: 8px;\n      }","nav.overlay[_ngcontent-%COMP%] {\n        background-color: #fff;\n        position: absolute;\n        right: 4px;\n      }"],changeDetection:0}),e})(),m=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Db({type:e,selectors:[["app-root"]],decls:2,vars:0,template:function(e,t){1&e&&(o.Kb(0,"app-header"),o.Kb(1,"router-outlet"))},directives:[f,s.f],encapsulation:2}),e})();var g=n("xVbo");let w=(()=>{class e{constructor(e,t){this.document=e,this.router=t;const n=this.document.createElement("script");n.src="https://www.googletagmanager.com/gtag/js?id=UA-96613226-5",n.async=!0,this.document.body.appendChild(n);const o=window;o.dataLayer=o.dataLayer||[],o.gtag=()=>{o.dataLayer.push(arguments)},gtag("js",new Date),gtag("config","UA-96613226-5"),this.router.events.pipe(Object(g.a)(e=>e instanceof s.a)).subscribe(this.trackAnalyticRouteEvent.bind(this))}trackAnalyticRouteEvent(e){gtag?gtag("config","UA-96613226-5",{page_path:e.urlAfterRedirects}):console.error("no gtag found!")}}return e.\u0275fac=function(t){return new(t||e)(o.Tb(r.d),o.Tb(s.b))},e.\u0275prov=o.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var v=n("40Bj");let y=(()=>{class e{}return e.\u0275mod=o.Hb({type:e}),e.\u0275inj=o.Gb({factory:function(t){return new(t||e)},imports:[[r.c,v.a,s.e]]}),e})(),x=(()=>{class e{constructor(e){e.get(w)}}return e.\u0275mod=o.Hb({type:e,bootstrap:[m]}),e.\u0275inj=o.Gb({factory:function(t){return new(t||e)(o.Tb(o.r))},providers:[{provide:r.h,useClass:r.e}],imports:[[a.a,i.a,y,c.a.register("/bomb-defuse-utils/ngsw-worker.js",{enabled:!0})]]}),e})();Object(o.R)(),a.c().bootstrapModule(x).catch(e=>console.error(e))},zn8P:function(e,t){function n(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="zn8P"}},[[0,2,7]]]);