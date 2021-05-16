!function(t){function e(e){for(var r,a,o=e[0],l=e[1],u=e[2],d=0,f=[];d<o.length;d++)a=o[d],n[a]&&f.push(n[a][0]),n[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);for(c&&c(e);f.length;)f.shift()();return i.push.apply(i,u||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],r=!0,o=1;o<s.length;o++){var l=s[o];0!==n[l]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=s[0]))}return t}var r={},n={0:0},i=[];function a(e){if(r[e])return r[e].exports;var s=r[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=t,a.c=r,a.d=function(t,e,s){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(s,r,function(e){return t[e]}.bind(null,r));return s},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var o=window.webpackJsonp=window.webpackJsonp||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var c=l;i.push(["Vtdi",1]),s()}({O8cx:function(t,e,s){"use strict";var r=s("gqZZ");s.n(r).a},Vtdi:function(t,e,s){"use strict";s.r(e);var r=s("oCYn"),n={name:"App"},i=(s("XAuw"),s("KHd+")),a=Object(i.a)(n,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},[],!1,null,null,null).exports,o=s("jE9Z"),l=s("vDqi"),u=s.n(l),c={name:"LoadingScreen"},d=(s("O8cx"),Object(i.a)(c,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"loading-screen"},[e("div",{staticClass:"columns is-vcentered has-text-centered",staticStyle:{"min-height":"100vh"}},[e("svg",{attrs:{version:"1.1",id:"L2",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 100 100","enable-background":"new 0 0 100 100","xml:space":"preserve"}},[e("circle",{attrs:{fill:"none",stroke:"#fff","stroke-width":"4","stroke-miterlimit":"10",cx:"50",cy:"50",r:"48"}}),this._v(" "),e("line",{attrs:{fill:"none","stroke-linecap":"round",stroke:"#fff","stroke-width":"4","stroke-miterlimit":"10",x1:"50",y1:"50",x2:"85",y2:"50.5"}},[e("animateTransform",{attrs:{attributeName:"transform",dur:"2s",type:"rotate",from:"0 50 50",to:"360 50 50",repeatCount:"indefinite"}})],1),this._v(" "),e("line",{attrs:{fill:"none","stroke-linecap":"round",stroke:"#fff","stroke-width":"4","stroke-miterlimit":"10",x1:"50",y1:"50",x2:"49.5",y2:"74"}},[e("animateTransform",{attrs:{attributeName:"transform",dur:"15s",type:"rotate",from:"0 50 50",to:"360 50 50",repeatCount:"indefinite"}})],1)])])])},[],!1,null,"79eb9fb0",null).exports),f={name:"ProgressBar",props:{id:Number,bar:Number,limit:Number},computed:{hasExceedLimit:function(){return this.bar>=this.limit}}},m=Object(i.a)(f,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-1"},[s("p",{staticClass:"content has-text-weight-bold"},[t._v("#"+t._s(t.id+1))])]),t._v(" "),s("div",{staticClass:"column"},[s("progress",{staticClass:"progress is-medium",class:[t.hasExceedLimit?"is-danger":"is-info"],attrs:{id:"progress-"+t.id,max:"100"},domProps:{value:t.bar}})]),t._v(" "),s("div",{staticClass:"column is-1"},[s("p",{staticClass:"content has-text-weight-bold",class:{"has-text-danger":t.hasExceedLimit}},[t._v(t._s(t.bar)+"%")])])])},[],!1,null,null,null).exports,p={name:"ProgressButton",props:{button:Number},filters:{formatSign:function(t){return t>0?"+".concat(t):t}},methods:{setValue:function(t){this.$emit("setValue",t)}}},h={name:"Home",components:{LoadingScreen:d,ProgressBar:m,ProgressButton:Object(i.a)(p,function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"button is-medium",on:{click:function(e){return t.setValue(t.button)}}},[t._v(t._s(t._f("formatSign")(t.button)))])},[],!1,null,null,null).exports},data:function(){return{showLoader:!0,items:{},selectedProgressBar:0}},mounted:function(){var t=this;this.getData().then(function(){t.showLoader=!1})},methods:{getData:function(){var t=this;return u.a.get("http://pb-api.herokuapp.com/bars").then(function(e){t.items=e.data})},onChange:function(t){this.selectedProgressBar=parseInt(t.target.value)},setValue:function(t){var e=this.items.bars[this.selectedProgressBar]+t;e<=0&&(e=0),this.$set(this.items.bars,this.selectedProgressBar,e)}}},v=Object(i.a)(h,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"hero is-fullheight"},[s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container"},[s("div",{staticClass:"columns is-vcentered has-text-centered"},[s("div",{staticClass:"column is-half is-offset-one-quarter"},[s("h1",{staticClass:"title"},[t._v("Progress Bar Demo")]),t._v(" "),s("h2",{staticClass:"subtitle has-text-weight-bold"},[t._v("Limit: "+t._s(t.items.limit)+"%")]),t._v(" "),t._l(t.items.bars,function(e,r){return s("ProgressBar",{key:r,attrs:{id:r,bar:e,limit:t.items.limit}})}),t._v(" "),s("div",{staticClass:"select is-medium is-rounded"},[s("select",{attrs:{name:"selectProgressBar",id:"selectProgressBar"},on:{change:t.onChange}},t._l(t.items.bars,function(e,r){return s("option",{key:r,domProps:{value:r}},[t._v("\n                Progress Bar "+t._s(r+1)+"\n              ")])}),0)])],2)]),t._v(" "),s("div",{staticClass:"buttons is-centered"},t._l(t.items.buttons,function(e,r){return s("ProgressButton",{key:r,attrs:{button:e},on:{setValue:t.setValue}})}),1)])]),t._v(" "),s("transition",{attrs:{"enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},[t.showLoader?s("LoadingScreen"):t._e()],1)],1)},[],!1,null,null,null).exports;r.a.use(o.a);var b=new o.a({base:window.location.pathname,mode:"history",routes:[{path:"/",name:"Home",component:v}]});r.a.config.productionTip=!1,new r.a({el:"#app",router:b,components:{App:a},template:"<App/>"})},XAuw:function(t,e,s){"use strict";var r=s("v9IW");s.n(r).a},gqZZ:function(t,e){},v9IW:function(t,e){}});
//# sourceMappingURL=app.fc8f0753c4d46115dd7c.js.map