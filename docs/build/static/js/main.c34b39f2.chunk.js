(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{20:function(t,e,s){},21:function(t,e,s){"use strict";s.r(e);var a=s(2),i=s(1),n=s.n(i),u=s(10),c=s.n(u),r=s(4),l=s(5),o=s(3),h=s(7),d=s(6),b=s(12),p=s(11),m=function(t){Object(h.a)(s,t);var e=Object(d.a)(s);function s(){return Object(r.a)(this,s),e.apply(this,arguments)}return Object(l.a)(s,[{key:"formatDate",value:function(t){var e=new Date(t);return e.getFullYear()+"\u5e74"+(e.getMonth()+1)+"\u6708"+e.getDate()+"\u65e5"}},{key:"defaultForm",value:function(){if(null!==this.props.backups[4])return this.props.backups[4]}},{key:"render",value:function(){var t;return!1===this.props.isSubmitted&&(t=Object(a.jsx)("form",{onSubmit:this.props.handleSubmit,children:Object(a.jsx)("div",{className:"modal-back",onClick:this.props.keepModal,children:Object(a.jsxs)("div",{className:"modal ",children:[Object(a.jsxs)("div",{className:"modal-top",children:[Object(a.jsx)("button",{className:"close-button",onClick:this.props.closeModal,children:"\xd7"}),Object(a.jsx)("div",{className:"add-plans",children:"\u4e88\u5b9a\u767b\u9332"})]}),Object(a.jsxs)("div",{className:"modal-main",children:[Object(a.jsxs)("p",{children:["\u9078\u629e\u3057\u305f\u65e5 : ",this.formatDate(this.props.selectedDate)]}),Object(a.jsx)("p",{className:"plans-time",children:"\u4e88\u5b9a\u6642\u9593"}),Object(a.jsxs)("div",{className:"time-box",children:[this.props.Start_timeHours(),Object(a.jsx)("p",{children:":"}),this.props.Start_timeMinutes(),Object(a.jsx)("p",{children:"\uff5e"}),this.props.End_timeHours(),Object(a.jsx)("p",{children:":"}),this.props.End_timeMinutes()]}),Object(a.jsx)("p",{className:"plans-content",children:"\u4e88\u5b9a\u306e\u5185\u5bb9"}),Object(a.jsx)("input",Object(p.a)({defaultValue:"",required:!0,onChange:this.props.handleChange},"defaultValue",this.defaultForm())),Object(a.jsx)("input",{className:"submit-btn",type:"submit",value:"\u767b\u9332"})]})]})})})),Object(a.jsx)("div",{children:t})}}]),s}(n.a.Component),j=function(t){Object(h.a)(s,t);var e=Object(d.a)(s);function s(t){var a;return Object(r.a)(this,s),(a=e.call(this,t)).editState=function(t){for(var e=t.target.className,s=t.target.id,i=a.state.month_days[e],n=0;n<i.length;n++){var u=i[n];u.id===s&&(a.setState({backups:[u.backup[0],u.backup[1],u.backup[2],u.backup[3],u.backup[4]]}),a.deleteState(t))}},a.deleteState=function(t){var e=t.target.className,s=t.target.id,i=a.state.month_days[e];a.setState({start_hour:""}),a.setState({start_minute:""}),a.setState({end_hour:""}),a.setState({end_minute:""}),a.setState({formvalues:""});for(var n=0;n<i.length;n++)if(i[n].id===s){a.state.month_days[e].splice(n,1);break}},a.state={isSubmitted:!0,month_days:{},selectedDate:"",backups:"",formvalues:"",start_hour:"",start_minute:"",end_hour:"",end_minute:""},a.handleChange=a.handleChange.bind(Object(o.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(o.a)(a)),a.Start_timeMinutes=a.Start_timeMinutes.bind(Object(o.a)(a)),a.Start_timeHours=a.Start_timeHours.bind(Object(o.a)(a)),a.End_timeHours=a.End_timeHours.bind(Object(o.a)(a)),a.End_timeMinutes=a.End_timeMinutes.bind(Object(o.a)(a)),a.closeModal=a.closeModal.bind(Object(o.a)(a)),a.keepModal=a.keepModal.bind(Object(o.a)(a)),a}return Object(l.a)(s,[{key:"getFormatDate",value:function(t){return"".concat(t.getFullYear()).concat(("0"+(t.getMonth()+1)).slice(-2)).concat(("0"+t.getDate()).slice(-2))}},{key:"openModal",value:function(t,e){"delete"===e.target.title?this.setState({isSubmitted:!0}):this.setState({isSubmitted:!1}),this.setState({selectedDate:t})}},{key:"closeModal",value:function(){this.setState({isSubmitted:!0}),this.setState({backups:""}),this.setState({start_hour:""}),this.setState({start_minute:""}),this.setState({end_hour:""}),this.setState({end_minute:""}),this.setState({formvalues:""})}},{key:"keepModal",value:function(t){"modal-back"===t.target.className&&this.closeModal()}},{key:"getTileContent",value:function(t){var e=this,s=t.date;if("month"!==t.view)return null;var i=this.getFormatDate(s);return Object(a.jsxs)("p",{children:[Object(a.jsx)("br",{}),this.state.month_days[i]&&this.state.month_days[i].map((function(t){return Object(a.jsxs)("div",{className:"plans",children:[Object(a.jsx)("button",{className:i,id:t.id,title:"delete",onClick:e.deleteState,children:"\xd7"}),Object(a.jsx)("button",{className:i,id:t.id,meta:"edit",onClick:e.editState,children:t.text}),Object(a.jsx)("br",{})]})}))]})}},{key:"getUniqueStr",value:function(t){var e=1e3;return t&&(e=t),(new Date).getTime().toString(16)+Math.floor(e*Math.random()).toString(16)}},{key:"handleChange",value:function(t){var e=t.target.value;this.setState({formvalues:e})}},{key:"Start_timeHours",value:function(){for(var t=this,e=[],s=0;s<=23;s++)e.push(Object(a.jsx)("option",{value:s,children:s}));return Object(a.jsx)("select",{defaultValue:this.state.backups[0],onChange:function(e){t.setState({start_hour:e.target.value})},children:e})}},{key:"Start_timeMinutes",value:function(){for(var t=this,e=[],s=0;s<=50;s++){var i=("0"+s).slice(-2);i%10==0&&e.push(Object(a.jsx)("option",{value:i,children:i}))}return Object(a.jsx)("select",{defaultValue:this.state.backups[1],onChange:function(e){t.setState({start_minute:e.target.value})},children:e})}},{key:"End_timeHours",value:function(){var t=this,e=[],s=this.state.start_hour,i=this.state.end_hour,n=this.state.backups[2];(s||this.state.backups[0])&&!s&&this.state.backups[0]&&(s=this.state.backups[0]),!i&&n&&(i=n);for(var u=0;u<=23;u++)u>=s&&(u!=i?e.push(Object(a.jsx)("option",{value:u,children:u})):u==i&&e.push(Object(a.jsx)("option",{value:u,selected:!0,children:u})));return Object(a.jsx)("select",{defaultValue:this.state.backups[2],onChange:function(e){t.setState({end_hour:e.target.value})},children:e})}},{key:"End_timeMinutes",value:function(){var t=this,e=[],s=this.state.start_hour,i=this.state.end_minute,n=this.state.end_hour,u=this.state.backups[0],c=this.state.backups[1],r=this.state.backups[2],l="",o="",h=this.state.start_minute;if(!h&&c?h=c:!h&&c&&(h=0),l=s||u?!s&&u?u:s:"",n||r||l?n||!r||l?n||l!==u?!n&&s?o=s:n&&s>n?o=l:n&&(o=n):o=u:o=r:o="",l!==o){for(var d=0;d<=50;d++)if(d%10==0){var b=("0"+d).slice(-2);d!=i?e.push(Object(a.jsx)("option",{value:b,children:b})):e.push(Object(a.jsx)("option",{value:b,selected:!0,children:b}))}}else if(l===o)for(d=0;d<=50;d++)if(d%10==0&&d>=h){var p=("0"+d).slice(-2);d!=i?e.push(Object(a.jsx)("option",{value:p,children:p})):e.push(Object(a.jsx)("option",{value:p,selected:!0,children:p}))}return Object(a.jsx)("select",{defaultValue:this.state.backups[3],onChange:function(e){return t.setState({end_minute:e.target.value})},children:e})}},{key:"handleSubmit",value:function(){this.setState({isSubmitted:!0});var t=this.getFormatDate(new Date(this.state.selectedDate)),e=this.state.month_days,s=Object.keys(e).indexOf(t),a=this.getUniqueStr();t=Number(t);var i=this.state.start_hour,n=this.state.start_minute,u=this.state.end_hour,c=this.state.end_minute,r=this.state.formvalues;!i&&this.state.backups[0]?i=this.state.backups[0]:i||this.state.backups[0]||(i="0"),!n&&this.state.backups[1]?n=this.state.backups[1]:n||this.state.backups[1]||(n="00"),!u&&this.state.backups[2]?u=this.state.start_hour>this.state.backups[2]?this.state.start_hour:this.state.backups[2]:u||this.state.backups[2]||!i||(u=i),!c&&this.state.backups[3]?c=this.state.backups[3]:c||this.state.backups[3]||!n||(c=n),!r&&this.state.backups[4]?r=this.state.backups[4]:r||this.state.backups[4]||(r=""),u<i&&(u=i),i===u&&n>c&&(c=n);var l=i+":"+n,o=u+":"+c;r||this.state.backups[4]?-1!==s?e[t].push({id:a,text:l+"\uff5e"+o+"\n"+r,backup:[i,n,u,c,r]}):(r&&":"!==l||":"!==o)&&(e[t]=[{id:a,text:l+"\uff5e"+o+"\n"+r,backup:[i,n,u,c,r]}]):alert("\u4e88\u5b9a\u3092\u5165\u529b\u3057\u3066\u4e0b\u3055\u3044"),this.setState({month_days:e}),this.closeModal()}},{key:"componentDidMount",value:function(){if(localStorage.app){var t=JSON.parse(localStorage.app);this.setState({month_days:t.month_days})}}},{key:"componentDidUpdate",value:function(){localStorage.setItem("app",JSON.stringify(this.state))}},{key:"render",value:function(){var t=this;console.log(this.state);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(b.a,{locale:"ja-JP",tileContent:function(e){var s=e.date,a=e.view;return t.getTileContent({date:s,view:a})},value:this.state.date,onClickDay:this.openModal.bind(this)}),Object(a.jsx)(m,{isSubmitted:this.state.isSubmitted,selectedDate:this.state.selectedDate,formvalues:this.state.formvalues,backups:this.state.backups,closeModal:this.closeModal,keepModal:this.keepModal,handleChange:this.handleChange,handleSubmit:this.handleSubmit,deleteState:this.deleteState,Start_timeHours:this.Start_timeHours,Start_timeMinutes:this.Start_timeMinutes,End_timeHours:this.End_timeHours,End_timeMinutes:this.End_timeMinutes})]})}}]),s}(n.a.Component);s(20);c.a.render(Object(a.jsx)(j,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.c34b39f2.chunk.js.map