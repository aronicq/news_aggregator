(this.webpackJsonpreactdir=this.webpackJsonpreactdir||[]).push([[0],{17:function(e,t,a){e.exports=a(42)},22:function(e,t,a){},23:function(e,t,a){e.exports=a.p+"media/logo.5d5d9eef.svg"},24:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(15),c=a.n(i),o=(a(22),a(2)),s=a(3),l=a(5),u=a(4),m=(a(23),a(24),a(16)),d=a.n(m);var p=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={articles:[{authors:"Will McCallum",content:"//google.com",date:"21 September 2020",preview:"Today, scientists sounded...",title:"The ice is disappearing, BUT a movement is emerging",id:13}]},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;d.a.get("/news/api/get").then((function(t){console.log(t),e.setState({articles:t.data.articles})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"panel"},this.state.articles.map((function(e){return r.a.createElement(h,{article:e,key:e.id})})))}}]),a}(r.a.Component),h=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Cell"},r.a.createElement("div",{className:"title"},r.a.createElement("a",{href:this.props.article.content},this.props.article.title)),r.a.createElement("div",{className:"author"},this.props.article.authors),r.a.createElement("div",{className:"date"},this.props.article.date),r.a.createElement("div",{className:"preview"},this.props.article.preview))}}]),a}(r.a.Component),v=function(){return r.a.createElement("div",null,r.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.54faf0ef.chunk.js.map