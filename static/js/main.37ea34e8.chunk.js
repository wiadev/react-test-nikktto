(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){},21:function(e,t,a){e.exports=a(31)},30:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(18),o=a.n(r),c=a(7),s=a(1),i=a(20),u=a(3),d=a(10),m=Object(s.c)({style:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_STYLE":return Object(d.a)({},e,{style:Object(d.a)({},e.style,Object(u.a)({},t.payload.id,Object(d.a)({},e.style[t.payload.id],t.payload.style)))});default:return e}}}),b={style:{style:{element_01:{borderColor:"#FF0000",borderWidth:3,borderStyle:"solid"}},selectedElement:"element_01"}};a(30);var h=a(4),p=a(5),v=a(8),y=a(6),E=a(9),f=function(e,t){return function(a){a({type:"UPDATE_STYLE",payload:{id:e,style:t}})}},j=(a(12),[{value:"#000000",name:"Black"},{value:"#FF0000",name:"Red"},{value:"#0000BB",name:"Blue"}]),O=[1,2,3,4,5],w=["solid","dotted","double","dashed"],g=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(v.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(l)))).handleChange=function(e,t){var n=a.props,l=n.dispatch,r=n.style;l(f(r.selectedElement,Object(u.a)({},e,t)))},a}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.props.style,a=t.style,n=t.selectedElement;return l.a.createElement("div",{className:"control"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"label"},"Element:"),l.a.createElement("select",null,l.a.createElement("option",{value:"element_01"},"Element 01"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"label"},"Border Color:"),l.a.createElement("select",{defaultValue:a[n].borderColor,onChange:function(t){e.handleChange("borderColor",t.target.value)}},j.map(function(e){return l.a.createElement("option",{value:e.value,key:e.value},e.name)}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"label"},"Border Width:"),l.a.createElement("select",{defaultValue:a[n].borderWidth,onChange:function(t){e.handleChange("borderWidth",parseInt(t.target.value))}},O.map(function(e){return l.a.createElement("option",{value:e,key:e},e)}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"label"},"Border Style:"),l.a.createElement("select",{defaultValue:a[n].borderStyle,onChange:function(t){e.handleChange("borderStyle",t.target.value)}},w.map(function(e){return l.a.createElement("option",{value:e,key:e},e)}))))}}]),t}(n.Component),C=Object(c.b)(function(e){return{style:e.style}})(g),k=function(e){function t(){return Object(h.a)(this,t),Object(v.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.style.style,t=this.props.id;return l.a.createElement("div",{className:"element",style:Object(d.a)({},e[t])})}}]),t}(n.Component),N=Object(c.b)(function(e){return{style:e.style}})(k),B=function(e){function t(){return Object(h.a)(this,t),Object(v.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"app"},l.a.createElement(C,null),l.a.createElement(N,{id:"element_01"}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(c.a,{store:Object(s.d)(m,b,Object(s.a)(i.a))},l.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,1,2]]]);
//# sourceMappingURL=main.37ea34e8.chunk.js.map