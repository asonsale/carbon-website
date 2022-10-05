"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[48326],{28399:function(t,e,a){a.d(e,{Z:function(){return x}});var n=a(67294),l=a(88650),r=a.n(l),i=a(1597),p=a(64905),d=a(8878),m=a(75900),s=a.n(m);var g=t=>{let{title:e,theme:a,tabs:l=[]}=t;return n.createElement("div",{className:s()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":l.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},e)))))};var o=t=>{let{relativePagePath:e,repository:a}=t;const{site:{siteMetadata:{repository:l}}}=(0,i.useStaticQuery)("1364590287"),{baseUrl:r,subDirectory:p,branch:d}=a||l,m=`${r}/edit/${d}${p}/src/pages${e}`;return r?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:m},"Edit this page on GitHub"))):null},u=a(56328),c=a(51721);let k=function(t){function e(){return t.apply(this,arguments)||this}return(0,c.Z)(e,t),e.prototype.render=function(){const{title:t,tabs:e,slug:a}=this.props,l=a.split("/").filter(Boolean).slice(-1)[0],p=e.map((t=>{const e=r()(t,{lower:!0,strict:!0}),p=e===l,d=new RegExp(`${l}/?(#.*)?$`),m=a.replace(d,e);return n.createElement("li",{key:t,className:s()({"PageTabs-module--selected-item--aBB0K":p},"PageTabs-module--list-item--024o6")},n.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:`${m}`},t))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},p))))))},e}(n.Component);var N=k,b=a(17680),A=a(75387),y=a(50041);var h=t=>{let{date:e}=t;const a=new Date(e);return e?n.createElement(y.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(y.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var x=t=>{let{pageContext:e,children:a,location:l,Title:m}=t;const{frontmatter:s={},relativePagePath:c,titleType:k}=e,{tabs:y,title:x,theme:f,description:w,keywords:C,date:v}=s,{interiorTheme:E}=(0,A.Z)(),{site:{pathPrefix:z}}=(0,i.useStaticQuery)("2456312558"),T=z?l.pathname.replace(z,""):l.pathname,B=y?T.split("/").filter(Boolean).slice(-1)[0]||r()(y[0],{lower:!0}):"",S=f||E;return n.createElement(d.Z,{tabs:y,homepage:!1,theme:S,pageTitle:x,pageDescription:w,pageKeywords:C,titleType:k},n.createElement(g,{title:m?n.createElement(m,null):x,label:"label",tabs:y,theme:S}),y&&n.createElement(N,{title:x,slug:T,tabs:y,currentTab:B}),n.createElement(b.Z,{padded:!0},a,n.createElement(o,{relativePagePath:c}),n.createElement(h,{date:v})),n.createElement(u.Z,{pageContext:e,location:l,slug:T,tabs:y,currentTab:B}),n.createElement(p.Z,null))}},59591:function(t,e,a){a.r(e),a.d(e,{_frontmatter:function(){return p},default:function(){return c}});var n=a(45987),l=(a(67294),a(64983)),r=a(28399);const i=["components"],p={},d=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)},m=d("Caption"),s=d("Row"),g=d("Column"),o={_frontmatter:p},u=r.Z;function c(t){let{components:e}=t,a=(0,n.Z)(t,i);return(0,l.kt)(u,Object.assign({},o,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",null,"Color"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Color token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Label"),(0,l.kt)("td",{parentName:"tr",align:null},"text color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-secondary"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Field text"),(0,l.kt)("td",{parentName:"tr",align:null},"text color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-primary"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Placeholder text"),(0,l.kt)("td",{parentName:"tr",align:null},"text color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-placeholder"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Helper text"),(0,l.kt)("td",{parentName:"tr",align:null},"text color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-helper"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Field"),(0,l.kt)("td",{parentName:"tr",align:null},"background-color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$field")," ","*")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"border-bottom"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$border-strong")," ","*")))),(0,l.kt)(m,{mdxType:"Caption"},"* Denotes a contextual color token that will change values based on the layer it is placed on."),(0,l.kt)(s,{mdxType:"Row"},(0,l.kt)(g,{colLg:8,mdxType:"Column"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAABq0lEQVQoz32SvW7iQBDHB1LcBXgTOmokKrq7d4AieQJKdFckUYrkruUZaE4nEHTwDEgIF8Z4bbxYsPYssF4JkEA+jXWJDEQZ6af90M7sfPwBUtZoNCCOY2i329BsNmE0GiXnNw6HA5xOJzgej+98aqVSCSqVChQKBSgWi7d012q1oN/vw3Q6hdVqBb7vn3FljuO8E4YhGIYBk8mE9n+DIAjCMLQQ0d5ut3YURZZSKoii6GcURaCUukn7E2cHKnG5XAJjDKSU90KIX0KIJyHEMyI+SymfpJS/pZTfERG01pmrgIyxbBrHcbK2bWe11hAEQVKmEALW6zVsNpsEpRQsFoub2WyWvfSnqF/SMMaSNY7jr67r5gzDyJummfM8L8c5J/Lz+fz27d0lZ+lSk8fjMez3eyiXy/l6vZ6pVqtQq9WAekZZE5StZVlwWe5VD6m0wWAA3W6X9n845yvOuen7/kxrTZhaa6G1/kGBPxxK2ujnXq8Hw+GQAt55nvfiuu4D5/wRER+llA+I+IqI32goiJj5VIck2k6nk2S52+1o0omUaBBpMf8n85Gw/wFl5c8ZMqM2nAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"text input states",title:"text input states",src:"/static/02deb6fcb83e874550781fbc9656184f/3cbba/text-input-style-1.png",srcSet:["/static/02deb6fcb83e874550781fbc9656184f/7fc1e/text-input-style-1.png 288w","/static/02deb6fcb83e874550781fbc9656184f/a5df1/text-input-style-1.png 576w","/static/02deb6fcb83e874550781fbc9656184f/3cbba/text-input-style-1.png 1152w","/static/02deb6fcb83e874550781fbc9656184f/92c65/text-input-style-1.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,l.kt)("h3",null,"Interactive states"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"State"),(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Color token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Focus"),(0,l.kt)("td",{parentName:"tr",align:null},"Field"),(0,l.kt)("td",{parentName:"tr",align:null},"outline"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$focus"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Invalid"),(0,l.kt)("td",{parentName:"tr",align:null},"Field"),(0,l.kt)("td",{parentName:"tr",align:null},"outline"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$support-error"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Error message"),(0,l.kt)("td",{parentName:"tr",align:null},"text color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-error"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Warning icon"),(0,l.kt)("td",{parentName:"tr",align:null},"svg"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$support-error"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Disabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Field"),(0,l.kt)("td",{parentName:"tr",align:null},"background"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$field")," ","*")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Field"),(0,l.kt)("td",{parentName:"tr",align:null},"border-bottom"),(0,l.kt)("td",{parentName:"tr",align:null},"transparent")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Field text"),(0,l.kt)("td",{parentName:"tr",align:null},"text color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-disabled"))))),(0,l.kt)(s,{mdxType:"Row"},(0,l.kt)(g,{colLg:8,mdxType:"Column"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAADeUlEQVQ4y32UXWhbZRjHn5hzCl4IQ0SvyqTidLR6NdDbOXCDeTHUK/VCQbQw3J3UIaM4VlC8kDHQUdaLib3t3MZW+4Gbswv9WJM07dp8nM987CRZck7yvuekLE3yl3OWZkkT+8CP533hPP/znv/7PIeoLYYiIGCCgBUCQKoFWo6VKCg7FJRtj1XJpttBhwLRp+wbJ7+76wkBW3T12sLgwlrmrTXtyetByX4jJHscCsr24emQ8/L/Cmqa1uLM7w4BiwQ8oNW4FdCzHKrRzf2oc2kzadNWkvvb6106Njwv0eikToBMMyH7zcWY804g6hzZw7tTy9v9gc0SAX9Ql6CqqsIumqYJkqwKBUMTTp0P05V/anR5EfTrAui3had5/D6ICJRQkoKuPavdxVUVW6iqKCm6aOWUPiJ6zvNzZ7vp6zOiDZCuJ/tUVRU76jVNdE/YAhWNPhpLEbBK1+9KHwYi2S/DcuWTsOx81uTTkOR8MRPcPvIgxoiG0VHv0vH9l29bri8+YIS2VGs6oaSr2ceskDdtK1e0rXzRLuSKdj0sOz/pWYd0g+1/KYVcmtYfxgnVAg3/cK3/zI+zr52+cHPg9NitgeFLqZe+uoIDX49XX/z4l/rzk38XCTxKvQTbPFBFVdNEXZZEIOYH5vzADQG4JQAzfmDeD9z0o3JPiMlJUdd6eNi+ccU0SRJ1xkTvAiolckLLhOg6IbZBkLYIwSXCzxcolUj0qbou9BJskak+oeXhb6gB0Mbs3LFH6xunrFj8fTMWP1GKJ06UJPm4Fdn4oDh/53B+aYU+B2hfD/XxCcoAPgOgfDjyr7oWgRIM1TIPN1HWkyin0jvm0goK07MXH09dp/z8HX+vxm6hsTLFp/70ei0zcu7V7OjYkPHt928bZ0eHMmdHBzMj5wZzE1cHin/NvZDTdIoXCz3bpsMDVVFE3XgkyoBvEqAbgG8e8K02WQR8EuDXZLlP3VO729jC3vFTZVnYnYoqQDXA89Xd15s5mUq5L+85ei0URSFJkiidTpNhGEdN0zzJGDtaLpePcc5d3uOcH+ecH7Isq+tv1XUppml6gu66XC7fM00TpmnuWJZVZ4zVOedVxhgYYxc558RYj0lpD8aY9zmNRoM4569UKpWDjuP0u3DO+xljbj7IOT/gCrrsG+4DrlitVvPWjuO0aJ6oK++N/wBAPfCEe9teqgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"text input interactive states",title:"text input interactive states",src:"/static/e4b893dc9b6a50d5b142e0e7872e209d/3cbba/text-input-style-3.png",srcSet:["/static/e4b893dc9b6a50d5b142e0e7872e209d/7fc1e/text-input-style-3.png 288w","/static/e4b893dc9b6a50d5b142e0e7872e209d/a5df1/text-input-style-3.png 576w","/static/e4b893dc9b6a50d5b142e0e7872e209d/3cbba/text-input-style-3.png 1152w","/static/e4b893dc9b6a50d5b142e0e7872e209d/92c65/text-input-style-3.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,l.kt)("h2",null,"Typography"),(0,l.kt)("p",null,"Text input labels and placeholder text should be set in sentence case, with only\nthe first word in a phrase and any proper nouns capitalized. Text input labels\nshould be three words or less."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Font-size (px/rem)"),(0,l.kt)("th",{parentName:"tr",align:null},"Font-weight"),(0,l.kt)("th",{parentName:"tr",align:null},"Type token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Label"),(0,l.kt)("td",{parentName:"tr",align:null},"12 / 0.75"),(0,l.kt)("td",{parentName:"tr",align:null},"Regular / 400"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$label-01"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Field text"),(0,l.kt)("td",{parentName:"tr",align:null},"14 / 0.875"),(0,l.kt)("td",{parentName:"tr",align:null},"Regular / 400"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$body-compact-01"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Helper text"),(0,l.kt)("td",{parentName:"tr",align:null},"12 / 0.75"),(0,l.kt)("td",{parentName:"tr",align:null},"Regular / 400"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$helper-text-01"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Error message"),(0,l.kt)("td",{parentName:"tr",align:null},"12 / 0.75"),(0,l.kt)("td",{parentName:"tr",align:null},"Regular / 400"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$label-01"))))),(0,l.kt)("h2",null,"Structure"),(0,l.kt)("h3",null,"Text input"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"px / rem"),(0,l.kt)("th",{parentName:"tr",align:null},"Spacing token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Label"),(0,l.kt)("td",{parentName:"tr",align:null},"margin-bottom"),(0,l.kt)("td",{parentName:"tr",align:null},"8 / 0.5"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-03"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Helper text"),(0,l.kt)("td",{parentName:"tr",align:null},"margin-top"),(0,l.kt)("td",{parentName:"tr",align:null},"4 / 0.25"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-02"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Field text"),(0,l.kt)("td",{parentName:"tr",align:null},"padding-left, padding-right"),(0,l.kt)("td",{parentName:"tr",align:null},"16 / 1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-05"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Field"),(0,l.kt)("td",{parentName:"tr",align:null},"border-bottom"),(0,l.kt)("td",{parentName:"tr",align:null},"1px"),(0,l.kt)("td",{parentName:"tr",align:null},"–")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Field: focus"),(0,l.kt)("td",{parentName:"tr",align:null},"border"),(0,l.kt)("td",{parentName:"tr",align:null},"2px"),(0,l.kt)("td",{parentName:"tr",align:null},"–")))),(0,l.kt)("br",null),(0,l.kt)("div",{className:"image--fixed"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"70.4861111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsSAAALEgHS3X78AAADLklEQVQ4y3WST2hcVRTGv0lrkkY37lzWRSQUoaE2BNGFXbhxoamC0FhBohSlupTuBHHTgkspobVa0WqFupGAGhEr1dhpTGLTmZfGTjrz3pv3975777tz73uZCSZH3ugMpuKFH2dxPu758x0QEWYAFLHA95rgQsBojVRrLCuFdcft5wuiKIJSClmWwRjTo1REfE1Uep8Ic/PrRxrN4HUlxTQX4mWj9fFU65mlNJ1kWRu379yEtdR8No7j15RS00qp48aYghljzIHep7hEVDpKhCtL1Wmr6V4OfH82iqLZVIizQZJ8Omc3TtzyQjDRgFMPTzabzS9s2/44CIILaZqelVJ+IqV8WkoJKeUAivcMhruxO1JnC34co2XMrjHxr7X00Fqj0+mg3W73AVGnJy4R0VDkNvfZjjPi+/6IZGwfdbaGNu7WBzc2aoNEdB8RDRe6LMuGC00YhiNBEOwNggAFwBuE0+OncOLx2fsBlMo/L4IL3q2e5zk0EX6vLHSLvjB+5oGiM8uqdo24x5QuuP7Nb3tnifBD1TnlJYknOb8lpLS01hXZajk3hHjXUy0wFiDyxQdccFcIUUnTdM0YU9FaO1rrmaIBrfUezH02NwAinLtRfqzq2sdCz5vyfP/5hLGpRuAfu1itPHltw8ad+hJWV24fsSzr1dXV1VdqtdpLnPOpOI5fZIyNMsbAGCuBLvyIo/2F78APQ6RSQqQpaHunb0Cj6SHfUuCcd2+wcLUYsehs18iFf4NEeO4j9z8u9rhbrw85jjP01sX9pf/T9K/h85tB6fx6hEtXlh9dqzWeam/mh5RSE5kxh6XWkwuc749MB78uXsXC92sTURQ+sbm5ecgYczjP84LJPM8fKgwswDWiga+IcHXdOeMlCfEk2eFCUKvV2hFK0XXOP3RlCs5jJEx+mSQJMcZI/K3ZVkqRUurtYg1KqT04SW28SQHemf/u4aVGfTxlbMwPggMsDMesRuPgewu/jF5eqaJS+xY/zS8+srKyPFEulyeq1epBIcRoHMdjjLEH/zHlnuvf3kbMGKQQCOMYf2ZZP7fmWKj9UYfrurBtG57ndQ1KkmQXfwHSTAvolK0nLgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Structure and spacing measurements for text input",title:"Structure and spacing measurements for text input",src:"/static/26a729e5d0a6888863e8bca18e61030f/3cbba/text-input-style-2.png",srcSet:["/static/26a729e5d0a6888863e8bca18e61030f/7fc1e/text-input-style-2.png 288w","/static/26a729e5d0a6888863e8bca18e61030f/a5df1/text-input-style-2.png 576w","/static/26a729e5d0a6888863e8bca18e61030f/3cbba/text-input-style-2.png 1152w","/static/26a729e5d0a6888863e8bca18e61030f/392b1/text-input-style-2.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,l.kt)(m,{mdxType:"Caption"},"Structure and spacing measurements for text input | px / rem"),(0,l.kt)("h3",null,"Text area"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"px / rem"),(0,l.kt)("th",{parentName:"tr",align:null},"Spacing token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Label"),(0,l.kt)("td",{parentName:"tr",align:null},"margin-bottom"),(0,l.kt)("td",{parentName:"tr",align:null},"8 / 0.5"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-03"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Field"),(0,l.kt)("td",{parentName:"tr",align:null},"height"),(0,l.kt)("td",{parentName:"tr",align:null},"varies"),(0,l.kt)("td",{parentName:"tr",align:null},"–")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"padding-left, padding-right"),(0,l.kt)("td",{parentName:"tr",align:null},"16 / 1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-05"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"padding-top, padding-bottom"),(0,l.kt)("td",{parentName:"tr",align:null},"11 / 0.6875"),(0,l.kt)("td",{parentName:"tr",align:null},"–")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"border-bottom"),(0,l.kt)("td",{parentName:"tr",align:null},"1px"),(0,l.kt)("td",{parentName:"tr",align:null},"–")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Field: focus"),(0,l.kt)("td",{parentName:"tr",align:null},"border"),(0,l.kt)("td",{parentName:"tr",align:null},"2px"),(0,l.kt)("td",{parentName:"tr",align:null},"–")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Helper text"),(0,l.kt)("td",{parentName:"tr",align:null},"margin-top"),(0,l.kt)("td",{parentName:"tr",align:null},"4 / 0.25"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-02"))))),(0,l.kt)("div",{className:"image--fixed"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"41.31944444444445%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAABzUlEQVQoz32SX0hTcRTHv3fTGO0PPeUikHoIe+uxZ+nBp0oCV9J6CazwJYNEJv2hfCgsZgn2JlaQC/It7a/4YGH+a2w4vPfuutzmdnfv3X73su0qhOKRewlMbH3hyzmcAx8OXw5g6W4IuBeyWwTO43hiGUTEybTlkPI5Z3om7tSIHHnadGwQOaxdBxF6iLBJhP36C+i92A7QbwsIjQgpIowDB14D9RUie24bQBVAEECs6RriTR37gZQg4Oox57nnnw9/mBeuZAq5wK+83JYrFgMFxgIFXW+T9eKlr7NicKBnyT3YHcXoiGDD/glcI+IAcJd/LjYsqKqslYqklkrEDIOMcpn0cpmMSoUWFTUdikx6ry8kMBHluZrAN9ksd3ZqEi+2tz1xxtLrpkmm5Wp116ZJUVWTXnUO+mVXq2eu/VFdTWDJCvhEY92ZL5+O/FCUbxpjGYWxpKIzyTZjomro2Zm13NTNyEd36OV7vIv/50Jbt7ucB8P9rgtvRxsfT4w35FMpr8DzvqQg+Phl3scyGe+NsTH/0TsP6g897MPp/nDtDHHqJNB9C55nTzE0N4v5WAySKCIpiH+qgNUVCcPT39HS+wTN98PoGo7s+Zgd1g0n8X/CZwgAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Structure and spacing measurements for text area",title:"Structure and spacing measurements for text area",src:"/static/7b1665d7aacee720837f8d287ea1f724/3cbba/text-area-style-1.png",srcSet:["/static/7b1665d7aacee720837f8d287ea1f724/7fc1e/text-area-style-1.png 288w","/static/7b1665d7aacee720837f8d287ea1f724/a5df1/text-area-style-1.png 576w","/static/7b1665d7aacee720837f8d287ea1f724/3cbba/text-area-style-1.png 1152w","/static/7b1665d7aacee720837f8d287ea1f724/392b1/text-area-style-1.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,l.kt)(m,{mdxType:"Caption"},"Structure and spacing measurements for text area | px / rem"),(0,l.kt)("h2",null,"Sizes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Size"),(0,l.kt)("th",{parentName:"tr",align:null},"Height (px / rem)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Input"),(0,l.kt)("td",{parentName:"tr",align:null},"Small (sm)"),(0,l.kt)("td",{parentName:"tr",align:null},"32 / 2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Medium (md)"),(0,l.kt)("td",{parentName:"tr",align:null},"40 / 2.5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Large (lg)"),(0,l.kt)("td",{parentName:"tr",align:null},"48 / 3")))),(0,l.kt)("div",{className:"image--fixed"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"75%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAAAxUlEQVQ4y61UiwrDIBDr//9rC76rO804NzsrOBUqBB9gTO6CG6qRUrrmgvp8ZmztQX25Ju6hvbP1FBLRlKJWfZdQKQVrLZxz8N4jhPDD6RHPsKaQyaSUGcaYvC9w2oCsHxP2bDxmma3GGHM9eb5AhBTviRgSCiGw7zuO48hrrXV+RGkFLRRewiIFmq9hUdZDm9khIXfz0RqyTe4w27x12X27bM612DAJkzKYlGtYYKRCdJ/YpFFsViKzZHkWU8Eeqfn3E70BKCykjA7B+VsAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Sizes for text input",title:"Sizes for text input",src:"/static/02e02981f20193977c630b7c89965bf3/3cbba/text-input-style-size.png",srcSet:["/static/02e02981f20193977c630b7c89965bf3/7fc1e/text-input-style-size.png 288w","/static/02e02981f20193977c630b7c89965bf3/a5df1/text-input-style-size.png 576w","/static/02e02981f20193977c630b7c89965bf3/3cbba/text-input-style-size.png 1152w","/static/02e02981f20193977c630b7c89965bf3/392b1/text-input-style-size.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,l.kt)(m,{mdxType:"Caption"},"Text input sizes | px / rem"))}c.isMDXComponent=!0}}]);