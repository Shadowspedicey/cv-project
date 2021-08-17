(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{26:function(e,n,t){},27:function(e,n,t){},28:function(e,n,t){"use strict";t.r(n);var c=t(1),r=t.n(c),o=t(13),s=t.n(o),i=t(10),l=t(3),a=t(2),d=t(4),u=t(5),j=t.n(u),b=t(0),h=function(e){var n=function(n,t,c){return e.setPersonalInfo(n,t.target.value,c)};return Object(b.jsx)("div",{children:Object(b.jsxs)("form",{children:[Object(b.jsx)("div",{className:"form-input-box",style:{flexDirection:"row",marginBottom:"0.5rem"},children:Object(b.jsxs)("div",{style:{width:"70%",display:"flex",flexDirection:"column"},children:[Object(b.jsx)("label",{htmlFor:"name",children:"Full Name"}),Object(b.jsx)("input",{type:"text",id:"name",value:e.personalInfo.name,placeholder:"Full Name",onChange:function(e){return n("name",e)}})]})}),Object(b.jsx)("div",{className:"form-input-box",children:Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"photo",children:"Your Photo:"}),Object(b.jsx)("input",{type:"file",id:"photo",accept:"image/*",onChange:function(n){return e.setPersonalInfo("photo",n.target.files[0])}})]})}),Object(b.jsxs)("div",{className:"form-input-box",children:[Object(b.jsx)("label",{htmlFor:"email",children:"Email Address"}),Object(b.jsx)("input",{type:"text",id:"email",value:e.personalInfo.email,placeholder:"email@domain.idk",onChange:function(e){return n("email",e)}})]}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"form-input-box",children:[Object(b.jsx)("label",{htmlFor:"address",children:"Address"}),Object(b.jsx)("input",{type:"text",id:"address",value:e.personalInfo.residence.address,placeholder:"El Seyouf",onChange:function(e){return n("address",e,"residence")}})]}),Object(b.jsxs)("div",{className:"residence-container",children:[Object(b.jsxs)("div",{className:"form-input-box",children:[Object(b.jsx)("label",{htmlFor:"city",children:"City"}),Object(b.jsx)("input",{type:"text",id:"city",value:e.personalInfo.residence.city,placeholder:"Alexandria",onChange:function(e){return n("city",e,"residence")}})]}),Object(b.jsxs)("div",{className:"form-input-box",children:[Object(b.jsx)("label",{htmlFor:"country",children:"Country"}),Object(b.jsx)("input",{type:"text",id:"country",value:e.personalInfo.residence.country,placeholder:"Egypt",onChange:function(e){return n("country",e,"residence")}})]})]})]}),Object(b.jsx)("div",{style:{display:"flex"},children:Object(b.jsxs)("div",{className:"form-input-box phone-number",children:[Object(b.jsx)("label",{htmlFor:"number",children:"Phone Number"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{children:"+"}),Object(b.jsx)("input",{type:"number",id:"area",value:e.personalInfo.phoneNumber.area,placeholder:"20",onChange:function(e){return n("area",e,"phoneNumber")}}),Object(b.jsx)("input",{type:"number",id:"number",value:e.personalInfo.phoneNumber.number,placeholder:"1012345678",onChange:function(e){return n("number",e,"phoneNumber")}})]})]})})]})})},p=t(14),m=t(15),O=t(9),x=t(18),f=t(17),v=function(e){return Object(b.jsx)("div",{children:e.property.length<e.length?Object(b.jsx)("div",{className:"add-button",onClick:e.action,children:"+"}):null})},y=function(e){Object(x.a)(t,e);var n=Object(f.a)(t);function t(){var e;return Object(p.a)(this,t),(e=n.call(this)).preventInput=function(e,n){if(e.target.value.length===n&&String.fromCharCode(e.which).match(/^\d$/))return e.preventDefault()},e.preventInput=e.preventInput.bind(Object(O.a)(e)),e}return Object(m.a)(t,[{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{className:"education-container",children:[this.props.education.map((function(n){return Object(b.jsxs)("div",{className:"education",children:[Object(b.jsx)("span",{className:"material-icons",onClick:function(){return e.props.educationFns.removeEducation("education",n.key)},children:"delete"}),Object(b.jsxs)("div",{className:"form-input-box",style:{flexDirection:"row",marginBottom:"1rem"},children:[Object(b.jsxs)("div",{style:{width:"50%",marginRight:"1rem"},children:[Object(b.jsx)("label",{htmlFor:"degree",children:"Degree"}),Object(b.jsx)("input",{type:"text",id:"degree",value:n.degree,placeholder:"Bachelor's Degree",onChange:function(t){return e.props.educationFns.setEducation(n.key,"degree",t.target.value)}})]}),Object(b.jsxs)("div",{style:{width:"50%"},children:[Object(b.jsx)("label",{htmlFor:"titleOfStudy",children:"Title of Study"}),Object(b.jsx)("input",{type:"text",id:"titleOfStudy",value:n.titleOfStudy,placeholder:"Computer Science",onChange:function(t){return e.props.educationFns.setEducation(n.key,"titleOfStudy",t.target.value)}})]})]}),Object(b.jsxs)("div",{className:"form-input-box",style:{flexDirection:"row"},children:[Object(b.jsxs)("div",{style:{width:"15%",marginRight:"1rem"},children:[Object(b.jsx)("label",{htmlFor:"year",children:"Year"}),Object(b.jsx)("input",{type:"number",id:"year",value:n.year,placeholder:"2005",onChange:function(t){return e.props.educationFns.setEducation(n.key,"year",t.target.value)},onKeyDown:function(n){return e.preventInput(n,4)}})]}),Object(b.jsxs)("div",{style:{width:"100%"},children:[Object(b.jsx)("label",{htmlFor:"school",children:"School"}),Object(b.jsx)("input",{type:"text",id:"school",value:n.school,placeholder:"Computer Science University",onChange:function(t){return e.props.educationFns.setEducation(n.key,"school",t.target.value)}})]})]})]},n.key)})),Object(b.jsx)(v,{property:this.props.education,length:3,action:this.props.educationFns.addEducation})]})}}]),t}(r.a.Component),k=function(e){return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"form-input-box",children:[Object(b.jsx)("label",{htmlFor:"job",children:"Position/Job"}),Object(b.jsx)("input",{type:"text",id:"job",value:e.job,placeholder:"Web Developer",onChange:function(n){return e.skillsFns.setJob(n.target.value)}})]}),Object(b.jsx)("h1",{children:"Skills"}),Object(b.jsxs)("div",{className:"skills",children:[e.skills.map((function(n){return Object(b.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(b.jsx)("input",{value:n.name,onChange:function(t){return function(n,t){return e.skillsFns.setSkills(n,t.target.value)}(n.key,t)}}),Object(b.jsx)("span",{className:"material-icons",onClick:function(){return e.skillsFns.removeSkill("skills",n.key)},children:"delete"})]},n.key)})),Object(b.jsx)(v,{property:e.skills,length:7,action:e.skillsFns.addSkill})]})]})},g=function(e){var n=function(e,n){if(e.target.value.length===n&&String.fromCharCode(e.which).match(/^\d$/))return e.preventDefault()};return Object(b.jsxs)("div",{className:"work-container",children:[e.works.map((function(t){return Object(b.jsxs)("div",{className:"work",children:[Object(b.jsx)("span",{className:"material-icons",onClick:function(){return e.workFns.removeWork("work",t.key)},children:"delete"}),Object(b.jsxs)("div",{className:"form-input-box",style:{marginBottom:"1rem"},children:[Object(b.jsx)("label",{htmlFor:"position",children:"Job Position"}),Object(b.jsx)("input",{type:"text",id:"position",value:t.position,placeholder:"Web Developer",onChange:function(n){return e.workFns.setWork(t.key,"position",n.target.value)}})]}),Object(b.jsxs)("div",{className:"form-input-box",style:{flexDirection:"row"},children:[Object(b.jsxs)("div",{style:{width:"12.5%",marginRight:"1rem"},children:[Object(b.jsx)("label",{htmlFor:"yearFrom",children:"From"}),Object(b.jsx)("input",{type:"number",id:"yearFrom",value:t.yearFrom,placeholder:"2005",onChange:function(n){return e.workFns.setWork(t.key,"yearFrom",n.target.value)},onKeyDown:function(e){return n(e,4)}})]}),Object(b.jsxs)("div",{style:{width:"12.5%",marginRight:"1rem"},children:[Object(b.jsx)("label",{htmlFor:"yearTo",children:"To"}),Object(b.jsx)("input",{type:"text",id:"yearTo",value:t.yearTo,placeholder:"2010",onChange:function(n){return e.workFns.setWork(t.key,"yearTo",n.target.value)},onKeyDown:function(e){return n(e,7)}})]}),Object(b.jsxs)("div",{style:{width:"75%"},children:[Object(b.jsx)("label",{htmlFor:"company",children:"Company"}),Object(b.jsx)("input",{type:"text",id:"company",value:t.company,placeholder:"MICON",onChange:function(n){return e.workFns.setWork(t.key,"company",n.target.value)}})]})]})]},t.key)})),Object(b.jsx)(v,{property:e.works,length:3,action:e.workFns.addWork})]})},N=t(12),w=t.n(N),F=t(16),C=function(e){return Object(b.jsxs)("div",{className:"export-window",children:[Object(b.jsx)("h1",{children:"Download your CV as PDF!"}),Object(b.jsx)("button",{onClick:function(){window.scrollTo(0,0),document.querySelector(".CV").classList.add("print-ready"),setTimeout((function(){return document.querySelector(".CV").classList.remove("print-ready")}),0),w()(document.querySelector(".CV"),{scale:2}).then((function(e){var n=e.toDataURL("image/png"),t=new F.a,c=t.getImageProperties(n),r=t.internal.pageSize.getWidth(),o=c.height*r/c.width;t.addImage(n,"PNG",0,0,r,o),t.save("CV.pdf")}))},children:"Download"})]})},S=function(e){var n=Object(c.useState)({personal:!0,education:!1,skills:!1,work:!1,export:!1}),t=Object(d.a)(n,2),r=t[0],o=t[1],s=function(e){return o(Object(l.a)({personal:!1,education:!1,skills:!1,work:!1,export:!1},e,!0))};return Object(b.jsxs)("div",{className:"cv-creator",style:e.info.switchMenu.on?e.info.switchMenu.menus.cvCreator?null:{display:"none"}:null,children:[Object(b.jsxs)("div",{className:"buttons-container",children:[Object(b.jsx)("div",{className:"button left left-corner ".concat(r.personal?null:"unselected"),onClick:function(){return s("personal")},children:"Personal Info"}),Object(b.jsx)("div",{className:"button middle ".concat(r.education?null:"unselected"),onClick:function(){return s("education")},children:"Education"}),Object(b.jsx)("div",{className:"button middle right ".concat(r.skills?null:"unselected"),onClick:function(){return s("skills")},children:"Skills"}),Object(b.jsx)("div",{className:"button right ".concat(r.work?null:"unselected"),onClick:function(){return s("work")},children:"Work Experience"}),Object(b.jsx)("div",{className:"button right right-corner ".concat(r.export?null:"unselected"),onClick:function(){return s("export")},children:"Export"})]}),r.personal?Object(b.jsx)(h,{setPersonalInfo:e.personalFns.setPersonalInfo,personalInfo:e.info.personalInfo}):r.education?Object(b.jsx)(y,{educationFns:e.educationFns,education:e.info.education}):r.skills?Object(b.jsx)(k,{skillsFns:e.skillsFns,job:e.info.job,skills:e.info.skills}):r.work?Object(b.jsx)(g,{workFns:e.workFns,works:e.info.work}):r.export?Object(b.jsx)(C,{}):null]})},I=function(e){return Object(b.jsxs)("div",{className:"cv-brief",children:[Object(b.jsx)("div",{className:"cv-photo",children:Object(b.jsx)("img",{src:e.personalInfo.photo,alt:""})}),Object(b.jsxs)("div",{className:"cv-info-box cv-contact",children:[Object(b.jsx)("h2",{children:"CONTANT"}),Object(b.jsxs)("ul",{children:[Object(b.jsxs)("li",{children:[Object(b.jsx)("span",{className:"material-icons",children:"phone"}),Object(b.jsxs)("span",{style:{whiteSpace:"nowrap"},children:["+(",e.personalInfo.phoneNumber.area,")",e.personalInfo.phoneNumber.number]})]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("span",{className:"material-icons",children:"email"}),Object(b.jsx)("span",{className:"cv-email",children:e.personalInfo.email})]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("span",{className:"material-icons",children:"place"}),Object(b.jsxs)("span",{children:[e.personalInfo.residence.city,","," ".concat(e.personalInfo.residence.country)]})]})]})]}),Object(b.jsxs)("div",{className:"cv-info-box cv-skills",children:[Object(b.jsx)("h2",{children:"SKILLS"}),Object(b.jsx)("ul",{children:e.skills.map((function(e){return Object(b.jsx)("li",{children:e.name},e.key)}))})]}),Object(b.jsx)("div",{className:"refrence-info",children:Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"REFRENCE"}),Object(b.jsx)("h3",{children:"Ahmed Khaled"}),Object(b.jsx)("h4",{children:"Web Developer"})]})})]})},E=function(e){return Object(b.jsxs)("div",{className:"CV",style:e.info.switchMenu.on?e.info.switchMenu.menus.cv?{display:"grid"}:{display:"none"}:null,children:[Object(b.jsx)(I,{personalInfo:e.info.personalInfo,skills:e.info.skills}),Object(b.jsxs)("div",{className:"cv-info",children:[Object(b.jsxs)("div",{className:"cv-header",children:[Object(b.jsx)("h1",{children:e.info.personalInfo.name}),Object(b.jsx)("h2",{children:e.info.job})]}),Object(b.jsxs)("div",{className:"cv-body",children:[Object(b.jsxs)("div",{className:"cv-description-box",children:[Object(b.jsx)("h1",{children:"Education"}),e.info.education.map((function(e){return Object(b.jsxs)("div",{className:"cv-education",children:[Object(b.jsx)("h4",{children:e.year}),Object(b.jsx)("h2",{children:e.degree}),Object(b.jsx)("h3",{children:e.titleOfStudy}),Object(b.jsx)("h3",{children:e.school})]},e.key)}))]}),Object(b.jsxs)("div",{className:"cv-description-box",children:[Object(b.jsx)("h1",{children:"Work Experience"}),e.info.work.map((function(e){return Object(b.jsxs)("div",{className:"cv-work",children:[Object(b.jsx)("h2",{children:e.position}),Object(b.jsxs)("h4",{children:[e.yearFrom,"-",e.yearTo]}),Object(b.jsx)("h3",{children:e.company})]},e.key)}))]})]})]})]})},T=function(e){return Object(c.useEffect)((function(){return e.on()}),[]),Object(b.jsxs)("div",{className:"switch-menu",children:[Object(b.jsx)("div",{className:"button left ".concat(e.menus.cvCreator?null:"unselected"," no-border"),onClick:function(){return e.changeMenus("cvCreator")},children:"CV Creator"}),Object(b.jsx)("div",{className:"button ".concat(e.menus.cv?null:"unselected"," no-border"),onClick:function(){return e.changeMenus("cv")},children:"CV"})]})},D=(t(26),function(){var e=Object(c.useState)({on:!1,menus:{cvCreator:!0,cv:!1}}),n=Object(d.a)(e,2),t=n[0],r=n[1],o=Object(c.useState)({name:"",photo:"https://lh3.googleusercontent.com/proxy/Tu36WTFE1ewkSeZ24YZF4InmdqrT4TqUt6xByw5_DhjS2TF7LhEGyNJcLSM73saTSYwF1CMlE9Ix_m52y5qlKcQC9Y9t4p8AZE98Dj0SHV0SXFb0_AF_dvjP0vUlTg",email:"",residence:{address:"",city:"",country:""},phoneNumber:{area:"",number:""}}),s=Object(d.a)(o,2),u=s[0],h=s[1],p=Object(c.useState)(""),m=Object(d.a)(p,2),O=m[0],x=m[1],f=Object(c.useState)([]),v=Object(d.a)(f,2),y=v[0],k=v[1],g=Object(c.useState)([{degree:"",titleOfStudy:"",year:"",school:"",key:j()()}]),N=Object(d.a)(g,2),w=N[0],F=N[1],C=Object(c.useState)([{position:"",yearFrom:"",yearTo:"",company:"",key:j()()}]),I=Object(d.a)(C,2),D=I[0],W=I[1],P={switchMenu:t,personalInfo:u,job:O,skills:y,education:w,work:D},M=function(e,n){"education"===e?F(w.filter((function(e){return e.key!==n}))):"skills"===e?k(y.filter((function(e){return e.key!==n}))):"work"===e&&W(D.filter((function(e){return e.key!==n})))},L={setPersonalInfo:function(e,n,t){h(t?Object(a.a)(Object(a.a)({},u),{},Object(l.a)({},t,Object(a.a)(Object(a.a)({},u[t]),{},Object(l.a)({},e,n)))):"photo"===e?Object(a.a)(Object(a.a)({},u),{},{photo:URL.createObjectURL(n)}):Object(a.a)(Object(a.a)({},u),{},Object(l.a)({},e,n))),setTimeout((function(){return console.log(P.personalInfo)}),0)}},R={setEducation:function(e,n,t){F(w.map((function(c){return c.key===e?Object(a.a)(Object(a.a)({},c),{},Object(l.a)({},n,t)):c}))),setTimeout((function(){return console.log(P.education)}),0)},addEducation:function(){F([].concat(Object(i.a)(w),[{degree:"",titleOfStudy:"",year:"",school:"",key:j()()}]))},removeEducation:M},V={setJob:function(e){return x(e)},setSkills:function(e,n){k(y.map((function(t){return t.key===e?Object(a.a)(Object(a.a)({},t),{},{name:n}):t})))},addSkill:function(){k([].concat(Object(i.a)(y),[{name:"",key:j()()}])),setTimeout((function(){return console.log(P.skills)}),0)},removeSkill:M},A={setWork:function(e,n,t){W(D.map((function(c){return c.key===e?Object(a.a)(Object(a.a)({},c),{},Object(l.a)({},n,t)):c})))},addWork:function(){W([].concat(Object(i.a)(D),[{position:"",yearFrom:"",yearTo:"",company:"",key:j()()}]))},removeWork:M};return Object(b.jsxs)("div",{className:"App",children:[window.innerWidth<=1225?Object(b.jsx)(T,{on:function(){return r(Object(a.a)(Object(a.a)({},t),{},{on:!0}))},changeMenus:function(e){r(Object(a.a)(Object(a.a)({},t),{},{menus:Object(l.a)({cvCreator:!1,cv:!1},e,!0)}))},menus:t.menus}):null,Object(b.jsx)(S,{personalFns:L,educationFns:R,skillsFns:V,workFns:A,info:P}),Object(b.jsx)(E,{info:P})]})});t(27);s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(D,{})}),document.getElementById("root"))}},[[28,1,3]]]);
//# sourceMappingURL=main.590a8bf4.chunk.js.map