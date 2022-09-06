/*! For license information please see forum.js.LICENSE.txt */
(()=>{var t={648:(t,r,e)=>{var n=e(288).default;function o(){"use strict";t.exports=o=function(){return r},t.exports.__esModule=!0,t.exports.default=t.exports;var r={},e=Object.prototype,i=e.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},s=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{l({},"")}catch(t){l=function(t,r,e){return t[r]=e}}function f(t,r,e,n){var o=r&&r.prototype instanceof d?r:d,i=Object.create(o.prototype),a=new O(n||[]);return i._invoke=function(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var s=_(a,e);if(s){if(s===p)continue;return s}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var u=h(t,r,e);if("normal"===u.type){if(n=e.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n="completed",e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function h(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=f;var p={};function d(){}function m(){}function v(){}var y={};l(y,s,(function(){return this}));var g=Object.getPrototypeOf,x=g&&g(g(P([])));x&&x!==e&&i.call(x,s)&&(y=x);var w=v.prototype=d.prototype=Object.create(y);function b(t){["next","throw","return"].forEach((function(r){l(t,r,(function(t){return this._invoke(r,t)}))}))}function L(t,r){function e(o,a,s,u){var c=h(t[o],t,a);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==n(f)&&i.call(f,"__await")?r.resolve(f.__await).then((function(t){e("next",t,s,u)}),(function(t){e("throw",t,s,u)})):r.resolve(f).then((function(t){l.value=t,s(l)}),(function(t){return e("throw",t,s,u)}))}u(c.arg)}var o;this._invoke=function(t,n){function i(){return new r((function(r,o){e(t,n,r,o)}))}return o=o?o.then(i,i):i()}}function _(t,r){var e=t.iterator[r.method];if(void 0===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=void 0,_(t,r),"throw"===r.method))return p;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var n=h(e,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,p;var o=n.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,p):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function E(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function S(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function P(t){if(t){var r=t[s];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,n=function r(){for(;++e<t.length;)if(i.call(t,e))return r.value=t[e],r.done=!1,r;return r.value=void 0,r.done=!0,r};return n.next=n}}return{next:j}}function j(){return{value:void 0,done:!0}}return m.prototype=v,l(w,"constructor",v),l(v,"constructor",m),m.displayName=l(v,c,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===m||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,l(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},r.awrap=function(t){return{__await:t}},b(L.prototype),l(L.prototype,u,(function(){return this})),r.AsyncIterator=L,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new L(f(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(w),l(w,c,"Generator"),l(w,s,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},r.values=P,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var r in this)"t"===r.charAt(0)&&i.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function e(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],a=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var s=i.call(o,"catchLoc"),u=i.call(o,"finallyLoc");if(s&&u){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=r,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),p},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),S(e),p}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;S(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:P(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),p}},r}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},288:t=>{function r(e){return t.exports=r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,r(e)}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports},357:(t,r,e)=>{var n=e(648)();t.exports=n;try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}},r={};function e(n){var o=r[n];if(void 0!==o)return o.exports;var i=r[n]={exports:{}};return t[n](i,i.exports,e),i.exports}e.n=t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},e.d=(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},e.o=(t,r)=>Object.prototype.hasOwnProperty.call(t,r),e.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};(()=>{"use strict";e.r(n);const t=flarum.core.compat["forum/app"];var r=e.n(t);const o=flarum.core.compat["forum/components/Search"];var i=e.n(o);const a=flarum.core.compat["common/extend"];function s(t,r,e,n,o,i,a){try{var s=t[i](a),u=s.value}catch(t){return void e(t)}s.done?r(u):Promise.resolve(u).then(n,o)}function u(t){return function(){var r=this,e=arguments;return new Promise((function(n,o){var i=t.apply(r,e);function a(t){s(i,n,o,a,u,"next",t)}function u(t){s(i,n,o,a,u,"throw",t)}a(void 0)}))}}var c=e(357),l=e.n(c);const f=flarum.core.compat["common/helpers/highlight"];var h=e.n(f);const p=flarum.core.compat["common/components/LinkButton"];var d=e.n(p);const v=flarum.core.compat["common/components/Link"];var y=e.n(v),g=function(){function t(){this.results=new Map,this.type="discussions"}var e=t.prototype;return e.search=function(){var t=u(l().mark((function t(e){var n,o,i,a;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=e.toLowerCase(),this.results.set(e,[]),n={filter:{q:e},page:{limit:3},include:"mostRelevantPost"},o=r().forum.attribute("apiUrl")+"/blomstra/search/"+this.type,t.next=6,r().request({params:n,url:o,method:"GET"});case 6:i=t.sent,a=r().store.pushPayload(i),this.results.set(e,a);case 9:case"end":return t.stop()}}),t,this)})));return function(r){return t.apply(this,arguments)}}(),e.view=function(t){var e=this;t=t.toLowerCase();var n=(this.results.get(t)||[]).map((function(n){var o=n.mostRelevantPost();return m("li",{className:"DiscussionSearchResult","data-index":""+e.type+n.id(),key:""+e.type+n.id()},m(y(),{href:r().route.discussion(n,o&&o.number())},m("div",{className:"DiscussionSearchResult-title"},h()(n.title(),t)),!!o&&m("div",{className:"DiscussionSearchResult-excerpt"},h()(o.contentPlain(),t,100))))}));return m("[",null,m("li",{className:"Dropdown-header"},r().translator.trans("core.forum.search.discussions_heading")),m("li",null,m(d(),{icon:"fas fa-search",href:r().route("index",{q:t})},r().translator.trans("core.forum.search.all_discussions_button",{query:t}))),n)},t}();function x(){return x=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t},x.apply(this,arguments)}const w=flarum.core.compat["forum/states/DiscussionListState"];var b=e.n(w);r().initializers.add("blomstra-search",(function(){(0,a.extend)(i().prototype,"sourceItems",(function(t){t.remove("discussions"),t.add("discussions",new g)})),(0,a.override)(b().prototype,"loadPage",function(){var t=u(l().mark((function t(e,n){var o,i,a,s,u;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0===n&&(n=1),!r().data.apiDocument&&null!=(o=this.requestParams())&&null!=(i=o.filter)&&i.q){t.next=4;break}return t.abrupt("return",e.call(this,n));case 4:return(a=this.requestParams()).page=x({offset:this.pageSize*(n-1)},a.page),Array.isArray(a.include)&&(a.include=a.include.join(",")),s=r().forum.attribute("apiUrl")+"/blomstra/search/"+this.type,t.next=10,r().request({params:a,url:s,method:"GET"});case 10:return u=t.sent,t.abrupt("return",r().store.pushPayload(u));case 12:case"end":return t.stop()}}),t,this)})));return function(r,e,n){return t.apply(this,arguments)}}())}))})(),module.exports=n})();
//# sourceMappingURL=forum.js.map