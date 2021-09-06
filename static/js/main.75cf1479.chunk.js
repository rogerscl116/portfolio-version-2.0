(this["webpackJsonpportfolio-version-2.0"]=this["webpackJsonpportfolio-version-2.0"]||[]).push([[0],{23:function(e){e.exports=JSON.parse('[{"id":1,"name":"Deep Thoughts","image":"https://github.com/rogerscl116/deep-thoughts/raw/main/client/src/deepthoughtshome.jpg","github":"https://github.com/rogerscl116/deep-thoughts/","deploy":"https://deep-thoughts826103.herokuapp.com/","topics":"MongoDB, Express.js, React, Node.js, GraphQL, Apollo Server, JSON Web Tokens, Jwt-decode, Faker, Nodemon"},{"id":2,"name":"Budget Tracker","image":"https://github.com/rogerscl116/budget-tracker-pwa/raw/main/public/images/budget-tracker-screenshot.jpg","github":"https://github.com/rogerscl116/budget-tracker-pwa/","deploy":"https://budget-tracker-pwa6249261.herokuapp.com/","topics":"PWA, IndexedDB, Node.js, Express.js, MongoDB, Mongoose"},{"id":3,"name":"Note Taker","image":"https://github.com/rogerscl116/express-note-taker/raw/main/public/assets/images/note-taker-screenshot1.jpg","github":"https://github.com/rogerscl116/express-note-taker/","deploy":"https://express-note-taker1987.herokuapp.com/","topics":"Express.js, Node.js"},{"id":4,"name":"Pizza Hunt","image":"https://github.com/rogerscl116/pizza-hunt/raw/main/public/assets/images/pizzahunthome.jpg","github":"https://github.com/rogerscl116/pizza-hunt/","deploy":"https://pizza-hunt825219.herokuapp.com/","topics":"MongoDB, Mongoose, Express.js, Node,js"},{"id":5,"name":"Helpful Gaming","image":"https://github.com/rogerscl116/Helpful-Gaming/raw/main/assets/photos/screenshot.jpg","github":"https://github.com/rogerscl116/Helpful-Gaming/","deploy":"https://jhurst16.github.io/Helpful-Gaming/","topics":"HTML, CSS, JavaScript, Server-side APIs, Foundation, jQuery"},{"id":6,"name":"Weather Dashboard","image":"https://github.com/rogerscl116/the-weather-dashboard/raw/main/assets/images/weather-screenshot.jpg","github":"https://github.com/rogerscl116/the-weather-dashboard/","deploy":"https://rogerscl116.github.io/the-weather-dashboard/","topics":"HTML, CSS, JavaScript, Font Awesome, Moment.js"}]')},31:function(e,t,s){},40:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),i=s(20),r=s.n(i),n=(s(31),s(15),s(9)),o=s(3),l=s(21),j=s(26),h=s(22),d=s.n(h),b=s(0);var m=function(){return Object(b.jsx)("div",{className:"home-wrapper",children:Object(b.jsxs)("div",{className:"main-info",children:[Object(b.jsx)("h1",{children:"Hello, I am Charity"}),Object(b.jsx)(d.a,{className:"typed-text",strings:["Web Developer","Web Designer"],typeSpeed:40,backSpeed:60,loop:!0})]})})},p=s.p+"static/media/selfie03.8a1ac37c.JPG";var g=function(){return Object(b.jsxs)("section",{className:"container",children:[Object(b.jsx)("h1",{className:"title",children:"A Little About Me"}),Object(b.jsx)("hr",{}),Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{src:p,className:"selfie",alt:"Charity Rogers"}),Object(b.jsx)("p",{children:"My name is Charity Rogers. I was born in southern Illinois where I graduated from high school and community college. Some of the things I love are family, friends, animals, music, computers, and video games. I started working over 18 years ago, having great experience in customer service and electronics. One of my biggest passions is working on computers so I decided to get into web development."})]})]})};var u=function(e){return Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("div",{className:"img-container",children:Object(b.jsx)("img",{alt:e.name,src:e.image})}),Object(b.jsxs)("div",{className:"content",children:[Object(b.jsx)("p",{className:"project-title",id:"card-title",children:e.name}),Object(b.jsxs)("div",{id:"proj-icons-container",children:[Object(b.jsxs)("p",{id:"topics",children:["[",e.topics,"]"]}),Object(b.jsx)("a",{href:e.github,children:Object(b.jsx)("img",{src:"https://img.icons8.com/fluency/48/000000/github.png",alt:"GitHub Repo",id:"project-icon"})}),Object(b.jsx)("a",{href:e.deploy,children:Object(b.jsx)("img",{src:"https://img.icons8.com/color/48/000000/launchpad--v1.png",alt:"Live Application",id:"project-icon"})})]})]})]})},x=s(23);function O(e){return Object(b.jsx)("div",{className:"wrapper",children:e.children})}var v=function(){return Object(b.jsxs)("section",{className:"container",children:[Object(b.jsxs)("div",{className:"project",children:[Object(b.jsx)("h1",{className:"title",children:"My Work"}),Object(b.jsx)("hr",{})]}),Object(b.jsx)(O,{id:"card-data",children:x.map((function(e){return Object(b.jsx)(u,{image:e.image,name:e.name,github:e.github,deploy:e.deploy,topics:e.topics},e.id)}))})]})},N=s(12),f=s(16),y=s(18);var k=function(){var e=Object(c.useState)({name:"",email:"",message:""}),t=Object(y.a)(e,2),s=t[0],a=t[1],i=Object(c.useState)(""),r=Object(y.a)(i,2),n=r[0],o=r[1],l=s.name,j=s.email,h=s.message;function d(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);o(t?"":"please enter a valid email.")}else e.target.value.length?o(""):o("".concat(e.target.name," is required."));n||a(Object(f.a)(Object(f.a)({},s),{},Object(N.a)({},e.target.name,e.target.value)))}return Object(b.jsxs)("section",{className:"container",children:[Object(b.jsx)("h1",{className:"title",children:"Contact Form"}),Object(b.jsx)("hr",{}),Object(b.jsxs)("form",{className:"justify-content-center",id:"contact-form",children:[Object(b.jsxs)("div",{className:"mt-5",children:[Object(b.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(b.jsx)("input",{className:"form-control",type:"text",name:"name",defaultValue:l,onBlur:d})]}),Object(b.jsxs)("div",{className:"mt-5",children:[Object(b.jsx)("label",{htmlFor:"email",children:"Email Address:"}),Object(b.jsx)("input",{className:"form-control",type:"email",name:"email",defaultValue:j,onBlur:d})]}),Object(b.jsxs)("div",{className:"mt-5",children:[Object(b.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(b.jsx)("textarea",{className:"form-control",name:"message",defaultValue:h,onBlur:d,rows:"7"})]}),n&&Object(b.jsx)("div",{children:Object(b.jsx)("p",{className:"error-text",children:n})}),Object(b.jsx)("div",{className:"mt-5 mb-5",children:Object(b.jsx)("button",{"data-testid":"button",className:"btn btn-outline-dark ",type:"submit",onSubmit:function(e){e.preventDefault()},children:"Submit"})})]})]})};var w=function(){return Object(b.jsxs)("section",{className:"container",children:[Object(b.jsx)("h1",{className:"title",children:"Resume"}),Object(b.jsx)("hr",{}),Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"mt-5",children:[Object(b.jsx)("h2",{className:"top-title",children:"Charity Rogers"}),Object(b.jsx)("ul",{className:"list-unstyled",children:Object(b.jsx)("li",{children:"Enthusiastic web developer eager to contribute to team success through hard work, attention to detail, and excellent organizational skills."})})]})}),Object(b.jsx)("div",{className:"justify-content-center mt-5",children:Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{className:"top-title",children:"Front-end Proficiencies"}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:"HTML, CSS"}),Object(b.jsx)("li",{children:"JavaScript"}),Object(b.jsx)("li",{children:"jQuery"}),Object(b.jsx)("li",{children:"Bootstrap"}),Object(b.jsx)("li",{children:"Handlebars"}),Object(b.jsx)("li",{children:"React"}),Object(b.jsx)("li",{children:"Responsive/Mobile Design"})]})]})}),Object(b.jsx)("div",{className:"justify-content-center mt-5",children:Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{className:"top-title",children:"Back-end Proficiencies"}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:"APIs"}),Object(b.jsx)("li",{children:"Node"}),Object(b.jsx)("li",{children:"Express"}),Object(b.jsx)("li",{children:"MySQL, Sequelize"}),Object(b.jsx)("li",{children:"NoSQL"}),Object(b.jsx)("li",{children:"MongoDB, Mongoose"})]})]})}),Object(b.jsx)("div",{children:Object(b.jsx)("a",{href:"",className:"link",children:"Download Resume"})})]})};var S=function(){return Object(b.jsxs)(n.a,{children:[Object(b.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-dark sticky-top",children:[Object(b.jsx)(n.b,{to:"/",className:"navbar-brand",children:"Charity Rogers"}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)(l.a,{icon:j.a,style:{color:"lightgray"}})}),Object(b.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(b.jsxs)("ul",{className:"navbar-nav ms-auto",children:[Object(b.jsx)("li",{className:"nav-item active",children:Object(b.jsx)(n.b,{to:"/about",className:"nav-link",children:"About Me"})}),Object(b.jsx)("li",{className:"nav-item active",children:Object(b.jsx)(n.b,{to:"/portfolio",className:"nav-link",children:"Portfolio"})}),Object(b.jsx)("li",{className:"nav-item active",children:Object(b.jsx)(n.b,{to:"/contact",className:"nav-link",children:"Contact"})}),Object(b.jsx)("li",{className:"nav-item active",children:Object(b.jsx)(n.b,{to:"/resume",className:"nav-link",children:"Resume"})})]})})]}),Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{path:"/about",children:Object(b.jsx)(g,{})}),Object(b.jsx)(o.a,{path:"/portfolio",children:Object(b.jsx)(v,{})}),Object(b.jsx)(o.a,{path:"/contact",children:Object(b.jsx)(k,{})}),Object(b.jsx)(o.a,{path:"/resume",children:Object(b.jsx)(w,{})}),Object(b.jsx)(o.a,{path:"/",children:Object(b.jsx)(m,{})})]})]})};var C=function(){return Object(b.jsxs)("footer",{className:"footer bg-dark sticky-bottom",children:[Object(b.jsx)("a",{href:"https://github.com/rogerscl116",children:Object(b.jsx)("img",{src:"https://img.icons8.com/color-glass/48/000000/github.png",alt:"Charity's GitHub page",className:"icon"})}),Object(b.jsx)("a",{href:"https://www.linkedin.com/in/charity-rogers-a7115a11a",children:Object(b.jsx)("img",{src:"https://img.icons8.com/fluent/48/000000/linkedin.png",alt:"Charity's LinkedIn page",className:"icon"})}),Object(b.jsx)("a",{href:"https://twitter.com/chazrogerz",children:Object(b.jsx)("img",{src:"https://img.icons8.com/color/48/000000/twitter--v1.png",alt:"Charity's Twitter",className:"icon"})}),Object(b.jsx)("a",{href:"https://icons8.com",children:Object(b.jsx)("img",{src:"https://img.icons8.com/color/48/000000/icons8-new-logo.png",alt:"Icons8 page",className:"icon"})})]})};var M=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(S,{}),Object(b.jsx)(C,{})]})},z=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,41)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;s(e),c(e),a(e),i(e),r(e)}))};r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(M,{})}),document.getElementById("root")),z()}},[[40,1,2]]]);
//# sourceMappingURL=main.75cf1479.chunk.js.map