(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{392:function(n,e,t){"use strict";t.d(e,"a",function(){return s});var r=t(46),o=t(1),i=t.n(o),a=t(391),c=t(33),u=(t(84),t(21)),l=t(107),f=t(32);i.a.Component;i.a.Component;var s=function(n){function e(){return n.apply(this,arguments)||this}Object(r.a)(e,n);var t=e.prototype;return t.handleClick=function(n,e){(this.props.onClick&&this.props.onClick(n),n.defaultPrevented||0!==n.button||this.props.target&&"_self"!==this.props.target||function(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}(n))||(n.preventDefault(),(this.props.replace?e.replace:e.push)(this.props.to))},t.render=function(){var n=this,e=this.props,t=e.innerRef,r=(e.replace,e.to),o=Object(l.a)(e,["innerRef","replace","to"]);return i.a.createElement(a.d.Consumer,null,function(e){e||Object(f.a)(!1);var a="string"===typeof r?Object(c.c)(r,null,null,e.location):r,l=a?e.history.createHref(a):"";return i.a.createElement("a",Object(u.a)({},o,{onClick:function(t){return n.handleClick(t,e.history)},href:l,ref:t}))})},e}(i.a.Component)},401:function(n,e,t){"use strict";t.r(e);var r=t(47),o=t(1),i=t.n(o),a=t(392),c=t(34);function u(){var n=Object(r.a)(["\n  font-size: 1em;\n  margin: 0;\n"]);return u=function(){return n},n}function l(){var n=Object(r.a)(["\n  font-size: 1.5em;\n  color: ","\n  margin: 0 0 1em 0;\n  font-weight: normal;\n"]);return l=function(){return n},n}function f(){var n=Object(r.a)(["\n  font-size: 60px;\n  color: ",";\n  line-height: 1;\n  margin: 0 0 0.5em 0;\n  font-weight: normal;\n"]);return f=function(){return n},n}function s(){var n=Object(r.a)(["\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  padding: 10%;\n  box-sizing: border-box;\n  background-color: ",";\n  a {\n    border-bottom: 2px solid ",";\n\n    &:hover {\n      border-bottom: 2px solid ",";\n    }\n  }\n"]);return s=function(){return n},n}var p=c.c.div(s(),function(n){return n.theme.lightBackgroundColor},function(n){return n.theme.linkColor},function(n){return n.theme.linkHoverColor}),h=c.c.h1(f(),function(n){return n.theme.remarksTextColor}),m=c.c.h2(l(),function(n){return n.theme.remarksTextColor}),d=c.c.p(u());e.default=function(){return i.a.createElement(p,null,i.a.createElement(h,null,"404"),i.a.createElement(m,null,"Page Not Found"),i.a.createElement(d,null,"Sorry, the page you are looking for could not be found. You can ",i.a.createElement(a.a,{to:"/"},"click here")," to head to homepage."))}}}]);
//# sourceMappingURL=NotFound.cb6d8aa6.chunk.js.map