(function(){"use strict";var e={6708:function(e,t,n){var o=n(144),r=n(1096),a=n(9203),i=n(7179),s=n(5057),u=n(3551),c=n(5234),l=n(2370),d=function(){var e=this,t=e._self._c;return t(r.Z,[t(a.Z,{attrs:{app:"",color:"primary",dark:""}},[t(l.qW,[e._v("Horário")]),t(c.Z),t(i.Z,{attrs:{text:"",rounded:""},on:{click:e.toggleDarkMode}},[t(s.Z,[e._v("mdi-theme-light-dark")])],1),e._l(e.links,(function(n){return t(i.Z,{key:n.text,attrs:{text:"",rounded:""},on:{click:function(t){return e.checkForChangesBeforeNavigation(n.route)}}},[e._v(e._s(n.text))])})),this.$store.state.authToken?t(i.Z,{attrs:{text:"",rounded:""},on:{click:e.checkForChangesBeforeLogout}},[e._v("Sair")]):e._e()],2),t(u.Z,[t("router-view",{ref:"current-component",on:{"confirm-navigation":function(t){return e.confirm(e.prentedRoute)}}})],1)],1)},f=[],h={name:"App",data:()=>({links:[{text:"Configurações",route:"/listaConfiguracoes"}],prentedRoute:null,logoutConfirmationMessage:"Você tem alterações não salvas, que serão perdidas. Tem certeza que deseja sair?",navigationConfimationMessage:"Você tem alterações não salvas, que serão perdidas. Tem certeza que deseja sair dessa tela?"}),mounted(){this.checkLocalStorage()},methods:{checkForChangesBeforeLogout(){const e="Passos"===this.$route.name&&this.$refs["current-component"],t=e&&!this.$refs["current-component"].handlePageExit();t?(this.$store.dispatch("setConfirmationDialogMessage",this.logoutConfirmationMessage),this.prentedRoute="logout"):(this.prentedRoute=null,this.logout())},checkForChangesBeforeNavigation(e){const t="Passos"===this.$route.name&&this.$refs["current-component"],n=t&&!this.$refs["current-component"].handlePageExit();n?(this.$store.dispatch("setConfirmationDialogMessage",this.navigationConfimationMessage),this.prentedRoute=e):(this.prentedRoute=null,this.navigate(e))},confirm(e){const t="Passos"===this.$route.name&&this.$refs["current-component"];if(t&&this.$refs["current-component"].beforeChangeStep(),this.prentedRoute=null,"logout"===e)return this.logout();this.navigate(e)},navigate(e){this.$router.push(e),this.prentedRoute=null},checkLocalStorage(){const e=localStorage.getItem("authToken");null!=e&&e.length>0&&(this.$store.dispatch("setAuthToken",e),this.$router.push({name:"ListaConfiguracoes"}));const t=Number(localStorage.getItem("dark"));this.$vuetify.theme.dark=null!=t&&Boolean(t)},logout(){this.$store.dispatch("clearAuthToken"),this.$router.push({name:"Autenticacao"})},toggleDarkMode(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark,localStorage.setItem("dark",Number(this.$vuetify.theme.dark))}}},m=h,g=n(3736),p=(0,g.Z)(m,d,f,!1,null,null,null),v=p.exports,b=n(8345),E=n(629);o.ZP.use(E.ZP);var k=new E.ZP.Store({state:{authToken:null,selectedSchedule:null,selectedPeriod:null,confirmationDialogMessage:null,loading:{value:!1,isReload:!1}},getters:{loading(e){return e.loading.value},loadingFromReload(e){return e.loading.isReload}},mutations:{SET_AUTH_TOKEN(e,t){e.authToken=t},CLEAR_AUTH_TOKEN(e){e.authToken=null},SET_SELECTED_SCHEDULE(e,t){e.selectedSchedule=t},SET_SELECTED_PERIOD(e,t){e.selectedPeriod=t},SET_CONFIRMATION_DIALOG_MESSAGE(e,t){e.confirmationDialogMessage=t},SET_LOADING(e,t){e.loading=t}},actions:{setAuthToken({commit:e},t){e("SET_AUTH_TOKEN",t),localStorage.setItem("authToken",t)},clearAuthToken({commit:e}){localStorage.removeItem("authToken"),e("CLEAR_AUTH_TOKEN")},setSelectedSchedule({commit:e},t){e("SET_SELECTED_SCHEDULE",t)},setSelectedPeriod({commit:e},t){e("SET_SELECTED_PERIOD",t)},setConfirmationDialogMessage({commit:e},t){e("SET_CONFIRMATION_DIALOG_MESSAGE",t)},setLoading({commit:e},t){e("SET_LOADING",{value:!0,isReload:t})},clearLoading({commit:e}){e("SET_LOADING",{value:!1,isReload:!1})}},modules:{}});o.ZP.use(b.ZP);const T=[{path:"/",name:"Autenticacao",component:()=>Promise.all([n.e(706),n.e(670)]).then(n.bind(n,5935))},{path:"/listaConfiguracoes",name:"ListaConfiguracoes",component:()=>Promise.all([n.e(531),n.e(706),n.e(452),n.e(142)]).then(n.bind(n,777))},{path:"/configuracoes/:id",name:"Configuracoes",props:!0,component:()=>Promise.all([n.e(706),n.e(47),n.e(285)]).then(n.bind(n,8376))},{path:"/configuracoes",name:"Configuracoes",component:()=>Promise.all([n.e(706),n.e(47),n.e(285)]).then(n.bind(n,8376))},{path:"/passos",name:"Passos",component:()=>n.e(776).then(n.bind(n,1776)),props:!0},{path:"/quantidades/:id",name:"Quantidades",props:!0,component:()=>Promise.all([n.e(531),n.e(706),n.e(452),n.e(47),n.e(724),n.e(178)]).then(n.bind(n,4724))}],S=new b.ZP({mode:"history",base:"/scheduler-web/",routes:T});S.beforeEach(((e,t,n)=>{"Autenticacao"!==e.name&&null==k.state.authToken&&n({name:"Autenticacao"}),n()}));var C=S,P=n(2250);o.ZP.use(P.Z);var _=new P.Z({}),y=n(9669),A=n.n(y);const O=A().create({baseURL:"http://129.148.47.74:8080/"});O.interceptors.request.use((e=>{const t=k.state.authToken;return t&&(e.headers["Authorization"]=`Bearer ${t}`),e}),(e=>Promise.reject(e))),O.interceptors.response.use((function(e){return e.data&&e.data.message&&o.ZP.$toast.success(e.data.message),e}),(function(e){return e.response&&e.response.data&&e.response.data.message?o.ZP.$toast.error(e.response.data.message):e.message?o.ZP.$toast.error(e.message):o.ZP.$toast.error("Ocorreu um erro inesperado"),Promise.reject(e)}));var $=O,L=n(1151);const Z={position:"bottom-left"};o.ZP.config.productionTip=!1,o.ZP.prototype.$axios=$,o.ZP.use(L.ZP,Z),new o.ZP({router:C,store:k,vuetify:_,render:e=>e(v)}).$mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,a){if(!o){var i=1/0;for(l=0;l<e.length;l++){o=e[l][0],r=e[l][1],a=e[l][2];for(var s=!0,u=0;u<o.length;u++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[u])}))?o.splice(u--,1):(s=!1,a<i&&(i=a));if(s){e.splice(l--,1);var c=r();void 0!==c&&(t=c)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[o,r,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{47:"e6e68eea",142:"8c9ed8e4",178:"aa63423f",182:"cf2a08f2",285:"0cc858e0",349:"750034a3",376:"17079ca6",434:"f6e5393b",452:"0b6a0b27",531:"1c4ee50b",533:"d37563e7",564:"ae9b35d9",567:"2cf9d8d7",656:"b2d206ed",669:"1a3f8764",670:"1aeeed08",706:"ef05e67b",717:"b3bd995a",724:"21e2cb91",776:"67f209e2",793:"5b19db0f",797:"577a9deb",802:"3bfcf9eb",827:"1e37706f",888:"b800ef45",937:"a174bbe6"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{142:"c823efba",178:"2a67d17b",182:"43cabdd9",285:"a47874bf",376:"9f3333ea",434:"f3613c60",531:"046a46dd",533:"34c3e6d2",564:"e6b26b64",567:"34c3e6d2",656:"f9123a71",669:"6e42528d",670:"28d3b627",706:"e9374709",717:"34c3e6d2",776:"0260905c",793:"d4cf2eac",797:"43cabdd9",802:"c64e59aa",827:"a3172c8e",888:"c30d262d",937:"08808948"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="horario:";n.l=function(o,r,a,i){if(e[o])e[o].push(r);else{var s,u;if(void 0!==a)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+a){s=d;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+a),s.src=o),e[o]=[r];var f=function(t,n){s.onerror=s.onload=null,clearTimeout(h);var r=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(n)})),t)return t(n)},h=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/scheduler-web/"}(),function(){var e=function(e,t,n,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var a=function(a){if(r.onerror=r.onload=null,"load"===a.type)n();else{var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=s,r.parentNode.removeChild(r),o(u)}};return r.onerror=r.onload=a,r.href=t,document.head.appendChild(r),r},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===t))return r}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){r=i[o],a=r.getAttribute("data-href");if(a===e||a===t)return r}},o=function(o){return new Promise((function(r,a){var i=n.miniCssF(o),s=n.p+i;if(t(i,s))return r();e(o,s,r,a)}))},r={143:0};n.f.miniCss=function(e,t){var n={142:1,178:1,182:1,285:1,376:1,434:1,531:1,533:1,564:1,567:1,656:1,669:1,670:1,706:1,717:1,776:1,793:1,797:1,802:1,827:1,888:1,937:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else if(827!=t){var a=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=a);var i=n.p+n.u(t),s=new Error,u=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,r[1](s)}};n.l(i,u,"chunk-"+t,t)}else e[t]=0},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,a,i=o[0],s=o[1],u=o[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(u)var l=u(n)}for(t&&t(o);c<i.length;c++)a=i[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(l)},o=self["webpackChunkhorario"]=self["webpackChunkhorario"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(6708)}));o=n.O(o)})();
//# sourceMappingURL=app.22714bb8.js.map