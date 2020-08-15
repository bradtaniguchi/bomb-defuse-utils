!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{gA4M:function(t,r,o){"use strict";o.r(r),o.d(r,"SearchModule",(function(){return M}));var i,a=o("2kYt"),s=o("sEIs"),c=o("mWib"),u=o("YtkY"),l=o("oxCZ"),h=o("vY5A"),f=o("EM62"),v=((i=function(){function t(){e(this,t),this.routes=h.b.filter((function(e){return!e.exclude}))}return n(t,[{key:"search",value:function(e){return new l(this.routes,{keys:["title","tags"]}).search(e)}}]),t}()).\u0275fac=function(e){return new(e||i)},i.\u0275prov=f.Fb({token:i,factory:i.\u0275fac,providedIn:"root"}),i),d=o("nIj0"),p=o("qFEQ"),g=function(e){return["../",e]};function y(e,t){if(1&e&&(f.Pb(0,"div"),f.Pb(1,"a",8),f.nc(2),f.Ob(),f.Ob()),2&e){var n=t.$implicit;f.yb(1),f.ec("routerLink",f.fc(2,g,n.path)),f.yb(1),f.oc(n.title)}}var b,m,k,S=[{path:"",component:(b=function(){function t(n,r){e(this,t),this.fb=n,this.searchService=r}return n(t,[{key:"ngOnInit",value:function(){this.form=this.buildForm(),this.results$=this.observeResults(this.form)}},{key:"buildForm",value:function(){return this.fb.group({search:this.fb.control("",[])})}},{key:"observeResults",value:function(e){var t=this;return e.get("search").valueChanges.pipe(Object(c.a)(100),Object(u.a)((function(e){return t.searchService.search(e)})))}},{key:"onSubmit",value:function(e){console.log("test in form:",e)}}]),t}(),b.\u0275fac=function(e){return new(e||b)(f.Jb(d.c),f.Jb(v))},b.\u0275cmp=f.Db({type:b,selectors:[["app-search"]],decls:13,vars:4,consts:[["novalidate","",3,"formGroup","submit"],["fxLayout","column","fxLayoutAlign","center center"],["fxLayout","column","fxLayoutAlign","center center",1,"half-width"],["for","search"],["fxLayout","row",1,"full-width"],["type","text","id","search","name","search","formControlName","search","autocomplete","off",1,"search-box","full-width"],["fxLayout","column"],[4,"ngFor","ngForOf"],[3,"routerLink"]],template:function(e,t){1&e&&(f.Pb(0,"main"),f.Pb(1,"form",0),f.Xb("submit",(function(){return t.onSubmit(t.form)})),f.Pb(2,"div",1),f.Pb(3,"div",2),f.Pb(4,"label",3),f.nc(5,"Search Utils:"),f.Ob(),f.Pb(6,"div",4),f.Kb(7,"input",5),f.Pb(8,"button"),f.nc(9," Search "),f.Ob(),f.Ob(),f.Ob(),f.Ob(),f.Pb(10,"div",6),f.lc(11,y,3,4,"div",7),f.ac(12,"async"),f.Ob(),f.Ob(),f.Ob()),2&e&&(f.yb(1),f.ec("formGroup",t.form),f.yb(10),f.ec("ngForOf",f.bc(12,2,t.results$)))},directives:[d.s,d.k,d.f,p.c,p.b,d.b,d.j,d.e,a.j,s.d],pipes:[a.b],encapsulation:2,changeDetection:0}),b)}],x=((m=function t(){e(this,t)}).\u0275mod=f.Hb({type:m}),m.\u0275inj=f.Gb({factory:function(e){return new(e||m)},imports:[[s.e.forChild(S)],s.e]}),m),w=o("40Bj"),M=((k=function t(){e(this,t)}).\u0275mod=f.Hb({type:k}),k.\u0275inj=f.Gb({factory:function(e){return new(e||k)},imports:[[a.c,x,d.g,w.a,d.o,s.e]]}),k)},oxCZ:function(e,t,n){e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,(function(t){return e[t]}).bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=function(e){return Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)}},function(e,t,n){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o=n(2),i=n(8),a=n(0),s=function(){function e(t,n){var r=n.location,o=void 0===r?0:r,a=n.distance,s=void 0===a?100:a,c=n.threshold,u=void 0===c?.6:c,l=n.maxPatternLength,h=void 0===l?32:l,f=n.caseSensitive,v=void 0!==f&&f,d=n.tokenSeparator,p=void 0===d?/ +/g:d,g=n.findAllMatches,y=void 0!==g&&g,b=n.minMatchCharLength,m=void 0===b?1:b,k=n.id,S=void 0===k?null:k,x=n.keys,w=void 0===x?[]:x,M=n.shouldSort,L=void 0===M||M,O=n.getFn,_=void 0===O?i:O,A=n.sortFn,C=void 0===A?function(e,t){return e.score-t.score}:A,P=n.tokenize,I=void 0!==P&&P,j=n.matchAllTokens,F=void 0!==j&&j,T=n.includeMatches,z=void 0!==T&&T,E=n.includeScore,J=void 0!==E&&E,$=n.verbose,G=void 0!==$&&$;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:o,distance:s,threshold:u,maxPatternLength:h,isCaseSensitive:v,tokenSeparator:p,findAllMatches:y,minMatchCharLength:m,id:S,keys:w,includeMatches:z,includeScore:J,shouldSort:L,getFn:_,sortFn:C,verbose:G,tokenize:I,matchAllTokens:F},this.setCollection(t)}var t;return(t=[{key:"setCollection",value:function(e){return this.list=e,e}},{key:"search",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{limit:!1};this._log('---------\nSearch pattern: "'.concat(e,'"'));var n=this._prepareSearchers(e),r=n.tokenSearchers,o=n.fullSearcher,i=this._search(r,o),a=i.weights,s=i.results;return this._computeScore(a,s),this.options.shouldSort&&this._sort(s),t.limit&&"number"==typeof t.limit&&(s=s.slice(0,t.limit)),this._format(s)}},{key:"_prepareSearchers",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=[];if(this.options.tokenize)for(var n=e.split(this.options.tokenSeparator),r=0,i=n.length;r<i;r+=1)t.push(new o(n[r],this.options));return{tokenSearchers:t,fullSearcher:new o(e,this.options)}}},{key:"_search",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=this.list,r={},o=[];if("string"==typeof n[0]){for(var i=0,a=n.length;i<a;i+=1)this._analyze({key:"",value:n[i],record:i,index:i},{resultMap:r,results:o,tokenSearchers:e,fullSearcher:t});return{weights:null,results:o}}for(var s={},c=0,u=n.length;c<u;c+=1)for(var l=n[c],h=0,f=this.options.keys.length;h<f;h+=1){var v=this.options.keys[h];if("string"!=typeof v){if(s[v.name]={weight:1-v.weight||1},v.weight<=0||v.weight>1)throw new Error("Key weight has to be > 0 and <= 1");v=v.name}else s[v]={weight:1};this._analyze({key:v,value:this.options.getFn(l,v),record:l,index:c},{resultMap:r,results:o,tokenSearchers:e,fullSearcher:t})}return{weights:s,results:o}}},{key:"_analyze",value:function(e,t){var n=e.key,r=e.arrayIndex,o=void 0===r?-1:r,i=e.value,s=e.record,c=e.index,u=t.tokenSearchers,l=void 0===u?[]:u,h=t.fullSearcher,f=void 0===h?[]:h,v=t.resultMap,d=void 0===v?{}:v,p=t.results,g=void 0===p?[]:p;if(null!=i){var y=!1,b=-1,m=0;if("string"==typeof i){this._log("\nKey: ".concat(""===n?"-":n));var k=f.search(i);if(this._log('Full text: "'.concat(i,'", score: ').concat(k.score)),this.options.tokenize){for(var S=i.split(this.options.tokenSeparator),x=[],w=0;w<l.length;w+=1){var M=l[w];this._log('\nPattern: "'.concat(M.pattern,'"'));for(var L=!1,O=0;O<S.length;O+=1){var _=S[O],A=M.search(_),C={};A.isMatch?(C[_]=A.score,y=!0,L=!0,x.push(A.score)):(C[_]=1,this.options.matchAllTokens||x.push(1)),this._log('Token: "'.concat(_,'", score: ').concat(C[_]))}L&&(m+=1)}b=x[0];for(var P=x.length,I=1;I<P;I+=1)b+=x[I];this._log("Token score average:",b/=P)}var j=k.score;b>-1&&(j=(j+b)/2),this._log("Score average:",j);var F=!this.options.tokenize||!this.options.matchAllTokens||m>=l.length;if(this._log("\nCheck Matches: ".concat(F)),(y||k.isMatch)&&F){var T=d[c];T?T.output.push({key:n,arrayIndex:o,value:i,score:j,matchedIndices:k.matchedIndices}):(d[c]={item:s,output:[{key:n,arrayIndex:o,value:i,score:j,matchedIndices:k.matchedIndices}]},g.push(d[c]))}}else if(a(i))for(var z=0,E=i.length;z<E;z+=1)this._analyze({key:n,arrayIndex:z,value:i[z],record:s,index:c},{resultMap:d,results:g,tokenSearchers:l,fullSearcher:f})}}},{key:"_computeScore",value:function(e,t){this._log("\n\nComputing score:\n");for(var n=0,r=t.length;n<r;n+=1){for(var o=t[n].output,i=o.length,a=1,s=1,c=0;c<i;c+=1){var u=e?e[o[c].key].weight:1,l=(1===u?o[c].score:o[c].score||.001)*u;1!==u?s=Math.min(s,l):(o[c].nScore=l,a*=l)}t[n].score=1===s?a:s,this._log(t[n])}}},{key:"_sort",value:function(e){this._log("\n\nSorting...."),e.sort(this.options.sortFn)}},{key:"_format",value:function(e){var t=[];if(this.options.verbose){var n=[];this._log("\n\nOutput:\n\n",JSON.stringify(e,(function(e,t){if("object"===r(t)&&null!==t){if(-1!==n.indexOf(t))return;n.push(t)}return t}))),n=null}var o=[];this.options.includeMatches&&o.push((function(e,t){var n=e.output;t.matches=[];for(var r=0,o=n.length;r<o;r+=1){var i=n[r];if(0!==i.matchedIndices.length){var a={indices:i.matchedIndices,value:i.value};i.key&&(a.key=i.key),i.hasOwnProperty("arrayIndex")&&i.arrayIndex>-1&&(a.arrayIndex=i.arrayIndex),t.matches.push(a)}}})),this.options.includeScore&&o.push((function(e,t){t.score=e.score}));for(var i=0,a=e.length;i<a;i+=1){var s=e[i];if(this.options.id&&(s.item=this.options.getFn(s.item,this.options.id)[0]),o.length){for(var c={item:s.item},u=0,l=o.length;u<l;u+=1)o[u](s,c);t.push(c)}else t.push(s.item)}return t}},{key:"_log",value:function(){var e;this.options.verbose&&(e=console).log.apply(e,arguments)}}])&&function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(e.prototype,t),e}();e.exports=s},function(e,t,n){var r=n(3),o=n(4),i=n(7),a=function(){function e(t,n){var r=n.location,o=void 0===r?0:r,a=n.distance,s=void 0===a?100:a,c=n.threshold,u=void 0===c?.6:c,l=n.maxPatternLength,h=void 0===l?32:l,f=n.isCaseSensitive,v=void 0!==f&&f,d=n.tokenSeparator,p=void 0===d?/ +/g:d,g=n.findAllMatches,y=void 0!==g&&g,b=n.minMatchCharLength,m=void 0===b?1:b;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:o,distance:s,threshold:u,maxPatternLength:h,isCaseSensitive:v,tokenSeparator:p,findAllMatches:y,minMatchCharLength:m},this.pattern=this.options.isCaseSensitive?t:t.toLowerCase(),this.pattern.length<=h&&(this.patternAlphabet=i(this.pattern))}var t;return(t=[{key:"search",value:function(e){if(this.options.isCaseSensitive||(e=e.toLowerCase()),this.pattern===e)return{isMatch:!0,score:0,matchedIndices:[[0,e.length-1]]};var t=this.options;if(this.pattern.length>t.maxPatternLength)return r(e,this.pattern,t.tokenSeparator);var n=this.options;return o(e,this.pattern,this.patternAlphabet,{location:n.location,distance:n.distance,threshold:n.threshold,findAllMatches:n.findAllMatches,minMatchCharLength:n.minMatchCharLength})}}])&&function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(e.prototype,t),e}();e.exports=a},function(e,t){var n=/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;e.exports=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/ +/g,o=new RegExp(t.replace(n,"\\$&").replace(r,"|")),i=e.match(o),a=!!i,s=[];if(a)for(var c=0,u=i.length;c<u;c+=1){var l=i[c];s.push([e.indexOf(l),l.length-1])}return{score:a?.5:1,isMatch:a,matchedIndices:s}}},function(e,t,n){var r=n(5),o=n(6);e.exports=function(e,t,n,i){for(var a=i.location,s=i.distance,c=void 0===s?100:s,u=i.threshold,l=i.findAllMatches,h=void 0!==l&&l,f=i.minMatchCharLength,v=void 0===f?1:f,d=void 0===a?0:a,p=e.length,g=void 0===u?.6:u,y=e.indexOf(t,d),b=t.length,m=[],k=0;k<p;k+=1)m[k]=0;if(-1!==y){var S=r(t,{errors:0,currentLocation:y,expectedLocation:d,distance:c});if(g=Math.min(S,g),-1!==(y=e.lastIndexOf(t,d+b))){var x=r(t,{errors:0,currentLocation:y,expectedLocation:d,distance:c});g=Math.min(x,g)}}y=-1;for(var w=[],M=1,L=b+p,O=1<<(b<=31?b-1:30),_=0;_<b;_+=1){for(var A=0,C=L;A<C;)r(t,{errors:_,currentLocation:d+C,expectedLocation:d,distance:c})<=g?A=C:L=C,C=Math.floor((L-A)/2+A);L=C;var P=Math.max(1,d-C+1),I=h?p:Math.min(d+C,p)+b,j=Array(I+2);j[I+1]=(1<<_)-1;for(var F=I;F>=P;F-=1){var T=F-1,z=n[e.charAt(T)];if(z&&(m[T]=1),j[F]=(j[F+1]<<1|1)&z,0!==_&&(j[F]|=(w[F+1]|w[F])<<1|1|w[F+1]),j[F]&O&&(M=r(t,{errors:_,currentLocation:T,expectedLocation:d,distance:c}))<=g){if(g=M,(y=T)<=d)break;P=Math.max(1,2*d-y)}}if(r(t,{errors:_+1,currentLocation:d,expectedLocation:d,distance:c})>g)break;w=j}return{isMatch:y>=0,score:0===M?.001:M,matchedIndices:o(m,v)}}},function(e,t){e.exports=function(e,t){var n=t.errors,r=t.currentLocation,o=t.expectedLocation,i=t.distance,a=void 0===i?100:i,s=(void 0===n?0:n)/e.length,c=Math.abs((void 0===o?0:o)-(void 0===r?0:r));return a?s+c/a:c?1:s}},function(e,t){e.exports=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=[],r=-1,o=-1,i=0,a=e.length;i<a;i+=1){var s=e[i];s&&-1===r?r=i:s||-1===r||((o=i-1)-r+1>=t&&n.push([r,o]),r=-1)}return e[i-1]&&i-r>=t&&n.push([r,i-1]),n}},function(e,t){e.exports=function(e){for(var t={},n=e.length,r=0;r<n;r+=1)t[e.charAt(r)]=0;for(var o=0;o<n;o+=1)t[e.charAt(o)]|=1<<n-o-1;return t}},function(e,t,n){var r=n(0);e.exports=function(e,t){return function e(t,n,o){if(n){var i=n.indexOf("."),a=n,s=null;-1!==i&&(a=n.slice(0,i),s=n.slice(i+1));var c=t[a];if(null!=c)if(s||"string"!=typeof c&&"number"!=typeof c)if(r(c))for(var u=0,l=c.length;u<l;u+=1)e(c[u],s,o);else s&&e(c,s,o);else o.push(c.toString())}else o.push(t);return o}(e,t,[])}}])}}])}();