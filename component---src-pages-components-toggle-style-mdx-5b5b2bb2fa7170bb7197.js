"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[2573],{28399:function(t,e,a){a.d(e,{Z:function(){return f}});var n=a(67294),l=a(88650),r=a.n(l),i=a(1597),d=a(64905),g=a(8878),m=a(75900),o=a.n(m);var s=t=>{let{title:e,theme:a,tabs:l=[]}=t;return n.createElement("div",{className:o()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":l.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},e)))))};var p=t=>{let{relativePagePath:e,repository:a}=t;const{site:{siteMetadata:{repository:l}}}=(0,i.useStaticQuery)("1364590287"),{baseUrl:r,subDirectory:d,branch:g}=a||l,m=`${r}/edit/${g}${d}/src/pages${e}`;return r?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:m},"Edit this page on GitHub"))):null},c=a(56328),k=a(51721);let u=function(t){function e(){return t.apply(this,arguments)||this}return(0,k.Z)(e,t),e.prototype.render=function(){const{title:t,tabs:e,slug:a}=this.props,l=a.split("/").filter(Boolean).slice(-1)[0],d=e.map((t=>{const e=r()(t,{lower:!0,strict:!0}),d=e===l,g=new RegExp(`${l}/?(#.*)?$`),m=a.replace(g,e);return n.createElement("li",{key:t,className:o()({"PageTabs-module--selected-item--aBB0K":d},"PageTabs-module--list-item--024o6")},n.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:`${m}`},t))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},d))))))},e}(n.Component);var N=u,b=a(17680),A=a(75387),y=a(50041);var h=t=>{let{date:e}=t;const a=new Date(e);return e?n.createElement(y.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(y.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var f=t=>{let{pageContext:e,children:a,location:l,Title:m}=t;const{frontmatter:o={},relativePagePath:k,titleType:u}=e,{tabs:y,title:f,theme:w,description:v,keywords:x,date:E}=o,{interiorTheme:C}=(0,A.Z)(),{site:{pathPrefix:S}}=(0,i.useStaticQuery)("2456312558"),Q=S?l.pathname.replace(S,""):l.pathname,T=y?Q.split("/").filter(Boolean).slice(-1)[0]||r()(y[0],{lower:!0}):"",D=w||C;return n.createElement(g.Z,{tabs:y,homepage:!1,theme:D,pageTitle:f,pageDescription:v,pageKeywords:x,titleType:u},n.createElement(s,{title:m?n.createElement(m,null):f,label:"label",tabs:y,theme:D}),y&&n.createElement(N,{title:f,slug:Q,tabs:y,currentTab:T}),n.createElement(b.Z,{padded:!0},a,n.createElement(p,{relativePagePath:k}),n.createElement(h,{date:E})),n.createElement(c.Z,{pageContext:e,location:l,slug:Q,tabs:y,currentTab:T}),n.createElement(d.Z,null))}},42510:function(t,e,a){a.r(e),a.d(e,{_frontmatter:function(){return d},default:function(){return p}});var n=a(45987),l=(a(67294),a(64983)),r=a(28399);const i=["components"],d={},g=(m="Caption",function(t){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",t)});var m;const o={_frontmatter:d},s=r.Z;function p(t){let{components:e}=t,a=(0,n.Z)(t,i);return(0,l.kt)(s,Object.assign({},o,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",null,"Color"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Color token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Label"),(0,l.kt)("td",{parentName:"tr",align:null},"text color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-secondary"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Toggle text"),(0,l.kt)("td",{parentName:"tr",align:null},"text color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-primary"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Off background"),(0,l.kt)("td",{parentName:"tr",align:null},"background-color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$toggle-off"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Off handle"),(0,l.kt)("td",{parentName:"tr",align:null},"background-color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$icon-on-color"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"On background"),(0,l.kt)("td",{parentName:"tr",align:null},"background-color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$support-success"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"On handle"),(0,l.kt)("td",{parentName:"tr",align:null},"background-color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$icon-on-color"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Checkmark"),(0,l.kt)("td",{parentName:"tr",align:null},"fill"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$support-success"))))),(0,l.kt)("div",{className:"image--fixed"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"63.888888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAACJElEQVQ4y41T34sSURj9ZmadYB8WZVt66U9Y6KU/Iyjoof+hRQJBkmCceRBR13wyw1B0S30Q0VEyUElNG8hEZMYhdO6EjuhDbD+MrB6EJuayLm6r7R443Bku93znfN+9ABdgPp9DoVCASqUCw+EQEEKYqqqe4Uboun7mfzabQbFYhMlkgqkoChZYFTbWc+A4DpxOJ3g8HhPLsntut9vCcdxuvV6/0m636el0SmuaRiuKQquqSiOEjJVYCp9Ds9mEWq0GgiAY32Sj0aAMt5IkWY6eH/ntdvt+630LRqMRJYoiiRAil+7WRjYO/0ttrEHrQwdSL5K7d27dNv2e/wJRFA3Ry0VmWRa8Xi+O7HK5LL5Dn1n/o2+dFKC+fDqm+4M+jnxCYqNgLpeDfD4PpVIJUqkUFUg9wULg2tu5W3zgj79J3/iu6/Dx54SSZRlHXnX538iDwQDevRbg8OVTvHfvle3qs1ycNvbaQgtfn9X+rRVkGAbTiMwwzLVkIrF9/O2z6Yf21QQ3cUFyOBrRSEGnU0YIbZ5yJBKBeDwO2WwWQqEQxfM8aTiKxKJbDx85rt8/ODALbwViPB4T/X6fWO3fWsFwOAzRaBQymQwEg0GoVqvQ6XSg2+3uxGKxx1ardV+SJFgsFrgtF74Uv98PgUAAO/X5fHg4siwb/SLS6fS2w+EgjaLlchkXuvTTW8K45L1eD8dJJpNgs9kgkUgAz/NgNps3HvwL5nCzG1mi514AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Inactive, inactive hover, and active states for a toggle",title:"Inactive, inactive hover, and active states for a toggle",src:"/static/045da0ca24801eeeb36cbe81dd677e56/3cbba/toggle-style-1.png",srcSet:["/static/045da0ca24801eeeb36cbe81dd677e56/7fc1e/toggle-style-1.png 288w","/static/045da0ca24801eeeb36cbe81dd677e56/a5df1/toggle-style-1.png 576w","/static/045da0ca24801eeeb36cbe81dd677e56/3cbba/toggle-style-1.png 1152w","/static/045da0ca24801eeeb36cbe81dd677e56/392b1/toggle-style-1.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,l.kt)(g,{mdxType:"Caption"},"Examples of inactive, inactive hover, and active states for a toggle"),(0,l.kt)("h3",null,"Interactive states"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"State"),(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Color token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Focus"),(0,l.kt)("td",{parentName:"tr",align:null},"Toggle"),(0,l.kt)("td",{parentName:"tr",align:null},"border"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$focus"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Disabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Label"),(0,l.kt)("td",{parentName:"tr",align:null},"text color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-disabled"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Toggle text"),(0,l.kt)("td",{parentName:"tr",align:null},"text color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-disabled"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Toggle background"),(0,l.kt)("td",{parentName:"tr",align:null},"background-color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$button-disabled"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Toggle handle"),(0,l.kt)("td",{parentName:"tr",align:null},"background-color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$icon-on-color-disabled"))))),(0,l.kt)("h2",null,"Typography"),(0,l.kt)("p",null,"Toggle labels should be set in sentence case, with only the first word in a\nphrase and any proper nouns capitalized, and no more than three words."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Font-size (px/rem)"),(0,l.kt)("th",{parentName:"tr",align:null},"Font-weight"),(0,l.kt)("th",{parentName:"tr",align:null},"Type token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Label"),(0,l.kt)("td",{parentName:"tr",align:null},"12 / 0.75"),(0,l.kt)("td",{parentName:"tr",align:null},"Regular / 400"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$label-01"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Toggle text"),(0,l.kt)("td",{parentName:"tr",align:null},"14 / 0.875"),(0,l.kt)("td",{parentName:"tr",align:null},"Regular / 400"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$body-compact-01"))))),(0,l.kt)("h2",null,"Structure"),(0,l.kt)("h3",null,"Small toggle"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"px / rem"),(0,l.kt)("th",{parentName:"tr",align:null},"Spacing token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Toggle small"),(0,l.kt)("td",{parentName:"tr",align:null},"height"),(0,l.kt)("td",{parentName:"tr",align:null},"16 / 1"),(0,l.kt)("td",{parentName:"tr",align:null},"–")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"width"),(0,l.kt)("td",{parentName:"tr",align:null},"32 / 2"),(0,l.kt)("td",{parentName:"tr",align:null},"–")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Handle"),(0,l.kt)("td",{parentName:"tr",align:null},"height, width"),(0,l.kt)("td",{parentName:"tr",align:null},"10 / 0.625"),(0,l.kt)("td",{parentName:"tr",align:null},"–")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Label"),(0,l.kt)("td",{parentName:"tr",align:null},"margin-top, margin-bottom"),(0,l.kt)("td",{parentName:"tr",align:null},"16 / 1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-05"))))),(0,l.kt)("div",{className:"image--fixed"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"36.80555555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAABAklEQVQoz5XOvUsCcRjA8e/RUDc2RtCQRNhkwU1RjfYySOA/UKJUJ1fUdFEmZvZy2JA2XQ56Ql4NBt0UJF6mGQTRX/SLq7WG33d9nufDA3/0NZlEcIEYe+I+pLFW3qOQPOOq/s5l/e1nLlVwoG/HWdKgPRFTM+ZOuLFsjiAEAvgMp+DQlAMFB4hQRXkcn1eN43Qst54dvcndYh85BDCZfVnQQNDnbmaBFVEhPzDMYqvFtNuAmi3/Ybbf5eTjmS5w2nnZ1X1/lc2EGi1aCoPIg/nXDteeh7OVwur1orrf1jA2hmbPCwqRKTkwyGo2sV2XB6dGyfNIVKswFyFdtH4X/gG/AY3vYORFJoCsAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Structure and spacing measurements for small toggle",title:"Structure and spacing measurements for small toggle",src:"/static/f0c46b471c6e97cab6ff52e1b2524266/3cbba/toggle-style-3.png",srcSet:["/static/f0c46b471c6e97cab6ff52e1b2524266/7fc1e/toggle-style-3.png 288w","/static/f0c46b471c6e97cab6ff52e1b2524266/a5df1/toggle-style-3.png 576w","/static/f0c46b471c6e97cab6ff52e1b2524266/3cbba/toggle-style-3.png 1152w","/static/f0c46b471c6e97cab6ff52e1b2524266/392b1/toggle-style-3.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,l.kt)(g,{mdxType:"Caption"},"Structure and spacing measurements for small toggle | px / rem"),(0,l.kt)("h3",null,"Medium toggle"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"px / rem"),(0,l.kt)("th",{parentName:"tr",align:null},"Spacing token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Toggle medium"),(0,l.kt)("td",{parentName:"tr",align:null},"width"),(0,l.kt)("td",{parentName:"tr",align:null},"48 / 3"),(0,l.kt)("td",{parentName:"tr",align:null},"–")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"height"),(0,l.kt)("td",{parentName:"tr",align:null},"24 / 1.5"),(0,l.kt)("td",{parentName:"tr",align:null},"–")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Handle"),(0,l.kt)("td",{parentName:"tr",align:null},"height, width"),(0,l.kt)("td",{parentName:"tr",align:null},"18 / 1.25"),(0,l.kt)("td",{parentName:"tr",align:null},"–")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Label"),(0,l.kt)("td",{parentName:"tr",align:null},"margin-top, margin-bottom"),(0,l.kt)("td",{parentName:"tr",align:null},"16 / 1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-05"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Toggle text"),(0,l.kt)("td",{parentName:"tr",align:null},"margin-left"),(0,l.kt)("td",{parentName:"tr",align:null},"8 / 0.5"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-03"))))),(0,l.kt)("div",{className:"image--fixed"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"39.23611111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAABIklEQVQoz2NgwAIuqqcybLdKZNhjFM+w2TSGYVpkAsNF80yGd2LpDO8lMhkeaeYwkARABh4ySmI4qpfEcEg/kXW5ewL/Jb1U3keKGcyPFTMZ7mhkkW4gw39Thv8MG5mdY4yk0xcVzNw0davN////GX78/89QrGDDwFBbSZqB/0FQbx6jkxAD8wIPb4n/TPksk+asZwAZCgakGti56yDDjFW7GDovXeWo3L7TOnP3Tj35JQu5GPQ1GMkycNHx44xrLl9iWHflsvSkzZtP5W1Yn8wwdSKvWGQI6QaCQPO9uwytDx4wtDx4wNp484Zqyb278jIL5nIxWBgxMkgJk25g+61bDN337jJ03b/H0HLpEkPJrZsM0ovmMTCY6jMw8LHhNBAA1VFy+WI85qYAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Structure and spacing measurements for toggle",title:"Structure and spacing measurements for toggle",src:"/static/f3a5a2e81fa1b3413b8e9d1d4fc1c841/3cbba/toggle-style-2.png",srcSet:["/static/f3a5a2e81fa1b3413b8e9d1d4fc1c841/7fc1e/toggle-style-2.png 288w","/static/f3a5a2e81fa1b3413b8e9d1d4fc1c841/a5df1/toggle-style-2.png 576w","/static/f3a5a2e81fa1b3413b8e9d1d4fc1c841/3cbba/toggle-style-2.png 1152w","/static/f3a5a2e81fa1b3413b8e9d1d4fc1c841/392b1/toggle-style-2.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,l.kt)(g,{mdxType:"Caption"},"Structure and spacing measurements for medium toggle | px / rem"),(0,l.kt)("h2",null,"Sizes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Size"),(0,l.kt)("th",{parentName:"tr",align:null},"Height px / rem"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Small (sm)"),(0,l.kt)("td",{parentName:"tr",align:null},"16 / 1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Medium (md)"),(0,l.kt)("td",{parentName:"tr",align:null},"24 / 1.5")))),(0,l.kt)("div",{className:"image--fixed"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAAApElEQVQoz51SWxLCIAzs/W/hDbyIn72D49hmlHEoj2SdQlvD6NBifthAsmRZOiwhItu6Ysgn1+e16HSiixMJyuY9soJQT8DMmUqQsI+hfcK10DkHY0zejAKiAZdrD+/895McnXCTq3Gr5FqDfVnYyf434SyZiBA5Ao5xH2449WeMT8quo5FwNiGExQQWBO8xTo90wRFjqpJ/tTW7XHxkhXO+L/kNnOkZZaP9VxYAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Sizes for toggle",title:"Sizes for toggle",src:"/static/bd849a652e0e05d20d1311896e6cf848/3cbba/toggle-style-size.png",srcSet:["/static/bd849a652e0e05d20d1311896e6cf848/7fc1e/toggle-style-size.png 288w","/static/bd849a652e0e05d20d1311896e6cf848/a5df1/toggle-style-size.png 576w","/static/bd849a652e0e05d20d1311896e6cf848/3cbba/toggle-style-size.png 1152w","/static/bd849a652e0e05d20d1311896e6cf848/392b1/toggle-style-size.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,l.kt)(g,{mdxType:"Caption"},"Toggle sizes | px / rem"))}p.isMDXComponent=!0}}]);