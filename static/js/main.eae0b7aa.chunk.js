(this["webpackJsonpcorona-tracker"]=this["webpackJsonpcorona-tracker"]||[]).push([[0],[,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(4),o=c.n(r),i=(c(9),c.p,c(10),c(2)),a=(c(11),c(0));var j=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),c=(t[0],t[1],Object(n.useState)([])),s=Object(i.a)(c,2),r=s[0],o=s[1],j=Object(n.useState)([]),h=Object(i.a)(j,2),u=h[0],l=h[1];return Object(n.useEffect)((function(){fetch("https://corona.lmao.ninja/v2/countries").then((function(e){return e.json()})).then(o)}),[]),console.log(u),Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Covid Tracker"}),Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"cases-container",children:[Object(a.jsxs)("h3",{children:["Country : ",u.country," "]}),Object(a.jsxs)("h3",{children:[" Total Cases : ",u.cases," "]}),Object(a.jsxs)("h3",{children:[" Active Cases : ",u.active," "]}),Object(a.jsxs)("h3",{children:[" Recovered Cases : ",u.recovered," "]}),Object(a.jsxs)("h3",{children:[" Deaths : ",u.deaths," "]}),Object(a.jsx)("img",{src:u.flag})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Select Country name"}),r&&r.map((function(e){return Object(a.jsx)("select",{onClick:function(){var t;t=e.country,fetch("https://corona.lmao.ninja/v2/countries/".concat(t)).then((function(e){return e.json()})).then(l)},children:Object(a.jsx)("option",{className:"country-name",children:e.country})})}))]})]})]})};var h=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(j,{})})},u=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,14)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,o=t.getTTFB;c(e),n(e),s(e),r(e),o(e)}))};o.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(h,{})}),document.getElementById("root")),u()}],[[13,1,2]]]);
//# sourceMappingURL=main.eae0b7aa.chunk.js.map