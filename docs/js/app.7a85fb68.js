(function(t){function e(e){for(var i,s,r=e[0],d=e[1],c=e[2],u=0,p=[];u<r.length;u++)s=r[u],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(i in d)Object.prototype.hasOwnProperty.call(d,i)&&(t[i]=d[i]);l&&l(e);while(p.length)p.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],i=!0,r=1;r<a.length;r++){var d=a[r];0!==o[d]&&(i=!1)}i&&(n.splice(e--,1),t=s(s.s=a[0]))}return t}var i={},o={app:0},n=[];function s(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=i,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(a,i,function(e){return t[e]}.bind(null,i));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/serve-vue-app/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],d=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var l=d;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[a("v-toolbar-title",[t._v("TownSq")])],1),a("v-content",{staticClass:"mx-2"},[a("v-row",{staticClass:"justify-center"},[a("v-col",{attrs:{cols:"12",xl:"6",lg:"8",md:"10",sm:"12",xs:"12"}},[t.dataReady?a("v-data-table",{staticClass:"elevation-1",attrs:{loading:!t.dataReady,"loading-text":"Nothing here :(",headers:t.headers,"items-per-page":10,items:t.posts},scopedSlots:t._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:""}},[a("v-toolbar-title",[t._v("Posts")]),a("v-spacer"),a("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",[t._v("Post #"+t._s(t.currentPostId))])]),a("v-divider",{staticClass:"my-2"}),a("v-card-text",[a("v-container",{staticClass:"body-1 text--secondary"},[a("v-row",[a("v-col",[a("font-awesome-icon",{staticClass:"title text--primary",attrs:{icon:"user"}}),t._v(" "+t._s(t.editedItem.name)+" ")],1),a("v-col",[a("font-awesome-icon",{staticClass:"title text--primary",attrs:{icon:"at"}}),t._v(" "+t._s(t.editedItem.username)+" ")],1)],1),a("v-row",[a("v-col",[a("font-awesome-icon",{staticClass:"title text--primary",attrs:{icon:"envelope"}}),t._v(" "+t._s(t.editedItem.email)+" ")],1),a("v-col",[a("font-awesome-icon",{staticClass:"title text--primary",attrs:{icon:"phone"}}),t._v(" "+t._s(t.editedItem.phone)+" ")],1)],1),a("v-row",[a("v-col",[a("font-awesome-icon",{staticClass:"title text--primary",attrs:{icon:"map-marked"}}),t._v(" "+t._s(t.editedItem.address.suite)+" "+t._s(t.editedItem.address.street)+", "+t._s(t.editedItem.address.city)+" "+t._s(t.editedItem.address.zipcode)+" ")],1)],1),a("v-divider",{staticClass:"my-8"}),a("v-row",[a("v-col",[a("v-text-field",{attrs:{label:"Title",outlined:""},model:{value:t.editedItem.title,callback:function(e){t.$set(t.editedItem,"title",e)},expression:"editedItem.title"}})],1)],1),a("v-row",[a("v-col",[a("v-textarea",{attrs:{label:"Content",outlined:""},model:{value:t.editedItem.body,callback:function(e){t.$set(t.editedItem,"body",e)},expression:"editedItem.body"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{text:""},on:{click:t.closeEditDialog}},[t._v("Cancel")]),a("v-btn",{attrs:{text:""},on:{click:t.saveEdit}},[t._v("Save")])],1)],1)],1)],1)]},proxy:!0},{key:"item.userId",fn:function(e){var a=e.item;return[t._v(" "+t._s(t.getUserData(a.userId,"username"))+" ")]}},{key:"item.edit",fn:function(e){var i=e.item;return[a("font-awesome-icon",{attrs:{icon:"edit"},on:{click:function(e){return e.stopPropagation(),t.openEditDialog(i)}}})]}}],null,!1,501660502)}):t._e()],1)],1),a("v-snackbar",{model:{value:t.notification,callback:function(e){t.notification=e},expression:"notification"}},[t._v(t._s(t.text)+" "),a("v-btn",{attrs:{text:""},on:{click:function(e){t.notification=!1}}})],1)],1)],1)},n=[],s=(a("c975"),a("bc3a")),r=a.n(s);a("d2c6");var d={name:"App",data:function(){return{dataReady:!1,notification:!1,notificationTimeout:2e3,dialog:!1,headers:[{text:"ID",align:"center",value:"id"},{text:"Created By",align:"center",value:"userId"},{text:"Title",align:"center",value:"title"},{text:"Edit Post",align:"center",value:"edit"}],posts:[],users:{},currentPostId:-1,editedIndex:-1,editedItem:{id:"",userId:"",title:"",body:"",name:"",username:"",email:"",phone:"",website:"",address:{street:"",suite:"",city:"",zipcode:""}},defaultItem:{id:"",userId:"",title:"",body:"",name:"",username:"",email:"",phone:"",website:"",address:{street:"",suite:"",city:"",zipcode:""}}}},methods:{openEditDialog:function(t){this.currentPostId=t.id,this.editedIndex=this.posts.indexOf(t),this.editedItem=Object.assign({},t,this.users[t.id]),this.dialog=!0},closeEditDialog:function(){var t=this;this.dialog=!1,setTimeout((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}),300)},saveEdit:function(){this.editedIndex>-1?Object.assign(this.posts[this.editedIndex],this.editedItem):this.showNotification("Nothing to save!"),this.closeEditDialog()},showNotification:function(t,e){e||(e=2e3),this.notification=!0,this.notificationTimeout=e},getUserData:function(t,e){return this.users?this.users[t][e]:""},validateStatus:function(t){return""===t||304===t||t>=200&&t<300},axiosError:function(t){t.response?alert(t.data):t.request?alert("No response from server."):alert(t.message)}},mounted:function(){var t=this;r.a.all([r.a.get("http://jsonplaceholder.typicode.com/posts",{validateStatus:this.validateStatus}),r.a.get("http://jsonplaceholder.typicode.com/users",{validateStatus:this.validateStatus})]).then(r.a.spread((function(e,a){for(var i=0;i<a.data.length;i++)t.users[a.data[i].id]=a.data[i];t.posts=e.data,t.dataReady=!0}))).catch(this.axiosError)}},c=d,l=(a("5c0b"),a("2877")),u=a("6544"),p=a.n(u),v=a("7496"),f=a("40dc"),m=a("8336"),h=a("b0af"),b=a("99d9"),y=a("62ad"),x=a("a523"),g=a("a75b"),I=a("8fea"),_=a("169a"),w=a("ce7e"),C=a("0fd9"),V=a("2db4"),k=a("2fa4"),T=a("8654"),j=a("a844"),O=a("71d9"),S=a("2a7f"),P=Object(l["a"])(c,o,n,!1,null,null,null),D=P.exports;p()(P,{VApp:v["a"],VAppBar:f["a"],VBtn:m["a"],VCard:h["a"],VCardActions:b["a"],VCardText:b["b"],VCardTitle:b["c"],VCol:y["a"],VContainer:x["a"],VContent:g["a"],VDataTable:I["a"],VDialog:_["a"],VDivider:w["a"],VRow:C["a"],VSnackbar:V["a"],VSpacer:k["a"],VTextField:T["a"],VTextarea:j["a"],VToolbar:O["a"],VToolbarTitle:S["a"]});var E=a("ecee"),N=a("c074"),R=a("f2d1"),A=a("ad3d"),M=a("f309");i["a"].use(M["a"]);var $=new M["a"]({});E["c"].add(N["a"],R["a"]),i["a"].component("font-awesome-icon",A["a"]),i["a"].config.productionTip=!1,new i["a"]({vuetify:$,render:function(t){return t(D)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var i=a("7694"),o=a.n(i);o.a},7694:function(t,e,a){}});
//# sourceMappingURL=app.7a85fb68.js.map