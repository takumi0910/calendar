(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{34:function(t,e,s){},35:function(t,e,s){"use strict";s.r(e);var i=s(2),a=s(1),n=s.n(a),r=s(20),o=s.n(r),c=s(3),l=s(4),u=s(6),h=s(5),p=s(12),d=s(7),b=s(23),j=s(21),m=function(t){Object(u.a)(s,t);var e=Object(h.a)(s);function s(t){return Object(c.a)(this,s),e.call(this,t)}return Object(l.a)(s,[{key:"handletime",value:function(t){var e=t.target.value;this.props.setEndHour(e)}},{key:"select_endhour",value:function(){var t=[],e=this.props.start_hour,s=Number(this.props.end_hour),a=Number(this.props.backups[2]);(e||this.props.backups[0])&&!e&&this.props.backups[0]&&(e=this.props.backups[0]),!s&&a&&(s=a);for(var n=0;n<=23;n++)n>=e&&(n===s?t.push(Object(i.jsx)("option",{value:n,selected:!0,children:n})):n!==s&&t.push(Object(i.jsx)("option",{value:n,children:n})));return Object(i.jsx)("select",{defaultValue:this.props.backups[2],onChange:this.handletime.bind(this),children:t})}},{key:"render",value:function(){return Object(i.jsx)("div",{children:this.select_endhour()})}}]),s}(n.a.Component),v=function(t){Object(u.a)(s,t);var e=Object(h.a)(s);function s(t){return Object(c.a)(this,s),e.call(this,t)}return Object(l.a)(s,[{key:"handletime",value:function(t){var e=t.target.value;this.props.setEndMinute(e)}},{key:"select_endminute",value:function(){var t=[],e=this.props.start_hour,s=this.props.end_minute,a=this.props.end_hour,n=this.props.backups[0],r=this.props.backups[1],o=this.props.backups[2],c="",l="",u=this.props.start_minute;if(!u&&r?u=r:!u&&r&&(u=0),c=e||n?!e&&n?n:e:"",a||o||c?a||!o||c?a||c!==n?!a&&e?l=e:a&&e>a?l=c:a&&(l=a):l=n:l=o:l="",c!==l){for(var h=0;h<=50;h++)if(h%10===0){var p=("0"+h).slice(-2);h!==Number(s)?t.push(Object(i.jsx)("option",{value:p,children:p})):t.push(Object(i.jsx)("option",{value:p,selected:!0,children:p}))}}else if(c===l)for(h=0;h<=50;h++)if(h%10===0&&h>=u){var d=("0"+h).slice(-2);h!==Number(s)?t.push(Object(i.jsx)("option",{value:d,children:d})):t.push(Object(i.jsx)("option",{value:d,selected:!0,children:d}))}return Object(i.jsx)("select",{defaultValue:this.props.backups[3],onChange:this.handletime.bind(this),children:t})}},{key:"render",value:function(){return Object(i.jsx)("div",{children:this.select_endminute()})}}]),s}(n.a.Component),g=function(t){Object(u.a)(s,t);var e=Object(h.a)(s);function s(t){return Object(c.a)(this,s),e.call(this,t)}return Object(l.a)(s,[{key:"handletime",value:function(t){var e=t.target.value;this.props.setStartHour(e)}},{key:"select_starthour",value:function(){for(var t=[],e=0;e<=23;e++)t.push(Object(i.jsx)("option",{value:e,children:e}));return Object(i.jsx)("select",{defaultValue:this.props.backups[0],onChange:this.handletime.bind(this),children:t})}},{key:"render",value:function(){return Object(i.jsx)("div",{children:this.select_starthour()})}}]),s}(n.a.Component),O=function(t){Object(u.a)(s,t);var e=Object(h.a)(s);function s(t){return Object(c.a)(this,s),e.call(this,t)}return Object(l.a)(s,[{key:"handletime",value:function(t){var e=t.target.value;this.props.setTileColor(e)}},{key:"render",value:function(){var t=this.props.backups[5];return Object(i.jsx)("input",{type:"color",defaultValue:t,onChange:this.handletime.bind(this)})}}]),s}(n.a.Component),k=function(t){Object(u.a)(s,t);var e=Object(h.a)(s);function s(t){return Object(c.a)(this,s),e.call(this,t)}return Object(l.a)(s,[{key:"handletime",value:function(t){var e=t.target.value;this.props.setStartMinute(e)}},{key:"select_startminute",value:function(){for(var t=[],e=0;e<=50;e++){var s=("0"+e).slice(-2);s%10===0&&t.push(Object(i.jsx)("option",{value:s,children:s}))}return Object(i.jsx)("select",{defaultValue:this.props.backups[1],onChange:this.handletime.bind(this),children:t})}},{key:"render",value:function(){return Object(i.jsx)("div",{children:this.select_startminute()})}}]),s}(n.a.Component),f=function(t){Object(u.a)(s,t);var e=Object(h.a)(s);function s(){return Object(c.a)(this,s),e.apply(this,arguments)}return Object(l.a)(s,[{key:"getUniqueStr",value:function(t){var e=1e3;return t&&(e=t),(new Date).getTime().toString(16)+Math.floor(e*Math.random()).toString(16)}},{key:"formatDate",value:function(t){var e=new Date(t);return e.getFullYear()+"\u5e74"+(e.getMonth()+1)+"\u6708"+e.getDate()+"\u65e5"}},{key:"defaultForm",value:function(){if(null!==this.props.origin.backups[4])return this.props.origin.backups[4]}},{key:"submit",value:function(){this.props.handleClose();var t=this.props.getFormatDate(new Date(this.props.origin.selectedDate)),e=this.props.origin.month_days,s=Object.keys(e).indexOf(t),i=this.getUniqueStr();t=Number(t);var a=this.props.origin.start_hour,n=this.props.origin.start_minute,r=this.props.origin.end_hour,o=this.props.origin.end_minute,c=this.props.origin.formvalues,l="";!a&&this.props.origin.backups[0]?a=this.props.origin.backups[0]:a||this.props.origin.backups[0]||(a="0"),!n&&this.props.origin.backups[1]?n=this.props.origin.backups[1]:n||this.props.origin.backups[1]||(n="00"),!r&&this.props.origin.backups[2]?r=this.props.origin.start_hour>this.props.origin.backups[2]?this.props.origin.start_hour:this.props.origin.backups[2]:r||this.props.origin.backups[2]||!a||(r=a),!o&&this.props.origin.backups[3]?o=this.props.origin.backups[3]:o||this.props.origin.backups[3]||!n||(o=n),!c&&this.props.origin.backups[4]?c=this.props.origin.backups[4]:c||this.props.origin.backups[4]||(c=""),l=!this.props.origin.back_color&&this.props.origin.backups[5]?this.props.origin.backups[5]:this.props.origin.back_color||this.props.origin.backups[5]?this.props.origin.back_color:"black",r<a&&(r=a),a===r&&n>o&&(o=n);var u=a+":"+n,h=r+":"+o;-1!==s?e[t].push({id:i,text:u+"\uff5e"+h+"\n"+c,backup:[a,n,r,o,c],back_color:l}):(c&&":"!==u||":"!==h)&&(e[t]=[{id:i,text:u+"\uff5e"+h+"\n"+c,backup:[a,n,r,o,c],back_color:l}]),this.props.setPlans(e),this.props.handleDelete(),this.props.inputDelete()}},{key:"render",value:function(){var t;return!1===this.props.origin.isSubmitted&&(t=Object(i.jsx)("form",{onSubmit:this.submit.bind(this),children:Object(i.jsx)("div",{className:"modal-back",onClick:this.props.keepModal,children:Object(i.jsxs)("div",{className:"modal ",children:[Object(i.jsxs)("div",{className:"modal-top",children:[Object(i.jsx)("button",{className:"close-button",onClick:this.props.closeModal,children:"\xd7"}),Object(i.jsx)("div",{className:"add-plans",children:"\u4e88\u5b9a\u767b\u9332"})]}),Object(i.jsxs)("div",{className:"modal-main",children:[Object(i.jsxs)("div",{className:"time",children:[Object(i.jsxs)("p",{children:["\u9078\u629e\u3057\u305f\u65e5 : ",this.formatDate(this.props.origin.selectedDate)]}),Object(i.jsx)("p",{className:"plans-time",children:"\u4e88\u5b9a\u6642\u9593"}),Object(i.jsxs)("div",{className:"time-box",children:[Object(i.jsx)(g,{setStartHour:this.props.setStartHour.bind(this),backups:this.props.origin.backups}),Object(i.jsx)("p",{children:":"}),Object(i.jsx)(k,{setStartMinute:this.props.setStartMinute.bind(this),backups:this.props.origin.backups}),Object(i.jsx)("p",{children:"\uff5e"}),Object(i.jsx)(m,{setEndHour:this.props.setEndHour.bind(this),backups:this.props.origin.backups,start_hour:this.props.origin.start_hour,end_hour:this.props.origin.end_hour}),Object(i.jsx)("p",{children:":"}),Object(i.jsx)(v,{setEndMinute:this.props.setEndMinute.bind(this),backups:this.props.origin.backups,start_hour:this.props.origin.start_hour,start_minute:this.props.origin.start_minute,end_hour:this.props.origin.end_hour,end_minute:this.props.origin.end_minute})]}),Object(i.jsxs)("div",{className:"select-color",children:[Object(i.jsx)("p",{children:"\u4e88\u5b9a\u306e\u80cc\u666f\u8272"}),Object(i.jsx)(O,{setTileColor:this.props.setTileColor.bind(this),backups:this.props.origin.backups})]})]}),Object(i.jsx)("p",{className:"plan-contents",children:"\u4e88\u5b9a\u306e\u5185\u5bb9"}),Object(i.jsx)("input",Object(j.a)({defaultValue:"",required:!0,onChange:this.props.handleChange},"defaultValue",this.defaultForm())),Object(i.jsx)("input",{className:"submit-btn",type:"submit",value:"\u767b\u9332"})]})]})})})),Object(i.jsx)("div",{children:t})}}]),s}(n.a.Component),x=function(t){Object(u.a)(s,t);var e=Object(h.a)(s);function s(t){var i;return Object(c.a)(this,s),(i=e.call(this,t)).handleLogin=function(){"example@gmail.com"===i.state.mail&&"password"===i.state.pass&&(localStorage.setItem("login","true"),i.props.history.push("/"))},i.state={mail:"",pass:""},i}return Object(l.a)(s,[{key:"register_mail",value:function(t){var e=t.target.value;this.setState({mail:e})}},{key:"register_pass",value:function(t){var e=t.target.value;this.setState({pass:e})}},{key:"render",value:function(){var t=this;return console.log(this.state.mail),Object(i.jsx)("div",{className:"login-form",children:Object(i.jsxs)("div",{className:"main",children:[Object(i.jsx)("div",{className:"mail",children:"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9"}),Object(i.jsx)("input",{type:"text",placeholder:"example@gmail.com",onChange:this.register_mail.bind(this)}),Object(i.jsx)("div",{className:"pass",children:"\u30d1\u30b9\u30ef\u30fc\u30c9"}),Object(i.jsx)("input",{type:"text",placeholder:"password",onChange:this.register_pass.bind(this)}),Object(i.jsx)("button",{className:"login-btn",onClick:function(){return t.handleLogin()},children:"\u30ed\u30b0\u30a4\u30f3"}),Object(i.jsx)(p.b,{to:"/signup",children:Object(i.jsx)("button",{children:"\u65b0\u898f\u767b\u9332(\u672a\u5b8c\u6210)"})})]})})}}]),s}(n.a.Component),y=Object(d.g)(x),_=function(t){Object(u.a)(s,t);var e=Object(h.a)(s);function s(){return Object(c.a)(this,s),e.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return"true"===localStorage.getItem("login")?this.props.children:Object(i.jsx)(d.a,{to:"/login"})}}]),s}(n.a.Component),S=function(t){Object(u.a)(s,t);var e=Object(h.a)(s);function s(){var t;Object(c.a)(this,s);for(var i=arguments.length,a=new Array(i),n=0;n<i;n++)a[n]=arguments[n];return(t=e.call.apply(e,[this].concat(a))).handleLogout=function(){localStorage.setItem("login","false"),t.props.history.push("/")},t}return Object(l.a)(s,[{key:"render",value:function(){var t=this;return Object(i.jsx)("nav",{className:"top-menu",children:Object(i.jsxs)("ul",{className:"top-menu-content",children:[Object(i.jsx)("li",{children:Object(i.jsx)(p.c,{exact:!0,to:"/",children:"Calendar"})}),Object(i.jsx)("li",{children:Object(i.jsx)("span",{onClick:function(){return t.handleLogout()},children:"Logout"})})]})})}}]),s}(n.a.Component),C=Object(d.g)(S),N=function(t){Object(u.a)(s,t);var e=Object(h.a)(s);function s(t){var i;return Object(c.a)(this,s),(i=e.call(this,t)).state={mail:"",pass:"",value:"0",OpenModal:!1},i}return Object(l.a)(s,[{key:"registerMail",value:function(t){var e=t.target.value;this.setState({mail:e})}},{key:"registerPass",value:function(t){var e=t.target.value;this.setState({pass:e})}},{key:"plus",value:function(){this.setState({value:Number(this.state.value)+1}),this.setState({OpenModal:!0})}},{key:"componentDidUpdate",value:function(){localStorage.setItem(this.state.value,JSON.stringify(this.state))}},{key:"changePath",value:function(){this.props.history.push("/login")}},{key:"render",value:function(){var t;return console.log(this.state.value),!0===this.state.OpenModal&&(t=Object(i.jsxs)("div",{className:"finish",children:[Object(i.jsx)("p",{children:"\u767b\u9332\u5b8c\u4e86"}),Object(i.jsx)("button",{onClick:this.changePath(),children:"\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u3078"})]})),Object(i.jsxs)("div",{className:"signup-form",children:[Object(i.jsxs)("div",{className:"main",children:[Object(i.jsx)("div",{className:"mail",children:"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9"}),Object(i.jsx)("input",{type:"text",placeholder:"example@gmail.com",onChange:this.registerMail.bind(this)}),Object(i.jsx)("div",{className:"pass",children:"\u30d1\u30b9\u30ef\u30fc\u30c9"}),Object(i.jsx)("input",{type:"text",placeholder:"password",onChange:this.registerPass.bind(this)}),Object(i.jsx)("button",{className:"login-btn",onClick:this.plus.bind(this),children:"\u767b\u9332"})]}),t]})}}]),s}(n.a.Component),M=Object(d.g)(N),D=function(t){Object(u.a)(s,t);var e=Object(h.a)(s);function s(t){var i;return Object(c.a)(this,s),(i=e.call(this,t)).editState=function(t){for(var e=t.target.className,s=t.target.id,a=i.state.month_days[e],n=0;n<a.length;n++){var r=a[n];r.id===s&&(i.setState({backups:[r.backup[0],r.backup[1],r.backup[2],r.backup[3],r.backup[4],r.back_color]}),i.deleteState(t))}},i.deleteState=function(t){var e=t.target.className,s=t.target.id,a=i.state.month_days[e];i.inputDelete();for(var n=0;n<a.length;n++)if(a[n].id===s){i.state.month_days[e].splice(n,1);break}},i.state={isSubmitted:!0,month_days:{},selectedDate:"",backups:"",formvalues:"",start_hour:"",start_minute:"",end_hour:"",end_minute:"",back_color:"",title:""},i}return Object(l.a)(s,[{key:"getFormatDate",value:function(t){return"".concat(t.getFullYear()).concat(("0"+(t.getMonth()+1)).slice(-2)).concat(("0"+t.getDate()).slice(-2))}},{key:"openModal",value:function(t,e){"delete"===e.target.title?this.setState({isSubmitted:!0}):this.setState({isSubmitted:!1}),this.setState({selectedDate:t})}},{key:"inputDelete",value:function(){this.setState({start_hour:""}),this.setState({start_minute:""}),this.setState({end_hour:""}),this.setState({end_minute:""}),this.setState({formvalues:""}),this.setState({back_color:""})}},{key:"closeModal",value:function(){this.setState({isSubmitted:!0}),this.setState({backups:""}),this.inputDelete()}},{key:"keepModal",value:function(t){"modal-back"===t.target.className&&this.closeModal()}},{key:"getTileContent",value:function(t){var e=this,s=t.date;if("month"!==t.view)return null;var a=this.getFormatDate(s);return Object(i.jsxs)("p",{children:[Object(i.jsx)("br",{}),this.state.month_days[a]&&this.state.month_days[a].map((function(t){return Object(i.jsxs)("div",{className:"plans",children:[Object(i.jsx)("button",{className:a,id:t.id,title:"delete",style:{backgroundColor:t.back_color},onClick:e.deleteState,children:"\xd7"}),Object(i.jsx)("button",{className:a,id:t.id,style:{backgroundColor:t.back_color},onClick:e.editState,children:t.text}),Object(i.jsx)("br",{})]})}))]})}},{key:"setStartHour",value:function(t){this.setState({start_hour:t})}},{key:"setStartMinute",value:function(t){this.setState({start_minute:t})}},{key:"setEndHour",value:function(t){this.setState({end_hour:t})}},{key:"setEndMinute",value:function(t){this.setState({end_minute:t})}},{key:"setTileColor",value:function(t){this.setState({back_color:t})}},{key:"handleChange",value:function(t){var e=t.target.value;this.setState({formvalues:e})}},{key:"setPlans",value:function(t){this.setState({month_days:t})}},{key:"handleClose",value:function(){this.setState({isSubmitted:!0})}},{key:"handleDelete",value:function(){this.setState({backups:""})}},{key:"componentDidMount",value:function(){if(localStorage.app){var t=JSON.parse(localStorage.app);this.setState({month_days:t.month_days})}}},{key:"componentDidUpdate",value:function(){localStorage.setItem("app",JSON.stringify(this.state))}},{key:"render",value:function(){var t=this;console.log(this.state.date);return Object(i.jsx)(p.a,{children:Object(i.jsxs)(d.d,{children:[Object(i.jsx)(d.b,{exact:!0,path:"/login",component:y}),Object(i.jsx)(d.b,{exact:!0,path:"/signup",component:M}),Object(i.jsxs)(_,{children:[Object(i.jsx)(C,{}),Object(i.jsx)(b.a,{locale:"ja-JP",tileContent:function(e){var s=e.date,i=e.view;return t.getTileContent({date:s,view:i})},value:this.state.date,onClickDay:this.openModal.bind(this)}),Object(i.jsx)(f,{getFormatDate:this.getFormatDate.bind(this),handleChange:this.handleChange.bind(this),setStartHour:this.setStartHour.bind(this),setStartMinute:this.setStartMinute.bind(this),setEndHour:this.setEndHour.bind(this),setEndMinute:this.setEndMinute.bind(this),setTileColor:this.setTileColor.bind(this),closeModal:this.closeModal.bind(this),keepModal:this.keepModal.bind(this),setPlans:this.setPlans.bind(this),handleClose:this.handleClose.bind(this),handleDelete:this.handleDelete.bind(this),inputDelete:this.inputDelete.bind(this),origin:this.state,date:this.date})]})]})})}}]),s}(n.a.Component);s(34);o.a.render(Object(i.jsx)(D,{}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.a5021817.chunk.js.map