function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function _createClass(n,t,e){return t&&_defineProperties(n.prototype,t),e&&_defineProperties(n,e),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{FSSm:function(n,t,e){"use strict";e.r(t);var r,o=e("2kYt"),i=e("40Bj"),s=e("nIj0"),a=e("api/"),c=e("hKeC"),l=e("+Net"),f=e("sEIs"),u=e("YtkY"),b=e("IqwL"),p=["about","after","again","below","could","every","first","found","great","house","large","learn","never","other","place","plant","point","right","small","sound","spell","still","study","their","there","these","thing","think","three","water","where","which","world","would","write"],d=e("EM62"),h=((r=function(){function n(){_classCallCheck(this,n)}return _createClass(n,[{key:"getPossiblePasswords",value:function(n){var t=this;return p.filter((function(e){return t.isPossiblePassword(e,n)}))}},{key:"isEmpty",value:function(n){return!n||n.every((function(n){return n&&0===n.length}))}},{key:"isPossiblePassword",value:function(n,t){return n.split("").every((function(n,e){return!t[e]||t[e].includes(n)}))}}]),n}()).\u0275fac=function(n){return new(n||r)},r.\u0275prov=d.Hb({token:r,factory:r.\u0275fac,providedIn:"root"}),r),g=e("bsiz"),v=e("X0g2"),m=e("4oqK"),w=e("U9PD"),y=e("qFEQ");function k(n,t){1&n&&(d.Rb(0,"div"),d.pc(1," Input is to large, limit is 5 "),d.Qb())}function C(n,t){if(1&n&&(d.Rb(0,"app-form-field"),d.Rb(1,"label",5),d.pc(2),d.Qb(),d.Mb(3,"input",6),d.nc(4,k,2,0,"div",4),d.Qb()),2&n){var e=t.$implicit,r=t.index;d.Ab(1),d.gc("for","position_"+r+1),d.Ab(1),d.rc("Position ",r+1,""),d.Ab(1),d.gc("formControl",e),d.Ab(1),d.gc("ngIf",e.hasError("maxlength"))}}function P(n,t){1&n&&(d.Rb(0,"div"),d.Rb(1,"h3"),d.pc(2,"No Words matching"),d.Qb(),d.Qb())}function I(n,t){if(1&n&&(d.Rb(0,"div"),d.Rb(1,"h3"),d.pc(2," The word is: "),d.Rb(3,"span",7),d.pc(4),d.Qb(),d.Qb(),d.Qb()),2&n){var e=d.bc().ngIf;d.Ab(4),d.qc(e[0])}}function Q(n,t){if(1&n&&(d.Rb(0,"span"),d.pc(1),d.Qb()),2&n){var e=t.$implicit;d.Ab(1),d.rc(" ",e," ")}}function R(n,t){if(1&n&&(d.Rb(0,"div"),d.Rb(1,"h5"),d.pc(2,"Potential Words"),d.Qb(),d.Rb(3,"div",8),d.nc(4,Q,2,1,"span",3),d.Qb(),d.Qb()),2&n){var e=d.bc().ngIf;d.Ab(4),d.gc("ngForOf",e)}}function A(n,t){if(1&n&&(d.Pb(0),d.nc(1,P,3,0,"div",4),d.nc(2,I,5,1,"div",4),d.nc(3,R,5,1,"div",4),d.Ob()),2&n){var e=t.ngIf;d.Ab(1),d.gc("ngIf",0===e.length),d.Ab(1),d.gc("ngIf",1===e.length),d.Ab(1),d.gc("ngIf",e.length>1)}}var _,F,j=[{path:"",component:(_=function(){function n(t,e){_classCallCheck(this,n),this.fb=t,this.passwordsService=e}return _createClass(n,[{key:"ngOnInit",value:function(){this.form=this.buildForm(),this.words$=this.observeWords(this.form)}},{key:"getPasswordControls",value:function(){return this.form.get("positions").controls}},{key:"buildForm",value:function(){var n=this,t=new Array(5).fill(null).map((function(){return n.fb.control("",[s.o.maxLength(5),s.o.minLength(5)])}));return this.fb.group({positions:this.fb.array(t)})}},{key:"observeWords",value:function(n){var t=this;return n.get("positions").valueChanges.pipe(Object(u.a)((function(n){return n.map((function(n){return n.split("")}))})),Object(u.a)((function(n){return b.a.log("test: ",t.passwordsService.isEmpty(n),n),t.passwordsService.getPossiblePasswords(n)})))}}]),n}(),_.\u0275fac=function(n){return new(n||_)(d.Lb(s.b),d.Lb(h))},_.\u0275cmp=d.Fb({type:_,selectors:[["app-passwords"]],decls:7,vars:5,consts:[["novalidate","",3,"formGroup"],[1,"margin"],["linkId","Passwords"],[4,"ngFor","ngForOf"],[4,"ngIf"],[3,"for"],["placeholder","Enter the 5 letters for this position","type","text","appFormInput","","minlength","5","maxlength","5",3,"formControl"],[2,"text-decoration","underline"],["fxLayout","column"]],template:function(n,t){1&n&&(d.Rb(0,"form",0),d.Rb(1,"div",1),d.Mb(2,"app-manual-link",2),d.Qb(),d.Rb(3,"app-middle-layout"),d.nc(4,C,5,4,"app-form-field",3),d.nc(5,A,4,3,"ng-container",4),d.cc(6,"async"),d.Qb(),d.Qb()),2&n&&(d.gc("formGroup",t.form),d.Ab(4),d.gc("ngForOf",t.getPasswordControls()),d.Ab(1),d.gc("ngIf",d.dc(6,3,t.words$)))},directives:[s.q,s.j,s.e,g.a,v.a,o.j,o.k,m.a,s.a,w.a,s.h,s.g,s.i,s.c,y.c],pipes:[o.b],encapsulation:2,changeDetection:0}),_)}],E=((F=function n(){_classCallCheck(this,n)}).\u0275mod=d.Jb({type:F}),F.\u0275inj=d.Ib({factory:function(n){return new(n||F)},imports:[[f.c.forChild(j)],f.c]}),F);e.d(t,"PasswordsModule",(function(){return x}));var O,x=((O=function n(){_classCallCheck(this,n)}).\u0275mod=d.Jb({type:O}),O.\u0275inj=d.Ib({factory:function(n){return new(n||O)},imports:[[o.c,E,s.f,i.a,s.m,l.a,a.a,c.a]]}),O)}}]);