"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[67083],{28399:function(e,t,a){a.d(t,{Z:function(){return k}});var r=a(67294),l=a(88650),n=a.n(l),o=a(1597),s=a(64905),c=a(8878),i=a(75900),m=a.n(i);var d=e=>{let{title:t,theme:a,tabs:l=[]}=e;return r.createElement("div",{className:m()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":l.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},r.createElement("div",{className:"cds--grid"},r.createElement("div",{className:"cds--row"},r.createElement("div",{className:"cds--col-lg-12"},r.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var u=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:l}}}=(0,o.useStaticQuery)("1364590287"),{baseUrl:n,subDirectory:s,branch:c}=a||l,i=`${n}/edit/${c}${s}/src/pages${t}`;return n?r.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},r.createElement("div",{className:"cds--col"},r.createElement("a",{className:"EditLink-module--link--IDrl1",href:i},"Edit this page on GitHub"))):null},p=a(56328),g=a(51721);let b=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,l=a.split("/").filter(Boolean).slice(-1)[0],s=t.map((e=>{const t=n()(e,{lower:!0,strict:!0}),s=t===l,c=new RegExp(`${l}/?(#.*)?$`),i=a.replace(c,t);return r.createElement("li",{key:e,className:m()({"PageTabs-module--selected-item--aBB0K":s},"PageTabs-module--list-item--024o6")},r.createElement(o.Link,{className:"PageTabs-module--link--Kz-7R",to:`${i}`},e))}));return r.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},r.createElement("div",{className:"cds--grid"},r.createElement("div",{className:"cds--row"},r.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},r.createElement("nav",{"aria-label":e},r.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(r.Component);var h=b,E=a(17680),v=a(75387),f=a(50041);var y=e=>{let{date:t}=e;const a=new Date(t);return t?r.createElement(f.X2,{className:"last-modified-date-module--row--XJoYQ"},r.createElement(f.sg,null,r.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var k=e=>{let{pageContext:t,children:a,location:l,Title:i}=e;const{frontmatter:m={},relativePagePath:g,titleType:b}=t,{tabs:f,title:k,theme:w,description:P,keywords:N,date:T}=m,{interiorTheme:x}=(0,v.Z)(),{site:{pathPrefix:C}}=(0,o.useStaticQuery)("2456312558"),D=C?l.pathname.replace(C,""):l.pathname,Z=f?D.split("/").filter(Boolean).slice(-1)[0]||n()(f[0],{lower:!0}):"",R=w||x;return r.createElement(c.Z,{tabs:f,homepage:!1,theme:R,pageTitle:k,pageDescription:P,pageKeywords:N,titleType:b},r.createElement(d,{title:i?r.createElement(i,null):k,label:"label",tabs:f,theme:R}),f&&r.createElement(h,{title:k,slug:D,tabs:f,currentTab:Z}),r.createElement(E.Z,{padded:!0},a,r.createElement(u,{relativePagePath:g}),r.createElement(y,{date:T})),r.createElement(p.Z,{pageContext:t,location:l,slug:D,tabs:f,currentTab:Z}),r.createElement(s.Z,null))}},83365:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return b}});var r=a(45987),l=(a(67294),a(64983)),n=a(28399);const o=["components"],s={},c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",t)},i=c("PageDescription"),m=c("Row"),d=c("Column"),u=c("ResourceCard"),p={_frontmatter:s},g=n.Z;function b(e){let{components:t}=e,a=(0,r.Z)(e,o);return(0,l.kt)(g,Object.assign({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(i,{mdxType:"PageDescription"},(0,l.kt)("p",null,"Preview the progress bar component with the React live demo. For detailed code\nusage documentation, see the Storybooks for each framework below.")),(0,l.kt)("h2",null,"Documentation"),(0,l.kt)(m,{className:"resource-card-group",mdxType:"Row"},(0,l.kt)(d,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,l.kt)(u,{subTitle:"React",href:"https://react.carbondesignsystem.com/?path=/story/components-progressbar--example",mdxType:"ResourceCard"}))))}b.isMDXComponent=!0}}]);