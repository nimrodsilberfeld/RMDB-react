(this.webpackJsonpreact_movie_db_course=this.webpackJsonpreact_movie_db_course||[]).push([[0],{17:function(n,e,t){n.exports=t.p+"static/media/reactMovie_logo.08494abf.png"},18:function(n,e,t){n.exports=t.p+"static/media/tmdb_logo.30cd724b.svg"},24:function(n,e,t){n.exports=t(41)},41:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(16),o=t.n(i),c=t(17),l=t.n(c),m=t(18),s=t.n(m),u=t(1),p=t(2);function d(){var n=Object(u.a)(["\n  width: 122px;\n  margin-top: 25px;\n  float: right;\n\n  @media screen and (max-width: 500px) {\n    display: inline-block;\n    width: 80px;\n    margin-top: 0px;\n  }\n"]);return d=function(){return n},n}function f(){var n=Object(u.a)(["\n  width: 250px;\n  margin-top: 20px;\n\n  @media screen and (max-width: 500px) {\n    width: 150px;\n    margin-top: 5px;\n  }\n"]);return f=function(){return n},n}function x(){var n=Object(u.a)(["\n  background: #1c1c1c;\n  padding: 0 20px;\n  box-sizing: border-box;\n\n  .header-content {\n    max-width: 1280px;\n    min-height: 120px;\n    padding: 20px 0px;\n    margin: 0 auto;\n    box-sizing: border-box;\n\n    @media screen and (max-width: 500px) {\n      max-width: 1280px;\n      min-height: 0px;\n    }\n  }\n"]);return x=function(){return n},n}var g=p.b.div(x()),b=p.b.img(f()),h=p.b.img(d()),v=t(5),E=function(){return r.a.createElement(g,null,r.a.createElement("div",{className:"header-content"},r.a.createElement(v.a,{to:"/"},r.a.createElement(b,{src:l.a,alt:"rmdb-logo"})),r.a.createElement(h,{src:s.a,alt:"tmdb-logo"})))},w=t(3),y="https://api.themoviedb.org/3/",j="85784741d0a22fe5066f5f98e6c9e6f5",k="".concat(y,"search/movie?api_key=").concat(j,"&query="),O="".concat(y,"movie/popular?api_key=").concat(j),z="http://image.tmdb.org/t/p/";function N(){var n=Object(u.a)(["\n  display: grid;\n  grid-template-columns: repeat(5, minmax(100px, 1fr));\n  grid-gap: 40px;\n  position: relative;\n\n  .grid-element {\n    animation: animateGrid 0.5s;\n  }\n\n  @keyframes animateGrid {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n\n  @media screen and (max-width: 1024px) {\n    grid-template-columns: repeat(4, minmax(100px, 1fr));\n  }\n\n  @media screen and (max-width: 768px) {\n    grid-template-columns: repeat(3, minmax(100px, 1fr));\n  }\n\n  @media screen and (max-width: 600px) {\n    grid-template-columns: repeat(2, minmax(100px, 1fr));\n  }\n\n  @media screen and (max-width: 375px) {\n    grid-template-columns: repeat(1, 1fr);\n  }\n"]);return N=function(){return n},n}function _(){var n=Object(u.a)(["\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 0 20px;\n  h1 {\n    font-family: 'Abel', sans-serif;\n    font-size: 42px;\n\n    @media screen and (max-width: 768px) {\n      font-size: 22px;\n    }\n  }\n"]);return _=function(){return n},n}var S=p.b.div(_()),I=p.b.div(N()),A=function(n){var e=n.header,t=n.children;return r.a.createElement(S,null,r.a.createElement("h1",null,e),r.a.createElement(I,null,t))};function H(){var n=Object(u.a)(["\n  background: ",";\n  background-size: 100%, cover !important;\n  background-position: center, center !important;\n  width: 100%;\n  height: 600px;\n  position: relative;\n  animation: animateHeroimage 1s;\n\n  .heroimage-content {\n    max-width: 1280px;\n    padding: 20px;\n    margin: 0 auto;\n  }\n\n  .heroimage-text {\n    z-index: 100;\n    max-width: 700px;\n    position: absolute;\n    bottom: 40px;\n    margin-right: 20px;\n    min-height: 100px;\n    background: rgba(0, 0, 0, 0);\n    color: #fff;\n\n    h1 {\n      font-family: 'Abel', sans-serif;\n      font-size: 48px;\n      color: #fff;\n\n      @media screen and (max-width: 720px) {\n        font-size: 38px;\n        color: #fff;\n      }\n    }\n\n    p {\n      font-family: 'Abel', sans-serif;\n      font-size: 22px;\n      line-height: 26px;\n      color: #fff;\n\n      @media screen and (max-width: 720px) {\n        font-size: 16px;\n        line-height: 20px;\n        color: #fff;\n      }\n    }\n\n    @media screen and (max-width: 720px) {\n      max-width: 100%;\n    }\n  }\n\n  @keyframes animateHeroimage {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n"]);return H=function(){return n},n}var P=p.b.div(H(),(function(n){return"linear-gradient(\n      to bottom, rgba(0,0,0,0)\n      39%,rgba(0,0,0,0)\n      41%,rgba(0,0,0,0.65)\n      100%\n    ),\n    url('".concat(n.image,"'), #1c1c1c")})),M=function(n){var e=n.image,t=n.title,a=n.text;return r.a.createElement(P,{image:e},r.a.createElement("div",{className:"Heroimage-content"},r.a.createElement("div",{className:"heroimage-text"},r.a.createElement("h1",null,t),r.a.createElement("p",null,a))))};function R(){var n=Object(u.a)(["\n  background: #000;\n  width: 25%;\n  min-width: 200px;\n  height: 70px;\n  color: #fff;\n  cursor: pointer;\n  transition: all 0.3s;\n  border-radius: 40px;\n  font-family: 'Abel', sans-serif;\n  font-size: 28px;\n  max-width: 1280px;\n  display: block;\n  margin: 20px auto;\n  padding: 0 20px;\n  outline: none;\n\n  :hover {\n    opacity: 0.8;\n  }\n"]);return R=function(){return n},n}var J=p.b.button(R()),T=function(n){var e=n.text,t=n.callback;return r.a.createElement(J,{type:"button",onClick:t},e)};function D(){var n=Object(u.a)(["\n  img {\n    width: 100%;\n    height: auto;\n    /* max-height: 350px; */\n    transition: all 0.3s;\n    object-fit: cover;\n    border-radius: 20px;\n\n    :hover {\n      opacity: 0.8;\n    }\n\n    /* @media screen and (max-width: 1024px) {\n      height: 300px;\n    }\n\n    @media screen and (max-width: 768px) {\n      height: 350px;\n    }\n\n    @media screen and (max-width: 600px) {\n      max-height: 300px;\n    }\n\n    @media screen and (max-width: 375px) {\n      max-height: 450px;\n    } */\n\n    .clickable {\n      cursor: pointer;\n    }\n  }\n"]);return D=function(){return n},n}var B=p.b.div(D()),C=function(n){var e=n.image,t=n.movieId,a=n.clickable;return r.a.createElement(B,null,a?r.a.createElement(v.a,{to:"/".concat(t)},r.a.createElement("img",{className:"clickable",src:e,alt:"moviethumb"})):r.a.createElement("img",{src:e,alt:"moviethumb"}))},F=t(8),G=t.n(F);function L(){var n=Object(u.a)(["\n  max-width: 1280px;\n  width: 100%;\n  height: 55px;\n  background: #353535;\n  margin: 0 auto;\n  border-radius: 40px;\n  position: relative;\n  color: #fff;\n\n  .fa-search {\n    position: absolute;\n    left: 20px;\n    top: 12px;\n    color: #fff;\n    z-index: 1000;\n  }\n\n  input {\n    font-family: 'Abel', sans-serif;\n    font-size: 28px;\n    position: absolute;\n    left: 0px;\n    margin: 8px 0;\n    padding: 0 0 0 60px;\n    border: 0;\n    width: 95%;\n    background: transparent;\n    height: 40px;\n    color: #fff;\n    box-sizing: border-box;\n\n    :focus {\n      outline: none;\n    }\n\n    @media screen and (max-width: 720px) {\n      font-size: 28px;\n    }\n  }\n"]);return L=function(){return n},n}function U(){var n=Object(u.a)(["\n  width: 100%;\n  height: 105px;\n  background: #1c1c1c;\n  padding: 25px 20px 0px 20px;\n  box-sizing: border-box;\n  color: #fff;\n"]);return U=function(){return n},n}var W=p.b.div(U()),q=p.b.div(L()),K=function(n){var e=n.callback,t=Object(a.useState)(""),i=Object(w.a)(t,2),o=i[0],c=i[1],l=Object(a.useRef)(null);return r.a.createElement(W,null,r.a.createElement(q,null,r.a.createElement(G.a,{className:"fa-search",name:"search",size:"2x"}),r.a.createElement("input",{type:"text",placeholder:"Search Movie",onChange:function(n){var t=n.target.value;clearTimeout(l.current),c(t),l.current=setTimeout((function(){e(t)}),500)},value:o})))};function Q(){var n=Object(u.a)(["\n  border: 5px solid #f3f3f3; /* Light grey */\n  border-top: 5px solid #16d47b; /* Blue */\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  animation: spin 0.8s linear infinite;\n  margin: 20px auto;\n\n  @keyframes spin {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"]);return Q=function(){return n},n}var V=p.b.div(Q()),X=function(){return r.a.createElement(V,null)},Y=t(4),Z=t.n(Y),$=t(11),nn=t(10),en=t(6),tn=t.n(en),an=function(){var n=Object(a.useState)(""),e=Object(w.a)(n,2),t=e[0],i=e[1],o=function(n){var e=Object(a.useState)({movies:[]}),t=Object(w.a)(e,2),r=t[0],i=t[1],o=Object(a.useState)(!1),c=Object(w.a)(o,2),l=c[0],m=c[1],s=Object(a.useState)(!1),u=Object(w.a)(s,2),p=u[0],d=u[1],f=function(n){var e,t;return Z.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return d(!1),m(!0),e=n.search("page"),a.prev=3,a.t0=Z.a,a.next=7,Z.a.awrap(fetch(n));case 7:return a.t1=a.sent.json(),a.next=10,a.t0.awrap.call(a.t0,a.t1);case 10:t=a.sent,i((function(n){return Object(nn.a)({},n,{movies:-1!==e?[].concat(Object($.a)(n.movies),Object($.a)(t.results)):Object($.a)(t.results),HeroImage:n.HeroImage||t.results[0],currentPage:t.page,totalPages:t.total_pages})})),a.next=18;break;case 14:a.prev=14,a.t2=a.catch(3),d(!0),console.log(a.t2);case 18:case"end":return a.stop()}}),null,null,[[3,14]])};return Object(a.useEffect)((function(){sessionStorage.homeState?(console.log("grabbed session"),i(JSON.parse(sessionStorage.homeState)),m(!1)):(console.log("grabbed API"),f("".concat(O)))}),[]),Object(a.useEffect)((function(){n||(console.log("writing to session storage"),sessionStorage.setItem("homeState",JSON.stringify(r)))}),[n,r]),[{state:r,error:p,loading:l},f]}(t),c=Object(w.a)(o,2),l=c[0],m=l.state,s=(l.loading,l.error),u=c[1];return s?r.a.createElement("div",null,"Something went wrong ..."):m.movies[0]?r.a.createElement(r.a.Fragment,null,!t&&r.a.createElement(M,{image:"".concat(z).concat("w1280").concat(m.HeroImage.backdrop_path),title:m.HeroImage.original_title,text:m.HeroImage.overview}),r.a.createElement(K,{callback:function(n){var e=n?k+n:O;i(n),u(e)}}),r.a.createElement(A,{header:t?"Serch Result":"Popular Movies"},m.movies.map((function(n){return r.a.createElement(C,{key:n.id,clickable:!0,image:n.poster_path?"".concat(z).concat("w1280").concat(n.poster_path):tn.a,movieId:n.id,movieName:n.original_title})}))),m.loading&&r.a.createElement(X,null),m.currentPage<m.totalPages&&!m.loading&&r.a.createElement(T,{text:"Load More",callback:function(){var n="".concat(k).concat(t,"&page=").concat(m.currentPage+1),e="".concat(O,"&page=").concat(m.currentPage+1);u(t?n:e)}})):r.a.createElement(X,null)};function rn(){var n=Object(u.a)(["\n  body {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n"]);return rn=function(){return n},n}var on=Object(p.a)(rn());function cn(){var n=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 70px;\n  background: #353535;\n  color: #fff;\n\n  .navigation-content {\n    max-width: 1280px;\n    margin: 0 auto;\n    padding: 0 20px;\n    width: 100%;\n\n    p {\n      font-family: 'Abel', sans-serif;\n      font-size: 22px;\n      float: left;\n      color: #fff;\n      padding-right: 10px;\n      text-decoration: none;\n\n      @media screen and (max-width: 768px) {\n        font-size: 16px;\n      }\n    }\n  }\n"]);return cn=function(){return n},n}var ln=p.b.div(cn()),mn=function(n){var e=n.movie;return r.a.createElement(ln,null,r.a.createElement("div",{className:"navigation-content"},r.a.createElement(v.a,{to:"/"},r.a.createElement("p",null,"Home")),r.a.createElement("p",null,"|"),r.a.createElement("p",null,e)))};function sn(){var n=Object(u.a)(["\n  background: ",";\n  background-size: cover !important;\n  background-position: center !important;\n  width: 100%;\n  padding: 40px 20px;\n  box-sizing: border-box;\n  animation: animateMovieinfo 1s;\n\n  .movieinfo-content {\n    max-width: 1280px;\n    min-height: 450px;\n    margin: 0 auto;\n    background: rgb(0, 0, 0, 0.7);\n    border-radius: 20px;\n    position: relative;\n  }\n\n  .movieinfo-thumb {\n    width: 300px;\n    float: left;\n\n    @media screen and (max-width: 768px) {\n      width: 100% !important;\n    }\n  }\n\n  .movieinfo-text {\n    font-family: Arial, Helvetica, sans-serif;\n    padding: 40px;\n    color: #fff;\n    overflow: hidden;\n\n    h1 {\n      font-family: 'Abel', sans-serif;\n      font-size: 48px;\n      margin: 0;\n\n      @media screen and (max-width: 1000px) {\n        font-size: 32px !important;\n      }\n    }\n\n    h3 {\n      font-size: 16px;\n      line-height: 0;\n      margin-top: 30px;\n    }\n\n    p {\n      font-family: 'Abel', sans-serif;\n      font-size: 18px;\n      line-height: 26px;\n    }\n  }\n\n  .rating-director {\n    display: flex;\n    justify-content: flex-start;\n  }\n\n  .score {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 35px;\n    height: 35px;\n    background: #fff;\n    color: #000;\n    font-weight: 800;\n    border-radius: 25px;\n    margin: 0px 0 0 0;\n  }\n\n  .director {\n    margin: 0 0 0 40px;\n\n    p {\n      margin: 0;\n    }\n  }\n\n  @media screen and (max-width: 768px) {\n    min-height: 600px;\n    height: auto;\n  }\n\n  @keyframes animateMovieinfo {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n"]);return sn=function(){return n},n}var un=p.b.div(sn(),(function(n){return n.backdrop?"url('".concat(z).concat("w1280").concat(n.backdrop,"')"):"#000"})),pn=function(n){var e=n.movie;return r.a.createElement(un,{backdrop:e.backdrop_path},r.a.createElement("div",{className:"movieinfo-content"},r.a.createElement("div",{className:"movieinfo-thumb"},r.a.createElement(C,{image:e.poster_path?"".concat(z).concat("w500").concat(e.poster_path):tn.a,clickable:!1})),r.a.createElement("div",{className:"movieinfo-text"},r.a.createElement("h1",null,e.title),r.a.createElement("h3",null,"PLOT"),r.a.createElement("p",null,e.overview),r.a.createElement("div",{className:"rating-director"},r.a.createElement("div",null,r.a.createElement("h3",null,"IMDB RATING"),r.a.createElement("div",{className:"score"},e.vote_average)),r.a.createElement("div",{className:"director"},r.a.createElement("h3",null,"DIRECTOR",e.directors.length>1?"s":""),e.directors.map((function(n){return r.a.createElement("p",{key:n.credit_id},n.name)})))))))};function dn(){var n=Object(u.a)(["\n  font-family: 'Abel', sans-serif;\n  color: #fff;\n  background: #1c1c1c;\n  border-radius: 20px;\n  padding: 5px;\n  text-align: center;\n\n  img {\n    display: block;\n    width: 100%;\n    height: 200px;\n    object-fit: cover;\n    border-radius: 15px;\n  }\n\n  .actor-name {\n    display: block;\n    font-size: 18px;\n    margin: 10px 0 0 0;\n  }\n\n  .actor-character {\n    display: block;\n    font-size: 16px;\n    margin: 0 0 10px 0;\n  }\n"]);return dn=function(){return n},n}var fn=p.b.div(dn()),xn=function(n){var e=n.actor;return r.a.createElement(fn,null,r.a.createElement("img",{src:e.profile_path?"".concat(z).concat("w500").concat(e.profile_path):tn.a,alt:"actorthumb"}),r.a.createElement("span",{className:"actor-name"},e.name," "),r.a.createElement("span",{className:"actor-character"},e.character))},gn=function(n){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0}).format(n)};function bn(){var n=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  min-height: 100px;\n  height: auto;\n  background: #1c1c1c;\n  padding: 20px;\n  box-sizing: border-box;\n  font-family: 'Abel', sans-serif;\n  font-size: 20px;\n\n  .movieinfobar-content {\n    max-width: 1280px;\n    width: 100%;\n    margin: 0 auto;\n    color: #fff;\n  }\n\n  .movieinfobar-content-col {\n    float: left;\n    width: 33.33%;\n    box-sizing: border-box;\n    padding: 10px 20px 0 0;\n  }\n\n  .movieinfobar-info {\n    padding: 5px 0 0 10px;\n    float: left;\n  }\n\n  .fa-time,\n  .fa-revenue {\n    float: left;\n    margin-top: -4px;\n  }\n\n  .fa-budget {\n    float: left;\n    margin-top: -3px;\n  }\n\n  @media screen and (max-width: 768px) {\n    .fa-time,\n    .fa-revenue,\n    .fa-budget {\n      display: none;\n    }\n  }\n\n  @media screen and (max-width: 425px) {\n    font-size: 14px;\n  }\n"]);return bn=function(){return n},n}var hn=p.b.div(bn()),vn=function(n){var e=n.time,t=n.budget,a=n.revenue;return r.a.createElement(hn,null,r.a.createElement("div",{className:"movieinfobar-content"},r.a.createElement("div",{className:"movieinfobar-content-col"},r.a.createElement(G.a,{className:"fa-time",name:"clock-o",size:"2x"}),r.a.createElement("span",{className:"movieinfobar-info"},"Running Time:",function(n){var e=Math.floor(n/60),t=n%60;return"".concat(e,"h ").concat(t,"m")}(e))),r.a.createElement("div",{className:"movieinfobar-content-col"},r.a.createElement(G.a,{className:"fa-budget",name:"money",size:"2x"}),r.a.createElement("span",{className:"movieinfobar-info"},"Budget:",gn(t))),r.a.createElement("div",{className:"movieinfobar-content-col"},r.a.createElement(G.a,{className:"fa-revenue",name:"ticket",size:"2x"}),r.a.createElement("span",{className:"movieinfobar-info"},"Revenue:",gn(a)))))},En=function(n){var e=function(n){var e=Object(a.useState)({}),t=Object(w.a)(e,2),r=t[0],i=t[1],o=Object(a.useState)(!0),c=Object(w.a)(o,2),l=c[0],m=c[1],s=Object(a.useState)(!1),u=Object(w.a)(s,2),p=u[0],d=u[1],f=Object(a.useCallback)((function(){var e,t,a,r,o;return Z.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return d(!1),m(!0),c.prev=2,e="".concat(y,"movie/").concat(n,"?api_key=").concat(j),c.t0=Z.a,c.next=7,Z.a.awrap(fetch(e));case 7:return c.t1=c.sent.json(),c.next=10,c.t0.awrap.call(c.t0,c.t1);case 10:return t=c.sent,a="".concat(y,"movie/").concat(n,"/credits?api_key=").concat(j),c.t2=Z.a,c.next=15,Z.a.awrap(fetch(a));case 15:return c.t3=c.sent.json(),c.next=18,c.t2.awrap.call(c.t2,c.t3);case 18:r=c.sent,o=r.crew.filter((function(n){return"Director"===n.job})),i(Object(nn.a)({},t,{actors:r.cast,directors:o})),c.next=27;break;case 23:c.prev=23,c.t4=c.catch(2),d(!0),console.log(c.t4);case 27:m(!1);case 28:case"end":return c.stop()}}),null,null,[[2,23]])}),[n]);return Object(a.useEffect)((function(){localStorage[n]?(console.log("locla grab"),i(JSON.parse(localStorage[n])),m(!1)):(console.log("API grab"),f())}),[f,n]),Object(a.useEffect)((function(){localStorage.setItem(n,JSON.stringify(r))}),[n,r]),[r,l,p]}(n.movieId),t=Object(w.a)(e,3),i=t[0],o=t[1],c=t[2];return console.log(i),c?r.a.createElement("div",null,"Whoooops..something went wrong"):o?r.a.createElement(X,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(mn,{movie:i.original_title}),r.a.createElement(pn,{movie:i}),r.a.createElement(vn,{time:i.runtime,budget:i.budget,revenue:i.revenue}),r.a.createElement(A,{header:"Actors"},i.actors.map((function(n){return r.a.createElement(xn,{key:n.credit_id,actor:n})}))))},wn=function(){return r.a.createElement("div",null,"Whoooooops...Nothing found here")},yn=function(){return r.a.createElement("div",null,r.a.createElement(E,null),r.a.createElement(v.b,null,r.a.createElement(an,{path:"/"}),r.a.createElement(En,{path:"/:movieId"}),r.a.createElement(wn,{default:!0})),r.a.createElement(on,null))};o.a.render(r.a.createElement(yn,null),document.getElementById("root"))},6:function(n,e,t){n.exports=t.p+"static/media/no_image.31f5bb1d.jpg"}},[[24,1,2]]]);
//# sourceMappingURL=main.a0731206.chunk.js.map