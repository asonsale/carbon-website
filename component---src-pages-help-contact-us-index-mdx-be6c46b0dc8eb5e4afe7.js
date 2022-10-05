"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[14985],{28399:function(e,t,a){a.d(t,{Z:function(){return w}});var n=a(67294),s=a(88650),r=a.n(s),o=a(1597),l=a(64905),i=a(8878),c=a(75900),m=a.n(c);var u=e=>{let{title:t,theme:a,tabs:s=[]}=e;return n.createElement("div",{className:m()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":s.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var p=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:s}}}=(0,o.useStaticQuery)("1364590287"),{baseUrl:r,subDirectory:l,branch:i}=a||s,c=`${r}/edit/${i}${l}/src/pages${t}`;return r?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},h=a(56328),d=a(51721);let b=function(e){function t(){return e.apply(this,arguments)||this}return(0,d.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,s=a.split("/").filter(Boolean).slice(-1)[0],l=t.map((e=>{const t=r()(e,{lower:!0,strict:!0}),l=t===s,i=new RegExp(`${s}/?(#.*)?$`),c=a.replace(i,t);return n.createElement("li",{key:e,className:m()({"PageTabs-module--selected-item--aBB0K":l},"PageTabs-module--list-item--024o6")},n.createElement(o.Link,{className:"PageTabs-module--link--Kz-7R",to:`${c}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},l))))))},t}(n.Component);var g=b,k=a(17680),f=a(75387),y=a(50041);var N=e=>{let{date:t}=e;const a=new Date(t);return t?n.createElement(y.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(y.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var w=e=>{let{pageContext:t,children:a,location:s,Title:c}=e;const{frontmatter:m={},relativePagePath:d,titleType:b}=t,{tabs:y,title:w,theme:v,description:E,keywords:T,date:C}=m,{interiorTheme:P}=(0,f.Z)(),{site:{pathPrefix:x}}=(0,o.useStaticQuery)("2456312558"),D=x?s.pathname.replace(x,""):s.pathname,q=y?D.split("/").filter(Boolean).slice(-1)[0]||r()(y[0],{lower:!0}):"",L=v||P;return n.createElement(i.Z,{tabs:y,homepage:!1,theme:L,pageTitle:w,pageDescription:E,pageKeywords:T,titleType:b},n.createElement(u,{title:c?n.createElement(c,null):w,label:"label",tabs:y,theme:L}),y&&n.createElement(g,{title:w,slug:D,tabs:y,currentTab:q}),n.createElement(k.Z,{padded:!0},a,n.createElement(p,{relativePagePath:d}),n.createElement(N,{date:C})),n.createElement(h.Z,{pageContext:t,location:s,slug:D,tabs:y,currentTab:q}),n.createElement(l.Z,null))}},21051:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return d}});var n=a(45987),s=(a(67294),a(64983)),r=a(28399);const o=["components"],l={},i=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",t)},c=i("PageDescription"),m=i("AnchorLinks"),u=i("AnchorLink"),p={_frontmatter:l},h=r.Z;function d(e){let{components:t}=e,a=(0,n.Z)(e,o);return(0,s.kt)(h,Object.assign({},p,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(c,{mdxType:"PageDescription"},(0,s.kt)("p",null,"Have a question about our design system? The Carbon team is here to help you.\nBefore you start, be sure to check out the following resources to see if we’ve\nalready got your topic covered.")),(0,s.kt)(m,{mdxType:"AnchorLinks"},(0,s.kt)(u,{mdxType:"AnchorLink"},"Check existing resources"),(0,s.kt)(u,{mdxType:"AnchorLink"},"Provide a suggestion or contribution"),(0,s.kt)(u,{mdxType:"AnchorLink"},"Start a new discussion")),(0,s.kt)("h2",null,"Check existing resources"),(0,s.kt)("h3",null,"Carbon website"),(0,s.kt)("p",null,"As a first step, it’s always good to explore the content on this website. The\nsite is comprehensive and most of the guidelines and components are well\ndocumented."),(0,s.kt)("h3",null,"Frequently asked questions"),(0,s.kt)("p",null,"Answers to the most common questions about the design system can be found in the\n",(0,s.kt)("a",{parentName:"p",href:"faqs"},"Carbon FAQs"),"."),(0,s.kt)("h2",null,"Provide a suggestion or contribution"),(0,s.kt)("p",null,"The Carbon core team provides support for users of the design system. Find the\nuse case below that most closely matches your own for the quickest response."),(0,s.kt)("h3",null,"GitHub issues"),(0,s.kt)("p",null,"If you have a bug report, suggestion, or general feedback, please create a\nGitHub issue."),(0,s.kt)("h4",null,"Design issues"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/carbon-design-system/carbon-design-kit/issues/new"},"Design kit")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/carbon-design-system/carbon-icons/issues/new"},"Icons")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/carbon-design-system/carbon-website/issues/new/choose"},"Website")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/carbon-design-system/carbon/issues/new/choose"},"Components")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/carbon-design-system/carbon/issues/new/choose"},"Elements")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/carbon-design-system/carbon-charts/issues/new"},"Charts")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/carbon-design-system/issue-tracking/issues/new"},"Everything else"))),(0,s.kt)("h4",null,"Code issues"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/carbon-design-system/carbon/issues/new/choose"},"@carbon/react")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/IBM/carbon-components-angular/issues/new"},"carbon-components-angular")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/carbon-design-system/carbon/issues/new/choose"},"carbon-components-vanilla")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/carbon-design-system/carbon-components-vue/issues/new"},"carbon-components-vue")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/carbon-design-system/carbon-charts/issues/new"},"carbon-charts"))),(0,s.kt)("h3",null,"GitHub pull requests"),(0,s.kt)("p",null,"If you have a specific fix or a contribution, you can generate a pull request in\nthe appropriate Carbon repo."),(0,s.kt)("h2",null,"Start a new discussion"),(0,s.kt)("h3",null,"Discord"),(0,s.kt)("p",null,"Come chat and get support from Carbon maintainers and fellow community members\non our ",(0,s.kt)("a",{parentName:"p",href:"https://discord.gg/SYjvP8epkM"},"Discord server"),"."),(0,s.kt)("h3",null,"Slack channels"),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"For internal IBM users only.")," The Carbon core team maintains the following\nchannels and will provide support as time permits."),(0,s.kt)("p",null,"Try searching the Slack channel for your topic first. Slack’s filtering feature\nwill return more targeted and relevant results. For instance, if you have a\ntechnical question about the ",(0,s.kt)("inlineCode",{parentName:"p"},"DataTable")," component, you could search “DataTable”\nin Slack and then filter by the #carbon-components channel."),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Tip: You can start a new search directly from the message box using the ",(0,s.kt)("inlineCode",{parentName:"em"},"/s"),"\nslash command.")),(0,s.kt)("p",null,"For designer questions:\n",(0,s.kt)("a",{parentName:"p",href:"https://ibm-studios.slack.com/messages/C0M053VPT/"},"#carbon-design-system")),(0,s.kt)("p",null,"For developer questions:\n",(0,s.kt)("a",{parentName:"p",href:"https://ibm-studios.slack.com/messages/C046Y0YUD/"},"#carbon-components"),",\n",(0,s.kt)("a",{parentName:"p",href:"https://ibm-studios.slack.com/messages/C2K6RFJ1G/"},"#carbon-react")),(0,s.kt)("h3",null,"Email"),(0,s.kt)("p",null,"Messages to ",(0,s.kt)("a",{parentName:"p",href:"mailto:carbon@us.ibm.com"},"carbon@us.ibm.com")," will be addressed by the Carbon technical team\nas quickly as possible."),(0,s.kt)("h3",null,"Twitter"),(0,s.kt)("p",null,"The Carbon team can also be reached on Twitter:\n",(0,s.kt)("a",{parentName:"p",href:"https://twitter.com/_carbondesign?lang=en"},"@","_","carbondesign")))}d.isMDXComponent=!0}}]);