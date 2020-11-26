(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],[,,function(t,e,n){t.exports={ContactForm:"ContactForm_ContactForm__212Qj",inputForm:"ContactForm_inputForm__2de9Q",titleLabel:"ContactForm_titleLabel__2badp",formButton:"ContactForm_formButton__fthjp"}},,,,,,,function(t,e,n){t.exports={wrapper:"App_wrapper__3tY0G",formButton:"App_formButton__2c67t",phonebookTitle:"App_phonebookTitle__3BW5D",contactsTitle:"App_contactsTitle__2En78"}},,function(t,e,n){t.exports={contactsList:"ContactList_contactsList__eo8FE",contactItem:"ContactList_contactItem__5NCb4"}},function(t,e,n){t.exports={removeBtn:"ContactItem_removeBtn__29UAM",paragraph:"ContactItem_paragraph__1OKz_"}},function(t,e,n){t.exports={filterInput:"Filter_filterInput__AdX91",filterLabel:"Filter_filterLabel__2ZNSx"}},,,,,,,,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),r=n.n(c),o=n(14),s=n.n(o),i=(n(21),n(15)),l=n(3),u=n(4),m=n(6),b=n(5),p=n(9),j=n.n(p),f=n(7),h=n(8),d=n(2),O=n.n(d),_=n(24),v=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).initialState={number:"",name:""},t.state={number:"",name:""},t.handlerInput=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(h.a)({},a,c))},t.submitHandler=function(e){var n=t.state,a=n.name,c=n.number;e.preventDefault();var r={name:a,number:c,id:Object(_.a)()};t.props.addContact(r),t.setState(Object(f.a)({},t.initialState))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.number,n=t.name;return Object(a.jsxs)("form",{className:O.a.ContactForm,onSubmit:this.submitHandler,children:[Object(a.jsxs)("label",{children:[Object(a.jsx)("span",{className:O.a.titleLabel,children:"Name"}),Object(a.jsx)("input",{className:O.a.inputForm,type:"text",value:n,name:"name",placeholder:"Name",onChange:this.handlerInput})]}),Object(a.jsxs)("label",{children:[Object(a.jsx)("span",{className:O.a.titleLabel,children:" Number"}),Object(a.jsx)("input",{className:O.a.inputForm,type:"text",value:e,name:"number",placeholder:"Number",onChange:this.handlerInput})]}),Object(a.jsx)("button",{className:O.a.formButton,type:"submit",children:"Add contact"})]})}}]),n}(c.Component),x=n(11),C=n.n(x),N=n(12),g=n.n(N),y=function(t){var e=t.id,n=t.name,c=t.number,r=t.removeContact;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("p",{className:g.a.paragraph,children:[n,": ",c]}),Object(a.jsx)("button",{className:g.a.removeBtn,type:"button",onClick:function(t){r(e)},children:"Remove"})]})},F=function(t){var e=t.contacts,n=t.removeContact;return Object(a.jsx)("ul",{className:C.a.contactsList,children:e.map((function(t){return Object(a.jsx)("li",{className:C.a.contactItem,children:Object(a.jsx)(y,Object(f.a)(Object(f.a)({},t),{},{removeContact:n}))},t.id)}))})},S=n(13),k=n.n(S),I=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.filter,n=t.filterHandler;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("label",{children:[Object(a.jsx)("span",{className:k.a.filterLabel,children:" Find contacts by name"}),Object(a.jsx)("input",{className:k.a.filterInput,type:"text",name:"filter",value:e,onChange:n,placeholder:"Search"})]})})}}]),n}(c.Component),L=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.addContact=function(e){t.state.contacts.some((function(t){return t.name===e.name}))?alert("".concat(e.name," is already contacts")):t.setState((function(t){return{contacts:[].concat(Object(i.a)(t.contacts),[e])}}))},t.removeContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.filterHandler=function(e){t.setState((function(){return{filter:e.target.value}}))},t.filterContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts");t&&this.setState({contacts:JSON.parse(t)})}},{key:"componentDidUpdate",value:function(){localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,c=this.filterContacts();return Object(a.jsxs)("div",{className:j.a.wrapper,children:[Object(a.jsx)("h2",{className:j.a.phonebookTitle,children:"Phonebook"}),Object(a.jsx)(v,{contacts:e,addContact:this.addContact}),Object(a.jsx)("h3",{className:j.a.contactsTitle,children:"Contacts"}),Object(a.jsx)(I,{filter:n,filterHandler:this.filterHandler}),Object(a.jsx)(F,{contacts:c,removeContact:this.removeContact})]})}}]),n}(c.Component);s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(L,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.6290c627.chunk.js.map