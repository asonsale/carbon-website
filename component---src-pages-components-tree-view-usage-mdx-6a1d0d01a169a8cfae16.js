"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[1982],{28399:function(e,t,a){a.d(t,{Z:function(){return v}});var n=a(67294),i=a(88650),o=a.n(i),s=a(1597),l=a(64905),r=a(8878),c=a(75900),d=a.n(c);var p=e=>{let{title:t,theme:a,tabs:i=[]}=e;return n.createElement("div",{className:d()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":i.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var g=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:i}}}=(0,s.useStaticQuery)("1364590287"),{baseUrl:o,subDirectory:l,branch:r}=a||i,c=`${o}/edit/${r}${l}/src/pages${t}`;return o?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},m=a(56328),b=a(51721);let u=function(e){function t(){return e.apply(this,arguments)||this}return(0,b.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,i=a.split("/").filter(Boolean).slice(-1)[0],l=t.map((e=>{const t=o()(e,{lower:!0,strict:!0}),l=t===i,r=new RegExp(`${i}/?(#.*)?$`),c=a.replace(r,t);return n.createElement("li",{key:e,className:d()({"PageTabs-module--selected-item--aBB0K":l},"PageTabs-module--list-item--024o6")},n.createElement(s.Link,{className:"PageTabs-module--link--Kz-7R",to:`${c}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},l))))))},t}(n.Component);var A=u,h=a(17680),f=a(75387),w=a(50041);var k=e=>{let{date:t}=e;const a=new Date(t);return t?n.createElement(w.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(w.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var v=e=>{let{pageContext:t,children:a,location:i,Title:c}=e;const{frontmatter:d={},relativePagePath:b,titleType:u}=t,{tabs:w,title:v,theme:y,description:N,keywords:x,date:E}=d,{interiorTheme:S}=(0,f.Z)(),{site:{pathPrefix:z}}=(0,s.useStaticQuery)("2456312558"),C=z?i.pathname.replace(z,""):i.pathname,I=w?C.split("/").filter(Boolean).slice(-1)[0]||o()(w[0],{lower:!0}):"",T=y||S;return n.createElement(r.Z,{tabs:w,homepage:!1,theme:T,pageTitle:v,pageDescription:N,pageKeywords:x,titleType:u},n.createElement(p,{title:c?n.createElement(c,null):v,label:"label",tabs:w,theme:T}),w&&n.createElement(A,{title:v,slug:C,tabs:w,currentTab:I}),n.createElement(h.Z,{padded:!0},a,n.createElement(g,{relativePagePath:b}),n.createElement(k,{date:E})),n.createElement(m.Z,{pageContext:t,location:i,slug:C,tabs:w,currentTab:I}),n.createElement(l.Z,null))}},12504:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return k}});var n=a(45987),i=(a(67294),a(64983)),o=a(28399);const s=["components"],l={},r=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},c=r("PageDescription"),d=r("AnchorLinks"),p=r("AnchorLink"),g=r("Row"),m=r("Column"),b=r("InlineNotification"),u=r("Caption"),A=r("DoDontRow"),h=r("DoDont"),f={_frontmatter:l},w=o.Z;function k(e){let{components:t}=e,a=(0,n.Z)(e,s);return(0,i.kt)(w,Object.assign({},f,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(c,{mdxType:"PageDescription"},(0,i.kt)("p",null,"A tree view is a hierarchical structure that provides nested levels of\nnavigation.")),(0,i.kt)(d,{mdxType:"AnchorLinks"},(0,i.kt)(p,{mdxType:"AnchorLink"},"Overview"),(0,i.kt)(p,{mdxType:"AnchorLink"},"Live demo"),(0,i.kt)(p,{mdxType:"AnchorLink"},"Formatting"),(0,i.kt)(p,{mdxType:"AnchorLink"},"Content"),(0,i.kt)(p,{mdxType:"AnchorLink"},"Universal behaviors"),(0,i.kt)(p,{mdxType:"AnchorLink"},"Related"),(0,i.kt)(p,{mdxType:"AnchorLink"},"References"),(0,i.kt)(p,{mdxType:"AnchorLink"},"Feedback")),(0,i.kt)("h2",null,"Overview"),(0,i.kt)("p",null,"A tree view consists of nested heading levels that create a content hierarchy\nfor users and assist with navigating large amounts of information. Following on\nwith the tree analogy, the tree view component has branch nodes that can be\nexpanded or collapsed to reveal or hide child nodes. The tree may also have leaf\nnodes. Leaf nodes can appear at any level of the tree hierarchy and do not have\nchild nodes."),(0,i.kt)(g,{mdxType:"Row"},(0,i.kt)(m,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"75%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAIAAABr+ngCAAAACXBIWXMAAAsSAAALEgHS3X78AAABu0lEQVQoz6WTzY7aMBRG56HCLhs2LULiQdjCnicJhFZCLBDwEDwDQnRgAyqNY0Ji+14lcfzTEjMwM0XqokdZWJaO/d0vyYut0c8w/+LF/gdXGRFns1kYhuPxeDQaBUEwHA6DIAjD8Psb355xlc/nc6fT8X2/1Wr5vu95XqPR8Dyv2Wy22+1WzZearx+5ysaYuIZSeqmJ4/hyuQBAnuflG4jIGOOcM8ayLGOM3WaWUpZlCQDGGNeftfZ0Og0Gg36/3+v1ut3udDoVQhBCsiwDgJtsjFFK5XlOKQWAoijcnUmSzOfzyWSyWCyWy+VqtdpsNuv1+nA47Ha77XZ7k50PAJxzIURRFMYYKWWSJJTSsiyVUohICKGUCiGOx2MURQ9Za52mKSEkTVMXvqoqIQQA3L8Ft2+tBYCyLB+yMQYRAQARlVLv5Xs0pZRbu4CuMFNUNk7Er9PPH6+v+/0+juM0TUUN59wJVVXdZVZzk7W+PogYERJFESJqraWULsinm621nHNEfMR2L8zlBACttVKK1zyNXVXVB7koClevEMLN7A56//PcC5NSfpbjOE6S5F5YlmVCiL9jM8b+FPYbj3wjvt5H8QgAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example of tree view with node icons",title:"Example of tree view with node icons",src:"/static/65c835ab00a17a9eba3fe5d06e8e2d4c/3cbba/tree-view-usage-0.png",srcSet:["/static/65c835ab00a17a9eba3fe5d06e8e2d4c/7fc1e/tree-view-usage-0.png 288w","/static/65c835ab00a17a9eba3fe5d06e8e2d4c/a5df1/tree-view-usage-0.png 576w","/static/65c835ab00a17a9eba3fe5d06e8e2d4c/3cbba/tree-view-usage-0.png 1152w","/static/65c835ab00a17a9eba3fe5d06e8e2d4c/92c65/tree-view-usage-0.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,i.kt)("h3",null,"When to use"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Often used for navigating file system structures that are made up of folders\nand documents."),(0,i.kt)("li",{parentName:"ul"},"To organize large amounts of information that can nest within multiple levels.")),(0,i.kt)("h3",null,"When not to use"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To show and hide UI elements or content on a page."),(0,i.kt)("li",{parentName:"ul"},"When you only need one level of nested information. In this case, use a\ndifferent component like the ",(0,i.kt)("a",{parentName:"li",href:"/components/accordion/usage/"},"accordion")," or\n",(0,i.kt)("a",{parentName:"li",href:"/components/data-table/usage/"},"data table")," for expandable views that go one\nlevel deep."),(0,i.kt)("li",{parentName:"ul"},"As the primary navigation in a product’s UI. Instead, use the UI Shell left\npanel for product navigation. A combination of the\n",(0,i.kt)("a",{parentName:"li",href:"/components/UI-shell-left-panel/usage/"},"UI shell left panel")," and the\n",(0,i.kt)("a",{parentName:"li",href:"/components/breadcrumb/usage/"},"breadcrumb")," component can support an\ninformation architecture several levels deep.")),(0,i.kt)("h2",null,"Live demo"),(0,i.kt)(b,{mdxType:"InlineNotification"},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Coming soon:")," The live demo for tree view is underdevelopment and will be\navailable soon.")),(0,i.kt)("h2",null,"Formatting"),(0,i.kt)("h3",null,"Anatomy"),(0,i.kt)("p",null,"The tree view is composed of branch and leaf nodes that are designed to nest and\norganize large sets of information."),(0,i.kt)(g,{mdxType:"Row"},(0,i.kt)(m,{colLg:12,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAAAsSAAALEgHS3X78AAAA5ElEQVQoz6XR227DIAwG4L7/O+7QFdqAiQknY3cJTGo2JZtaTdP+C7gwHzL40HvvrT9Ka49rvR++n/150S+4XWd+NjXk8WITThRS8bGGvLJ1FRFEDCGICBGJyBd+n+XN1ZiNvsB5iDiF0Wcf+g4zs7klxphSKqXs8BE4ZjgPp5ejhzH5UKa04daYGQCUUs65nDMR7dp+BabqBmusHRFzKVTr/s0sDM4ZYwAgxrjhdWNm773WWivlESvRyha+8tNQiUAP+qS01tbaO3j9knILM3+2PS9LEWYewXnErXpnVP+a8x/xB2MnR9Jg5K15AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Anatomy of tree view",title:"Anatomy of tree view",src:"/static/fcebdb7dabb20466b78d2076fd6bac8c/3cbba/tree-view-usage-1.png",srcSet:["/static/fcebdb7dabb20466b78d2076fd6bac8c/7fc1e/tree-view-usage-1.png 288w","/static/fcebdb7dabb20466b78d2076fd6bac8c/a5df1/tree-view-usage-1.png 576w","/static/fcebdb7dabb20466b78d2076fd6bac8c/3cbba/tree-view-usage-1.png 1152w","/static/fcebdb7dabb20466b78d2076fd6bac8c/0b124/tree-view-usage-1.png 1728w","/static/fcebdb7dabb20466b78d2076fd6bac8c/0c3f5/tree-view-usage-1.png 1856w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Branch node"),": A node that has one or more child nodes. Can be expanded or\ncollapsed to reveal or hide child nodes."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Leaf node"),": A node that has no child nodes and can appear at any level of\nthe tree view hierarchy. A leaf node may be referred to as a child node when\nit is nested underneath a branch node."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Caret icon"),": An icon to expand or collapse a branch node."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Node icon")," (optional): An icon to visually represent and support a node\nlabel, they can assist the user to scan different content types quickly.")),(0,i.kt)("h3",null,"Sizing"),(0,i.kt)("p",null,"There are two node sizes: small (default), and extra small. Supporting two\ndifferent node sizes gives you more flexibility when structuring a tree view. If\nyou have a tree structure with complex nesting levels, use the extra small node\nsize to keep as much information in view as possible. When in doubt of which\nsize to use, use the small node size because it is our default."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Node size"),(0,i.kt)("th",{parentName:"tr",align:null},"Height (px/rem)"),(0,i.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"Small")),(0,i.kt)("td",{parentName:"tr",align:null},"32 / 2"),(0,i.kt)("td",{parentName:"tr",align:null},"This is the default size and is the most commonly used as it has similar geometries as the UI shell left navigation panel.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"Extra small")),(0,i.kt)("td",{parentName:"tr",align:null},"24 / 1.5"),(0,i.kt)("td",{parentName:"tr",align:null},"Use when space is constricted on the page and/or when you need a more condensed view to show more of the tree view on the screen.")))),(0,i.kt)(g,{mdxType:"Row"},(0,i.kt)(m,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAAAdUlEQVQoz62QSwqFMAwAe/+T9kMpttGYmkTRhzwXUsQ6ZJmBTMzagXm6qMe0ZSJKKVlrvfelFEScDhBGTqALt2QR4RO5wryKvD37tlk7MF9++9e8nPzLmXXP1pZca805hxBijM45ACAinGeakIdRkL57WI+8Ac/Ojb7zOy3GAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Size comparison of the two nodes",title:"Size comparison of the two nodes",src:"/static/5dfc2c3e9c016b2d812ec745946d482f/3cbba/tree-view-usage-2.png",srcSet:["/static/5dfc2c3e9c016b2d812ec745946d482f/7fc1e/tree-view-usage-2.png 288w","/static/5dfc2c3e9c016b2d812ec745946d482f/a5df1/tree-view-usage-2.png 576w","/static/5dfc2c3e9c016b2d812ec745946d482f/3cbba/tree-view-usage-2.png 1152w","/static/5dfc2c3e9c016b2d812ec745946d482f/92c65/tree-view-usage-2.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,i.kt)("h3",null,"Alignment"),(0,i.kt)("h4",null,"Stacking nodes"),(0,i.kt)("p",null,"Nodes stack directly on top of each other with 0px space between them. Having\nnodes flush with each other ensures consistent spacing and alignment between\neach node in the tree view."),(0,i.kt)(g,{mdxType:"Row"},(0,i.kt)(m,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAAAyUlEQVQoz7XS2WrEMAwF0Pn/jyxZvcWyZXlJ7DhJSaAv7QyZUnq5rwckpMfxLPuV4y6P4w/5jmvKNBnNhNMmIV31Z8Ftpd7gTBEViG5UA4vWebCkLYF1XNe43OBCKQACl7wdNBOowAN6gySgpjewB5xGPny0rOlJ2xMDemlWjEVi7mH7GuEH9slrO42cNR1reuDq9MaRhBrmfSnbXPZlfYmNUKzpeNtPI9dMkDbX2G/sXOccjDNS42QWCtnHmcJZ67e1/uedf/Vhn+Xhg9bfHQnzAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Examples of aligning stacking nodes",title:"Examples of aligning stacking nodes",src:"/static/3e6cced9bb835bbaeec4eec8a73b6a86/3cbba/tree-view-usage-3.png",srcSet:["/static/3e6cced9bb835bbaeec4eec8a73b6a86/7fc1e/tree-view-usage-3.png 288w","/static/3e6cced9bb835bbaeec4eec8a73b6a86/a5df1/tree-view-usage-3.png 576w","/static/3e6cced9bb835bbaeec4eec8a73b6a86/3cbba/tree-view-usage-3.png 1152w","/static/3e6cced9bb835bbaeec4eec8a73b6a86/92c65/tree-view-usage-3.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,i.kt)("h4",null,"Nesting nodes"),(0,i.kt)("p",null,"Nested nodes in a tree view rely on vertical type and icon alignment to visually\ngroup nodes together. Branch icons and leaf icons sit to the left of type and\nalign vertically."),(0,i.kt)(g,{mdxType:"Row"},(0,i.kt)(m,{colLg:12,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAAAsSAAALEgHS3X78AAAAs0lEQVQoz8XRyw6CMBAFUP7/69wZjImAYEuRPqetsdNqRBcFDCsT7/bmZCYzxWMzKaWNtvgBjhgxYMqS44QY7iHGuGg/2DBJzwQsWGsBwHufYzuqrqy5EM45AHDOzbBXhnWE9r3Weo1v4Mih6tpWCPEFO2lYQyjrlVJr7I2l+xO5XEY+zvG0vyaiKevhOkgpjTELDIOodkdCKedca72cHAMi4vskcUqOY3gdDBEXbfG3Pz8BwOpL8heD69IAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example of aligning nesting nodes",title:"Example of aligning nesting nodes",src:"/static/84b007e5d90aebfd3321304b36d9b939/3cbba/tree-view-usage-4.png",srcSet:["/static/84b007e5d90aebfd3321304b36d9b939/7fc1e/tree-view-usage-4.png 288w","/static/84b007e5d90aebfd3321304b36d9b939/a5df1/tree-view-usage-4.png 576w","/static/84b007e5d90aebfd3321304b36d9b939/3cbba/tree-view-usage-4.png 1152w","/static/84b007e5d90aebfd3321304b36d9b939/0b124/tree-view-usage-4.png 1728w","/static/84b007e5d90aebfd3321304b36d9b939/0c3f5/tree-view-usage-4.png 1856w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,i.kt)("h2",null,"Content"),(0,i.kt)("h3",null,"Main elements"),(0,i.kt)("p",null,"You may be able to label your nodes, or the labels may be generated from code.\nIf you have control of your label names, follow these guidelines."),(0,i.kt)("h4",null,"Branch node label"),(0,i.kt)("p",null,"Be brief but clear while summarizing what kind of child nodes the branch node\ncontains."),(0,i.kt)("h4",null,"Leaf node label"),(0,i.kt)("p",null,"Be brief and descriptive about what information the leaf node contains."),(0,i.kt)("h3",null,"Overflow content"),(0,i.kt)("p",null,"If the node label is too long for one line in your tree view, add an ellipsis\n",(0,i.kt)("inlineCode",{parentName:"p"},"…")," and accompany with a browser-based tooltip to show the full string of text."),(0,i.kt)("p",null,"While truncation is not preferred, you can customize the view by\n",(0,i.kt)("a",{parentName:"p",href:"/patterns/overflow-content/#variations"},"positioning")," the ellipsis at the\nfront-line, mid-line, or end-line of a node label depending on what information\nis most useful to the user to keep persistent in the tree view."),(0,i.kt)(g,{mdxType:"Row"},(0,i.kt)(m,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAAAxElEQVQoz6XSyw6DIBBA0f7/99kdNIoJSmBAeQw+QJtoumhLYpOe/QUyw20v2Q77ldv+h8845+ycAwBrbXz3/ZbPeF1Xa60QQkqJiN5795Jzvo5DCADQ9z0ADMNwlt77n2JEBICu64QQIYQYIyKGEFJK20s5nudZStk0DSGEUtq2LWOMc661vr55mibOOaWUEFLXNWOMPh7V/V5VlQIwxujDeVBh2og4jqNzblmWlFKMUQEopc4MALQx5fivPRd/2PbljJ/Un4OLow8YxQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example of overflowing content",title:"Example of overflowing content",src:"/static/ef1ab8c00d5f13a47df464a4e49c40bd/3cbba/tree-view-usage-5.png",srcSet:["/static/ef1ab8c00d5f13a47df464a4e49c40bd/7fc1e/tree-view-usage-5.png 288w","/static/ef1ab8c00d5f13a47df464a4e49c40bd/a5df1/tree-view-usage-5.png 576w","/static/ef1ab8c00d5f13a47df464a4e49c40bd/3cbba/tree-view-usage-5.png 1152w","/static/ef1ab8c00d5f13a47df464a4e49c40bd/92c65/tree-view-usage-5.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,i.kt)("h3",null,"Further guidance"),(0,i.kt)("p",null,"For further content guidance, see Carbon’s\n",(0,i.kt)("a",{parentName:"p",href:"/guidelines/content/overview/"},"content guidelines"),"."),(0,i.kt)("h2",null,"Universal behaviors"),(0,i.kt)("h3",null,"States"),(0,i.kt)("p",null,"Branch nodes and leaf nodes share the same styles for different states. The only\ndifference between the structure of the two is the addition of a caret icon for\nexpanding or collapsing branch nodes."),(0,i.kt)(g,{mdxType:"Row"},(0,i.kt)(m,{colLg:12,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAAAsSAAALEgHS3X78AAAAvklEQVQoz62RwWrDMBBE8/9/V+KDwVBwLq5LLWm9Wq+0kjalUZzYOeRSPwZ0WB4MmtP1Lar65nqqj4g454gohMDMMcatjIjDMBhjrLXGGADYyaUUEck5l5WtnFJiZhFJKzv5X7WB8g9E69OafLdUi14Bg7N/bRFxnmci2snOp3EiM4vFVFM2soXle/yaJoOIAOC9P662qq5/pTVbOURZbtQhHls8pyIiZn6Zqtqfl/F8/miapm3bruv6vj+g9i8TwEwWlmiYHAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example of node states",title:"Example of node states",src:"/static/016c15390133286908740d30678e0d4c/3cbba/tree-view-usage-6.png",srcSet:["/static/016c15390133286908740d30678e0d4c/7fc1e/tree-view-usage-6.png 288w","/static/016c15390133286908740d30678e0d4c/a5df1/tree-view-usage-6.png 576w","/static/016c15390133286908740d30678e0d4c/3cbba/tree-view-usage-6.png 1152w","/static/016c15390133286908740d30678e0d4c/0b124/tree-view-usage-6.png 1728w","/static/016c15390133286908740d30678e0d4c/0c3f5/tree-view-usage-6.png 1856w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,i.kt)("h4",null,"Selection indicator"),(0,i.kt)("p",null,"If the branch node of a selected child node is collapsed, the parent node should\ninherit the selected state so the user does not lose the context of what is\nselected, even if it is out of view."),(0,i.kt)(g,{mdxType:"Row"},(0,i.kt)(m,{colLg:12,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAAAsSAAALEgHS3X78AAAAlElEQVQoz9XQvQrDMAwE4Lz/EzrOEkJqEiphHFuKjIVdaCj9GTJ0Kb3hFvFxoK6dptZ6cu1+jXPO3vsY435PzvkV8y6IGEJIKTGziHxiAFjXFRFjjMz82Kxa27z4wfbWDuM4OucA4IlrawtEd5mN6Y0x0zQh4oGPLqUQkYioailFVd+WE+0AV0Tcti2EQER/8e3v8A1v2E3agzmSMQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example of a selected node",title:"Example of a selected node",src:"/static/8915abf37285f26e7dfebe719e6ed3bf/3cbba/tree-view-usage-6b.png",srcSet:["/static/8915abf37285f26e7dfebe719e6ed3bf/7fc1e/tree-view-usage-6b.png 288w","/static/8915abf37285f26e7dfebe719e6ed3bf/a5df1/tree-view-usage-6b.png 576w","/static/8915abf37285f26e7dfebe719e6ed3bf/3cbba/tree-view-usage-6b.png 1152w","/static/8915abf37285f26e7dfebe719e6ed3bf/0b124/tree-view-usage-6b.png 1728w","/static/8915abf37285f26e7dfebe719e6ed3bf/0c3f5/tree-view-usage-6b.png 1856w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,i.kt)(u,{mdxType:"Caption"},"Example of selected child node when the parent is open (left) and when the parent is collapsed (right)."),(0,i.kt)("h3",null,"Interactions"),(0,i.kt)("h4",null,"Focus"),(0,i.kt)("p",null,"When a single-select tree receives focus:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Focus is set on the previously selected node."),(0,i.kt)("li",{parentName:"ul"},"If none of the nodes were selected before the tree receives focus, focus is\nset on the first node.")),(0,i.kt)("h4",null,"Expanding and collapsing"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To expand or collapse a branch node the user can click anywhere within the\ncaret icon bounding box.")),(0,i.kt)(g,{mdxType:"Row"},(0,i.kt)(m,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"28.125%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAIAAABM9SnKAAAACXBIWXMAAAsSAAALEgHS3X78AAAASklEQVQY063PsQqAMBCD4b7/G4rgHpQ7DZx4S1ro5CIK9l/DN6TUH5WR+HQa1oN094i4bkl6xn3bsS3TbG4ASGbmNzzms6p6r7gBbMFj3415rIAAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example showing click target areas for a branch node",title:"Example showing click target areas for a branch node",src:"/static/0a7d8c809e514a90bfc13f1498ef5392/3cbba/tree-view-usage-7.png",srcSet:["/static/0a7d8c809e514a90bfc13f1498ef5392/7fc1e/tree-view-usage-7.png 288w","/static/0a7d8c809e514a90bfc13f1498ef5392/a5df1/tree-view-usage-7.png 576w","/static/0a7d8c809e514a90bfc13f1498ef5392/3cbba/tree-view-usage-7.png 1152w","/static/0a7d8c809e514a90bfc13f1498ef5392/92c65/tree-view-usage-7.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,i.kt)("h4",null,"Selecting"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To select a branch node the user can click anywhere on the node excluding the\ncaret icon bounding box."),(0,i.kt)("li",{parentName:"ul"},"To select a leaf node the user can click anywhere on the node container.")),(0,i.kt)(g,{mdxType:"Row"},(0,i.kt)(m,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAAAtElEQVQoz6WSbQuCMBSF/f9/zfBLkC2kD1H5Qoma0+m99yw0IVBqSYeHMe427s7ZPPuD8KHuLTbC9mxJXmDEMoYRXw6PayiaSp0TP0w36hZEHGWdiqvdiVSCtnd0BjG0kXoC2vCjqfMC2kDEde018jCTACIzhMfJQv91nnvuSMqGSk2Flqp9UzaWxZG25HW3v2TBIfFDo64cpUZd7tsjqVicaVtYCIbXnvwPERDxUHR/kjWen26KibiILueXAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example showing click target areas for selecting a node",title:"Example showing click target areas for selecting a node",src:"/static/dd3336d1a7fce630f7c73f5da8084132/3cbba/tree-view-usage-8.png",srcSet:["/static/dd3336d1a7fce630f7c73f5da8084132/7fc1e/tree-view-usage-8.png 288w","/static/dd3336d1a7fce630f7c73f5da8084132/a5df1/tree-view-usage-8.png 576w","/static/dd3336d1a7fce630f7c73f5da8084132/3cbba/tree-view-usage-8.png 1152w","/static/dd3336d1a7fce630f7c73f5da8084132/92c65/tree-view-usage-8.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,i.kt)("br",null),(0,i.kt)("h4",null,"Keyboard controls"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Key"),(0,i.kt)("th",{parentName:"tr",align:null},"Interaction"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"Right arrow")),(0,i.kt)("td",{parentName:"tr",align:null},"When focus is on a closed node, opens the node; focus does not move.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"When focus is on an open node, moves focus to the first child node.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"When focus is on a leaf node, does nothing.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"Left arrow")),(0,i.kt)("td",{parentName:"tr",align:null},"When focus is on an open node, closes the node.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"When focus is on a child node that is also either a leaf node or a closed node, moves focus to its parent node.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"When focus is on a top level node that is also either a leaf node or a closed node, does nothing.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"Down arrow")),(0,i.kt)("td",{parentName:"tr",align:null},"Moves focus to the next node that is focusable without opening or closing a node.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"Up arrow")),(0,i.kt)("td",{parentName:"tr",align:null},"Moves focus to the previous node that is focusable without opening or closing.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"Enter")),(0,i.kt)("td",{parentName:"tr",align:null},"Activates a node. In single-select trees where selection does not follow focus, the default action is typically to select the focused node.")))),(0,i.kt)("h2",null,"Modifiers"),(0,i.kt)("h3",null,"Node icons"),(0,i.kt)("p",null,"You can add node icons to visually represent and support a written node label.\nWe recommend having consistent icon usage for all branch and leaf nodes. Make\nsure the icons accurately represent each node that they are related to. Using a\nfolder icon for branch nodes and a document icon for leaf nodes is a commonly\nrecognized pairing of icons used in tree view structures. If individual node\ndata cannot be identified, do not display icons. When in doubt, use nodes\nwithout icons."),(0,i.kt)(g,{mdxType:"Row"},(0,i.kt)(m,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAABXElEQVQoz6XQyW7CMBQF0HxpAkpAFNjDb7KgLGilukRkjqcXO/GUirikXbdnYVmWr331gvEfgnnnnPtLGGN8PB53u10cx8vlcjGJoigMw3n1wjBc/PIIE0IOh8N+v0+SJIqiJElWq9V6vX6ZbLfbzWbz8rR6iuP4p7a19ndzrTUAcA6EECFEN5FSzheMMY+wdY4yKMuybVuMMaW073sAKMsiz7I0Tau6Kooiz/OyLJVSWmtjTNd1j3CvXJo3n+jjOkEIEUIGpTvR+0HOpezE/zwMQ+AHPY6jlBImSinn3D1v3lFW1KxpSF3XTdMQQqqqwhgzxgAAYxz4t904CiEopWSitcqy++X19e16vU3SNEUInc/n0+l0uVxutxtCKJjHwxijlGqtfT0AoJRyzhljwzBYa7XWnHNKqf+5bdvvsJQSYwwA1lpjjFKq6zoA8EMWQvhzIQTnHACklISQL8IjPUijU47TAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example of tree view with node icons",title:"Example of tree view with node icons",src:"/static/e8cabc1f468830322c45bcb1a7867d4a/3cbba/tree-view-usage-9.png",srcSet:["/static/e8cabc1f468830322c45bcb1a7867d4a/7fc1e/tree-view-usage-9.png 288w","/static/e8cabc1f468830322c45bcb1a7867d4a/a5df1/tree-view-usage-9.png 576w","/static/e8cabc1f468830322c45bcb1a7867d4a/3cbba/tree-view-usage-9.png 1152w","/static/e8cabc1f468830322c45bcb1a7867d4a/92c65/tree-view-usage-9.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,i.kt)("h4",null,"Aligning icons"),(0,i.kt)("p",null,"It is important when adding icons to nodes in a tree view that there is an icon\npresent for every node. Not having an icon for every branch or leaf node can\ncause alignment inconsistencies and make groupings of nodes harder to visualize."),(0,i.kt)(A,{mdxType:"DoDontRow"},(0,i.kt)(h,{colMd:4,colLg:4,caption:"Do consistently use icons for each node in a tree view.",mdxType:"DoDont"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"576px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAABy0lEQVQ4y82SW4/TMBBG9///GJ5ACLRiBS+9LOp11W6T1nYcO26S2vHdbngAbbOwhbRaJF44j5bOzOeZufn+D9z8B3LbtjHGcAw2urZtv51xPB7jJV7kEINRegqX42xW0IIQwhgrioJSKoSw1poeL3I8RtWocTodZTPGGIQQY5xlGYSQc+6csz3OOocQXECKDOj0oXiUWnXlrbVaa3uJ32I740CTf0Hjj9M7kMH1er3dbpMkwRh777tCV2Vv3Y5nIzZbVptGSe+c8857fzHzhdhrtn2/+DTcTRBGmxNpmiqlXo/ddR7v58vyUWppzfOEnxJ4/1d//gyHHyZ3OwQ2mw1CKEkSAACEsD+23rQlGbP5kq6FbOq6FkJwzpumEUKEE5flbs+jZHKP53VV5XlOT5RlSSklhHQv5/3P5BiNMjP4MILT/X5PKc3zvCiKqqoQQgCA7uWq/HSDzjrvSlkPwNeK14Lzqq6llCEE7/312DF2s40u5hV5N7nFjIAdWCwWGONXVvUsWxucZ005wJOD5M46Y4zWWp5QSp3fWV820ceszN8M326zXZqkHUmSrFarNE0Ph8Ovg/tTttY66xrdZJwoo6yx+mer/m3/AHFjbU8I44PtAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example of node icons used correctly in tree",title:"Example of node icons used correctly in tree",src:"/static/43e2b4a9b33494bfc751bde6aef46ad7/a5df1/tree-view-usage-do-10a.png",srcSet:["/static/43e2b4a9b33494bfc751bde6aef46ad7/7fc1e/tree-view-usage-do-10a.png 288w","/static/43e2b4a9b33494bfc751bde6aef46ad7/a5df1/tree-view-usage-do-10a.png 576w"],sizes:"(max-width: 576px) 100vw, 576px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,i.kt)(h,{colMd:4,colLg:4,type:"dont",caption:"Do not mix text-only and icon nodes in a tree view.",mdxType:"DoDont"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"576px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAABfElEQVQ4y82TzZKjIBhF+/0fL4tE0YiCYIICH/LvLKarQlU66dhd3TWbOStFjlwv+Pb3H3j7D+Rt21JK27blnLdt+/NAzjnt8SGnlACAcz7PM+ecUjpNE+ecMaaUcs7ZFz7knLPWmhAihGCMYYwJIcMwYIyllN5798LTyt77GKO1NqW0rmt5vXNuXVe3x5NcpjrnvPfDMJxOp7ZtEUKEkBDC/el3sjEGAKy13vtwYzfzTmyl1Pl85pyP41hVVV3XTdMYY34ae11XAHist0T46TeHEDDGdV33fY8Q6roOY/xa2+fYpZgYozFGCKGUklJqrZVS8ca+nHOWUs7zHGOcpolSym5cr1fG2DiOZeRx/ScZALTWIYTL5cIYo5RyzoUQfd93XVdG9uWUUtnhUtU0TQCwLMs8zwAQYwwhfBm7FFa6lVJWVSWEaNv2cDgQQn5xwkqEcmutLZsHAMaYxznfyZTSckiapkEIHY/HpmmWZbkfuC/lwv3fKNefYr8D2Tx4jZ1A2tQAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Incorrect example showing only some nodes using icons.",title:"Incorrect example showing only some nodes using icons.",src:"/static/9710ef89dab648ee9a5c70b6168b454d/a5df1/tree-view-usage-dont-10b.png",srcSet:["/static/9710ef89dab648ee9a5c70b6168b454d/7fc1e/tree-view-usage-dont-10b.png 288w","/static/9710ef89dab648ee9a5c70b6168b454d/a5df1/tree-view-usage-dont-10b.png 576w"],sizes:"(max-width: 576px) 100vw, 576px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,i.kt)("h2",null,"Related"),(0,i.kt)("h4",null,"Tree view versus accordion"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"/accordion/usage/"},"accordion")," component when you need to organize\nlengthy information in sections that only go one level deep. Tree view is best\nused for nesting categories of information in a hierarchy of multiple levels /\nin a hierarchical form."),(0,i.kt)("h4",null,"Tree view versus UI Shell left panel"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"/UI-shell-left-panel/usage/"},"UI Shell left panel")," component for product\nnavigation. A combination of the UI Shell left panel and the\n",(0,i.kt)("a",{parentName:"p",href:"/components/breadcrumb/usage/"},"breadcrumb")," component can support an information\narchitecture several levels deep of a product. Tree view is best used for on\npage navigation instead of being used for architecture of a website or product."),(0,i.kt)("h4",null,"Tree view versus data table"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"/components/data-table/usage/"},"data table")," component for displaying\nlarge amounts of detailed information that is easy to scan horizontally in one\nview. Data table rows can be expanded, but we recommend only expanding a row one\nlevel deep. Tree view is used to organize multiple nested levels of information\nwith concise labels that do not need to be organized in a column structure."),(0,i.kt)("h2",null,"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/aria-role/roles#tree"},"Tree")," (W3C Recommendation)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/wiki/TreeView"},"TreeView")," (W3C Wiki 2012)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://pages.github.ibm.com/conrad-schmidt/Tree/"},"Tree view React app")," (WKC)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://ibm.ent.box.com/s/azascty1rmgik858zy1kw3cw6f0a4zo1"},"Tree view specifications"),"\n(WKC)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/wai-aria-practices/#TreeView"},"Tree view WAI-ARIA practices"),"\n(W3C)")),(0,i.kt)("h2",null,"Feedback"),(0,i.kt)("p",null,"Help us improve this component by providing feedback, asking questions, and\nleaving any other comments on\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon-website/issues/new?assignees=&labels=feedback&template=feedback.md"},"GitHub"),"."))}k.isMDXComponent=!0}}]);