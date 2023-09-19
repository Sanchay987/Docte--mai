"use strict";(self.webpackChunkdocte_frontend=self.webpackChunkdocte_frontend||[]).push([[702],{7900:function(e,n,s){s.d(n,{Z:function(){return o}});s(2791);var r=s(6355),t=s(3495),i=s(1087),c=s(184),o=function(){return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("footer",{children:[(0,c.jsxs)("div",{className:"footer",children:[(0,c.jsxs)("div",{className:"footer-links",children:[(0,c.jsx)("h3",{children:"Links"}),(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:(0,c.jsx)(i.OL,{to:"/",children:"Home"})}),(0,c.jsx)("li",{children:(0,c.jsx)(i.OL,{to:"/doctors",children:"Doctors"})}),(0,c.jsx)("li",{children:(0,c.jsx)(i.OL,{to:"/appointments",children:"Appointments"})}),(0,c.jsx)("li",{children:(0,c.jsx)(i.OL,{to:"/notifications",children:"Notifications"})}),(0,c.jsx)("li",{children:(0,c.jsx)(t.fO,{to:"/#contact",children:"Contact Us"})}),(0,c.jsx)("li",{children:(0,c.jsx)(i.OL,{to:"/profile",children:"Profile"})})]})]}),(0,c.jsxs)("div",{className:"social",children:[(0,c.jsx)("h3",{children:"Social links"}),(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{className:"facebook",children:(0,c.jsx)("a",{href:"https://www.facebook.com/",target:"_blank",rel:"noreferrer",children:(0,c.jsx)(r.tBk,{})})}),(0,c.jsx)("li",{className:"youtube",children:(0,c.jsx)("a",{href:"https://www.youtube.com/",target:"_blank",rel:"noreferrer",children:(0,c.jsx)(r.V2E,{})})}),(0,c.jsx)("li",{className:"instagram",children:(0,c.jsx)("a",{href:"https://www.instagram.com/",target:"_blank",rel:"noreferrer",children:(0,c.jsx)(r.Zf_,{})})})]})]})]}),(0,c.jsx)("div",{className:"footer-bottom",children:"Made by Sanchay Chauhan \xa9 2023"})]})})}},2407:function(e,n,s){s.d(n,{Z:function(){return j}});var r=s(9439),t=s(2791),i=s(7689),c=s(1087),o=s(3495),l=s(9434),a=s(5318),d=s(3853),h=s(1213),x=s(456),u=s(184),j=function(){var e=(0,t.useState)(!1),n=(0,r.Z)(e,2),s=n[0],j=n[1],p=(0,l.I0)(),m=(0,i.s0)(),f=(0,t.useState)(localStorage.getItem("token")||""),g=(0,r.Z)(f,1)[0],b=(0,t.useState)(localStorage.getItem("token")?(0,x.Z)(localStorage.getItem("token")):""),k=(0,r.Z)(b,1)[0];return(0,u.jsxs)("header",{children:[(0,u.jsxs)("nav",{className:s?"nav-active":"",children:[(0,u.jsx)("h2",{className:"nav-logo",children:(0,u.jsx)(c.OL,{to:"/",children:"DocTe"})}),(0,u.jsxs)("ul",{className:"nav-links",children:[(0,u.jsx)("li",{children:(0,u.jsx)(c.OL,{to:"/",children:"Home"})}),(0,u.jsx)("li",{children:(0,u.jsx)(c.OL,{to:"/doctors",children:"Doctors"})}),g&&k.isAdmin&&(0,u.jsx)("li",{children:(0,u.jsx)(c.OL,{to:"/dashboard/users",children:"Dashboard"})}),g&&!k.isAdmin&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("li",{children:(0,u.jsx)(c.OL,{to:"/applyfordoctor",children:"Apply for doctor"})}),(0,u.jsx)("li",{children:(0,u.jsx)(c.OL,{to:"/appointments",children:"Appointments"})}),(0,u.jsx)("li",{children:(0,u.jsx)(c.OL,{to:"/notifications",children:"Notifications"})}),(0,u.jsx)("li",{children:(0,u.jsx)(o.fO,{to:"/#contact",children:"Contact Us"})}),(0,u.jsx)("li",{children:(0,u.jsx)(c.OL,{to:"/profile",children:"Profile"})})]}),g?(0,u.jsx)("li",{children:(0,u.jsx)("span",{className:"btn",onClick:function(){p((0,a.ps)({})),localStorage.removeItem("token"),m("/login")},children:"Logout"})}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("li",{children:(0,u.jsx)(c.OL,{className:"btn",to:"/login",children:"Login"})}),(0,u.jsx)("li",{children:(0,u.jsx)(c.OL,{className:"btn",to:"/register",children:"Register"})})]})]})]}),(0,u.jsxs)("div",{className:"menu-icons",children:[!s&&(0,u.jsx)(d.cur,{className:"menu-open",onClick:function(){j(!0)}}),s&&(0,u.jsx)(h.ySC,{className:"menu-close",onClick:function(){j(!1)}})]})]})}},3702:function(e,n,s){s.r(n);var r=s(4165),t=s(5861),i=s(4942),c=s(1413),o=s(9439),l=s(2791),a=(s(2734),s(1243)),d=s(3402),h=s(7689),x=s(2407),u=s(7900),j=s(184);a.Z.defaults.baseURL="https://docte-backend.onrender.com/api";n.default=function(){var e,n=(0,h.s0)(),s=(0,l.useState)({specialization:"",experience:"",fees:""}),p=(0,o.Z)(s,2),m=p[0],f=p[1],g=function(e){var n=e.target,s=n.name,r=n.value;return f((0,c.Z)((0,c.Z)({},m),{},(0,i.Z)({},s,r)))};return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(x.Z,{}),(0,j.jsx)("section",{className:"register-section flex-center apply-doctor",id:"contact",children:(0,j.jsxs)("div",{className:"register-container flex-center contact",children:[(0,j.jsx)("h2",{className:"form-heading",children:"Apply for Doctor"}),(0,j.jsxs)("form",{className:"register-form ",children:[(0,j.jsx)("input",{type:"text",name:"specialization",className:"form-input",placeholder:"Enter your specialization",value:m.specialization,onChange:g}),(0,j.jsx)("input",{type:"number",name:"experience",className:"form-input",placeholder:"Enter your experience (in years)",value:m.experience,onChange:g}),(0,j.jsx)("input",{type:"number",name:"fees",className:"form-input",placeholder:"Enter your fees  (in dollars)",value:m.fees,onChange:g}),(0,j.jsx)("button",{type:"submit",className:"btn form-btn",onClick:function(s){return(e=e||(0,t.Z)((0,r.Z)().mark((function e(s){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),e.prev=1,e.next=4,d.ZP.promise(a.Z.post("/doctor/applyfordoctor",{formDetails:m},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}),{success:"Doctor application sent successfully",error:"Unable to send Doctor application",loading:"Sending doctor application..."});case 4:n("/"),e.next=10;break;case 7:return e.prev=7,e.t0=e.catch(1),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)},children:"apply"})]})]})}),(0,j.jsx)(u.Z,{})]})}},2734:function(){}}]);
//# sourceMappingURL=702.8b987504.chunk.js.map