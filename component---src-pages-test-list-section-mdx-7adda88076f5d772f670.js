"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[87264],{28399:function(e,t,n){n.d(t,{Z:function(){return w}});var a=n(67294),i=n(88650),l=n.n(i),o=n(1597),r=n(64905),s=n(8878),d=n(75900),c=n.n(d);var u=e=>{let{title:t,theme:n,tabs:i=[]}=e;return a.createElement("div",{className:c()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":i.length,"PageHeader-module--dark-mode--WCeH8":"dark"===n})},a.createElement("div",{className:"cds--grid"},a.createElement("div",{className:"cds--row"},a.createElement("div",{className:"cds--col-lg-12"},a.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var m=e=>{let{relativePagePath:t,repository:n}=e;const{site:{siteMetadata:{repository:i}}}=(0,o.useStaticQuery)("1364590287"),{baseUrl:l,subDirectory:r,branch:s}=n||i,d=`${l}/edit/${s}${r}/src/pages${t}`;return l?a.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},a.createElement("div",{className:"cds--col"},a.createElement("a",{className:"EditLink-module--link--IDrl1",href:d},"Edit this page on GitHub"))):null},p=n(56328),g=n(51721);let h=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:n}=this.props,i=n.split("/").filter(Boolean).slice(-1)[0],r=t.map((e=>{const t=l()(e,{lower:!0,strict:!0}),r=t===i,s=new RegExp(`${i}/?(#.*)?$`),d=n.replace(s,t);return a.createElement("li",{key:e,className:c()({"PageTabs-module--selected-item--aBB0K":r},"PageTabs-module--list-item--024o6")},a.createElement(o.Link,{className:"PageTabs-module--link--Kz-7R",to:`${d}`},e))}));return a.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},a.createElement("div",{className:"cds--grid"},a.createElement("div",{className:"cds--row"},a.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},a.createElement("nav",{"aria-label":e},a.createElement("ul",{className:"PageTabs-module--list--xLqxG"},r))))))},t}(a.Component);var k=h,y=n(17680),f=n(75387),v=n(50041);var b=e=>{let{date:t}=e;const n=new Date(t);return t?a.createElement(v.X2,{className:"last-modified-date-module--row--XJoYQ"},a.createElement(v.sg,null,a.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var w=e=>{let{pageContext:t,children:n,location:i,Title:d}=e;const{frontmatter:c={},relativePagePath:g,titleType:h}=t,{tabs:v,title:w,theme:x,description:N,keywords:E,date:T}=c,{interiorTheme:P}=(0,f.Z)(),{site:{pathPrefix:C}}=(0,o.useStaticQuery)("2456312558"),D=C?i.pathname.replace(C,""):i.pathname,L=v?D.split("/").filter(Boolean).slice(-1)[0]||l()(v[0],{lower:!0}):"",M=x||P;return a.createElement(s.Z,{tabs:v,homepage:!1,theme:M,pageTitle:w,pageDescription:N,pageKeywords:E,titleType:h},a.createElement(u,{title:d?a.createElement(d,null):w,label:"label",tabs:v,theme:M}),v&&a.createElement(k,{title:w,slug:D,tabs:v,currentTab:L}),a.createElement(y.Z,{padded:!0},n,a.createElement(m,{relativePagePath:g}),a.createElement(b,{date:T})),a.createElement(p.Z,{pageContext:t,location:i,slug:D,tabs:v,currentTab:L}),a.createElement(r.Z,null))}},36767:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return r},default:function(){return g}});var a=n(45987),i=(n(67294),n(64983)),l=n(28399);const o=["components"],r={},s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},d=s("PageDescription"),c=s("ListSection"),u=s("Column"),m={_frontmatter:r},p=l.Z;function g(e){let{components:t}=e,n=(0,a.Z)(e,o);return(0,i.kt)(p,Object.assign({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(d,{mdxType:"PageDescription"},(0,i.kt)("p",null,"IBM Design principles provide clear criteria for the conception, craftsmanship\nand creativity our brand demands and our clients deserve. They are for designers\nand non-designers alike, anyone authoring or authorizing any form of design on\nbehalf of IBM.")),(0,i.kt)(c,{mdxType:"ListSection"},(0,i.kt)(u,{colMd:2,colLg:4,mdxType:"Column"},(0,i.kt)("h2",null,"Carefully Considered")),(0,i.kt)(u,{colMd:6,colLg:8,mdxType:"Column"},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Design is an exercise of decision-making; experience, judgement,\nresponsibility and timing.")," These softer skills are difficult to distribute.\nBefore we decide to do anything, we must consider its usefulness and utility to\nothers. Then, we must determine how committed we are to enthusiastically explore\nand progressively deliver the full potential of a design."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Is it IBM to do? Is it essential? Is it opinionated?"),(0,i.kt)("li",{parentName:"ul"},"Do we have the resources we need to fully realize a design’s impact and\nintent?"),(0,i.kt)("li",{parentName:"ul"},"Have we removed everything gratuitous?"),(0,i.kt)("li",{parentName:"ul"},"Does an execution respect the time being asked for to experience it?")))),(0,i.kt)(c,{mdxType:"ListSection"},(0,i.kt)(u,{colMd:2,colLg:4,mdxType:"Column"},(0,i.kt)("h2",null,"Uniquely Unified")),(0,i.kt)(u,{colMd:6,colLg:8,mdxType:"Column"},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"In order to guide, continuity and creativity must co-exist in design.")," Both\nof these qualities must be recognizable. Successful systems require both fixed\nand fluid elements of expression. The elements that bind all experiences are\nessential to providing a unified look, feel and tone. The innovative ways in\nwhich we use these elements delivers distinction and uniqueness."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Are we delivering recognizable, repeatable, reusable solutions?"),(0,i.kt)("li",{parentName:"ul"},"Does solving one problem shorten the distance to another solution?"),(0,i.kt)("li",{parentName:"ul"},"If you covered up our logo or name, would you identify an execution as being\ndesigned by IBM?"),(0,i.kt)("li",{parentName:"ul"},"Does one experience family well, reinforce and support another, side-by-side?")))),(0,i.kt)(c,{mdxType:"ListSection"},(0,i.kt)(u,{colMd:2,colLg:4,mdxType:"Column"},(0,i.kt)("h2",null,"Expertly Executed")),(0,i.kt)(u,{colMd:6,colLg:8,mdxType:"Column"},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Everything communicates, both the things we do and the things we don’t do."),"\nThe care and craft we put into every experience is equal to any confidence or\nconsideration we should expect in return. Every execution of IBM should exude\nexpertise. This extends to the partners we choose to work with. We embrace the\nbest of the best. And we never limit the impact of our ideas to our own\nabilities to deliver completely our design intent."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Can an experience be improved? If so, keep exploring."),(0,i.kt)("li",{parentName:"ul"},"Are we working with the right talent, team or timeframe?"),(0,i.kt)("li",{parentName:"ul"},"Are we doing more with less?"),(0,i.kt)("li",{parentName:"ul"},"Have we left any detail overlooked?"),(0,i.kt)("li",{parentName:"ul"},"Can you feel the care and craft put into the experience?")))),(0,i.kt)(c,{mdxType:"ListSection"},(0,i.kt)(u,{colMd:2,colLg:4,mdxType:"Column"},(0,i.kt)("h2",null,"Positively Progressive")),(0,i.kt)(u,{colMd:6,colLg:8,mdxType:"Column"},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"To guide is to lead.")," We are a Company with a history of firsts, including\n‘good design’. We are forward thinkers, futurists. We believe in and are\ndedicated to advancing the world around us, positively, progressively. Every\ndesign should present these qualities."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Think ahead. Is it additive or advancing?"),(0,i.kt)("li",{parentName:"ul"},"Does it communicate confidence and positivity?"),(0,i.kt)("li",{parentName:"ul"},"What is ingenious or innovative about the experience?"),(0,i.kt)("li",{parentName:"ul"},"Have we removed all friction or obstacles to understanding or usability?"),(0,i.kt)("li",{parentName:"ul"},"Does it render the previous permanently replaced?"),(0,i.kt)("li",{parentName:"ul"},"Does it give more than it takes?")))))}g.isMDXComponent=!0}}]);