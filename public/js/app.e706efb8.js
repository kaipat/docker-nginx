(function(){"use strict";var t={1905:function(t,e,n){var a=n(7195),r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"app"},[e("div",{staticClass:"time-picker"},[e("div",{staticClass:"time-picker-header-row"},[e("div",{staticClass:"row-title"},[t._v("星期/时间")]),e("div",[t._m(0),e("div",{staticClass:"time-unit-row"},t._l(t.HOURS,(function(n){return e("div",{key:n,staticClass:"time-unit"},[t._v(" "+t._s(n)+" ")])})),0)])]),t._l(t.rows,(function(n,a){return e("div",{key:a,staticClass:"time-picker-row",on:{mousedown:t.handleStartCheck,mouseup:t.handleEndCheck,mousemove:t.handleCheck}},[e("div",{staticClass:"row-title"},[t._v(t._s(n.title))]),t._l(n.units,(function(t,n){return e("div",{key:`${n},${a}`,class:["row-unit",t.checked?"active":""],attrs:{"data-x":n,"data-y":a}})}))],2)}))],2),e("button",{on:{click:t.getData}},[t._v("获取数据")]),e("button",{on:{click:t.showData}},[t._v("回显数据")]),e("button",{on:{click:t.jump}},[t._v("jump")]),e("a",{attrs:{href:"http://192.168.1.117:8000/"}},[t._v("href")]),e("a",{attrs:{href:"http://192.168.1.117:8000/"}},[t._v("测试")])])},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"time-range"},[e("div",{staticClass:"rang-span"},[t._v("00:00 - 12:00")]),e("div",{staticClass:"rang-span"},[t._v("12:00 - 24:00")])])}];n(7658);const s=[{label:"星期一",value:"monday"},{label:"星期二",value:"tuesday"},{label:"星期三",value:"wednesday"},{label:"星期四",value:"thursday"},{label:"星期五",value:"friday"},{label:"星期六",value:"saturday"},{label:"星期日",value:"sunday"}],o=s.map((t=>t.value)),c=Array.from({length:24},((t,e)=>e)),u=Array.from({length:48},((t,e)=>e)),l=s.map(((t,e)=>({title:t.label,key:t.value,units:u.map(((t,n)=>({checked:!1,position:{x:n,y:e}})))}))),y={checking:!1,target:null,start:null,end:null,type:"check"},h={backLiveType:0,...o.reduce(((t,e)=>(t[e]=[],t)),{})},d={backLiveType:0,monday:[[0,3.5]],tuesday:[[4.5,9],[8.5,14.5]],wednesday:[[7.5,13.5]],thursday:[[0,.5]],friday:[[14,16.5]],saturday:[[23.5,24]],sunday:[[20.5,24]]};var f={name:"App",data(){return{WEEKS:s,HOURS:c,rows:JSON.parse(JSON.stringify(l)),action:{...y}}},methods:{jump(){window.open("http://192.168.1.117:8000/")},getData(){const t=JSON.parse(JSON.stringify(h));return this.rows.forEach((e=>{const n=e.units,a=t[e.key];let r=[];n.forEach(((t,e)=>{if(t.checked&&r.push(t.position.x),(!t.checked||e===n.length-1)&&r.length){const t=r[0]/2,e=(r[r.length-1]+1)/2;a.push([t,e]),r=[]}}))})),console.log(t),t},showData(){this.rows=JSON.parse(JSON.stringify(l));for(const t in d){const e=o.indexOf(t);if(e>=0){const n=e;d[t].forEach((t=>{const e=2*t[0],a=2*t[1]-1;for(let r=e;r<=a;r++)this.rows[n].units[r].checked=!0}))}}},direction(t,e,n){return t.x>e.x&&t.y>e.y?n.x>=e.x&&n.x<=t.x&&n.y>=e.y&&n.y<=t.y:t.x<e.x&&t.y>e.y?n.x<=e.x&&n.x>=t.x&&n.y>=e.y&&n.y<=t.y:t.x>e.x&&t.y<e.y?n.x>=e.x&&n.x<=t.x&&n.y<=e.y&&n.y>=t.y:t.x<e.x&&t.y<e.y?n.x<=e.x&&n.x>=t.x&&n.y<=e.y&&n.y>=t.y:t.x===e.x&&t.y<e.y?n.x===e.x&&n.x===t.x&&n.y<=e.y&&n.y>=t.y:t.x===e.x&&t.y>e.y?n.x===e.x&&n.x===t.x&&n.y>=e.y&&n.y<=t.y:t.x<e.x&&t.y===e.y?n.x<=e.x&&n.x>=t.x&&n.y===e.y&&n.y===t.y:t.x>e.x&&t.y===e.y?n.x>=e.x&&n.x<=t.x&&n.y===e.y&&n.y===t.y:void 0},handleCheck(t){if(!this.checking)return;if(this.action.target===t.target)return;const e=parseInt(t.target.dataset.x,10),n=parseInt(t.target.dataset.y,10);if(e>=0&&n>=0){this.action.target=t.target;const{start:a}=this.action,r={x:e,y:n};this.rows.forEach((t=>{t.units.forEach((t=>{this.direction(a,r,t.position)&&(t.checked="check"===this.action.type)}))}))}},handleStartCheck(t){const e=parseInt(t.target.dataset.x,10),n=parseInt(t.target.dataset.y,10);e>=0&&n>=0&&(this.action.target=t.target,this.action.start={x:e,y:n},this.rows[n].units[e].checked=!this.rows[n].units[e].checked,this.action.type=this.rows[n].units[e].checked?"check":"uncheck",this.checking=!0)},handleEndCheck(){this.checking=!1}}},v=f,x=n(1001),p=(0,x.Z)(v,r,i,!1,null,"6b7bc3b0",null),k=p.exports;a.ZP.config.productionTip=!1,new a.ZP({render:t=>t(k)}).$mount("#app")}},e={};function n(a){var r=e[a];if(void 0!==r)return r.exports;var i=e[a]={exports:{}};return t[a](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,a,r,i){if(!a){var s=1/0;for(l=0;l<t.length;l++){a=t[l][0],r=t[l][1],i=t[l][2];for(var o=!0,c=0;c<a.length;c++)(!1&i||s>=i)&&Object.keys(n.O).every((function(t){return n.O[t](a[c])}))?a.splice(c--,1):(o=!1,i<s&&(s=i));if(o){t.splice(l--,1);var u=r();void 0!==u&&(e=u)}}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[a,r,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,a){var r,i,s=a[0],o=a[1],c=a[2],u=0;if(s.some((function(e){return 0!==t[e]}))){for(r in o)n.o(o,r)&&(n.m[r]=o[r]);if(c)var l=c(n)}for(e&&e(a);u<s.length;u++)i=s[u],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(l)},a=self["webpackChunkvue2_demo"]=self["webpackChunkvue2_demo"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(1905)}));a=n.O(a)})();
//# sourceMappingURL=app.e706efb8.js.map