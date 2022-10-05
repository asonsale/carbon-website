"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[516],{28399:function(e,t,a){a.d(t,{Z:function(){return w}});var n=a(67294),i=a(88650),o=a.n(i),r=a(1597),s=a(64905),l=a(8878),c=a(75900),d=a.n(c);var m=e=>{let{title:t,theme:a,tabs:i=[]}=e;return n.createElement("div",{className:d()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":i.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var p=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:i}}}=(0,r.useStaticQuery)("1364590287"),{baseUrl:o,subDirectory:s,branch:l}=a||i,c=`${o}/edit/${l}${s}/src/pages${t}`;return o?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},b=a(56328),u=a(51721);let g=function(e){function t(){return e.apply(this,arguments)||this}return(0,u.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,i=a.split("/").filter(Boolean).slice(-1)[0],s=t.map((e=>{const t=o()(e,{lower:!0,strict:!0}),s=t===i,l=new RegExp(`${i}/?(#.*)?$`),c=a.replace(l,t);return n.createElement("li",{key:e,className:d()({"PageTabs-module--selected-item--aBB0K":s},"PageTabs-module--list-item--024o6")},n.createElement(r.Link,{className:"PageTabs-module--link--Kz-7R",to:`${c}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(n.Component);var h=g,k=a(17680),f=a(75387),A=a(50041);var y=e=>{let{date:t}=e;const a=new Date(t);return t?n.createElement(A.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(A.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var w=e=>{let{pageContext:t,children:a,location:i,Title:c}=e;const{frontmatter:d={},relativePagePath:u,titleType:g}=t,{tabs:A,title:w,theme:E,description:v,keywords:C,date:N}=d,{interiorTheme:x}=(0,f.Z)(),{site:{pathPrefix:L}}=(0,r.useStaticQuery)("2456312558"),P=L?i.pathname.replace(L,""):i.pathname,T=A?P.split("/").filter(Boolean).slice(-1)[0]||o()(A[0],{lower:!0}):"",R=E||x;return n.createElement(l.Z,{tabs:A,homepage:!1,theme:R,pageTitle:w,pageDescription:v,pageKeywords:C,titleType:g},n.createElement(m,{title:c?n.createElement(c,null):w,label:"label",tabs:A,theme:R}),A&&n.createElement(h,{title:w,slug:P,tabs:A,currentTab:T}),n.createElement(k.Z,{padded:!0},a,n.createElement(p,{relativePagePath:u}),n.createElement(y,{date:N})),n.createElement(b.Z,{pageContext:t,location:i,slug:P,tabs:A,currentTab:T}),n.createElement(s.Z,null))}},26532:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return k}});var n=a(45987),i=(a(67294),a(64983)),o=a(28399);a(93363);const r=["components"],s={},l=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},c=l("PageDescription"),d=l("AnchorLinks"),m=l("AnchorLink"),p=l("Row"),b=l("Column"),u=l("Caption"),g={_frontmatter:s},h=o.Z;function k(e){let{components:t}=e,a=(0,n.Z)(e,r);return(0,i.kt)(h,Object.assign({},g,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(c,{mdxType:"PageDescription"},(0,i.kt)("p",null,"No accessibility annotations are needed for radio buttons, but keep these\nconsiderations in mind if you are modifying Carbon or creating a custom\ncomponent.")),(0,i.kt)(d,{mdxType:"AnchorLinks"},(0,i.kt)(m,{mdxType:"AnchorLink"},"What Carbon provides"),(0,i.kt)(m,{mdxType:"AnchorLink"},"Design recommendations"),(0,i.kt)(m,{mdxType:"AnchorLink"},"Development considerations")),(0,i.kt)("h2",null,"What Carbon provides"),(0,i.kt)("p",null,"Carbon bakes keyboard operation into its components, improving the experience of\nblind users and others who operate via the keyboard. Carbon incorporates many\nother accessibility considerations, some of which are described below."),(0,i.kt)("h3",null,"Keyboard interaction"),(0,i.kt)("p",null,"A group of radio buttons takes a single tab stop. Carbon requires an item to be\nselected by default, and this item will always take focus. The user changes the\nselected radio button using the arrow keys (up/down or left/right). Pressing\n",(0,i.kt)("inlineCode",{parentName:"p"},"Tab")," again will move focus out of the radio button group to the next component."),(0,i.kt)(p,{mdxType:"Row"},(0,i.kt)(b,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABjklEQVQoz5XRSy8DURgG4Hf0oq0Ubc98M+3MVIViaBRREmlcIqm2Em0nSCpYYSkkIpFUQqQLnUFXCBYsLWxt/A8bP6YydYlY0HmTd3VOnpzvO8CvZBQdE55jTPvL6MQukt4T5KMXWOg+R1rWkQ2fo+FkFb0OJtuOMMPKkLGFpL9kLyRKXE68R8p7C03TGsQ6DMyHP8CNyTvucP0JxeHLRKG3+jLLTgfnggam5L0mxhiIqN4/Y0LmC8GekesxkBIrzuV41ZUbKMcWkwftEUcWAcmJhsDM56hf3RTeUJAfPOORFb4r4WIjY/2BsNzZwhjzCILQbBlMyWX3tvpqUwPz/vYWQfH5/CLP80REQSLyWQVds6Ejmxcx1C5r5nGrFFQknuqiaBVsyii6M4EqlobOoMUMIR0tqeDgkMSIm4jMOqyANhPcX3rE2ugNivGrsbxaWQdg6wj1tBFRKxHZ/wWzYeMn6p6TKlwUOygOXUFTL1DTa+iW49+/a3WH5tjutFyxr45eI9+nc+adSEhtCHwHOsNq5Xbr3jYAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"example of tabbing into a radio button group and arrowing between selections",title:"example of tabbing into a radio button group and arrowing between selections",src:"/static/2521f80f3ee018b28404091fd9a37a36/3cbba/radio-button-accessibility-1.png",srcSet:["/static/2521f80f3ee018b28404091fd9a37a36/7fc1e/radio-button-accessibility-1.png 288w","/static/2521f80f3ee018b28404091fd9a37a36/a5df1/radio-button-accessibility-1.png 576w","/static/2521f80f3ee018b28404091fd9a37a36/3cbba/radio-button-accessibility-1.png 1152w","/static/2521f80f3ee018b28404091fd9a37a36/92c65/radio-button-accessibility-1.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)(u,{mdxType:"Caption"},"A radio button group is a single tab stop and radio buttons are selected using arrow keys."))),(0,i.kt)("h3",null,"Labeling and states"),(0,i.kt)("p",null,"Carbon surfaces the labeling of radio buttons and groups to screen readers and\nother assistive technologies. Carbon also provides state and context\ninformation, such as the number of items in the radio button group."),(0,i.kt)(p,{mdxType:"Row"},(0,i.kt)(b,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABlUlEQVQoz72QTS8DQRzGnzUIh6qXTbsdbXe3Cdt3faEVKQ4OWi0RVUov6GdQfaNpgtBdCaVcSFxpQtz4XD4AsRUJaQ+9eJJfnpl/Mr+ZDNAkEaOMGe2hykTnAdzIwYsiPChgDPnvfUFtH1NEoKukEuwuoWkipgpmB8uYHSpjUpNlnNglDmRV7NgjNmSIEzliRYa4kSc+pkh8KMLfsd9CaJSRDt0y6dAd4rbqemr85iXpuXrY9F3XU/7remr8pr7hramd9NQeE67Lp4Szalh1VJsLw8YK5vrPMae5JIvSsbhslR1LwgUfFRQxJpyJMUERG2u1hSiviFFe6VzgldbCteFnbNBXEuCTdER0sjvSG8LCIZYs54iJZ7+ICsoPLf5QRt7+jiPXRwffP6G3sEHJS+PmeeMpCZtPMG86YSIm+S/quZYvBIGKoc/GmlmXYOE8hgVaZVbM9wjQLbSVr5sG4EYP7I1BF0ivHsRKp2HlZhCg2+0LWcaLPrgbgx5AowckOoVRbqp94d9otVpwHAdKKXQ6Hf41n+SbZdvXoCmjAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:'"color group, Purple radio button checked, 2 of 3"',title:'"color group, Purple radio button checked, 2 of 3"',src:"/static/2722ac8a49148ba52b7210f315546254/3cbba/radio-button-accessibility-2.png",srcSet:["/static/2722ac8a49148ba52b7210f315546254/7fc1e/radio-button-accessibility-2.png 288w","/static/2722ac8a49148ba52b7210f315546254/a5df1/radio-button-accessibility-2.png 576w","/static/2722ac8a49148ba52b7210f315546254/3cbba/radio-button-accessibility-2.png 1152w","/static/2722ac8a49148ba52b7210f315546254/92c65/radio-button-accessibility-2.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)(u,{mdxType:"Caption"},"JAWS screen reader output, based on the information provided by Carbon."))),(0,i.kt)("h2",null,"Development considerations"),(0,i.kt)("p",null,"Keep this in mind if you’re modifying Carbon or creating a custom component."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Carbon uses ",(0,i.kt)("inlineCode",{parentName:"li"},"fieldset")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"legend")," to group and label sets of radio buttons."),(0,i.kt)("li",{parentName:"ul"},"Carbon uses ",(0,i.kt)("inlineCode",{parentName:"li"},"label")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"for")," to programmatically connect radio buttons with\ntheir labels."),(0,i.kt)("li",{parentName:"ul"},"Required radio button groups must be identified programmatically, either via\nthe label or with ",(0,i.kt)("inlineCode",{parentName:"li"},"aria-required"),"."),(0,i.kt)("li",{parentName:"ul"},"See the\n",(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/ARIA/apg/patterns/radiobutton/"},"ARIA authoring practices"),"\nfor more considerations.")))}k.isMDXComponent=!0}}]);