(function(e){function t(t){for(var a,o,s=t[0],c=t[1],l=t[2],u=0,d=[];u<s.length;u++)o=s[u],i[o]&&d.push(i[o][0]),i[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);f&&f(t);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},i={app:0},r=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var f=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("64a9"),i=n.n(a);i.a},"2af3":function(e,t,n){"use strict";var a=n("bbed"),i=n.n(a);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"wrapper"},[n("spTable",{attrs:{title:"demo",data:e.data,pagination:e.pagination,columns:e.columns},on:{"update:pagination":function(t){e.pagination=t}}})],1)])},r=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",{staticClass:"sp-table"},[n("div",{staticClass:"thead"},[n("td",{staticStyle:{"border-bottom":"none"},attrs:{colspan:e.columns.length}},[n("div",{staticClass:"flex"},[n("p",{staticClass:"caption",staticStyle:{margin:"0",flex:"1"}},[e._v(e._s(e.title))]),n("button",{on:{click:function(t){e.$emit("request")}}},[e._v("refresh")])])])]),n("thead",[n("tr",e._l(e.columns,function(t){return n("th",[e._v("\n        "+e._s(t.label)+"\n      ")])}))]),n("tbody",e._l(e.computedData,function(t){return n("tr",e._l(e.columns,function(a){return n("td",{style:a.style},[e._t("cell-"+a.field,[e._v("\n          "+e._s(a.format?a.format(t[a.field]):t[a.field])+"\n        ")],{cell:t[a.field]})],2)}))})),n("div",{staticClass:"tfoot"},[n("td",{attrs:{colspan:e.columns.length}},[n("div",{staticClass:"flex pagination"},[n("button",{attrs:{disabled:1===e.innerPagination.currentPage},on:{click:e.toFirst}},[e._v("first")]),n("button",{attrs:{disabled:1===e.innerPagination.currentPage},on:{click:e.prev}},[e._v("prev")]),n("div",{staticClass:"text-center",staticStyle:{margin:"8px",width:"4rem"}},[e._v(e._s(e.innerPagination.currentPage)+" / "+e._s(e.totalPage))]),n("button",{attrs:{disabled:e.innerPagination.currentPage===e.totalPage},on:{click:e.next}},[e._v("next")]),n("button",{attrs:{disabled:e.innerPagination.currentPage===e.totalPage},on:{click:e.toLast}},[e._v("last")])])])])])},s=[],c=(n("f751"),{props:{title:String,data:{type:Array,required:!0},columns:{type:Array,required:!0},pagination:{type:Object,default:function(){return{currentPage:1,perPage:10}}}},computed:{isServerSide:function(){return void 0!==this.pagination.total},totalPage:function(){return this.isServerSide||(this.innerPagination.total=this.data.length),0===this.innerPagination.total?1:Math.ceil(this.innerPagination.total/this.innerPagination.perPage)},computedData:function(){if(this.isServerSide)return this.data;var e=(this.innerPagination.currentPage-1)*this.innerPagination.perPage,t=this.innerPagination.currentPage*this.innerPagination.perPage;return this.data.slice(e,t)}},data:function(){return{innerPagination:{total:0,currentPage:1,perPage:10}}},watch:{"pagination.total":function(e,t){this.innerPagination=Object.assign({},this.pagination)}},methods:{toFirst:function(){this.innerPagination.currentPage=1,this.emitParent()},toLast:function(){this.innerPagination.currentPage=this.totalPage,this.emitParent()},prev:function(){this.innerPagination.currentPage--,this.emitParent()},next:function(){this.innerPagination.currentPage++,this.emitParent()},emitParent:function(){this.isServerSide&&(this.$emit("update:pagination",this.innerPagination),this.$emit("request"))}},created:function(){this.innerPagination=Object.assign({},this.pagination)}}),l=c,f=(n("2af3"),n("2877")),u=Object(f["a"])(l,o,s,!1,null,null,null);u.options.__file="spTable.vue";var d=u.exports,p={name:"app",data:function(){return{data:[{name:"Tiger Nixon",position:"System Architect",office:"Edinburgh",extn:"5421",created_at:"2011/04/25",salary:"$320,800"},{name:"Garrett Winters",position:"Accountant",office:" Tokyo",extn:"8422",created_at:"2011/07/25",salary:"$170,750"},{name:"Ashton Cox",position:"Junior Technical Author",office:"San Francisco",extn:"1562",created_at:"2009/01/12",salary:"$86,000"},{name:"Cedric Kelly",position:"Senior Javascript Developer",office:"Edinburgh",extn:"6224",created_at:"2012/03/29",salary:"$433,060"},{name:"Airi Satou",position:"Accountant",office:"Tokyo",extn:"5407",created_at:"2008/11/28",salary:"$162,700"},{name:"Brielle Williamson",position:"Integration Specialist",office:"New York",extn:"4804",created_at:"2012/12/02",salary:"$372,000"},{name:"Herrod Chandler",position:"Sales Assistant",office:"San Francisco",extn:"9608",created_at:"2012/08/06",salary:"$137,500"},{name:"Rhona Davidson",position:"Integration Specialist",office:"Tokyo",extn:"6200",created_at:"2010/10/14",salary:"$327,900"},{name:"Colleen Hurst",position:"Javascript Developer",office:"San Francisco",extn:"2360",created_at:"2009/09/15",salary:"$205,500"},{name:"Sonya Frost",position:"Software Engineer",office:"Edinburgh",extn:"1667",created_at:"2008/12/13",salary:"$103,600"},{name:"Jena Gaines",position:"Office Manager",office:"London",extn:"3814",created_at:"2008/12/19",salary:"$90,560"},{name:"Quinn Flynn",position:"Support Lead",office:"Edinburgh",extn:"9497",created_at:"2013/03/03",salary:"$342,000"},{name:"Charde Marshall",position:"Regional Director",office:"San Francisco",extn:"6741",created_at:"2008/10/16",salary:"$470,600"},{name:"Haley Kennedy",position:"Senior Marketing Designer",office:"London",extn:"3597",created_at:"2012/12/18",salary:"$313,500"},{name:"Tatyana Fitzpatrick",position:"Regional Director",office:"London",extn:"1965",created_at:"2010/03/17",salary:"$385,750"},{name:"Michael Silva",position:"Marketing Designer",office:"London",extn:"1581",created_at:"2012/11/27",salary:"$198,500"},{name:"Paul Byrd",position:"Chief Financial Officer (CFO)",office:"New York",extn:"3059",created_at:"2010/06/09",salary:"$725,000"},{name:"Gloria Little",position:"Systems Administrator",office:"New York",extn:"1721",created_at:"2009/04/10",salary:"$237,500"},{name:"Bradley Greer",position:"Software Engineer",office:"London",extn:"2558",created_at:"2012/10/13",salary:"$132,000"},{name:"Dai Rios",position:"Personnel Lead",office:"Edinburgh",extn:"2290",created_at:"2012/09/26",salary:"$217,500"},{name:"Jenette Caldwell",position:"Development Lead",office:"New York",extn:"1937",created_at:"2011/09/03",salary:"$345,000"},{name:"Yuri Berry",position:"Chief Marketing Officer (CMO)",office:"New York",extn:"6154",created_at:"2009/06/25",salary:"$675,000"},{name:"Doris Wilder",position:"Sales Assistant",office:"Sidney",extn:"3023",created_at:"2010/09/20",salary:"$85,600"},{name:"Jennifer Chang",position:"Regional Director",office:"Singapore",extn:"9239",created_at:"2010/11/14",salary:"$357,650"},{name:"Brenden Wagner",position:"Software Engineer",office:"San Francisco",extn:"1314",created_at:"2011/06/07",salary:"$206,850"},{name:"Shou Itou",position:"Regional Marketing",office:"Tokyo",extn:"8899",created_at:"2011/08/14",salary:"$163,000"},{name:"Michelle House",position:"Integration Specialist",office:"Sidney",extn:"2769",created_at:"2011/06/02",salary:"$95,400"},{name:"Prescott Bartlett",position:"Technical Author",office:"London",extn:"3606",created_at:"2011/05/07",salary:"$145,000"},{name:"Gavin Cortez",position:"Team Leader",office:"San Francisco",extn:"2860",created_at:"2008/10/26",salary:"$235,500"}],pagination:{currentPage:1,perPage:5},columns:[{label:"Name",field:"name",style:"width: 100px"},{label:"Position",field:"position"},{label:"Office",field:"office"},{label:"Extn.",field:"extn"},{label:"Created At",field:"created_at"},{label:"Salary",field:"salary"}]}},components:{spTable:d}},g=p,h=(n("034f"),Object(f["a"])(g,i,r,!1,null,null,null));h.options.__file="App.vue";var m=h.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(m)}}).$mount("#app")},"64a9":function(e,t,n){},bbed:function(e,t,n){}});
//# sourceMappingURL=app.baa5896b.js.map