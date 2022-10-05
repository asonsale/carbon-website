"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[82900],{28399:function(e,t,n){n.d(t,{Z:function(){return E}});var a=n(67294),r=n(88650),o=n.n(r),s=n(1597),l=n(64905),i=n(8878),c=n(75900),d=n.n(c);var u=e=>{let{title:t,theme:n,tabs:r=[]}=e;return a.createElement("div",{className:d()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":r.length,"PageHeader-module--dark-mode--WCeH8":"dark"===n})},a.createElement("div",{className:"cds--grid"},a.createElement("div",{className:"cds--row"},a.createElement("div",{className:"cds--col-lg-12"},a.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var m=e=>{let{relativePagePath:t,repository:n}=e;const{site:{siteMetadata:{repository:r}}}=(0,s.useStaticQuery)("1364590287"),{baseUrl:o,subDirectory:l,branch:i}=n||r,c=`${o}/edit/${i}${l}/src/pages${t}`;return o?a.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},a.createElement("div",{className:"cds--col"},a.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},p=n(56328),b=n(51721);let g=function(e){function t(){return e.apply(this,arguments)||this}return(0,b.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:n}=this.props,r=n.split("/").filter(Boolean).slice(-1)[0],l=t.map((e=>{const t=o()(e,{lower:!0,strict:!0}),l=t===r,i=new RegExp(`${r}/?(#.*)?$`),c=n.replace(i,t);return a.createElement("li",{key:e,className:d()({"PageTabs-module--selected-item--aBB0K":l},"PageTabs-module--list-item--024o6")},a.createElement(s.Link,{className:"PageTabs-module--link--Kz-7R",to:`${c}`},e))}));return a.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},a.createElement("div",{className:"cds--grid"},a.createElement("div",{className:"cds--row"},a.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},a.createElement("nav",{"aria-label":e},a.createElement("ul",{className:"PageTabs-module--list--xLqxG"},l))))))},t}(a.Component);var h=g,y=n(17680),f=n(75387),k=n(50041);var v=e=>{let{date:t}=e;const n=new Date(t);return t?a.createElement(k.X2,{className:"last-modified-date-module--row--XJoYQ"},a.createElement(k.sg,null,a.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var E=e=>{let{pageContext:t,children:n,location:r,Title:c}=e;const{frontmatter:d={},relativePagePath:b,titleType:g}=t,{tabs:k,title:E,theme:w,description:C,keywords:P,date:N}=d,{interiorTheme:T}=(0,f.Z)(),{site:{pathPrefix:x}}=(0,s.useStaticQuery)("2456312558"),L=x?r.pathname.replace(x,""):r.pathname,A=k?L.split("/").filter(Boolean).slice(-1)[0]||o()(k[0],{lower:!0}):"",D=w||T;return a.createElement(i.Z,{tabs:k,homepage:!1,theme:D,pageTitle:E,pageDescription:C,pageKeywords:P,titleType:g},a.createElement(u,{title:c?a.createElement(c,null):E,label:"label",tabs:k,theme:D}),k&&a.createElement(h,{title:E,slug:L,tabs:k,currentTab:A}),a.createElement(y.Z,{padded:!0},n,a.createElement(m,{relativePagePath:b}),a.createElement(v,{date:N})),a.createElement(p.Z,{pageContext:t,location:r,slug:L,tabs:k,currentTab:A}),a.createElement(l.Z,null))}},88921:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return l},default:function(){return p}});var a=n(45987),r=(n(67294),n(64983)),o=n(28399);const s=["components"],l={},i=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},c=i("AnchorLinks"),d=i("AnchorLink"),u={_frontmatter:l},m=o.Z;function p(e){let{components:t}=e,n=(0,a.Z)(e,s);return(0,r.kt)(m,Object.assign({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(c,{mdxType:"AnchorLinks"},(0,r.kt)(d,{mdxType:"AnchorLink"},"Carbon add-ons"),(0,r.kt)(d,{mdxType:"AnchorLink"},"Contributing to add-ons"),(0,r.kt)(d,{mdxType:"AnchorLink"},"Ownership and maintenance")),(0,r.kt)("h2",null,"Carbon add-ons"),(0,r.kt)("p",null,"Carbon add-ons contain components, tools, and guidance that extend Carbon for a\nspecific product or experience. Add-ons enable teams to create their own custom\npatterns and components that follow Carbon’s visual style and guidelines."),(0,r.kt)("p",null,"If your team is using Carbon and needs components specific to your product or\nindustry, you should create a Carbon add-on."),(0,r.kt)("p",null,"If you feel that your components and/or patterns could be used in other\nproducts, we encourage you to ",(0,r.kt)("a",{parentName:"p",href:"/contributing/overview"},"contribute")," your work\nback to Carbon."),(0,r.kt)("h3",null,"Private vs public"),(0,r.kt)("p",null,"The Carbon Design System is an open-source project and we encourage teams using\nCarbon Design System to stay open-source as well. If your product has privacy\nconstraints, there are options for creating an add-on repo under our GitHub\nEnterprise account."),(0,r.kt)("h2",null,"Contributing to add-ons"),(0,r.kt)("p",null,"Add-ons are generally easier to contribute to because they are not fully managed\nby the Carbon team. For your add-on to be accepted, your components must meet\nWCAG AA standards and include interaction states (hover, active, focus, and\ndisabled)."),(0,r.kt)("h2",null,"Ownership and maintenance"),(0,r.kt)("p",null,"If you build an add-on repo, it’s your responsibility to maintain it. This\ninvolves carrying over changes from the core Carbon repo, as well as making sure\nit is using the latest major version of Carbon."))}p.isMDXComponent=!0}}]);