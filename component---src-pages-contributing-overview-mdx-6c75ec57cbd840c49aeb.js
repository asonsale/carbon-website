"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[34628],{28399:function(e,t,n){n.d(t,{Z:function(){return v}});var a=n(67294),o=n(88650),r=n.n(o),i=n(1597),s=n(64905),l=n(8878),u=n(75900),c=n.n(u);var m=e=>{let{title:t,theme:n,tabs:o=[]}=e;return a.createElement("div",{className:c()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":o.length,"PageHeader-module--dark-mode--WCeH8":"dark"===n})},a.createElement("div",{className:"cds--grid"},a.createElement("div",{className:"cds--row"},a.createElement("div",{className:"cds--col-lg-12"},a.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var d=e=>{let{relativePagePath:t,repository:n}=e;const{site:{siteMetadata:{repository:o}}}=(0,i.useStaticQuery)("1364590287"),{baseUrl:r,subDirectory:s,branch:l}=n||o,u=`${r}/edit/${l}${s}/src/pages${t}`;return r?a.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},a.createElement("div",{className:"cds--col"},a.createElement("a",{className:"EditLink-module--link--IDrl1",href:u},"Edit this page on GitHub"))):null},p=n(56328),b=n(51721);let h=function(e){function t(){return e.apply(this,arguments)||this}return(0,b.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:n}=this.props,o=n.split("/").filter(Boolean).slice(-1)[0],s=t.map((e=>{const t=r()(e,{lower:!0,strict:!0}),s=t===o,l=new RegExp(`${o}/?(#.*)?$`),u=n.replace(l,t);return a.createElement("li",{key:e,className:c()({"PageTabs-module--selected-item--aBB0K":s},"PageTabs-module--list-item--024o6")},a.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:`${u}`},e))}));return a.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},a.createElement("div",{className:"cds--grid"},a.createElement("div",{className:"cds--row"},a.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},a.createElement("nav",{"aria-label":e},a.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(a.Component);var g=h,k=n(17680),f=n(75387),y=n(50041);var w=e=>{let{date:t}=e;const n=new Date(t);return t?a.createElement(y.X2,{className:"last-modified-date-module--row--XJoYQ"},a.createElement(y.sg,null,a.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var v=e=>{let{pageContext:t,children:n,location:o,Title:u}=e;const{frontmatter:c={},relativePagePath:b,titleType:h}=t,{tabs:y,title:v,theme:N,description:E,keywords:C,date:T}=c,{interiorTheme:A}=(0,f.Z)(),{site:{pathPrefix:P}}=(0,i.useStaticQuery)("2456312558"),x=P?o.pathname.replace(P,""):o.pathname,L=y?x.split("/").filter(Boolean).slice(-1)[0]||r()(y[0],{lower:!0}):"",H=N||A;return a.createElement(l.Z,{tabs:y,homepage:!1,theme:H,pageTitle:v,pageDescription:E,pageKeywords:C,titleType:h},a.createElement(m,{title:u?a.createElement(u,null):v,label:"label",tabs:y,theme:H}),y&&a.createElement(g,{title:v,slug:x,tabs:y,currentTab:L}),a.createElement(k.Z,{padded:!0},n,a.createElement(d,{relativePagePath:b}),a.createElement(w,{date:T})),a.createElement(p.Z,{pageContext:t,location:o,slug:x,tabs:y,currentTab:L}),a.createElement(s.Z,null))}},30707:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return s},default:function(){return b}});var a=n(45987),o=(n(67294),n(64983)),r=n(28399);const i=["components"],s={},l=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},u=l("PageDescription"),c=l("AnchorLinks"),m=l("AnchorLink"),d={_frontmatter:s},p=r.Z;function b(e){let{components:t}=e,n=(0,a.Z)(e,i);return(0,o.kt)(p,Object.assign({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(u,{mdxType:"PageDescription"},(0,o.kt)("p",null,"Interested in contributing to Carbon? This design system is the result of\ncommunity contributions, large and small—of code, design, ideas, and guidance.\nHere’s how you can contribute too.")),(0,o.kt)(c,{mdxType:"AnchorLinks"},(0,o.kt)(m,{mdxType:"AnchorLink"},"Introduction"),(0,o.kt)(m,{mdxType:"AnchorLink"},"Working in the open"),(0,o.kt)(m,{mdxType:"AnchorLink"},"The Carbon community"),(0,o.kt)(m,{mdxType:"AnchorLink"},"Project workflow"),(0,o.kt)(m,{mdxType:"AnchorLink"},"Contributor License Agreement")),(0,o.kt)("h2",null,"Introduction"),(0,o.kt)("p",null,"Carbon is free to use for anybody building a product or website, and the Carbon\ncommunity is always working to make it better. Contributors like you help to\nmake Carbon great, and so we’re glad you’re here."),(0,o.kt)("p",null,"Contributions are not limited to code. We also encourage feedback,\ndocumentation, new designs, and tools."),(0,o.kt)("p",null,"All you need is a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/join"},"public GitHub account")," to get\nstarted. Most contributions begin with a GitHub issue using one of these\ntemplates:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/carbon-design-system/carbon/issues/new?assignees=&labels=type%3A+question+%3Aquestion%3A&template=question.md&title="},"Ask a question")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/carbon-design-system/carbon/issues/new?assignees=&labels=type%3A+bug+%F0%9F%90%9B&template=bug-report.md&title="},"Report a bug")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/carbon-design-system/carbon/issues/new?assignees=&labels=type%3A+enhancement+%F0%9F%92%A1&template=feature-request-or-enhancement.md&title="},"Request a feature"))),(0,o.kt)("h2",null,"Working in the open"),(0,o.kt)("p",null,"Carbon lives on GitHub. All work, discussion, issues, bugs, features,\nimprovements, and comments happen right out in the open where everyone can see.\nAs we mentioned, you’ll need a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/join"},"public GitHub account"),"\nto contribute."),(0,o.kt)("p",null,"If you’re looking for something that we don’t have, or you notice something\ncould be improved, you have two options:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Open an issue for the request.")," We’ll review the issue and get back to you\nwith next steps. If we decide the request should be part of our pipeline,\nwe’ll add it to our roadmap. There are never timeline guarantees for\nrequests, but we’ll do our best to give you an estimate.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Begin the work yourself and contribute it back to Carbon.")," We appreciate\ncomplete contributions but also works in progress. You’re welcome to open an\nissue to surface your work and we’ll weigh in and help where we can."))),(0,o.kt)("p",null,"Regardless of how you choose to contribute, we encourage you to open an issue as\nearly as possible in the process."),(0,o.kt)("p",null,"If working with GitHub sounds like a lot, check out\n",(0,o.kt)("a",{parentName:"p",href:"https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github"},"this free video series"),".\nIt’s one of our favorite resources."),(0,o.kt)("h2",null,"The Carbon community"),(0,o.kt)("h3",null,"Users"),(0,o.kt)("p",null,"Users are members of the community who use Carbon guidelines, assets, and\ntooling. Anyone can be a user, and we encourage users to participate in the\ncommunity as much as possible."),(0,o.kt)("h3",null,"Contributors"),(0,o.kt)("p",null,"Contributors are members of the community who contribute to Carbon in a material\nway. Anyone can be a contributor. In addition to participating as a user, you\ncan also contribute by:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Reporting bugs or missing features through GitHub issues"),(0,o.kt)("li",{parentName:"ul"},"Fixing bugs, adding features, and improving documentation")),(0,o.kt)("h3",null,"Maintainers"),(0,o.kt)("p",null,"Maintainers are members of the community who are committed to the success of\nindividual Carbon projects. In addition to their participation as a contributor,\nmaintainers:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Label, close, and manage GitHub issues"),(0,o.kt)("li",{parentName:"ul"},"Close and merge GitHub pull requests")),(0,o.kt)("h2",null,"Project workflow"),(0,o.kt)("p",null,"Carbon Design System projects typically use a\n",(0,o.kt)("a",{parentName:"p",href:"https://guides.github.com/activities/forking/"},"fork and pull request workflow"),"\nfor contributions. Specific instructions can be found in each project’s GitHub\n",(0,o.kt)("inlineCode",{parentName:"p"},"CONTRIBUTING.md")," file."),(0,o.kt)("h2",null,"Contributor License Agreement"),(0,o.kt)("p",null,"The Carbon core team works for IBM. To accept contributions, we need a signed\nContributor License Agreement (CLA) from you before code contributions can be\nreviewed and merged. If you have questions, please don’t hesitate\nto ",(0,o.kt)("a",{parentName:"p",href:"/help/contact-us"},"reach out"),"."))}b.isMDXComponent=!0}}]);