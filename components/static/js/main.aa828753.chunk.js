(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{192:function(e,a,t){e.exports=t.p+"static/media/visa.6340b908.svg"},193:function(e,a,t){e.exports=t.p+"static/media/bank.751793ea.svg"},226:function(e,a,t){e.exports=t(443)},231:function(e,a,t){},232:function(e,a,t){},433:function(e,a,t){},434:function(e,a,t){},443:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),c=t(14),l=t.n(c),i=(t(231),t(48)),o=t(27),s=t(52),m=t(49),d=t(53),u=t(42),p=t(195),h=t(22),g=t(191),f=t.n(g),v=t(469),E=t(468),b=t(466),y=(t(232),t(88)),N=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).getColorTheme=function(e){var a="#CDDC39",t="rgba(205,220,57,0.1)";switch(e){case"success":a="#CDDC39",t="rgba(205,220,57,0.1)";break;case"error":a="#f44336",t="rgba(244,67,54,0.1)";break;case"warning":a="#FFCA28",t="rgba(255,202,42,0.1)"}return{DONUT_COLORS:[a,"rgba(255,255,255,0.1)"],NUM_COLOR:a,NUM_BG:t}},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props,a=e.classes,t=e.percentage,n=e.type,c=e.title,l=e.progressInfo,i=e.duration;"error"===n&&(i="Unable");var o=this.getColorTheme(n),s=o.NUM_COLOR,m=o.DONUT_COLORS,d=o.NUM_BG,u=[{name:"Completed",value:t},{name:"Remaining",value:100-t}];return r.a.createElement(v.a,{className:a.card},r.a.createElement("span",{className:a.header},c,r.a.createElement(E.a,{title:l,"aria-label":"add",placement:"right-start"},r.a.createElement(f.a,{style:{marginLeft:"5px"},fontSize:"small"}))),r.a.createElement("div",{className:a.topPanel},r.a.createElement(y.c,{width:220,height:200,onMouseEnter:this.onPieEnter},r.a.createElement(y.b,{data:u,cx:105,cy:60,startAngle:210,endAngle:-30,innerRadius:41,outerRadius:59,fill:"#8884d8",paddingAngle:0,stroke:0,dataKey:"value"},u.map(function(e,a){return r.a.createElement(y.a,{key:"cell-".concat(a),fill:m[a%m.length]})})))),r.a.createElement(b.a,{className:a.actions,disableActionSpacing:!0},r.a.createElement("div",{style:{fontSize:"0.85em",color:"#999",marginBottom:"1em"}},"Overall Job Progress"),r.a.createElement("div",null,r.a.createElement("span",{className:a.percentBox,style:{color:s,backgroundColor:d}},t),r.a.createElement("span",{style:{fontSize:"0.7em",color:s}},"".concat(i," to finish")))))}}]),a}(r.a.Component),w=Object(h.a)(function(e){return{card:{width:"100%",maxWidth:300,height:400},header:{backgroundColor:"#336278",color:"#90A4AE",width:"100%",height:50,display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",padding:"12px 0px 12px 0px"},actions:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:200,backgroundColor:"#1C4354"},topPanel:{backgroundColor:"#336278",height:140,display:"flex",justifyContent:"center",width:"100%"},percentBox:{fontSize:"2em",padding:"0.3em",margin:"0.1em",borderRadius:"4px"}}})(N),x=t(192),C=t.n(x),O=t(193),k=t.n(O),D=(t(433),function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={showDetails:!1},t.revealDetailsToggle=function(e){var a=t.state.showDetails;t.setState({showDetails:!a})},t.maskDetails=function(e){return t.state.showDetails?e:e.replace(/[0-9]/g,"\u2022")},t.maskCardNumber=function(e){if(t.state.showDetails)return e;var a=e.split(" "),n="".concat(a[0]," ").concat(a[1]," ").concat(a[2]," ");return"".concat(n.replace(/[0-9]/g,"\u2022")," ").concat(a[3])},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this,a=this.props,t=a.holderName,n=a.cardNumber,c=a.validThru,l=a.cvv,i=a.className;return r.a.createElement("div",{className:"card ".concat(i)},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"card-two-col top-header"},r.a.createElement("div",{className:"bank-name"},r.a.createElement("img",{alt:"icon",src:k.a}),r.a.createElement("span",null,"LOREM IPSUM")),r.a.createElement("img",{alt:"logo",className:"card-logo",src:C.a})),r.a.createElement("p",{className:"card-numer"},this.maskCardNumber(n)),r.a.createElement("div",null,r.a.createElement("p",{className:"card-info"},t)),r.a.createElement("div",{className:"card-two-col"},r.a.createElement("div",null,r.a.createElement("span",{className:"card-label"},"Expires"),r.a.createElement("p",{className:"card-info"},this.maskDetails(c))),r.a.createElement("div",null,r.a.createElement("span",{className:"card-label"},"CVV"),r.a.createElement("p",{className:"card-info"},this.maskDetails(l))),r.a.createElement("div",null,r.a.createElement("div",{onClick:function(a){return e.revealDetailsToggle(a)},className:"btn ".concat(this.state.showDetails?"active":"")},r.a.createElement("div",{class:"inner-wrapper"},r.a.createElement("i",{class:"material-icons-round"},this.state.showDetails?"lock":"lock_open")))))))}}]),a}(r.a.Component)),j=t(467),S=(t(434),function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={cardNumber:"000 090 1234 6258",validThru:"01/09",cvv:"076",loading:!0},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.setState({loading:!1})},700)}},{key:"render",value:function(){var e=this.state,a=e.loading,t=e.cardNumber,n=e.validThru,c=e.cvv,l=[{path:"/components/taskwidget",el:r.a.createElement(j.a,{className:"outer-grid-container",container:!0,justify:"center",spacing:2},r.a.createElement(j.a,{item:!0,xs:10,sm:10,md:10,lg:10,xl:10},r.a.createElement(j.a,{container:!0,justify:"center",spacing:4},r.a.createElement(j.a,{item:!0,xs:8,sm:8,md:4,lg:3,xl:3},r.a.createElement(w,{type:"success",percentage:45,progressInfo:"Deploying Containers 11/20",duration:"12h",title:"JS001"})),r.a.createElement(j.a,{item:!0,xs:8,sm:8,md:4,lg:3,xl:3},r.a.createElement(w,{type:"error",percentage:55,duration:"0h",progressInfo:"Failed to deploy containers 9/20",title:"JE002"})),r.a.createElement(j.a,{item:!0,xs:8,sm:8,md:4,lg:3,xl:3},r.a.createElement(w,{type:"warning",percentage:65,duration:"17h",progressInfo:"Failed to cleanup stale containers 1/20",title:"JW003"})))))},{path:"/components/neo",el:r.a.createElement(D,{type:"visa",className:a?"hidden":"",holderName:"HDesign In",cardNumber:t,validThru:n,cvv:c})}];l.unshift({path:"/",el:r.a.createElement("div",null,l.map(function(e){return r.a.createElement("div",null,r.a.createElement("a",{href:e.path},e.path))}))});return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,null,r.a.createElement(u.c,null,l.map(function(e){return r.a.createElement(u.a,{exact:!0,path:e.path,render:function(){return e.el}})}))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[226,1,2]]]);
//# sourceMappingURL=main.aa828753.chunk.js.map