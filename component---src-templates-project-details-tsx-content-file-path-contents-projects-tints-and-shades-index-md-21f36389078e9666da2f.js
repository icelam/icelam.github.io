(self.webpackChunkicelam_github_io=self.webpackChunkicelam_github_io||[]).push([[602],{2087:function(e,t,o){"use strict";var r=o(7854),n=o(9781),a=o(7045),l=o(7066),f=o(7293),i=r.RegExp,s=i.prototype;n&&f((function(){var e=!0;try{i(".","d")}catch(f){e=!1}var t={},o="",r=e?"dgimsy":"gimsy",n=function(e,r){Object.defineProperty(t,e,{get:function(){return o+=r,!0}})},a={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var l in e&&(a.hasIndices="d"),a)n(l,a[l]);return Object.getOwnPropertyDescriptor(s,"flags").get.call(t)!==r||o!==r}))&&a(s,"flags",{configurable:!0,get:l})},3476:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return w}});var r=o(7294),n=o(2481);function a(e){var t=Object.assign({p:"p",a:"a",img:"img"},(0,n.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.p,null,"I have been planning to write a desktop app using Electron for a while. This Tints and Shades Generator is a great starting point, which it doesn't have a lot of complicated featues."),"\n",r.createElement(t.p,null,'Before I started this project, the only thing on my mind was: "I am bored of writing websites, why not try making desktop apps using JavaScript! It seems cool to do everything in JavaScript!". However, after reading the documentation I discovered that Electron actually wraps Chromium as the rendering engine. That means, I am still writing websites. But this doesn\'t stop me from choosing Electron since I am completely new to it.'),"\n",r.createElement(t.p,null,"While struggling with the setup of React with Electron, I came across ",r.createElement(t.a,{href:"https://lit-element.polymer-project.org/",target:"_blank",rel:"noopener noreferrer"},"Litelement")," which helps you to create fast and lightweight web components. This makes me even more excited. And since every Electron is shipped with Chromium, it solves browser compactability problems."),"\n",r.createElement(t.p,null,'LitElement isn\'t a very mature library with big community, so it is a bit hard to find the "best practices" on the project structure and state management across different components. While open-wc has an ',r.createElement(t.a,{href:"https://open-wc.org/faq/events.html",target:"_blank",rel:"noopener noreferrer"},"article"),' explaining how to manage events in custom components, I found it hard to debug the events, and it complicates the data flow logic. In the end, the application was written in an React like approach, which the application states maintained in the "app.ts" level, and functions uses to alter application state was passed down to the component level. (I didn\'t choose to integrate Redux since I was considering the best practice to use web components in a ',r.createElement(t.a,{href:"https://micro-frontends.org/",target:"_blank",rel:"noopener noreferrer"},"microfrontend")," environment.)"),"\n",r.createElement(t.p,null,"LitElement also comes with limitations like CSS are not minified and cannot apply autoprefixer or CSS polyfills. But I guess it's still acceptable as a browser who supports web components should support most of the CSS3 syntax."),"\n",r.createElement(t.p,null,'It\'s a pity that one of the features I originally designed cannot be completed. I planned to add an eye dropper allowing user can pick colors on screen, but I was stuck on mouse tracking in Node.js so the feature has been put aside, and replaced by the "random color" feature. I hope one day when my skills are strong enough, I can come back and complete it!'),"\n",r.createElement(t.img,{src:"/static/1c65f6f4cf2de7fc48c08d53ac6944b3/feature1.png",alt:"Feature 1"}),"\n","\n","\n",r.createElement(t.img,{src:"/static/0e105b08f5fddbe51596fbc17a69c13a/feature2.png",alt:"Feature 2"}),"\n","\n","\n",r.createElement(t.img,{src:"/static/bc7f5b1395986cb946c49705fe1a9c71/feature3.png",alt:"Feature 3"}),"\n","\n","\n",r.createElement(t.img,{src:"/static/e4b7a162a7b30bfc1579206f93f4323a/feature4.png",alt:"Feature 4"}),"\n","\n","\n",r.createElement(t.img,{src:"/static/1e1b5b1f1874cd3f576f5142d02b9ab6/feature5.png",alt:"Feature 5"}))}var l=function(e){void 0===e&&(e={});var t=Object.assign({},(0,n.ah)(),e.components).wrapper;return t?r.createElement(t,e,r.createElement(a,e)):a(e)},f=o(8334),i=o(1499),s=o(1626),c=o(4888),m=o(2497),h=o(3),p=o.n(h),g=o(2036),d=o.n(g),x=o(6882),b=o.n(x),u=o(5893),v=f.ZP.h1.withConfig({displayName:"projectDetails__ProjectTitle",componentId:"sc-122hgbd-0"})(["margin-bottom:0.5625rem;"]),y=f.ZP.div.withConfig({displayName:"projectDetails__ProjectInfo",componentId:"sc-122hgbd-1"})(["margin:1.6875rem 0;font-size:0.875rem;line-height:1.312m5re;color:var(--color-link);& > div{margin:0 0 0.25rem 0;display:flex;justify-content:flex-start;align-items:flex-start;&:last-of-type{margin:0;}svg{width:1rem;height:1rem;min-width:1rem;max-height:1rem;vertical-align:middle;margin-right:0.5rem;image-rendering:-webkit-optimize-contrast;color:var(--color-main-text);}a,span{vertical-align:middle;line-height:1rem;word-break:break-all;}a:first-child{margin-left 24px;}}"]),C=(0,c.Pf)((0,c.AS)((function(e){var t=e.data,o=e.children,r=(null!=t?t:{}).mdx.frontmatter,n=r.projectName,a=r.projectNameTranslation,l=r.projectLinks,f=r.projectDate,c=r.githubLink,h=r.techStack;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(v,{children:[n,a&&(0,u.jsxs)(u.Fragment,{children:[" ","(",a,")"]})]}),h.map((function(e){return(0,u.jsx)(i.Vp,{$backgroundColor:s.Z[e].bgColor,$textColor:s.Z[e].textColor,children:s.Z[e].text},s.Z[e].text)})),(0,u.jsxs)(y,{children:[f&&(0,u.jsxs)("div",{children:[(0,u.jsx)(b(),{}),(0,u.jsx)("span",{children:new Intl.DateTimeFormat("en-GB",{dateStyle:"full"}).format(new Date(f))})]}),l&&l.map((function(e,t){return(0,u.jsxs)("div",{children:[0===t?(0,u.jsx)(p(),{}):null,(0,u.jsx)("a",{href:e,target:"_blank",rel:"noopener noreferrer",children:e})]},e)})),c&&(0,u.jsxs)("div",{children:[(0,u.jsx)(d(),{}),(0,u.jsx)("a",{href:c,target:"_blank",rel:"noopener noreferrer",children:c})]})]}),(0,u.jsx)(m.Z,{children:o})]})})));function w(e){return r.createElement(C,e,r.createElement(l,e))}},1626:function(e,t){"use strict";t.Z={reactjs:{bgColor:"#61dafb",textColor:"#ffffff",text:"ReactJS"},styledcomponent:{bgColor:"#db7093",textColor:"#ffffff",text:"Styled component"},pwa:{bgColor:"#580ec3",textColor:"#ffffff",text:"PWA"},nodejs:{bgColor:"#43853d",textColor:"#ffffff",text:"Node.js"},express:{bgColor:"#259dff",textColor:"#ffffff",text:"express"},redux:{bgColor:"#764abc",textColor:"#ffffff",text:"Redux"},css3:{bgColor:"#1a70b5",textColor:"#ffffff",text:"CSS3"},vuejs:{bgColor:"#4fc08d",textColor:"#ffffff",text:"Vue.js"},webpack:{bgColor:"#62b1d8",textColor:"#ffffff",text:"Webpack"},javascript:{bgColor:"#fbc700",textColor:"#ffffff",text:"JavaScript"},html:{bgColor:"#de4b25",textColor:"#ffffff",text:"HTML"},animation:{bgColor:"#666666",textColor:"#ffffff",text:"Animation"},materialui:{bgColor:"#1976d2",textColor:"#ffffff",text:"Material-UI"},workbox:{bgColor:"#fb8c00",textColor:"#ffffff",text:"Workbox"},d3js:{bgColor:"#f9a03c",textColor:"#ffffff",text:"D3.js"},php:{bgColor:"#4f5b93",textColor:"#ffffff",text:"PHP"},graphql:{bgColor:"#d64292",textColor:"#ffffff",text:"GraphQL"},pug:{bgColor:"#a86454",textColor:"#ffffff",text:"Pug"},gulp:{bgColor:"#cf4647",textColor:"#ffffff",text:"gulp.js"},webextension:{bgColor:"#1b367a",textColor:"#ffffff",text:"Web Extension"},matterjs:{bgColor:"#f55f5e",textColor:"#ffffff",text:"matter.js"},jest:{bgColor:"#15c213",textColor:"#ffffff",text:"Jest"},storybook:{bgColor:"#ff4785",textColor:"#ffffff",text:"Storybook"},enzyme:{bgColor:"#ff385c",textColor:"#ffffff",text:"Enzyme"},esdoc:{bgColor:"#e55151",textColor:"#ffffff",text:"ESDoc"},typescript:{bgColor:"#3178c6",textColor:"#ffffff",text:"TypeScript"},deno:{bgColor:"#888888",textColor:"#ffffff",text:"Deno"},electron:{bgColor:"#74b1b2",textColor:"#ffffff",text:"Electron"},litelement:{bgColor:"#2196f3",textColor:"#ffffff",text:"LitElement"},webAnimations:{bgColor:"#304a6b",textColor:"#ffffff",text:"Web Animations API"},webAudio:{bgColor:"#e9562f",textColor:"#ffffff",text:"Web Audio API"},python:{bgColor:"#3776ab",textColor:"#ffffff",text:"Python"},serverless:{bgColor:"#fd5750",textColor:"#ffffff",text:"Serverless Framework"},lambda:{bgColor:"#d16311",textColor:"#ffffff",text:"AWS Lambda"}}},6882:function(e,t,o){var r=o(7294);function n(e){return r.createElement("svg",e,[r.createElement("style",{type:"text/css",key:0},"\n\t.st0{fill:currentColor;}\n"),r.createElement("title",{key:1},"Date"),r.createElement("g",{key:2},[r.createElement("path",{className:"st0",d:"M32,10h-2V6h-2V4h-2V2h-4V0H10v2H6v2H4v2H2v4H0v12h2v4h2v2h2v2h4v2h12v-2h4v-2h2v-2h2v-4h2V10z M28,20v4h-2v2\n\t\th-2v2h-4v2h-8v-2H8v-2H6v-2H4v-4H2v-8h2V8h2V6h2V4h4V2h8v2h4v2h2v2h2v4h2v8H28z",key:0}),r.createElement("polygon",{className:"st0",points:"16,6 14,6 14,18 16,18 23,18 23,16 16,16 \t",key:1})])])}n.defaultProps={version:"1.1",id:"Layer_3_xA0_Image_1_",x:"0px",y:"0px",viewBox:"0 0 32 32",style:{enableBackground:"new 0 0 32 32"},xmlSpace:"preserve"},e.exports=n,n.default=n},2036:function(e,t,o){var r=o(7294);function n(e){return r.createElement("svg",e,[r.createElement("style",{type:"text/css",key:0},"\n\t.st0{fill:currentColor;}\n"),r.createElement("title",{key:1},"GitHub"),r.createElement("path",{className:"st0",d:"M30,2V0H2v2H0v28h2v2h28v-2h2V2H30z M12,30v-4H8v-2H6v-2H2v-2h4v2h2v2h4v-2h2v-2h-4v-2H8v-2H6V8h2V4V2h2v2h2v2\n\th10V4h2V2h2v6h2v8h-2v2h-2v2h-4v2h2v8H12z",key:2})])}n.defaultProps={version:"1.1",id:"Layer_3_xA0_Image_1_",x:"0px",y:"0px",viewBox:"0 0 32 32",style:{enableBackground:"new 0 0 32 32"},xmlSpace:"preserve"},e.exports=n,n.default=n},3:function(e,t,o){var r=o(7294);function n(e){return r.createElement("svg",e,[r.createElement("style",{type:"text/css",key:0},"\n\t.st0{fill:currentColor;}\n"),r.createElement("title",{key:1},"Website"),r.createElement("g",{key:2},[r.createElement("path",{className:"st0",d:"M30,3V1H2v2h2v2H2V3H0v26h2v2h28v-2h2V3H30z M12,3v2h-2V3H12z M6,3h2v2H6V3z M2,29V7h28v22H2z",key:0}),r.createElement("rect",{x:"11",y:"25",className:"st0",width:"10",height:"2",key:1}),r.createElement("rect",{x:"9",y:"11",className:"st0",width:"2",height:"2",key:2}),r.createElement("rect",{x:"21",y:"11",className:"st0",width:"2",height:"2",key:3}),r.createElement("polygon",{className:"st0",points:"9,23 9,19 11,19 11,17 9,17 9,13 7,13 7,24 9,24 9,25 11,25 11,23 \t",key:4}),r.createElement("rect",{x:"21",y:"23",className:"st0",width:"2",height:"2",key:5}),r.createElement("polygon",{className:"st0",points:"23,15 21,15 21,13 19,13 19,15 17,15 17,17 19,17 19,19 23,19 23,23 25,23 25,13 23,13 \t",key:6}),r.createElement("polygon",{className:"st0",points:"13,13 11,13 11,17 13,17 13,15 15,15 15,11 21,11 21,9 11,9 11,11 13,11 \t",key:7}),r.createElement("polygon",{className:"st0",points:"13,21 13,23 15,23 15,21 15,19 11,19 11,21 \t",key:8})])])}n.defaultProps={version:"1.1",id:"Layer_3_xA0_Image_1_",x:"0px",y:"0px",viewBox:"0 0 32 32",style:{enableBackground:"new 0 0 32 32"},xmlSpace:"preserve"},e.exports=n,n.default=n}}]);