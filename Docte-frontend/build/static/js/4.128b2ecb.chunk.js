"use strict";(self.webpackChunkdocte_frontend=self.webpackChunkdocte_frontend||[]).push([[4],{5004:function(e,r,a){a.r(r),a.d(r,{default:function(){return x}});var n=a(4942),t=a(4165),s=a(1413),o=a(5861),l=a(9439),i=a(2791),c=a(1243),u=a(3402),m=a(5318),p=a(9434),d=a(375),f=a(4971),h=a(456),g=a(184);c.Z.defaults.baseURL="https://docte-backend.onrender.com/api";var x=function(){var e,r=(0,p.I0)(),a=(0,p.v9)((function(e){return e.root})).loading,x=(0,i.useState)(""),b=(0,l.Z)(x,2),v=b[0],w=b[1],Z=(0,i.useState)({firstname:"",lastname:"",email:"",age:"",mobile:"",gender:"neither",address:"",password:"",confpassword:""}),j=(0,l.Z)(Z,2),y=j[0],N=j[1];(0,i.useEffect)((function(){var e,a=(0,h.Z)(localStorage.getItem("token")).userId;!function(){(e=e||(0,o.Z)((0,t.Z)().mark((function e(){var n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r((0,m.K4)(!0)),e.next=4,(0,f.Z)("/user/getuser/".concat(a));case 4:n=e.sent,N((0,s.Z)((0,s.Z)({},n),{},{password:"",confpassword:"",mobile:null===n.mobile?"":n.mobile,age:null===n.age?"":n.age})),w(n.pic),r((0,m.K4)(!1)),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}()}),[r]);var k=function(e){var r=e.target,a=r.name,t=r.value;return N((0,s.Z)((0,s.Z)({},y),{},(0,n.Z)({},a,t)))};return(0,g.jsx)(g.Fragment,{children:a?(0,g.jsx)(d.Z,{}):(0,g.jsx)("section",{className:"register-section flex-center",children:(0,g.jsxs)("div",{className:"profile-container flex-center",children:[(0,g.jsx)("h2",{className:"form-heading",children:"Profile"}),(0,g.jsx)("img",{src:v,alt:"profile",className:"profile-pic"}),(0,g.jsxs)("form",{onSubmit:function(r){return(e=e||(0,o.Z)((0,t.Z)().mark((function e(r){var a,n,o,l,i,m,p,d,f;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,r.preventDefault(),a=y.firstname,n=y.lastname,o=y.email,l=y.age,i=y.mobile,m=y.address,p=y.gender,d=y.password,f=y.confpassword,o){e.next=7;break}return e.abrupt("return",u.ZP.error("Email should not be empty"));case 7:if(!(a.length<3)){e.next=11;break}return e.abrupt("return",u.ZP.error("First name must be at least 3 characters long"));case 11:if(!(n.length<3)){e.next=15;break}return e.abrupt("return",u.ZP.error("Last name must be at least 3 characters long"));case 15:if(!(d.length<5)){e.next=19;break}return e.abrupt("return",u.ZP.error("Password must be at least 5 characters long"));case 19:if(d===f){e.next=21;break}return e.abrupt("return",u.ZP.error("Passwords do not match"));case 21:return e.next=23,u.ZP.promise(c.Z.put("/user/updateprofile",{firstname:a,lastname:n,age:l,mobile:i,address:m,gender:p,email:o,password:d},{headers:{authorization:"Bearer ".concat(localStorage.getItem("token"))}}),{pending:"Updating profile...",success:"Profile updated successfully",error:"Unable to update profile",loading:"Updating profile..."});case 23:N((0,s.Z)((0,s.Z)({},y),{},{password:"",confpassword:""})),e.next=29;break;case 26:return e.prev=26,e.t0=e.catch(0),e.abrupt("return",u.ZP.error("Unable to update profile"));case 29:case"end":return e.stop()}}),e,null,[[0,26]])})))).apply(this,arguments)},className:"register-form",children:[(0,g.jsxs)("div",{className:"form-same-row",children:[(0,g.jsx)("input",{type:"text",name:"firstname",className:"form-input",placeholder:"Enter your first name",value:y.firstname,onChange:k}),(0,g.jsx)("input",{type:"text",name:"lastname",className:"form-input",placeholder:"Enter your last name",value:y.lastname,onChange:k})]}),(0,g.jsxs)("div",{className:"form-same-row",children:[(0,g.jsx)("input",{type:"email",name:"email",className:"form-input",placeholder:"Enter your email",value:y.email,onChange:k}),(0,g.jsxs)("select",{name:"gender",value:y.gender,className:"form-input",id:"gender",onChange:k,children:[(0,g.jsx)("option",{value:"neither",children:"Prefer not to say"}),(0,g.jsx)("option",{value:"male",children:"Male"}),(0,g.jsx)("option",{value:"female",children:"Female"})]})]}),(0,g.jsxs)("div",{className:"form-same-row",children:[(0,g.jsx)("input",{type:"text",name:"age",className:"form-input",placeholder:"Enter your age",value:y.age,onChange:k}),(0,g.jsx)("input",{type:"text",name:"mobile",className:"form-input",placeholder:"Enter your mobile number",value:null===y||void 0===y?void 0:y.mobile,onChange:k})]}),(0,g.jsx)("textarea",{type:"text",name:"address",className:"form-input",placeholder:"Enter your address",value:y.address,onChange:k,rows:"2"}),(0,g.jsxs)("div",{className:"form-same-row",children:[(0,g.jsx)("input",{type:"password",name:"password",className:"form-input",placeholder:"Enter your password",value:y.password,onChange:k}),(0,g.jsx)("input",{type:"password",name:"confpassword",className:"form-input",placeholder:"Confirm your password",value:y.confpassword,onChange:k})]}),(0,g.jsx)("button",{type:"submit",className:"btn form-btn",children:"update"})]})]})})})}}}]);
//# sourceMappingURL=4.128b2ecb.chunk.js.map