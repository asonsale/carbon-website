"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[28938],{28399:function(e,t,n){n.d(t,{Z:function(){return C}});var a=n(67294),o=n(88650),s=n.n(o),l=n(1597),i=n(64905),r=n(8878),p=n(75900),c=n.n(p);var u=e=>{let{title:t,theme:n,tabs:o=[]}=e;return a.createElement("div",{className:c()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":o.length,"PageHeader-module--dark-mode--WCeH8":"dark"===n})},a.createElement("div",{className:"cds--grid"},a.createElement("div",{className:"cds--row"},a.createElement("div",{className:"cds--col-lg-12"},a.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var d=e=>{let{relativePagePath:t,repository:n}=e;const{site:{siteMetadata:{repository:o}}}=(0,l.useStaticQuery)("1364590287"),{baseUrl:s,subDirectory:i,branch:r}=n||o,p=`${s}/edit/${r}${i}/src/pages${t}`;return s?a.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},a.createElement("div",{className:"cds--col"},a.createElement("a",{className:"EditLink-module--link--IDrl1",href:p},"Edit this page on GitHub"))):null},m=n(56328),h=n(51721);let g=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:n}=this.props,o=n.split("/").filter(Boolean).slice(-1)[0],i=t.map((e=>{const t=s()(e,{lower:!0,strict:!0}),i=t===o,r=new RegExp(`${o}/?(#.*)?$`),p=n.replace(r,t);return a.createElement("li",{key:e,className:c()({"PageTabs-module--selected-item--aBB0K":i},"PageTabs-module--list-item--024o6")},a.createElement(l.Link,{className:"PageTabs-module--link--Kz-7R",to:`${p}`},e))}));return a.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},a.createElement("div",{className:"cds--grid"},a.createElement("div",{className:"cds--row"},a.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},a.createElement("nav",{"aria-label":e},a.createElement("ul",{className:"PageTabs-module--list--xLqxG"},i))))))},t}(a.Component);var k=g,f=n(17680),b=n(75387),y=n(50041);var N=e=>{let{date:t}=e;const n=new Date(t);return t?a.createElement(y.X2,{className:"last-modified-date-module--row--XJoYQ"},a.createElement(y.sg,null,a.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var C=e=>{let{pageContext:t,children:n,location:o,Title:p}=e;const{frontmatter:c={},relativePagePath:h,titleType:g}=t,{tabs:y,title:C,theme:w,description:v,keywords:T,date:E}=c,{interiorTheme:x}=(0,b.Z)(),{site:{pathPrefix:I}}=(0,l.useStaticQuery)("2456312558"),P=I?o.pathname.replace(I,""):o.pathname,S=y?P.split("/").filter(Boolean).slice(-1)[0]||s()(y[0],{lower:!0}):"",L=w||x;return a.createElement(r.Z,{tabs:y,homepage:!1,theme:L,pageTitle:C,pageDescription:v,pageKeywords:T,titleType:g},a.createElement(u,{title:p?a.createElement(p,null):C,label:"label",tabs:y,theme:L}),y&&a.createElement(k,{title:C,slug:P,tabs:y,currentTab:S}),a.createElement(f.Z,{padded:!0},n,a.createElement(d,{relativePagePath:h}),a.createElement(N,{date:E})),a.createElement(m.Z,{pageContext:t,location:o,slug:P,tabs:y,currentTab:S}),a.createElement(i.Z,null))}},99895:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return r},default:function(){return k}});var a=n(45987),o=(n(67294),n(64983)),s=n(28399),l=n(80941);const i=["components"],r={},p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},c=p("PageDescription"),u=p("AnchorLinks"),d=p("AnchorLink"),m=p("InlineNotification"),h={_frontmatter:r},g=s.Z;function k(e){let{components:t}=e,n=(0,a.Z)(e,i);return(0,o.kt)(g,Object.assign({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(c,{mdxType:"PageDescription"},(0,o.kt)("p",null,"This step takes what we’ve built so far and optimizes the app for a production\nenvironment. We’ll be deploying the production build to IBM Cloud.")),(0,o.kt)(u,{mdxType:"AnchorLinks"},(0,o.kt)(d,{mdxType:"AnchorLink"},"Fork, clone and branch"),(0,o.kt)(d,{mdxType:"AnchorLink"},"Create IBM Cloud account"),(0,o.kt)(d,{mdxType:"AnchorLink"},"Optimize Sass"),(0,o.kt)(d,{mdxType:"AnchorLink"},"Build for production"),(0,o.kt)(d,{mdxType:"AnchorLink"},"Create manifest file"),(0,o.kt)(d,{mdxType:"AnchorLink"},"Create static file"),(0,o.kt)(d,{mdxType:"AnchorLink"},"Deploy app"),(0,o.kt)(d,{mdxType:"AnchorLink"},"Submit pull request")),(0,o.kt)("h2",null,"Preview"),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"https://angular-step-6-carbon-tutorial.netlify.com"},"preview")," of what you’ll\nbuild (visually no different, but built for production):"),(0,o.kt)(l.Z,{height:"400",title:"Carbon Angular Tutorial Step 5",src:"https://angular-step-6-carbon-tutorial.netlify.com",frameBorder:"no",allowtransparency:"true",allowFullScreen:"true",mdxType:"Preview"}),(0,o.kt)("h2",null,"Fork, clone and branch"),(0,o.kt)("p",null,"This tutorial has an accompanying GitHub repository called\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon-tutorial-angular"},"carbon-tutorial-angular"),"\nthat we’ll use as a starting point for each step. If you haven’t forked and\ncloned that repository yet, and haven’t added the upstream remote, go ahead and\ndo so by following the\n",(0,o.kt)("a",{parentName:"p",href:"/developing/angular-tutorial/step-1#fork-clone-and-branch"},"step 1 instructions"),"."),(0,o.kt)("h3",null,"Branch"),(0,o.kt)("p",null,"With your repository all set up, let’s check out the branch for this tutorial\nstep’s starting point."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git fetch upstream\ngit checkout -b angular-step-5 upstream/angular-step-5\n")),(0,o.kt)(m,{mdxType:"InlineNotification"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," This builds on top of step 4, but be sure to check out the upstream\nstep 5 branch because it includes the static assets required to get through this\nstep.")),(0,o.kt)("h3",null,"Build and start app"),(0,o.kt)("p",null,"Install the app’s dependencies (in case you’re starting fresh in your current\ndirectory and not continuing from the previous step):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\n")),(0,o.kt)("p",null,"Then, start the app:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm start\n")),(0,o.kt)("p",null,"You should see something similar to where the\n",(0,o.kt)("a",{parentName:"p",href:"/developing/angular-tutorial/step-4"},"previous step")," left off."),(0,o.kt)("h2",null,"Create IBM Cloud account"),(0,o.kt)("p",null,"Before we get started,\n",(0,o.kt)("a",{parentName:"p",href:"https://cloud.ibm.com/registration"},"create an IBM Cloud account")," if you don’t\nalready have one, as we’ll be deploying there in a bit."),(0,o.kt)("h2",null,"Optimize Sass"),(0,o.kt)("p",null,"So far we’ve been developing in a, well, development environment where static\nasset optimization hasn’t been a priority. If you reference ",(0,o.kt)("inlineCode",{parentName:"p"},"/src/styles.scss"),",\nyou’ll see one ",(0,o.kt)("inlineCode",{parentName:"p"},"@import")," that is pulling in Carbon’s full Sass build."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss",metastring:"path=src/styles.scss",path:"src/styles.scss"},'@import "~carbon-components/scss/globals/scss/styles";\n')),(0,o.kt)("p",null,"To give you an idea of what’s all included, open up\n",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules/carbon-components/scss/globals/scss/styles.scss"),". You’ll see\nimports for components like accordion, slider, tooltip, etc. Since we aren’t\nusing those components, let’s exclude them from our built stylesheets. Keeping\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"$feature-flags")," Sass map, and ",(0,o.kt)("inlineCode",{parentName:"p"},"carbon-overrides.scss"),", replace the\n",(0,o.kt)("inlineCode",{parentName:"p"},"styles.scss")," import with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss",metastring:"path=src/styles.scss",path:"src/styles.scss"},'// Feature flags\n$css--font-face: true;\n$css--plex: true;\n\n// Global styles\n@import "~carbon-components/scss/globals/scss/css--font-face";\n@import "~carbon-components/scss/globals/grid/grid";\n\n// Carbon components\n@import "~carbon-components/scss/components/breadcrumb/breadcrumb";\n@import "~carbon-components/scss/components/button/button";\n@import "~carbon-components/scss/components/data-table/data-table";\n@import "~carbon-components/scss/components/link/link";\n@import "~carbon-components/scss/components/pagination/pagination";\n@import "~carbon-components/scss/components/tabs/tabs";\n@import "~carbon-components/scss/components/ui-shell/ui-shell";\n')),(0,o.kt)("p",null,"Looking at the new ",(0,o.kt)("inlineCode",{parentName:"p"},"styles.scss")," file, you may be asking what happened to\nimporting ",(0,o.kt)("inlineCode",{parentName:"p"},"_vars.scss"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"_colors.scss"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"_theme.scss"),", etc.? Many of those\nglobal Sass partials get imported through the components. For example, open\n",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules/carbon-components/scss/components/button/_button.scss")," to see its\ndependencies. No harm in importing them as ",(0,o.kt)("inlineCode",{parentName:"p"},"styles.scss")," does, but for\nsimplicity here, we’ll let the components pull them in."),(0,o.kt)("p",null,"You can read more about optimizing Carbon’s Sass in the\n",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/carbondesign/minimal-css-with-carbon-b0c089ccfa71"},"Carbon Design System publication"),"\non Medium."),(0,o.kt)("h2",null,"Build for production"),(0,o.kt)("p",null,"Before we deploy our app, we need to create an optimized production build with\nthis command. You may need to ",(0,o.kt)("inlineCode",{parentName:"p"},"CTRL-C")," to stop the development environment\nfirst."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")),(0,o.kt)("p",null,"Looking at ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),", you’ll find ",(0,o.kt)("inlineCode",{parentName:"p"},"ng build"),". This builds the app for\nproduction to the ",(0,o.kt)("inlineCode",{parentName:"p"},"dist")," folder. It bundles Angular in production mode and\noptimizes the build for the best performance. It even goes so far to minify\nfiles and include hashes in filenames for caching."),(0,o.kt)("p",null,"As a lot of this may seem like magic since the build configuration came from\nCreate React App, go ahead and check out their\n",(0,o.kt)("a",{parentName:"p",href:"https://facebook.github.io/create-react-app/docs/production-build"},"production build guidelines"),"\nfor a full description of what’s happening."),(0,o.kt)("h2",null,"Create manifest file"),(0,o.kt)("p",null,"Now that we have a production build, let’s get it on the cloud. We’re going to\nuse\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cloudfoundry/staticfile-buildpack.git"},"staticfile-buildpack"),"\nto deploy our webapp. Since this is a Cloud Foundry buildpack, we’ll be using\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"cf")," command line interface (CLI). If running ",(0,o.kt)("inlineCode",{parentName:"p"},"cf --help")," doesn’t work for\nyou, chances are you need to\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.cloudfoundry.org/cf-cli/install-go-cli.html"},"install the CLI"),"."),(0,o.kt)(m,{mdxType:"InlineNotification"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," If unfamiliar with buildpacks, the\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.cloudfoundry.org/buildpacks/staticfile/index.html"},"staticfile buildpack docs"),"\nhas good definitions and configuration documentation.")),(0,o.kt)("p",null,"With the Cloud Foundry CLI installed, next, we need to create a ",(0,o.kt)("inlineCode",{parentName:"p"},"manifest.yml"),"\nfile in the root of the project. To prevent multiple apps trying to use the\n",(0,o.kt)("inlineCode",{parentName:"p"},"carbon-tutorial-angular")," name, replace ",(0,o.kt)("inlineCode",{parentName:"p"},"USERNAME")," with your GitHub username\nbelow to make sure our apps are uniquely named."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"path=manifest.yml",path:"manifest.yml"},"---\napplications:\n  - name: carbon-tutorial-angular-USERNAME\n    memory: 64M\n    buildpack: https://github.com/cloudfoundry/staticfile-buildpack.git\n")),(0,o.kt)(m,{mdxType:"InlineNotification"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," With this set-up we’re still using a GitHub personal access token\nsaved in ",(0,o.kt)("inlineCode",{parentName:"p"},".env.local"),". If you haven’t created a GitHub access token yet, see\n",(0,o.kt)("a",{parentName:"p",href:"/tutorial/react/step-3#create-access-token"},"step 3"),". You can put the\nenvironment variable in the manifest file, or manually add it in the IBM Cloud\ndashboard, but since we’re building off previous tutorial steps nothing more is\nneeded.")),(0,o.kt)("h2",null,"Create static file"),(0,o.kt)("p",null,"Create a new static file in the root of the project named ",(0,o.kt)("inlineCode",{parentName:"p"},"Staticfile"),". This\ntells the app to deploy from the ",(0,o.kt)("inlineCode",{parentName:"p"},"dist")," folder and not the root of the project."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"path=Staticfile",path:"Staticfile"},"root: dist\n")),(0,o.kt)("h3",null,"Cloud Foundry ignore"),(0,o.kt)("p",null,"After telling Cloud Foundry what to include, we can also specify what to ignore.\nCreate a top-level ",(0,o.kt)("inlineCode",{parentName:"p"},".cfignore")," file. Cloud Foundry doesn’t let you push\nread-only files (specifically, files with permissions <",(0,o.kt)("inlineCode",{parentName:"p"},"400"),"), so to prevent\nissues with the deploy, add:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"path=.cfignore",path:".cfignore"},"node_modules/.cache\n")),(0,o.kt)("p",null,"You can speed up deploys by decreasing the files uploaded through cloud foundry.\nTo accomplish this, ignore any folder not required by the production application\non IBM Cloud. For example, in the case of serving static files, you can ignore\n",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules/")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"src/")," because the only folder being served is ",(0,o.kt)("inlineCode",{parentName:"p"},"build/"),"."),(0,o.kt)("h2",null,"Deploy app"),(0,o.kt)("p",null,"Login to IBM Cloud with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cf login -a https://api.us-south.cf.cloud.ibm.com --sso\n")),(0,o.kt)("p",null,"Deploy app using the ",(0,o.kt)("inlineCode",{parentName:"p"},"cf push")," command. Since ",(0,o.kt)("inlineCode",{parentName:"p"},"manifest.yml")," is in our root\ndirectory, we don’t need to specify it in the push command. But, if you have\nmultiple manifest files that target different environments, it’s good practice\nto specify the file."),(0,o.kt)(m,{mdxType:"InlineNotification"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," If you do not have an org or space created, you will need to create\nthese in your account “Cloud foundry orgs” settings."),(0,o.kt)("p",null,"Additionally, this step assumes your spaces are in the US South region. To\nsuccessfully deploy, you might need to update the region code (for example,\n",(0,o.kt)("inlineCode",{parentName:"p"},"api.[REGION].cf.cloud.ibm.com"),") to the region where your spaces were created,\nor create a space in the US South region.\n",(0,o.kt)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/cloud-foundry-public?topic=cloud-foundry-public-endpoints"},"Learn more"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cf push -f manifest.yml\n")),(0,o.kt)("p",null,"To make it easy on ourselves by not needing to remember that command, let’s add\na script in ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),". We can combine the build and deploy steps to make\nsure we only deploy immediately after running the build. In the ",(0,o.kt)("inlineCode",{parentName:"p"},'"scripts"'),"\nobject in ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),", add:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"path=package.json",path:"package.json"},'"deploy": "rm -rf ./dist && ng build --prod --aot && cf push -f manifest.yml"\n')),(0,o.kt)("p",null,"Next time you want to deploy, you can simply run ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run-script deploy"),"."),(0,o.kt)("h2",null,"Submit pull request"),(0,o.kt)("p",null,"That does it! We’re going to submit a pull request to verify completion of this\ntutorial step. In doing so, ",(0,o.kt)("strong",{parentName:"p"},"please include the mybluemix.net URL for your\ndeployed app in your pull request description"),"."),(0,o.kt)("h3",null,"Git commit and push"),(0,o.kt)("p",null,"Before we can create a pull request, stage and commit all of your changes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'git add --all && git commit -m "feat(tutorial): complete step 5"\n')),(0,o.kt)("p",null,"Then, push to your repository:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git push origin angular-step-5\n")),(0,o.kt)(m,{mdxType:"InlineNotification"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," Having issues pushing your changes?\n",(0,o.kt)("a",{parentName:"p",href:"/developing/angular-tutorial/step-1#git-commit-and-push"},"Step 1")," has\ntroubleshooting notes that may help.")),(0,o.kt)("h3",null,"Pull request (PR)"),(0,o.kt)("p",null,"Finally, visit\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon-tutorial-angular"},"carbon-tutorial-angular"),"\nto “Compare & pull request”. In doing so, make sure that you are comparing to\n",(0,o.kt)("inlineCode",{parentName:"p"},"angular-step-5")," into ",(0,o.kt)("inlineCode",{parentName:"p"},"base: angular-step-5"),"."),(0,o.kt)(m,{mdxType:"InlineNotification"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," Your tutorial step will be automatically reviewed based on the status\nof your tests. Ensure that your tests pass when you submit your PR. Expect your\ntutorial step PRs to be reviewed by the Carbon team but not merged. We’ll close\nyour PR so we can keep the repository’s remote branches pristine and ready for\nthe next person!")))}k.isMDXComponent=!0}}]);