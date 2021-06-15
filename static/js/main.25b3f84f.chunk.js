(this["webpackJsonpben-portfolio"]=this["webpackJsonpben-portfolio"]||[]).push([[0],[,,,,,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(1),n=a.n(i),c=a(4),s=a.n(c),o=(a(9),a(2)),r=a.p+"static/media/resume.84444419.pdf",l=(a(10),a(0)),d=function(){return Object(l.jsxs)("div",{className:"nav",children:[Object(l.jsxs)("a",{className:"nav-name",href:"#about",children:["Benedict ",Object(l.jsx)("br",{}),"Tedjokusumo"]}),Object(l.jsxs)("div",{className:"nav-items",children:[Object(l.jsx)("a",{className:"nav-item",href:"#about",children:"About"}),Object(l.jsx)("a",{className:"nav-item",href:"#projects",children:"Projects"}),Object(l.jsx)("a",{className:"nav-item",target:"_blank",rel:"noreferrer",href:r,children:"Resume"})]})]})},h=[{icon:a.p+"static/media/cube.0051db62.png",color:"lightgrey",info:"I've been speed cubing since I was in middle school and even entered a couple of tournaments. My best time to solve a 3x3 is 8.86 seconds!"},{icon:a.p+"static/media/steph.9c8bd4f9.svg",color:"lightblue",info:"Living in the bay, I love basketball and especially the Warriors. Steph Curry is my favorite player (I teared up when they lost the 2016 finals)."},{icon:a.p+"static/media/chess.ca9b971d.png",color:"lightpink",info:"I've been playing chess since I was little and continue to play online everyday. Viswanathan Anand is my favorite chess player!"},{icon:a.p+"static/media/corgi.04fd1930.png",color:"lightgreen",info:"I didn't realize how much I loved dogs until I got my puppy corgi. Her name is Kya and she has been a huge part of my life. She is a good girl!"}],m=a.p+"static/media/basketballHoop.f77ffaf7.svg",b=a.p+"static/media/betterHoop.caaae6a5.svg",u=(a(12),function(e){return Object(l.jsxs)("div",{className:"hoop",id:"hoop",children:[Object(l.jsx)("img",{src:m,style:{top:e.hoopTop},className:"basketball-hoop",alt:"hoop"}),Object(l.jsx)("img",{src:b,style:{top:e.rimTop},className:"basketball-rim",alt:"hoop"})]})}),g=(a(13),function(e){var t=Object(i.useState)(!1),a=Object(o.a)(t,2),n=a[0],c=a[1];return Object(l.jsx)("div",{className:"card",style:{backgroundColor:e.color,width:e.width,height:e.height},onClick:function(){return c(!n)},children:n?e.name?Object(l.jsxs)("div",{className:"card-content-info",style:{textAlign:"left",color:"black"===e.color?"white":"black",fontSize:"black"===e.color?".75em":".9em"},children:[Object(l.jsx)("div",{className:"card-info-title",children:e.realName?e.realName:e.name}),Object(l.jsxs)("div",{className:"card-content-data",children:[Object(l.jsx)("div",{children:e.date}),Object(l.jsx)("div",{children:e.company})]}),Object(l.jsx)("div",{className:"card-info",children:e.info})]}):Object(l.jsx)("div",{className:"card-content-info",style:{fontSize:".7em",padding:"30px 30px 30px 30px",textAlign:"none"},children:e.info}):e.name?Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsx)("div",{className:e.overlay?"img-overlay":""}),Object(l.jsx)("img",{style:{backgroundColor:e.color,width:e.width},src:e.img,alt:e.name}),Object(l.jsx)("div",{className:"card-title",children:e.name})]}):Object(l.jsx)("img",{style:{backgroundColor:e.color,width:e.width,height:e.height},src:e.img,alt:"cube"})})}),p=(a(14),function(){return Object(l.jsxs)("div",{className:"master-container",children:[Object(l.jsx)("div",{className:"intro-container",id:"about",children:Object(l.jsxs)("div",{className:"intro-text",children:[Object(l.jsx)("h1",{children:"My name is Ben"}),Object(l.jsx)("h3",{children:"I'm a..."}),Object(l.jsxs)("div",{className:"facts",children:[Object(l.jsxs)("p",{className:"fact",children:["rising Junior studying ",Object(l.jsx)("b",{style:{color:"blue"},children:"computer science"})," in ",Object(l.jsx)("b",{children:"Dartmouth College"})]}),Object(l.jsxs)("p",{className:"fact",children:[Object(l.jsx)("b",{children:"software engineer"})," experienced in ",Object(l.jsx)("b",{children:"full stack, AR/VR, and mobile app"})," development"]}),Object(l.jsxs)("p",{className:"fact",children:[Object(l.jsx)("b",{children:"Bay Area"})," native who loves creating and designing programs!"]})]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("b",{children:"Click"})," the cards to learn more about me"]}),Object(l.jsx)("div",{className:"intro-cards",children:h.map((function(e,t){return Object(l.jsx)("div",{children:Object(l.jsx)(g,{id:t,img:e.icon,color:e.color,info:e.info,width:"9em",height:"9em"})},t)}))})]})}),Object(l.jsx)(u,{})]})}),j=a.p+"static/media/Betmate.77e8679b.png",f=a.p+"static/media/RaiseTheBarMic.632aa6ff.svg",v=a.p+"static/media/DOC2.e74650dc.png",y=a.p+"static/media/Icon.052c7aff.png",O=[{name:"BetMate",date:"Spring 2021",company:"DALI Lab",icon:j,color:"lightgreen",info:"Place wagers on chess matches! Spectate and bet on individual moves or match outcomes within a chess match. Games include active games in tournaments for betting against grandmasters to archived chess games for ongoing betting fun! Developed with React and hosted through Netlify and AWS Lambda.",width:"34em",height:"15em",overlay:!0},{name:"Raise The Bar",date:"Spring 2021",company:"Hack Dartmouth 2021",icon:f,color:"black",info:"Measure your proficiency at rapping. Given a beat and lyrics, rap as clearly and quickly as you can to receive a score derived from our proficiency algorithm. Compete with your friends by using the built in leaderboard! The platform is built on React, voice input is done using Google\u2019s speech-to-text API and the leaderboard is managed using Firebase.",width:"15em",height:"15em"},{name:"SLSA","real-name":"Sign Language Space Adventure",date:"Summer 2020",company:"DALI Lab",icon:a.p+"static/media/SLAR.8c920f2f.png",color:"lightpink",info:"Learn American Sign Language (ASL)  through a virtual reality program with Oculus Quest\u2019s hand-tracking system. Includes a learning module, glossary, and various game modes to practice sign language. Developed through Unity and C#",width:"24.5em",height:"13em",overlay:!0},{name:"Dartmouth Outing Club",date:"Spring 2020",company:"DALI Lab",icon:v,color:"Dartmouth Outing Club",info:"Browse, create, and sign up for Dartmouth Outing Club trip. This website allows members of the Dartmouth Outing Club to more easily access and organize outdoor trips and the members who sign up. Built using React and hosted through Netlify.",width:"24.5em",height:"13em",overlay:!0},{name:"Zodiac Time",date:"Spring 2020",company:"Independent",icon:y,color:"lightblue",info:"Test your reaction time with this fast-paced IOS tapping game. From the lazy pig to the quick-witted rat, tap quickly to conquer all the zodiacs. Built using Unity, C# and swift.",width:"15em",height:"15em"},{name:"Dartmouth Wifi",date:"Winter 2020",company:"DALI Lab",icon:a.p+"static/media/wifi.b4ec0c4a.png",color:"lightgrey",info:"Report your wifi issues around the Dartmouth campus to improve the multi-million campus-wide upgrade. This allows Dartmouth ITC to view overloaded access points and focus on areas that needs the most upgrading. Built with React.",width:"34em",height:"15em",overlay:!0}],x=(a(15),function(){return Object(l.jsxs)("div",{className:"main-container",id:"projects",children:[Object(l.jsx)("h1",{children:"Projects"}),Object(l.jsxs)("p",{children:[Object(l.jsx)("b",{children:"Click"})," the cards to learn more about my projects"]}),Object(l.jsx)("div",{className:"intro-cards",children:O.map((function(e,t){return Object(l.jsx)(g,{id:t,name:e.name,date:e.date,company:e.company,img:e.icon,color:e.color,info:e.info,height:e.height?e.height:"10em",width:e.width,overlay:e.overlay,realName:null===e||void 0===e?void 0:e["real-name"]})}))})]})}),w=a.p+"static/media/basketball.a78304aa.svg";a(16);var N=function(){var e=Object(i.useState)(!1),t=Object(o.a)(e,2),a=t[0],n=t[1];return window.onscroll=function(){document.getElementById("basketball-ball").style.transform="rotate("+window.pageYOffset/4+"deg)",n(!0)},Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)("div",{className:"App-header",children:[Object(l.jsx)(d,{}),Object(l.jsx)("div",{className:a?"":"scroll-down"}),Object(l.jsxs)("div",{className:"basketball-container",children:[Object(l.jsx)("img",{src:w,id:"basketball-ball",alt:"basketball"}),console.log(window.pageYOffset)]}),Object(l.jsx)(p,{}),Object(l.jsx)(x,{})]})})},k=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,19)).then((function(t){var a=t.getCLS,i=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),i(e),n(e),c(e),s(e)}))};s.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(N,{})}),document.getElementById("root")),k()}],[[17,1,2]]]);
//# sourceMappingURL=main.25b3f84f.chunk.js.map