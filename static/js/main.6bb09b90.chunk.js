(this["webpackJsonpway-of-samurai"]=this["webpackJsonpway-of-samurai"]||[]).push([[0],{11:function(e,t,s){e.exports={headerMain:"Header_headerMain__2YE4j",headerItem:"Header_headerItem__28ubK",headerItem__link:"Header_headerItem__link__1zqlV",headerItem__href:"Header_headerItem__href__3Pxuc",imageMain:"Header_imageMain__B9xEM"}},13:function(e,t,s){e.exports={Dialogs:"Dialogs_Dialogs__1zNzL",dialogsBlock:"Dialogs_dialogsBlock__3Xlua",dialogsItem:"Dialogs_dialogsItem__Mq21E",dialogsLink:"Dialogs_dialogsLink__3xT3z",dialogsMessage:"Dialogs_dialogsMessage__1OtQU"}},15:function(e,t,s){e.exports={container:"User_container__2K3wD",imageAvatar:"User_imageAvatar__1Dfso",blockAvatar:"User_blockAvatar__27GQq",blockInfoText:"User_blockInfoText__P917n",blockUserInfo:"User_blockUserInfo__IvbOU"}},20:function(e,t,s){e.exports={Main:"App_Main__2OlMw",Container:"App_Container__2Ukex",ContentBlock:"App_ContentBlock__12Wct"}},21:function(e,t,s){e.exports={item:"Sider_item__2u-2W",item__link:"Sider_item__link__3vq_X",item__href:"Sider_item__href__icVl8"}},25:function(e,t,s){e.exports={imageAvatar:"Posts_imageAvatar__3p2TM",postBlock:"Posts_postBlock__1iJpJ"}},39:function(e,t,s){e.exports={infoBlock:"Profile_infoBlock__1piiE"}},42:function(e,t,s){},71:function(e,t,s){"use strict";s.r(t),s.d(t,"renderTree",(function(){return Q}));s(0),s(42);var a=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,72)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;s(e),a(e),n(e),i(e),r(e)}))},n=s(4),i={newPostMessage:"",message:[],posts:[{id:1,name:"post1",img:"https://picsum.photos/200",likes:1}]},r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0,s=Object(n.a)({},e);switch(t.type){case"ADD-POST":var a={id:(new Date).getTime(),name:e.newPostMessage,img:"https://avavatar.ru/images/avatars/1/avatar_jV2wd3K7Xo6YegC2.jpg",likes:2};return s.posts.push(a),s.newPostMessage="",s;case"CHANGE-POST":return s.newPostMessage=t.post,s;default:return s}},c={_State:{dialogsPage:{newMessage:"",dialogs:[{id:1,name:"Pasha"},{id:2,name:"Masha"},{id:3,name:"Dima"},{id:4,name:"Sasha"}]},profilePage:{newPostMessage:"",message:[{id:1,img:"src",message:"text1"},{id:2,img:"src",message:"text2"},{id:3,img:"src",message:"text3"}],posts:[{id:1,name:"post1",img:"https://picsum.photos/200",likes:1}]},sideBar:{siderMenu:[{id:1,name:"Profile"},{id:2,name:"Dialogs"},{id:3,name:"Users"},{id:4,name:"News"},{id:5,name:"Music"}]},headerTopMenu:{header:[{id:1,name:"About us"},{id:2,name:"Contacts"},{id:3,name:"Map"}]}},onChange:function(){console.log("state Changed ")},subscribe:function(e){this.onChange=e},getState:function(){return this._State},dispatch:function(e){r(this._State.profilePage,e),this.onChange(this._State)}},o=s(19),d=s.n(o),l=s(10),u=s(20),g=s.n(u),j=s(11),m=s.n(j),h=s(1),b=function(e){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("li",{className:m.a.headerItem__link,children:Object(h.jsx)("a",{className:m.a.headerItem__href,href:"",children:e.name})})})},f=function(e){var t=e.header.map((function(e){return Object(h.jsx)(b,{id:e.id,name:e.name},e.id)}));return Object(h.jsxs)("header",{className:m.a.headerMain,children:[Object(h.jsx)(l.b,{to:"/",children:Object(h.jsx)("img",{className:m.a.imageMain,src:"https://media.istockphoto.com/vectors/initial-letter-o-swoosh-orbit-logo-designs-vector-o-initial-logo-for-vector-id1256830588?k=20&m=1256830588&s=170667a&w=0&h=GmfquF0BgJwSJVlLRMQE8sTGo266tOP-Aoa5XewVHOo=",alt:"logo"})}),Object(h.jsx)("nav",{children:Object(h.jsx)("ul",{className:m.a.headerItem,children:t})})]})},O=s(21),_=s.n(O),x=function(e){var t=e.siderMenu.map((function(e){return Object(h.jsx)("li",{className:_.a.item__link,children:Object(h.jsx)(l.b,{className:_.a.item__href,to:e.name,children:e.name})},e.id)}));return Object(h.jsx)("nav",{children:Object(h.jsx)("ul",{className:_.a.item,children:t})})},p=function(){return Object(h.jsx)("footer",{children:"Footer"})},v=s(2),M=s(13),P=s.n(M),k=function(e){return Object(h.jsx)("li",{className:P.a.dialogsLink,children:e.name})},w=function(e){return Object(h.jsx)("div",{children:e.message})},N=function(e){return Object(h.jsx)("div",{className:P.a.Dialogs,children:Object(h.jsxs)("div",{className:P.a.dialogsBlock,children:[Object(h.jsx)("ul",{className:P.a.dialogsItem,children:e.dialogsPage.dialogs.map((function(e){return Object(h.jsx)(k,{id:e.id,name:e.name},e.id)}))}),Object(h.jsx)("div",{className:P.a.dialogsMessage,children:Object(h.jsxs)("div",{children:[e.dialogsPage.message.map((function(e){return Object(h.jsx)(w,{id:e.id,img:e.img,message:e.message},e.id)})),Object(h.jsx)("textarea",{value:e.dialogsPage.newMessage,onChange:function(t){e.onChangeMessage(t.currentTarget.value)},name:"text"}),Object(h.jsx)("button",{onClick:e.addMessage,children:"send"})]})})]})})},S={dialogs:[{id:1,name:"Pasha"},{id:2,name:"Masha"},{id:3,name:"Dima"},{id:4,name:"Sasha"}],message:[{id:1,img:"src",message:"text1"},{id:2,img:"src",message:"text2"},{id:3,img:"src",message:"text3"}],newMessage:""},C=s(9),A=Object(C.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{addMessage:function(){e({type:"ADD-MESSAGE"})},onChangeMessage:function(t){e(function(e){return{type:"CHANGE-MESSAGE",message:e}}(t))}}}))(N),I=s(25),D=s.n(I),T=function(e){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{children:"User"}),Object(h.jsxs)("div",{className:D.a.postBlock,children:[Object(h.jsx)("img",{className:D.a.imageAvatar,src:e.img}),Object(h.jsx)("p",{children:e.name})]}),Object(h.jsxs)("span",{children:["likes ",e.likes]})]})})},E=s(39),B=s.n(E),U=Object(C.b)((function(e){return{profilePage:e.profilePage}}),(function(e){return{addPost:function(){e({type:"ADD-POST"})},onChangePost:function(t){e({type:"CHANGE-POST",post:t})}}}))((function(e){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:B.a.infoBlock,children:Object(h.jsx)("div",{children:"Avatar"})}),Object(h.jsxs)("div",{children:["My posts",Object(h.jsxs)("div",{children:[Object(h.jsx)("textarea",{value:e.profilePage.newPostMessage,onChange:function(t){e.onChangePost(t.currentTarget.value)},name:"textPost"}),Object(h.jsx)("button",{onClick:function(){e.addPost(),localStorage.setItem("value",e.profilePage.newPostMessage)},children:"\u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c"})]}),e.profilePage.posts.map((function(e){return Object(h.jsx)(T,{id:e.id,name:e.name,img:e.img,likes:e.likes},e.id)}))]})]})})),y=s(15),L=s.n(y),F=s(40),G=s.n(F),H=function(e){return Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{onClick:function(){0===e.usersPage.users.length&&G()({method:"get",url:"https://social-network.samuraijs.com/api/1.0/users"}).then((function(t){e.setUsers(t.data.items)}))},children:"setUsers"}),e.usersPage.users.map((function(e){return Object(h.jsxs)("div",{className:L.a.container,children:[Object(h.jsxs)("div",{className:L.a.blockAvatar,children:[Object(h.jsx)("img",{className:L.a.imageAvatar,src:e.text,alt:"avatar"}),Object(h.jsx)("button",{children:"follow"})]}),Object(h.jsxs)("div",{className:L.a.blockUserInfo,children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:Object(h.jsx)("div",{children:e.userName})}),Object(h.jsx)("div",{className:L.a.blockInfoText,children:e.text})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:"users.location.country"}),Object(h.jsx)("div",{children:"users.location.city"})]})]})]})}))]})},J=s(26),W={users:[]},q=Object(C.b)((function(e){return{usersPage:e.usersPage}}),(function(e){return{follow:function(t){e(function(e){return{type:"FOLLOW",userId:e}}(t))},unfollow:function(t){e(function(e){return{type:"UNFOLLOW",userId:e}}(t))},setUsers:function(t){e(function(e){return{type:"SET_USERS",users:e}}(t))}}}))(H);var V=function(e){return Object(h.jsx)(v.c,{children:Object(h.jsx)("div",{className:g.a.Main,children:Object(h.jsxs)("div",{className:g.a.Container,children:[Object(h.jsx)(f,{header:e.headerTopMenu.header}),Object(h.jsxs)("div",{className:g.a.ContentBlock,children:[Object(h.jsx)(x,{siderMenu:e.sideBar.siderMenu}),Object(h.jsx)(v.a,{exact:!0,path:["/","/profile"],render:function(){return Object(h.jsx)(U,{})}}),Object(h.jsx)(v.a,{exact:!0,path:"/dialogs",render:function(){return Object(h.jsx)(A,{})}}),Object(h.jsx)(v.a,{exact:!0,path:"/users",render:function(){return Object(h.jsx)(q,{})}})]}),Object(h.jsx)(p,{})]})})})},z=s(27),X=Object(z.a)({profilePage:r,dialogsPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0,s=Object(n.a)({},e);switch(t.type){case"ADD-MESSAGE":var a={id:(new Date).getTime(),img:"https://avavatar.ru/image/4399",message:s.newMessage};return s.message.push(a),s.newMessage="",s;case"CHANGE-MESSAGE":return s.newMessage=t.message,s;default:return s}},usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(n.a)(Object(n.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(n.a)(Object(n.a)({},e),{},{followed:!0}):e}))});case"UNFOLLOW":return Object(n.a)(Object(n.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(n.a)(Object(n.a)({},e),{},{followed:!1}):e}))});case"SET_USERS":return Object(n.a)(Object(n.a)({},e),{},{users:[].concat(Object(J.a)(e.users),Object(J.a)(t.users))});default:return e}}}),K=Object(z.b)(X),Q=function(e){d.a.render(Object(h.jsx)(l.a,{children:Object(h.jsx)(C.a,{store:K,children:Object(h.jsx)(V,{sideBar:e.sideBar,profilePage:e.profilePage,headerTopMenu:e.headerTopMenu,dialogsPage:e.dialogsPage,dispatch:c.dispatch.bind(c)})})}),document.getElementById("root"))};Q(c.getState()),c.subscribe((function(){var e=c.getState();Q(e)})),a()}},[[71,1,2]]]);
//# sourceMappingURL=main.6bb09b90.chunk.js.map