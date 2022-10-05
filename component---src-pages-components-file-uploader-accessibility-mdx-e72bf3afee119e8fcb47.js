"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[15256],{28399:function(e,t,a){a.d(t,{Z:function(){return v}});var n=a(67294),i=a(88650),o=a.n(i),l=a(1597),s=a(64905),r=a(8878),c=a(75900),d=a.n(c);var p=e=>{let{title:t,theme:a,tabs:i=[]}=e;return n.createElement("div",{className:d()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":i.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var m=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:i}}}=(0,l.useStaticQuery)("1364590287"),{baseUrl:o,subDirectory:s,branch:r}=a||i,c=`${o}/edit/${r}${s}/src/pages${t}`;return o?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},u=a(56328),g=a(51721);let b=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,i=a.split("/").filter(Boolean).slice(-1)[0],s=t.map((e=>{const t=o()(e,{lower:!0,strict:!0}),s=t===i,r=new RegExp(`${i}/?(#.*)?$`),c=a.replace(r,t);return n.createElement("li",{key:e,className:d()({"PageTabs-module--selected-item--aBB0K":s},"PageTabs-module--list-item--024o6")},n.createElement(l.Link,{className:"PageTabs-module--link--Kz-7R",to:`${c}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(n.Component);var h=b,y=a(17680),k=a(75387),A=a(50041);var f=e=>{let{date:t}=e;const a=new Date(t);return t?n.createElement(A.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(A.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var v=e=>{let{pageContext:t,children:a,location:i,Title:c}=e;const{frontmatter:d={},relativePagePath:g,titleType:b}=t,{tabs:A,title:v,theme:E,description:w,keywords:N,date:x}=d,{interiorTheme:T}=(0,k.Z)(),{site:{pathPrefix:C}}=(0,l.useStaticQuery)("2456312558"),P=C?i.pathname.replace(C,""):i.pathname,Q=A?P.split("/").filter(Boolean).slice(-1)[0]||o()(A[0],{lower:!0}):"",B=E||T;return n.createElement(r.Z,{tabs:A,homepage:!1,theme:B,pageTitle:v,pageDescription:w,pageKeywords:N,titleType:b},n.createElement(p,{title:c?n.createElement(c,null):v,label:"label",tabs:A,theme:B}),A&&n.createElement(h,{title:v,slug:P,tabs:A,currentTab:Q}),n.createElement(y.Z,{padded:!0},a,n.createElement(m,{relativePagePath:g}),n.createElement(f,{date:x})),n.createElement(u.Z,{pageContext:t,location:i,slug:P,tabs:A,currentTab:Q}),n.createElement(s.Z,null))}},58732:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return y}});var n=a(45987),i=(a(67294),a(64983)),o=a(28399);a(93363);const l=["components"],s={},r=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},c=r("PageDescription"),d=r("AnchorLinks"),p=r("AnchorLink"),m=r("Row"),u=r("Column"),g=r("Caption"),b={_frontmatter:s},h=o.Z;function y(e){let{components:t}=e,a=(0,n.Z)(e,l);return(0,i.kt)(h,Object.assign({},b,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(c,{mdxType:"PageDescription"},(0,i.kt)("p",null,"No accessibility annotations are needed for file uploaders, but keep these\nconsiderations in mind if you are modifying Carbon or creating a custom\ncomponent.")),(0,i.kt)(d,{mdxType:"AnchorLinks"},(0,i.kt)(p,{mdxType:"AnchorLink"},"What Carbon provides"),(0,i.kt)(p,{mdxType:"AnchorLink"},"Development considerations")),(0,i.kt)("h2",null,"What Carbon provides"),(0,i.kt)("p",null,"Carbon bakes keyboard operation into its components, improving the experience of\nblind users and others who operate via the keyboard. Carbon incorporates many\nother accessibility considerations, some of which are described below."),(0,i.kt)("h3",null,"Keyboard interactions"),(0,i.kt)("p",null,"Both variants of the file uploader provide buttons for uploading and removing\nfiles. The drop target “Drag and drop files here…” also provides conventional\nbutton keyboard interaction (",(0,i.kt)("inlineCode",{parentName:"p"},"Tab")," to reach; ",(0,i.kt)("inlineCode",{parentName:"p"},"Enter")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Space")," to activate).\nOnce a file has been added, it can be removed by activating the delete (“x”)\nbutton after each file name."),(0,i.kt)(m,{mdxType:"Row"},(0,i.kt)(u,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAACWklEQVQoz43STU8TQRwG8AcoBRZaiLW7ke7WmmIpaXhtYtqUIJa+7Ha3L3bL8mq3tqUK1APxoCheiMbQKWwRE0nk6sGrxoN+Bk8aPelnWbNBCIgYJ3kymX9mfjOZGQgcwVEk1w6AKOaHDpDz7ENhPiDIrGLccQ80TeO/2knwpme31agtjO0HZe/euzj9wjNhf4Koe71ZVVVks9kz+RfYwnNbVJArIcQu0yFHle+3T7qMOaMROxZKKaRzMaSUMOLKCCTvJngHafq99qg/BbZf95SbRvyDGAwxVF+ovdc31u+cuBG2ybPTF5JyxpqRk92ZnNiTysXMqZHHSDh2keB2IHA1/A1sE93PTdnAOvJzla5iVnWtKvNMPpNzLUpppyqlmby4Yp0T73fnpYcdolOjEqzWK3KNDp6t9Qos6eTZ2uk7FJz19hhda525VrcPy59tA8p3+5Dyzeab+Wnzzfy4KCU/dqyGNPOd4oZp3r8nTA81Pgl9m/zs8Mu30pXtVPqqBgjMCfDytplniVXxEzu1pNNUWXdRZZ0zYqrondjQmxaSb1CVX5uF0arFbQ8wnktBKsMdmKPs05Y/T2hKOElb2kOwJJIuvNKBuzqwpgPVw3xlgeXxRyhM1ahKQjPHvGsYsMoQnRp4buvso2R9BlZHfpJQalyzLkYaFjW2Y1H5hvVWtGEpROqWEk+61DDpmQvUTF/e6+C9D5DgtsGzZ8E2gSPNvINgRSa4HSEoTBFUIs9QitdQMMYRgrJAoIaJselxzvuHxl+iDDQAAsV/CBZjBMU4OQZLwmH9PPAX/RrTcdlaHi8AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"example of file uploader keyboard interaction",title:"example of file uploader keyboard interaction",src:"/static/8da1807dc1a03b8ad812208e27527b95/3cbba/file-uploader-accessibility-1.png",srcSet:["/static/8da1807dc1a03b8ad812208e27527b95/7fc1e/file-uploader-accessibility-1.png 288w","/static/8da1807dc1a03b8ad812208e27527b95/a5df1/file-uploader-accessibility-1.png 576w","/static/8da1807dc1a03b8ad812208e27527b95/3cbba/file-uploader-accessibility-1.png 1152w","/static/8da1807dc1a03b8ad812208e27527b95/92c65/file-uploader-accessibility-1.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)(g,{mdxType:"Caption"},"The drop zone is also a button that responds to standard keyboard interaction."))),(0,i.kt)(m,{mdxType:"Row"},(0,i.kt)(u,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.66666666666666%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAAC2klEQVQ4y5WRXUhTYRjHn3PmmW5q4kcWpE6b6RwS3mRKF1GKGaZzZ9txbn4hWt5IIZLl14Uf+bl1JuQn5W0fYBd2GYpddGEDKUi6iCDWhp872973nPTGN84g8IOE/vDjeXjelz/P/30BDkmpVALDMOGqUqkgNjY2PC8uLgar1Qosy57gVFEUFa40TdMMw6jUanW0PC4pKQGO4/7fMCcnJ4xer4/V6XSXsrKytVcLCuOqbbVqQ6VJxbJsjIzJZGIMBgPIOByOfxtynAU4ixksFnOMtcqisduqz5lNbBprNGSYjXeSWWPlGZZl4yorDUqbzQZ2u/10w/auYbjf8QR6+0aYlo5nkY97BpnW9r6o1oG3TFXHYtTSlz2aEEI9fzEfMTQ0RA8PD59uWPLoG4xOLsCEi2fONh+cT2g6yIhvJqmJTQdpSXdJ0uVWLwN5BMZd0xE8z9O8i4enTh5up45BacpomCNq7l2AyYlR4J1jEYl1O5FqO4qOtgnRCY2/1YTEAyFv4Pv8BXjQPa4Y7JxQGNPnaGNeP9VQOENXZDopk9511HDaNQhd3T3Q3z8QQcgHOR7IEQnRUxxXpeBqWhTv5hoVwY+88l7uS6gvnIKy7D6oL5iBikwnmPQu6oihIAh0MBiEUCh0c2Nj46vX6131eDxuv9/vxlh0SyL69GsTrX3+Kb2faF+0lqU75g26kesmvWu2LH38VvlF59ENA4EAjRAChFDR1tbWus/nW/V6vW5BENwYY7eIkXtXQGveHbTyemrp2g1Nu6U0ty2rLn+2qFzrSGd1xyL7/f6/G5b7fD7J4/FsiqK4LYMQ2kYIb2OMdoMBwUcISZnsXAEFNEBt/hRUaJ3A6o5FFkURMMYyakmSMiRJ0gQCAU0oFNJgjDUYI00IYU0QiWk/1n0MQBv10PyKqrkySVdondSJDQ8Zwt7eHuzv74d7+RkOV/mefL68vCx/GiQnJ4eR9Qf3nGslU79uogAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"File uploader with two files attached",title:"File uploader with two files attached",src:"/static/61e4819e8b294ecc748dce0d153a1e75/3cbba/file-uploader-accessibility-2.png",srcSet:["/static/61e4819e8b294ecc748dce0d153a1e75/7fc1e/file-uploader-accessibility-2.png 288w","/static/61e4819e8b294ecc748dce0d153a1e75/a5df1/file-uploader-accessibility-2.png 576w","/static/61e4819e8b294ecc748dce0d153a1e75/3cbba/file-uploader-accessibility-2.png 1152w","/static/61e4819e8b294ecc748dce0d153a1e75/92c65/file-uploader-accessibility-2.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)(g,{mdxType:"Caption"},"Uploaded files can be removed by tabbing to each “x” button and activating."))),(0,i.kt)("h2",null,"Development considerations"),(0,i.kt)("p",null,"Keep these considerations in mind if you are modifying Carbon or creating a\ncustom component:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ‘Drag files’ area is constructed as a button to support keyboard\noperation."),(0,i.kt)("li",{parentName:"ul"},"Error messages about file uploads must be exposed to assistive technology."),(0,i.kt)("li",{parentName:"ul"},"The Delete button needs to have the uploaded file name associated with it\nprogrammatically, so the user understands which file will be removed.")))}y.isMDXComponent=!0}}]);