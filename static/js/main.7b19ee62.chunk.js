(this.webpackJsonpportofolioommi=this.webpackJsonpportofolioommi||[]).push([[0],{27:function(e,t,s){},36:function(e,t,s){},43:function(e,t,s){},44:function(e,t,s){},45:function(e,t,s){},46:function(e,t,s){},47:function(e,t,s){},49:function(e,t,s){"use strict";s.r(t);var c=s(2),a=s.n(c),i=s(28),n=s.n(i),l=s(7),o=s(8),r=s(10),j=s(9),b=s(5),d=s(31),m=s(11),h=s(18),x=s(16),u=s(21),O=s(4),p=s(15),N=s(3),f=s(29),v=s(20),g=s.p+"static/media/test.5bbdfc26.jpg",k=(s(36),s(1)),y=function(e){Object(r.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(l.a)(this,s);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={isOpen:!0,isTranslate:!0,isCurrentPage_1:!0,isCurrentPage_2:!0,isCurrentPage_3:!0,isCurrentPage_4:!0,scrollPosition:null,changeColorMenu:!1},e.toggleX=function(){e.setState({isOpen:!1})},e.toggleY=function(){e.setState({isOpen:!0})},e.toggleTranslateX=function(){e.setState({isTranslate:!1})},e.toggleTranslateY=function(){e.setState({isTranslate:!0})},e.listenToScroll=function(){var t=document.body.scrollTop||document.documentElement.scrollTop;e.setState({scrollPosition:t}),e.state.scrollPosition<=662||e.state.scrollPosition>=3188?e.setState({changeColorMenu:!1}):e.state.scrollPosition>=2332?e.setState({changeColorMenu:!0}):e.state.scrollPosition>=1412?e.setState({changeColorMenu:!1}):e.state.scrollPosition>=662&&e.setState({changeColorMenu:!0}),console.log(e.state.scrollPosition)},e}return Object(o.a)(s,[{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.listenToScroll)}},{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.listenToScroll),"/"===window.location.href.replace("http://localhost:3000","")?this.setState({isCurrentPage_1:!1}):"/contact"===window.location.href.replace("http://localhost:3000","")?this.setState({isCurrentPage_2:!1}):"/project"===window.location.href.replace("http://localhost:3000","")?this.setState({isCurrentPage_3:!1}):"/aboutme"===window.location.href.replace("http://localhost:3000","")&&this.setState({isCurrentPage_4:!1})}},{key:"render",value:function(){return Object(k.jsxs)("div",{className:"container_header",children:[Object(k.jsx)("div",{className:"name_ommi",children:Object(k.jsxs)("a",{href:"/",className:"button_logoX hover-1",children:["OMI",Object(k.jsx)("span",{className:"color-2 dot-size",children:"."})]})}),Object(k.jsx)("div",{className:"navigation_bar",children:this.state.isOpen?Object(k.jsx)(f.a,{className:this.state.changeColorMenu?"button_navigationChange":"button_navigationX",onClick:this.toggleX}):Object(k.jsx)(p.a,{className:"button_navigationY hover",onClick:this.toggleY})}),Object(k.jsxs)("div",{className:this.state.isOpen?"nav-links":"nav-links-open",children:[Object(k.jsxs)("div",{className:"content",children:[Object(k.jsxs)("div",{className:"left-content",children:[Object(k.jsx)("img",{className:"pic-1",src:g,alt:"test"}),Object(k.jsxs)("div",{children:[Object(k.jsx)("h4",{className:"color-2 text-header",children:"Social Media"}),Object(k.jsx)("a",{href:"https://www.instagram.com/omiputera/",target:"_blank",rel:"noreferrer",className:"social-media hover",children:Object(k.jsx)(N.e,{className:"skills hover"})}),Object(k.jsx)("a",{href:"https://github.com/ommiPutera",target:"_blank",rel:"noreferrer",className:"social-media hover",children:Object(k.jsx)(h.a,{className:"skills hover"})}),Object(k.jsx)("a",{href:"https://linkedin.com/in/ommi-putera-6734a7209",target:"_blank",rel:"noreferrer",className:"social-media hover",children:Object(k.jsx)(x.a,{className:"skills hover"})})]}),Object(k.jsxs)("div",{children:[Object(k.jsx)("h4",{className:"contact-detail text-header color-2",children:"Contact Details"}),Object(k.jsx)("h6",{className:"info",children:"+6289508182045"}),Object(k.jsx)("h6",{className:"info-1",children:"ommiputrakarunia@gmail.com"})]})]}),Object(k.jsx)("div",{className:"right-content",children:Object(k.jsxs)("ul",{className:"link-nav",children:[Object(k.jsx)("li",{className:this.state.isCurrentPage_1?"link-1":"link-1 link-1-onpage",children:Object(k.jsxs)(O.b,{to:"/",children:["Home",Object(k.jsx)(v.b,{className:"icon-1 hover"})]})}),Object(k.jsx)("li",{className:this.state.isCurrentPage_2?"link-2":"link-2 link-2-onpage",children:Object(k.jsxs)(O.b,{to:"/contact",children:["Contact",Object(k.jsx)(v.a,{className:"icon-1 hover"})]})}),Object(k.jsx)("li",{className:this.state.isCurrentPage_3?"link-3":"link-3 link-3-onpage",children:Object(k.jsxs)(O.b,{to:"/project",children:["Project",Object(k.jsx)(v.c,{className:"icon-1 hover"})]})}),Object(k.jsx)("li",{className:this.state.isCurrentPage_4?"link-4":"link-4 link-4-onpage",children:Object(k.jsxs)(O.b,{to:"/aboutme",children:["About me",Object(k.jsx)(v.d,{className:"icon-1 hover"})]})})]})})]}),Object(k.jsx)("div",{className:"copyright",children:Object(k.jsxs)("h6",{children:["Copyright ",Object(k.jsx)(p.b,{className:"copyright-icon"}),"2021 Ommi Putera"]})})]})]})}}]),s}(c.Component),w=s.p+"static/media/Home.a8fdc5eb.png",P=(s.p,s.p+"static/media/prflfront.c6180c0a.JPG"),C=(s(43),function(e){Object(r.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(l.a)(this,s);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={isOpen:!0},e.toggleX=function(){e.setState({isOpen:!1})},e.toggleY=function(){e.setState({isOpen:!0})},e}return Object(o.a)(s,[{key:"render",value:function(){return Object(k.jsxs)("div",{children:[Object(k.jsx)(y,{}),Object(k.jsx)("div",{className:"home-content",children:Object(k.jsxs)("div",{className:"content-1",children:[Object(k.jsx)("h5",{className:"text-2",children:Object(k.jsx)("span",{children:"Web Development student at Purwadhika Digital Technologhy School. Jakarta, Indonesia."})}),Object(k.jsxs)("h1",{className:"text-1",children:["I am a ",Object(k.jsx)("span",{className:"color-2",children:"Front-end"})," Developer"]}),Object(k.jsx)("h5",{className:"text-0",children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate voluptatem dignissimos maiores fugit eius? Ratione voluptas consequatur amet blanditiis quasi."}),Object(k.jsx)(O.b,{to:"/project",children:Object(k.jsxs)("button",{className:"button",style:{borderRadius:"80px"},children:["Projects",Object(k.jsx)(m.b,{className:"button-icon-1"}),Object(k.jsx)(m.a,{className:"button-icon-1-unlock"})]})})]})}),Object(k.jsx)("div",{className:"container-pic-front",children:Object(k.jsx)("img",{className:"pic-front",src:P,alt:"prflfront"})}),Object(k.jsxs)("div",{className:"content-3",children:[Object(k.jsxs)("div",{className:"content-3-left",children:[Object(k.jsxs)("h1",{className:"text-3",children:["What about the ",Object(k.jsx)("span",{className:"color-2",children:"skills"})," i am good at?"]}),Object(k.jsx)("h5",{className:"text-4",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, veritatis, debitis blanditiis, quos deserunt fuga quae facilis ex recusandae non maiores ab officiis nesciunt totam commodi necessitatibus beatae tempora? Blanditiis?."}),Object(k.jsxs)("div",{className:"text-4-icon",children:[Object(k.jsx)("a",{href:"https://github.com/ommiPutera",target:"_blank",rel:"noreferrer",className:"social-media-1",children:Object(k.jsx)(h.a,{className:"skills-1 white"})}),Object(k.jsx)("a",{href:"https://www.instagram.com/omiputera/",target:"_blank",rel:"noreferrer",className:"social-media-1",children:Object(k.jsx)(N.e,{className:"skills-1 white"})}),Object(k.jsx)("a",{href:"https://linkedin.com/in/ommi-putera-6734a7209",target:"_blank",rel:"noreferrer",className:"social-media-1",children:Object(k.jsx)(x.a,{className:"skills-1 white"})})]}),Object(k.jsx)(O.b,{to:"/aboutme",children:Object(k.jsxs)("button",{className:"button-2",style:{borderRadius:"80px"},children:["About me",Object(k.jsx)(d.a,{className:"button-icon"})]})})]}),Object(k.jsx)("div",{className:"content-3-right",children:Object(k.jsxs)("div",{className:"skills-full",children:[Object(k.jsxs)("div",{className:"skills-front",children:[Object(k.jsx)("h1",{className:"text-5",children:Object(k.jsx)("span",{className:"color-2",children:"Front-end"})}),Object(k.jsxs)("p",{className:"list-front",children:[Object(k.jsx)(N.d,{className:"icon-skills"}),"HTML 5"]}),Object(k.jsxs)("p",{className:"list-front",children:[Object(k.jsx)(N.c,{className:"icon-skills"}),"CSS 3"]}),Object(k.jsxs)("p",{className:"list-front",children:[Object(k.jsx)(N.f,{className:"icon-skills"}),"Javascript"]}),Object(k.jsxs)("p",{className:"list-front",children:[Object(k.jsx)(N.k,{className:"icon-skills"}),"React.js"]}),Object(k.jsxs)("p",{className:"list-front",children:[Object(k.jsx)(N.l,{className:"icon-skills"}),"Redux"]}),Object(k.jsxs)("p",{className:"list-front",children:[Object(k.jsx)(N.b,{className:"icon-skills"}),"Bootstarp"]}),Object(k.jsxs)("p",{className:"list-front",children:[Object(k.jsx)(N.k,{className:"icon-skills"}),"React Native"]})]}),Object(k.jsxs)("div",{className:"skills-front",children:[Object(k.jsx)("h1",{className:"text-5",children:Object(k.jsx)("span",{className:"color-2",children:"Illustration"})}),Object(k.jsxs)("p",{className:"list-front",children:[Object(k.jsx)(N.a,{className:"icon-skills"}),"Adobe Illustration"]})]}),Object(k.jsxs)("div",{className:"skills-front",children:[Object(k.jsx)("h1",{className:"text-5",children:Object(k.jsx)("span",{className:"color-2",children:"Back-end"})}),Object(k.jsxs)("p",{className:"list-front",children:[Object(k.jsx)(N.i,{className:"icon-skills"}),"Node.js"]}),Object(k.jsxs)("p",{className:"list-front",children:[Object(k.jsx)(N.g,{className:"icon-skills"}),"JSON"]}),Object(k.jsxs)("p",{className:"list-front",children:[Object(k.jsx)(N.h,{className:"icon-skills"}),"MySql"]}),Object(k.jsxs)("p",{className:"list-front",children:[Object(k.jsx)(N.j,{className:"icon-skills"}),"Postman"]}),Object(k.jsxs)("p",{className:"list-front",children:[Object(k.jsx)(u.a,{className:"icon-skills"}),"Workbench"]}),Object(k.jsxs)("p",{className:"list-front",children:[Object(k.jsx)(N.m,{className:"icon-skills"}),"Socket.io"]})]})]})})]}),Object(k.jsxs)("div",{className:"content-4",children:[Object(k.jsx)("div",{className:"content-4-top",children:Object(k.jsxs)("div",{className:"content-4-pic",children:[Object(k.jsx)("div",{children:Object(k.jsx)("img",{className:"pic-2",src:w,alt:"home_2"})}),Object(k.jsx)("a",{href:"http://kelompok1.purwadhikafs1.com/",target:"_blank",rel:"noreferrer",className:"link-6",children:Object(k.jsx)("h5",{className:"link-6-sub",children:"kelompok1.purwadhikafs1.com"})})]})}),Object(k.jsxs)("div",{className:"text-6",children:[Object(k.jsx)("h5",{className:"text-pic",children:"Final Project"}),Object(k.jsx)("h5",{className:"text-pic-sub",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, veritatis, debitis blanditiis, quos deserunt fuga quae facilis ex recusandae non maiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, veritatis, debitis blanditiis, quos deserunt fuga quae facilis ex recusandae non maiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, veritatis, debitis blanditiis, quos deserunt fuga quae facilis ex recusandae non maiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, veritatis, debitis blanditiis, quos deserunt fuga quae facilis ex recusandae non maiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, veritatis, debitis blanditiis, quos deserunt fuga quae facilis ex recusandae non maiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, veritatis, debitis blanditiis, quos deserunt fuga quae facilis ex recusandae non maiores."}),Object(k.jsx)("div",{className:"link",children:Object(k.jsx)(O.b,{to:"/project_1",children:Object(k.jsx)("button",{className:"button-3",style:{borderRadius:"80px"},children:"Preview"})})})]})]}),Object(k.jsxs)("div",{className:"content-6",children:[Object(k.jsxs)("h1",{className:"text-8",children:["Would ",Object(k.jsx)("span",{className:"color-2",children:"you like"})," to see more projects?"]}),Object(k.jsx)("h5",{className:"text-content-6",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, veritatis, debitis blanditiis, quos deserunt fuga quae facilis ex recusandae non maiores ab officiis nesciunt totam commodi necessitatibus beatae tempora? Blanditiis?"}),Object(k.jsx)(O.b,{to:"/project",children:Object(k.jsxs)("button",{className:"button-7",style:{borderRadius:"80px"},children:["All projects",Object(k.jsx)(m.b,{className:"button-icon-1"}),Object(k.jsx)(m.a,{className:"button-icon-1-unlock"})]})})]}),Object(k.jsxs)("div",{className:"content-6-bottom",children:[Object(k.jsxs)("h1",{className:"text-8",children:[Object(k.jsx)("span",{className:"color-2",children:"Let\u2019s"})," work together!"]}),Object(k.jsx)("h5",{className:"text-content-6",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, veritatis, debitis blanditiis, quos deserunt fuga quae facilis ex recusandae non maiores ab officiis nesciunt totam commodi necessitatibus beatae tempora? Blanditiis?"}),Object(k.jsx)(O.b,{to:"/contact",children:Object(k.jsxs)("button",{className:"button-7",style:{borderRadius:"80px"},children:["Contact me!",Object(k.jsx)(x.b,{className:"button-icon-2"})]})})]}),Object(k.jsx)("div",{className:"content-7",children:Object(k.jsxs)("h6",{className:"copyright-home",children:["Copyright ",Object(k.jsx)(p.b,{className:"copyright-icon-home"}),"2021 Ommi Putera"]})})]})}}]),s}(c.Component)),q=s.p+"static/media/wlpr.c10abe55.jpg",L=(s(44),function(e){Object(r.a)(s,e);var t=Object(j.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(k.jsxs)("div",{children:[Object(k.jsx)(y,{}),Object(k.jsxs)("div",{className:"container-contact",children:[Object(k.jsxs)("div",{className:"left-contact",children:[Object(k.jsx)("h1",{className:"text-1",children:"Contact:"}),Object(k.jsx)("h1",{className:"text-2 contact-text-3",children:"You can contact me through here"}),Object(k.jsx)("h6",{className:"contact-text-1",children:"+6289508182045"}),Object(k.jsx)("h6",{className:"contact-text-2",children:"ommiputrakarunia@gmail.com"}),Object(k.jsx)("h1",{className:"text-2 contact-text-4",children:"You can find me through here"}),Object(k.jsxs)("div",{className:"text-4-icon contact-sosmed",children:[Object(k.jsx)("a",{href:"https://github.com/ommiPutera",target:"_blank",rel:"noreferrer",className:"social-media-1",children:Object(k.jsx)(h.a,{className:"skills-1"})}),Object(k.jsx)("a",{href:"https://www.instagram.com/omiputera/",target:"_blank",rel:"noreferrer",className:"social-media-1",children:Object(k.jsx)(N.e,{className:"skills-1"})}),Object(k.jsx)("a",{href:"https://linkedin.com/in/ommi-putera-6734a7209",target:"_blank",rel:"noreferrer",className:"social-media-1",children:Object(k.jsx)(x.a,{className:"skills-1"})})]})]}),Object(k.jsxs)("div",{className:"right-contact",children:[Object(k.jsx)("img",{className:"pic-wlpr",src:q,alt:"wlpr"}),Object(k.jsx)("h1",{className:"contact-text-5",children:"Source: https://unsplash.com/@tandukuda, Location: Raja Ampat, Papua Barat, Indonesia"})]})]})]})}}]),s}(c.Component)),S=s.p+"static/media/portofolio-web.37f26a64.png",_=s.p+"static/media/portofolio-web-1.6e16ca57.png",R=s.p+"static/media/portofolio-web-2.eb421755.png",E=s.p+"static/media/portofolio-web-3.62f75a96.png",T=s.p+"static/media/portofolio-web-4.94b46aee.png",M=(s(45),function(e){Object(r.a)(s,e);var t=Object(j.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(k.jsxs)("div",{children:[Object(k.jsx)(y,{}),Object(k.jsx)("div",{className:"content-project-top",children:Object(k.jsxs)("div",{className:"content-project-1-left",children:[Object(k.jsx)("h1",{className:"text-about-3 text-project-1",children:"Project that i've completed"}),Object(k.jsx)("h1",{className:"text-1",children:"Projects:"}),Object(k.jsx)("h1",{className:"text-0",children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque quidem laborum eveniet nobis, quam, error, reiciendis expedita inventore omnis cupiditate iure? Soluta, animi deleniti distinctio iusto id expedita officiis obcaecati."}),Object(k.jsxs)("div",{className:"content-project-sub",children:[Object(k.jsxs)("div",{className:"pic-pro-1",children:[Object(k.jsx)("img",{className:"pic-pro-sub",src:S,alt:"pro"}),Object(k.jsx)("div",{className:"link link-pic-project",children:Object(k.jsx)(O.b,{to:"/project_1",children:Object(k.jsxs)("button",{className:"button-project",style:{borderRadius:"80px"},children:["View",Object(k.jsx)(m.b,{className:"button-icon-1"}),Object(k.jsx)(m.a,{className:"button-icon-1-unlock"})]})})})]}),Object(k.jsx)("div",{className:"pemisah"}),Object(k.jsxs)("div",{className:"pic-pro-2",children:[Object(k.jsx)("img",{className:"pic-pro-sub",src:_,alt:"pro"}),Object(k.jsx)("div",{className:"link link-pic-project",children:Object(k.jsx)(O.b,{to:"/under-construction",children:Object(k.jsxs)("button",{className:"button-project",style:{borderRadius:"80px"},children:["View",Object(k.jsx)(m.b,{className:"button-icon-1"}),Object(k.jsx)(m.a,{className:"button-icon-1-unlock"})]})})})]}),Object(k.jsx)("div",{className:"pemisah"}),Object(k.jsxs)("div",{className:"pic-pro-3",children:[Object(k.jsx)("img",{className:"pic-pro-sub",src:R,alt:"pro"}),Object(k.jsx)("div",{className:"link link-pic-project",children:Object(k.jsx)(O.b,{to:"/under-construction",children:Object(k.jsxs)("button",{className:"button-project",style:{borderRadius:"80px"},children:["View",Object(k.jsx)(m.b,{className:"button-icon-1"}),Object(k.jsx)(m.a,{className:"button-icon-1-unlock"})]})})})]})]})]})}),Object(k.jsx)("div",{className:"content-project-bottom",children:Object(k.jsxs)("div",{className:"content-project-2-left",children:[Object(k.jsx)("h1",{className:"text-about-3 text-project-2",children:"Project that i've completed"}),Object(k.jsx)("h1",{className:"text-0 text-project-bottom white",children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque quidem laborum eveniet nobis, quam, error, reiciendis expedita inventore omnis cupiditate iure? Soluta, animi deleniti distinctio iusto id expedita officiis obcaecati."}),Object(k.jsxs)("div",{className:"content-project-sub-2",children:[Object(k.jsxs)("div",{className:"pic-pro-1",children:[Object(k.jsx)("img",{className:"pic-pro-sub",src:E,alt:"pro"}),Object(k.jsx)("div",{className:"link link-pic-project",children:Object(k.jsx)(O.b,{to:"/under-construction",children:Object(k.jsxs)("button",{className:"button-project",style:{borderRadius:"80px"},children:["View",Object(k.jsx)(m.b,{className:"button-icon-1"}),Object(k.jsx)(m.a,{className:"button-icon-1-unlock"})]})})})]}),Object(k.jsx)("div",{className:"pemisah"}),Object(k.jsxs)("div",{className:"pic-pro-2",children:[Object(k.jsx)("img",{className:"pic-pro-sub",src:T,alt:"pro"}),Object(k.jsx)("div",{className:"link link-pic-project",children:Object(k.jsx)(O.b,{to:"/under-construction",children:Object(k.jsxs)("button",{className:"button-project",style:{borderRadius:"80px"},children:["View",Object(k.jsx)(m.b,{className:"button-icon-1"}),Object(k.jsx)(m.a,{className:"button-icon-1-unlock"})]})})})]}),Object(k.jsx)("div",{className:"pemisah"}),Object(k.jsx)("div",{className:"pic-pro-3"})]})]})}),Object(k.jsxs)("h6",{className:"copyright-project",children:["Copyright ",Object(k.jsx)(p.b,{className:"copyright-icon-home"}),"2021 Ommi Putera"]})]})}}]),s}(c.Component)),A=s.p+"static/media/prfl.f3b1d633.JPG",B=s.p+"static/media/map.e3f08fcf.png",D=(s(46),function(e){Object(r.a)(s,e);var t=Object(j.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(k.jsxs)("div",{children:[Object(k.jsx)(y,{}),Object(k.jsxs)("div",{className:"container-about",children:[Object(k.jsxs)("div",{className:"left-about",children:[Object(k.jsx)("h1",{className:"text-2 text-about-1",children:"About Me:"}),Object(k.jsxs)("h1",{className:"text-1",children:["Hi, I'm ",Object(k.jsx)("span",{className:"color-2",children:"Ommi"})]}),Object(k.jsx)("h1",{className:"text-about-2",children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla magni minus, laudantium, quibusdam."}),Object(k.jsx)("h1",{className:"text-about-3",children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et ab enim nam, eos quod mollitia quidem porro fugiat sunt quia necessitatibus itaque, optio id? Aliquam quasi dolorem ipsam natus eveniet?"}),Object(k.jsxs)("div",{className:"container-text-about-4",children:[Object(k.jsxs)("div",{className:"text-about-4",children:[Object(k.jsx)("h1",{className:"number",children:"5"}),Object(k.jsx)("h1",{className:"number-text color-2",children:"PROJECTS DEVELOPED"})]}),Object(k.jsxs)("div",{className:"text-about-4",children:[Object(k.jsx)("h1",{className:"number",children:"22"}),Object(k.jsx)("h1",{className:"number-text color-2",children:"YEARS OLD"})]})]})]}),Object(k.jsx)("div",{className:"right-about",children:Object(k.jsx)("img",{className:"pic-about",src:A,alt:"prfl"})})]}),Object(k.jsxs)("div",{className:"container-about-2",children:[Object(k.jsxs)("div",{className:"bottom-about",children:[Object(k.jsx)("h1",{className:"text-2 text-about-1",children:"Where is my location?"}),Object(k.jsxs)("h1",{className:"text-about-5 white",children:["Jakarta, ",Object(k.jsx)("span",{className:"color-2",children:"Indonesia."})]}),Object(k.jsx)("img",{className:"pic-about-1",src:B,alt:"map"})]}),Object(k.jsxs)("div",{className:"bottom-about-2",children:[Object(k.jsx)("h1",{className:"text-2 text-about-1",children:"TIMELINE"}),Object(k.jsx)("h1",{className:"text-about-5 white",children:"Graphic Design"}),Object(k.jsx)("h1",{className:"number-text color-2",children:"2015-2019"}),Object(k.jsx)("h1",{className:"text-about-5-6 white",children:"Bachelor of Economics"}),Object(k.jsx)("h1",{className:"number-text color-2",children:"2016-2020"}),Object(k.jsx)("h1",{className:"text-about-5-6 white",children:"Web Developer"}),Object(k.jsx)("h1",{className:"number-text color-2",children:"2021-PRESENT"}),Object(k.jsx)(O.b,{to:"/contact",children:Object(k.jsxs)("button",{className:"button-7 button-about",style:{borderRadius:"80px"},children:["Contact me!",Object(k.jsx)(x.b,{className:"button-icon-2"})]})})]})]}),Object(k.jsx)("div",{className:"copyright-about",children:Object(k.jsxs)("h6",{className:"copyright-about-1",children:["Copyright ",Object(k.jsx)(p.b,{className:"copyright-icon-home"}),"2021 Ommi Putera"]})})]})}}]),s}(c.Component)),I=s.p+"static/media/error-404.9b3e0966.svg",F=(s(27),function(e){Object(r.a)(s,e);var t=Object(j.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(k.jsx)("div",{children:Object(k.jsxs)("div",{className:"notfound-page",children:[Object(k.jsx)("img",{src:I,alt:"construction",width:"100px",height:"100px"}),Object(k.jsx)("h1",{className:"text-notfound",children:"Error 404. The link you followed may be broken, or the page may have been removed.."}),Object(k.jsx)(O.b,{to:"/",children:Object(k.jsx)("button",{className:"button-404",style:{borderRadius:"80px"},children:Object(k.jsx)("h1",{className:"text-home",children:"Back to home"})})})]})})}}]),s}(c.Component)),J=s.p+"static/media/sketch.188150a1.svg",W=function(e){Object(r.a)(s,e);var t=Object(j.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(k.jsx)("div",{children:Object(k.jsxs)("div",{className:"notfound-page",children:[Object(k.jsx)("img",{src:J,alt:"construction",width:"100px",height:"100px"}),Object(k.jsx)("h1",{className:"text-notfound",children:"Ooops! page under construction.."}),Object(k.jsx)(O.b,{to:"/",children:Object(k.jsx)("button",{className:"button-404",style:{borderRadius:"80px"},children:Object(k.jsx)("h1",{className:"text-home",children:"Back to home"})})})]})})}}]),s}(c.Component),Y=s.p+"static/media/testaja.15843f07.png",V=(s(47),function(e){Object(r.a)(s,e);var t=Object(j.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(k.jsxs)("div",{children:[Object(k.jsx)(y,{}),Object(k.jsx)("div",{className:"project-div",children:Object(k.jsxs)("div",{className:"project-1-content-1",children:[Object(k.jsx)("h1",{className:"text-about-3 text-project-1",children:"Final Project:"}),Object(k.jsxs)("h1",{className:"text-1",children:["Fournir Ecommerce ",Object(k.jsx)("span",{className:"color-2",children:"Website."})]}),Object(k.jsx)("a",{href:"http://kelompok1.purwadhikafs1.com/",target:"_blank",rel:"noreferrer",className:"link-6",children:Object(k.jsx)("h5",{className:"link-6-sub pic-project_1",children:"kelompok1.purwadhikafs1.com"})}),Object(k.jsx)("h1",{className:"text-0",children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque quidem laborum eveniet nobis, quam, error, reiciendis expedita inventore omnis cupiditate iure? Soluta, animi deleniti distinctio iusto id expedita officiis obcaecati."}),Object(k.jsx)("img",{className:"pic-project",src:w,alt:"project_1"})]})}),Object(k.jsxs)("div",{className:"project-div-1",children:[Object(k.jsxs)("div",{className:"project-text-1",children:[Object(k.jsxs)("h1",{className:"text-3 skills-project",children:["About the ",Object(k.jsx)("span",{className:"color-2",children:"E-learning"})," Project"]}),Object(k.jsx)("h5",{className:"text-4",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, veritatis, debitis blanditiis, quos deserunt fuga quae facilis ex recusandae non maiores ab officiis nesciunt totam commodi necessitatibus beatae tempora? Blanditiis?."}),Object(k.jsxs)("div",{className:"container-text-about-4",children:[Object(k.jsxs)("div",{className:"text-about-4",children:[Object(k.jsx)("h1",{className:"number",children:"10"}),Object(k.jsx)("h1",{className:"number-text color-2",children:"PAGE"})]}),Object(k.jsxs)("div",{className:"text-about-4",children:[Object(k.jsx)("h1",{className:"number",children:"3"}),Object(k.jsx)("h1",{className:"number-text color-2",children:"DEVELOPER"})]}),Object(k.jsxs)("div",{className:"text-about-4",children:[Object(k.jsx)("h1",{className:"number",children:"4"}),Object(k.jsx)("h1",{className:"number-text color-2",children:"COLOR HEX"})]})]}),Object(k.jsxs)("div",{className:"container-text-about-4",children:[Object(k.jsx)("div",{className:"color-project-1"}),Object(k.jsx)("div",{className:"color-project-2"}),Object(k.jsx)("div",{className:"color-project-3"}),Object(k.jsx)("div",{className:"color-project-4"})]})]}),Object(k.jsx)("div",{className:"project-text-2",children:Object(k.jsxs)("div",{className:"skills-full",children:[Object(k.jsxs)("div",{className:"skills-front",children:[Object(k.jsx)("h1",{className:"text-5 skills-project",children:Object(k.jsx)("span",{className:"color-2",children:"Front-end Technologhy & Library"})}),Object(k.jsxs)("p",{className:"list-front",children:[Object(k.jsx)(N.d,{className:"icon-skills"}),"HTML 5"]}),Object(k.jsxs)("p",{className:"list-front",children:[Object(k.jsx)(N.c,{className:"icon-skills"}),"CSS 3"]}),Object(k.jsxs)("p",{className:"list-front",children:[Object(k.jsx)(N.f,{className:"icon-skills"}),"Javascript"]}),Object(k.jsxs)("p",{className:"list-front",children:[Object(k.jsx)(N.k,{className:"icon-skills"}),"React.js"]}),Object(k.jsxs)("p",{className:"list-front",children:[Object(k.jsx)(N.l,{className:"icon-skills"}),"Redux"]}),Object(k.jsxs)("p",{className:"list-front",children:[Object(k.jsx)(N.b,{className:"icon-skills"}),"Bootstarp"]})]}),Object(k.jsx)("div",{className:"pemisah-skills"}),Object(k.jsxs)("div",{className:"skills-front",children:[Object(k.jsx)("h1",{className:"text-5 skills-project",children:Object(k.jsx)("span",{className:"color-2",children:"Back-end Technologhy & Database"})}),Object(k.jsxs)("p",{className:"list-front",children:[Object(k.jsx)(N.i,{className:"icon-skills"}),"Node.js"]}),Object(k.jsxs)("p",{className:"list-front",children:[Object(k.jsx)(N.h,{className:"icon-skills"}),"MySql"]}),Object(k.jsxs)("p",{className:"list-front",children:[Object(k.jsx)(u.a,{className:"icon-skills"}),"Workbench"]})]})]})})]}),Object(k.jsx)("div",{className:"div-project-detail",children:Object(k.jsx)("img",{className:"pic-project",src:Y,alt:"project_1"})})]})}}]),s}(c.Component));function X(){var e=Object(b.f)().pathname;return Object(c.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var H=function(e){Object(r.a)(s,e);var t=Object(j.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(k.jsxs)("div",{children:[Object(k.jsx)(X,{}),Object(k.jsxs)(b.c,{children:[Object(k.jsx)(b.a,{path:"/",exact:!0,component:C}),Object(k.jsx)(b.a,{path:"/contact",component:L}),Object(k.jsx)(b.a,{path:"/project",exact:!0,component:M}),Object(k.jsx)(b.a,{path:"/project_1",exact:!0,component:V}),Object(k.jsx)(b.a,{path:"/aboutme",exact:!0,component:D}),Object(k.jsx)(b.a,{path:"/under-construction",exact:!0,component:W}),Object(k.jsx)(b.a,{path:"*",component:F})]})]})}}]),s}(c.Component),G=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,50)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,n=t.getTTFB;s(e),c(e),a(e),i(e),n(e)}))};s(48);n.a.render(Object(k.jsx)(a.a.StrictMode,{children:Object(k.jsx)(O.a,{children:Object(k.jsx)(H,{})})}),document.getElementById("root")),G()}},[[49,1,2]]]);
//# sourceMappingURL=main.7b19ee62.chunk.js.map