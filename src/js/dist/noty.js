var nToastNotify=function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=4)}([function(e,t,n){"use strict";var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(r,s){function i(e){try{u(o.next(e))}catch(e){s(e)}}function a(e){try{u(o.throw(e))}catch(e){s(e)}}function u(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(i,a)}u((o=o.apply(e,t||[])).next())})},r=this&&this.__generator||function(e,t){function n(e){return function(t){return o([e,t])}}function o(n){if(r)throw new TypeError("Generator is already executing.");for(;u;)try{if(r=1,s&&(i=s[2&n[0]?"return":n[0]?"throw":"next"])&&!(i=i.call(s,n[1])).done)return i;switch(s=0,i&&(n=[0,i.value]),n[0]){case 0:case 1:i=n;break;case 4:return u.label++,{value:n[1],done:!1};case 5:u.label++,s=n[1],n=[0];continue;case 7:n=u.ops.pop(),u.trys.pop();continue;default:if(i=u.trys,!(i=i.length>0&&i[i.length-1])&&(6===n[0]||2===n[0])){u=0;continue}if(3===n[0]&&(!i||n[1]>i[0]&&n[1]<i[3])){u.label=n[1];break}if(6===n[0]&&u.label<i[1]){u.label=i[1],i=n;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(n);break}i[2]&&u.ops.pop(),u.trys.pop();continue}n=t.call(e,u)}catch(e){n=[6,e],s=0}finally{r=i=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var r,s,i,a,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a};Object.defineProperty(t,"__esModule",{value:!0}),n(1);var s=function(){function e(){this.options=null,this.fetchHeaderValue="Fetch"}return e.prototype.init=function(t){this.options=Object.assign({},e.defaults,t),this.interceptXmlRequest(),this.interceptNativeFetch(),this.handleEvents()},e.prototype.ensureLibExists=function(){return this.libPresentAlready()?void 0:this.loadLibAsync()},e.prototype.libPresentAlready=function(){return void 0!==window[this.options.libraryDetails.varName]},e.prototype.loadLibAsync=function(){return Promise.all([this.loadStyleAsync(),this.loadScriptAsync()])},e.prototype.loadScriptAsync=function(){var e=this;return new Promise(function(t,n){if(e.options.libraryDetails.scriptSrc){var o=document.createElement("script");o.setAttribute("src",e.options.libraryDetails.scriptSrc),o.onload=function(e){t()},o.onerror=function(e){n(e.message)},document.head.appendChild(o)}else t()})},e.prototype.loadStyleAsync=function(){var e=this;return new Promise(function(t,n){if(e.options.libraryDetails.scriptSrc){var o=document.createElement("link");o.setAttribute("rel","stylesheet"),o.type="text/css",o.href=e.options.libraryDetails.styleHref,o.onload=function(e){t()},o.onerror=function(e){n(e.message)},document.head.appendChild(o)}else t()})},e.prototype.handleEvents=function(){document&&document.addEventListener("DOMContentLoaded",this.domContentLoadedHandler.bind(this))},e.prototype.getResponseHeaderKey=function(){return this.options.responseHeaderKey},e.prototype.interceptNativeFetch=function(){var e=this,t=window.fetch;t&&(window.fetch=function(){var n=arguments[0];e.prepareRequestInfo(n);var o=arguments.length>1?arguments[1]:{};return e.prepareReuqestInit(o),t.apply(this,[n,o])})},e.prototype.prepareRequestInfo=function(e){e instanceof Request&&e.headers.append(this.options.requestHeaderKey,this.fetchHeaderValue)},e.prototype.prepareReuqestInit=function(e){if(e)if(e.headers)e.headers instanceof Headers?e.headers.set(this.options.requestHeaderKey,this.fetchHeaderValue):e.headers instanceof Object?e.headers[this.options.requestHeaderKey]=this.fetchHeaderValue:console.warn("NToastNotify header not set. Toast notification will not work");else{var t=new Headers;t.set(this.options.requestHeaderKey,this.fetchHeaderValue),e.headers=t}},e.prototype.interceptXmlRequest=function(){var e=this,t=XMLHttpRequest.prototype.send;XMLHttpRequest.prototype.send=function(){this.setRequestHeader(e.options.requestHeaderKey,"XMLHttpRequest"),this.addEventListener("load",e.xmlRequestOnLoadHandler.bind(e,this)),t.apply(this,arguments)}},e.prototype.xmlRequestOnLoadHandler=function(e){var t=this.xmlGetMessagesFromResponse(e);this.showToasts(t)},e.prototype.xmlGetMessagesFromResponse=function(e){var t=e.getResponseHeader(this.options.responseHeaderKey);return t?JSON.parse(t):null},e.prototype.fetchGetMessagesFromResponse=function(e){var t=e.headers.get(this.options.responseHeaderKey);return t?JSON.parse(t):null},e.prototype.domContentLoadedHandler=function(){return o(this,void 0,void 0,function(){return r(this,function(e){switch(e.label){case 0:return[4,this.ensureLibExists()];case 1:return e.sent(),this.overrideLibDefaults(),this.showToasts(this.options.messages),[2]}})})},e.prototype.showToasts=function(e){var t=this;e&&e.length&&e.forEach(function(e,n,o){t.show(e)})},e}();t.NToastNotify=s},function(e,t){"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(e){"use strict";if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var t=Object(e),n=1;n<arguments.length;n++){var o=arguments[n];if(null!=o)for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},writable:!0,configurable:!0})},,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(5);t.noty=new o.NToastNotifyNoty},function(e,t,n){"use strict";var o=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.prototype.show=function(e){e.toastOptions.text=e.message,new Noty(e.toastOptions).show()},t.prototype.overrideLibDefaults=function(){window.Noty.overrideDefaults(this.options.globalLibOptions)},t}(r.NToastNotify);t.NToastNotifyNoty=s}]);