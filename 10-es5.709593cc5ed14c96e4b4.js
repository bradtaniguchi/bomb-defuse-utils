function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}function _possibleConstructorReturn(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _get(t,e,n){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var i=_superPropBase(t,e);if(i){var s=Object.getOwnPropertyDescriptor(i,e);return s.get?s.get.call(n):s.value}})(t,e,n||t)}function _superPropBase(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=_getPrototypeOf(t)););return t}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{qzbX:function(t,e,n){"use strict";n.r(e);var i,s=n("2kYt"),o=n("40Bj"),r=n("nIj0"),a=n("api/"),c=n("+Net"),u=n("sEIs"),l=n("ZTXN"),h=function(t){function e(t,n){var i;return _classCallCheck(this,e),(i=_possibleConstructorReturn(this,_getPrototypeOf(e).call(this,t,n))).scheduler=t,i.work=n,i}return _inherits(e,t),_createClass(e,[{key:"schedule",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return n>0?_get(_getPrototypeOf(e.prototype),"schedule",this).call(this,t,n):(this.delay=n,this.state=t,this.scheduler.flush(this),this)}},{key:"execute",value:function(t,n){return n>0||this.closed?_get(_getPrototypeOf(e.prototype),"execute",this).call(this,t,n):this._execute(t,n)}},{key:"requestAsyncId",value:function(t,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return null!==i&&i>0||null===i&&this.delay>0?_get(_getPrototypeOf(e.prototype),"requestAsyncId",this).call(this,t,n,i):t.flush(this)}}]),e}(n("EWqr").a),p=new(function(t){function e(){return _classCallCheck(this,e),_possibleConstructorReturn(this,_getPrototypeOf(e).apply(this,arguments))}return _inherits(e,t),e}(n("DG/E").a))(h),f=n("bwdy"),b=n("5uGe"),g=n("ryP2"),m=function(t){function e(t,n){var i,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return _classCallCheck(this,e),(i=_possibleConstructorReturn(this,_getPrototypeOf(e).call(this,t))).scheduler=n,i.delay=s,i}return _inherits(e,t),_createClass(e,[{key:"scheduleMessage",value:function(t){this.destination.add(this.scheduler.schedule(e.dispatch,this.delay,new d(t,this.destination)))}},{key:"_next",value:function(t){this.scheduleMessage(g.a.createNext(t))}},{key:"_error",value:function(t){this.scheduleMessage(g.a.createError(t)),this.unsubscribe()}},{key:"_complete",value:function(){this.scheduleMessage(g.a.createComplete()),this.unsubscribe()}}],[{key:"dispatch",value:function(t){var e=t.notification,n=t.destination;e.observe(n),this.unsubscribe()}}]),e}(b.a),d=function t(e,n){_classCallCheck(this,t),this.notification=e,this.destination=n},y=n("MiDb"),v=n("yTkW"),_=function(t){function e(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Number.POSITIVE_INFINITY,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Number.POSITIVE_INFINITY,s=arguments.length>2?arguments[2]:void 0;return _classCallCheck(this,e),(t=_possibleConstructorReturn(this,_getPrototypeOf(e).call(this))).scheduler=s,t._events=[],t._infiniteTimeWindow=!1,t._bufferSize=n<1?1:n,t._windowTime=i<1?1:i,i===Number.POSITIVE_INFINITY?(t._infiniteTimeWindow=!0,t.next=t.nextInfiniteTimeWindow):t.next=t.nextTimeWindow,t}return _inherits(e,t),_createClass(e,[{key:"nextInfiniteTimeWindow",value:function(t){var n=this._events;n.push(t),n.length>this._bufferSize&&n.shift(),_get(_getPrototypeOf(e.prototype),"next",this).call(this,t)}},{key:"nextTimeWindow",value:function(t){this._events.push(new w(this._getNow(),t)),this._trimBufferThenGetEvents(),_get(_getPrototypeOf(e.prototype),"next",this).call(this,t)}},{key:"_subscribe",value:function(t){var e,n=this._infiniteTimeWindow,i=n?this._events:this._trimBufferThenGetEvents(),s=this.scheduler,o=i.length;if(this.closed)throw new y.a;if(this.isStopped||this.hasError?e=f.a.EMPTY:(this.observers.push(t),e=new v.a(this,t)),s&&t.add(t=new m(t,s)),n)for(var r=0;r<o&&!t.closed;r++)t.next(i[r]);else for(var a=0;a<o&&!t.closed;a++)t.next(i[a].value);return this.hasError?t.error(this.thrownError):this.isStopped&&t.complete(),e}},{key:"_getNow",value:function(){return(this.scheduler||p).now()}},{key:"_trimBufferThenGetEvents",value:function(){for(var t=this._getNow(),e=this._bufferSize,n=this._windowTime,i=this._events,s=i.length,o=0;o<s&&!(t-i[o].time<n);)o++;return s>e&&(o=Math.max(o,s-e)),o>0&&i.splice(0,o),i}}]),e}(l.a),w=function t(e,n){_classCallCheck(this,t),this.time=e,this.value=n},k=n("HM3f"),P=n("YtkY"),O=n("8j5Y"),I=n("cJ9h"),S=n("jIqt"),C=n("TLy2"),x=n("J+dc"),j=n("xVbo"),R=n("IqwL"),$=n("EM62"),T=((i=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"getPrompts",value:function(t){if(!t||0===t.length)return[this.getStage1Prompt()];switch(t.length){case 1:return[this.getStage1Prompt(),this.getStage2Prompt(t)];case 2:return[this.getStage1Prompt(),this.getStage2Prompt(t),this.getStage3Prompt(t)];case 3:return[this.getStage1Prompt(),this.getStage2Prompt(t),this.getStage3Prompt(t),this.getStage4Prompt(t)];case 4:return[this.getStage1Prompt(),this.getStage2Prompt(t),this.getStage3Prompt(t),this.getStage4Prompt(t),this.getStage5Prompt(t)];default:return[]}}},{key:"getStage1Prompt",value:function(){return{prompts:[{msg:"If the display is 1, press the button in the second position."},{msg:"If the display is 2, press the button in the second position."},{msg:"If the display is 3, press the button in the third position."},{msg:"If the display is 4, press the button in the fourth position."}]}}},{key:"getStage2Prompt",value:function(t){return{prompts:[{msg:'If the display is 1, press the button labeled "4".'},{msg:"If the display is 2, press the button in the same position as you pressed in stage 1. (".concat(t[0].position,")"),answer:t[0].position},{msg:"If the display is 3, press the button in the first position."},{msg:"If the display is 4, press the button in the same position as you pressed in stage 1. (".concat(t[0].position,")"),answer:t[0].position}]}}},{key:"getStage3Prompt",value:function(t){return{prompts:[{msg:"If the display is 1, press the button with the same label you pressed in stage 2. (".concat(t[1].label,")"),answer:t[1].label},{msg:"If the display is 2, press the button with the same label you pressed in stage 1. (".concat(t[0].label,")"),answer:t[0].label},{msg:"If the display is 3, press the button in the third position."},{msg:'If the display is 4, press the button labeled "4".'}]}}},{key:"getStage4Prompt",value:function(t){return{prompts:[{msg:"If the display is 1, press the button in the same position as you pressed in stage 1.(".concat(t[0].position,")"),answer:t[0].position},{msg:"If the display is 2, press the button in the first position."},{msg:"If the display is 3, press the button in the same position as you pressed in stage 2. (".concat(t[1].position,")"),answer:t[1].position},{msg:"If the display is 4, press the button in the same position as you pressed in stage 2. (".concat(t[1].position,")"),answer:t[1].position}]}}},{key:"getStage5Prompt",value:function(t){return{prompts:[{msg:"If the display is 1, press the button with the same label you pressed in stage 1. (".concat(t[0].label,")"),answer:t[0].label},{msg:"If the display is 2, press the button with the same label you pressed in stage 2. (".concat(t[1].label,")"),answer:t[1].label},{msg:"If the display is 3, press the button with the same label you pressed in stage 4. (".concat(t[3].label,")"),answer:t[3].label},{msg:"If the display is 4, press the button with the same label you pressed in stage 3. (".concat(t[2].label,")"),answer:t[2].label}]}}}]),t}()).\u0275fac=function(t){return new(t||i)},i.\u0275prov=$.Hb({token:i,factory:i.\u0275fac,providedIn:"root"}),i),N=n("X0g2"),M=n("bsiz"),E=n("qFEQ"),A=n("4oqK"),Q=n("U9PD");function F(t,e){if(1&t&&($.Rb(0,"div"),$.Rb(1,"span"),$.pc(2),$.Qb(),$.Qb()),2&t){var n=e.$implicit;$.Ab(2),$.rc(" ",n.msg," ")}}function G(t,e){if(1&t&&($.Pb(0),$.Rb(1,"h3"),$.pc(2),$.Qb(),$.nc(3,F,3,1,"div",3),$.Ob()),2&t){var n=e.$implicit,i=e.index;$.Ab(2),$.rc("Stage ",i+1,""),$.Ab(1),$.gc("ngForOf",n.prompts)}}function q(t,e){if(1&t&&($.Pb(0,9),$.Rb(1,"div",1),$.Rb(2,"h3"),$.pc(3),$.Qb(),$.Rb(4,"app-form-field"),$.Rb(5,"label"),$.pc(6," Location Selected "),$.Qb(),$.Mb(7,"input",10),$.Qb(),$.Rb(8,"app-form-field"),$.Rb(9,"label"),$.pc(10," Number selected "),$.Qb(),$.Mb(11,"input",11),$.Qb(),$.Qb(),$.Ob()),2&t){var n=e.index;$.gc("formGroup",e.$implicit),$.Ab(3),$.rc("Stage: ",n+1,"")}}function W(t,e){if(1&t){var n=$.Sb();$.Rb(0,"button",12),$.Zb("click",(function(t){return $.kc(n),$.bc().nextStage()})),$.pc(1," Next Stage "),$.Qb()}}function Y(t,e){if(1&t){var n=$.Sb();$.Rb(0,"button",13),$.Zb("click",(function(t){return $.kc(n),$.bc().remove()})),$.pc(1," Remove "),$.Qb()}}var z,L,B=[{path:"",component:(z=function(){function t(e,n){_classCallCheck(this,t),this.fb=e,this.memoryService=n,this.form$=new _(1)}return _createClass(t,[{key:"ngOnInit",value:function(){this.form$.next(this.createFormGroup()),this.actions$=this.getActions$(this.form$),this.prompts$=this.getPrompts$(this.actions$),this.showNextStage$=this.getShowNextStage$(this.actions$),this.showRemove$=this.getShowRemove$(this.actions$)}},{key:"createFormGroup",value:function(){return this.fb.group({actions:this.fb.array([this.buildMemoryAction()])})}},{key:"getActions$",value:function(t){return t.pipe(Object(P.a)((function(t){return t.get("actions")})),Object(O.a)((function(t){return R.a.log("debug",t)})),Object(I.a)((function(t){return t.valueChanges.pipe(Object(S.a)(),Object(P.a)((function(){return t.controls})))})))}},{key:"getPrompts$",value:function(t){var e=this;return t.pipe(Object(C.a)((function(t){return Object(k.a)(t.map((function(t){return e.getControlValue$(t)})))})),Object(O.a)((function(t){return R.a.log("getPrompts, controls",t)})),Object(P.a)((function(t){return e.memoryService.getPrompts(t)})),Object(O.a)((function(t){return R.a.log("prompts",t)})))}},{key:"getControlValue$",value:function(t){return t.valueChanges.pipe(Object(S.a)(t.value))}},{key:"getShowNextStage$",value:function(t){return t.pipe(Object(P.a)((function(t){return t.length<4})))}},{key:"getShowRemove$",value:function(t){return t.pipe(Object(P.a)((function(t){return t.length>0})))}},{key:"getActions",value:function(t){return t.get("actions").controls}},{key:"clear",value:function(){this.form$.next(this.createFormGroup())}},{key:"nextStage",value:function(){var t=this;this.form$.pipe(Object(P.a)((function(t){return t.get("actions")})),Object(x.a)(1),Object(j.a)((function(t){return t.length<4}))).subscribe((function(e){return e.push(t.buildMemoryAction())}))}},{key:"remove",value:function(){this.form$.pipe(Object(P.a)((function(t){return t.get("actions")})),Object(x.a)(1),Object(j.a)((function(t){return!!t.length}))).subscribe((function(t){return t.removeAt(t.length-1)}))}},{key:"buildMemoryAction",value:function(){return this.fb.group({position:this.fb.control(0,[r.o.required,r.o.min(0),r.o.max(4)]),label:this.fb.control(0,[r.o.required,r.o.min(0),r.o.max(9)])})}}]),t}(),z.\u0275fac=function(t){return new(t||z)($.Lb(r.b),$.Lb(T))},z.\u0275cmp=$.Fb({type:z,selectors:[["app-memory"]],decls:17,vars:15,consts:[["novalidate","",3,"formGroup"],[1,"margin"],["linkId","Memory"],[4,"ngFor","ngForOf"],[3,"formGroup",4,"ngFor","ngForOf"],["fxLayout","row","fxLayoutAlign","end",1,"half-width"],["title","Moves onto the next stage",3,"click",4,"ngIf"],["title","Removes the last entry",3,"click",4,"ngIf"],["type","button","title","Removes previous answers",3,"click"],[3,"formGroup"],["type","number","placeholder","The location of the button selected","appFormInput","","formControlName","position","min","0","max","4"],["type","number","appFormInput","","placeholder","The number on the button selected","formControlName","label","min","0","max","9"],["title","Moves onto the next stage",3,"click"],["title","Removes the last entry",3,"click"]],template:function(t,e){1&t&&($.Rb(0,"form",0),$.cc(1,"async"),$.Rb(2,"div"),$.Rb(3,"app-middle-layout"),$.Rb(4,"div",1),$.Mb(5,"app-manual-link",2),$.Qb(),$.nc(6,G,4,2,"ng-container",3),$.cc(7,"async"),$.nc(8,q,12,2,"ng-container",4),$.cc(9,"async"),$.Rb(10,"div",5),$.nc(11,W,2,0,"button",6),$.cc(12,"async"),$.nc(13,Y,2,0,"button",7),$.cc(14,"async"),$.Rb(15,"button",8),$.Zb("click",(function(t){return e.clear()})),$.pc(16," Reset "),$.Qb(),$.Qb(),$.Qb(),$.Qb(),$.Qb()),2&t&&($.gc("formGroup",$.dc(1,5,e.form$)),$.Ab(6),$.gc("ngForOf",$.dc(7,7,e.prompts$)),$.Ab(2),$.gc("ngForOf",$.dc(9,9,e.actions$)),$.Ab(3),$.gc("ngIf",$.dc(12,11,e.showNextStage$)),$.Ab(2),$.gc("ngIf",$.dc(14,13,e.showRemove$)))},directives:[r.q,r.j,r.e,N.a,M.a,s.j,E.c,E.b,s.k,A.a,r.l,r.a,Q.a,r.i,r.d],pipes:[s.b],encapsulation:2,changeDetection:0}),z)}],J=((L=function t(){_classCallCheck(this,t)}).\u0275mod=$.Jb({type:L}),L.\u0275inj=$.Ib({factory:function(t){return new(t||L)},imports:[[u.c.forChild(B)],u.c]}),L),V=n("hKeC");n.d(e,"MemoryModule",(function(){return Z}));var D,Z=((D=function t(){_classCallCheck(this,t)}).\u0275mod=$.Jb({type:D}),D.\u0275inj=$.Ib({factory:function(t){return new(t||D)},imports:[[s.c,J,o.a,r.m,c.a,a.a,V.a]]}),D)}}]);