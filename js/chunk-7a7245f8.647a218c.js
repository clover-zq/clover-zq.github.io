(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7a7245f8"],{"1e2b":function(t,e,n){"use strict";var r=n("60e9"),i=n.n(r);i.a},"2b2e":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navigate-bar"},[n("span",{staticClass:"iconfont iconjiantou2",on:{click:function(e){return t.$router.back()}}}),n("strong",[t._v(t._s(t.title))]),t.showHome?n("span",{staticClass:"iconfont iconshouye",on:{click:function(e){return t.$router.push("/")}}}):n("span",{staticClass:"iconfont iconshouye",staticStyle:{opacity:"0"}})])},i=[],a={props:["title","showHome"]},s=a,c=(n("74fe"),n("2877")),o=Object(c["a"])(s,r,i,!1,null,"f394358c",null);e["a"]=o.exports},4886:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("NavigateBar",{attrs:{title:"栏目管理"}}),n("div",{staticClass:"content"},[n("p",{staticClass:"desc"},[t._v("点击删除一下频道")]),n("div",{staticClass:"list"},t._l(t.arrUp,(function(e,r){return n("span",{key:r,staticClass:"item",class:["关注","头条"].includes(e.name)?"active":"",on:{click:function(n){return t.handleDel(e,r)}}},[t._v(t._s(e.name))])})),0),n("p",{staticClass:"desc"},[t._v("点击添加一下频道")]),n("div",{staticClass:"list"},t._l(t.arrDown,(function(e,r){return n("span",{key:r,staticClass:"item",on:{click:function(n){return t.handleAdd(e,r)}}},[t._v(t._s(e.name))])})),0)])],1)])},i=[],a=(n("99af"),n("4de4"),n("caad"),n("a434"),n("b0c0"),n("2909")),s=n("2b2e"),c={components:{NavigateBar:s["a"]},data:function(){return{categories:[],arrUp:[],arrDown:[]}},mounted:function(){this.categories=JSON.parse(localStorage.getItem("categories")),this.arrUp=this.categories.filter((function(t){return 1===t.is_top})),this.arrDown=this.categories.filter((function(t){return 0===t.is_top}))},destroyed:function(){this.categories=[].concat(Object(a["a"])(this.arrUp),Object(a["a"])(this.arrDown),[this.categories[this.categories.length-1]]);var t=JSON.stringify(this.categories);localStorage.setItem("categories",t)},methods:{handleDel:function(t,e){["关注","头条"].includes(t.name)||(this.arrUp.splice(e,1),t.is_top=0,this.arrDown.push(t))},handleAdd:function(t,e){this.arrDown.splice(e,1),t.is_top=1,this.arrUp.push(t)}}},o=c,l=(n("1e2b"),n("2877")),u=Object(l["a"])(o,r,i,!1,null,"24233d74",null);e["default"]=u.exports},"4de4":function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").filter,a=n("1dde"),s=n("ae40"),c=a("filter"),o=s("filter");r({target:"Array",proto:!0,forced:!c||!o},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},"60e9":function(t,e,n){},"63a7":function(t,e,n){},"74fe":function(t,e,n){"use strict";var r=n("63a7"),i=n.n(r);i.a},"99af":function(t,e,n){"use strict";var r=n("23e7"),i=n("d039"),a=n("e8b5"),s=n("861d"),c=n("7b0b"),o=n("50c4"),l=n("8418"),u=n("65f0"),f=n("1dde"),d=n("b622"),h=n("2d00"),p=d("isConcatSpreadable"),g=9007199254740991,v="Maximum allowed index exceeded",b=h>=51||!i((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),m=f("concat"),w=function(t){if(!s(t))return!1;var e=t[p];return void 0!==e?!!e:a(t)},_=!b||!m;r({target:"Array",proto:!0,forced:_},{concat:function(t){var e,n,r,i,a,s=c(this),f=u(s,0),d=0;for(e=-1,r=arguments.length;e<r;e++)if(a=-1===e?s:arguments[e],w(a)){if(i=o(a.length),d+i>g)throw TypeError(v);for(n=0;n<i;n++,d++)n in a&&l(f,d,a[n])}else{if(d>=g)throw TypeError(v);l(f,d++,a)}return f.length=d,f}})},a434:function(t,e,n){"use strict";var r=n("23e7"),i=n("23cb"),a=n("a691"),s=n("50c4"),c=n("7b0b"),o=n("65f0"),l=n("8418"),u=n("1dde"),f=n("ae40"),d=u("splice"),h=f("splice",{ACCESSORS:!0,0:0,1:2}),p=Math.max,g=Math.min,v=9007199254740991,b="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!d||!h},{splice:function(t,e){var n,r,u,f,d,h,m=c(this),w=s(m.length),_=i(t,w),C=arguments.length;if(0===C?n=r=0:1===C?(n=0,r=w-_):(n=C-2,r=g(p(a(e),0),w-_)),w+n-r>v)throw TypeError(b);for(u=o(m,r),f=0;f<r;f++)d=_+f,d in m&&l(u,f,m[d]);if(u.length=r,n<r){for(f=_;f<w-r;f++)d=f+r,h=f+n,d in m?m[h]=m[d]:delete m[h];for(f=w;f>w-r+n;f--)delete m[f-1]}else if(n>r)for(f=w-r;f>_;f--)d=f+r-1,h=f+n-1,d in m?m[h]=m[d]:delete m[h];for(f=0;f<n;f++)m[f+_]=arguments[f+2];return m.length=w-r+n,u}})},caad:function(t,e,n){"use strict";var r=n("23e7"),i=n("4d64").includes,a=n("44d2"),s=n("ae40"),c=s("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:!c},{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),a("includes")}}]);
//# sourceMappingURL=chunk-7a7245f8.647a218c.js.map