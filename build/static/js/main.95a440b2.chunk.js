(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{111:function(e,a,t){e.exports=t.p+"static/media/rms.f27da5af.jpg"},112:function(e,a,t){e.exports=t.p+"static/media/quizbee.288825a4.jpg"},113:function(e,a,t){e.exports=t.p+"static/media/coolors.432d7724.jpg"},114:function(e,a,t){e.exports=t.p+"static/media/github_user_stats.07efa94c.jpg"},115:function(e,a,t){e.exports=t.p+"static/media/mern-twitter-clone.156371b9.png"},116:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(14),l=t.n(c),o=(t(78),t(79),t(120)),i=t(121),s=t(17);function m(){return r.a.createElement(o.a,{collapseOnSelect:!0,variant:"dark",expand:"lg",className:"fixed-top",id:"sideNav"},r.a.createElement(o.a.Brand,{onClick:function(){return window.location="/#about"}},r.a.createElement("span",{className:"d-block d-lg-none"},"Sai Kishor"),r.a.createElement("span",{className:"d-none d-lg-block"},r.a.createElement(s.b.img,{className:"img-fluid img-profile rounded-circle mx-auto mb-2",src:"https://icon2.cleanpng.com/20180920/att/kisspng-user-logo-information-service-design-5ba34f886b6700.1362345615374293844399.jpg",alt:"Sai kishor",drag:!0,dragConstraints:{left:0,top:0,right:0,bottom:0},dragElastic:.1}))),r.a.createElement(o.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(o.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(i.a,{className:"mr-auto"},[{name:"About",href:"#about"},{name:"Skills",href:"#skills"},{name:"Portfolio",href:"#portfolio"},{name:"Codepen",href:"#codepen"},{name:"Contact",href:"#contact"}].map((function(e,a){return r.a.createElement(i.a.Link,{href:e.href,key:a},e.name)})))))}function d(e){var a=e.id,t=e.title,n=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"resume-section",id:a},r.a.createElement("div",{className:"resume-section-content"},t&&r.a.createElement("h2",{className:"mb-5"},t),n)),r.a.createElement("hr",{className:"m-0"}))}var p=t(54),u=t.n(p),f=t(19),g=function(e){var a=e.href,t=e.icon;return r.a.createElement("a",{className:"social-icon",href:a,target:"_blank",rel:"noopener noreferrer"},t)};function b(){var e=[{href:"https://www.linkedin.com/in/sai-kishor-407502208/",icon:r.a.createElement(f.d,null)},{href:"https://github.com/Saikishor039",icon:r.a.createElement(f.c,null)},{href:"https://github.com/Saikishor039",icon:r.a.createElement(f.f,null)},{href:"https://github.com/Saikishor039",icon:r.a.createElement(f.b,null)}];return r.a.createElement(d,{id:"about"},r.a.createElement("h1",{className:"mb-0"},"Sai",r.a.createElement("span",{className:"text-primary"},"Kishor")),r.a.createElement("div",{className:"subheading mb-3"},r.a.createElement("a",{href:"mailto:saikishor039@gmail.com"},"saikishor039@gmail.com")),r.a.createElement("p",{className:"lead mb-4"},"Innovative, passionate and hard working certified Web Developer with more than 3 years of experience in Web Design and Web Development. Gained a lot experience in web development, specialized in frontend technologies."),r.a.createElement("div",{className:"btn-group mb-5"},r.a.createElement("button",{className:"btn btn-primary btn-custom py-2 px-5",type:"submit",onClick:function(){return window.open(u.a)}},"Download CV")),r.a.createElement("div",{className:"social-icons"},e.map((function(e,a){var t=e.href,n=e.icon;return r.a.createElement(g,{href:t,icon:n,key:a})}))))}var h=t(21),E=t(8),v=function(e){var a=e.skill,t=a.title,n=a.progress,c=e.secondary,l=void 0!==c&&c;return r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar progress-bar-striped progress-bar-animated ".concat(l?"bg-info":""),role:"progressbar",style:{width:n}},r.a.createElement("span",{className:"text-left pl-2"},t)))},y=t(55),N=t.n(y),w=t(56),j=t.n(w),S=t(36),k=t.n(S),x=t(57),O=t.n(x);k.a.fcRoot(N.a,j.a,O.a);var C=function(e){var a={type:"pie3d",width:"100%",height:"400",dataFormat:"json",dataSource:{chart:{caption:"Languages",decimals:0,pieRadius:"45%",theme:"fusion"},data:e.data}};return r.a.createElement(k.a,a)},T=function(){var e=Object(n.useState)([]),a=Object(E.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)([]),o=Object(E.a)(l,2),i=o[0],s=o[1],m=[{title:"HTML",progress:"90%"},{title:"CSS",progress:"80%"},{title:"Javascript",progress:"65%"},{title:"Python",progress:"35%"},{title:"C Programming",progress:"40%"}],p=[{title:"React.js",progress:"70%"},{title:"Redux",progress:"85%"},{title:"Angular",progress:"70%"},{title:"Photoshop / Figma",progress:"60%"},{title:"Bootstrap",progress:"60%"},{title:"Material-UI",progress:"30%"}];Object(n.useEffect)((function(){fetch("https://api.github.com/users/aacismaharjan/repos?per_page=100").then((function(e){return e.json()})).then((function(e){return c(e)}))}),[]),Object(n.useEffect)((function(){var e=t.reduce((function(e,a){var t=a.language,n=a.stargazers_count;return t?(e[t]?e[t]=Object(h.a)(Object(h.a)({},e[t]),{},{value:e[t].value+1,stars:e[t].stars+1}):e[t]={label:t,value:1,stars:n},e):e}),{}),a=Object.values(e).sort((function(e,a){return a.value-e.value})).slice(0,5);s(a)}),[t]);var u=p,f=m.map((function(e,a){return r.a.createElement("div",{className:"col-md-8 py-1",key:a},r.a.createElement(v,{skill:e}))})),g=u.map((function(e,a){return r.a.createElement("div",{className:"col-md-8 py-1",key:a},r.a.createElement(v,{skill:e,secondary:!0}))})),b=r.a.createElement("div",{className:"col-md-6 py-1"},r.a.createElement(C,{data:i}));return r.a.createElement(d,{id:"skills",title:"Skills"},r.a.createElement("div",{className:"subheading mb-3"},"Coding Languages"),r.a.createElement("div",{className:"row mb-4"},f),r.a.createElement("div",{className:"subheading mb-3"},"Frameworks / Libraries"),r.a.createElement("div",{className:"row mb-4"},g),r.a.createElement("div",{className:"subheading mb-3"},"Languages used as per Github"),r.a.createElement("div",{className:"row mb-4"},b))},L=t(122),M=t(119),F=t(29),A=t.n(F);function R(e){var a=e.card,t=a.img,c=a.title,l=a.desc,o=a.demo,i=a.source,m=Object(n.useState)(!0),d=Object(E.a)(m,2),p=d[0],u=d[1],f={backgroundImage:"url(".concat(t,")")},g=function(){return r.a.createElement(s.a,null,p&&r.a.createElement(s.b.div,{className:"overlay"},r.a.createElement("img",{src:t,onLoad:function(){return setTimeout((function(){return u(!1)}),1e3)},onError:function(){return u(!1)},style:{display:"none"},alt:c}),r.a.createElement("img",{src:A.a,alt:"Loading card..."})))};return r.a.createElement(L.a,{"data-aos":"flip-left"},r.a.createElement("div",{className:"card-thumbnail",style:f},r.a.createElement(g,null)),r.a.createElement(L.a.Body,null,r.a.createElement(L.a.Title,{className:"title"},c),r.a.createElement(L.a.Text,null,l),r.a.createElement("div",{className:"btn-grp"},r.a.createElement(M.a,{href:o,target:"_blank"},"Live Demo"),r.a.createElement(M.a,{href:i,target:"_blank",variant:"secondary"},"Source Code"))))}var H=t(20),W=Object(H.b)((function(e){return{portfolios:e.portfolio.portfolios}}))((function(e){var a=e.portfolios,t=Object(n.useState)(8),c=Object(E.a)(t,2),l=c[0],o=c[1],i=Object(n.useState)([]),s=Object(E.a)(i,2),m=s[0],p=s[1];return Object(n.useEffect)((function(){p(a.slice(0,l))}),[l,a]),r.a.createElement(d,{id:"portfolio",title:"Major Open Source Projects"},r.a.createElement("div",{className:"cards"},m&&m.map((function(e,a){return r.a.createElement(R,{card:e,key:a})}))),r.a.createElement("div",{className:"d-flex justify-content-center"},l<a.length&&r.a.createElement("div",{className:"btn btn-primary mt-5 btn-lg",onClick:function(){return o(l+4)}},"See more")))})),D=t(6),J=function(e){var a=e.id,t=Object(n.useState)(!0),c=Object(E.a)(t,2),l=c[0],o=c[1],i="https://codepen.io/aashish2058/embed/".concat(a,"?theme-id=light&default-tab=result"),m=r.a.createElement(s.a,null,l&&r.a.createElement(s.b.div,{className:"overlay",initial:{scale:0,opacity:0},animate:{scale:1,opacity:1,type:"spring",stiffness:2e3},exit:{scale:2,opacity:0},transition:{duration:.25}},r.a.createElement("img",{src:A.a,alt:"Loading aacismaharjan..."})));return r.a.createElement("div",{className:"codepen-card mb-5","data-aos":"fade-up"},r.a.createElement("iframe",{scrolling:"no",src:i,frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0,title:a,onLoad:function(){return o(!1)}}),m)},_=Object(H.b)((function(e){return{codepens:e.codepen.codepens}}))((function(e){var a=e.codepens,t=Object(n.useState)(1),c=Object(E.a)(t,2),l=c[0],o=c[1],i=Object(n.useState)([]),s=Object(E.a)(i,2),m=s[0],p=s[1];return Object(n.useEffect)((function(){p(a.slice(0,l))}),[l,a]),r.a.createElement(d,{id:"codepen",title:"Codepen"},r.a.createElement("div",{className:"codepen-cards"},m&&m.map((function(e){return r.a.createElement(J,{id:e,key:e})})),r.a.createElement("div",{className:"d-flex justify-content-center"},l<a.length&&r.a.createElement("div",{className:"btn btn-primary mt-5 btn-lg",onClick:function(){return o(l+1)}},"See more"))))})),P=t(59),B=t.n(P),I=(t(92),t(28)),z=t(60),K=t.n(z),q=function(){var e=Object(n.useState)(new FormData),a=Object(E.a)(e,2),t=a[0],c=a[1],l=function(e){c(Object(h.a)(Object(h.a)({},t),{},Object(I.a)({},e.target.name,e.target.value)))};return r.a.createElement(d,{id:"contact",title:"Contact"},r.a.createElement("div",{className:"row justify-content-between"},r.a.createElement("div",{className:"col-md-5 order-last order-lg-first","data-aos":"fade-up"},r.a.createElement("div",{className:"subheading mb-3"},"I'd love to hear from you"),r.a.createElement("form",{name:"contact",method:"POST","data-netlify":"true"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"username"},"Full Name"),r.a.createElement("input",{type:"text",className:"form-control",id:"username",name:"name","aria-describedby":"emailHelp",placeholder:"Enter your name",value:t.name||"",onChange:l})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email address"),r.a.createElement("input",{type:"email",className:"form-control",name:"email",id:"email","aria-describedby":"emailHelp",placeholder:"Enter email",value:t.email||"",onChange:l})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"userMessage"},"Message"),r.a.createElement("textarea",{className:"form-control",id:"userMessage",name:"message",rows:"3",placeholder:"Enter message",value:t.message||"",onChange:l})),r.a.createElement("button",{type:"submit",className:"btn btn-primary",onClick:function(e){e.preventDefault(),t.name&&t.email&&t.message?(alert("Thanks ".concat(t.name,", I will shortly connect with you!")),K.a.post("https://formspree.io/f/xjvpwleg",t,{Accept:"application/json"}),c({})):alert("Something went wrong!")}},"Submit"))),r.a.createElement("div",{className:"col-md-6 mb-5 mb-lg-0","data-aos":"fade-up"},r.a.createElement("div",{className:"subheading mb-3"},"Reach out to me directly"),r.a.createElement("div",{className:"contact-direct"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("div",{className:"item"},r.a.createElement("span",null,r.a.createElement(f.a,null)),r.a.createElement("p",null,"Toronto, Canada"))),r.a.createElement("div",{className:"col-sm-"},r.a.createElement("div",{className:"item"},r.a.createElement("span",null,r.a.createElement(f.e,null)),r.a.createElement("p",null,"+1 647-332-4993"))))),r.a.createElement("div",{className:"contact-map"},r.a.createElement("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184552.57290514093!2d-79.5181438455955!3d43.718155659626014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON!5e0!3m2!1sen!2sca!4v1615228241287!5m2!1sen!2sca",frameBorder:"0",allowFullScreen:"","aria-hidden":"false",title:"Contact Me",tabIndex:"0"})))),r.a.createElement("p",{className:"py-3 m-0 mt-5 text-center text-secondary"},"Made with \u2764 by Sai Kishor"))},G=t(61);var U=function(){return Object(n.useEffect)((function(){B.a.init()}),[]),r.a.createElement(D.c,null,r.a.createElement(D.a,{exact:!0,path:"/"},r.a.createElement(G.a,null,r.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),r.a.createElement("meta",{name:"description",content:"Sai Kishor - Frontend React Web Developer who loves javascript and modern web technologies."}),r.a.createElement("meta",{name:"author",content:"Sai Kishor"}),r.a.createElement("title",null,"Sai Kishor - A Frontend React Web Developer")),r.a.createElement("div",{id:"wrapper"},r.a.createElement(m,null),r.a.createElement(b,null),r.a.createElement(T,null),r.a.createElement(W,null),r.a.createElement(_,null),r.a.createElement(q,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var V=t(35),X=t(16),$=t(64),Q=t(65),Y=t(66),Z=t.n(Y),ee=t(67),ae=t.n(ee),te=(t(111),t(112),t(113),t(68)),ne=t.n(te),re=t(69),ce=t.n(re),le=(t(114),t(115),t(70)),oe=t.n(le),ie=t(71),se=t.n(ie),me={portfolios:[{img:ce.a,title:"Amazon-clone - React, Redux & Firebase",desc:"Developed Amazon-clone web application using React and Firebase",demo:"https://amazon-ca-clone.netlify.app/",source:"https://github.com/Saikishor039/Amazon-clone"},{img:Z.a,title:"Corona Tracker - ReactJS",desc:"It shows the overall corona cases throughout the world, Also presents data in readable diagrams/charts.",demo:"https://covid19-live.netlify.app/",source:"https://covid19-live.netlify.app/"},{img:ne.a,title:"APPLE WATCH - REACTJS TEMPLATE",desc:"Created with highly reusable components, can be updated from remote file.",demo:"https://getwatch.netlify.app/",source:"https://getwatch.netlify.app/"},{img:se.a,title:"Fusion App landing page - HTML & CSS",desc:"Fusion App HTML Template created using HTML, CSS, Bootstrap, JS, Jquery, and other thrid party libraries.",demo:"https://fusion-app-landing-page.netlify.app/",source:"https://fusion-app-landing-page.netlify.app/"},{img:oe.a,title:"Landing Page Template - HTML & CSS",desc:"Landing page template for watch product. Created with HTML, CSS, JS, Jquery, Bootstrap and other production ready libraries.",demo:"https://getwatch.netlify.app/",source:"https://github.com/aacismaharjan/react_landing_page"},{img:ae.a,title:"Hamro Journey - HTML, CSS & JS",desc:"This is simple HTML Template which I have created and won in SXC Web Design Competition 2019.",demo:"https://hyderabadjourney.netlify.app/",source:"https://github.com/Saikishor039/HyderabadJourney"}]},de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me;return e},pe={codepens:["MWyMjqR","MWydyoe","xxEPOdb"]},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe;return e},fe=Object(X.combineReducers)({portfolio:de,codepen:ue}),ge=[Q.a],be=Object(X.createStore)(fe,{},Object($.composeWithDevTools)(X.applyMiddleware.apply(void 0,ge)));l.a.render(r.a.createElement(H.a,{store:be},r.a.createElement(V.a,null,r.a.createElement(U,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},29:function(e,a,t){e.exports=t.p+"static/media/aacismaharjan-loading-logo.90612ea9.svg"},54:function(e,a,t){e.exports=t.p+"static/media/Web devloper_Resume.61b80786.docx"},66:function(e,a,t){e.exports=t.p+"static/media/coronatracker.90eaa978.jpg"},67:function(e,a,t){e.exports=t.p+"static/media/Hyderabadjourney.87ab9e20.png"},68:function(e,a,t){e.exports=t.p+"static/media/getwatch.459985af.jpg"},69:function(e,a,t){e.exports=t.p+"static/media/tempsnip.576020b2.png"},70:function(e,a,t){e.exports=t.p+"static/media/landing_page_template.0bbcde6d.jpg"},71:function(e,a,t){e.exports=t.p+"static/media/app-landingpage.b65312c8.png"},73:function(e,a,t){e.exports=t(116)},79:function(e,a,t){}},[[73,1,2]]]);
//# sourceMappingURL=main.95a440b2.chunk.js.map