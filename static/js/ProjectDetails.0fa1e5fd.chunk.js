(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{391:function(e,n,t){"use strict";t.d(n,"a",function(){return r}),t.d(n,"b",function(){return o});var r={sm:"576",md:"768",lg:"992",xl:"1200",xxl:"1600"},o={mobile:"only screen and (max-width: ".concat(r.sm-1,"px)"),tablet:"only screen and (min-width: ".concat(r.sm,"px) and (max-width: ").concat(r.md-1,"px)"),desktop:"only screen and (min-width: ".concat(r.md,"px)"),largerScreen:"only screen and (min-width: ".concat(r.lg,"px)"),extraLargeScreen:"only screen and (min-width: ".concat(r.xl,"px)"),tabletDesktop:"only screen and (min-width: ".concat(r.sm,"px)"),mobileTablet:"only screen and (max-width: ".concat(r.md-1,"px)")}},392:function(e,n,t){"use strict";var r=t(48),o=t(34),i=t(54),a=t.n(i);function c(){var e=Object(r.a)(["\n  box-sizing: border-box;\n  display: flex;\n  flex: 0 1 auto;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin-right: -0.5rem;\n  margin-left: -0.5rem;\n  ","\n  ","\n"]);return c=function(){return e},e}var l=o.c.div(c(),function(e){return e.justifyContent?"justify-content: ".concat(e.justifyContent,";"):""},function(e){return e.alignItems?"align-items: ".concat(e.alignItems,";"):""});l.propTypes={justifyContent:a.a.string,alignItems:a.a.string},n.a=l},393:function(e,n,t){"use strict";var r=t(48),o=t(34),i=t(54),a=t.n(i),c=t(391);function l(){var e=Object(r.a)(["\n  box-sizing: border-box;\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n  margin-bottom: 1.5rem;\n  flex: 0 0 ","%;\n  max-width: ","%;\n\n  @media "," {\n    flex: 0 0 ","%;\n    max-width: ","%;\n  }\n\n  @media "," {\n    flex: 0 0 ","%;\n    max-width: ","%;\n  }\n\n  @media "," {\n    flex: 0 0 ","%;\n    max-width: ","%;\n  }\n"]);return l=function(){return e},e}var s=function(e){return e/12*100},u=o.c.div(l(),function(e){return s(e.xs)||100},function(e){return s(e.xs)||100},c.b.tablet,function(e){return s(e.sm)||s(e.xs)||100},function(e){return s(e.sm)||s(e.xs)||100},c.b.desktop,function(e){return s(e.md)||s(e.sm)||s(e.xs)||100},function(e){return s(e.md)||s(e.sm)||s(e.xs)||100},c.b.largerScreen,function(e){return s(e.lg)||s(e.md)||s(e.sm)||s(e.xs)||100},function(e){return s(e.lg)||s(e.md)||s(e.sm)||s(e.xs)||100});u.propTypes={xs:a.a.number.isRequired,sm:a.a.number,md:a.a.number,lg:a.a.number},n.a=u},394:function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAYNJREFUeNrsmk1OwzAQRmPs0g1HANErRCgUwSW4B+fhHlyC8rPJFVqJI3RTSGrWHqSOrImborzZVU0nzst8nz2uXYyxKhkhBNMNuq5zJcd3Vk08ADB1AKG0xuu6Lprf6hFIAAATD5e7DpCatGrcGm3bmjwBCQAAD4j/SvNDewISAAC9wGlpVo+96DVuqAAAAOCEPCBf02l8r1+Tz+eLh3Re37ynD3B9TwUAAAAjeoDU/M9mNegAZb5IBQAAAEfdD3DOJRd474RG03l5JuZlqydo+eT3fd+nnhEj+wEAAMCAHrD/+jicUeZzRf/er+T4/dUdHoAEADCgB/z1BC884W3cN3i5zNI8FQAAANg8QDuzo639Z8oenvX3nA9AAgAo6wGaJ8h+XO0dMud5771J81QAAACQStiaQNNg0zSJR3y+PB/Md/v4ZFrbUwEAAMBx1wG5vUJpz6ECAACAcXsBGdtdZ8p/MQ9FPQEJAIBewKZ5qXFNs9aQ95PjYU8QCQAgK34FGAABs6KnnWwQzQAAAABJRU5ErkJggg=="},396:function(e,n,t){"use strict";var r=t(48),o=t(1),i=t.n(o),a=t(34),c=t(391);function l(){var e=Object(r.a)(["\n  max-width: ","px;\n  width: 100%;\n  margin: auto;\n  padding: 0 5%;\n  box-sizing: border-box;\n"]);return l=function(){return e},e}var s=a.c.div(l(),c.a.xl),u=t(389),p=t(392),m=t(393),f=t(55),d=t(394),h=t.n(d);function b(){var e=Object(r.a)(["\n  list-style: none;\n  padding: 0;\n  margin: 0;\n\n  > li {\n    font-size: 1em;\n    line-height: 1.25em;\n    float: right;\n    padding: 0 0 0 1.5em;\n\n    @media "," {\n      font-size: 1.25em;\n      line-height: 1.25em;\n    }\n\n    a {\n      color: ",";\n\n      &:hover {\n        color: ",";\n      }\n\n      &.active {\n        border-bottom: 2px solid ",";\n      }\n    }\n  }\n"]);return b=function(){return e},e}function g(){var e=Object(r.a)(["\n  font-size: 1em;\n  line-height: 1.25em;\n  margin: 0;\n  white-space: nowrap;\n\n  @media "," {\n    font-size: 1.25em;\n    line-height: 1.25em;\n  }\n\n  @media "," {\n    display: none;\n  }\n"]);return g=function(){return e},e}function x(){var e=Object(r.a)(["\n  height: 32px;\n  min-height: 32px; /* IE fix */\n  max-width: 32px; /* IE fix */\n  margin: 0 5px 0 0;\n  border: 0;\n\n  @media "," {\n    margin: 0 5px 0 0;\n  }\n"]);return x=function(){return e},e}function k(){var e=Object(r.a)(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  color: ",";\n  text-decoration: none;\n  height: 32px; /* IE fix */\n  border-bottom: 0;\n\n  &:hover {\n    color: ",";\n    border-bottom: 0;\n  }\n"]);return k=function(){return e},e}function w(){var e=Object(r.a)(["\n  padding: 1.5em 0 1em 0;\n\n  @media "," {\n    padding: 3em 0 1.5em 0;\n  }\n"]);return w=function(){return e},e}var v=a.c.div(w(),c.b.tabletDesktop),j=Object(a.c)(u.a)(k(),function(e){return e.theme.mainTextColor},function(e){return e.theme.mainTextColor}),y=a.c.img(x(),c.b.tabletDesktop),C=a.c.h1(g(),c.b.tabletDesktop,c.b.mobile),A=a.c.ul(b(),c.b.tabletDesktop,function(e){return e.theme.mainTextColor},function(e){return e.theme.mainTextColor},function(e){return e.theme.mainTextColor}),S=function(){return i.a.createElement(v,null,i.a.createElement(s,null,i.a.createElement(p.a,{justifyContent:"center",alignItems:"center"},i.a.createElement(m.a,{xs:3,sm:6},i.a.createElement(j,{to:"/"},i.a.createElement(y,{src:h.a,alt:"icelam.github.io"}),i.a.createElement(C,null,"icelam.github.io"))),i.a.createElement(m.a,{xs:9,sm:6},i.a.createElement(A,null,i.a.createElement("li",null,i.a.createElement(u.b,{to:f.a.about,activeClassName:"active"},"About")),i.a.createElement("li",null,i.a.createElement(u.b,{to:f.a.home,activeClassName:"active",exact:!0,isActive:function(e,n){return!!(e||n.pathname.indexOf(f.a.projectDetailsRoot)>=0)}},"Projects")))))))};function E(){var e=Object(r.a)(["\n  padding: 1em 0 2em 0;\n  font-size: 0.75em;\n  line-height: 1.5em;\n  color: ",";\n"]);return E=function(){return e},e}var z=a.c.div(E(),function(e){return e.theme.secondaryTextColor}),I=function(){var e=(new Date).getFullYear();return i.a.createElement(z,null,i.a.createElement(s,null,"\xa9 ",e," Ice Lam"))};function T(){var e=Object(r.a)(["\n  padding-top: 15px;\n  padding-bottom: 15px;\n  flex-grow: 1;\n  flex-shrink: 1;\n  flex-basis: auto;\n  min-height: 1px; /* IE Flexbox image resize issue fix - https://github.com/philipwalton/flexbugs/issues/75 */\n"]);return T=function(){return e},e}function B(){var e=Object(r.a)(["\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n"]);return B=function(){return e},e}var N=a.c.div(B()),O=Object(a.c)(s)(T());n.a=function(e){var n=e.children;return i.a.createElement(N,null,i.a.createElement(S,null),i.a.createElement(O,null,n),i.a.createElement(I,null))}},398:function(e,n,t){"use strict";var r=t(399),o=t.n(r),i=t(400),a=t.n(i),c=t(401),l=t.n(c),s=t(402),u=t.n(s),p=t(403),m=t.n(p),f=t(404),d=t.n(f),h=t(405),b=t.n(h),g=t(406),x=t.n(g),k=t(407),w=t.n(k),v=t(408),j=t.n(v),y=t(409),C=t.n(y),A=t(410),S=t.n(A),E=t(411),z=t.n(E),I=t(412),T=t.n(I),B=t(413),N=t.n(B),O=t(414),D=t.n(O),L=t(415),G=t.n(L),R=t(416),J=t.n(R),M=t(417),Q=t.n(M),F=t(418),H=t.n(F);n.a=[{projectId:"chinese-handwriting-recognition",projectName:"Chinese Handwriting Recognition (Google IME API)",projectNameTranslation:"",projectImage:Q.a,projectLink:"https://pinkylam.me/playground/chinese-handwriting-recognition/",githubLink:"https://github.com/icelam/chinese-handwriting-recognition",techStack:["javascript","html","css3","webpack","pwa"],projectDescriptions:'Experiment of Chinese handwriting recognition using Google IME API, which is not released for public use. The API endpoint can be found in the source code of <a href="https://translate.google.com/" target="_blank" rel="noopener noreferrer">Google Translate</a>.<br/><br/>Warning: This project is developed for fun. Please avoid using Google IME API in your production environment as it is not open for public use, and may change at anytime.',screenshots:[H.a]},{projectId:"whatsapp-link-builder",projectName:"WhatsApp Link Builder",projectNameTranslation:"",projectImage:T.a,projectLink:"https://pinkylam.me/generator/whatsapp-link-builder/",githubLink:"https://github.com/icelam/whatsapp-link-builder",techStack:["reactjs","styledcomponent","pwa"],projectDescriptions:'A simple progressive web application which allows you to generate a link that directly opens WhatsApp with pre-defined message or contact number, and you can it share on your websites / social networks.<br/><br/>The reason I created this website was to help my colleagues in the marketing team to generate WhatsApp links used in marketing materials, which includes Facebook posts and QR codes printed on leaflets.<br/><br/>A little secret: I used this tool to generate a link so I can quickly text my Mum when I am going home (I pinned the link on my mobile homescreen).<br/><br/>Built using <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">ReactJS</a> and <a href="https://facebook.github.io/create-react-app/" target="_blank" rel="noopener noreferrer">Create React App</a>.',screenshots:[N.a,D.a]},{projectId:"chinese-lorem-ipsum",projectName:"\u4e2d\u6587\u5047\u5b57\u751f\u6210\u5668",projectNameTranslation:"Chinese Lorem Ipsum Generator",projectImage:b.a,projectLink:"https://pinkylam.me/generator/chinese-lorem-ipsum/",githubLink:"https://github.com/icelam/chinese-lorem-ipsum",techStack:["reactjs","redux","styledcomponent","pwa"],projectDescriptions:'Are you finding placeholer text for use in your graphics, printings and web layouts? Try this Chinese placeholder text Generator! You can generate up to 1000 words of Chinese dummy texts using this simple progressive web application.<br/><br/>Built using <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">ReactJS</a> and <a href="https://facebook.github.io/create-react-app/" target="_blank" rel="noopener noreferrer">Create React App</a>.',screenshots:[x.a]},{projectId:"chatbot-demo",projectName:"Simple Chatbot Demo",projectNameTranslation:"",projectImage:m.a,projectLink:"",githubLink:"https://github.com/icelam/chatbot-demo",techStack:["nodejs","express","reactjs","redux","css3"],projectDescriptions:'I once joked with my old colleague that I want to make a chatbot to answer all his questions, so I can enjoy my vacation to Australia. I spent a week afterwards designing this chatbot and map the FAQs in it.<br/><br/>This project indeed was my first time trying to use <a href="https://expressjs.com" target="_blank" rel="noopener noreferrer">express</a> and <a href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">Redux</a>.',screenshots:[d.a]},{projectId:"anyone-bmi-calculator",projectNameTranslation:"Anyone BMI Calculator",projectName:"\u4efb\u4f55\u4ec1BMI\u8a08\u7b97\u6a5f",projectImage:o.a,projectLink:"https://pinkylam.me/playground/anyone-bmi-calculator/",githubLink:"https://github.com/icelam/anyone-bmi-calculator",techStack:["vuejs","css3","webpack","pwa"],projectDescriptions:'I came up with this idea when I was working on my company project, and the designer came and talked to me about the possibility to make some graphics change based on user\'s age, gender and BMI. Althought the idea was banned due to resources constraints, I transform the technical solution to my personal projects, just for fun.<br/><br/>"\u4efb\u4f55\u4ec1", which his name has the meaning of "Anyone", is a mascot wearing blue all-inclusive tights launched by Hong Kong Fire Service Department. I am using this mascot to represent anybody who are using this BMI calculator!<br/><br/>This simple progressive web application was built using <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">Vue.js</a>.',screenshots:[a.a]},{projectId:"apple-advertisement",projectName:"\u300c\u860b\u679c\u5ee3\u544a\u88fd\u4f5c\u516c\u53f8\u300d\u5ee3\u544a\u751f\u6210\u5668",projectNameTranslation:'"Lucky Advertising Company" TV Commercials Generator',projectImage:l.a,projectLink:"https://pinkylam.me/generator/apple-advertisement/",githubLink:"https://github.com/icelam/apple-advertisement",techStack:["javascript","html","css3","webpack","pwa"],projectDescriptions:'"\u860b\u679c\u5ee3\u544a\u88fd\u4f5c\u516c\u53f8" (Lucky Advertising Company), is famous for putting a <a href="https://www.youtube.com/watch?v=kVv_Q6UbLTQ" target="_blank" rel="noopener noreferrer">TV commercials</a> with video of fireworks as background, and a big yellow text in the middle showing the company name. As its\' style and quality looks so out of step with time, the broadcast has caused a lot of netizens to discuss.<br/><br/>I build this simple progressive web application with HTML canvas and JavaScript (ES6), which combines a GIF file of fireworks with text input by user.',screenshots:[u.a]},{projectId:"christmas2018",projectName:"Christmas Animation using ScrollMagic, GSAP",projectNameTranslation:"",projectImage:G.a,projectLink:"https://pinkylam.me/playground/christmas2018/",githubLink:"https://github.com/icelam/christmas-scroll-animation",techStack:["javascript","html","css3","animation","webpack"],projectDescriptions:'An attemp to make some web animation during my lonely Christmas. Build with <a href="https://scrollmagic.io/" target="_blank" rel="noopener noreferrer">ScrollMagic</a> and <a href="https://greensock.com/gsap" target="_blank" rel="noopener noreferrer">GreenSock Animation Platform</a>.',screenshots:[J.a]},{projectId:"nike-poster-generator",projectName:"Nike Poster Generator",projectNameTranslation:"",projectImage:S.a,projectLink:"https://pinkylam.me/generator/nike/",githubLink:"https://github.com/icelam/nike-poster-generator",techStack:["javascript","html","css3","webpack","pwa"],projectDescriptions:'Discribe this website in one sentense: "Nike Colin Kaepernick ad meme generator".<br/><br/>A simple progressive web application which make use of HTML canvas and JavaScript (ES6) to generates meme with <a href="https://www.google.com/search?tbm=isch&q=Nike%20Colin%20Kaepernick" target="_blank" rel="noopener noreferrer">Nike Colin Kaepernick ad</a> style.',screenshots:[z.a]},{projectId:"hkid-generator",projectName:"HKID Number Generator and Validator",projectNameTranslation:"",projectImage:w.a,projectLink:"https://pinkylam.me/playground/hkid/",githubLink:"https://github.com/icelam/hkid-generator",techStack:["javascript","html","css3","webpack","pwa"],projectDescriptions:"I wrote this simple progressive web application after I heard from my QA colleague complaining about the online tools he uses sometimes cannot generates a correct Hong Kong Identity Card (HKID) number.<br/><br/>This website was written in JavaScript, which generates and validates HKID numbers.",screenshots:[j.a,C.a]}]},399:function(e,n,t){e.exports=t.p+"static/media/anyone-bmi-calculator-thumbnail.00691722.png"},400:function(e,n,t){e.exports=t.p+"static/media/anyone-bmi-calculator-home.f0799743.png"},401:function(e,n,t){e.exports=t.p+"static/media/apple-fireworks-thumbnail.dc79b660.jpg"},402:function(e,n,t){e.exports=t.p+"static/media/apple-fireworks-home.95a4eeaf.png"},403:function(e,n,t){e.exports=t.p+"static/media/chatbot-thumbnail.2b22fbc2.png"},404:function(e,n,t){e.exports=t.p+"static/media/chatbot-home.929032e3.png"},405:function(e,n,t){e.exports=t.p+"static/media/chinese-lorem-ipsum-thumbnail.19e198fc.png"},406:function(e,n,t){e.exports=t.p+"static/media/chinese-lorem-ipsum-home.56d789dc.png"},407:function(e,n,t){e.exports=t.p+"static/media/hkid-generator-thumbnail.f400f32b.png"},408:function(e,n,t){e.exports=t.p+"static/media/hkid-generator-home.c78decfa.png"},409:function(e,n,t){e.exports=t.p+"static/media/hkid-generator-validator.201cd318.png"},410:function(e,n,t){e.exports=t.p+"static/media/nike-poster-generator-thumbnail.0371e9bc.png"},411:function(e,n,t){e.exports=t.p+"static/media/nike-poster-generator-home.5a15f895.png"},412:function(e,n,t){e.exports=t.p+"static/media/whatsapp-link-builder-thumbnail.b12dbf65.png"},413:function(e,n,t){e.exports=t.p+"static/media/whatsapp-link-builder-home.3944c0e8.png"},414:function(e,n,t){e.exports=t.p+"static/media/whatsapp-link-builder-result.8b42b021.png"},415:function(e,n,t){e.exports=t.p+"static/media/christmas2018-thumbnail.7c4d5cfe.png"},416:function(e,n,t){e.exports=t.p+"static/media/christmas2018-home.d33298d2.png"},417:function(e,n,t){e.exports=t.p+"static/media/chinese-handwriting-recognition-thumbnail.43df2e2e.png"},418:function(e,n,t){e.exports=t.p+"static/media/chinese-handwriting-recognition-home.1524036b.png"},423:function(e,n,t){e.exports=t.p+"static/media/top-icon.7cd7380b.svg"},424:function(e,n,t){"use strict";var r=t(429),o=t(48),i=t(1),a=t.n(i),c=t(34),l=t(425),s=t(430);function u(){var e=Object(o.a)(["\n  display: block;\n  position: absolute;\n  margin: 0;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  border: ","px solid;\n  border-image: linear-gradient(",", ",");\n  pointer-events: none;\n"]);return u=function(){return e},e}function p(){var e=Object(o.a)(["\n  position: relative;\n  background-color: ",";\n  border-radius: ","px;\n  color: ",";\n  display: inline-block;\n  box-shadow: none;\n  border: 0;\n  padding: 6px 10px;\n  margin: 0;\n  white-space: nowrap;\n  cursor: pointer;\n  outline: none;\n  font-family: inherit;\n  font-size: inherit;\n  text-align: center;\n\n  &:hover {\n    background-color: ",";\n  }\n\n  &:active, &:focus {\n    outline: none;\n  }\n\n  ::-moz-focus-inner {\n    border: 0;\n  }\n\n  &:disabled {\n    color: ",";\n    background-color: ",";\n\n    &:hover {\n      background-color: ",";\n    }\n  }\n\n  &:before {\n    border-left: ","px solid ",";\n    border-right: ","px solid ",";\n    left: -","px;\n    top: ","px;\n    right: -","px;\n    bottom: ",'px;\n  }\n\n  &:after,&:before {\n    content: "";\n    display: block;\n    position: absolute;\n  }\n\n  &:after {\n    border-top: ',"px solid ",";\n    border-bottom: ","px solid ",";\n    left: ","px;\n    top: -","px;\n    right: ","px;\n    bottom: -","px;\n  }\n"]);return p=function(){return e},e}function m(){var e=Object(o.a)(["\n  margin: 0 ","px;\n"]);return m=function(){return e},e}var f=c.c.div(m(),function(e){return e.theme.pixelSize}),d=c.c.button(p(),function(e){return e.theme.cardBackgroundColor},function(e){return e.theme.pixelSize},function(e){return e.theme.cardTextColor},function(e){return e.theme.buttonHoverBackgroundColor},function(e){return e.theme.buttonDisabledTextBackgroundColor},function(e){return e.theme.buttonDisabledBackgroundColor},function(e){return e.theme.buttonDisabledHoverBackgroundColor},function(e){return e.theme.pixelSize},function(e){return e.theme.cardBorderColor},function(e){return e.theme.pixelSize},function(e){return e.theme.cardBorderColor},function(e){return e.theme.pixelSize},function(e){return e.theme.pixelSize},function(e){return e.theme.pixelSize},function(e){return e.theme.pixelSize},function(e){return e.theme.pixelSize},function(e){return e.theme.cardBorderColor},function(e){return e.theme.pixelSize},function(e){return e.theme.cardBorderColor},function(e){return e.theme.pixelSize},function(e){return e.theme.pixelSize},function(e){return e.theme.pixelSize},function(e){return e.theme.pixelSize}),h=c.c.div(u(),function(e){return e.theme.pixelSize},function(e){return e.theme.cardBorderColor},function(e){return e.theme.cardBorderColor}),b=function(e){var n=e.className,t=e.children,r=Object(s.a)(e,["className","children"]);return a.a.createElement(f,{className:n},a.a.createElement(d,r,t,a.a.createElement(h,null)))},g=t(423),x=t.n(g);function k(){var e=Object(o.a)(["\n  display: block;\n  width: 14px;\n  height: auto;\n  margin: 3px auto 5px auto;\n"]);return k=function(){return e},e}function w(){var e=Object(o.a)(["\n  position: fixed;\n  bottom: 20px;\n  right: ","px;\n  font-size: 0.75em;\n  ","\n"]);return w=function(){return e},e}var v=Object(c.c)(b)(w(),function(e){return-2*e.theme.pixelSize},function(e){return e.show?"":"display: none;"}),j=c.c.img(k()),y=function(){l.animateScroll.scrollToTop({duration:300})};n.a=function(e){var n=(document.documentElement.scrollTop||document.body.scrollTop)>300,t=Object(i.useState)(n),o=Object(r.a)(t,2),c=o[0],l=o[1];return Object(i.useEffect)(function(){var e=function(){l((document.documentElement.scrollTop||document.body.scrollTop)>300)};return window.addEventListener("scroll",e,{passive:!0}),function(){return window.removeEventListener("scroll",e,{passive:!0})}},[]),a.a.createElement(v,{onClick:y,show:c},a.a.createElement(j,{src:x.a,alt:"Back to Top"}),"Top")}},439:function(e,n,t){e.exports=t.p+"static/media/website-icon.b30620f7.svg"},440:function(e,n,t){e.exports=t.p+"static/media/github-icon.2842e1c8.svg"},442:function(e,n,t){"use strict";t.r(n);var r=t(48),o=t(1),i=t.n(o),a=t(390),c=t(34),l=t(396);function s(){var e=Object(r.a)(["\n  display: block;\n  position: absolute;\n  margin: 0;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  border: ","px solid;\n  border-image: linear-gradient(",", ",");\n  pointer-events: none;\n"]);return s=function(){return e},e}function u(){var e=Object(r.a)(["\n  width: 100%;\n  display: block;\n"]);return u=function(){return e},e}function p(){var e=Object(r.a)(["\n  position: relative;\n  background-color: ",";\n  display: block;\n  border-radius: ","px;\n  color: ",";\n  width: 100%;\n\n  &:before {\n    border-left: ","px solid ",";\n    border-right: ","px solid ",";\n    left: -","px;\n    top: ","px;\n    right: -","px;\n    bottom: ",'px;\n  }\n\n  &:after,&:before {\n    content: "";\n    display: block;\n    position: absolute;\n  }\n\n  &:after {\n    border-top: ',"px solid ",";\n    border-bottom: ","px solid ",";\n    left: ","px;\n    top: -","px;\n    right: ","px;\n    bottom: -","px;\n  }\n"]);return p=function(){return e},e}function m(){var e=Object(r.a)(["\n  margin: 1em ","px;\n"]);return m=function(){return e},e}var f=c.c.div(m(),function(e){return e.theme.pixelSize}),d=c.c.div(p(),function(e){return e.theme.cardBackgroundColor},function(e){return 2*e.theme.pixelSize},function(e){return e.theme.cardTextColor},function(e){return e.theme.pixelSize},function(e){return e.theme.cardBorderColor},function(e){return e.theme.pixelSize},function(e){return e.theme.cardBorderColor},function(e){return e.theme.pixelSize},function(e){return e.theme.pixelSize},function(e){return e.theme.pixelSize},function(e){return e.theme.pixelSize},function(e){return e.theme.pixelSize},function(e){return e.theme.cardBorderColor},function(e){return e.theme.pixelSize},function(e){return e.theme.cardBorderColor},function(e){return e.theme.pixelSize},function(e){return e.theme.pixelSize},function(e){return e.theme.pixelSize},function(e){return e.theme.pixelSize}),h=c.c.img(u()),b=c.c.div(s(),function(e){return e.theme.pixelSize},function(e){return e.theme.cardBorderColor},function(e){return e.theme.cardBorderColor}),g=function(e){var n=e.src,t=e.alt;return i.a.createElement(f,null,i.a.createElement(d,null,i.a.createElement(h,{src:n,alt:t}),i.a.createElement(b,null)))};function x(){var e=Object(r.a)(["\n  display: block;\n  position: absolute;\n  margin: 0;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  border: ","px solid;\n  border-image: linear-gradient(",", ",");\n  pointer-events: none;\n"]);return x=function(){return e},e}function k(){var e=Object(r.a)(["\n  padding: 0 4px;\n"]);return k=function(){return e},e}function w(){var e=Object(r.a)(["\n  position: relative;\n  background-color: ",";\n  display: inline-block;\n  border-radius: ",'px;\n\n  &:before, &:after {\n    content: "";\n    display: block;\n    position: absolute;\n  }\n\n  &:before {\n    border-left: ',"px solid ",";\n    border-right: ","px solid ",";\n    left: -","px;\n    top: ","px;\n    right: -","px;\n    bottom: ","px;\n  }\n\n  &:after {\n    border-top: ","px solid ",";\n    border-bottom: ","px solid ",";\n    left: ","px;\n    top: -","px;\n    right: ","px;\n    bottom: -","px;\n  }\n"]);return w=function(){return e},e}function v(){var e=Object(r.a)(["\n  margin: 0.5em 6px 0.5em 2px;\n  display: inline-block;\n  font-size: 0.75em;\n  line-height: 1.5em;\n  color: ",";\n  vertical-align: middle;\n"]);return v=function(){return e},e}var j=c.c.span(v(),function(e){return e.textColor}),y=c.c.span(w(),function(e){return e.bgColor},function(e){return e.theme.pixelSize},function(e){return e.theme.pixelSize},function(e){return e.bgColor},function(e){return e.theme.pixelSize},function(e){return e.bgColor},function(e){return e.theme.pixelSize},function(e){return e.theme.pixelSize},function(e){return e.theme.pixelSize},function(e){return e.theme.pixelSize},function(e){return e.theme.pixelSize},function(e){return e.bgColor},function(e){return e.theme.pixelSize},function(e){return e.bgColor},function(e){return e.theme.pixelSize},function(e){return e.theme.pixelSize},function(e){return e.theme.pixelSize},function(e){return e.theme.pixelSize}),C=c.c.div(k()),A=c.c.div(x(),function(e){return e.theme.pixelSize},function(e){return e.bgColor},function(e){return e.bgColor}),S=function(e){var n=e.children,t=e.bgColor,r=e.textColor;return i.a.createElement(j,{bgColor:t,textColor:r},i.a.createElement(y,{bgColor:t},i.a.createElement(C,null,n),i.a.createElement(A,{bgColor:t})))},E=t(392),z=t(393),I=t(424),T=t(55),B=t(398),N={reactjs:{bgColor:"#61dafb",textColor:"#ffffff",text:"ReactJS"},styledcomponent:{bgColor:"#db7093",textColor:"#ffffff",text:"Styled component"},pwa:{bgColor:"#580ec3",textColor:"#ffffff",text:"PWA"},nodejs:{bgColor:"#43853d",textColor:"#ffffff",text:"Node.js"},express:{bgColor:"#259dff",textColor:"#ffffff",text:"express"},redux:{bgColor:"#764abc",textColor:"#ffffff",text:"Redux"},css3:{bgColor:"#1a70b5",textColor:"#ffffff",text:"CSS3"},vuejs:{bgColor:"#4fc08d",textColor:"#ffffff",text:"Vue.js"},webpack:{bgColor:"#62b1d8",textColor:"#ffffff",text:"Webpack"},javascript:{bgColor:"#fbc700",textColor:"#ffffff",text:"JavaScript"},html:{bgColor:"#de4b25",textColor:"#ffffff",text:"HTML"},animation:{bgColor:"#666666",textColor:"#ffffff",text:"Animation"}},O=function(e){return{__html:e}},D=t(439),L=t.n(D),G=t(440),R=t.n(G);function J(){var e=Object(r.a)(["\n  margin: 2em 0;\n  font-size: 0.75em;\n  line-height: 1.5em;\n  color: ",";\n\n  & > div {\n    margin: 0 0 0.25em 0;\n    display: flex;\n    justify-content: flex-start;\n    align-items: flex-start;\n\n    &:last-of-type {\n      margin: 0;\n    }\n\n    img {\n      width: 16px;\n      height: 16px;\n      min-width: 16px;\n      max-height: 16px;\n      vertical-align: middle;\n      margin-right: 8px;\n      image-rendering: -webkit-optimize-contrast;\n    }\n\n    a {\n      vertical-align: middle;\n      line-height: 16px;\n      word-break: break-all;\n    }\n  }\n"]);return J=function(){return e},e}function M(){var e=Object(r.a)(["\n  margin-bottom: 0.25em;\n"]);return M=function(){return e},e}var Q=c.c.h1(M()),F=c.c.div(J(),function(e){return e.theme.secondaryTextColor});n.default=function(e){var n=e.match.params.projectId,t=B.a.filter(function(e){return e.projectId===n});if(t.length){var r=t[0],c=r.projectName,s=r.projectNameTranslation,u=r.projectLink,p=r.githubLink,m=r.techStack,f=r.projectDescriptions,d=r.screenshots;return i.a.createElement(o.Fragment,null,i.a.createElement(l.a,null,i.a.createElement(E.a,null,i.a.createElement(z.a,{xs:12},i.a.createElement(Q,null,c,s&&i.a.createElement(o.Fragment,null," (",s,")")),m.map(function(e,n){return i.a.createElement(S,{bgColor:N[e].bgColor,textColor:N[e].textColor,key:n},N[e].text)}),i.a.createElement(F,null,u&&i.a.createElement("div",null,i.a.createElement("img",{src:L.a,alt:"Project Link"}),i.a.createElement("a",{href:u,target:"_blank",rel:"noopener noreferrer"},u)),p&&i.a.createElement("div",null,i.a.createElement("img",{src:R.a,alt:"GitHub Link"}),i.a.createElement("a",{href:p,target:"_blank",rel:"noopener noreferrer"},p))),i.a.createElement("p",{dangerouslySetInnerHTML:O(f)}),i.a.createElement("br",null),d.map(function(e,n){return i.a.createElement(g,{src:e,alt:c,key:n})})))),i.a.createElement(I.a,null))}return i.a.createElement(a.a,{to:T.a.notFound})}}}]);