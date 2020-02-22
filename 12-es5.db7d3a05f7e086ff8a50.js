function _slicedToArray(e,n){return _arrayWithHoles(e)||_iterableToArrayLimit(e,n)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(e,n){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var r=[],t=!0,i=!1,o=void 0;try{for(var u,a=e[Symbol.iterator]();!(t=(u=a.next()).done)&&(r.push(u.value),!n||r.length!==n);t=!0);}catch(c){i=!0,o=c}finally{try{t||null==a.return||a.return()}finally{if(i)throw o}}return r}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function _createClass(e,n,r){return n&&_defineProperties(e.prototype,n),r&&_defineProperties(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{JKyo:function(e,n,r){"use strict";r.r(n);var t,i=r("2kYt"),o=r("nIj0"),u=r("api/"),a=r("hKeC"),c=r("+Net"),l=r("sEIs"),s=r("HM3f"),f=r("YtkY"),b=r("jIqt"),h=r("EM62"),d=((t=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"needIsSerialOdd",value:function(n){switch(e.length){case 3:return!1;case 4:return n.filter((function(e){return"red"===e})).length>1;case 5:return"black"===n[n.length-1];case 6:return 0===n.filter((function(e){return"yellow"===e})).length;default:return!1}}},{key:"getWireToCut",value:function(e,n){switch(e.length){case 3:return this.getWireToCutOfThree(e);case 4:return this.getWireToCutOfFour(e,n);case 5:return this.getWireToCutOfFive(e,n);case 6:return this.getWireToCutOfSix(e,n);default:return null}}},{key:"getWireToCutOfThree",value:function(e){var n=!e.includes("red"),r=e.length;if(n)return 2;if("white"===e[e.length-1])return r;if(e.filter((function(e){return"blue"===e})).length>1){var t=e.reverse().findIndex((function(e){return"blue"===e}));return e.length-t}return r}},{key:"getWireToCutOfFour",value:function(e,n){var r=e.filter((function(e){return"red"===e}));if(r.length>1&&n){var t=e.reverse().findIndex((function(e){return"red"===e}));return e.length-t}return"yellow"===e[e.length-1]&&0===r.length?1:1===e.filter((function(e){return"blue"===e})).length?1:e.filter((function(e){return"yellow"===e})).length>1?4:2}},{key:"getWireToCutOfFive",value:function(e,n){if("black"===e[e.length-1]&&n)return 4;var r=1===e.filter((function(e){return"red"===e})).length,t=e.filter((function(e){return"yellow"===e})).length>1;return r&&t?1:e.find((function(e){return"black"===e}))?1:2}},{key:"getWireToCutOfSix",value:function(e,n){if(0===e.filter((function(e){return"yellow"===e})).length&&n)return 3;var r=1===e.filter((function(e){return"yellow"===e})).length,t=e.filter((function(e){return"white"===e})).length>1;return r&&t?4:0===e.filter((function(e){return"red"===e})).length?e.length:4}}]),e}()).\u0275fac=function(e){return new(e||t)},t.\u0275prov=h.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t),g=r("X0g2"),p=r("bsiz"),m=r("4oqK"),v=r("U9PD");function y(e,n){1&e&&(h.Qb(0,"div",8),h.mc(1," Value is too small "),h.Pb())}function w(e,n){1&e&&(h.Qb(0,"div",8),h.mc(1," Value is too large "),h.Pb())}function C(e,n){if(1&e&&(h.Qb(0,"option",12),h.mc(1),h.Pb()),2&e){var r=n.$implicit;h.ec("value",r),h.Ab(1),h.nc(r)}}function k(e,n){if(1&e&&(h.Qb(0,"app-form-field"),h.Qb(1,"label",3),h.mc(2),h.Pb(),h.Qb(3,"select",10),h.kc(4,C,2,2,"option",11),h.Pb(),h.Pb()),2&e){var r=n.$implicit,t=n.index,i=h.Zb(2);h.Ab(2),h.oc("Wire: ",t+1,""),h.Ab(1),h.ec("formControl",r),h.Ab(1),h.ec("ngForOf",i.wireOptions)}}function O(e,n){if(1&e&&(h.Ob(0),h.kc(1,k,5,3,"app-form-field",9),h.Nb()),2&e){var r=h.Zb();h.Ab(1),h.ec("ngForOf",r.form.get("wires").controls)}}function I(e,n){1&e&&(h.Qb(0,"div"),h.mc(1," Disregard this input for this listing of wires! "),h.Pb())}function S(e,n){1&e&&h.mc(0," This is required! ")}function Q(e,n){if(1&e&&(h.Qb(0,"app-form-field"),h.Qb(1,"label",3),h.mc(2,"2. Is Serial Odd"),h.Pb(),h.Qb(3,"select",13),h.Qb(4,"option",12),h.mc(5,"True"),h.Pb(),h.Qb(6,"option",12),h.mc(7,"False"),h.Pb(),h.Pb(),h.kc(8,I,2,0,"div",14),h.ac(9,"async"),h.kc(10,S,1,0,"ng-template",null,15,h.lc),h.Pb()),2&e){var r=h.hc(11),t=h.Zb();h.Ab(4),h.ec("value",!0),h.Ab(2),h.ec("value",!0),h.Ab(2),h.ec("ngIf",h.bc(9,4,t.dontUseSerial$))("ngIfElse",r)}}function T(e,n){if(1&e&&(h.Ob(0),h.mc(1),h.ac(2,"async"),h.Nb()),2&e){var r=h.Zb();h.Ab(1),h.oc(" Cut Wire: ",h.bc(2,1,r.wireToCut$)," ")}}var A,P,W=[{path:"",component:(A=function(){function e(n,r){_classCallCheck(this,e),this.fb=n,this.wiresService=r,this.wireOptions=["black","blue","red","white","yellow"]}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.form=this.buildForm(),this.form.get("num").valueChanges.subscribe((function(){return e.onWiresChange()})),this.wireToCut$=this.observeWireToCut(),this.showSecondQuestions$=this.observeSecondQuestions(),this.dontUseSerial$=this.observeDontUseSerial()}},{key:"buildForm",value:function(){return this.fb.group({num:this.fb.control(null,[o.o.min(3),o.o.max(6)]),wires:this.fb.array([]),isSerialOdd:this.fb.control(!1)})}},{key:"observeSecondQuestions",value:function(){return this.form.get("num").valueChanges.pipe(Object(f.a)((function(e){return!!e})))}},{key:"observeDontUseSerial",value:function(){var e=this;return this.form.get("wires").valueChanges.pipe(Object(f.a)((function(n){return!e.wiresService.needIsSerialOdd(n)})))}},{key:"onWiresChange",value:function(){var e=this,n=this.form.get("num").value;if(n>=3&&n<=6){for(var r=new Array(n).fill(null).map((function(){return e.fb.control("white")})),t=this.form.get("wires");0!==t.length;)t.removeAt(0);r.forEach((function(e){return t.push(e)}))}}},{key:"observeWireToCut",value:function(){var e=this;return Object(s.a)(this.form.get("wires").valueChanges,this.form.get("isSerialOdd").valueChanges.pipe(Object(b.a)(!1))).pipe(Object(f.a)((function(n){var r=_slicedToArray(n,2),t=r[0],i=r[1];return e.wiresService.getWireToCut(t,i)})))}}]),e}(),A.\u0275fac=function(e){return new(e||A)(h.Lb(o.b),h.Lb(d))},A.\u0275cmp=h.Fb({type:A,selectors:[["app-wires"]],decls:17,vars:12,consts:[["novalidate","",3,"formGroup"],[1,"margin"],["linkId","Wires"],["for","wires"],["type","number","appFormInput","","formControlName","num","min","3","max","6"],["style","color: red",4,"ngIf"],[1,"margin","full-width"],[4,"ngIf"],[2,"color","red"],[4,"ngFor","ngForOf"],["appFormInput","",3,"formControl"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["type","select","appFormInput","","formControlName","isSerialOdd"],[4,"ngIf","ngIfElse"],["showNeedSerial",""]],template:function(e,n){1&e&&(h.Qb(0,"form",0),h.Qb(1,"app-middle-layout"),h.Qb(2,"div",1),h.Mb(3,"app-manual-link",2),h.Pb(),h.Qb(4,"app-form-field"),h.Qb(5,"label",3),h.mc(6,"1. How many wires? (3-6)"),h.Pb(),h.Mb(7,"input",4),h.kc(8,y,2,0,"div",5),h.kc(9,w,2,0,"div",5),h.Pb(),h.Qb(10,"div",6),h.kc(11,O,2,1,"ng-container",7),h.ac(12,"async"),h.Pb(),h.kc(13,Q,12,6,"app-form-field",7),h.ac(14,"async"),h.kc(15,T,3,3,"ng-container",7),h.ac(16,"async"),h.Pb(),h.Pb()),2&e&&(h.ec("formGroup",n.form),h.Ab(8),h.ec("ngIf",n.form.get("num").hasError("min")),h.Ab(1),h.ec("ngIf",n.form.get("num").hasError("max")),h.Ab(2),h.ec("ngIf",h.bc(12,6,n.showSecondQuestions$)),h.Ab(2),h.ec("ngIf",h.bc(14,8,n.showSecondQuestions$)),h.Ab(2),h.ec("ngIf",h.bc(16,10,n.showSecondQuestions$)))},directives:[o.q,o.j,o.e,g.a,p.a,m.a,o.l,o.a,v.a,o.i,o.d,i.k,i.j,o.n,o.c,o.k,o.p],pipes:[i.b],encapsulation:2,changeDetection:0}),A)}],_=((P=function e(){_classCallCheck(this,e)}).\u0275mod=h.Jb({type:P}),P.\u0275inj=h.Ib({factory:function(e){return new(e||P)},imports:[[l.c.forChild(W)],l.c]}),P);r.d(n,"WiresModule",(function(){return j}));var F,j=((F=function e(){_classCallCheck(this,e)}).\u0275mod=h.Jb({type:F}),F.\u0275inj=h.Ib({factory:function(e){return new(e||F)},imports:[[i.c,_,o.f,o.m,c.a,u.a,a.a]]}),F)}}]);