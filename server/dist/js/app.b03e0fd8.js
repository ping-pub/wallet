(function(e){function t(t){for(var r,o,i=t[0],c=t[1],l=t[2],f=0,s=[];f<i.length;f++)o=i[f],Object.prototype.hasOwnProperty.call(u,o)&&u[o]&&s.push(u[o][0]),u[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(s.length)s.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==u[i]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},u={app:0},a=[];function i(e){return c.p+"js/"+({home:"home"}[e]||e)+"."+{home:"6473b1b3"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={home:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({home:"home"}[e]||e)+"."+{home:"db1d88cf"}[e]+".css",u=c.p+r,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var l=a[i],f=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(f===r||f===u))return t()}var s=document.getElementsByTagName("style");for(i=0;i<s.length;i++){l=s[i],f=l.getAttribute("data-href");if(f===r||f===u)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||u,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],d.parentNode.removeChild(d),n(a)},d.href=u;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var r=u[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=u[e]=[t,n]}));t.push(r[2]=a);var l,f=document.createElement("script");f.charset="utf-8",f.timeout=120,c.nc&&f.setAttribute("nonce",c.nc),f.src=i(e);var s=new Error;l=function(t){f.onerror=f.onload=null,clearTimeout(d);var n=u[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,n[1](s)}u[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:f})}),12e4);f.onerror=f.onload=l,document.head.appendChild(f)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],f=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var d=f;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e623"),n("e379"),n("5dc8"),n("37e1");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-view")},u=[],a=n("2877"),i={},c=Object(a["a"])(i,o,u,!1,null,null,null),l=c.exports,f=(n("d3b7"),n("8c4f"));r["default"].use(f["a"]);var s=[{path:"/",component:function(){return n.e("home").then(n.bind(null,"ebad"))},children:[{path:"address",component:function(){return n.e("home").then(n.bind(null,"a821"))}},{path:"goverance",component:function(){return n.e("home").then(n.bind(null,"9b62"))}},{path:"",component:function(){return n.e("home").then(n.bind(null,"bb51"))}},{path:"income",component:function(){return n.e("home").then(n.bind(null,"a3b6"))}},{path:"setting",component:function(){return n.e("home").then(n.bind(null,"4ef5"))}},{path:"stake",component:function(){return n.e("home").then(n.bind(null,"8502"))}},{path:"tx",component:function(){return n.e("home").then(n.bind(null,"30de"))}}]}],d=new f["a"]({routes:s}),p=d,h=n("2f62");r["default"].use(h["a"]);var m=new h["a"].Store({state:{},mutations:{},actions:{},modules:{}}),b=n("5c96"),v=n.n(b);n("a83d"),n("f227");r["default"].use(v.a,{size:"small"}),r["default"].config.productionTip=!1,new r["default"]({router:p,store:m,render:function(e){return e(l)}}).$mount("#app")},a83d:function(e,t,n){},f227:function(e,t,n){}});
//# sourceMappingURL=app.b03e0fd8.js.map