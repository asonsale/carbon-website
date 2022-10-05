"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[51421],{28399:function(e,a,t){t.d(a,{Z:function(){return w}});var i=t(67294),n=t(88650),o=t.n(n),l=t(1597),s=t(64905),d=t(8878),p=t(75900),c=t.n(p);var r=e=>{let{title:a,theme:t,tabs:n=[]}=e;return i.createElement("div",{className:c()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":n.length,"PageHeader-module--dark-mode--WCeH8":"dark"===t})},i.createElement("div",{className:"cds--grid"},i.createElement("div",{className:"cds--row"},i.createElement("div",{className:"cds--col-lg-12"},i.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))};var m=e=>{let{relativePagePath:a,repository:t}=e;const{site:{siteMetadata:{repository:n}}}=(0,l.useStaticQuery)("1364590287"),{baseUrl:o,subDirectory:s,branch:d}=t||n,p=`${o}/edit/${d}${s}/src/pages${a}`;return o?i.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},i.createElement("div",{className:"cds--col"},i.createElement("a",{className:"EditLink-module--link--IDrl1",href:p},"Edit this page on GitHub"))):null},g=t(56328),A=t(51721);let b=function(e){function a(){return e.apply(this,arguments)||this}return(0,A.Z)(a,e),a.prototype.render=function(){const{title:e,tabs:a,slug:t}=this.props,n=t.split("/").filter(Boolean).slice(-1)[0],s=a.map((e=>{const a=o()(e,{lower:!0,strict:!0}),s=a===n,d=new RegExp(`${n}/?(#.*)?$`),p=t.replace(d,a);return i.createElement("li",{key:e,className:c()({"PageTabs-module--selected-item--aBB0K":s},"PageTabs-module--list-item--024o6")},i.createElement(l.Link,{className:"PageTabs-module--link--Kz-7R",to:`${p}`},e))}));return i.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},i.createElement("div",{className:"cds--grid"},i.createElement("div",{className:"cds--row"},i.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},i.createElement("nav",{"aria-label":e},i.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},a}(i.Component);var f=b,u=t(17680),h=t(75387),k=t(50041);var y=e=>{let{date:a}=e;const t=new Date(a);return a?i.createElement(k.X2,{className:"last-modified-date-module--row--XJoYQ"},i.createElement(k.sg,null,i.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",t.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var w=e=>{let{pageContext:a,children:t,location:n,Title:p}=e;const{frontmatter:c={},relativePagePath:A,titleType:b}=a,{tabs:k,title:w,theme:x,description:E,keywords:N,date:C}=c,{interiorTheme:v}=(0,h.Z)(),{site:{pathPrefix:T}}=(0,l.useStaticQuery)("2456312558"),U=T?n.pathname.replace(T,""):n.pathname,S=k?U.split("/").filter(Boolean).slice(-1)[0]||o()(k[0],{lower:!0}):"",R=x||v;return i.createElement(d.Z,{tabs:k,homepage:!1,theme:R,pageTitle:w,pageDescription:E,pageKeywords:N,titleType:b},i.createElement(r,{title:p?i.createElement(p,null):w,label:"label",tabs:k,theme:R}),k&&i.createElement(f,{title:w,slug:U,tabs:k,currentTab:S}),i.createElement(u.Z,{padded:!0},t,i.createElement(m,{relativePagePath:A}),i.createElement(y,{date:C})),i.createElement(g.Z,{pageContext:a,location:n,slug:U,tabs:k,currentTab:S}),i.createElement(s.Z,null))}},67217:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return s},default:function(){return h}});var i=t(45987),n=(t(67294),t(64983)),o=t(28399);const l=["components"],s={},d=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",a)},p=d("PageDescription"),c=d("InlineNotification"),r=d("AnchorLinks"),m=d("AnchorLink"),g=d("Caption"),A=d("Row"),b=d("Column"),f={_frontmatter:s},u=o.Z;function h(e){let{components:a}=e,t=(0,i.Z)(e,l);return(0,n.kt)(u,Object.assign({},f,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h4",null,"Maintainers:"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/vikkipaterson"},"Vikki Paterson"),",\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/chloepoulterdesign"},"Chloe Poulter")),(0,n.kt)(p,{mdxType:"PageDescription"},(0,n.kt)("p",null,"The import action transfers data or objects from an external source into a\nsystem.")),(0,n.kt)(c,{mdxType:"InlineNotification"},(0,n.kt)("p",null,"This pattern uses Carbon’s\n",(0,n.kt)("a",{parentName:"p",href:"https://www.carbondesignsystem.com/components/file-uploader/usage/"},"File uploader"),"\n(drag & drop) component.")),(0,n.kt)(r,{mdxType:"AnchorLinks"},(0,n.kt)(m,{mdxType:"AnchorLink"},"Choose a file (modal)"),(0,n.kt)(m,{mdxType:"AnchorLink"},"Choose a file (full page or side-panel)"),(0,n.kt)(m,{mdxType:"AnchorLink"},"Accessibility")),(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"68.40277777777779%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsSAAALEgHS3X78AAACW0lEQVQ4y62Sy28SURTG59+zARIeTUywid2xKqXloQnzngFmGBiEdmPTSINt6AbCI5KgRo2sXdAu2LhzZYy2Vos60M+cQx9p4sp0ki9ncu83v/vNPUfAHT/C4EUPsqbAzFuQFBWirHDNWzZspwS76NxS0SmhYBdveWVVQ/rRY7Q7HQiZTBo+vw8PV1cRiUQQDocRDkcQDIUQCAT+Kb/fj2AwyD7yLy8v497SEra2tiDIsoxUKoWS46BcLqNWq8Etl9FqtXB0dITj42Ou4/GY30mTyQSNRoP91WoVtVoVxWIRw+EQgiiKiMViUFUVkiSxkskkBoMBzn/+wMnJN5ydfcd0Or11V3t7e9jY2GA/hUqn02i32xCy2SwSiQQcx0GhUIBlWdA0FS9fvcbX0yk+fznF9NdvzGYzlud5DGw2mxyC/LZtQ9M09Hq9BXBzcxOu6/ImRTcMA2/evoM3B8MI4nlzeDPAm80ZeHh4yD7yk3RdR7/fvwHSfVwBaXM0es8fzufzy5+8AHCOyac/6H4A6o0mTEOHbd8ArxPG43GG0SKdSvG3t7f5t57vH2C/8QxPOx/xZAjkOoDUBszKAQxVhGGYME0T1Itut7sArq2t8f0RkEQGutdoNIoHKytYid5HKOZiKd5HIN6CL95FSnKRM1TousF+4jCQyOvr65yQ0tEmVTqAGrVQCWVbh2tl4VoiK5/Tr9PlcjnuNgOp3TQ2lOxqbGgMqNJhvCaKECUZoqRcS5JkyJd+RVGQyWR4doXd3V1UKhUe1Hq9/l+imdzZ2cFoNILA/bu4uDP9BQaoNOiWqoObAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example of an import modal",title:"Example of an import modal",src:"/static/c31f31e72067a6876d08e5b7a9b47fa1/3cbba/0.png",srcSet:["/static/c31f31e72067a6876d08e5b7a9b47fa1/7fc1e/0.png 288w","/static/c31f31e72067a6876d08e5b7a9b47fa1/a5df1/0.png 576w","/static/c31f31e72067a6876d08e5b7a9b47fa1/3cbba/0.png 1152w","/static/c31f31e72067a6876d08e5b7a9b47fa1/0b124/0.png 1728w","/static/c31f31e72067a6876d08e5b7a9b47fa1/4ea69/0.png 2304w","/static/c31f31e72067a6876d08e5b7a9b47fa1/0cbe4/0.png 2624w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,n.kt)(g,{mdxType:"Caption"},"Example of an import modal"),(0,n.kt)("h2",null,"Choose a file (modal)"),(0,n.kt)("p",null,"Where a single file is imported, import can take place in a modal."),(0,n.kt)("p",null,"When importing, users should have the option of uploading a local file using the\nfile upload component, offering file drag and drop and the ability to browse\nlocally to select a file. Additionally, provide the ability to add a file from\nan external resource."),(0,n.kt)("p",null,"If additional actions (e.g. adding metadata) are required to be performed on the\nfile(s), consider whether it would be more appropriate to use a side panel or\nfull page instead of a modal."),(0,n.kt)(A,{mdxType:"Row"},(0,n.kt)(b,{colLg:8,mdxType:"Column"},(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"59.72222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAABtUlEQVQoz5WTz27aQBDG81xI8AhcOeQV4IR4AQj/4dALERLOS0SoR84gRA5gSt1y6C02BvPHdrG93i+aSdZpExK1K32anbX2p292xletVgukZrOJTqeDbreLdrv9X6K7inOlNvV6HbPZDNvtFqfTCa7rwvM8jn+KvpGOxyPO5zPfqVQqDH4HXCwWsG0blmUxeLPZsFROkLfLMAyUy+XLQF3XsXccmOYjLMtk2G63Y6dBELDiOIaUEkIIBq5Wq4+By+U3nFwfG3sHe+vw/tIiIIE/BdZqNRg/1nB+A44r4QeAdwYiISHjOHGmFIl/AK7Xa2VBeUncyJczmfh8Bv40PimZmkJvRk0wTROHw4HfKooijoJcSQH7GGP+S8AwgfFshZubD4DUMTUe1AgaizAMuRm+78P1fED4+PoQIfdF4voWuLv/jnajjGbrQsnz+Zwvksv9fg/HcZI9wVWnwzDgnNZS1/8umaacRAe5XA6ZTIaVTqc5plIpZLNZjEYjTKdTTCaTZ43HPNTD4RDVavX1T1FASkqlEvL5PAqFQiLKi8Ui+v0+NE3DYDBIpGl36PV6aDQaCfAJDD8HxyCBYfsAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example of an import modal",title:"Example of an import modal",src:"/static/9b05cafb9d0f74a9458d87612d215c37/3cbba/01.png",srcSet:["/static/9b05cafb9d0f74a9458d87612d215c37/7fc1e/01.png 288w","/static/9b05cafb9d0f74a9458d87612d215c37/a5df1/01.png 576w","/static/9b05cafb9d0f74a9458d87612d215c37/3cbba/01.png 1152w","/static/9b05cafb9d0f74a9458d87612d215c37/0b124/01.png 1728w","/static/9b05cafb9d0f74a9458d87612d215c37/e957c/01.png 1920w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,n.kt)(g,{mdxType:"Caption"},"Example of an import modal"))),(0,n.kt)(A,{mdxType:"Row"},(0,n.kt)(b,{colLg:8,mdxType:"Column"},(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"59.72222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAAB6klEQVQoz5WTzWoaURSA81yCPoJbF30FXYkvoHH8X2RjETTrbrIq0kUXrrVioGowUhBLm8T592dGxxnnK/eKtk0TQi983DkznI9z7zlzUS6XEZRKJarVKrVajUql8l+I3JPn4vRQKBQYDAYYhsF6vWaz2eA4jtz/RHwTrFYrdrudzMnlclL8j3A4GqHrOqqqSrGmaagCVUXXDSl5vqbTKdls9mXh3XjE0rbQ1Cd0bYGhq1iWydZ12O89PM/jcDgQhiFBEEjhZDJ5WVgsFLj9OmFhbpk/WHx/tFGtLTsfHA+Cw7GiUBCGUvyGUGEwmvFzCQs7xHbBWMPuAM4etp5USZnAD94QFhSF8f0McRDPh/Uu5MMXl6ubGZ8HS071heHp9o7Cb9PJ63c4Go3RDZOnhcbD44If+hptOmelWjJd3lsYoK8ODOcB0wV0BxMuL18Rio7JcdlscF0H39uKmvADH9d12TguBC6fbn0SVyHv3sP1x3sqxSyl8jOhoigMh0OZaJomtm1jWRamYchdzJzoskB0XMRi3Y3Hfx9ZTLlAvEgkEsRiMUk0GpV7JBIhHo/T6XTo9/v0er0j3a4c6na7TT6f//2nnIQiyGQyJJNJUqnUGRGn02kajQatVotms3mm1bqmXq9TLBbPwl85RgSaEzx9FQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example of drag and drop file import",title:"Example of drag and drop file import",src:"/static/e86c1f42e87ddcee4a15ff6bcaed70bb/3cbba/02.png",srcSet:["/static/e86c1f42e87ddcee4a15ff6bcaed70bb/7fc1e/02.png 288w","/static/e86c1f42e87ddcee4a15ff6bcaed70bb/a5df1/02.png 576w","/static/e86c1f42e87ddcee4a15ff6bcaed70bb/3cbba/02.png 1152w","/static/e86c1f42e87ddcee4a15ff6bcaed70bb/0b124/02.png 1728w","/static/e86c1f42e87ddcee4a15ff6bcaed70bb/e957c/02.png 1920w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,n.kt)(g,{mdxType:"Caption"},"Example of drag and drop file import"))),(0,n.kt)(A,{mdxType:"Row"},(0,n.kt)(b,{colLg:8,mdxType:"Column"},(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"69.44444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsSAAALEgHS3X78AAAB5UlEQVQ4y42TyWrbUBSGs+oyJdu8RhZ1A3mGLLwPCdkX4qwsgUNky4NsDNl1UWj6DHkAd5fUxBDJli2P0KVHPE8a/nKOkeO4VtMLP/cK3fvd/wx3T1EUkBKJBFKpFNLpNM//q2QyyWddzp67iMViyOVy6HQ6GA6HGI1GO0X/SIPBALPZjM+Ew2EG/wXM5/MMbLVa6PV6vG632/zd7XYZtD3K5TIkSdoNLBQK6Pf7aDabDCEYgafTKRaLBcu2bTiOA8uyGFgqlXYDo9EoisUiJpMJQ0i03jUISOB3gbVajTeZprk+5Dra1rsOZVlGvV5fO9h25DUMw/DOoa7rXD23EFQEckhuXNE35ZL2USSUd8+QqWK0aTwes6gY1BqbIhhdpmkaGo0GstksIpGIN3A+n3OlXUd0AcuyVzJX89Jc5VAv/qMolENyQA38Nm8OYM8Ae/oqkzrAQtWgkD0aO5PJoFKpcDiqqkLVNGjqC160Ep7rFn7VgMcq8FQFHis2nn8DDz8NyBEJigukd0iiG/x+P3w+34aO8fnTEY5OTnF42cHBpYP98yU+Xpg4uFjgwxng+6LjLiUhnqA3vQEkeigUQjAYhCiKEAQBgihC5PkGgdtvCEj3uJa+r3Ul/YAgf0VSiTOMgH8Aej2KXcXT+HIAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example of loaded files in the import modal",title:"Example of loaded files in the import modal",src:"/static/ffa0aeae301dc9e91f96809f02f9b292/3cbba/03.png",srcSet:["/static/ffa0aeae301dc9e91f96809f02f9b292/7fc1e/03.png 288w","/static/ffa0aeae301dc9e91f96809f02f9b292/a5df1/03.png 576w","/static/ffa0aeae301dc9e91f96809f02f9b292/3cbba/03.png 1152w","/static/ffa0aeae301dc9e91f96809f02f9b292/0b124/03.png 1728w","/static/ffa0aeae301dc9e91f96809f02f9b292/e957c/03.png 1920w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,n.kt)(g,{mdxType:"Caption"},"Example of a loaded file in the import modal"))),(0,n.kt)("h3",null,"Import from a URL (modal)"),(0,n.kt)("p",null,"If your product supports importing from a URL, use this method."),(0,n.kt)(A,{mdxType:"Row"},(0,n.kt)(b,{colLg:8,mdxType:"Column"},(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"59.72222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAABwklEQVQoz42Ty2oqQRCG81SCPoJrn+HkAXQh7jImiuNG8YJzkmWeIIFsJJuAYiYbZRwcPFHwCt7wPmOccf5QlcwQEj2k4Ke7mu6vq7qqz0RRBCmRSCCdTiOXyyGTyfxK2WwWqVSKzzqcM2cSj8dRrVYxn8+x3W6h6zoMw+DREfnOGu2xLAu1Wg3RaBTJZPInUFEUTCYTjEYjTKdTjMdjnpNofbFY4Ls1m00IgnAcqKoqVqsVHybgbDbDcrnEbrfjaEzTxOFwgG3b7JNpmnYa2Gg0sF6vGUTabDY4ZgQk8H+BsVgM7XabNzm308FTMs1fAFutlgt0UnPAbnTu7APY+qfh4lTK9Xqd3244HGIwGHDa+/2eRe9Hgm2iNz3gUbFQegWenjVcXQoQT0VIBaBqUjGoQAShiKldtroBWAbD/lzbOL8Bbh+aEOMCEuIRoCzL3CLdbhe9Xo/V6XTQ7/e5QNx/uo63nQ7zjQpmQVUVCMKXPqQuJ9FCIBCAz+djeb1eHj0eD/x+P4rFIiqVCsrlMqtUKkOWX3B3d8/BuD/FAZITiUQQDAYRCoVckR8Oh5HP5yFJEgqFAgqfoyT95e/39eu9Ax5IB/kFQVxAAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example of importing with a URL",title:"Example of importing with a URL",src:"/static/ac5710b48dd356be81020ce37e380207/3cbba/04.png",srcSet:["/static/ac5710b48dd356be81020ce37e380207/7fc1e/04.png 288w","/static/ac5710b48dd356be81020ce37e380207/a5df1/04.png 576w","/static/ac5710b48dd356be81020ce37e380207/3cbba/04.png 1152w","/static/ac5710b48dd356be81020ce37e380207/0b124/04.png 1728w","/static/ac5710b48dd356be81020ce37e380207/e957c/04.png 1920w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,n.kt)(g,{mdxType:"Caption"},"Example of importing with a URL"))),(0,n.kt)(A,{mdxType:"Row"},(0,n.kt)(b,{colLg:8,mdxType:"Column"},(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"69.44444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsSAAALEgHS3X78AAAB5klEQVQ4y42Ty07bQBSGWbEsYstrsCBF6jOwyL4CsUeCrmJLQThxQpwoErsuKrU8Aw8QdrQRkbATJ85VYpmrcr/49qNzIqdpGpeO9GvOyJ5v/nPmzI6iKCAlEgmkUimk02me/1fJZJL3epwdL4jH48jlcuh0OhgOhxiNRltF30iDwQCz2Yz3RCIRBv8FzOfzDGy1Wuj1ehy3221ed7tdBm2OcrkMSZK2AwuFAvr9PprNJkMIRuDpdIrFYsFyHAeu68K2bQaWSqXtwFgshmKxiMlkwhASxdsGAQn8LrBWq/FPlmWtNnmONvWuQ1mWUa/XVw42HfkNwzD8a6jrOt8e1Y9EMTkkN55oTbWkb5QJ1d03Zbox0zRXrTEej7k11kUwOkzTNDQaDWSzWUSjUX/gfD7n0z1H5IJlO0tZy9m0ljXUi/+4FKohOaAG/rNuLuDMAGf6WxZ1gI2qQSn7NHYmk0GlUuF0VFWFqmnQ1Be8aCU81238qgFPVeBnFXiqOHh+BR4eDchRCYoHpHdIohOCwSACgcCajvHx6BCHn05wcN7B/rmLD6cm9s4s7J8tsPsZCFzouEtJuE3Qm14DEj0cDiMUCkEURQiCAEEUIfJ8jaubb7iSfuCL9H2lS+kegvwVSeWWYQR8A0w4ikV99NkdAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example of a file imported by URL",title:"Example of a file imported by URL",src:"/static/8c7de0ee4ba0d5749c5eacd52a6c671f/3cbba/05.png",srcSet:["/static/8c7de0ee4ba0d5749c5eacd52a6c671f/7fc1e/05.png 288w","/static/8c7de0ee4ba0d5749c5eacd52a6c671f/a5df1/05.png 576w","/static/8c7de0ee4ba0d5749c5eacd52a6c671f/3cbba/05.png 1152w","/static/8c7de0ee4ba0d5749c5eacd52a6c671f/0b124/05.png 1728w","/static/8c7de0ee4ba0d5749c5eacd52a6c671f/e957c/05.png 1920w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,n.kt)(g,{mdxType:"Caption"},"Example of a file imported by URL"))),(0,n.kt)("h2",null,"Choose a file (full page or side-panel)"),(0,n.kt)("p",null,"Use the drag and drop file upload component and offer the option to browse\nlocally to select a file. Note that file selection should be restricted to\nallowed file types."),(0,n.kt)("p",null,"If additional actions (e.g. adding metadata) are required to be performed on the\nfile(s) they should be done separately to the file upload, prior to the import\naction being completed. This could be in a subsequent step or if there is\nsufficient space include those actions in a single step."),(0,n.kt)(A,{mdxType:"Row"},(0,n.kt)(b,{colLg:8,mdxType:"Column"},(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"68.40277777777779%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsSAAALEgHS3X78AAABYklEQVQ4y62T226CQBCG97m9gNSYeOFLVJPe+QBeNbE3voSmaQkHOewRFqUxfzNbQSxNY2MvvmUY2J9/ZlgmhMB+v0dCJMmfiOMYURR1MeccbLFYwPc8jMcP8H0Pvu93eJ73K9PpFLPZDJPJBKPRCPP5HMyUNQppkQsLqSsYY1CWJaqqwuFwQF3XA6y1OB6PWK/XWC6X2G63ziHtZVTyexCi4BIFF8jzHJSTUjqUUtBaX0E5+uhms8FqtcJut0MYhu59RksQvCGJqRex60eapq4fRVG4q9ZmIEo0TYPT6eQct1UxqTRegwxBlIGLixuyT9jKwJbaiRqjHe1zctqvgEQZBWnGXbmqJ/TVS4M4M4gycxYyZ+EhnSDdSCGglHTW26ZbW+OjsXh6qfH4bGGrGwVp6ScHA9CXcm8W/N63a3Qn1sY3CQ4dfnelf6ygv3cgeA9XQ2nHfy/upNDPSUfsPyCtT91fEkGtvBouAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example of an import dialog in a full page view",title:"Example of an import dialog in a full page view",src:"/static/512eaeb832476d4131425a0c7869af20/3cbba/06.png",srcSet:["/static/512eaeb832476d4131425a0c7869af20/7fc1e/06.png 288w","/static/512eaeb832476d4131425a0c7869af20/a5df1/06.png 576w","/static/512eaeb832476d4131425a0c7869af20/3cbba/06.png 1152w","/static/512eaeb832476d4131425a0c7869af20/0b124/06.png 1728w","/static/512eaeb832476d4131425a0c7869af20/4ea69/06.png 2304w","/static/512eaeb832476d4131425a0c7869af20/0cbe4/06.png 2624w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,n.kt)(g,{mdxType:"Caption"},"Example of an import dialog in a full page view"))),(0,n.kt)(A,{mdxType:"Row"},(0,n.kt)(b,{colLg:8,mdxType:"Column"},(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"68.40277777777779%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsSAAALEgHS3X78AAABx0lEQVQ4y61US2saURid/ymuR3yAKxF1VFDH99iFCCJkCq5EqHQj4sKVpRBqCtkUdCGYCjatjk2a0szrlHPNhFCkusjAufe79373e547El75k/r9PprNJtrtNqrVKsrlMiqVylmo1WrQtDreNBooFougLcnn88Hv9yMUCiEYDCIcDgtwTbxcc45EIgjIMhQljQ8fL3E5u8bs8zU+za6wmM8hUSmZTAqPjJBevdmT/91XVRXdbheu6+LRtGGaFszHP4eUA4EAotEostmsQDqdRiqVQiaTEWvK3PPOFEVBIpFAq9XCerPDan2L2+0e978tmJYFSZZlcUnTtOfaMJJjslc3VS3gQn+L9dbG3YOD91cPkC++YXtvHgwy5Xq9flZD6KBQoEEdxv4O+/1PfP3+C813P/Dl5ilCpkDFUql0EnSay+Wg6zps+5AmYGG+ATaGczAYi8VEoal4CoyOtex0Os/cc1yOHI4YzOfz/8VLg7ZtCziOA8dxhSyRe/F4XKRD5VMggdlxpnz0pZDUJCu9sjmnQEZ4AUwmE4zHYyyXS+x2OxiGAanX62EwGGA0GmE4HJ4F6vJO4+nJTadTLBYLrFYrSK/9c/gLvedIA47llMkAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example of drag and drop file import in a full page view",title:"Example of drag and drop file import in a full page view",src:"/static/0551808550cb8a585223ee94db75f8ad/3cbba/07.png",srcSet:["/static/0551808550cb8a585223ee94db75f8ad/7fc1e/07.png 288w","/static/0551808550cb8a585223ee94db75f8ad/a5df1/07.png 576w","/static/0551808550cb8a585223ee94db75f8ad/3cbba/07.png 1152w","/static/0551808550cb8a585223ee94db75f8ad/0b124/07.png 1728w","/static/0551808550cb8a585223ee94db75f8ad/4ea69/07.png 2304w","/static/0551808550cb8a585223ee94db75f8ad/0cbe4/07.png 2624w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,n.kt)(g,{mdxType:"Caption"},"Example of drag and drop file import in a Slide over panel"))),(0,n.kt)(A,{mdxType:"Row"},(0,n.kt)(b,{colLg:8,mdxType:"Column"},(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"68.40277777777779%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsSAAALEgHS3X78AAABUUlEQVQ4y52SzY6CMBSF+9puYGZi4sKXMG59ApfufAlNZJCiQvkRKGL0TE6TGgYwo7P4eku5Pb3ntkIpBSlDSCnfZr/fw/d9BEFg5nEcQ8zncziOg6/PD7iOA9d1zfcrTCYTTKdTjMdjjEYjzGYziKKskeQaKtPIC42yLA1VVeFyuaCu60Gu1ytWqxUWiwU2mw3CMERRFBAqSeB9+4hUijhWOJ1OYBuSJEGapoYsy3qcz2es12ssl0tst1tjmbmCg+d5kDIwp5Dj8WhE2RPGPM8HaZoGt9vNuGF1dCb443A4GOzJbZjIyDwb7dxWa9eMZf6IouhRSVfQ2u6KdXkIcrCJWmvTcEY7Zzt2u917gqyA0dqzsbthSKgnyEbSLht8v99Nk9twraqb9wStXb67IcpK9y6lTc9y+5RnG/7i1y0PPdz/QC3B3vE2n9l9FWpQ6wf/TBSULJEiywAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example of files loading into the import dialog",title:"Example of files loading into the import dialog",src:"/static/b6d856c30c1b903501d9f295e66e57f2/3cbba/08.png",srcSet:["/static/b6d856c30c1b903501d9f295e66e57f2/7fc1e/08.png 288w","/static/b6d856c30c1b903501d9f295e66e57f2/a5df1/08.png 576w","/static/b6d856c30c1b903501d9f295e66e57f2/3cbba/08.png 1152w","/static/b6d856c30c1b903501d9f295e66e57f2/0b124/08.png 1728w","/static/b6d856c30c1b903501d9f295e66e57f2/4ea69/08.png 2304w","/static/b6d856c30c1b903501d9f295e66e57f2/0cbe4/08.png 2624w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,n.kt)(g,{mdxType:"Caption"},"Example of files loading into the import dialog"))),(0,n.kt)(A,{mdxType:"Row"},(0,n.kt)(b,{colLg:8,mdxType:"Column"},(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"68.40277777777779%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsSAAALEgHS3X78AAABZUlEQVQ4y6WSy07DMBBF/dNsE8omqLBni8quCLEF1EVBQlT8RdOkeT/rxGlKetFYcglpKlqxOBnH47n2XJvFcQzHceE4zsnYtg3LsmDbDkxriSiKwEajETRNw8XgHLqmQdd1+X8MhmFgOLzC9eUAxuAMd6NbMF5USHKBOBPIuUBRFJKyLLFer1FVVS+bzQbT6SseH8a4f4twMwEWQQUWJwnMhYUwThFFMYIgANmQJAnSNJVkWbbHarXCx2yGycsTnj99jN8FLI+DUYFpmnCcJVzXlfi+L0XJE4p5nvdS1zW+mgZNzYE6gyg5GCU8z5OondtwzmWkdSqq8c+Jc6RZLtcySoRhuDtJV1C13RXrQvNSkD5qoRBCGk5RjcmO+Xx+miCdgKJqT8VuQZ/QniA9EWqXDN5ut2jI5BY0R7mTBFW79O76oFz3Utrstdze5VDBX+wEf1///yAtRv7QbR5q91hIg7S+AYLyE5Ga/lclAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example of files loaded in the import dialog",title:"Example of files loaded in the import dialog",src:"/static/b7ae259dfaeb55c26ee87322071ebc39/3cbba/09.png",srcSet:["/static/b7ae259dfaeb55c26ee87322071ebc39/7fc1e/09.png 288w","/static/b7ae259dfaeb55c26ee87322071ebc39/a5df1/09.png 576w","/static/b7ae259dfaeb55c26ee87322071ebc39/3cbba/09.png 1152w","/static/b7ae259dfaeb55c26ee87322071ebc39/0b124/09.png 1728w","/static/b7ae259dfaeb55c26ee87322071ebc39/4ea69/09.png 2304w","/static/b7ae259dfaeb55c26ee87322071ebc39/0cbe4/09.png 2624w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,n.kt)(g,{mdxType:"Caption"},"Example of files loaded in the import dialog"))),(0,n.kt)("h3",null,"Import from a URL (full page or side-panel)"),(0,n.kt)("p",null,"If your product supports importing from a URL, use this method."),(0,n.kt)(A,{mdxType:"Row"},(0,n.kt)(b,{colLg:8,mdxType:"Column"},(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"68.40277777777779%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsSAAALEgHS3X78AAAB0UlEQVQ4y62USYsaURSF639KrxUHcCXiDM6zC6EjSpQ0BIwLN0EMCS5CkEhcZBdwkV02xra61ZRVWvqFW3Y1mYgu+sHhDXXfuee8eymFJx5Kr9ejXq/TaDQoFovk83kKhcJFKJfLVKtVarUauVwO4VIcDgdXV1d4PB7cbjder9eC7AW/7mX2+Xw4nU6i0Sjj8ZhP0ynT6ZTJZMJsNkORoHA4bGUUhaVS6XG213+eZ7MZXtzcsN/v0HUNwzA42pZdLhd+v59EImEhFosRiUSIx+PWXtZyZn8TZaFQiGfX13xXNeaqhrHbn9iOJorIl0uVSuXxbUTJv9YCUZhOp+l0OtytNizVe/Ttlm+3Jneb/YlQLMsDX1IQSWATrtdrVFVlq615+V7j81f9RCgWJFAqdQ6SNJlM0m632e12mKbJ4XAABA+WA4EAmUzGCjwHUSdv2Wq1mM/nLJdLNE1jtdqg68bfhKlU6r+wCZvNpkV4u1iw3vzgfrVhuzVQpPeCwaBlR4LPIZvNWhUXy7+PB8vS1NKsklWKcw7SEbaA0WjE6N0bXn9c8GoCH76YKN1ul36/z3A4ZDAYXASJlTuVSpVSIUO8PcP7/EjzrY7ydL8FUzqbn2v+RvKsId/KAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example of importing with a URL",title:"Example of importing with a URL",src:"/static/c467acc7c75fecf27263ecbcfdac6b66/3cbba/10.png",srcSet:["/static/c467acc7c75fecf27263ecbcfdac6b66/7fc1e/10.png 288w","/static/c467acc7c75fecf27263ecbcfdac6b66/a5df1/10.png 576w","/static/c467acc7c75fecf27263ecbcfdac6b66/3cbba/10.png 1152w","/static/c467acc7c75fecf27263ecbcfdac6b66/0b124/10.png 1728w","/static/c467acc7c75fecf27263ecbcfdac6b66/4ea69/10.png 2304w","/static/c467acc7c75fecf27263ecbcfdac6b66/0cbe4/10.png 2624w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,n.kt)(g,{mdxType:"Caption"},"Example of importing with a URL"))),(0,n.kt)(A,{mdxType:"Row"},(0,n.kt)(b,{colLg:8,mdxType:"Column"},(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"68.40277777777779%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsSAAALEgHS3X78AAABcElEQVQ4y6WTTU+DQBCG+dNewXrBVO+eTAzeaoxXa3qoJkbjz6BQkG92l10+bF4zKIqW2qqHB7K77LOzM4OWJAk8z4fneb/GdV04jgPX9WA7S8RxDM2yLOi6joPRPgxdh2EY7XgXTNPEeHyE48MRzNEezq0zaKIokTKFJFdgQqEoihYpJaqqQlmWgzRNg/n8FleXE1zcxTiZAYuwhJakKeyFgyjJEMcJwjAEpSFNU2RZ1pLn+Rqcczw8PmJ2c43pU4DJvYLzLKDRBtu24XlL+L7fEgRBK6Wc0JsxDsbYGnVd42W1wqoWQJ1DSQGNFkhAdCf3kcUbJOWctdAeWvuMmCHLGYToCaMoWhMKweGHDMuwE/EP2XdovhXSgPJGUppUSrUFKaREU0lYswSn0/g9SrZdSA+KrKsujftwLsBoA++uzLcLu8iGoBahiDdFtlG4ibx3zU3fDAp/On0XvhRlqHH/Ark0ak7KE/1m/4Ec5HoF+BIRhPE1rSMAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example of importing with a URL",title:"Example of importing with a URL",src:"/static/593ec49d5d1d19bbcfd5676aa3dd1f5c/3cbba/11.png",srcSet:["/static/593ec49d5d1d19bbcfd5676aa3dd1f5c/7fc1e/11.png 288w","/static/593ec49d5d1d19bbcfd5676aa3dd1f5c/a5df1/11.png 576w","/static/593ec49d5d1d19bbcfd5676aa3dd1f5c/3cbba/11.png 1152w","/static/593ec49d5d1d19bbcfd5676aa3dd1f5c/0b124/11.png 1728w","/static/593ec49d5d1d19bbcfd5676aa3dd1f5c/4ea69/11.png 2304w","/static/593ec49d5d1d19bbcfd5676aa3dd1f5c/0cbe4/11.png 2624w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,n.kt)(g,{mdxType:"Caption"},"Example of importing with a URL"))),(0,n.kt)("h2",null,"Accessibility"),(0,n.kt)("p",null,"Refer to accessibility guidance for the components implemented:\n",(0,n.kt)("a",{parentName:"p",href:"https://www.carbondesignsystem.com/components/modal/usage#behaviors"},"Modal"),",\n",(0,n.kt)("a",{parentName:"p",href:"https://www.carbondesignsystem.com/components/file-uploader/usage#interactions"},"File uploader"),"."),(0,n.kt)("p",null,"The keyboard behavior of an upload or import interaction depends on how many\nfiles are imported or uploaded."),(0,n.kt)("h3",null,"Single file uploads and imports"),(0,n.kt)("p",null,"Single file uploads and imports often happen in a modal, however this guidance\nis applicable to any single file upload or import interaction."),(0,n.kt)("h4",null,"Trigger"),(0,n.kt)("p",null,"Often, the upload or import modal (page, or panel) is launched by a button\npress."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The user navigates to the Import button using the ",(0,n.kt)("inlineCode",{parentName:"li"},"Tab")," key. If Import is\nlaunched from an overflow menu, the user may navigate to Import within the\noverflow menu using the ",(0,n.kt)("inlineCode",{parentName:"li"},"Up")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"Down")," arrow keys."),(0,n.kt)("li",{parentName:"ol"},"The focus state is applied to the button/menu item."),(0,n.kt)("li",{parentName:"ol"},"The user presses ",(0,n.kt)("inlineCode",{parentName:"li"},"Enter")," to launch the Import modal.")),(0,n.kt)("h4",null,"Focus"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"On opening the modal (page, or panel), the focus is applied to the first\nfield that accepts user input. In the case of Import modals, this is the drag\n& drop area."),(0,n.kt)("li",{parentName:"ol"},"On ",(0,n.kt)("inlineCode",{parentName:"li"},"Tab"),", focus is applied to the second field that accepts user input. If\nthe URL field option is present, focus is applied to this."),(0,n.kt)("li",{parentName:"ol"},"If enabled, on ",(0,n.kt)("inlineCode",{parentName:"li"},"Tab"),", focus is applied to the primary button (for example\nSave or Next). An Import button should not be enabled until a file is\nselected."),(0,n.kt)("li",{parentName:"ol"},"On ",(0,n.kt)("inlineCode",{parentName:"li"},"Tab"),", focus is applied to the Cancel button.")),(0,n.kt)("p",null,"The user cycles input methods using ",(0,n.kt)("inlineCode",{parentName:"p"},"Tab")," and hits ",(0,n.kt)("inlineCode",{parentName:"p"},"Return")," to activate their\nchosen option (file uploader or URL)."),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Using the file uploader"),(0,n.kt)("br",{parentName:"p"}),"\n","If the user chooses the file uploader, they select files using the\nbrowser-native file browser and click the call to action. This returns them to\nthe modal with an optional file loading state."),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Using the URL field"),(0,n.kt)("br",{parentName:"p"}),"\n","If the user chooses the URL field, the field gains focus and the user inputs\ntheir URL.",(0,n.kt)("br",{parentName:"p"}),"\n","On ",(0,n.kt)("inlineCode",{parentName:"p"},"Tab"),", focus is applied to the Add file button.",(0,n.kt)("br",{parentName:"p"}),"\n","On ",(0,n.kt)("inlineCode",{parentName:"p"},"Return")," the file is uploaded with an optional loading state. The user can\nalso key ",(0,n.kt)("inlineCode",{parentName:"p"},"Return")," while focus is applied to the URL field to trigger the Add\nfile button."),(0,n.kt)("h4",null,"Once the file is selected"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Focus is applied to the remove icon on the added file. The user hits ",(0,n.kt)("inlineCode",{parentName:"li"},"Return"),"\nto remove the chosen file and return to the original state of the modal."),(0,n.kt)("li",{parentName:"ol"},"On ",(0,n.kt)("inlineCode",{parentName:"li"},"Tab"),", focus is applied to the Import button"),(0,n.kt)("li",{parentName:"ol"},"On ",(0,n.kt)("inlineCode",{parentName:"li"},"Tab"),", focus is applied to the Cancel button")),(0,n.kt)("h3",null,"Multiple file uploads and imports"),(0,n.kt)("p",null,"When multiple files may be selected a modal is not used."),(0,n.kt)("h4",null,"Focus"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"On entering an Import section or page, focus on the first ",(0,n.kt)("inlineCode",{parentName:"li"},"Tab")," keystroke is\napplied to the first field accepting user input. In most cases this is the\nfile uploader."),(0,n.kt)("li",{parentName:"ol"},"On ",(0,n.kt)("inlineCode",{parentName:"li"},"Tab"),", focus is applied to the the URL field."),(0,n.kt)("li",{parentName:"ol"},"The user keys ",(0,n.kt)("inlineCode",{parentName:"li"},"Return")," to choose between the file uploader and URL field.")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Using the file uploader"),(0,n.kt)("br",{parentName:"p"}),"\n","If the user chooses the file uploader, they select files using the\nbrowser-native file selector and click the call to action. This returns them to\nthe page with an optional file loading state."),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Using the URL field"),(0,n.kt)("br",{parentName:"p"}),"\n","If the user chooses the URL field, the field gains focus and the user inputs\ntheir URL.",(0,n.kt)("br",{parentName:"p"}),"\n","On ",(0,n.kt)("inlineCode",{parentName:"p"},"Tab"),", focus is applied to the Add file button.",(0,n.kt)("br",{parentName:"p"}),"\n","On ",(0,n.kt)("inlineCode",{parentName:"p"},"Return")," the file is uploaded with an optional loading state. The user can\nalso key ",(0,n.kt)("inlineCode",{parentName:"p"},"Return")," while focus is applied to the URL field to trigger the Add\nfile button."),(0,n.kt)("h4",null,"When (some) files are selected"),(0,n.kt)("p",null,"When some of the allowed number of files are selected, focus cycles through\nadding more files and removing the selected files."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Focus returns to the just-used file selection method. For example, if the file\nadded so far was added by URL, return focus to the URL field to allow the user\nto add another."),(0,n.kt)("li",{parentName:"ul"},"If the method used was the file uploader, on ",(0,n.kt)("inlineCode",{parentName:"li"},"Tab"),", apply focus to the URL\nfield."),(0,n.kt)("li",{parentName:"ul"},"On ",(0,n.kt)("inlineCode",{parentName:"li"},"Tab"),", apply focus to the remove icon on the added file(s), moving through\neach using ",(0,n.kt)("inlineCode",{parentName:"li"},"Tab"),".")),(0,n.kt)("h4",null,"On reaching the maximum number of added files"),(0,n.kt)("p",null,"In some use cases, there are a maximum number of allowed files. In this\nsituation, the file selection methods are in disabled state. Focus cycles\nbetween the selected files remove actions, and moving to the next section of the\npage."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"On returning to the page/panel from the final file uploader/add file\ninteraction, (after any optional loading state) focus is applied to the\nremove icon on the uploaded files."),(0,n.kt)("li",{parentName:"ol"},"On keying ",(0,n.kt)("inlineCode",{parentName:"li"},"Tab"),", focus moves through the remove icon of each uploaded file."),(0,n.kt)("li",{parentName:"ol"},"On continued use of ",(0,n.kt)("inlineCode",{parentName:"li"},"Tab"),", focus is applied to the next section or\ninteraction in the page.")),(0,n.kt)("h2",null,"Feedback"),(0,n.kt)("p",null,"Please help us improve by raising an issue on Carbon."))}h.isMDXComponent=!0}}]);