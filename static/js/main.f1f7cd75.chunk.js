(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{40:function(n,t,e){n.exports=e(77)},45:function(n,t,e){},47:function(n,t,e){},55:function(n,t){},56:function(n,t){},57:function(n,t){},75:function(n,t){},77:function(n,t,e){"use strict";e.r(t);var i=e(0),a=e.n(i),r=e(10),o=e.n(r),c=(e(45),e(8)),u=e(3),l=e(4),s=e(6),d=e(5),m=e(7),f=e(1),p=(e(47),e(2));function b(){var n=Object(f.a)(["\n    width:20%;\n    float: left;\n    border : 1px solid #000;\n    @media ( max-width: 480px ) {\n        float: none;\n        width: auto;\n    }\n"]);return b=function(){return n},n}var h=p.b.div(b());i.Component,e(54);function v(){var n=Object(f.a)(["\n  margin-top : 10px\n"]);return v=function(){return n},n}function x(){var n=Object(f.a)(["\n  color : yellow\n"]);return x=function(){return n},n}function w(){var n=Object(f.a)(["\n  font-weight : 700;\n  font-size : 15px;\n  text-align : center;\n  margin-top : 30px;\n"]);return w=function(){return n},n}function j(){var n=Object(f.a)(["\n  font-weight : 700;\n  font-size : 20px;\n  text-align : center;\n"]);return j=function(){return n},n}function g(){var n=Object(f.a)(["  \n  border : 1px solid #000;\n  background-color :#000;\n  color:#ffffff;\n  margin : 0px 0px 0px 10px\n"]);return g=function(){return n},n}function O(){var n=Object(f.a)(["\n  display :  ",";\n  flex-direction: column;\n"]);return O=function(){return n},n}function C(){var n=Object(f.a)(["\n  display : flex; \n"]);return C=function(){return n},n}function E(){var n=Object(f.a)(["\n  display : flex;\n  flex :3;\n  flex-direction: column;\n  height : ","px;\n  justify-content: center;\n  align-items: center; \n  @media ( max-width: 480px ) {\n    float: none;\n    width: auto;\n  }\n"]);return E=function(){return n},n}var y=window.innerHeight,V=p.b.div(E(),y/2),k=p.b.div(C()),L=p.b.div(O(),function(n){return n.isCmdListContainerVisible}),I=p.b.input(g()),N=p.b.a(j()),M=p.b.a(w()),S=p.b.a(x()),T=p.b.div(v()),A=function(n){function t(n){var e;return Object(u.a)(this,t),(e=Object(s.a)(this,Object(d.a)(t).call(this)))._sendInputText=function(n){13===n.keyCode&&(e.setState({cmdValue:""}),e.props.cmdInput(e.state.cmdValue))},e.state=Object(c.a)({},n,{cmdValue:"",cmdList:[{listName:"showmenu",listAction:"\uba54\ub274\ub97c \ubcf4\uc5ec\uc8fc\ub294 \uae30\ub2a5"},{listName:"hidemenu",listAction:"\uba54\ub274\ub97c \uc228\uaca8\uc8fc\ub294 \uae30\ub2a5"},{listName:"showmenulist",listAction:"\uba85\ub839\uc5b4 \ub9ac\uc2a4\ud2b8\ub97c \uc228\uaca8\uc8fc\ub294 \uae30\ub2a5"},{listName:"hidemenulist",listAction:"\uba85\ub839\uc5b4 \ub9ac\uc2a4\ud2b8\ub97c \uc228\uaca8\uc8fc\ub294 \uae30\ub2a5"}]}),e}return Object(m.a)(t,n),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.cmdInput.focus()}},{key:"render",value:function(){var n=this;return a.a.createElement(V,null,a.a.createElement(k,null,a.a.createElement(N,{onClick:function(){n.props.cmdInput("showmenulist")}},"Command"),a.a.createElement(I,{value:this.state.cmdValue,ref:function(t){n.cmdInput=t},placeholder:"input your cmd ...",onChange:function(t){n.setState({cmdValue:t.target.value})},onKeyDown:function(t){n._sendInputText(t)}})),a.a.createElement(L,{isCmdListContainerVisible:this.props.isCmdListContainerVisible},a.a.createElement(M,null,"\uba85\ub839\uc5b4 \ub9ac\uc2a4\ud2b8"),a.a.createElement(T,null,this.state.cmdList.map(function(t,e){return a.a.createElement("div",null,a.a.createElement(S,{onClick:function(){n.props.cmdInput(t.listName)}},t.listName)," : ",t.listAction," ")}))))}}]),t}(i.Component);function _(){var n=Object(f.a)(["\n  width:20%;\n  float: right;\n  border : 1px solid #000;\n  display : none;\n  @media ( max-width: 480px ) {\n    float: none;\n    width: auto;\n  }\n"]);return _=function(){return n},n}var z=p.b.div(_());i.Component;function D(){var n=Object(f.a)(["\n  font-weight : ",";\n  font-size : ",";\n  text-align : center;\n"]);return D=function(){return n},n}function J(){var n=Object(f.a)([" \n  padding : 0 30px 10px 30px;\n  text-align : center;\n"]);return J=function(){return n},n}function W(){var n=Object(f.a)(["\n  display : ",";\n  justify-content: center;\n  align-items: center; \n\n"]);return W=function(){return n},n}function B(){var n=Object(f.a)(["\n"]);return B=function(){return n},n}function H(){var n=Object(f.a)(["\n  display : flex;\n  flex-direction: column;\n  margin: 0 auto;\n"]);return H=function(){return n},n}function K(){var n=Object(f.a)(["  \n  html {\n    height: 100vh; \n  }\n  body {\n    width :100%;    \n    height: 100vh;  \n    margin : 0 auto;\n    padding : 0px;\n    background-color :#000;\n    color : white\n  }\n"]);return K=function(){return n},n}var U=Object(p.a)(K()),G=p.b.div(H()),P=p.b.header(B()),$=p.b.header(W(),function(n){return n.display}),q=p.b.header(J()),F=p.b.p(D(),function(n){return"top"===n.title?1e3:700},function(n){return"top"===n.title?"30px":"20px"}),Q=function(n){function t(n){var e;return Object(u.a)(this,t),(e=Object(s.a)(this,Object(d.a)(t).call(this)))._cmdInput=function(n){switch(n=n.toLocaleLowerCase()){case"showmenu":e.setState({isTopMenuVisible:"flex"});break;case"hidemenu":e.setState({isTopMenuVisible:"none"});break;case"showmenulist":e.setState({isCmdListContainerVisible:"flex"});break;case"hidemenulist":e.setState({isCmdListContainerVisible:"none"});break;default:alert("\uba85\ub839\uc5b4 \uc5c6\uc74c")}},e.state=Object(c.a)({},n,{commandList:[{cmdName:"CMD"},{cmdName:"LIST"}],cmdValue:"",isTopMenuVisible:"none",isCmdListContainerVisible:"flex"}),e}return Object(m.a)(t,n),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(G,null,a.a.createElement(U,null),a.a.createElement(P,null,a.a.createElement(F,{title:"top"},"HOME PAGE"),a.a.createElement(F,{title:"sub"},"Kim Jong Woo")),a.a.createElement($,{display:this.state.isTopMenuVisible},a.a.createElement(q,null,"MENU 1"),a.a.createElement(q,null,"MENU 2")),a.a.createElement(A,{cmdInput:this._cmdInput,isCmdListContainerVisible:this.state.isCmdListContainerVisible}))}}]),t}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[40,2,1]]]);
//# sourceMappingURL=main.f1f7cd75.chunk.js.map