"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[633],{4633:function(r,e,n){n.r(e),n.d(e,{default:function(){return $}});var t=n(9439),a=n(6015),o=n(168),i=n(3366),l=n(7462),s=n(2791),c=n(8182),u=n(4419),f=n(2554),d=n(2065),b=n(9853),m=n(4142),v=n(6863),h=n(5873),p=n(5878),g=n(1217);function x(r){return(0,g.Z)("MuiLinearProgress",r)}(0,p.Z)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);var y,Z,w,C,j,S,k,P,I,M,z,B,L=n(184),q=["className","color","value","valueBuffer","variant"],F=(0,f.F4)(k||(k=y||(y=(0,o.Z)(["\n  0% {\n    left: -35%;\n    right: 100%;\n  }\n\n  60% {\n    left: 100%;\n    right: -90%;\n  }\n\n  100% {\n    left: 100%;\n    right: -90%;\n  }\n"])))),N=(0,f.F4)(P||(P=Z||(Z=(0,o.Z)(["\n  0% {\n    left: -200%;\n    right: 100%;\n  }\n\n  60% {\n    left: 107%;\n    right: -8%;\n  }\n\n  100% {\n    left: 107%;\n    right: -8%;\n  }\n"])))),R=(0,f.F4)(I||(I=w||(w=(0,o.Z)(["\n  0% {\n    opacity: 1;\n    background-position: 0 -23px;\n  }\n\n  60% {\n    opacity: 0;\n    background-position: 0 -23px;\n  }\n\n  100% {\n    opacity: 1;\n    background-position: -200px -23px;\n  }\n"])))),D=function(r,e){return"inherit"===e?"currentColor":r.vars?r.vars.palette.LinearProgress["".concat(e,"Bg")]:"light"===r.palette.mode?(0,d.$n)(r.palette[e].main,.62):(0,d._j)(r.palette[e].main,.5)},E=(0,v.ZP)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:function(r,e){var n=r.ownerState;return[e.root,e["color".concat((0,b.Z)(n.color))],e[n.variant]]}})((function(r){var e=r.ownerState,n=r.theme;return(0,l.Z)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:D(n,e.color)},"inherit"===e.color&&"buffer"!==e.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===e.variant&&{backgroundColor:"transparent"},"query"===e.variant&&{transform:"rotate(180deg)"})})),A=(0,v.ZP)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:function(r,e){var n=r.ownerState;return[e.dashed,e["dashedColor".concat((0,b.Z)(n.color))]]}})((function(r){var e=r.ownerState,n=r.theme,t=D(n,e.color);return(0,l.Z)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===e.color&&{opacity:.3},{backgroundImage:"radial-gradient(".concat(t," 0%, ").concat(t," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})}),(0,f.iv)(M||(M=C||(C=(0,o.Z)(["\n    animation: "," 3s infinite linear;\n  "]))),R)),O=(0,v.ZP)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:function(r,e){var n=r.ownerState;return[e.bar,e["barColor".concat((0,b.Z)(n.color))],("indeterminate"===n.variant||"query"===n.variant)&&e.bar1Indeterminate,"determinate"===n.variant&&e.bar1Determinate,"buffer"===n.variant&&e.bar1Buffer]}})((function(r){var e=r.ownerState,n=r.theme;return(0,l.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===e.color?"currentColor":(n.vars||n).palette[e.color].main},"determinate"===e.variant&&{transition:"transform .".concat(4,"s linear")},"buffer"===e.variant&&{zIndex:1,transition:"transform .".concat(4,"s linear")})}),(function(r){var e=r.ownerState;return("indeterminate"===e.variant||"query"===e.variant)&&(0,f.iv)(z||(z=j||(j=(0,o.Z)(["\n      width: auto;\n      animation: "," 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n    "]))),F)})),T=(0,v.ZP)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:function(r,e){var n=r.ownerState;return[e.bar,e["barColor".concat((0,b.Z)(n.color))],("indeterminate"===n.variant||"query"===n.variant)&&e.bar2Indeterminate,"buffer"===n.variant&&e.bar2Buffer]}})((function(r){var e=r.ownerState,n=r.theme;return(0,l.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==e.variant&&{backgroundColor:"inherit"===e.color?"currentColor":(n.vars||n).palette[e.color].main},"inherit"===e.color&&{opacity:.3},"buffer"===e.variant&&{backgroundColor:D(n,e.color),transition:"transform .".concat(4,"s linear")})}),(function(r){var e=r.ownerState;return("indeterminate"===e.variant||"query"===e.variant)&&(0,f.iv)(B||(B=S||(S=(0,o.Z)(["\n      width: auto;\n      animation: "," 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;\n    "]))),N)})),X=s.forwardRef((function(r,e){var n=(0,h.Z)({props:r,name:"MuiLinearProgress"}),t=n.className,a=n.color,o=void 0===a?"primary":a,s=n.value,f=n.valueBuffer,d=n.variant,v=void 0===d?"indeterminate":d,p=(0,i.Z)(n,q),g=(0,l.Z)({},n,{color:o,variant:v}),y=function(r){var e=r.classes,n=r.variant,t=r.color,a={root:["root","color".concat((0,b.Z)(t)),n],dashed:["dashed","dashedColor".concat((0,b.Z)(t))],bar1:["bar","barColor".concat((0,b.Z)(t)),("indeterminate"===n||"query"===n)&&"bar1Indeterminate","determinate"===n&&"bar1Determinate","buffer"===n&&"bar1Buffer"],bar2:["bar","buffer"!==n&&"barColor".concat((0,b.Z)(t)),"buffer"===n&&"color".concat((0,b.Z)(t)),("indeterminate"===n||"query"===n)&&"bar2Indeterminate","buffer"===n&&"bar2Buffer"]};return(0,u.Z)(a,x,e)}(g),Z=(0,m.Z)(),w={},C={bar1:{},bar2:{}};if("determinate"===v||"buffer"===v)if(void 0!==s){w["aria-valuenow"]=Math.round(s),w["aria-valuemin"]=0,w["aria-valuemax"]=100;var j=s-100;"rtl"===Z.direction&&(j=-j),C.bar1.transform="translateX(".concat(j,"%)")}else 0;if("buffer"===v)if(void 0!==f){var S=(f||0)-100;"rtl"===Z.direction&&(S=-S),C.bar2.transform="translateX(".concat(S,"%)")}else 0;return(0,L.jsxs)(E,(0,l.Z)({className:(0,c.Z)(y.root,t),ownerState:g,role:"progressbar"},w,{ref:e},p,{children:["buffer"===v?(0,L.jsx)(A,{className:y.dashed,ownerState:g}):null,(0,L.jsx)(O,{className:y.bar1,ownerState:g,style:C.bar1}),"determinate"===v?null:(0,L.jsx)(T,{className:y.bar2,ownerState:g,style:C.bar2})]}))})),H=n(4565),J=n(466),W=function(){return(0,L.jsxs)("svg",{height:200,width:200,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512.001 512.001",xmlSpace:"preserve",children:[(0,L.jsx)("path",{style:{fill:"#cdb987"},d:"M256.001 49.548C65.076 49.548 0 156.521 0 268.089c0 29.047 8.258 75.259 8.258 75.259l24.774-7.922c8.258 39.61 24.774 71.298 24.774 71.298l16.516-15.844c66.065 55.454 107.355 63.377 148.645 63.377h66.065c41.29 0 82.581-7.922 148.645-63.377l16.516 15.844s16.516-31.688 24.774-71.298l24.774 7.922s8.258-46.212 8.258-75.259C512 156.521 446.924 49.548 256.001 49.548z"}),(0,L.jsx)("ellipse",{style:{fill:"#c39b6e"},cx:256.001,cy:297.291,rx:173.42,ry:107.355}),(0,L.jsx)("path",{style:{fill:"#aa825a"},d:"M256.001 115.613c-109.46 0-198.194 77.642-198.194 173.42 0 47.89 41.29 173.42 198.194 173.42s198.194-125.53 198.194-173.42c-.001-95.777-88.735-173.42-198.194-173.42zm99.097 173.42s-41.29 24.774-99.097 24.774-99.097-24.774-99.097-24.774l-54.762 54.762c-5.279-33.886 2.23-67.239 38.246-96.053C181.678 214.71 219.491 256 256.001 256s74.323-41.29 115.613-8.258c36.017 28.813 43.525 62.168 38.246 96.053l-54.762-54.762z"}),(0,L.jsx)("path",{style:{fill:"#464655"},d:"M182.982 371.178c18.255 36.51 45.636 54.765 73.019 54.765s54.765-18.254 73.019-54.765H182.982z"}),(0,L.jsx)("path",{style:{fill:"#746257"},d:"M338.147 362.051c0 25.205-36.778 36.509-82.146 36.509s-82.146-11.305-82.146-36.509 41.819-63.892 82.146-63.892 82.146 38.688 82.146 63.892zM167.639 332.606l-39.362 25.941c-11.137 7.339-26.115 4.261-33.455-6.876-6.398-9.708-4.867-22.342 3.006-30.283l33.173-33.495c11.293-11.403 29.693-11.492 41.095-.198 11.403 11.294 11.492 29.693.198 41.096-1.405 1.419-3.056 2.745-4.655 3.815z"}),(0,L.jsx)("circle",{style:{fill:"#464655"},cx:152.165,cy:307.799,r:18.254}),(0,L.jsx)("path",{style:{fill:"#746257"},d:"m344.361 333.426 39.362 25.941c11.137 7.339 26.115 4.261 33.455-6.876 6.398-9.708 4.867-22.342-3.006-30.283l-33.173-33.495c-11.293-11.403-29.693-11.492-41.095-.198-11.403 11.294-11.492 29.693-.198 41.096 1.405 1.419 3.056 2.746 4.655 3.815z"}),(0,L.jsx)("circle",{style:{fill:"#464655"},cx:359.825,cy:308.625,r:18.254}),(0,L.jsx)("circle",{style:{fill:"#464655"},cx:237.75,cy:371.18,r:9.127}),(0,L.jsx)("circle",{style:{fill:"#464655"},cx:274.251,cy:371.18,r:9.127})]})},$=function(r){var e=r.setLoaded,n=(0,s.useState)(0),o=(0,t.Z)(n,2),i=o[0],l=o[1];return(0,s.useEffect)((function(){i>=100&&(sessionStorage.setItem("visitedInThisSession","true"),e(!0))}),[i]),(0,s.useEffect)((function(){var r=setInterval((function(){l((function(r){if(100===r)return 100;var e,n=Math.random()*((e=r)>40&&e<65?30:e>=65&&e<90?10:e>=90?2.5:20);return Math.min(r+n,100)}))}),500);return function(){return clearInterval(r)}}),[]),(0,L.jsxs)(J.E.div,{exit:{opacity:.4},style:{position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",zIndex:1e3,backgroundColor:"#FFEFCA",flexDirection:"column"},children:[(0,L.jsx)(W,{}),(0,L.jsx)(a.Z,{sx:{width:"20vw",marginBottom:8},children:(0,L.jsx)(X,{variant:"determinate",value:i})}),(0,L.jsx)(H.Z,{fontSize:20,fontWeight:700,children:"Just a moment..."})]})}},4142:function(r,e,n){n.d(e,{Z:function(){return o}});n(2791);var t=n(3459),a=n(4205);function o(){return(0,t.Z)(a.Z)}}}]);
//# sourceMappingURL=633.c65f9a3a.chunk.js.map