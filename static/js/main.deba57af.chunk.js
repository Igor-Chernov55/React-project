(this["webpackJsonpway-of-samurai"]=this["webpackJsonpway-of-samurai"]||[]).push([[0],{12:function(e,t,s){e.exports={container:"User_container__2K3wD",imageAvatar:"User_imageAvatar__1Dfso",blockAvatar:"User_blockAvatar__27GQq",blockInfoText:"User_blockInfoText__P917n",blockUserInfo:"User_blockUserInfo__IvbOU",containerPagination:"User_containerPagination__tvcpp",numBold:"User_numBold__2z-iO"}},14:function(e,t,s){e.exports={Dialogs:"Dialogs_Dialogs__1zNzL",dialogsBlock:"Dialogs_dialogsBlock__3Xlua",dialogsItem:"Dialogs_dialogsItem__Mq21E",dialogsLink:"Dialogs_dialogsLink__3xT3z",dialogsMessage:"Dialogs_dialogsMessage__1OtQU"}},15:function(e,t,s){e.exports={headerMain:"Header_headerMain__2YE4j",headerItem:"Header_headerItem__28ubK",headerItem__link:"Header_headerItem__link__1zqlV",headerItem__href:"Header_headerItem__href__3Pxuc",imageMain:"Header_imageMain__B9xEM"}},25:function(e,t,s){e.exports={Main:"App_Main__2OlMw",Container:"App_Container__2Ukex",ContentBlock:"App_ContentBlock__12Wct"}},26:function(e,t,s){e.exports={item:"Sider_item__2u-2W",item__link:"Sider_item__link__3vq_X",item__href:"Sider_item__href__icVl8"}},30:function(e,t,s){e.exports={imageAvatar:"Posts_imageAvatar__3p2TM",postBlock:"Posts_postBlock__1iJpJ"}},44:function(e,t,s){e.exports={infoBlock:"Profile_infoBlock__1piiE"}},46:function(e,t,s){},75:function(e,t,s){"use strict";s.r(t);var a=s(1),n=s.n(a),i=(s(46),s(9)),r=s(25),o=s.n(r),c=s(26),l=s.n(c),u=s(0),d={siderMenu:[{id:1,name:"Profile",forRoutes:"/profile"},{id:2,name:"Dialogs",forRoutes:"/dialogs"},{id:3,name:"Users",forRoutes:"/users"},{id:4,name:"News",forRoutes:"/news"},{id:5,name:"Music",forRoutes:"/music"}]},j=function(){var e=d.siderMenu.map((function(e){return Object(u.jsx)("li",{className:l.a.item__link,children:Object(u.jsx)(i.b,{className:l.a.item__href,to:e.forRoutes,children:e.name})},e.id)}));return Object(u.jsx)("nav",{children:Object(u.jsx)("ul",{className:l.a.item,children:e})})},g=function(){return Object(u.jsx)("footer",{children:"Footer"})},h=s(3),f=s(14),m=s.n(f),b=function(e){return Object(u.jsx)("li",{className:m.a.dialogsLink,children:e.name})},p=function(e){return Object(u.jsx)("div",{children:e.message})},O=function(e){return Object(u.jsx)("div",{className:m.a.Dialogs,children:Object(u.jsxs)("div",{className:m.a.dialogsBlock,children:[Object(u.jsx)("ul",{className:m.a.dialogsItem,children:e.dialogsPage.dialogs.map((function(e){return Object(u.jsx)(b,{id:e.id,name:e.name},e.id)}))}),Object(u.jsx)("div",{className:m.a.dialogsMessage,children:Object(u.jsxs)("div",{children:[e.dialogsPage.message.map((function(e){return Object(u.jsx)(p,{id:e.id,img:e.img,message:e.message},e.id)})),Object(u.jsx)("textarea",{value:e.dialogsPage.newMessage,onChange:function(t){e.onChangeMessage(t.currentTarget.value)},name:"text"}),Object(u.jsx)("button",{onClick:e.addMessage,children:"send"})]})})]})})},_=s(2),x={dialogs:[{id:1,name:"Pasha"},{id:2,name:"Masha"},{id:3,name:"Dima"},{id:4,name:"Sasha"}],message:[{id:1,img:"src",message:"text1"},{id:2,img:"src",message:"text2"},{id:3,img:"src",message:"text3"}],newMessage:""},v=s(10),w=Object(v.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{addMessage:function(){e({type:"ADD-MESSAGE"})},onChangeMessage:function(t){e(function(e){return{type:"CHANGE-MESSAGE",message:e}}(t))}}}))(O),k=s(30),P=s.n(k),C=function(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:"User"}),Object(u.jsxs)("div",{className:P.a.postBlock,children:[Object(u.jsx)("img",{className:P.a.imageAvatar,src:e.img}),Object(u.jsx)("p",{children:e.name})]}),Object(u.jsxs)("span",{children:["likes ",e.likes]})]})})},S=s(44),M=s.n(S),U={newPostMessage:"",message:[],posts:[{id:1,name:"post1",img:"https://picsum.photos/200",likes:1}],profile:null},E=s(11),I=s.n(E),A=function(e){var t=Object(v.d)((function(e){return e.profilePage})),s=Object(v.c)(),n=Object(h.g)().users;Object(a.useEffect)((function(){I()({method:"get",url:"https://social-network.samuraijs.com/api/1.0/profile/"+n}).then((function(e){s({type:"SET-USERS",profile:e.data.items})}))}),[n]);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:M.a.infoBlock,children:Object(u.jsx)("div",{children:t.profile})}),Object(u.jsxs)("div",{children:["My posts",Object(u.jsxs)("div",{children:[Object(u.jsx)("textarea",{value:t.newPostMessage,onChange:function(t){e.onChangePost(t.currentTarget.value)},name:"textPost"}),Object(u.jsx)("button",{onClick:function(){s({type:"ADD-POST"}),localStorage.setItem("value",e.profilePage.newPostMessage)},children:"\u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c"})]}),t.posts.map((function(e){return Object(u.jsx)(C,{id:e.id,name:e.name,img:e.img,likes:e.likes},e.id)}))]})]})},N=s(21),L=s(22),D=s(24),y=s(23),F=s(15),R=s.n(F),T=function(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("li",{className:R.a.headerItem__link,children:Object(u.jsx)("a",{className:R.a.headerItem__href,href:"",children:e.name})})})},B={header:[{id:1,name:"About us"},{id:2,name:"Contacts"},{id:3,name:"Map"}]},G=function(e){var t=B.header.map((function(e){return Object(u.jsx)(T,{id:e.id,name:e.name},e.id)}));return Object(u.jsxs)("header",{className:R.a.headerMain,children:[Object(u.jsx)(i.b,{to:"/",children:Object(u.jsx)("img",{className:R.a.imageMain,src:"https://media.istockphoto.com/vectors/initial-letter-o-swoosh-orbit-logo-designs-vector-o-initial-logo-for-vector-id1256830588?k=20&m=1256830588&s=170667a&w=0&h=GmfquF0BgJwSJVlLRMQE8sTGo266tOP-Aoa5XewVHOo=",alt:"logo"})}),Object(u.jsxs)("nav",{children:[Object(u.jsx)("div",{children:e.isAuth?e.login:Object(u.jsx)(i.b,{to:"/profile",children:"login"})}),Object(u.jsx)("ul",{className:R.a.headerItem,children:t})]})]})},H=function(e){Object(D.a)(s,e);var t=Object(y.a)(s);function s(){return Object(N.a)(this,s),t.apply(this,arguments)}return Object(L.a)(s,[{key:"componentDidMount",value:function(){var e=this;I.a.get("https://social-network.samuraijs.com/api/1.0/auth/me").then((function(t){if(0===t.data.resultCode){var s=t.data.data,a=s.id,n=s.login,i=s.email;e.props.authUser(a,n,i)}}))}},{key:"render",value:function(){return Object(u.jsx)(G,Object(_.a)({},this.props))}}]),s}(n.a.Component),z=(Object(v.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{authUser:function(e,t,s){return{type:"AUTH-USER",data:{id:e,email:t,login:s}}}})(G),s(31)),W={users:[],pageSize:5,totalUsersCounter:100,firstCount:1,isLoader:!1,isFetching:[]},J=s(12),K=s.n(J),q=function(e){for(var t=Math.ceil(e.totalUsersCounter/e.pageSize),s=[],a=1;a<t;a++)s.push(a);console.log(e.loader);return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:K.a.containerPagination,children:[!!e.loader&&Object(u.jsx)("div",{children:Object(u.jsx)("img",{src:"https://cdn.dribbble.com/users/1787505/screenshots/7300251/media/a351d9e0236c03a539181b95faced9e0.gif",alt:"loaderImage"})}),s.map((function(t){return Object(u.jsx)("span",{onClick:function(){var s;s=t,e.firstCountHandler(s)},className:e.usersPage.firstCount===t?K.a.numBold:"",children:t})}))]}),e.usersPage.users.map((function(t){return Object(u.jsxs)("div",{className:K.a.container,children:[Object(u.jsxs)("div",{className:K.a.blockAvatar,children:[Object(u.jsx)(i.b,{to:"/profile/".concat(t.id),children:Object(u.jsx)("img",{className:K.a.imageAvatar,src:t.photos.large,alt:"avatar"})}),Object(u.jsx)("div",{children:t.followed?Object(u.jsx)("button",{disabled:e.isFetching.some((function(e){return e===t.id})),onClick:function(){e.followInProgress(!0,t.id),I.a.delete("https://social-network.samuraijs.com/api/1.0/follow/".concat(t.id),{withCredentials:!0,headers:{"API-KEY":"78b9fdb7-2cb3-4cc9-90a9-7547abd3a933"}}).then((function(s){0===s.data.resultCode&&e.unfollow(t.id),e.followInProgress(!1,t.id)}))},children:"unFollow"}):Object(u.jsx)("button",{disabled:e.isFetching.some((function(e){return e===t.id})),onClick:function(){I.a.post("https://social-network.samuraijs.com/api/1.0/follow/".concat(t.id),{},{withCredentials:!0,headers:{"API-KEY":"78b9fdb7-2cb3-4cc9-90a9-7547abd3a933"}}).then((function(s){0==s.data.resultCode&&e.follow(t.id)}))},children:"Follow"})})]}),Object(u.jsxs)("div",{className:K.a.blockUserInfo,children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:Object(u.jsx)("div",{children:t.name})}),Object(u.jsx)("div",{className:K.a.blockInfoText,children:t.status})]}),Object(u.jsx)("div",{})]})]})}))]})},V=I.a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"78b9fdb7-2cb3-4cc9-90a9-7547abd3a933"}}),Y=function(e,t){return V.get("users?page=".concat(e,"&count=").concat(t),{withCredentials:!0}).then((function(e){return e.data}))},X=function(e){Object(D.a)(s,e);var t=Object(y.a)(s);function s(){var e;Object(N.a)(this,s);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).firstCountHandler=function(t){e.props.isLoader(!0),e.props.setCurrentUsers(t),Y(t,e.props.pageSize).then((function(t){e.props.setUsers(t.items),e.props.isLoader(!1)}))},e}return Object(L.a)(s,[{key:"componentDidMount",value:function(){var e=this;Y(this.props.firstCount,this.props.pageSize).then((function(t){return e.props.setUsers(t.items)}))}},{key:"render",value:function(){return Object(u.jsx)(q,{usersPage:this.props.usersPage,pageSize:this.props.pageSize,totalUsersCounter:this.props.totalUsersCounter,firstCount:this.props.firstCount,firstCountHandler:this.firstCountHandler,loader:this.props.Loader,follow:this.props.follow,unfollow:this.props.unfollow,followInProgress:this.props.followInProgress,isFetching:this.props.isFetching})}}]),s}(n.a.Component),Q=Object(v.b)((function(e){return{usersPage:e.usersPage,pageSize:e.usersPage.pageSize,totalUsersCounter:e.usersPage.totalUsersCounter,firstCount:e.usersPage.firstCount,Loader:e.usersPage.isLoader,isFetching:e.usersPage.isFetching}}),{follow:function(e){return{type:"FOLLOW",userId:e}},unfollow:function(e){return{type:"UNFOLLOW",userId:e}},setUsers:function(e){return{type:"SET_USERS",users:e}},setCurrentUsers:function(e){return{type:"SET_USERS_CURRENT_PAGE",firstCount:e}},isLoader:function(e){return{type:"IS_LOADER",isLoader:e}},followInProgress:function(e,t){return{type:"FOLLOW-UN-PROGRESS",isFetching:e,userId:t}}})(X);var Z=function(){return Object(u.jsx)("div",{className:o.a.Main,children:Object(u.jsxs)("div",{className:o.a.Container,children:[Object(u.jsx)(H,{}),Object(u.jsxs)("div",{className:o.a.ContentBlock,children:[Object(u.jsx)(j,{}),Object(u.jsxs)(h.d,{children:[Object(u.jsx)(h.b,{path:"/profile/:users?",render:function(){return Object(u.jsx)(A,{})}}),Object(u.jsx)(h.b,{path:"/dialogs",render:function(){return Object(u.jsx)(w,{})}}),Object(u.jsx)(h.b,{path:"/users",render:function(){return Object(u.jsx)(Q,{})}}),Object(u.jsx)(h.a,{from:"/",to:"/profile"})]})]}),Object(u.jsx)(g,{})]})})},$=s(32),ee=Object($.a)({profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0,s=Object(_.a)({},e);switch(t.type){case"ADD-POST":var a={id:(new Date).getTime(),name:e.newPostMessage,img:"https://avavatar.ru/images/avatars/1/avatar_jV2wd3K7Xo6YegC2.jpg",likes:2};return s.posts.push(a),s.newPostMessage="",s;case"CHANGE-POST":return s.newPostMessage=t.post,s;case"SET-USERS":return Object(_.a)(Object(_.a)({},e),{},{profile:t.profile});default:return s}},dialogsPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0,s=Object(_.a)({},e);switch(t.type){case"ADD-MESSAGE":var a={id:(new Date).getTime(),img:"https://avavatar.ru/image/4399",message:s.newMessage};return s.message.unshift(a),s.newMessage="",s;case"CHANGE-MESSAGE":return s.newMessage=t.message,s;default:return s}},usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(_.a)(Object(_.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(_.a)(Object(_.a)({},e),{},{followed:!0}):e}))});case"UNFOLLOW":return Object(_.a)(Object(_.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(_.a)(Object(_.a)({},e),{},{followed:!1}):e}))});case"SET_USERS":return Object(_.a)(Object(_.a)({},e),{},{users:Object(z.a)(t.users)});case"SET_USERS_CURRENT_PAGE":return Object(_.a)(Object(_.a)({},e),{},{firstCount:t.firstCount});case"IS_LOADER":return Object(_.a)(Object(_.a)({},e),{},{isLoader:t.isLoader});case"FOLLOW-UN-PROGRESS":return Object(_.a)(Object(_.a)({},e),{},{isFetching:t.isFetching?[].concat(Object(z.a)(e.isFetching),[t.userId]):e.isFetching.filter((function(e){return e!==t.userId}))});default:return e}}}),te=Object($.b)(ee),se=s(20);s.n(se).a.render(Object(u.jsx)(i.a,{children:Object(u.jsx)(v.a,{store:te,children:Object(u.jsx)(Z,{})})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.deba57af.chunk.js.map