(()=>{"use strict";var n={365:(n,e,t)=>{t.d(e,{A:()=>g});var o=t(354),r=t.n(o),a=t(314),i=t.n(a),c=t(417),A=t.n(c),s=new URL(t(952),t.b),d=new URL(t(569),t.b),l=new URL(t(420),t.b),p=i()(r());p.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]);var u=A()(s),m=A()(d),f=A()(l);p.push([n.id,`:root{\n    --nav : #b7c57c; \n    --menuBg : #f8f8f8;\n    --menuItems : #d8dd9f; \n    --projectBttn : rgb(241, 181, 113);\n    --projectItems : rgb(241, 213, 113);\n    --projectHeading : #f4f5e2;\n    --todoItem : #f7f7f7;\n    --todoBorder : #858956;\n    --tickColour : rgb(68, 115, 68);\n}\n\n*{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    font-family: Roboto, Times, serif;\n}\n\nbody{\n    height: 100vh;\n    display: grid;\n    grid-template-rows: 0.12fr 1fr;\n    overflow: hidden;\n}\n\nnav{\n    padding: 1rem;\n    display: grid;\n    grid-auto-flow: column;\n    justify-content:space-around;\n    align-items: center;\n    background: var(--nav);\n}\n\nh1{\n    font-size: 2rem;\n}\n\n.icon{\n    width: 4vh;\n    height: 3.2vh;\n    background-size: cover;\n    background-repeat: no-repeat;\n    cursor: pointer;\n}\n\nnav > div{\n    background:url(${u});\n}\n\nnav > button{\n    border:none;\n    background:url(${m});\n}\n\n.displayBoard{\n    display: grid;\n    grid-template-columns: 30vw 1fr;\n    overflow: auto;\n}\n\n.menu{\n    grid-row:1/-1;\n    background-color: var(--menuBg);\n    padding: 2vw;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap:10px;\n    overflow: auto;\n}\n\n.menu-items{\n    padding: 1rem;\n    text-align: center;\n    width: clamp(90px, 60%, 500px);\n    font-size: clamp(12px, 2vw, 20px);\n    background-color: var(--menuItems);\n    border-radius: 10px;\n    cursor: pointer;\n}\n\n.menu-items:hover{\n    box-shadow: 3px 3px 4px #333;\n}\n\n.project{\n    background-color: var(--projectBttn);\n}\n\n.project-items{\n    width: clamp(80px, 50%, 400px);\n    background: var(--projectItems);\n    padding: 10px;\n    outline: none;\n    border: none;\n    word-wrap: break-word;\n}\n\n.todo-section{\n    grid-row:1/-1;\n    display: grid;\n    grid-template-rows: repeat(auto-fill, minmax(50px, auto));\n    gap: 10px;\n    padding:2vw;\n    overflow: auto;\n}\n\n.todoQuery{\n    height: 50px;\n    padding: 10px;\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-columns: 0.1fr 3fr repeat(3,0.1fr);\n    gap : 10px;\n    justify-content: space-between;\n    align-items: center;\n    border-radius: 5px;\n    border-left : 5px solid var(--todoBorder);\n    background-color: var(--todoItem);\n}\n\n.todoElem{\n    border: none;\n    background-color: inherit;\n    font-size: clamp(14px, 2vw, 20px);\n    outline: none;\n}\n\n.task{\n    width: clamp(80px, 100%, 100%);\n}\n\n.bttn {\n    -webkit-appearance: none;\n    appearance: none;\n    background-color: inherit;\n    margin: 0;\n    width: 1.3em;\n    height: 1.3em;\n    border: 0.1em solid var(--todoBorder);\n    border-radius: 0.5em;\n    display: grid;\n    place-content: center;\n}\n\n.bttn::before {\n    content: "";\n    width: 0.7em;\n    height: 0.7em;\n    transform: scale(0);\n    transition: 120ms transform ease-in-out;\n    background-color: var(--tickColour);\n    transform-origin: bottom left;\n    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);\n}\n\n.bttn:checked::before {\n    transform: scale(1);\n}\n\n.delBox{\n    display: none;\n}\n\n.del{\n    display: inline-block;\n    width: 1.5em;\n    height: 1.5em;\n    background: url(${f}) no-repeat center center; \n    background-size: contain; \n    cursor: pointer; \n}\n\n.heading-div{\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    justify-self: center;\n    width: 50%;\n    background-color: var(--projectHeading);\n    border-radius: 10px;\n    padding: 5px 15px;\n    margin-bottom: 10px;\n}\n\n.project-heading{\n    font-size: clamp(15px, 2vw, 22px);\n    font-weight: 500;\n}`,"",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:"AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,qBAAqB;IACrB,kCAAkC;IAClC,mCAAmC;IACnC,0BAA0B;IAC1B,oBAAoB;IACpB,sBAAsB;IACtB,+BAA+B;AACnC;;AAEA;IACI,UAAU;IACV,SAAS;IACT,sBAAsB;IACtB,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,aAAa;IACb,8BAA8B;IAC9B,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,4BAA4B;IAC5B,mBAAmB;IACnB,sBAAsB;AAC1B;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,4BAA4B;IAC5B,eAAe;AACnB;;AAEA;IACI,kDAAmC;AACvC;;AAEA;IACI,WAAW;IACX,kDAAmC;AACvC;;AAEA;IACI,aAAa;IACb,+BAA+B;IAC/B,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,+BAA+B;IAC/B,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,QAAQ;IACR,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,8BAA8B;IAC9B,iCAAiC;IACjC,kCAAkC;IAClC,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,8BAA8B;IAC9B,+BAA+B;IAC/B,aAAa;IACb,aAAa;IACb,YAAY;IACZ,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,yDAAyD;IACzD,SAAS;IACT,WAAW;IACX,cAAc;AAClB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,gDAAgD;IAChD,UAAU;IACV,8BAA8B;IAC9B,mBAAmB;IACnB,kBAAkB;IAClB,yCAAyC;IACzC,iCAAiC;AACrC;;AAEA;IACI,YAAY;IACZ,yBAAyB;IACzB,iCAAiC;IACjC,aAAa;AACjB;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,wBAAwB;IACxB,gBAAgB;IAChB,yBAAyB;IACzB,SAAS;IACT,YAAY;IACZ,aAAa;IACb,qCAAqC;IACrC,oBAAoB;IACpB,aAAa;IACb,qBAAqB;AACzB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uCAAuC;IACvC,mCAAmC;IACnC,6BAA6B;IAC7B,uEAAuE;AAC3E;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,qBAAqB;IACrB,YAAY;IACZ,aAAa;IACb,2EAA8D;IAC9D,wBAAwB;IACxB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,oBAAoB;IACpB,UAAU;IACV,uCAAuC;IACvC,mBAAmB;IACnB,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,iCAAiC;IACjC,gBAAgB;AACpB",sourcesContent:['@import url(\'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap\');\n\n:root{\n    --nav : #b7c57c; \n    --menuBg : #f8f8f8;\n    --menuItems : #d8dd9f; \n    --projectBttn : rgb(241, 181, 113);\n    --projectItems : rgb(241, 213, 113);\n    --projectHeading : #f4f5e2;\n    --todoItem : #f7f7f7;\n    --todoBorder : #858956;\n    --tickColour : rgb(68, 115, 68);\n}\n\n*{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    font-family: Roboto, Times, serif;\n}\n\nbody{\n    height: 100vh;\n    display: grid;\n    grid-template-rows: 0.12fr 1fr;\n    overflow: hidden;\n}\n\nnav{\n    padding: 1rem;\n    display: grid;\n    grid-auto-flow: column;\n    justify-content:space-around;\n    align-items: center;\n    background: var(--nav);\n}\n\nh1{\n    font-size: 2rem;\n}\n\n.icon{\n    width: 4vh;\n    height: 3.2vh;\n    background-size: cover;\n    background-repeat: no-repeat;\n    cursor: pointer;\n}\n\nnav > div{\n    background:url("./images/menu.svg");\n}\n\nnav > button{\n    border:none;\n    background:url("./images/plus.svg");\n}\n\n.displayBoard{\n    display: grid;\n    grid-template-columns: 30vw 1fr;\n    overflow: auto;\n}\n\n.menu{\n    grid-row:1/-1;\n    background-color: var(--menuBg);\n    padding: 2vw;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap:10px;\n    overflow: auto;\n}\n\n.menu-items{\n    padding: 1rem;\n    text-align: center;\n    width: clamp(90px, 60%, 500px);\n    font-size: clamp(12px, 2vw, 20px);\n    background-color: var(--menuItems);\n    border-radius: 10px;\n    cursor: pointer;\n}\n\n.menu-items:hover{\n    box-shadow: 3px 3px 4px #333;\n}\n\n.project{\n    background-color: var(--projectBttn);\n}\n\n.project-items{\n    width: clamp(80px, 50%, 400px);\n    background: var(--projectItems);\n    padding: 10px;\n    outline: none;\n    border: none;\n    word-wrap: break-word;\n}\n\n.todo-section{\n    grid-row:1/-1;\n    display: grid;\n    grid-template-rows: repeat(auto-fill, minmax(50px, auto));\n    gap: 10px;\n    padding:2vw;\n    overflow: auto;\n}\n\n.todoQuery{\n    height: 50px;\n    padding: 10px;\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-columns: 0.1fr 3fr repeat(3,0.1fr);\n    gap : 10px;\n    justify-content: space-between;\n    align-items: center;\n    border-radius: 5px;\n    border-left : 5px solid var(--todoBorder);\n    background-color: var(--todoItem);\n}\n\n.todoElem{\n    border: none;\n    background-color: inherit;\n    font-size: clamp(14px, 2vw, 20px);\n    outline: none;\n}\n\n.task{\n    width: clamp(80px, 100%, 100%);\n}\n\n.bttn {\n    -webkit-appearance: none;\n    appearance: none;\n    background-color: inherit;\n    margin: 0;\n    width: 1.3em;\n    height: 1.3em;\n    border: 0.1em solid var(--todoBorder);\n    border-radius: 0.5em;\n    display: grid;\n    place-content: center;\n}\n\n.bttn::before {\n    content: "";\n    width: 0.7em;\n    height: 0.7em;\n    transform: scale(0);\n    transition: 120ms transform ease-in-out;\n    background-color: var(--tickColour);\n    transform-origin: bottom left;\n    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);\n}\n\n.bttn:checked::before {\n    transform: scale(1);\n}\n\n.delBox{\n    display: none;\n}\n\n.del{\n    display: inline-block;\n    width: 1.5em;\n    height: 1.5em;\n    background: url("./images/delete.svg") no-repeat center center; \n    background-size: contain; \n    cursor: pointer; \n}\n\n.heading-div{\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    justify-self: center;\n    width: 50%;\n    background-color: var(--projectHeading);\n    border-radius: 10px;\n    padding: 5px 15px;\n    margin-bottom: 10px;\n}\n\n.project-heading{\n    font-size: clamp(15px, 2vw, 22px);\n    font-weight: 500;\n}'],sourceRoot:""}]);const g=p},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var A=this[c][0];null!=A&&(i[A]=!0)}for(var s=0;s<n.length;s++){var d=[].concat(n[s]);o&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},354:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),a="/*# ".concat(r," */");return[e].concat([a]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],c=0;c<n.length;c++){var A=n[c],s=o.base?A[0]+o.base:A[0],d=a[s]||0,l="".concat(s," ").concat(d);a[s]=d+1;var p=t(l),u={css:A[1],media:A[2],sourceMap:A[3],supports:A[4],layer:A[5]};if(-1!==p)e[p].references++,e[p].updater(u);else{var m=r(u,o);o.byIndex=c,e.splice(c,0,{identifier:l,updater:m,references:1})}i.push(l)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var A=o(n,r),s=0;s<a.length;s++){var d=t(a[s]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=A}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},420:(n,e,t)=>{n.exports=t.p+"bde675c38d54979f589e.svg"},952:(n,e,t)=>{n.exports=t.p+"2d4061552fac064ed076.svg"},569:(n,e,t)=>{n.exports=t.p+"3cffe9a515498593b872.svg"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,t.d({},{b:()=>D,a:()=>U});var o=t(72),r=t.n(o),a=t(825),i=t.n(a),c=t(659),A=t.n(c),s=t(56),d=t.n(s),l=t(540),p=t.n(l),u=t(113),m=t.n(u),f=t(365),g={};let C,B,I,b;if(g.styleTagTransform=m(),g.setAttributes=d(),g.insert=A().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=p(),r()(f.A,g),f.A&&f.A.locals&&f.A.locals,function(){let n;try{n=window.localStorage;const e="__storage_test__";return n.setItem(e,e),n.removeItem(e),!0}catch(e){return e instanceof DOMException&&"QuotaExceededError"===e.name&&n&&0!==n.length}}()){const n=localStorage.getItem("projectList"),e=localStorage.getItem("completedList");n&&e?(C=JSON.parse(n),B=JSON.parse(e)):n&&!e?(C=JSON.parse(n),B=[]):(C=[{name:"Default",todo:[]}],B=[])}else C=[{name:"Default",todo:[]}],B=[];function v(n=null,e="Default Project"){n?(I=n,b=e):(I=C[0].todo,b=e)}function h(n,e=[],t={}){const o=document.createElement(n);return e.forEach((n=>o.classList.add(n))),Object.entries(t).forEach((([n,e])=>o.setAttribute(n,e))),o}function x(n){const e=h("div",["todoQuery"],{"data-id":n}),t=h("input",["bttn","todoElem"],{type:"checkbox","data-id":n}),o=h("input",["task","todoElem"],{"data-id":n}),r=h("input",["date","todoElem"],{type:"date","data-id":n}),a=h("input",["priority","todoElem"],{type:"color","data-id":n}),i=h("input",["delBox","todoElem"],{type:"checkbox","data-id":n,id:n}),c=h("label",["del"],{for:n});return e.append(t,o,r,a,i,c),[e,t,o,r,a]}function y(n,e="Default Project"){U.innerHTML="",function(n){let e=h("div",["heading-div"]),t=h("div",["project-heading"]);if(t.textContent=`${n}`,/Project$/.test(n)&&!n.match(/^Upcoming .+ Project$/)&&!n.match(/^Default/)){const o=h("input",["delBox","projectElem"],{type:"checkbox",id:n}),r=h("label",["del"],{for:n});return e.append(t,o,r),void U.append(e)}e.append(t),U.append(e)}(e),n.forEach((n=>{let[e,t,o,r,a]=x(n.id);t.checked=n.check,o.value=n.task,r.value=n.date,a.value=n.priority,U.append(e)})),localStorage.setItem("projectList",JSON.stringify(C))}v(),document.addEventListener("click",(n=>{n.target.classList.contains("project-items")&&C.forEach((e=>{e.name===n.target.textContent&&(v(e.todo,`${e.name} Project`),y(e.todo,`${e.name} Project`))}))}));class w{constructor(n,e,t,o,r){this.id=n,this.check=e,this.task=t,this.date=o,this.priority=r}}function k(n){switch(n){case"all":let n=[];C.forEach((e=>e.todo.forEach((e=>n.push(e))))),y(n,"All Tasks");break;case"completed":y(B,"Completed Tasks");break;case"incomplete":y(I.filter((n=>!n.check&&Date.parse(n.date)>Date.now())),`Upcoming Tasks : ${b}`);break;default:y(I)}}const E=document.querySelector(".menu");function j(){E.className="menu",D.style.gridTemplateColumns="30vw 1fr";let n=["All tasks","Completed","Upcoming","Projects"],e=["all-tasks","completed-tasks","incomplete-tasks","project"];for(let t=0;t<4;t++){let o=document.createElement("div");o.classList.add("menu-items",`${e[t]}`),o.textContent=n[t],E.append(o)}S()}function S(){document.querySelectorAll(".project-items").forEach((n=>n.remove())),C.forEach((n=>{let e=document.createElement("div");e.classList.add("menu-items","project-items"),e.textContent=n.name,E.append(e)}))}function L(){E.textContent="",D.style.gridTemplateColumns="1fr",E.classList.remove("menu")}function T(){const n=document.querySelector(".all-tasks"),e=document.querySelector(".completed-tasks"),t=document.querySelector(".incomplete-tasks"),o=document.querySelector(".project");n.addEventListener("click",(()=>k("all"))),e.addEventListener("click",(()=>k("completed"))),t.addEventListener("click",(()=>k("incomplete"))),o.addEventListener("click",(()=>{let n=document.createElement("input");n.classList.add("menu-items","project-items"),E.append(n),n.focus(),n.onchange=()=>{C.push({name:n.value,todo:[]}),S()}}))}let q=!0,z=!0;const D=document.querySelector(".displayBoard"),U=document.querySelector(".todo-section");let R=document.querySelector("nav div");document.querySelector("button").addEventListener("click",(()=>{!function(){const n=Date.now();let[e,t,o,r,a]=x(n);U.append(e),o.focus(),I.push(new w(n,t.checked,o.value,r.value,a.value))}()})),document.addEventListener("change",(n=>{n.target.classList.contains("todoElem")&&function(n){const e=n.getAttribute("data-id"),t=I.find((n=>n.id==e)),o=I.findIndex((n=>n.id==e));t&&(n.classList.contains("task")?t.task=n.value:n.classList.contains("date")?t.date=n.value:n.classList.contains("priority")?t.priority=n.value:n.classList.contains("bttn")?(t.check=n.checked,setTimeout((()=>{I.splice(o,1),B.push(t),localStorage.setItem("completedList",JSON.stringify(B)),y(I)}),300)):n.classList.contains("delBox")&&I.splice(o,1),y(I,b))}(n.target),n.target.classList.contains("projectElem")&&(function(n){let e=n.getAttribute("id");e=e.split("Project")[0].trim(),"Default"!==e&&C.forEach(((n,t)=>{n.name===e&&(C.splice(t,1),v(),S(),y(I))}))}(n.target),S())})),window.addEventListener("resize",(()=>{window.matchMedia("(max-width: 600px)").matches?(L(),z=!1):z||(j(),T(),z=!0)})),j(),R.addEventListener("click",(()=>{q=!q,q?(j(),T()):L()})),T()})();
//# sourceMappingURL=app.bundle.js.map