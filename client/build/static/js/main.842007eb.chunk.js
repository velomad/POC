(this.webpackJsonppoc=this.webpackJsonppoc||[]).push([[0],{113:function(e,t){},144:function(e,t,a){},151:function(e,t){},152:function(e,t){},180:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),c=a(18),s=a.n(c),r=(a(144),a(31)),l=a(126),o=a(26),d=a(4),j=function(){return Object(d.jsxs)("div",{className:"flex justify-between px-4 footer py-3",children:[Object(d.jsx)("div",{className:"text-white",children:"\u24b8 All Rights Reserved 2019."}),Object(d.jsx)("div",{className:"text-white",children:"Website Developed by SIS Healthcare Solutions"})]})},b=function(e){var t=e.title;return Object(d.jsxs)("div",{className:"flex",children:[Object(d.jsx)("div",{className:"px-20 py-3 bg-white flex items-center jsutify-center",children:Object(d.jsx)("img",{src:"https://sakshiinfotech.com/DocVedaSEB/images/Login-Icons/DocVedaLogo-01.svg",width:"180px"})}),Object(d.jsxs)("div",{className:"flex background-primary justify-between w-full px-10 items-center bg-blue-500",children:[Object(d.jsxs)("div",{className:"flex items-center space-x-4",children:[Object(d.jsx)("div",{children:Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-white",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(d.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"})})}),Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:"https://sakshiinfotech.com/DocVedaSEB/images/Clinic/Clinic.svg",width:"50px"})}),Object(d.jsx)("div",{className:"text-white text-lg",children:t})]}),Object(d.jsxs)("div",{className:"flex items-center space-x-4",children:[Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:"https://sakshiinfotech.com/DocVedaSEB/images/dashboard_inner_icons/Notifications-01.svg",width:"25px"})}),Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:"https://sakshiinfotech.com/DocVedaSEB/images/dashboard_inner_icons/User_icon-01.svg",width:"50px"})}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"flex items-center space-x-2 ",children:[Object(d.jsx)("div",{className:"text-white",children:"Rupesh D"}),Object(d.jsx)("div",{children:Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-white",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(d.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"})})})]}),Object(d.jsx)("div",{className:"text-white text-xs",children:"Receptionist"})]})]})]})]})},h=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"flex space-x-4 p-1",style:{backgroundColor:"#f5f5f5"},children:[Object(d.jsx)("div",{className:"underline cursor-pointer text-blue-500",children:"Front Desk"}),Object(d.jsx)("div",{children:"/"}),Object(d.jsx)("div",{children:"Patient Registration"})]})})},m=function(e){var t=e.imageUrl,a=e.btnText;return Object(d.jsxs)("div",{className:"flex cursor-pointer  border-gray-200 border-2 p-1 items-center space-x-2 bg-white",children:[Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:t,width:"15px"})}),Object(d.jsx)("div",{className:"capitalize",children:a})]})},x=a(61),O=a(55),u=a(24),p=a(233),g=a(118),v=a(96),f=function(e){var t=e.csvData,a=e.fileName;return Object(d.jsx)("button",{className:"btn btn-primary text-white",onClick:function(e){return function(e,t){var a={Sheets:{data:v.utils.json_to_sheet(e)},SheetNames:["data"]},i=v.write(a,{bookType:"xlsx",type:"array"}),n=new Blob([i],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"});g.saveAs(n,t+".xlsx")}(t,a)},children:"Export"})},N=function(e){var t=e.columns,a=e.rows,n=Object(i.useState)(a),c=Object(r.a)(n,2),s=c[0],l=c[1],o=Object(i.useState)(null),j=Object(r.a)(o,2),b=j[0],h=j[1],m=function(e,t){if(console.log(e),!t)return[e];var a=t&&Object.values(t)[0],i=t&&Object.keys(t)[0];return[e.filter((function(e){return null===e||void 0===e?void 0:e[i].toLowerCase().includes(null===a||void 0===a?void 0:a.toLowerCase())}))]}(s,b),g=Object(r.a)(m,1)[0],v=Object(i.useState)(null),N=Object(r.a)(v,2),w=N[0],D=N[1],k=Object(i.useState)({}),C=Object(r.a)(k,2),y=C[0],B=C[1];console.log("==============>>>",g);var V=function(e,t){var a=e.target,i=a.name,n=a.value;B(Object(u.a)(Object(u.a)({},y),{},Object(O.a)({},i,n)))};console.log(y);var S=function(){var e=s[s.length-1],t=Object(x.a)(s).find((function(t){return t.id==e.id}));console.log(t);var a=Object.assign(t,y);console.log(s),l([].concat(Object(x.a)(s),[a]))},E=function(){D(null),B({})};console.log(b);var T=function(e){var t=e.target,a=t.name,i=t.value;h(Object(O.a)({},a,i))};return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"py-4",children:Object(d.jsx)(f,{csvData:s,fileName:"registeredPatients"})}),Object(d.jsxs)("form",{children:[Object(d.jsx)("div",{className:"py-4"}),Object(d.jsxs)("table",{className:"table table-bordered",children:[Object(d.jsxs)("thead",{children:[Object(d.jsx)("tr",{children:t.map((function(e){return Object(d.jsx)("th",{className:"table-border",children:e.title},e.name)}))}),Object(d.jsx)("tr",{children:t.map((function(e,a){return Object(d.jsx)("th",{children:0!==a&&a!==t.length-1&&Object(d.jsx)("input",{name:e.name,className:"border-2 p-1 rounded-lg form form-control",placeholder:e.title,type:"search",onChange:T,style:{backgroundColor:"#f6f7f9"}})})}))})]}),Object(d.jsx)("tbody",{children:g.map((function(e,t){var a;return Object(d.jsxs)("tr",{className:"table-border",children:[Object(d.jsx)("td",{children:e.id}),Object(d.jsx)("td",{children:e.registrationNo}),Object(d.jsx)("td",{children:Object(d.jsx)("input",{value:e.id==w?y.registrationDate:e.registrationDate,className:e.id===w&&"form form-control",onChange:function(e){return V(e)},name:"registrationDate",required:"required",style:{border:e.id!==w&&"none",backgroundColor:"#f6f7f9"},type:e.id===w?"date":"text",readOnly:e.id!==w})}),Object(d.jsx)("td",{children:Object(d.jsx)("input",{value:e.id==w?y.patientName:e.patientName,className:e.id===w&&"form form-control",onChange:function(e){return V(e)},name:"patientName",style:{border:e.id!==w&&"none",backgroundColor:"#f6f7f9"},type:"text",required:!0,defaultValue:e.patientName,readOnly:e.id!==w})}),Object(d.jsx)("td",{children:Object(d.jsx)("input",(a={value:e.id==w?y.lastVisitDate:e.lastVisitDate,className:e.id===w&&"form form-control",onChange:function(e){return V(e)},name:"lastVisitDate",type:e.id===w?"date":"text",required:!0,style:{border:e.id!==w&&"none",backgroundColor:"#f6f7f9"}},Object(O.a)(a,"type",e.id===w?"date":"text"),Object(O.a)(a,"defaultValue",e.lastVisitDate),Object(O.a)(a,"readOnly",e.id!==w),a))}),Object(d.jsx)("td",{children:Object(d.jsx)("input",{value:e.id==w?y.mobileNo:e.mobileNo,onChange:function(e){return V(e)},className:e.id===w&&"form form-control",name:"mobileNo",style:{border:e.id!==w&&"none",backgroundColor:"#f6f7f9"},defaultValue:e.mobileNo,readOnly:e.id!==w})}),Object(d.jsx)("td",{children:Object(d.jsx)("input",{value:e.id==w?y.dateOfBirth:e.dateOfBirth,className:e.id===w&&"form form-control",onChange:function(e){return V(e)},name:"dateOfBirth",style:{border:e.id!==w&&"none",backgroundColor:"#f6f7f9"},type:e.id===w?"date":"text",defaultValue:e.dateOfBirth,readOnly:e.id!==w})}),Object(d.jsx)("td",{className:"text-center ",children:e.id!==w?Object(d.jsxs)("div",{className:"d-flex justify-content-around",children:[Object(d.jsx)("div",{children:Object(d.jsx)("svg",{onClick:function(){return function(e){D(e.id),B(e)}(e)},xmlns:"http://www.w3.org/2000/svg",className:"cursor-pointer",style:{width:"15px",color:"skyblue"},fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(d.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})})}),Object(d.jsx)("div",{children:Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{width:"15px",color:"red"},fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(d.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})})})]}):Object(d.jsxs)("div",{className:"flex justify-around",children:[Object(d.jsx)("div",{children:Object(d.jsx)("svg",{onClick:S,style:{width:"15px",color:"green"},xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(d.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})})}),Object(d.jsx)("div",{children:Object(d.jsx)("svg",{onClick:E,style:{width:"15px",color:"gold"},xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(d.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})})})]})})]},e.id)}))})]})]}),Object(d.jsx)("div",{className:"py-2 d-flex justify-content-center",children:Object(d.jsx)("button",{className:"btn btn-primary",onClick:function(){D(s.length+1),l([].concat(Object(x.a)(s),[{id:s.length+1}]))},children:"Add More"})}),Object(d.jsx)("div",{className:"d-flex justify-content-center",children:Object(d.jsx)(p.a,{count:10,color:"standard"})})]})},w=function(){return Object(d.jsx)("div",{className:"App ",children:Object(d.jsxs)("div",{className:"p-4 space-y-5",children:[Object(d.jsx)("div",{className:"",children:Object(d.jsx)(h,{})}),Object(d.jsx)("div",{className:"",children:Object(d.jsx)("div",{className:"shadow-md bg-white p-2",children:"Application message are shown here..."})}),Object(d.jsxs)("div",{className:"flex space-x-1.5",children:[Object(d.jsx)("div",{className:"inline-block",children:Object(d.jsx)(m,{btnText:"add",imageUrl:"https://sakshiinfotech.com/DocVedaSEB/images/add.svg"})}),Object(d.jsx)("div",{className:"inline-block",children:Object(d.jsx)(m,{btnText:"edit",imageUrl:"https://sakshiinfotech.com/DocVedaSEB/images/Edit-01.svg"})}),Object(d.jsx)("div",{className:"inline-block",children:Object(d.jsx)(m,{btnText:"View",imageUrl:"https://sakshiinfotech.com/DocVedaSEB/images/Edit-01.svg"})}),Object(d.jsx)("div",{className:"inline-block",children:Object(d.jsx)(m,{btnText:"save",imageUrl:"https://sakshiinfotech.com/DocVedaSEB/images/Save-01.svg"})}),Object(d.jsx)("div",{className:"inline-block",children:Object(d.jsx)(m,{btnText:"search",imageUrl:"https://sakshiinfotech.com/DocVedaSEB/images/Search-01.svg"})}),Object(d.jsx)("div",{className:"inline-block",children:Object(d.jsx)(m,{btnText:"reset",imageUrl:"https://sakshiinfotech.com/DocVedaSEB/images/reset.svg"})}),Object(d.jsx)("div",{className:"inline-block",children:Object(d.jsx)(m,{btnText:"cancel",imageUrl:"https://sakshiinfotech.com/DocVedaSEB/images/Cancel-01.svg"})}),Object(d.jsx)("div",{className:"inline-block",children:Object(d.jsx)(m,{btnText:"import from appointment",imageUrl:"https://sakshiinfotech.com/DocVedaSEB/images/Save-01.svg"})})]}),Object(d.jsx)(N,{columns:[{name:"id",title:"ID"},{name:"registrationNo",title:"Registration No."},{name:"registrationDate",title:"Registration Date"},{name:"patientName",title:"Patient Name"},{name:"lastVisitDate",title:"Last Visit Date"},{name:"mobileNo",title:"Mobile No."},{name:"dateOfBirth",title:"Date Of Birth"},{name:"action",title:"Action"}],rows:[{id:1,registrationNo:"Rg/21041",registrationDate:"03/02/2021",patientName:"John",lastVisitDate:"10/02/2021",mobileNo:"7985444258",dateOfBirth:"23/02/1985"},{id:2,registrationNo:"Rg/21042",registrationDate:"03/03/2021",patientName:"Wick",lastVisitDate:"10/02/2021",mobileNo:"6585457852",dateOfBirth:"21/02/1985"},{id:3,registrationNo:"Rg/21043",registrationDate:"12/02/2021",patientName:"Rick",lastVisitDate:"10/02/2021",mobileNo:"6698785457",dateOfBirth:"21/02/1985"},{id:4,registrationNo:"Rg/21046",registrationDate:"03/02/2021",patientName:"Click",lastVisitDate:"22/02/2021",mobileNo:"3366525458",dateOfBirth:"21/02/1985"},{id:5,registrationNo:"Rg/21026",registrationDate:"03/02/2021",patientName:"Easy",lastVisitDate:"25/02/2021",mobileNo:"5899665877",dateOfBirth:"21/02/1985"},{id:6,registrationNo:"Rg/21029",registrationDate:"03/02/2021",patientName:"Peasy",lastVisitDate:"25/02/2021",mobileNo:"3369852541",dateOfBirth:"21/02/1985"},{id:7,registrationNo:"Rg/21015",registrationDate:"03/02/2021",patientName:"XYZ",lastVisitDate:"1/03/2021",mobileNo:"441147859",dateOfBirth:"21/02/1985"},{id:8,registrationNo:"Rg/21015",registrationDate:"03/02/2021",patientName:"XYZ",lastVisitDate:"1/03/2021",mobileNo:"441147859",dateOfBirth:"21/02/1985"},{id:9,registrationNo:"Rg/21015",registrationDate:"03/02/2021",patientName:"XYZ",lastVisitDate:"1/03/2021",mobileNo:"441147859",dateOfBirth:"21/02/1985"},{id:10,registrationNo:"Rg/21015",registrationDate:"03/02/2021",patientName:"XYZ",lastVisitDate:"1/03/2021",mobileNo:"441147859",dateOfBirth:"21/02/1985"}]})]})})},D=function(e){var t=e.label,a=e.options;return Object(d.jsxs)("div",{className:"space-y-1 ",children:[Object(d.jsx)("div",{children:Object(d.jsx)("label",{children:t})}),Object(d.jsx)("select",{className:"border-2 h-10 w-full p-1.5",children:a.map((function(e,t){return Object(d.jsx)("option",{children:e},t)}))})]})},k=function(e){var t=e.label,a=e.type,i=e.placeholder;return Object(d.jsxs)("div",{className:"space-y-1",children:[Object(d.jsx)("div",{children:Object(d.jsx)("label",{className:"capitalize",children:t})}),Object(d.jsx)("input",{className:"border-2 w-full p-1.5 capitalize focus:outline-none",type:a,placeholder:i})]})},C=a(88),y=a(230),B=a(231),V=a(25),S=a(125),E=a.n(S),T=a(229),R=a(10),A=a(19),M=a(234),L=a(235),U=a(232),P=a(20),F=[{title:" Rupesh Rao\t",startDate:new Date(2021,8,6,10,30),endDate:new Date(2021,8,6,11,0),id:0,patientContactNumber:"9989765278"},{title:"Pradyot Rath",startDate:new Date(2021,7,29,12,0),endDate:new Date(2021,7,29,12,30),id:1,patientContactNumber:"8789165678"},{title:"Vanzara",startDate:new Date(2021,8,6,9,30),endDate:new Date(2021,8,1,10,0),id:2,patientContactNumber:"8889705678"},{title:"Vanzara",startDate:new Date(2021,8,2,13,0),endDate:new Date(2021,8,2,13,30),id:3,patientContactNumber:"7789765678"},{title:"Pradyot Rath",startDate:new Date(2021,6,1,12,0),endDate:new Date(2021,6,1,12,30),id:4,patientContactNumber:"9789705678"},{title:" Ajay",startDate:new Date(2021,8,3,11,0),endDate:new Date(2021,8,3,11,30),id:18,patientContactNumber:"6789745678"},{title:"Pradyot Rath",startDate:new Date(2021,8,4,12,0),endDate:new Date(2021,8,4,12,30),id:6,patientContactNumber:"9789765278"},{title:" Ajay",startDate:new Date(2021,7,29,13,0),endDate:new Date(2021,7,29,13,30),id:7,patientContactNumber:"8789765178"}],I=["onFieldChange","appointmentData"],z=["children","appointmentData","classes"],W=["children","style"],_=Object(T.a)((function(e){return{todayCell:{backgroundColor:Object(A.fade)(e.palette.primary.main,.1),"&:hover":{backgroundColor:Object(A.fade)(e.palette.primary.main,.14)},"&:focus":{backgroundColor:Object(A.fade)(e.palette.primary.main,.16)}},weekendCell:{backgroundColor:Object(A.fade)(e.palette.action.disabledBackground,.04),"&:hover":{backgroundColor:Object(A.fade)(e.palette.action.disabledBackground,.04)},"&:focus":{backgroundColor:Object(A.fade)(e.palette.action.disabledBackground,.04)}},today:{backgroundColor:Object(A.fade)(e.palette.primary.main,.16)},weekend:{backgroundColor:Object(A.fade)(e.palette.action.disabledBackground,.06)}}})),H=function(){return{icon:{color:"#878f99"},textCenter:{textAlign:"center"},todayCell:{backgroundColor:"red"},weekendCell:{backgroundColor:"grey"}}},Y={moreInformationLabel:"",titleLabel:"Enter Name",detailsLabel:"Patient Name ",repeatLabel:""},q=function(e){var t=_(),a=e.startDate,i=new Date(a);return 0===i.getDay()||6===i.getDay()?Object(d.jsx)(P.m.TimeTableCell,Object(u.a)(Object(u.a)({},e),{},{className:t.weekendCell,onDoubleClick:void 0})):Object(d.jsx)(P.m.TimeTableCell,Object(u.a)({},e))},J=function(e){var t={icon:{color:"#878f99"},textCenter:{textAlign:"center"},todayCell:{backgroundColor:"red"},weekendCell:{backgroundColor:"grey"}},a=e.startDate;e.today;return 0===a.getDay()||6===a.getDay()?Object(d.jsx)(P.m.DayScaleCell,Object(u.a)(Object(u.a)({},e),{},{className:t.weekend,onDoubleClick:void 0})):Object(d.jsx)(P.m.DayScaleCell,Object(u.a)({},e))},X=function(e){var t=e.onFieldChange,a=e.appointmentData,i=Object(C.a)(e,I);return Object(d.jsxs)(P.a.BasicLayout,Object(u.a)(Object(u.a)({appointmentData:a,onFieldChange:t},i),{},{children:[Object(d.jsx)(P.a.Label,{text:"Patient contact number",type:"title"}),Object(d.jsx)(P.a.TextEditor,{value:a.patientContactNumber,onValueChange:function(e){t({patientContactNumber:e})},placeholder:"Enter contact number"})]}))},Z=function(e){return"multilineTextEditor"===e.type?null:Object(d.jsx)(P.a.TextEditor,Object(u.a)({},e))},G=Object(R.a)(H,{name:"Content"})((function(e){e.children;var t=e.appointmentData,a=e.classes,i=Object(C.a)(e,z);return Object(d.jsx)(P.b.Content,Object(u.a)(Object(u.a)({},i),{},{appointmentData:t,children:Object(d.jsxs)(B.a,{container:!0,alignItems:"center",children:[Object(d.jsx)(B.a,{item:!0,xs:2,className:a.textCenter,children:Object(d.jsx)(E.a,{className:a.icon})}),Object(d.jsx)(B.a,{item:!0,xs:10,children:Object(d.jsx)("span",{children:t.patientContactNumber})})]})}))}));function K(){var e=i.useState(F),t=Object(r.a)(e,2),a=t[0],n=t[1],c=i.useState(new Date),s=Object(r.a)(c,2),l=s[0],o=s[1],j=i.useState(""),b=Object(r.a)(j,2),h=b[0],m=b[1],O=i.useState(""),p=Object(r.a)(O,2),g=p[0],v=p[1],f=i.useState(void 0),N=Object(r.a)(f,2),w=N[0],D=N[1],k=i.useState(!0),B=Object(r.a)(k,2),S=(B[0],B[1],i.useState(!1)),E=Object(r.a)(S,2),T=(E[0],E[1],i.useState("Week")),R=Object(r.a)(T,2),A=R[0],I=R[1],z=function(e){var t=e.currentViewName,a=e.onChange;e.style;return Object(d.jsxs)(L.a,{"aria-label":"Views",name:"views",value:t,onChange:a,style:{marginLeft:"20px",flexDirection:"row"},children:[Object(d.jsx)(U.a,{value:"Week",control:Object(d.jsx)(M.a,{}),label:"Weekly View"}),Object(d.jsx)(U.a,{value:"Month",control:Object(d.jsx)(M.a,{}),label:"Monthly View"})]})};return Object(d.jsx)("div",{children:Object(d.jsx)(y.a,{elevation:3,children:Object(d.jsxs)(i.Fragment,{children:[Object(d.jsx)(z,{currentViewName:A,onChange:function(e){I(e.target.value)}}),Object(d.jsxs)(P.i,{data:a,height:560,setCurrentDate:l,firstDayOfWeek:l.getDay(),children:[Object(d.jsx)(V.r,{currentDate:l,onCurrentDateChange:function(e){o(e)},currentViewName:A,onCurrentViewNameChange:function(e){I(e)}}),Object(d.jsx)(V.k,{onCommitChanges:function(e){var t=e.added,i=e.changed,c=e.deleted;if(t){var s=a.length>0?a[a.length-1].id+1:0;n([].concat(Object(x.a)(a),[Object(u.a)({id:s},t)]))}return i&&n(a.map((function(e){return i[e.id]?Object(u.a)(Object(u.a)({},e),i[e.id]):e}))),void 0!==c&&n(a.filter((function(e){return e.id!==c}))),a},addedAppointment:h,onAddedAppointmentChange:function(e){m(e)},appointmentChanges:g,onAppointmentChangesChange:function(e){v(e)},editingAppointment:w,onEditingAppointmentChange:function(e){D(e)},preCommitChanges:function(e){e.added,e.changed,e.deleted;alert("test")}}),Object(d.jsx)(P.m,{startDayHour:9,endDayHour:19,showAllDayTitle:!1,cellDuration:15,displayName:"Weekly View",timeTableCellComponent:q,dayScaleCellComponent:J}),Object(d.jsx)(P.h,{displayName:"Monthly View"}),Object(d.jsx)(P.c,{appointmentComponent:function(e){var t=e.children,a=e.style,i=Object(C.a)(e,W);return Object(d.jsx)(P.c.Appointment,Object(u.a)(Object(u.a)({},i),{},{style:Object(u.a)(Object(u.a)({},a),{},{backgroundColor:"#64B5FC"}),children:t}))}}),Object(d.jsx)(P.k,{}),Object(d.jsx)(P.e,{}),Object(d.jsx)(P.l,{}),Object(d.jsx)(P.g,{}),Object(d.jsx)(P.d,{ignoreCancel:!0}),Object(d.jsx)(P.f,{}),Object(d.jsx)(P.b,{showOpenButton:!0,showDeleteButton:!0,showCloseButton:!0,contentComponent:G}),Object(d.jsx)(P.j,{}),Object(d.jsx)(P.a,{basicLayoutComponent:X,textEditorComponent:Z,messages:Y})]})]})})})}var Q=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"p-4 space-y-5",children:[Object(d.jsx)("div",{className:"",children:Object(d.jsx)(h,{})}),Object(d.jsx)("div",{className:"",children:Object(d.jsx)("div",{className:"shadow-md bg-white p-2 fff",children:"Application message are shown here.."})}),Object(d.jsxs)("div",{className:"flex space-x-1.5",children:[Object(d.jsx)("div",{className:"inline-block",children:Object(d.jsx)(m,{btnText:"add",imageUrl:"https://sakshiinfotech.com/DocVedaSEB/images/add.svg"})}),Object(d.jsx)("div",{className:"inline-block",children:Object(d.jsx)(m,{btnText:"edit",imageUrl:"https://sakshiinfotech.com/DocVedaSEB/images/Edit-01.svg"})}),Object(d.jsx)("div",{className:"inline-block",children:Object(d.jsx)(m,{btnText:"View",imageUrl:"https://sakshiinfotech.com/DocVedaSEB/images/Edit-01.svg"})}),Object(d.jsx)("div",{className:"inline-block",children:Object(d.jsx)(m,{btnText:"save",imageUrl:"https://sakshiinfotech.com/DocVedaSEB/images/Save-01.svg"})}),Object(d.jsx)("div",{className:"inline-block",children:Object(d.jsx)(m,{btnText:"search",imageUrl:"https://sakshiinfotech.com/DocVedaSEB/images/Search-01.svg"})}),Object(d.jsx)("div",{className:"inline-block",children:Object(d.jsx)(m,{btnText:"reset",imageUrl:"https://sakshiinfotech.com/DocVedaSEB/images/reset.svg"})}),Object(d.jsx)("div",{className:"inline-block",children:Object(d.jsx)(m,{btnText:"cancel",imageUrl:"https://sakshiinfotech.com/DocVedaSEB/images/Cancel-01.svg"})})]}),Object(d.jsxs)("div",{className:"shadow-md bg-white p-2",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"font-primary font-bold",children:"Patient Information"}),Object(d.jsxs)("div",{className:"grid grid-cols-6 py-4",children:[Object(d.jsx)("div",{children:"Registartion No. : Rg/21043"}),Object(d.jsx)("div",{children:"Patient Name : Rupesh Tiwari"}),Object(d.jsx)("div",{children:"Date of Birth : 21/02/1985"}),Object(d.jsx)("div",{children:"Age : 38 Year"}),Object(d.jsx)("div",{children:"Gender : Male"}),Object(d.jsx)("div",{children:"Mobile No. : 9485221445"})]}),Object(d.jsxs)("div",{className:"grid grid-cols-6 py-4",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:"Email ID :"}),Object(d.jsx)("div",{children:"rupeshtiwari@gmail.com"})]}),Object(d.jsxs)("div",{className:"col-span-2",children:[Object(d.jsx)("div",{children:"address:"})," ",Object(d.jsx)("div",{children:"322, 3rd floor Vajreshwari APT, J.B.Nagar, Andheri East"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:"City :"}),Object(d.jsx)("div",{children:"Mumbai"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:"Pin Code :"}),Object(d.jsx)("div",{children:"400 093"})]})]})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"font-primary font-bold",children:"Schedule Appointment"}),Object(d.jsxs)("div",{className:"py-4 grid grid-cols-4 gap-6",children:[Object(d.jsx)("div",{children:Object(d.jsx)(k,{label:"Appointment Date",type:"date",placeholder:"10/1/2021"})}),Object(d.jsx)("div",{children:Object(d.jsx)(k,{label:"Appointment Mobile No.",type:"number",placeholder:"9958896658"})}),Object(d.jsx)("div",{children:Object(d.jsx)(k,{label:"Appointment Email ID",type:"email",placeholder:"rupeshtiwari@gmail.com"})}),Object(d.jsx)("div",{children:Object(d.jsx)(D,{label:"source",options:["walk-in","on phone"]})})]}),Object(d.jsxs)("div",{className:"py-4 grid grid-cols-4 gap-6",children:[Object(d.jsx)("div",{children:Object(d.jsx)(D,{label:"Clinic Branch",options:["Khar","Bandra"]})}),Object(d.jsx)("div",{children:Object(d.jsx)(D,{label:"Specialisation",options:["opthalmolgy","ENT"]})}),Object(d.jsx)("div",{children:Object(d.jsx)(D,{label:"Doctor name",options:["Rupesh 1","Rupesh 2","Rupesh 3"]})}),Object(d.jsx)("div",{children:Object(d.jsx)(k,{label:"Referring Doctor / Organization :",type:"text",placeholder:"Dr ravi"})})]})]})]}),Object(d.jsx)(K,{})]})})},$=function(){var e=Object(i.useState)(""),t=Object(r.a)(e,2),a=t[0],n=t[1];return Object(i.useEffect)((function(){n(window.location.pathname)}),[window.location.pathname]),Object(d.jsx)("div",{children:Object(d.jsxs)(l.a,{children:[Object(d.jsx)(b,{title:"/"===a?"Schedule Appointment":"Patient Registration"}),Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{exact:"/",path:"/",component:Q}),Object(d.jsx)(o.a,{path:"/grid",component:w})]}),Object(d.jsx)(j,{})]})})};var ee=function(){return Object(d.jsx)("div",{children:Object(d.jsx)($,{})})},te=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,237)).then((function(t){var a=t.getCLS,i=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),i(e),n(e),c(e),s(e)}))};a.p,a.p,a(158),a(179);s.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(ee,{})}),document.getElementById("root")),te()}},[[180,1,2]]]);
//# sourceMappingURL=main.842007eb.chunk.js.map