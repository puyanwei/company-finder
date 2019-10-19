(this["webpackJsonpcompany-finder"]=this["webpackJsonpcompany-finder"]||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(3),l=n.n(c),o=(n(10),n(4)),i=n(1),u=(n(11),function(e){var t=e.handleSubmit,n=e.handleKeyPress;return r.a.createElement("form",{onSubmit:function(e){return t(e)}},r.a.createElement("div",{className:"container-input"},r.a.createElement("label",null,"GUID KEY"),r.a.createElement("input",{type:"text",name:"guid",onChange:function(e){return n(e)},required:!0})),r.a.createElement("div",{className:"container-input"},r.a.createElement("label",null,"SEARCH"),r.a.createElement("input",{type:"text",name:"query",onChange:function(e){return n(e)},required:!0})),r.a.createElement("button",{type:"submit"},"SUBMIT"))}),s=(n(12),function(e){var t=e.companyData,n=Object(a.useState)(!0),c=Object(i.a)(n,2),l=c[0],o=c[1];return r.a.createElement("li",{className:"company-title",onClick:function(){return o(!l)}},t.Name||t.EntityName,r.a.createElement("span",{className:"toggle-icon"},l?"+":"-"),l?null:r.a.createElement("ul",{onClick:function(e){return function(e){e.stopPropagation()}(e)}},Object.keys(t).map((function(e){return r.a.createElement("li",{className:"company-details",key:"".concat(e," ").concat(t[e])},e,": ",t[e])}))))}),m=(n(13),function(e){var t=e.data,n=e.queryValue,a=e.createUniqueKey;return r.a.createElement(r.a.Fragment,null,t?r.a.createElement("div",{className:"results-container"},r.a.createElement("p",{className:"query-message"},t.length," RESULT",1!==t.length?"S":null," FOR ",r.a.createElement("span",{className:"query"},'"',n,'"')),r.a.createElement("ul",null,t.map((function(e){return r.a.createElement(s,{companyData:e,key:a(e)})})))):null)});m.defaultProps={data:null};var p=m;n(14);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(n,!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g=function(){var e=Object(a.useState)({guid:"",query:""}),t=Object(i.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)({isError:!1,isLoading:!1}),o=Object(i.a)(l,2),s=o[0],m=o[1],f=Object(a.useState)(null),g=Object(i.a)(f,2),y=g[0],d=g[1],E=s.isError,h=s.isLoading,O=n.guid,v=n.query,N=function(){var e,t;"number"===typeof Number(v)&&11===v.length?(t="AbnDetails.aspx?callback=callback&abn=".concat(v,"&guid=").concat(O),e="callback("):(t="MatchingNames.aspx?callback=nameCallback&name=".concat(v,"&guid=").concat(O),e="nameCallback("),j(t,e)},j=function(e,t){(new Headers).append("Content-Type","text/plain; charset=ISO-8859-1"),fetch("https://abr.business.gov.au/json/".concat(e)).then((function(e){return e.text()})).then((function(e){var n=e.replace(t,"").slice(0,-1);n=JSON.parse(n),d("nameCallback("===t?n.Names:[n])})).catch((function(e){console.log(e),m({isLoading:!1,isError:!0})})).finally((function(){m(b({isLoading:!1},s))}))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"homepage-container"},r.a.createElement("h1",{className:"homepage-title"},"ABN LOOKUP"),r.a.createElement("p",{className:"homepage-description"},"Search by ABN or name. You will need a GUID key to search."),r.a.createElement(u,{isError:E,handleSubmit:function(e){e.preventDefault(),console.log("submitting..."),m(b({},s,{isLoading:!0})),N()},handleKeyPress:function(e){var t=e.target,a=t.name,r=t.value;c(b({},n,"guid"===a?{guid:r}:{query:r}))}}),E?r.a.createElement("p",{className:"error-message"},"GUID Key is incorrect, please check again"):null),r.a.createElement(r.a.Fragment,null,h?r.a.createElement("h2",null,"LOADING..."):r.a.createElement(p,{data:y,queryValue:{query:v},createUniqueKey:function(e){return"".concat(e.EntityName).concat(e.Abn)}})))},y=(n(15),function(){return r.a.createElement("div",{className:"App"},r.a.createElement(g,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[5,1,2]]]);
//# sourceMappingURL=main.6a90e5ff.chunk.js.map