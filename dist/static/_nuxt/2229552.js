(window.webpackJsonp=window.webpackJsonp||[]).push([[8,6,7],{497:function(e,t,r){var content=r(503);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(20).default)("16d8a763",content,!0,{sourceMap:!1})},499:function(e,t,r){"use strict";r.r(t);var o=r(143);r(4),r(53),r(64),r(501),r(299),r(13),r(12),r(14),r(15),r(11),r(16);function n(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var d={name:"Module",props:["role","username","liveClassProxy","scrapedModule"],data:function(){return{}},computed:{iframeOrigin:function(){return new URL(this.scrapedModule.url).origin}},watch:{liveClassProxy:function(){this.updateIframe()},"$store.state.lastRecievedMessage":function(e){null!=e&&this.$refs.iframe.contentWindow.postMessage(function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({event:"message"},e),this.iframeOrigin)}},methods:{updateIframe:function(){this.$refs.iframe.contentWindow.postMessage({event:"update",origin:window.origin,role:this.role,username:this.username,liveClass:JSON.parse(JSON.stringify(this.liveClassProxy)),module:this.scrapedModule,class_id:this.$store.state.class_.id},this.iframeOrigin)}}},l=d,c=r(107),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{key:e.scrapedModule.url,staticStyle:{height:"100%",width:"100%"}},[r("iframe",{key:e.liveClassProxy.users[e.username].room,ref:"iframe",staticStyle:{height:"100%",width:"100%"},attrs:{src:e.scrapedModule.url.startsWith("data:")?null:e.scrapedModule.url,srcdoc:e.scrapedModule.url.startsWith("data:")?e.scrapedModule.url:null,allow:"camera; microphone; fullscreen; display-capture; accelerometer; autoplay; encrypted-media; geolocation; gyroscope; magnetometer; midi; serial; vr;",scrolling:"",frameborder:"0"},on:{load:e.updateIframe}})])}),[],!1,null,"45c47da4",null);t.default=component.exports},500:function(e,t,r){"use strict";r.r(t);var o=r(85),n=(r(217),r(98),r(14),r(4),r(37),r(54),r(32),{name:"Modules",props:["role","username","liveClassProxy"],data:function(){return{}},computed:{roomName:function(){var e;return(null===(e=this.liveClassProxy.users[this.username])||void 0===e?void 0:e.room)||"Station "+this.username},modulesType:function(){return this.roomName.startsWith("Station ")?"station":"chat"},scrapedModules:function(){var e=this;return this.$store.state.scrapedModules.filter((function(t){return(t.shownIn.includes(e.modulesType)||"*"==t.shownIn)&&("student"!=e.role||!t.shownIn.includes("teacher-only"))}))}},created:function(){window.addEventListener("message",this.messageHandler)},beforeDestroy:function(){window.removeEventListener("message",this.messageHandler)},mounted:function(){return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},methods:{messageHandler:function(e){switch(e.data.event){case"message":this.sendMessage(e.data.subject,e.data.body,e.data.module);break;case"update":this.setToValue(this.liveClassProxy,e.data.path,e.data.value);break;case"echo":console.log("ECHO:",e.data)}},sendMessage:function(e,body,t){var r=this;return Object(o.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,r.$axios.$get("/data/sendMessage/".concat(r.$store.state.class_.id,"?message=").concat(encodeURIComponent(JSON.stringify({from:r.username,subject:e,body:body,module:t}))));case 2:case"end":return o.stop()}}),o)})))()}}}),d=(r(502),r(107)),l=r(142),c=r.n(l),h=r(209),f=r(97),m=r(609),v=r(610),component=Object(d.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{key:e.role},[e._l(e.scrapedModules,(function(t,i){return r("v-row",{key:i,style:{display:e.scrapedModules[i-1]&&"half"==e.scrapedModules[i-1].width&&"half"==e.scrapedModules[i].width||e.scrapedModules[i-1]&&"third"==e.scrapedModules[i-1].width&&"third"==e.scrapedModules[i].width||e.scrapedModules[i-2]&&"third"==e.scrapedModules[i-2].width&&"third"==e.scrapedModules[i-1].width&&"third"==e.scrapedModules[i].width?"none":"",height:"tall"==t.height?"700px":"short"==t.height?"300px":"500px"}},[["full","half","third"].includes(e.scrapedModules[i].width)?r("v-col",[r("Module",{attrs:{username:e.username,"live-class-proxy":e.liveClassProxy,scrapedModule:e.scrapedModules[i],role:e.role}})],1):e._e(),e._v(" "),e.scrapedModules[i+1]&&e.scrapedModules[i+1].width==e.scrapedModules[i].width&&["half","third"].includes(e.scrapedModules[i].width)?r("v-col",[r("Module",{attrs:{username:e.username,"live-class-proxy":e.liveClassProxy,scrapedModule:e.scrapedModules[i+1],role:e.role}})],1):["half","third"].includes(e.scrapedModules[i].width)?r("v-col"):e._e(),e._v(" "),e.scrapedModules[i+2]&&e.scrapedModules[i+1].width==e.scrapedModules[i].width&&e.scrapedModules[i+2].width==e.scrapedModules[i].width&&["third"].includes(e.scrapedModules[i+2].width)?r("v-col",[r("Module",{attrs:{role:e.role,username:e.username,"live-class-proxy":e.liveClassProxy,scrapedModule:e.scrapedModules[i+2]}})],1):["third"].includes(e.scrapedModules[i].width)?r("v-col"):e._e()],1)})),e._v(" "),e.scrapedModules.length?e._e():r("v-card",["teacher"==e.role||"station"==e.role?r("v-card-text",[e._v("\n      Sorry, looks like you have not loaded up any "+e._s(e.modulesType)+" modules.\n      Add some in the class settings to get started.\n    ")]):e._e(),e._v(" "),"student"==e.role?r("v-card-text",[e._v("\n      Sorry, it looks like the class creators have not added any modules yet.\n    ")]):e._e()],1)],2)}),[],!1,null,"3d52d87a",null);t.default=component.exports;c()(component,{Module:r(499).default}),c()(component,{VCard:h.a,VCardText:f.c,VCol:m.a,VRow:v.a})},502:function(e,t,r){"use strict";r(497)},503:function(e,t,r){var o=r(19)(!1);o.push([e.i,".row[data-v-3d52d87a]{margin:0!important;height:100%}.col[data-v-3d52d87a],.row[data-v-3d52d87a]{padding:0}",""]),e.exports=o},521:function(e,t,r){"use strict";r.r(t);var o=r(85),n=(r(217),{name:"Student",props:["liveClassProxy"],computed:{roomName:function(){return this.liveClassProxy.users[this.$store.state.user.email].room}},data:function(){return{liveRoomProxy:{},ready:!1}},mounted:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.ready=!0;case 1:case"end":return t.stop()}}),t)})))()},methods:{}}),d=r(107),l=r(142),c=r.n(l),h=r(209),f=r(97),m=r(609),v=r(522),y=r(610),component=Object(d.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-container",[r("div",[e.ready?r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"12",sm:"10",md:"10"}},[r("v-card",[r("v-card-title",[e._v(e._s(e.$store.state.class_.name)+" – "+e._s(e.roomName))]),e._v(" "),r("Modules",{attrs:{role:"student",username:e.$store.state.user.email,"live-class-proxy":e.liveClassProxy}})],1)],1)],1):e._e()],1)])],1)}),[],!1,null,"5893dd9c",null);t.default=component.exports;c()(component,{Modules:r(500).default}),c()(component,{VCard:h.a,VCardTitle:f.d,VCol:m.a,VContainer:v.a,VRow:y.a})},522:function(e,t,r){"use strict";r(14),r(4),r(13),r(98),r(32),r(300),r(504),r(83),r(99);var o=r(1);var n,d=r(100);t.a=(n="container",o.a.extend({name:"v-".concat(n),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,t){var r=t.props,data=t.data,o=t.children;data.staticClass="".concat(n," ").concat(data.staticClass||"").trim();var d=data.attrs;if(d){data.attrs={};var l=Object.keys(d).filter((function(e){if("slot"===e)return!1;var t=d[e];return e.startsWith("data-")?(data.attrs[e]=t,!1):t||"string"==typeof t}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),e(r.tag,data,o)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(e,t){var r,o=t.props,data=t.data,n=t.children,l=data.attrs;return l&&(data.attrs={},r=Object.keys(l).filter((function(e){if("slot"===e)return!1;var t=l[e];return e.startsWith("data-")?(data.attrs[e]=t,!1):t||"string"==typeof t}))),o.id&&(data.domProps=data.domProps||{},data.domProps.id=o.id),e(o.tag,Object(d.a)(data,{staticClass:"container",class:Array({"container--fluid":o.fluid}).concat(r||[])}),n)}})}}]);