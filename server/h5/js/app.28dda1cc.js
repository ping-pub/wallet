(function(e){function t(t){for(var r,s,o=t[0],u=t[1],c=t[2],l=0,h=[];l<o.length;l++)s=o[l],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&h.push(a[s][0]),a[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(t);while(h.length)h.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,s=1;s<n.length;s++){var u=n[s];0!==a[u]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},i=[];function s(e){return o.p+"js/"+({home:"home",page:"page"}[e]||e)+"."+{"chunk-2d0b307c":"f11e5269",home:"c70010e5",page:"78722c93"}[e]+".js"}function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var i,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=s(e);var c=new Error;i=function(t){u.onerror=u.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",c.name="ChunkLoadError",c.type=r,c.request=i,n[1](c)}a[e]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:u})}),12e4);u.onerror=u.onload=i,document.head.appendChild(u)}return Promise.all(t)},o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var p=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("28ab"),a=n.n(r);a.a},"28ab":function(e,t,n){var r=n("7735");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=n("85cb").default;a("1aaae430",r,!0,{sourceMap:!1,shadowMode:!1})},3089:function(e,t){e.exports=vant},"56d7":function(e,t,n){"use strict";n.r(t);n("d9a3"),n("c9db"),n("de3e"),n("618d");var r=n("8bbf"),a=n.n(r),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("keep-alive",[n("router-view")],1)},s=[],o=(n("034f"),n("5511")),u={},c=Object(o["a"])(u,i,s,!1,null,null,null),l=c.exports,p=(n("3a20"),n("9bfb"));a.a.use(p["a"]);var h=[{path:"/",component:function(){return n.e("home").then(n.bind(null,"684d"))},children:[{path:"",name:"WalletPortfolio",component:function(){return n.e("home").then(n.bind(null,"9d0f"))}},{path:"staking",name:"Staking",component:function(){return n.e("home").then(n.bind(null,"c66d"))}},{path:"governance-list",name:"Governances",component:function(){return n.e("home").then(n.bind(null,"e1e3"))}},{path:"setting",name:"Setting",component:function(){return n.e("home").then(n.bind(null,"cb41"))}}]},{path:"/:component",component:function(){return n.e("chunk-2d0b307c").then(n.bind(null,"2745"))}}],f=new p["a"]({routes:h}),m=f,d=n("08c1"),v=(n("86dd"),n("09ee"),n("79dd"),n("63ff"),n("57f0")),b=n("123e"),w=n.n(b),g=function(){var e=Object(v["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,w.a.setItem("walletList",t.walletList);case 2:return e.next=4,w.a.setItem("chainList",t.chainList);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x={cosmos1jxv0u20scum4trha72c7ltfgfqef6nscj25050:{chain:"Cosmos",name:"DEMO",address:"cosmos1jxv0u20scum4trha72c7ltfgfqef6nscj25050"},iaa1v6c3sa76s3grss3xu64tvn9nd556jlcw6azc85:{chain:"Iris",name:"多币地址",address:"iaa1v6c3sa76s3grss3xu64tvn9nd556jlcw6azc85"}},y={Cosmos:{name:"Cosmos",logo:"/static/chains/cosmoshub.svg",version:"0.32.7",lcd:"https://lcd.nylira.net",unit:"ATOM",wallets:["cosmos1jxv0u20scum4trha72c7ltfgfqef6nscj25050"]},Kava:{name:"Kava",logo:"/static/chains/kava.svg",version:"0.32.7",lcd:"https://kava-relay.01node.com",unit:"KAVA",wallets:[]},Iris:{name:"Iris",logo:"/static/chains/irishub.svg",version:"0.32.1",lcd:"https://rpc.irisnet.org",unit:"IRIS",wallets:["iaa1v6c3sa76s3grss3xu64tvn9nd556jlcw6azc85"]}},_={state:{currentWallet:{},currentChain:{},walletList:x,chainList:y},mutations:{initWallet:function(e){return Object(v["a"])(regeneratorRuntime.mark((function t(){var n,r,a,i,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,w.a.getItem("walletList");case 2:if(t.t0=t.sent,t.t0){t.next=5;break}t.t0=x;case 5:return e.walletList=t.t0,t.next=8,w.a.getItem("chainList");case 8:if(t.t1=t.sent,t.t1){t.next=11;break}t.t1=y;case 11:e.chainList=t.t1,n=e.walletList,r=Object.keys(n)[0],a=n[r],i=window.sessionStorage.getItem("current"),i&&(i=JSON.parse(i),a=i.currentWallet),s=a.chain,e.currentWallet=a,e.currentChain=e.chainList[s]||i.currentChain;case 20:case"end":return t.stop()}}),t)})))()},walletListSave:function(e,t){e.walletList[t.address]=t;var n=e.chainList[t.chain].wallets,r=n.find((function(e){return t.address===e}));r||n.push(t.address),e.chainList[t.chain].wallets=n,g(e)},walletListDel:function(e,t){if(t.address!==e.currentWallet.address){delete e.walletList[t.address];var n=e.chainList[t.chain].wallets;e.chainList[t.chain].wallets=n.filter((function(e){return e!==t.address})),g(e)}},currentWalletSwitch:function(e,t){e.currentWallet=t,e.currentChain=e.chainList[t.chain],window.sessionStorage.setItem("current",JSON.stringify({currentWallet:e.currentWallet,currentChain:e.currentChain}))},currentChainSwitch:function(e,t){e.currentChain=t}},actions:{}},N=function(){var e=Object(v["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,w.a.setItem("setting",t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k={state:{currentCurrency:"$",currentLanaguage:"cn"},mutations:{initSetting:function(e){return Object(v["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,w.a.getItem("setting");case 2:n=t.sent,n&&(e.currentCurrency=n.currentCurrency,e.currentLanaguage=n.currentLanaguage);case 4:case"end":return t.stop()}}),t)})))()},currentCurrencySwitch:function(e,t){e.currentCurrency=t,N(e)},currentLanaguageSwitch:function(e,t){e.currentLanaguage=t,N(e)}}};a.a.use(d["a"]);var C=new d["a"].Store({state:{},mutations:{},actions:{},modules:{wallet:_,setting:k}}),S=(n("4178"),n("fc88"),n("e350"),n("3c4a"),n("ef8e"),n("252a"),n("82ae")),L=n.n(S),j=L.a.create({baseURL:"/api"});j.interceptors.request.use((function(e){if(!e.headers.serverCustom){var t=C.state.wallet.currentChain.lcd;e.headers.server=t}return e}),(function(e){return Promise.reject(e)}));var O=j,P=function(){var e=Object(v["a"])(regeneratorRuntime.mark((function e(t){var n,r,a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,O.get("/data/price",{params:{fsym:t||"ATOM",tsyms:"USD,CNY",api_key:"3993b9faad427d8df68c267d3e8664cd8923e6c590a4888023a14bd581ff1859"},headers:{server:"https://min-api.cryptocompare.com",serverCustom:!0}});case 2:return n=e.sent,r=n.data,a=r.USD,i=r.CNY,e.abrupt("return",{USD:a,CNY:i});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=P,R=function(){var e=Object(v["a"])(regeneratorRuntime.mark((function e(t){var n,r,a,i,s,o,u,c,l,p,h,f,m,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,O.get("/bank/accounts/".concat(t));case 2:n=e.sent,r=n.data.value.coins,a=1e18,i=0,s=C.state.setting.currentCurrency,o=!0,u=!1,c=void 0,e.prev=10,l=r[Symbol.iterator]();case 12:if(o=(p=l.next()).done){e.next=33;break}if(h=p.value,f=h.amount/a,h.amountNum=f.toFixed(2),h.unit=h.denom.toUpperCase(),"IRIS-ATTO"!==h.unit){e.next=30;break}return h.unit="IRIS",e.next=21,F(h.unit);case 21:m=e.sent,h.priceUSD=m.USD,h.priceCNY=m.CNY,h.amountPriceUSD=parseFloat((f*m.USD).toFixed(2)),h.amountPriceCNY=parseFloat((f*m.CNY).toFixed(2)),d="$"===s,h.price=s+(d?h.priceUSD:h.priceCNY),h.amountPrice=s+(d?h.amountPriceUSD:h.amountPriceCNY),i+=d?h.amountPriceUSD:h.amountPriceCNY;case 30:o=!0,e.next=12;break;case 33:e.next=39;break;case 35:e.prev=35,e.t0=e["catch"](10),u=!0,c=e.t0;case 39:e.prev=39,e.prev=40,o||null==l.return||l.return();case 42:if(e.prev=42,!u){e.next=45;break}throw c;case 45:return e.finish(42);case 46:return e.finish(39);case 47:return r.reverse(),i=s+i,e.abrupt("return",{priceTotal:i,coins:r});case 50:case"end":return e.stop()}}),e,null,[[10,35,39,47],[40,,42,46]])})));return function(t){return e.apply(this,arguments)}}(),$=R,U=function(){var e=Object(v["a"])(regeneratorRuntime.mark((function e(t){var n,r,a,i,s,o,u,c,l,p,h,f,m,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,O.get("/auth/accounts/".concat(t));case 2:n=e.sent,r=n.data.result.value.coins,a=1e6,i=0,s=C.state.setting.currentCurrency,o=!0,u=!1,c=void 0,e.prev=10,l=r[Symbol.iterator]();case 12:if(o=(p=l.next()).done){e.next=31;break}return h=p.value,h.unit=h.denom.substr(1).toUpperCase(),f=h.amount/a,h.amountNum=f.toFixed(2),e.next=19,F(h.unit);case 19:m=e.sent,h.priceUSD=m.USD,h.priceCNY=m.CNY,h.amountPriceUSD=parseFloat((f*m.USD).toFixed(2)),h.amountPriceCNY=parseFloat((f*m.CNY).toFixed(2)),d="$"===s,h.price=s+(d?h.priceUSD:h.priceCNY),h.amountPrice=s+(d?h.amountPriceUSD:h.amountPriceCNY),i+=d?h.amountPriceUSD:h.amountPriceCNY;case 28:o=!0,e.next=12;break;case 31:e.next=37;break;case 33:e.prev=33,e.t0=e["catch"](10),u=!0,c=e.t0;case 37:e.prev=37,e.prev=38,o||null==l.return||l.return();case 40:if(e.prev=40,!u){e.next=43;break}throw c;case 43:return e.finish(40);case 44:return e.finish(37);case 45:return i=s+i,e.abrupt("return",{coins:r,priceTotal:i});case 47:case"end":return e.stop()}}),e,null,[[10,33,37,45],[38,,40,44]])})));return function(t){return e.apply(this,arguments)}}(),D=U,I={"0.32.1":$,"0.32.7":D},W=(n("f4a0"),function(){var e=Object(v["a"])(regeneratorRuntime.mark((function e(){var t,n,r,a,i,s,o,u,c,l,p,h,f,m,d,v,b,w,g;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,O.get("/gov/proposals");case 2:for(t=e.sent,n=t.data,r=!0,a=!1,i=void 0,e.prev=7,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0)u=o.value,c=u.value&&u.value.BasicProposal||{},l=c.title,p=c.tally_result,h=c.proposal_status,f=c.description,m=c.proposal_id,u.title=l,u.description=f&&f.substr(0,80)+"...",d=p.yes,v=p.no,b=p.abstain,w=p.no_with_veto,g=Number(d)+Number(v)+Number(b)+Number(w),u.yes=(Number(d)/g*100).toFixed(2)+"%",u.no=(Number(v)/g*100).toFixed(2)+"%",u.abstain=(Number(b)/g*100).toFixed(2)+"%",u.no_with_veto=(Number(w)/g*100).toFixed(2)+"%",u.rate={yes:u.yes,no:u.no,abstain:u.abstain,no_with_veto:u.no_with_veto},u.proposal_status=h,u.id=m;e.next=15;break;case 11:e.prev=11,e.t0=e["catch"](7),a=!0,i=e.t0;case 15:e.prev=15,e.prev=16,r||null==s.return||s.return();case 18:if(e.prev=18,!a){e.next=21;break}throw i;case 21:return e.finish(18);case 22:return e.finish(15);case 23:return e.abrupt("return",n);case 24:case"end":return e.stop()}}),e,null,[[7,11,15,23],[16,,18,22]])})));return function(){return e.apply(this,arguments)}}()),Y=W,T=function(){var e=Object(v["a"])(regeneratorRuntime.mark((function e(){var t,n,r,a,i,s,o,u,c,l,p,h,f,m,d,v,b;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,O.get("/gov/proposals");case 2:for(t=e.sent,n=t.data.result,r=!0,a=!1,i=void 0,e.prev=7,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0)u=o.value,c=u.content&&u.content.value||{},l=c.title,p=c.description,u.title=l,u.description=p&&p.substr(0,80)+"...",h=u.final_tally_result,f=h.yes,m=h.no,d=h.abstain,v=h.no_with_veto,b=Number(f)+Number(m)+Number(d)+Number(v),u.yes=(Number(f)/b*100).toFixed(2)+"%",u.no=(Number(m)/b*100).toFixed(2)+"%",u.abstain=(Number(d)/b*100).toFixed(2)+"%",u.no_with_veto=(Number(v)/b*100).toFixed(2)+"%",u.rate={yes:u.yes,no:u.no,abstain:u.abstain,no_with_veto:u.no_with_veto};e.next=15;break;case 11:e.prev=11,e.t0=e["catch"](7),a=!0,i=e.t0;case 15:e.prev=15,e.prev=16,r||null==s.return||s.return();case 18:if(e.prev=18,!a){e.next=21;break}throw i;case 21:return e.finish(18);case 22:return e.finish(15);case 23:return e.abrupt("return",n);case 24:case"end":return e.stop()}}),e,null,[[7,11,15,23],[16,,18,22]])})));return function(){return e.apply(this,arguments)}}(),M=T,A={"0.32.1":Y,"0.32.7":M},E=function(){var e=Object(v["a"])(regeneratorRuntime.mark((function e(t){var n,r,a,i,s,o,u,c,l,p,h,f,m;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,O.get("/gov/proposals/".concat(t));case 2:return n=e.sent,r=n.data,a=r.value&&r.value.BasicProposal||{},i=a.title,s=a.tally_result,o=a.proposal_status,u=a.description,c=a.proposal_id,r.title=i,r.description=u&&u.substr(0,80)+"...",l=s.yes,p=s.no,h=s.abstain,f=s.no_with_veto,m=Number(l)+Number(p)+Number(h)+Number(f),r.yes=(Number(l)/m*100).toFixed(2)+"%",r.no=(Number(p)/m*100).toFixed(2)+"%",r.abstain=(Number(h)/m*100).toFixed(2)+"%",r.no_with_veto=(Number(f)/m*100).toFixed(2)+"%",r.rate={yes:r.yes,no:r.no,abstain:r.abstain,no_with_veto:r.no_with_veto},r.proposal_status=o,r.id=c,e.abrupt("return",r);case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=E,J=function(){var e=Object(v["a"])(regeneratorRuntime.mark((function e(t){var n,r,a,i,s,o,u,c,l,p,h;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,O.get("/gov/proposals/".concat(t));case 2:return n=e.sent,r=n.data.result,a=r.content&&r.content.value||{},i=a.title,s=a.description,r.title=i,r.description=s&&s.substr(0,80)+"...",o=r.final_tally_result,u=o.yes,c=o.no,l=o.abstain,p=o.no_with_veto,h=Number(u)+Number(c)+Number(l)+Number(p),r.yes=(Number(u)/h*100).toFixed(2)+"%",r.no=(Number(c)/h*100).toFixed(2)+"%",r.abstain=(Number(l)/h*100).toFixed(2)+"%",r.no_with_veto=(Number(p)/h*100).toFixed(2)+"%",r.rate={yes:r.yes,no:r.no,abstain:r.abstain,no_with_veto:r.no_with_veto},e.abrupt("return",r);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=J,K={"0.32.1":z,"0.32.7":q},B=function(e){var t=C.state.wallet.currentChain.version;console.log(t);var n=null;switch(e){case"authAccounts":n=I;break;case"govProposals":n=A;break;case"govProposalsId":n=K;break}return n&&t?n[t]:function(){}},V=n("3089"),G=n.n(V),H=n("38cc"),Q=n.n(H),X=(n("e76c"),function(){var e=this,t=this,n=t.$createElement,r=t._self._c||n;return r("van-sticky",[r("van-nav-bar",{attrs:{title:t.title||t.$route.name}},[r("van-icon",{attrs:{slot:"left",name:"arrow-left",size:"20",color:"#333"},on:{click:function(){e.$router.back()}},slot:"left"}),r("div",{attrs:{slot:"right"},slot:"right"},[t._t("right")],2)],1)],1)}),Z=[],ee={props:{title:{default:""}}},te=ee,ne=Object(o["a"])(te,X,Z,!1,null,null,null),re=ne.exports,ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("van-popup",{style:{height:"80%",width:"100%"},attrs:{closeable:!0,position:"bottom"},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},e._l(e.chainListWallets,(function(t,r){return n("van-cell-group",{key:r,attrs:{title:t.name}},e._l(t.wallets,(function(t,r){return n("van-cell",{key:r,attrs:{title:e.walletList[t].name,label:t,center:""},on:{click:function(n){return e.switchWallet(e.walletList[t])}}},[e.currentWallet.address===t?n("van-icon",{staticStyle:{"line-height":"inherit"},attrs:{slot:"right-icon",name:"success",size:"20px",color:"#333"},slot:"right-icon"}):e._e()],1)})),1)})),1)},ie=[],se=n("ec97"),oe={mixins:[se["a"]],data:function(){return{show:!1}},methods:{switch:function(){this.show=!this.show},switchWallet:function(e){this.$store.commit("currentWalletSwitch",e),this.switch()}}},ue=oe,ce=Object(o["a"])(ue,ae,ie,!1,null,null,null),le=ce.exports;a.a.component("base-topnav",re),a.a.component("wallet-switch",le);var pe=n("b21d");a.a.use(pe["a"]);var he={en:{},cn:{}},fe="cn",me=new pe["a"]({locale:fe,messages:he});w.a.getItem("setting").then((function(e){e.currentLanaguage&&(me.locale=e.currentLanaguage)})),a.a.prototype.$lang=me;var de=me;a.a.use(G.a),V["Locale"].use("zh-CN",Q.a),a.a.config.productionTip=!1,a.a.prototype.$Toast=V["Toast"],a.a.prototype.$NotifyOk=function(e){Object(V["Notify"])({type:"primary",message:e})},a.a.prototype.$api=B,C.commit("initSetting"),C.commit("initWallet"),new a.a({i18n:de,router:m,store:C,render:function(e){return e(l)}}).$mount("#app")},7735:function(e,t,n){var r=n("abd8");t=r(!1),t.push([e.i,"body,html{background:#f8f8f8;font-family:-apple-system,Helvetica,sans-serif}p{margin:0}.fc{color:#333}.flex-1{-webkit-box-flex:1;-ms-flex:1;flex:1}.m-20{margin:20px}.mb-10{margin-bottom:10px}",""]),e.exports=t},"8bbf":function(e,t){e.exports=Vue},ec97:function(e,t,n){"use strict";t["a"]={computed:{currentChain:function(){return this.$store.state.wallet.currentChain},currentWallet:function(){return this.$store.state.wallet.currentWallet},currentCurrency:function(){return this.$store.state.setting.currentCurrency},currentLanaguage:function(){return this.$store.state.setting.currentLanaguage},chainList:function(){return this.$store.state.wallet.chainList},walletList:function(){return this.$store.state.wallet.walletList},chainListWallets:function(){var e=JSON.parse(JSON.stringify(this.chainList)),t=[];for(var n in e){var r=e[n];r.wallets&&r.wallets.length>0&&t.push(r)}return t}},filters:{shortAddress:function(e){return e&&e.substr(0,12)+"..."+e.substr(-12,12)||e}},methods:{go:function(e){this.$router.push(e)}}}}});