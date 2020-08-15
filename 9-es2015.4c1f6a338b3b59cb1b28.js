(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{NIGn:function(e,t,n){"use strict";n.r(t),n.d(t,"ComplexModule",(function(){return F}));var r=n("2kYt"),s=n("40Bj"),a=n("nIj0"),i=n("EM62");let o=(()=>{class e{}return e.\u0275mod=i.Hb({type:e}),e.\u0275inj=i.Gb({factory:function(t){return new(t||e)}}),e})();var l=n("api/"),c=n("hKeC"),u=n("+Net"),b=n("sEIs"),p=n("ZTXN"),h=n("YtkY"),f=n("jIqt"),m=n("IqwL"),w=function(e){return e.C="Cut the Wire",e.D="Do not cut the wire",e.S="Cut the wire if the last digit of the serial number is even",e.P="Cut the wire if the bomb has a parallel port",e.B="Cut the wire if the bomb has two or more batteries",e}({});const O=[{LEDIsOn:!1,hasStar:!1,wireHasBlue:!1,wireHasRed:!1,instruction:w.C},{LEDIsOn:!1,hasStar:!1,wireHasBlue:!1,wireHasRed:!0,instruction:w.S},{LEDIsOn:!1,hasStar:!1,wireHasBlue:!0,wireHasRed:!1,instruction:w.S},{LEDIsOn:!1,hasStar:!0,wireHasBlue:!1,wireHasRed:!1,instruction:w.C},{LEDIsOn:!0,hasStar:!1,wireHasBlue:!1,wireHasRed:!1,instruction:w.D},{LEDIsOn:!1,hasStar:!0,wireHasBlue:!1,wireHasRed:!0,instruction:w.C},{LEDIsOn:!1,hasStar:!1,wireHasBlue:!0,wireHasRed:!0,instruction:w.S},{LEDIsOn:!0,hasStar:!1,wireHasBlue:!0,wireHasRed:!1,instruction:w.P},{LEDIsOn:!0,hasStar:!0,wireHasBlue:!1,wireHasRed:!1,instruction:w.B},{LEDIsOn:!1,hasStar:!0,wireHasBlue:!0,wireHasRed:!1,instruction:w.D},{LEDIsOn:!0,hasStar:!1,wireHasBlue:!1,wireHasRed:!0,instruction:w.B},{LEDIsOn:!1,hasStar:!0,wireHasBlue:!0,wireHasRed:!0,instruction:w.P},{LEDIsOn:!0,hasStar:!1,wireHasBlue:!0,wireHasRed:!0,instruction:w.S},{LEDIsOn:!0,hasStar:!0,wireHasBlue:!1,wireHasRed:!0,instruction:w.B},{LEDIsOn:!0,hasStar:!0,wireHasBlue:!0,wireHasRed:!1,instruction:w.P},{LEDIsOn:!0,hasStar:!0,wireHasBlue:!0,wireHasRed:!0,instruction:w.D}];let I=(()=>{class e{constructor(){}cutWire(e,t){const n=this.getInstruction(e),{hasParallelPort:r,lastDigitIsEven:s,multiBatteries:a}=t;switch(m.a.log("determined instruction: ",n),n){case w.C:return!0;case w.D:return!1;case w.S:return s;case w.P:return r;case w.B:return a;default:throw m.a.warn("Unknowing instruction given:",n),new Error}}isTrueOrFalse(e){return!0===e||!1===e}isWireParams(e){return this.isTrueOrFalse(e.LEDIsOn)&&this.isTrueOrFalse(e.hasStar)&&this.isTrueOrFalse(e.wireHasBlue)&&this.isTrueOrFalse(e.wireHasRed)}isGlobalWireParams(e){return this.isTrueOrFalse(e.hasParallelPort)&&this.isTrueOrFalse(e.lastDigitIsEven)&&this.isTrueOrFalse(e.multiBatteries)}getInstruction(e){const{LEDIsOn:t,hasStar:n,wireHasBlue:r,wireHasRed:s}=e,a=O.find(e=>e.LEDIsOn===t&&e.hasStar===n&&e.wireHasBlue===r&&e.wireHasRed===s);if(!a)throw m.a.error("no instruction found for params: ",e),new Error;return a.instruction}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=i.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var d=n("X0g2"),P=n("bsiz"),g=n("4oqK"),H=n("U9PD"),D=n("qFEQ");const v=["*"];let y=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Db({type:e,selectors:[["app-answer-box"]],ngContentSelectors:v,decls:1,vars:0,template:function(e,t){1&e&&(i.dc(),i.cc(0))},styles:["[_nghost-%COMP%] {\n        margin: 16px;\n        font-weight: 800;\n        border: 2px black solid;\n        padding: 8px 4px;\n        border-radius: 4px;\n      }"],changeDetection:0}),e})();function E(e,t){1&e&&(i.Nb(0),i.Pb(1,"h3"),i.nc(2," Instructional Inputs "),i.Ob(),i.Pb(3,"app-form-field"),i.Pb(4,"label",19),i.nc(5,"Is the last digit of the serial number even?"),i.Ob(),i.Pb(6,"select",20),i.Pb(7,"option",5),i.nc(8," Yes "),i.Ob(),i.Pb(9,"option",5),i.nc(10," No "),i.Ob(),i.Ob(),i.Ob(),i.Pb(11,"app-form-field"),i.Pb(12,"label",21),i.nc(13,"Does the bomb have a parallel port?"),i.Ob(),i.Pb(14,"select",22),i.Pb(15,"option",5),i.nc(16," Yes "),i.Ob(),i.Pb(17,"option",5),i.nc(18," No "),i.Ob(),i.Ob(),i.Ob(),i.Pb(19,"app-form-field"),i.Pb(20,"label",23),i.nc(21,"Does the bomb have two or more wires?"),i.Ob(),i.Pb(22,"select",24),i.Pb(23,"option",5),i.nc(24," Yes "),i.Ob(),i.Pb(25,"option",5),i.nc(26," No "),i.Ob(),i.Ob(),i.Ob(),i.Mb()),2&e&&(i.yb(7),i.ec("ngValue",!0),i.yb(2),i.ec("ngValue",!1),i.yb(6),i.ec("ngValue",!0),i.yb(2),i.ec("ngValue",!1),i.yb(6),i.ec("ngValue",!0),i.yb(2),i.ec("ngValue",!1))}function S(e,t){if(1&e&&(i.Pb(0,"app-answer-box"),i.nc(1),i.Ob()),2&e){const e=t.ngIf,n=i.Zb(2);i.yb(1),i.pc(" ",n.getCutTheWireDisplay(e)," ")}}function B(e,t){if(1&e&&(i.Nb(0),i.lc(1,S,2,1,"app-answer-box",6),i.ac(2,"async"),i.Mb()),2&e){const e=i.Zb();i.yb(1),i.ec("ngIf",i.bc(2,1,e.cutTheWire$))}}function C(e,t){if(1&e&&(i.Pb(0,"app-answer-box"),i.nc(1),i.Ob()),2&e){const e=t.ngIf;i.yb(1),i.pc(" ",e," ")}}function L(e,t){if(1&e&&(i.lc(0,C,2,1,"app-answer-box",6),i.ac(1,"async")),2&e){const e=i.Zb();i.ec("ngIf",i.bc(1,1,e.instruction$))}}const R=[{path:"",component:(()=>{class e{constructor(e,t){this.fb=e,this.complexService=t,this.takeUntil=new p.a}ngOnInit(){this.form=this.buildForm(),this.showInstructionalInputs$=this.observeShowInstructionalInputs(this.form),this.instruction$=this.observeInstruction(this.form),this.cutTheWire$=this.observeCutTheWire(this.form)}ngOnDestroy(){this.takeUntil.next(),this.takeUntil.unsubscribe()}getCutTheWireDisplay(e){return e?w.C:w.D}clearForm(e){m.a.log("clearing form"),e.patchValue({wireHasRed:null,wireHasBlue:null,hasStar:null,LEDIsOn:null})}buildForm(){return this.fb.group({showInstructionalInputs:this.fb.control(!1,[]),wireHasRed:this.fb.control(null,[]),wireHasBlue:this.fb.control(null,[]),hasStar:this.fb.control(null,[]),LEDIsOn:this.fb.control(null,[]),lastDigitIsEven:this.fb.control(null,[]),hasParallelPort:this.fb.control(null,[]),multiBatteries:this.fb.control(null,[])})}observeShowInstructionalInputs(e){return e.valueChanges.pipe(Object(h.a)(e=>!!e.showInstructionalInputs),Object(f.a)(!1))}observeInstruction(e){return e.valueChanges.pipe(Object(h.a)(e=>this.complexService.isWireParams(e)?this.complexService.getInstruction(e):void 0))}observeCutTheWire(e){return e.valueChanges.pipe(Object(h.a)(e=>{const t=this.complexService.isWireParams(e),n=this.complexService.isGlobalWireParams(e);return m.a.log("test with observe cut wire:",t,n),t&&n?this.complexService.cutWire(e,e):void 0}))}}return e.\u0275fac=function(t){return new(t||e)(i.Jb(a.c),i.Jb(I))},e.\u0275cmp=i.Db({type:e,selectors:[["app-complex"]],decls:58,vars:18,consts:[["novalidate","",3,"formGroup"],[1,"margin"],["linkId","ComplicatedWires"],["for","showInstructionalInputs"],["appFormInput","","formControlName","showInstructionalInputs","name","showInstructionalInputs"],[3,"ngValue"],[4,"ngIf"],["for","wireHasRed"],["appFormInput","","formControlName","wireHasRed","name","wireHasRed"],["for","wireHasBlue"],["appFormInput","","formControlName","wireHasBlue","name","wireHasBlue"],["for","hasStar"],["appFormInput","","formControlName","hasStar","name","hasStar"],["for","LEDIsOn"],["appFormInput","","formControlName","LEDIsOn","name","LEDIsOn"],[4,"ngIf","ngIfElse"],["showInstruction",""],["fxLayout","row","fxLayoutAlign","end",1,"half-width"],["type","button","title","removes wire specific questions",3,"click"],["for","lastDigitIsEven"],["appFormInput","","formControlName","lastDigitIsEven","name","lastDigitIsEven"],["for","hasParallelPort"],["appFormInput","","formControlName","hasParallelPort","name","hasParallelPort"],["for","multiBatteries"],["appFormInput","","formControlName","multiBatteries","name","multiBatteries"]],template:function(e,t){if(1&e&&(i.Pb(0,"form",0),i.Pb(1,"div"),i.Pb(2,"app-middle-layout"),i.Pb(3,"div",1),i.Kb(4,"app-manual-link",2),i.Ob(),i.Pb(5,"app-form-field"),i.Pb(6,"label",3),i.nc(7,"Ask Instructional questions?"),i.Ob(),i.Pb(8,"select",4),i.Pb(9,"option",5),i.nc(10," Yes "),i.Ob(),i.Pb(11,"option",5),i.nc(12," No "),i.Ob(),i.Ob(),i.Pb(13,"div"),i.nc(14," NOTE: if No, we will show the output, and you (the manual-reader) might need to ask more questions. "),i.Ob(),i.Ob(),i.lc(15,E,27,6,"ng-container",6),i.ac(16,"async"),i.Pb(17,"h3"),i.nc(18," Wire specific questions "),i.Ob(),i.Pb(19,"app-form-field"),i.Pb(20,"label",7),i.nc(21,"Wire has red coloring"),i.Ob(),i.Pb(22,"select",8),i.Pb(23,"option",5),i.nc(24," Yes "),i.Ob(),i.Pb(25,"option",5),i.nc(26," No "),i.Ob(),i.Ob(),i.Ob(),i.Pb(27,"app-form-field"),i.Pb(28,"label",9),i.nc(29,"Wire has blue coloring"),i.Ob(),i.Pb(30,"select",10),i.Pb(31,"option",5),i.nc(32," Yes "),i.Ob(),i.Pb(33,"option",5),i.nc(34," No "),i.Ob(),i.Ob(),i.Ob(),i.Pb(35,"app-form-field"),i.Pb(36,"label",11),i.nc(37,"Wire has a star"),i.Ob(),i.Pb(38,"select",12),i.Pb(39,"option",5),i.nc(40," Yes "),i.Ob(),i.Pb(41,"option",5),i.nc(42," No "),i.Ob(),i.Ob(),i.Ob(),i.Pb(43,"app-form-field"),i.Pb(44,"label",13),i.nc(45,"LED Is On"),i.Ob(),i.Pb(46,"select",14),i.Pb(47,"option",5),i.nc(48," Yes "),i.Ob(),i.Pb(49,"option",5),i.nc(50," No "),i.Ob(),i.Ob(),i.Ob(),i.lc(51,B,3,3,"ng-container",15),i.ac(52,"async"),i.lc(53,L,2,3,"ng-template",null,16,i.mc),i.Pb(55,"div",17),i.Pb(56,"button",18),i.Xb("click",(function(){return t.clearForm(t.form)})),i.nc(57," Reset "),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Ob()),2&e){const e=i.hc(54);i.ec("formGroup",t.form),i.yb(9),i.ec("ngValue",!0),i.yb(2),i.ec("ngValue",!1),i.yb(4),i.ec("ngIf",i.bc(16,14,t.showInstructionalInputs$)),i.yb(8),i.ec("ngValue",!0),i.yb(2),i.ec("ngValue",!1),i.yb(6),i.ec("ngValue",!0),i.yb(2),i.ec("ngValue",!1),i.yb(6),i.ec("ngValue",!0),i.yb(2),i.ec("ngValue",!1),i.yb(6),i.ec("ngValue",!0),i.yb(2),i.ec("ngValue",!1),i.yb(2),i.ec("ngIf",i.bc(52,16,t.showInstructionalInputs$))("ngIfElse",e)}},directives:[a.s,a.k,a.f,d.a,P.a,g.a,a.p,H.a,a.j,a.e,a.m,a.r,r.k,D.c,D.b,y],pipes:[r.b],encapsulation:2,changeDetection:0}),e})()}];let N=(()=>{class e{}return e.\u0275mod=i.Hb({type:e}),e.\u0275inj=i.Gb({factory:function(t){return new(t||e)},imports:[[b.e.forChild(R)],b.e]}),e})(),F=(()=>{class e{}return e.\u0275mod=i.Hb({type:e}),e.\u0275inj=i.Gb({factory:function(t){return new(t||e)},imports:[[r.c,N,a.g,s.a,a.o,u.a,l.a,o,c.a]]}),e})()}}]);