"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[86627],{28399:function(e,t,a){a.d(t,{Z:function(){return x}});var n=a(67294),l=a(88650),r=a.n(l),i=a(1597),d=a(64905),o=a(8878),c=a(75900),s=a.n(c);var m=e=>{let{title:t,theme:a,tabs:l=[]}=e;return n.createElement("div",{className:s()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":l.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var p=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:l}}}=(0,i.useStaticQuery)("1364590287"),{baseUrl:r,subDirectory:d,branch:o}=a||l,c=`${r}/edit/${o}${d}/src/pages${t}`;return r?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},g=a(56328),b=a(51721);let k=function(e){function t(){return e.apply(this,arguments)||this}return(0,b.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,l=a.split("/").filter(Boolean).slice(-1)[0],d=t.map((e=>{const t=r()(e,{lower:!0,strict:!0}),d=t===l,o=new RegExp(`${l}/?(#.*)?$`),c=a.replace(o,t);return n.createElement("li",{key:e,className:s()({"PageTabs-module--selected-item--aBB0K":d},"PageTabs-module--list-item--024o6")},n.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:`${c}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},d))))))},t}(n.Component);var u=k,N=a(17680),h=a(75387),A=a(50041);var y=e=>{let{date:t}=e;const a=new Date(t);return t?n.createElement(A.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(A.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var x=e=>{let{pageContext:t,children:a,location:l,Title:c}=e;const{frontmatter:s={},relativePagePath:b,titleType:k}=t,{tabs:A,title:x,theme:f,description:E,keywords:C,date:v}=s,{interiorTheme:w}=(0,h.Z)(),{site:{pathPrefix:S}}=(0,i.useStaticQuery)("2456312558"),B=S?l.pathname.replace(S,""):l.pathname,z=A?B.split("/").filter(Boolean).slice(-1)[0]||r()(A[0],{lower:!0}):"",P=f||w;return n.createElement(o.Z,{tabs:A,homepage:!1,theme:P,pageTitle:x,pageDescription:E,pageKeywords:C,titleType:k},n.createElement(m,{title:c?n.createElement(c,null):x,label:"label",tabs:A,theme:P}),A&&n.createElement(u,{title:x,slug:B,tabs:A,currentTab:z}),n.createElement(N.Z,{padded:!0},a,n.createElement(p,{relativePagePath:b}),n.createElement(y,{date:v})),n.createElement(g.Z,{pageContext:t,location:l,slug:B,tabs:A,currentTab:z}),n.createElement(d.Z,null))}},50455:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return d},default:function(){return b}});var n=a(45987),l=(a(67294),a(64983)),r=a(28399);const i=["components"],d={},o=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",t)},c=o("Row"),s=o("Column"),m=o("Caption"),p={_frontmatter:d},g=r.Z;function b(e){let{components:t}=e,a=(0,n.Z)(e,i);return(0,l.kt)(g,Object.assign({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",null,"Color"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Color token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Group label"),(0,l.kt)("td",{parentName:"tr",align:null},"text color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-secondary"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Checkbox label"),(0,l.kt)("td",{parentName:"tr",align:null},"text color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-primary"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Checkbox:unchecked"),(0,l.kt)("td",{parentName:"tr",align:null},"border"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$icon-primary"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"background-color"),(0,l.kt)("td",{parentName:"tr",align:null},"transparent")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Checkbox:checked"),(0,l.kt)("td",{parentName:"tr",align:null},"background-color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$icon-primary"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"checkmark"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$icon-inverse"))))),(0,l.kt)(c,{mdxType:"Row"},(0,l.kt)(s,{colLg:8,mdxType:"Column"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.66666666666666%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAABaElEQVQ4y5WTO47CMBCGBxKCeS1F0FgWDWDoKLelzkW4CgWio+AunAAkUvEUIGQSUVFyALwas1CA2SwjfXLiP/NnZqQBsAQiJvI2jsfjC/1+32iNRsMRQuSFEAUhRFFKmab7wWBgzSNAKfWC1hqGwyHlphzHKXieV8pms18AkCYz0m15BLm6z0RR5O52O/d6vbpa67TWOvWLu91ujW7LI8gw84xS6nGu1+tMGIbebDbz9vt9Joqih27DOoc4jmGxWJjWiDAM4XA4GI3aejc/M0PbZRAEKSkltNvtSrPZ/PZ9vyKEKNNQu93u54an0wmm06mpjuJyuZjne5VJhuwZpRSL45itVis2mUxyy+WSzedzRidp929suda/jEYjUxm1Xa1WoV6vQ61WM+/j8RjO5zNsNpv/t9xqtcD3fdqIEiJKznmJc17mnBc7nY5pv9fr2Q0TVo/hLfKIWEDEHOcciD/X75NdTjL8AaVJwWyw4yWXAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Checkbox states",title:"Checkbox states",src:"/static/15ca7e2ec0f420ede1dfc871e02fa6df/3cbba/checkbox-style-1.png",srcSet:["/static/15ca7e2ec0f420ede1dfc871e02fa6df/7fc1e/checkbox-style-1.png 288w","/static/15ca7e2ec0f420ede1dfc871e02fa6df/a5df1/checkbox-style-1.png 576w","/static/15ca7e2ec0f420ede1dfc871e02fa6df/3cbba/checkbox-style-1.png 1152w","/static/15ca7e2ec0f420ede1dfc871e02fa6df/92c65/checkbox-style-1.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,l.kt)("h3",null,"Interactive states"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Color token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Checkbox:focus"),(0,l.kt)("td",{parentName:"tr",align:null},"border"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$focus"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Label:disabled"),(0,l.kt)("td",{parentName:"tr",align:null},"text color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-disabled"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Checkbox:disabled"),(0,l.kt)("td",{parentName:"tr",align:null},"border"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$icon-disabled"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"background"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$icon-disabled"))))),(0,l.kt)(c,{mdxType:"Row"},(0,l.kt)(s,{colLg:8,mdxType:"Column"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.66666666666666%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAACv0lEQVQ4y32TTUgUYRjH/7s7szu7s+uqKzPuV7lJFJlIN+vQKQ9B4CHp7CGC8FaXIKKCEOrUxVPUzbsewlB538WPTRDX1d3K1Zl5ZzW/CL0keIneeIbdRSga+DEv83y8z/P850H4dh7hgSmEeh+j49IdmG1BGGYShmFgYmICjuPAdV2V2N7extzcHDjnYIz9E6B7Fea9lYB+80Pa6BuOZRJ+LZnKRlOpVERKicPDQwghVGJjYwOFQiHCOY8yxnTOORHlnKuTk5MolUrAs3dfgMhHv7//fTZ4fjAOIKyF9biiKPr4+Dh2d3cpoUJsbW1hfn4+Mjs72zIzMxMj6Dw1NaWura1hf38fqG45yq+TPUVK6avjb7xt26ZWA67rhgkhROD09NR/xtfj6Ogo4DiO4rqu4s1HOLYqT1eU8vqqurpaUpeXl4PFYtGbW726CEEB1LplWcGzOI7T8FVR/PodUuaB65Yq5ThmP1sQ1jfYtk2XUbtEoF4p6KFvJBZRtzd9gUEJPJf+8/0PhpK9dzNma6DVTKbNdDodomAShm6mCk5OTkiUfs65wRhrkFhYWPD8KpUKBZQw/PYHjBGpDryWnuHnb4nj4+NmBY126Ez2g4ODJnt7e83qvA6EEJrrutpGcVqrVMpapVLR1tfXw+VyWatWq2QLCSFiruvGhBAhy7LCtm2fRSMaeSDlSzz8JJHM9eFczy10dyXRlbuAXC6H9vZ2r6JarabUxcHi4iLy+fxfLC0teb7AI4nWF9Kf6Lt/o6NnKNHZ6tPNzlTcNM2WTCYTGh0dRbVa9WZIP3mhULjMOY8zxhq0MMZinHPf9PQ0EH0iEX0qfYlrI1c7rgy1mHFohpnSDcPQs9lscGxsDJubm17CnZ0dSpiiDaFNOUOEMebzVk9/JaG/kei4OOBhtmnNXW6oXKvVmqKQov/b5T+DVBw+HXJPWwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Checkbox interactive states",title:"Checkbox interactive states",src:"/static/7d6b64b2d5dbe85795dcbaa749eddd55/3cbba/checkbox-style-2.png",srcSet:["/static/7d6b64b2d5dbe85795dcbaa749eddd55/7fc1e/checkbox-style-2.png 288w","/static/7d6b64b2d5dbe85795dcbaa749eddd55/a5df1/checkbox-style-2.png 576w","/static/7d6b64b2d5dbe85795dcbaa749eddd55/3cbba/checkbox-style-2.png 1152w","/static/7d6b64b2d5dbe85795dcbaa749eddd55/92c65/checkbox-style-2.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,l.kt)("h2",null,"Typography"),(0,l.kt)("p",null,"Checkbox labels and group labels should be sentence case, with only the first\nword in a phrase and any proper nouns capitalized. Checkbox labels and group\nlabels should not exceed three words."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Font-size (px/rem)"),(0,l.kt)("th",{parentName:"tr",align:null},"Font-weight"),(0,l.kt)("th",{parentName:"tr",align:null},"Type token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Group label"),(0,l.kt)("td",{parentName:"tr",align:null},"12 / 0.75"),(0,l.kt)("td",{parentName:"tr",align:null},"Regular / 400"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$label-01"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Checkbox label"),(0,l.kt)("td",{parentName:"tr",align:null},"14 / 0.875"),(0,l.kt)("td",{parentName:"tr",align:null},"Regular / 400"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$body-compact-01"))))),(0,l.kt)("h2",null,"Structure"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"px / rem"),(0,l.kt)("th",{parentName:"tr",align:null},"Spacing token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Checkbox"),(0,l.kt)("td",{parentName:"tr",align:null},"height & width"),(0,l.kt)("td",{parentName:"tr",align:null},"16px"),(0,l.kt)("td",{parentName:"tr",align:null},"–")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"border"),(0,l.kt)("td",{parentName:"tr",align:null},"1px"),(0,l.kt)("td",{parentName:"tr",align:null},"–")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Checkbox:focus"),(0,l.kt)("td",{parentName:"tr",align:null},"border"),(0,l.kt)("td",{parentName:"tr",align:null},"2px"),(0,l.kt)("td",{parentName:"tr",align:null},"–")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"border inset"),(0,l.kt)("td",{parentName:"tr",align:null},"1px"),(0,l.kt)("td",{parentName:"tr",align:null},"–")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Group label"),(0,l.kt)("td",{parentName:"tr",align:null},"margin-bottom"),(0,l.kt)("td",{parentName:"tr",align:null},"8 / 0.5"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-03"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Checkbox label"),(0,l.kt)("td",{parentName:"tr",align:null},"padding-left"),(0,l.kt)("td",{parentName:"tr",align:null},"8 / 0.5"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-03"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Checkbox item"),(0,l.kt)("td",{parentName:"tr",align:null},"margin-bottom"),(0,l.kt)("td",{parentName:"tr",align:null},"4 / 0.25"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-02"))))),(0,l.kt)("div",{className:"image--fixed"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"41.31944444444445%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAABCUlEQVQoz2NgwAJUVFQY+BkYGLgYGBjs09MZ1AwMGESFhBjExMUZREVFGcTExBiIBhfVUxmUlZUZBBkYGHgYGBhskhIZVPR0KTPQwtmeQdVch8HDwITRMzJSxN7ZWVhCVJRNVEyMmZ+fn3QDraXUGEKgfOemBl1lS0sZIR4eUXFJSR6QYSQb+F+niuGWYSHbAT4v3pSqVit5SwtZYW4ecXFJST7yDAz+z/DLezLjFAZxZveSCk0ZaytJYT4+YXEJCS4xcsLwm3Ypw3+GVAbvgFQGhpo8VobGWl6GI/sYuQN8GdjioslwoW49w3/pEoZc0zAGhgojBoaFcxikGBgYRNTUGAQMDfAaCACjyjiJV3z3bAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Structure and spacing measurements for a checkbox group",title:"Structure and spacing measurements for a checkbox group",src:"/static/5ee7077ad2ce922821b35ba3e0ef71ef/3cbba/checkbox-style-3.png",srcSet:["/static/5ee7077ad2ce922821b35ba3e0ef71ef/7fc1e/checkbox-style-3.png 288w","/static/5ee7077ad2ce922821b35ba3e0ef71ef/a5df1/checkbox-style-3.png 576w","/static/5ee7077ad2ce922821b35ba3e0ef71ef/3cbba/checkbox-style-3.png 1152w","/static/5ee7077ad2ce922821b35ba3e0ef71ef/392b1/checkbox-style-3.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,l.kt)(m,{mdxType:"Caption"},"Structure and spacing measurements for a checkbox group | px / rem"),(0,l.kt)("div",{className:"image--fixed"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"41.31944444444445%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAACI0lEQVQoz3WS3UvTcRjFP9NlkTXLRM3p5k/T4UvDTdlKkfky23RTbLMI51oKLb2Yb9OGyUx8SSdEbqnhWKkoXWRdJGREEFho0FV20VX9A0FX/QHf0ATrogPn6oEP5+EcnpXd4kVpJw8q25k2edgq9vE1rx+hGOOzppeQycOMycN8RQdTVR7WDF6+5fjZLuxmV9PLrqaPf7R1vo2dYjfR3CZWzjkRuBAI5MGF/Xu0zkvE4mXJ3EXU7uOH5zGIXzz/sCMzoaApx4Ar00hEcvBQcsJ2QRufCq4TSzbL1xUWOeIdiB4Yvo9QwrKli7n6TlYtPvlKsz9B9L+OR7xk8/1HqomnMcdA69/AqO0NUdvbo7P2CWPI7tUv2vxFi9Y+NWKD7/lXGTd0M13mJ3xxTDOpd+unkqul9Zsh7ebyRqmX9FOB/Ia0oNqasprbKlvLdUHkSoBw84A8NrtsjczGXPPhmHvm3lwdvna5EIILLe3cSDHSk1GdUJ+pO6mB44PDk5lDS09LpLOFpy+r9EnXsoyKsOSQ7aVk9IiO4DE9AYgPQdwIxL0CWZLVQXpqEWZtLR1p5fQqa2hU6sgjkUd3pv8UIERcrdZEW3oZYcmx/zZ3E8sJKioY5AQjwMBeEchJqWlElVpIg/4SnVmVDKjMONUGtJzhSeAA+PMLVboq3Gn6Q+BEto3xbBtBtZXbajN+VS2j6gbsyhJqMopZkFoOJxEc+r8P9BujpqcVj4K1NAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Structure and spacing measurements for vertical and horizontal checkbox groupings",title:"Structure and spacing measurements for vertical and horizontal checkbox groupings",src:"/static/282c552b238bb87062c7bda46de63357/3cbba/checkbox-style-4.png",srcSet:["/static/282c552b238bb87062c7bda46de63357/7fc1e/checkbox-style-4.png 288w","/static/282c552b238bb87062c7bda46de63357/a5df1/checkbox-style-4.png 576w","/static/282c552b238bb87062c7bda46de63357/3cbba/checkbox-style-4.png 1152w","/static/282c552b238bb87062c7bda46de63357/392b1/checkbox-style-4.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,l.kt)(m,{mdxType:"Caption"},"Structure and spacing measurements for vertical and horizontal checkbox groupings | px / rem"))}b.isMDXComponent=!0}}]);