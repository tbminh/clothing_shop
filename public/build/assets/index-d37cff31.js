import{a as n}from"./index-443d3a42.js";import{_ as o,A as i,j as t,k as a,F as c,I as d,H as u}from"./app-93b73191.js";import"./_commonjsHelpers-725317a4.js";import"./axios-f1a5192e.js";const l={data(){return i.get("admin_token"),{users:[]}},mounted(){n.get("/api/admin_users").then(e=>{this.users=e.data.data,console.log("user",e.data)}).catch(e=>{console.error(e)})}};function m(e,p,_,f,s,g){return t(),a("div",null,[(t(!0),a(c,null,d(s.users,r=>(t(),a("li",{key:r.id},u(r.name),1))),128))])}const y=o(l,[["render",m]]);export{y as default};