(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{253:function(e,t,i){},254:function(e,t,i){"use strict";i.r(t);var s=i(4),a=i(0),n=i.n(a),r=i(15),o=i.n(r),c=i(7),l=i(8),u=i(12),h=i(13),p=i(34),d=i(19),b=i(72);i(255),i(139);b.a.initializeApp({apiKey:"AIzaSyAYyz1BUToP7hUUzGCweDeEbBSCPqqrpwc",authDomain:"reactcalendar-bbd95.firebaseapp.com",databaseURL:"https://emerald-ivy-302607-default-rtdb.firebaseio.com",projectId:"emerald-ivy-302607",storageBucket:"emerald-ivy-302607.appspot.com",messagingSenderId:"535304720416",appId:"1:535304720416:web:d5f1a38cbda04fa0e52c45"});b.a.firestore();var j=b.a,m=i(70),v=i(40),g=i(282),O=i(286),f=i(287),k=function(e){Object(u.a)(i,e);var t=Object(h.a)(i);function i(){return Object(c.a)(this,i),t.apply(this,arguments)}return Object(l.a)(i,[{key:"handleOnLogin",value:function(e){var t=this;j.auth().signInWithEmailAndPassword(e.email,e.password).then((function(){localStorage.setItem("login",!0),t.props.history.push("/")})).catch((function(){alert("error")}))}},{key:"render",value:function(){var e=this;return Object(s.jsx)("div",{className:"back",children:Object(s.jsxs)(g.a,{className:"login-form",children:[Object(s.jsx)(m.a,{initialValues:{email:"",password:""},onSubmit:function(t){return e.handleOnLogin(t)},validationSchema:v.a().shape({email:v.b("\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u6b63\u3057\u3044\u5f62\u5f0f\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044").email("\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u6b63\u3057\u3044\u5f62\u5f0f\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044").required("\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u306f\u8a18\u5165\u5fc5\u9808\u3067\u3059"),password:v.b("\u30d1\u30b9\u30ef\u30fc\u30c9\u306f6\u6587\u5b57\u4ee5\u4e0a\u3067\u8a2d\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044").required("\u30d1\u30b9\u30ef\u30fc\u30c9\u306f\u5165\u529b\u5fc5\u9808\u3067\u3059")}),children:function(e){var t=e.handleSubmit,i=e.handleChange,a=e.handleBlur,n=e.values,r=e.errors,o=e.touched;return Object(s.jsxs)("form",{onSubmit:t,children:[Object(s.jsx)(O.a,{size:"medium",label:"Email",type:"email",name:"email",className:"email",id:"email-form",value:n.email,onChange:i,onBlur:a,invalid:!(!o.email||!r.email)}),Object(s.jsx)("div",{children:r.email}),Object(s.jsx)(O.a,{label:"password",type:"password",name:"password",id:"password-form",className:"password",value:n.password,onChange:i,onBlur:a,invalid:!(!o.password||!r.password)}),Object(s.jsx)("div",{children:r.password}),Object(s.jsx)(f.a,{className:"btn",variant:"contained",color:"primary",type:"submit",children:"\u30ed\u30b0\u30a4\u30f3"})]})}}),Object(s.jsx)("div",{className:"signup-wrap",children:Object(s.jsxs)("p",{className:"signup",children:["\u521d\u3081\u3066\u3054\u5229\u7528\u3055\u308c\u308b\u65b9\u306f\u3053\u3061\u3089",Object(s.jsx)(p.b,{to:"/signup",children:Object(s.jsx)("a",{className:"signup-link",children:"\u65b0\u898f\u767b\u9332"})})]})})]})})}}]),i}(n.a.Component),x=Object(d.g)(k),y=i(125),S=i.n(y),C=function(e){Object(u.a)(i,e);var t=Object(h.a)(i);function i(){var e;Object(c.a)(this,i);for(var s=arguments.length,a=new Array(s),n=0;n<s;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={logincheck:!1,login:!1},e}return Object(l.a)(i,[{key:"componentDidMount",value:function(){var e=this;j.auth().onAuthStateChanged((function(t){t?e.setState({loginCheck:!0,login:!0}):e.setState({loginCheck:!0,login:!1})}))}},{key:"render",value:function(){return this.state.loginCheck?this.state.login?this.props.children:Object(s.jsx)(d.a,{to:"login"}):Object(s.jsx)(S.a,{active:!0,spinner:!0,text:"Loading...",children:Object(s.jsx)("div",{className:"loading"})})}}]),i}(n.a.Component),M=function(e){Object(u.a)(i,e);var t=Object(h.a)(i);function i(){var e;Object(c.a)(this,i);for(var s=arguments.length,a=new Array(s),n=0;n<s;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).handleLogout=function(){j.auth().signOut()},e}return Object(l.a)(i,[{key:"render",value:function(){var e=this;return Object(s.jsx)("nav",{className:"top-menu",children:Object(s.jsxs)("ul",{className:"top-menu-content",children:[Object(s.jsx)("li",{children:Object(s.jsx)(p.c,{exact:!0,to:"/",children:"Calendar"})}),Object(s.jsx)("li",{children:Object(s.jsx)("span",{onClick:function(){return e.handleLogout()},children:"Logout"})})]})})}}]),i}(n.a.Component),N=Object(d.g)(M),w=function(e){Object(u.a)(i,e);var t=Object(h.a)(i);function i(){return Object(c.a)(this,i),t.apply(this,arguments)}return Object(l.a)(i,[{key:"handleOnSubmit",value:function(e){var t=this;j.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(){t.props.history.push("/login")})).catch((function(){console.log("error")}))}},{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{className:"finish",children:[Object(s.jsx)("h2",{children:"\u767b\u9332\u5b8c\u4e86"}),Object(s.jsx)(p.b,{to:"/login",children:Object(s.jsx)("button",{children:"\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u3078"})})]}),Object(s.jsx)("div",{className:"back",children:Object(s.jsxs)(g.a,{className:"login-form",children:[Object(s.jsx)("h2",{className:"signup-title",children:"\u65b0\u898f\u4f1a\u54e1\u767b\u9332"}),Object(s.jsx)(m.a,{initialValues:{email:"",password:""},onSubmit:function(t){return e.handleOnSubmit(t)},validationSchema:v.a().shape({email:v.b("\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u6b63\u3057\u3044\u5f62\u5f0f\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044").email("\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u6b63\u3057\u3044\u5f62\u5f0f\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044").required("\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u306f\u8a18\u5165\u5fc5\u9808\u3067\u3059"),password:v.b("\u30d1\u30b9\u30ef\u30fc\u30c9\u306f6\u6587\u5b57\u4ee5\u4e0a\u3067\u8a2d\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044").required("\u30d1\u30b9\u30ef\u30fc\u30c9\u306f\u5165\u529b\u5fc5\u9808\u3067\u3059")}),children:function(e){var t=e.handleSubmit,i=e.handleChange,a=e.handleBlur,n=e.values,r=e.errors,o=e.touched;return Object(s.jsxs)("form",{onSubmit:t,children:[Object(s.jsx)(O.a,{size:"medium",label:"Email",type:"email",name:"email",className:"email",id:"email-form",value:n.email,onChange:i,onBlur:a,invalid:!(!o.email||!r.email)}),Object(s.jsx)("div",{children:r.email}),Object(s.jsx)(O.a,{label:"password",type:"password",name:"password",id:"password-form",className:"password",value:n.password,onChange:i,onBlur:a,invalid:!(!o.password||!r.password)}),Object(s.jsx)("div",{children:r.password}),Object(s.jsx)(f.a,{className:"btn",variant:"contained",color:"primary",type:"submit",children:"\u767b\u9332"})]})}})]})})}}]),i}(n.a.Component),D=Object(d.g)(w),H=i(126),E=function(e){Object(u.a)(i,e);var t=Object(h.a)(i);function i(){return Object(c.a)(this,i),t.apply(this,arguments)}return Object(l.a)(i,[{key:"handleTime",value:function(e){var t=e.target.value;this.props.setEndHour(t)}},{key:"selectEndHour",value:function(){var e=[],t=this.props.origin.startHour,i=Number(this.props.origin.endHour),a=Number(this.props.origin.backups[2]);(t||this.props.origin.backups[0])&&!t&&this.props.origin.backups[0]&&(t=this.props.origin.backups[0]),!i&&a&&(i=a);for(var n=0;n<=23;n++)n>=t&&(n===i?e.push(Object(s.jsx)("option",{value:n,selected:!0,children:n})):n!==i&&e.push(Object(s.jsx)("option",{value:n,children:n})));return Object(s.jsx)("select",{defaultValue:this.props.origin.backups[2],onChange:this.handleTime.bind(this),children:e})}},{key:"render",value:function(){return Object(s.jsx)("div",{children:this.selectEndHour()})}}]),i}(n.a.Component),T=function(e){Object(u.a)(i,e);var t=Object(h.a)(i);function i(){return Object(c.a)(this,i),t.apply(this,arguments)}return Object(l.a)(i,[{key:"handleTime",value:function(e){var t=e.target.value;this.props.setEndMinute(t)}},{key:"selectEndMinute",value:function(){var e=[],t=this.props.origin.startHour,i=this.props.origin.endMinute,a=this.props.origin.endHour,n=this.props.origin.backups[0],r=this.props.origin.backups[1],o=this.props.origin.backups[2],c="",l="",u=this.props.origin.startMinute;if(!u&&r?u=r:!u&&r&&(u=0),c=t||n?!t&&n?n:t:"",a||o||c?a||!o||c?a||c!==n?!a&&t?l=t:a&&t>a?l=c:a&&(l=a):l=n:l=o:l="",c!==l){for(var h=0;h<=50;h++)if(h%10===0){var p=("0"+h).slice(-2);h!==Number(i)?e.push(Object(s.jsx)("option",{value:p,children:p})):e.push(Object(s.jsx)("option",{value:p,selected:!0,children:p}))}}else if(c===l)for(var d=0;d<=50;d++)if(d%10===0&&d>=u){var b=("0"+d).slice(-2);d!==Number(i)?e.push(Object(s.jsx)("option",{value:b,children:b})):e.push(Object(s.jsx)("option",{value:b,selected:!0,children:b}))}return Object(s.jsx)("select",{defaultValue:this.props.origin.backups[3],onChange:this.handleTime.bind(this),children:e})}},{key:"render",value:function(){return Object(s.jsx)("div",{children:this.selectEndMinute()})}}]),i}(n.a.Component),V=function(e){Object(u.a)(i,e);var t=Object(h.a)(i);function i(){return Object(c.a)(this,i),t.apply(this,arguments)}return Object(l.a)(i,[{key:"handleTime",value:function(e){var t=e.target.value;this.props.setStartHour(t)}},{key:"selectStartHour",value:function(){for(var e=[],t=0;t<=23;t++)e.push(Object(s.jsx)("option",{value:t,children:t}));return Object(s.jsx)("select",{defaultValue:this.props.backups[0],onChange:this.handleTime.bind(this),children:e})}},{key:"render",value:function(){return Object(s.jsx)("div",{children:this.selectStartHour()})}}]),i}(n.a.Component),_=function(e){Object(u.a)(i,e);var t=Object(h.a)(i);function i(){return Object(c.a)(this,i),t.apply(this,arguments)}return Object(l.a)(i,[{key:"handleTime",value:function(e){var t=e.target.value;this.props.setTileColor(t)}},{key:"render",value:function(){var e=this.props.backups[5];return Object(s.jsx)("input",{type:"color",defaultValue:e,onChange:this.handleTime.bind(this)})}}]),i}(n.a.Component),B=function(e){Object(u.a)(i,e);var t=Object(h.a)(i);function i(){return Object(c.a)(this,i),t.apply(this,arguments)}return Object(l.a)(i,[{key:"handleTime",value:function(e){var t=e.target.value;this.props.setStartMinute(t)}},{key:"selectStartMinute",value:function(){for(var e=[],t=0;t<=50;t++){var i=("0"+t).slice(-2);i%10===0&&e.push(Object(s.jsx)("option",{value:i,children:i}))}return Object(s.jsx)("select",{defaultValue:this.props.backups[1],onChange:this.handleTime.bind(this),children:e})}},{key:"render",value:function(){return Object(s.jsx)("div",{children:this.selectStartMinute()})}}]),i}(n.a.Component),F=function(e){Object(u.a)(i,e);var t=Object(h.a)(i);function i(){return Object(c.a)(this,i),t.apply(this,arguments)}return Object(l.a)(i,[{key:"getUniqueStr",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3;return(new Date).getTime().toString(16)+Math.floor(e*Math.random()).toString(16)}},{key:"formatDate",value:function(e){var t=new Date(e);return t.getFullYear()+"\u5e74"+(t.getMonth()+1)+"\u6708"+t.getDate()+"\u65e5"}},{key:"defaultForm",value:function(){if(null!==this.props.origin.backups[4])return this.props.origin.backups[4]}},{key:"submit",value:function(){this.props.handleClose();var e=this.props.getFormatDate(new Date(this.props.origin.selectedDate)),t=this.props.origin.month_days,i=Object.keys(t).indexOf(e),s=this.getUniqueStr();e=Number(e);var a=this.props.origin.startHour,n=this.props.origin.startMinute,r=this.props.origin.endHour,o=this.props.origin.endMinute,c=this.props.origin.formValues,l="";!a&&this.props.origin.backups[0]?a=this.props.origin.backups[0]:a||this.props.origin.backups[0]||(a="0"),!n&&this.props.origin.backups[1]?n=this.props.origin.backups[1]:n||this.props.origin.backups[1]||(n="00"),!r&&this.props.origin.backups[2]?r=this.props.origin.startHour>this.props.origin.backups[2]?this.props.origin.startHour:this.props.origin.backups[2]:r||this.props.origin.backups[2]||!a||(r=a),!o&&this.props.origin.backups[3]?o=this.props.origin.backups[3]:o||this.props.origin.backups[3]||!n||(o=n),!c&&this.props.origin.backups[4]?c=this.props.origin.backups[4]:c||this.props.origin.backups[4]||(c=""),l=!this.props.origin.backColor&&this.props.origin.backups[5]?this.props.origin.backups[5]:this.props.origin.backColor||this.props.origin.backups[5]?this.props.origin.backColor:"black",r<a&&(r=a),a===r&&n>o&&(o=n);var u=a+":"+n,h=r+":"+o;-1!==i?t[e].push({id:s,text:u+"\uff5e"+h+"\n"+c,backup:[a,n,r,o,c],backColor:l}):(c&&":"!==u||":"!==h)&&(t[e]=[{id:s,text:u+"\uff5e"+h+"\n"+c,backup:[a,n,r,o,c],backColor:l}]),this.props.setPlans(t),this.props.handleDelete(),this.props.inputDelete()}},{key:"render",value:function(){var e;return!1===this.props.origin.isSubmitted&&(e=Object(s.jsx)("form",{onSubmit:this.submit.bind(this),children:Object(s.jsx)("div",{className:"modal-back",onClick:this.props.keepModal,children:Object(s.jsxs)("div",{className:"modal ",children:[Object(s.jsxs)("div",{className:"modal-top",children:[Object(s.jsx)("button",{className:"close-button",onClick:this.props.closeModal,children:"\xd7"}),Object(s.jsx)("div",{className:"add-plans",children:"\u4e88\u5b9a\u767b\u9332"})]}),Object(s.jsxs)("div",{className:"modal-main",children:[Object(s.jsxs)("div",{className:"time",children:[Object(s.jsxs)("p",{children:["\u9078\u629e\u3057\u305f\u65e5 : ",this.formatDate(this.props.origin.selectedDate)]}),Object(s.jsx)("p",{className:"plans-time",children:"\u4e88\u5b9a\u6642\u9593"}),Object(s.jsxs)("div",{className:"time-box",children:[Object(s.jsx)(V,{setStartHour:this.props.setStartHour.bind(this),backups:this.props.origin.backups}),Object(s.jsx)("p",{children:":"}),Object(s.jsx)(B,{setStartMinute:this.props.setStartMinute.bind(this),backups:this.props.origin.backups}),Object(s.jsx)("p",{children:"\uff5e"}),Object(s.jsx)(E,{setEndHour:this.props.setEndHour.bind(this),origin:this.props.origin}),Object(s.jsx)("p",{children:":"}),Object(s.jsx)(T,{setEndMinute:this.props.setEndMinute.bind(this),origin:this.props.origin})]}),Object(s.jsxs)("div",{className:"select-color",children:[Object(s.jsx)("p",{children:"\u4e88\u5b9a\u306e\u80cc\u666f\u8272"}),Object(s.jsx)(_,{setTileColor:this.props.setTileColor.bind(this),backups:this.props.origin.backups})]})]}),Object(s.jsx)("p",{className:"plan-contents",children:"\u4e88\u5b9a\u306e\u5185\u5bb9"}),Object(s.jsx)("input",{required:!0,onChange:this.props.handleChange,defaultValue:this.defaultForm()}),Object(s.jsx)("input",{className:"submit-btn",type:"submit",value:"\u767b\u9332"})]})]})})})),Object(s.jsx)("div",{children:e})}}]),i}(n.a.Component),q=function(e){Object(u.a)(i,e);var t=Object(h.a)(i);function i(e){var s;return Object(c.a)(this,i),(s=t.call(this,e)).editState=function(e){for(var t=e.target.className,i=e.target.id,a=s.state.month_days[t],n=0;n<a.length;n++){var r=a[n];r.id===i&&(s.setState({backups:[r.backup[0],r.backup[1],r.backup[2],r.backup[3],r.backup[4],r.back_color]}),s.deleteState(e))}},s.deleteState=function(e){var t=e.target.className,i=e.target.id,a=s.state.month_days[t];s.inputDelete();for(var n=0;n<a.length;n++)if(a[n].id===i){s.state.month_days[t].splice(n,1);break}},s.state={isSubmitted:!0,month_days:{},selectedDate:"",backups:"",formValues:"",startHour:"",startMinute:"",endHour:"",endMinute:"",backColor:"",title:""},s}return Object(l.a)(i,[{key:"getFormatDate",value:function(e){return"".concat(e.getFullYear()).concat(("0"+(e.getMonth()+1)).slice(-2)).concat(("0"+e.getDate()).slice(-2))}},{key:"openModal",value:function(e,t){"delete"===t.target.title?this.setState({isSubmitted:!0}):this.setState({isSubmitted:!1}),this.setState({selectedDate:e})}},{key:"inputDelete",value:function(){this.setState({startHour:""}),this.setState({startMinute:""}),this.setState({endHour:""}),this.setState({endMinute:""}),this.setState({formValues:""}),this.setState({backColor:""})}},{key:"closeModal",value:function(){this.setState({isSubmitted:!0}),this.setState({backups:""}),this.inputDelete()}},{key:"keepModal",value:function(e){"modal-back"===e.target.className&&this.closeModal()}},{key:"getTileContent",value:function(e){var t=this,i=e.date;if("month"!==e.view)return null;var a=this.getFormatDate(i);return Object(s.jsxs)("p",{children:[Object(s.jsx)("br",{}),this.state.month_days[a]&&this.state.month_days[a].map((function(e){return Object(s.jsxs)("div",{className:"plans",children:[Object(s.jsx)("button",{className:a,id:e.id,title:"delete",style:{backgroundColor:e.backColor},onClick:t.deleteState,children:"\xd7"}),Object(s.jsx)("button",{className:a,id:e.id,style:{backgroundColor:e.backColor},onClick:t.editState,children:e.text}),Object(s.jsx)("br",{})]})}))]})}},{key:"setStartHour",value:function(e){this.setState({startHour:e})}},{key:"setStartMinute",value:function(e){this.setState({startMinute:e})}},{key:"setEndHour",value:function(e){this.setState({endHour:e})}},{key:"setEndMinute",value:function(e){this.setState({endMinute:e})}},{key:"setTileColor",value:function(e){this.setState({backColor:e})}},{key:"handleChange",value:function(e){var t=e.target.value;this.setState({formValues:t})}},{key:"setPlans",value:function(e){this.setState({month_days:e})}},{key:"handleClose",value:function(){this.setState({isSubmitted:!0})}},{key:"handleDelete",value:function(){this.setState({backups:""})}},{key:"componentDidMount",value:function(){if(localStorage.app){var e=JSON.parse(localStorage.app);this.setState({month_days:e.month_days})}}},{key:"componentDidUpdate",value:function(){localStorage.setItem("app",JSON.stringify(this.state))}},{key:"render",value:function(){var e=this;console.log(this.state);return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(H.a,{locale:"ja-JP",tileContent:function(t){var i=t.date,s=t.view;return e.getTileContent({date:i,view:s})},value:this.state.date,onClickDay:this.openModal.bind(this)}),Object(s.jsx)(F,{getFormatDate:this.getFormatDate.bind(this),handleChange:this.handleChange.bind(this),setStartHour:this.setStartHour.bind(this),setStartMinute:this.setStartMinute.bind(this),setEndHour:this.setEndHour.bind(this),setEndMinute:this.setEndMinute.bind(this),setTileColor:this.setTileColor.bind(this),closeModal:this.closeModal.bind(this),keepModal:this.keepModal.bind(this),setPlans:this.setPlans.bind(this),handleClose:this.handleClose.bind(this),handleDelete:this.handleDelete.bind(this),inputDelete:this.inputDelete.bind(this),origin:this.state,date:this.date})]})}}]),i}(n.a.Component),P=function(e){Object(u.a)(i,e);var t=Object(h.a)(i);function i(){return Object(c.a)(this,i),t.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){return Object(s.jsx)(p.a,{children:Object(s.jsxs)(d.d,{children:[Object(s.jsx)(d.b,{exact:!0,path:"/login",component:x}),Object(s.jsx)(d.b,{exact:!0,path:"/signup",component:D}),Object(s.jsxs)(C,{children:[Object(s.jsx)(N,{}),Object(s.jsx)(q,{})]})]})})}}]),i}(n.a.Component);i(253);o.a.render(Object(s.jsx)(P,{}),document.getElementById("root"))}},[[254,1,2]]]);
//# sourceMappingURL=main.e63a0a9e.chunk.js.map