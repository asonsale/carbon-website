"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[50824],{28399:function(e,t,a){a.d(t,{Z:function(){return w}});var n=a(67294),s=a(88650),i=a.n(s),o=a(1597),A=a(64905),l=a(8878),r=a(75900),d=a.n(r);var c=e=>{let{title:t,theme:a,tabs:s=[]}=e;return n.createElement("div",{className:d()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":s.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var m=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:s}}}=(0,o.useStaticQuery)("1364590287"),{baseUrl:i,subDirectory:A,branch:l}=a||s,r=`${i}/edit/${l}${A}/src/pages${t}`;return i?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:r},"Edit this page on GitHub"))):null},p=a(56328),g=a(51721);let u=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,s=a.split("/").filter(Boolean).slice(-1)[0],A=t.map((e=>{const t=i()(e,{lower:!0,strict:!0}),A=t===s,l=new RegExp(`${s}/?(#.*)?$`),r=a.replace(l,t);return n.createElement("li",{key:e,className:d()({"PageTabs-module--selected-item--aBB0K":A},"PageTabs-module--list-item--024o6")},n.createElement(o.Link,{className:"PageTabs-module--link--Kz-7R",to:`${r}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},A))))))},t}(n.Component);var b=u,k=a(17680),y=a(75387),h=a(50041);var f=e=>{let{date:t}=e;const a=new Date(t);return t?n.createElement(h.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(h.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var w=e=>{let{pageContext:t,children:a,location:s,Title:r}=e;const{frontmatter:d={},relativePagePath:g,titleType:u}=t,{tabs:h,title:w,theme:E,description:v,keywords:B,date:x}=d,{interiorTheme:Q}=(0,y.Z)(),{site:{pathPrefix:N}}=(0,o.useStaticQuery)("2456312558"),C=N?s.pathname.replace(N,""):s.pathname,P=h?C.split("/").filter(Boolean).slice(-1)[0]||i()(h[0],{lower:!0}):"",T=E||Q;return n.createElement(l.Z,{tabs:h,homepage:!1,theme:T,pageTitle:w,pageDescription:v,pageKeywords:B,titleType:u},n.createElement(c,{title:r?n.createElement(r,null):w,label:"label",tabs:h,theme:T}),h&&n.createElement(b,{title:w,slug:C,tabs:h,currentTab:P}),n.createElement(k.Z,{padded:!0},a,n.createElement(m,{relativePagePath:g}),n.createElement(f,{date:x})),n.createElement(p.Z,{pageContext:t,location:s,slug:C,tabs:h,currentTab:P}),n.createElement(A.Z,null))}},17486:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return d},default:function(){return k}});var n=a(45987),s=(a(67294),a(64983)),i=a(28399),o=a(93363),A=a(45749),l=a(72745);const r=["components"],d={},c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",t)},m=c("PageDescription"),p=c("Row"),g=c("Column"),u={_frontmatter:d},b=i.Z;function k(e){let{components:t}=e,a=(0,n.Z)(e,r);return(0,s.kt)(b,Object.assign({},u,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(m,{mdxType:"PageDescription"},(0,s.kt)("p",null,"The Carbon team is committed to helping members of the IBM community be\nsuccessful. Find meetups for leveling up your skills, connecting with your\npeers, and getting reviews on work in progress.")),(0,s.kt)(p,{className:"meetups-list",mdxType:"Row"},(0,s.kt)(g,{colLg:4,colMd:2,mdxType:"Column"},(0,s.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1006px"}},"\n      ",(0,s.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABcRAAAXEQHKJvM/AAACpElEQVQoz42SWWxMYRTHJ0LwIlFLbSEhKW8IHoRIKZ7qSawvwgMvIlQssYRWLYmt9rWxpak2USUVXbWltFUzGB1mOtPpMO3c6W0v7Yy2Mu53fnJnNPHoJP/kOw/f75z/OccWboFwi6B5BL0VHMVC5UWh+jq8uCrU3hJclfDyfj8FR8O8L1H4HBECLTq+5k4iP/qwQkTismmeQSBoHoW9WFF5Sai+BhU5QtWVBNDXNEDuns88PfOdrE2lpCWfIDUpm9zMetQAmKZKAK0ONXcC9qsXPjyCJ0ehPEd484A4zFMnDIazFA6sKWHpmGyWT8wiY8lrai5bHap/O1RIDBoqWlk3N4e7O3VCLgh7JV7M+VxocwhtdsFTAwdWP2P5+FOsnHyCfWmNvL5tlVKWcWwhN+iB3/Hqp/cXMsQ2jobSb/E85FbxcUS6oEcTNG+Mvu9wbGsRi0cfYtmUg2xfWE7JSZOooYh2/7UccgsRHYygib1C52e39RZCXwTdn7BrxhSZ6XbKboTYu/U8M4dtZPbYDSwans3hVBf2xwp70V9gHPpF6PJDREssycotdQegV1f4HQPU5IXpcPdT+qiB0/sfciGzgNysOqru6LS7TNqbzYRl62PYO7hthd4qdPqg0ysYQVBK0aPH+J+wGd9EjCDS8RkJOpGvDsRXL9LeLOJvQgWdojpcoto/obxNEfE09sjHVyF5Vx2QxiqvVD91yquyT1Jb8U5Zsg2S/U2Jk6jPg/JziaPOz4D8DOHUIpOseTG2zXjLlmm1pCffJDXpOAtG7WLWyLXMGJHO6KEpJA1NwSaCARgBO0ZzpRhvCzGqLmPU3ZWuosNoxUdEu7TK1M6uiGm75zu6d8x5Y6yfea931fSz0bSpB6MLJmyOzpu4oSdl0kLN0h887tQHsuiN/wAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,s.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"events design playback",title:"events design playback",src:"/static/d62b130977f790b69f75276564553679/72da9/events_design_playback.png",srcSet:["/static/d62b130977f790b69f75276564553679/7fc1e/events_design_playback.png 288w","/static/d62b130977f790b69f75276564553679/a5df1/events_design_playback.png 576w","/static/d62b130977f790b69f75276564553679/72da9/events_design_playback.png 1006w"],sizes:"(max-width: 1006px) 100vw, 1006px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,s.kt)(g,{colLg:7,colMd:5,mdxType:"Column"},(0,s.kt)("h2",null,"Carbon and IDL bi-weekly design playbacks",(0,s.kt)("span",null,"Fridays, 12pm–1pm Central")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"For IBMers only:")," You’ve got some work in progress and you’re ready to open it\nup and share it with a broader audience for honest (and caring!) feedback.\nVerify that you’re working with the grid correctly, that you’re using the right\ncomponents, that you’re using the correct language. Sign up to share, or come\nalong to see other work in progress and learn that way."),(0,s.kt)(p,{mdxType:"Row"},(0,s.kt)(o.Button,{kind:"tertiary",renderIcon:A.GI,href:"https://ec.yourlearning.ibm.com/w3/series/10163237",mdxType:"Button"},"Subscribe")))),(0,s.kt)(p,{className:"meetups-list",mdxType:"Row"},(0,s.kt)(g,{colLg:4,colMd:2,mdxType:"Column"},(0,s.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1006px"}},"\n      ",(0,s.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"55.90277777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABcRAAAXEQHKJvM/AAACjElEQVQozz3Q2W8aZxjFYf7/q6ol1KmTxk5Su4mqumAwBuQkVd3YYGPMMmEWYIYZZmHf8ar3V82g5uLo+64enfPG3o+yvHGT7AdpXttHvOuf8No7Iml/oW16dByfVtelZblc3yrU6k3OtAG5APKukHOFvMf3xH51/uJgmovyNkjzcXnG20mGj+opTdWkquh0bB+11Y3+rY4tn42xnPoRKIUA0uYdSWNJqr0mFrb7fVHgt3GWEH8/PGF/lOZDM0uzGYIatW869W+GmE5Ax3TkS2sLnjpPctJ94Eidceo8bxvueSkO53kOZ/lo8hsnuW2o5VBUE83qUazUubptoHYcaagGZ/qQwgA5bq047mzIWPffp0eTD+eFCAyz76XZG2dIKTlmFYtFw2ZatZhUTVk0HOaVtpzXfTm2n0kZSwnvWNjOJ+9C7F0/xZ53xOH0hA+LHAejDAnzgELrEygDnms97m4s7itdear1oOHLpTKQP+1HMvajZD3IesL/b+yVf8OL9lfixjk/qn8T1/4hEZRJN695qtjMr1vMSgarsimrsslDxRLlti8X2j2l5lr+rc+5UJZ8bSwoqRtiO8GQuOOScAN+GYzZcQPiwzF/VFVWRYPZlcHiqkX/vCGb8AQlXdzyQAY6DHXEqqwwbxa0yzM85ZHYT5bJy37AC9tmdzjgpefyQ88mpXa2YMlgc2MxvdRkWtTZlNviVyfiGRDoSPt2iVnb0G3cYysPxBJu2M5lx/dJ9Hrs9vv8PJ2Q0kxWRZ3Vjcmq3InAddlkctEUq+RJp3aHWV2Jdj3F14S+QZRYvNtldzjk1WQSgQnbJjEekVTbrItGBEbQpSZh03CyVxlJEAI6YtbWuM3nsG0E/wd6pQFlJkKZGwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,s.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"meetups data viz",title:"meetups data viz",src:"/static/d87642d839f87e1d934557b92b51a1bc/72da9/meetups_data_viz.png",srcSet:["/static/d87642d839f87e1d934557b92b51a1bc/7fc1e/meetups_data_viz.png 288w","/static/d87642d839f87e1d934557b92b51a1bc/a5df1/meetups_data_viz.png 576w","/static/d87642d839f87e1d934557b92b51a1bc/72da9/meetups_data_viz.png 1006w"],sizes:"(max-width: 1006px) 100vw, 1006px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,s.kt)(g,{colLg:7,colMd:5,mdxType:"Column"},(0,s.kt)("h2",null,"Data visualization weekly playbacks",(0,s.kt)("span",null,"Wednesdays, 11am–12pm Central")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"For IBMers only:")," Are you designing a product with data visualization needs?\nThese weekly playback calls are a chance for us to have dataviz stakeholders\npresent, discuss design explorations, gather feedback and business unit\nrequirements, and determine next steps on requested components or functionality."),(0,s.kt)(p,{mdxType:"Row"},(0,s.kt)(o.Button,{kind:"tertiary",renderIcon:l.ol,onClick:()=>window.location.href="mailto:iliadm@ca.ibm.com",mdxType:"Button"},"Email us")))),(0,s.kt)(p,{className:"meetups-list",mdxType:"Row"},(0,s.kt)(g,{colLg:4,colMd:2,mdxType:"Column"},(0,s.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,s.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"55.90277777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAACXklEQVQoz22Sy0uUURiHv4YsrDDSLkYIgomk5bVSC2zG0fFWZF7LGyoZUVFDkeYlo3JmHG+bxCACzX8h0E2rglLTGXXG+TRrZy4icNw41OJ94nPMRmnxcM7ZPLy/33mVd8vC+x8wtgLjXhhf9TMRwEcv9Hrg2YxgmYWObVhc0DEDTx2C8uEnDDt81A0sU9P/nbLeJa72baW8b4mS178pHYLSQdlC2ZBw+ZVwc0SwukDRpnn+dgVFP+UnbQIl/fPW89wkeRYf1QNw7YVQ0e9Hu1e/FApsQtGQYPeA8skLtlEvin4aXY6TneVudlfMEVzuJqjYxZFqD+FVKmdb1zB1g7FTyLJDVqefnG5IbReKhwOE1tFVFKObHSYnIbUqByo9HK3ycLBoFsUwhS7byfl2H7k9kG0XTF2Q0wUmO+T1QLomfLMhHP87odGFkjlFWJmbiPoFIurniWz4Qli5G8XoJMbsI6kVEpqF+GbhVJOQ2CIktwnH7wlXhrYIV1Gy5tY73F/kIvrWItF3vhJz9xvHaucJr1kg4dEvDFbQW4TUJ0Jco5BpEww2Ibk5QDimRR7xomS61iPrStyElrpIuKFyot5DyEUnwfkzJDb51uPldAkZHf7ptHduN6S1B3zKWECHislJaMM8p+8vEnddJbZBJaJWZV+hi/iHPvJ7/yPc6HBTqK3NZof6KaLqVM6YF9lbMM2hSpXDlR525c8SeXuNlMeQ1CKcbBSizEJyq5DSJkSbhcLB7ZE1odFBUL62PtPosh3suTSDkjGJoncQ+8CHwQYXOv51aLAKequQFNDhH9/BWlHK7Pg8AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,s.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"events insiders",title:"events insiders",src:"/static/d58e62dd1d241e9988c10ea8313bc34b/3cbba/events_insiders.png",srcSet:["/static/d58e62dd1d241e9988c10ea8313bc34b/7fc1e/events_insiders.png 288w","/static/d58e62dd1d241e9988c10ea8313bc34b/a5df1/events_insiders.png 576w","/static/d58e62dd1d241e9988c10ea8313bc34b/3cbba/events_insiders.png 1152w","/static/d58e62dd1d241e9988c10ea8313bc34b/0b124/events_insiders.png 1728w","/static/d58e62dd1d241e9988c10ea8313bc34b/0c3f5/events_insiders.png 1856w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,s.kt)(g,{colLg:7,colMd:5,mdxType:"Column"},(0,s.kt)("h2",null,"Carbon Office Hours"),(0,s.kt)("p",null,"A once a sprint meeting for teams building with Carbon to ask questions, learn\nabout best practices, and bring up things the Carbon team can do to make their\njobs easier."),(0,s.kt)(p,{mdxType:"Row"},(0,s.kt)(o.Button,{kind:"tertiary",renderIcon:A.GI,href:"https://ec.yourlearning.ibm.com/w3/series/10289694?layout=grid",mdxType:"Button"},"Subscribe")))),(0,s.kt)(p,{className:"meetups-list",mdxType:"Row"},(0,s.kt)(g,{colLg:4,colMd:2,mdxType:"Column"},(0,s.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"928px"}},"\n      ",(0,s.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"55.90277777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAUA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQD/2gAMAwEAAhADEAAAAak1E2U4GT//xAAaEAACAwEBAAAAAAAAAAAAAAABAgMRMgQz/9oACAEBAAEFAneg8thZgR0Zfzjz/8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQMBAT8BZ//EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAgBAgEBPwGNf//EABwQAAIABwAAAAAAAAAAAAAAAAABAhAhIjFBYf/aAAgBAQAGPwKHrN2srkQpf//EAB0QAAICAQUAAAAAAAAAAAAAAAABEUEhMWFxscH/2gAIAQEAAT8hoGhkhmnO2xdeVqyPDdx54fTvP//aAAwDAQACAAMAAAAQoM//xAAXEQEBAQEAAAAAAAAAAAAAAAARAQAx/9oACAEDAQE/EBJDuHf/xAAXEQADAQAAAAAAAAAAAAAAAAAAASER/9oACAECAQE/EKb0g//EAB8QAQACAQQDAQAAAAAAAAAAAAERIQAxUZGhQWHR8f/aAAgBAQABPxASeIoTU/mBPyoUrVxqLPGL1J7jdBtjAUi6FOzHWtqnn9xpA0ln/9k=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,s.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"events pinup",title:"events pinup",src:"/static/0569ff9b217fcdc4d31b6b999b50d818/48ff9/events_pinup.jpg",srcSet:["/static/0569ff9b217fcdc4d31b6b999b50d818/69549/events_pinup.jpg 288w","/static/0569ff9b217fcdc4d31b6b999b50d818/473e3/events_pinup.jpg 576w","/static/0569ff9b217fcdc4d31b6b999b50d818/48ff9/events_pinup.jpg 928w"],sizes:"(max-width: 928px) 100vw, 928px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,s.kt)(g,{colLg:7,colMd:5,mdxType:"Column"},(0,s.kt)("h2",null,"Design pin-ups",(0,s.kt)("span",null,"Contact us to schedule")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"For IBMers only:")," Put your screens up in MURAL and step through the flow and\npage designs with the Carbon designers. Great for assessing the overall flow,\npage layouts, the best choices and use of components, content—everything from\nthe big picture to the smallest detail! Usually two or more hours."),(0,s.kt)(p,{mdxType:"Row"},(0,s.kt)(o.Button,{kind:"tertiary",renderIcon:l.ol,onClick:()=>window.location.href="mailto:carbon@us.ibm.com",mdxType:"Button"},"Email us")))))}k.isMDXComponent=!0}}]);