"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[611],{2160:function(t,e,n){n.r(e),n.d(e,{default:function(){return pt}});var i,r=n(9439),o=n(6015),a=n(1413),d=n(2058),s=n(466),u=n(2791),l=n(5645),c=n(6650),g=n(184),h=function(t){var e=t.children;return(0,g.jsx)(c.Z,{sx:{height:"calc(100% - 25px)",borderRadius:"0 0 4px 4px"},children:e})},p=n(5987),f=n(4565),x=n(8105),m=n(2427),w=n(9001),Z=n(9823),v=n(3433),b=n(1663),y=n(8730);!function(t){t[t.Folder=0]="Folder",t[t.TextEditor=1]="TextEditor",t[t.Placeholder=2]="Placeholder"}(i||(i={}));var j,C=(0,b.ZP)((function(t,e){return{getWindow:function(t){var n;return null===(n=e().apps)||void 0===n?void 0:n.find((function(e){return(null===e||void 0===e?void 0:e.id)===t}))},updateWindow:function(e,n){return t((function(t){var i=t.apps,r=null===i||void 0===i?void 0:i.findIndex((function(t){return(null===t||void 0===t?void 0:t.id)===e}));return void 0!==r&&(i[r]=(0,a.Z)((0,a.Z)({},i[r]),n)),{apps:(0,v.Z)(i)}}))},toggleWindowVisibility:function(e,n){return t((function(t){var i=t.apps.findIndex((function(t){return t.id===e})),r=t.apps;return r[i].hidden=void 0!==n?n:!r[i].hidden,{apps:(0,v.Z)(r)}}))},closeWindow:function(e){return t((function(t){var n=t.apps.filter((function(t){return t.id!==e}));return{apps:(0,v.Z)(n)}}))},setApps:function(e){return t((function(t){return{apps:(0,v.Z)(e)}}))},openApp:function(e,n){return t((function(t){var i={id:y.generate(8),x:0,y:0,maximized:!1,hidden:!1,title:n,component:e};return{apps:[].concat((0,v.Z)(t.apps),[i])}}))},apps:[]}})),k=["appId","onMaximizeClick"],S=function(t){var e=t.appId,n=t.onMaximizeClick,i=(0,p.Z)(t,k),r=function(){var t=C((function(t){return t})),e=t.closeWindow,n=t.toggleWindowVisibility;return{handleCloseClick:function(t){return e(t)},handleMinimizeClick:function(t){return n(t,!0)}}}(),d=r.handleCloseClick,l=r.handleMinimizeClick,c=C((function(t){return t.apps.find((function(t){return t.id===e}))}));return(0,u.useEffect)((function(){return document.addEventListener("mouseup",(function(){return document.body.style.cursor="inherit"})),function(){return document.removeEventListener("mouseup",(function(){return document.body.style.cursor="inherit"}))}}),[]),(0,g.jsxs)(o.Z,(0,a.Z)((0,a.Z)({component:s.E.div,sx:{width:"100%",height:25,backgroundColor:"background.default",color:"text.primary",display:"flex",justifyContent:"flex-end",borderRadius:"4px 4px 0 0"},onMouseDown:function(){return document.body.style.cursor="grabbing"},onDoubleClick:n},i),{},{children:[(0,g.jsx)(o.Z,{sx:{flex:1,marginLeft:1,userSelect:"none"},children:(0,g.jsx)(f.Z,{children:null===c||void 0===c?void 0:c.title})}),(0,g.jsxs)(o.Z,{children:[(0,g.jsx)(x.Z,{onClick:function(){return l(e)},children:(0,g.jsx)(m.Z,{sx:{color:"text.primary"}})}),(0,g.jsx)(x.Z,{onClick:n,children:(0,g.jsx)(w.Z,{sx:{color:"text.primary"}})}),(0,g.jsx)(x.Z,{onClick:function(){return d(e)},children:(0,g.jsx)(Z.Z,{sx:{color:"text.primary"}})})]})]}))},D=n(2767),M=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1/0;return Math.min(Math.max(t,e),n)},E=function(t){var e=t.AppComponent,n=(t.osRef,t.appId),i=function(t){var e=C((function(t){return[t.updateWindow,t.getWindow]})),n=(0,r.Z)(e,2),i=n[0],o=n[1],a=(0,D.c)(600),d=(0,D.c)(800),s=(0,D.c)(0),u=(0,D.c)(0),l=(0,D.c)(0),c=(0,D.c)(0);return{x:l,y:c,width:d,height:a,top:s,left:u,resizeBarWidth:10,resizeBarHeight:10,handleBottomDrag:function(t,e){a.set(M(a.get()+e.delta.y,200))},handleLeftDrag:function(t,e){var n=M(d.get()-e.delta.x,200);n!==d.get()&&(d.set(n),u.set(u.get()+e.delta.x))},handleRightDrag:function(t,e){d.set(M(d.get()+e.delta.x,200))},handleTopDrag:function(t,e){t.stopPropagation();var n=M(a.get()-e.delta.y,200);n!==a.get()&&(a.set(n),s.set(s.get()+e.delta.y))},handleTopLeftDrag:function(t,e){t.stopPropagation();var n=M(a.get()-e.delta.y,200);n!==a.get()&&(a.set(n),s.set(s.get()+e.delta.y));var i=M(d.get()-e.delta.x,200);i!==d.get()&&(d.set(i),u.set(u.get()+e.delta.x))},handleTopRightDrag:function(t,e){t.stopPropagation();var n=M(a.get()-e.delta.y,200);n!==a.get()&&(a.set(n),s.set(s.get()+e.delta.y)),d.set(M(d.get()+e.delta.x,200))},handleBottomRightDrag:function(t,e){t.stopPropagation(),d.set(M(d.get()+e.delta.x,200)),a.set(M(a.get()+e.delta.y,200))},handleBottomLeftDrag:function(t,e){t.stopPropagation();var n=M(d.get()-e.delta.x,200);n!==d.get()&&(d.set(n),u.set(u.get()+e.delta.x)),a.set(M(a.get()+e.delta.y,200))},handleMaximizeClick:function(){var e=o(t);null!==e&&void 0!==e&&e.maximized?(d.set(800),a.set(600),u.set(0),s.set(0),l.set(0),c.set(0)):(d.set(window.innerWidth),a.set(window.innerHeight),u.set(0),s.set(0),l.set(0),c.set(0)),i(t,{maximized:!(null!==e&&void 0!==e&&e.maximized)})},initializeWindow:function(){var e=o(t);null!==e&&void 0!==e&&e.maximized&&(d.set(window.innerWidth),a.set(window.innerHeight),u.set(0),s.set(0),l.set(0),c.set(0))}}}(n),c=i.x,p=i.y,f=i.width,x=i.height,m=i.top,w=i.left,Z=i.handleBottomDrag,v=i.handleLeftDrag,b=i.handleRightDrag,y=i.handleTopDrag,j=i.handleTopLeftDrag,k=i.handleTopRightDrag,E=i.handleBottomRightDrag,z=i.handleBottomLeftDrag,I=i.handleMaximizeClick,W=i.initializeWindow,A=(0,d.o)(),R=(0,u.useCallback)((function(t){return A.start(t)}),[]),P=(0,l.V)((function(t){return t.debugMode}));return(0,u.useEffect)(W,[]),(0,g.jsxs)(s.E.div,{id:"".concat(n,"-window"),style:{x:c,y:p,width:f,height:x,top:m,left:w,position:"absolute"},drag:!0,dragListener:!1,dragControls:A,dragTransition:{power:0},initial:{scale:.6},animate:{scale:1},exit:{scale:0},children:[(0,g.jsx)(o.Z,{component:s.E.div,sx:(0,a.Z)((0,a.Z)({width:"100%",height:15},P&&{backgroundColor:"red"}),{},{position:"absolute",bottom:-5,cursor:"n-resize"}),drag:"y",dragElastic:0,dragMomentum:!1,dragConstraints:{top:0,left:0,right:0,bottom:0},onDrag:Z}),(0,g.jsx)(o.Z,{component:s.E.div,sx:(0,a.Z)((0,a.Z)({width:15,height:"100%"},P&&{backgroundColor:"red"}),{},{position:"absolute",right:-5,cursor:"w-resize"}),drag:"x",dragElastic:0,dragMomentum:!1,dragConstraints:{top:0,left:0,right:0,bottom:0},onDrag:b}),(0,g.jsx)(o.Z,{component:s.E.div,sx:(0,a.Z)((0,a.Z)({width:15,height:"100%"},P&&{backgroundColor:"red"}),{},{position:"absolute",left:-5,cursor:"w-resize"}),drag:"x",dragElastic:0,dragMomentum:!1,dragConstraints:{top:0,left:0,right:0,bottom:0},onDrag:v}),(0,g.jsx)(o.Z,{component:s.E.div,sx:(0,a.Z)((0,a.Z)({width:"100%",height:15},P&&{backgroundColor:"red"}),{},{position:"absolute",top:-5,cursor:"n-resize"}),drag:"y",dragElastic:0,dragMomentum:!1,dragConstraints:{top:0,left:0,right:0,bottom:0},onDrag:y}),(0,g.jsx)(o.Z,{component:s.E.div,sx:(0,a.Z)((0,a.Z)({width:15,height:15},P&&{backgroundColor:"blue"}),{},{position:"absolute",top:-5,left:-5,zIndex:500,cursor:"nw-resize"}),drag:!0,dragElastic:0,dragMomentum:!1,dragConstraints:{top:0,left:0,right:0,bottom:0},onDrag:j}),(0,g.jsx)(o.Z,{component:s.E.div,sx:(0,a.Z)((0,a.Z)({width:15,height:15},P&&{backgroundColor:"blue"}),{},{position:"absolute",top:-5,right:-5,zIndex:500,cursor:"ne-resize"}),drag:!0,dragElastic:0,dragMomentum:!1,dragConstraints:{top:0,left:0,right:0,bottom:0},onDrag:k}),(0,g.jsx)(o.Z,{component:s.E.div,sx:(0,a.Z)((0,a.Z)({width:15,height:15},P&&{backgroundColor:"blue"}),{},{position:"absolute",bottom:-5,right:-5,zIndex:500,cursor:"nw-resize"}),drag:!0,dragElastic:0,dragMomentum:!1,dragConstraints:{top:0,left:0,right:0,bottom:0},onDrag:E}),(0,g.jsx)(o.Z,{component:s.E.div,sx:(0,a.Z)((0,a.Z)({width:15,height:15},P&&{backgroundColor:"blue"}),{},{position:"absolute",bottom:-5,left:-5,zIndex:500,cursor:"ne-resize"}),drag:!0,dragElastic:0,dragMomentum:!1,dragConstraints:{top:0,left:0,right:0,bottom:0},onDrag:z}),(0,g.jsx)(S,{onMaximizeClick:I,onPointerDown:R,appId:n}),(0,g.jsx)(h,{children:(0,g.jsx)(e,{})})]})},z=n(3811),I=n(8916),W=n(1535),A=n(4142),R=n(7205),P=n(2055);!function(t){t[t.GroupApps=0]="GroupApps",t[t.ShowAllWhenPossible=1]="ShowAllWhenPossible",t[t.AlwaysShowAll=2]="AlwaysShowAll"}(j||(j={}));var T=(0,b.ZP)((function(t){return{stackMode:j.AlwaysShowAll}})),L=function(){var t=C((function(t){return t})),e=t.apps,n=t.setApps,i=t.toggleWindowVisibility,r=(T((function(t){return t})),(0,A.Z)());return(0,g.jsx)(P.t.Group,{axis:"x",values:e,onReorder:n,style:{display:"flex",listStyle:"none",flex:1},children:e.map((function(t){return(0,g.jsx)(P.t.Item,{value:t,children:(0,g.jsx)(R.Z,{color:"primary",onClick:function(){return i(t.id)},sx:{textTransform:"none"},children:(0,g.jsx)(f.Z,{sx:{color:r.palette.text.primary},children:t.title})})},t.id)}))})},H=n(1563),B=n(4721),G=n(4934),F=function(){var t=(0,G.Z)(),e=t.padHours,n=t.padMinutes,i=t.padMonthDay,r=t.month,a=t.year;return(0,g.jsxs)(o.Z,{id:"dock-right",sx:{color:"#fff",display:"flex",height:"100%"},children:[(0,g.jsx)(x.Z,{sx:{padding:"0 4px"},children:(0,g.jsx)(H.Z,{fontSize:"small"})}),(0,g.jsx)(x.Z,{sx:{padding:"0 4px"},children:(0,g.jsx)(B.Z,{fontSize:"small"})}),(0,g.jsxs)(x.Z,{sx:{display:"flex",flexDirection:"column",padding:"0 12px"},children:[(0,g.jsxs)(o.Z,{children:[e,":",n]}),(0,g.jsxs)(o.Z,{children:[i,"/",r.padValue,"/",a.longValue]})]})]})},V=function(){return(0,g.jsxs)(o.Z,{id:"main-dock",sx:{width:"100%",height:"3em",paddingLeft:0,backgroundColor:"rgba(0, 0, 0, 0.7)",position:"absolute",bottom:0,display:"flex",alignItems:"center"},children:[(0,g.jsx)(o.Z,{children:(0,g.jsx)(z.Z,{"aria-label":"toggle apps",sx:{color:"#fff",borderRadius:2},children:(0,g.jsx)(W.Z,{})})}),(0,g.jsx)(I.Z,{orientation:"vertical",variant:"middle",flexItem:!0}),(0,g.jsx)(L,{}),(0,g.jsx)(F,{})]})},Y=n.p+"static/media/mainBackground.ba09caa5dcaf9f50d6fe.jpeg",X="OS_os__c10Kd",O=function(t){var e=(0,u.useState)({width:window.innerWidth,height:window.innerHeight}),n=(0,r.Z)(e,2),i=n[0],o=n[1];return(0,u.useEffect)((function(){var t=function(){o({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",t),t(),function(){return window.removeEventListener("resize",t)}}),[]),i},_=function(t){var e=t.src;return e?(0,g.jsx)("div",{id:"iframeApp",style:{width:"100%",height:"100%"},children:(0,g.jsx)("iframe",{src:e,width:"100%",height:"100%",style:{border:"none"}})}):null},q=n(7136),J=n(7749),N=n(7394),K=n(8264),U=n(3950),Q=n(2898),$=n(2482),tt=function(){return(0,g.jsx)(o.Z,{sx:{width:200,height:20,backgroundColor:$.Z[800],borderRadius:"6px 6px 0 0",padding:"3px 3px 0 4px"},children:"New Tab"})},et=function(t){var e=t.onSearchConfirm,n=(0,u.useState)(""),i=(0,r.Z)(n,2),a=i[0],d=i[1];return(0,g.jsxs)(o.Z,{sx:{width:"100%"},children:[(0,g.jsx)(tt,{}),(0,g.jsxs)(o.Z,{sx:{width:"100%",backgroundColor:$.Z[800],display:"flex",flexDirection:"row",alignItems:"center"},children:[(0,g.jsx)(z.Z,{children:(0,g.jsx)(N.Z,{})}),(0,g.jsx)(z.Z,{children:(0,g.jsx)(K.Z,{})}),(0,g.jsx)(z.Z,{children:(0,g.jsx)(U.Z,{})}),(0,g.jsx)(q.ZP,{value:a,onChange:function(t){return d(t.currentTarget.value)},onKeyDown:function(t){return"Enter"===t.key&&e(a)},placeholder:"Search Browser or type a URL",sx:{backgroundColor:$.Z[900],margin:.3,borderRadius:5,flex:1,fontSize:14,height:32},startAdornment:(0,g.jsx)(z.Z,{children:(0,g.jsx)(J.Z,{})})}),(0,g.jsx)(z.Z,{children:(0,g.jsx)(Q.Z,{})})]})]})},nt=function(){var t=(0,u.useState)("https://www.google.com/webhp?igu=1"),e=(0,r.Z)(t,2),n=e[0],i=e[1];return(0,g.jsxs)(o.Z,{sx:{width:"100%",height:"100%"},children:[(0,g.jsx)(et,{onSearchConfirm:function(t){return i(t)}}),(0,g.jsx)(_,{src:n})]})};var it=n.p+"static/media/chrome.21d95024f4db641ae2edf465c00c4a0c.svg",rt=n.p+"static/media/setting.757ddf4e91898ed25488.png";var ot=n.p+"static/media/under_construction.a0775cb2abc6f8f855dfc2da4adcea4f.svg",at=function(){return(0,g.jsxs)(o.Z,{sx:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:10},children:[(0,g.jsx)(o.Z,{sx:{backgroundImage:"url(".concat(ot,")"),backgroundSize:"contain",backgroundRepeat:"no-repeat",width:500,height:300}}),(0,g.jsx)("h1",{children:"Em constru\xe7\xe3o"})]})},dt=(0,b.ZP)((function(t,e){return{isGridOccupied:function(t,n,i){return-1!==e().items.findIndex((function(e){return e.id!==t&&e.gridX===n&&e.gridY===i}))},updateItemPosition:function(n,i,r){return t((function(t){var o=t.items,a=o.findIndex((function(t){return t.id===n}));return e().isGridOccupied(n,i,r)||(o[a].gridX=i,o[a].gridY=r),{items:(0,v.Z)(o)}}))},items:[{id:1,icon:it,gridX:0,gridY:0,title:"Google Chrome",appComponent:nt},{id:2,icon:rt,gridX:0,gridY:1,title:"Configura\xe7\xf5es",appComponent:at}]}})),st=function(t,e){for(var n=[],i=t/e,r=0;r<e+1;r++)n.push(i*r);return n},ut=n(2065),lt=n(4549),ct=function(t,e){return e.reduce((function(e,n){return Math.abs(n-t)>Math.abs(e-t)||n>t?e:n}))},gt=function(t){var e=t.id,n=t.title,i=t.icon,o=t.widthSteps,d=t.heightSteps,l=t.gridWidth,c=t.gridHeight,h=t.initialGridX,p=t.initialGridY,f=t.component,x=(0,u.useState)(!1),m=(0,r.Z)(x,2),w=m[0],Z=m[1],v=(0,u.useState)("transparent"),b=(0,r.Z)(v,2),y=b[0],j=b[1],k=(0,u.useState)([ct(h*l,o)+(.5*l-25),ct(p*c,d)+(.5*c-25)]),S=(0,r.Z)(k,2),M=(0,r.Z)(S[0],2),E=M[0],z=M[1],I=S[1],W=(0,A.Z)(),R=(0,D.c)(h*l),P=(0,D.c)(p*c),T=(0,D.c)(h*l),L=(0,D.c)(p*c),H=dt((function(t){return[t.updateItemPosition,t.isGridOccupied]})),B=(0,r.Z)(H,2),G=B[0],F=B[1],V=C((function(t){return t.openApp}));return(0,u.useEffect)((function(){return j((0,ut.Fq)(W.palette.primary.main,.2))}),[]),(0,u.useEffect)((function(){if(!w&&o&&d){var t=Math.floor(R.get()/l),n=Math.floor(P.get()/c);if(F(e,t,n))R.set(E),P.set(z);else{var i=ct(R.get(),o)+(.5*l-25),r=ct(P.get(),d)+(.5*c-25);R.set(i),P.set(r),I([i,r])}}}),[w,o,d]),(0,g.jsxs)("div",{id:"draggable-item-".concat(e),onDoubleClick:function(){return V(f,n)},children:[(0,g.jsx)(lt.M,{children:w&&(0,g.jsx)(s.E.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},transition:{x:{duration:10},opacity:{duration:.2}},style:{x:T,y:L,width:l,height:c,position:"absolute",backgroundColor:y,borderRadius:"16px",boxShadow:"0 4px 30px rgba(0, 0, 0, 0.1)",backdropFilter:"blur(7px)",border:"1px solid rgba(255, 255, console.log()255, 0.03)"}})}),(0,g.jsx)(s.E.div,{style:(0,a.Z)((0,a.Z)({position:"absolute",width:50,height:50},i?{backgroundImage:"url(".concat(i,")")}:{backgroundColor:"white"}),{},{backgroundSize:"cover",borderRadius:"5px",display:"flex",alignItems:"center",justifyContent:"center",x:R,y:P}),drag:!0,dragTransition:{power:0},whileHover:{scale:1.1},whileTap:{scale:.9},onDragStart:function(){return Z(!0)},onDragEnd:function(){var t=Math.floor(R.get()/l),n=Math.floor(P.get()/c);G(e,t,n),Z(!1)},onDrag:function(){var t=ct(R.get(),o),n=ct(P.get(),d);if(T.get()!==T.getPrevious()||L.get()!==L.getPrevious()){var i=Math.floor(R.get()/l),r=Math.floor(P.get()/c);F(e,i,r)?j((0,ut.Fq)(W.palette.warning.main,.2)):j((0,ut.Fq)(W.palette.primary.main,.2))}T.set(t),L.set(n)}}),(0,g.jsx)(s.E.div,{style:{x:R,y:P,color:"white",width:50,textAlign:"center",userSelect:"none",position:"absolute",marginTop:"3.5em",wordBreak:"break-all"},children:(0,g.jsx)(s.E.p,{children:n})})]})},ht=function(){var t=dt((function(t){return t.items})),e=O(),n=e.width,i=e.height,r={width:window.innerWidth/Math.floor(window.innerWidth/150),height:window.innerHeight/Math.floor(window.innerHeight/140)},a=r.width,d=r.height;return(0,g.jsx)(o.Z,{sx:{width:"100%",height:"100%"},children:function(){var e=st(n,n/a),r=st(i,i/d);return t.map((function(t){return(0,g.jsx)(gt,{id:t.id,icon:t.icon,title:t.title,component:t.appComponent,widthSteps:e,heightSteps:r,gridWidth:a,gridHeight:d,initialGridX:t.gridX,initialGridY:t.gridY},t.id)}))}()})},pt=function(){var t=(0,u.useState)(null),e=(0,r.Z)(t,2),n=(e[0],e[1]),i=(0,u.useRef)(null),a=C((function(t){return t.apps}));return(0,u.useEffect)((function(){return n(i.current)}),[]),(0,g.jsxs)(o.Z,{className:X,ref:i,sx:{width:"100%",height:"100%",backgroundImage:"url(".concat(Y,")"),backgroundSize:"cover"},onContextMenu:function(){return console.log("teste")},children:[(0,g.jsx)(ht,{}),(0,g.jsx)(lt.M,{children:null===a||void 0===a?void 0:a.map((function(t){return!t.hidden&&(0,g.jsx)(E,{osRef:i,x:t.x,y:t.y,appId:t.id,"data-hidden":t.hidden,AppComponent:t.component},t.id)}))}),(0,g.jsx)(V,{})]})}},4934:function(t,e,n){var i=n(9439),r=n(2791),o=["January","February","March","April","May","June","July","August","September","October","November","December"],a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturnday"];e.Z=function(t){var e=(0,r.useState)(!1),n=(0,i.Z)(e,2),d=(n[0],n[1]);(0,r.useEffect)((function(){var e=setInterval((function(){d((function(t){return!t}))}),t||1e3);return function(){return clearInterval(e)}}),[]);var s=new Date(Date.now());return{date:s,padSeconds:String(s.getSeconds()).padStart(2,"0"),padMinutes:String(s.getMinutes()).padStart(2,"0"),padHours:String(s.getHours()).padStart(2,"0"),month:{name:o[s.getMonth()],padValue:String(s.getMonth()+1).padStart(2,"0")},year:{longValue:s.getFullYear()},padMonthDay:String(s.getDate()).padStart(2,"0"),weekDay:a[s.getDay()]}}}}]);
//# sourceMappingURL=611.3bbde690.chunk.js.map