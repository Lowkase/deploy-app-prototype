(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"8+s/":function(e,t,a){"use strict";var r,n=a("q1tI"),l=(r=n)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var o=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,a){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==a&&"function"!=typeof a)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,s=[];function u(){c=e(s.map((function(e){return e.props}))),d.canUseDOM?t(c):a&&(c=a(c))}var d=function(e){var t,a;function n(){return e.apply(this,arguments)||this}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.peek=function(){return c},n.rewind=function(){if(n.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,s=[],e};var i=n.prototype;return i.UNSAFE_componentWillMount=function(){s.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},i.render=function(){return l.createElement(r,this.props)},n}(n.PureComponent);return i(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(d,"canUseDOM",o),d}}},PGGC:function(e,t,a){},RXBc:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),l=(a("PGGC"),a("qhky")),i=a("Wbzz"),o=function(e){return n.a.createElement("div",{className:"m-icon m-icon-"+e.type,onClick:e.handleClick,onKeyPress:e.handleClick,tabIndex:e.tabIndex},e.children)};o.defaultProps={type:"small",tabIndex:"0"};var c=o,s=function(e){return n.a.createElement("svg",{viewBox:"0 0 512 512",className:e.className},n.a.createElement("path",{d:"M64.671 146.502C27.711 188.049 3.457 241.62 0 300.62h60.76c3.259-42.488 20.112-81.161 46.32-111.709l-42.409-42.409zM249.305 332.188c-5.113 2.581-8.305 7.726-8.305 13.432.015 12.598 17.783 19.438 26.191 9.99l52.427-58.608-70.313 35.186zM85.882 125.291l42.409 42.409c30.548-26.208 70.221-43.061 112.709-46.32v-60c-59 3.456-113.57 26.951-155.118 63.911zM271 61.38v60c42.488 3.259 82.161 20.112 112.709 46.32l42.409-42.409C384.57 88.331 330 64.836 271 61.38zM447.329 146.502l-42.409 42.409c26.208 30.547 43.061 69.221 46.32 111.709H512c-3.457-59-27.711-112.571-64.671-154.118z"}),n.a.createElement("path",{d:"M450.731 330.62c-1.307 17.011-4.142 33.83-9.835 49.98a15.007 15.007 0 01-19.131 9.17c-7.822-2.754-11.924-11.323-9.17-19.131a165.1 165.1 0 009.404-55.02c0-45.487-18.501-86.733-48.375-116.611a.027.027 0 00-.007-.004l-.007-.011C343.733 169.12 301.487 150.62 256 150.62s-87.733 18.501-117.611 48.375l-.004.007-.011.007C108.501 228.886 90 270.133 90 315.62a165.1 165.1 0 009.404 55.02c2.754 7.808-1.348 16.377-9.17 19.131-7.749 2.739-16.362-1.362-19.131-9.17-5.693-16.15-8.527-32.968-9.835-49.98H0c2.146 36.632 11.7 67.637 25.107 95.464 7.178 14.897 22.939 24.536 40.151 24.536h381.468c17.227 0 32.988-9.639 40.181-24.551 13.239-27.556 23.031-60.256 25.093-95.449h-61.269zm-55.333-72.217L289.545 375.62c-27.25 30.48-78.545 11.411-78.545-30 0-17.124 9.525-32.536 24.838-40.23.02-.009.029-.029.049-.038l141.625-70.371c.049-.024.101-.016.15-.04 14.508-7.072 28.789 10.752 17.736 23.462z"}))},u=function(e){return n.a.createElement("svg",{viewBox:"0 0 30 32",className:e.className},n.a.createElement("g",{transform:"translate(4 -18)",fillRule:"evenodd"},n.a.createElement("path",{d:"M6.268 39.207h9.181l-4.59 4.406zM21.805 20v5.619L15.499 20zM4.692 21.724l4.79 3.844 3.532 3.936v9.703H8.478v-8.163a23 23 0 00-2.4-2.863c-.86-.869-2.293-2.12-4.3-3.752l2.914-2.705z"}),n.a.createElement("path",{d:"M17.175 21.414l3.091 2.718-2.704 2.407h-2.994l-1.554-1.63zM6.684 20L.12 26.056 0 20z"})))},d=function(e){return n.a.createElement("svg",{viewBox:"0 0 31 32",className:e.className},n.a.createElement("g",{transform:"translate(-12 -182)",fillRule:"nonzero"},n.a.createElement("path",{d:"M38.576 201.106l-6.001-2.85a48.254 48.254 0 01-3.43 4.08c-.399.423-.968.665-1.566.665a2.156 2.156 0 01-1.567-.665 48.262 48.262 0 01-3.429-4.08l-6.001 2.85A.996.996 0 0016 202c0 .379.225.725.582.894l10.526 5c.297.141.645.141.942 0l10.526-5a.996.996 0 00.582-.894.996.996 0 00-.582-.894z"}),n.a.createElement("path",{d:"M27.579 184c-4.068.004-7.364 3.136-7.368 7 0 3.593 5.91 9.954 6.585 10.668.2.211.484.332.783.332.299 0 .584-.12.783-.332.674-.714 6.585-7.075 6.585-10.668-.004-3.864-3.3-6.996-7.368-7zm0 11c-2.325 0-4.21-1.79-4.21-4s1.885-4 4.21-4 4.21 1.79 4.21 4c-.002 2.208-1.886 3.998-4.21 4z"})))},m=function(e){return n.a.createElement("svg",{viewBox:"0 0 32 32",className:e.className},n.a.createElement("g",{transform:"translate(-12 -246)",fillRule:"nonzero"},n.a.createElement("path",{d:"M39.462 248.003c-4.676-.089-10.008 2.498-13.384 6.51-3.225.065-6.366 1.464-8.679 3.911a.55.55 0 00-.123.54c.06.192.215.33.403.359l3.846.583-.475.563a.55.55 0 00.02.725l6.415 6.788a.484.484 0 00.685.02l.532-.502.551 4.07a.516.516 0 00.496.43.548.548 0 00.386-.17c2.28-2.412 3.603-5.736 3.664-9.15 3.796-3.579 6.26-9.22 6.151-14.161a.517.517 0 00-.488-.516zm-4.599 9.117a2.42 2.42 0 01-1.764.772 2.42 2.42 0 01-1.765-.772c-.972-1.03-.972-2.705 0-3.735a2.402 2.402 0 013.53 0c.972 1.03.972 2.706 0 3.735z"}),n.a.createElement("path",{d:"M18.719 264.905c-1.068 1.07-2.534 5.904-2.698 6.451a.502.502 0 00.622.623c.546-.164 5.37-1.633 6.438-2.703a3.099 3.099 0 000-4.371 3.085 3.085 0 00-4.362 0z"})))},f=function(e){return n.a.createElement("svg",{viewBox:"0 0 32 32",className:e.className},n.a.createElement("g",{transform:"translate(-14 -769)",fillRule:"nonzero"},n.a.createElement("path",{d:"M41.904 781.658c-.038-.337-.431-.59-.771-.59a2.663 2.663 0 01-2.483-1.643 2.67 2.67 0 01.67-2.965.666.666 0 00.074-.904 11.864 11.864 0 00-1.9-1.918.667.667 0 00-.911.073c-.715.792-1.998 1.086-2.99.672a2.663 2.663 0 01-1.62-2.603.665.665 0 00-.588-.7 11.97 11.97 0 00-2.697-.007.667.667 0 00-.594.686 2.668 2.668 0 01-1.642 2.558c-.98.4-2.255.108-2.968-.676a.669.669 0 00-.905-.076 11.909 11.909 0 00-1.94 1.918.667.667 0 00.072.91 2.657 2.657 0 01.67 2.992c-.413.986-1.436 1.621-2.608 1.621a.652.652 0 00-.693.589 12.01 12.01 0 00-.005 2.726c.038.339.443.59.787.59 1.044-.027 2.046.62 2.466 1.643a2.666 2.666 0 01-.67 2.965.666.666 0 00-.073.903c.557.71 1.196 1.355 1.897 1.919.275.221.674.19.912-.072.718-.794 2.001-1.087 2.99-.673a2.659 2.659 0 011.621 2.603c-.02.352.239.66.589.7a11.917 11.917 0 002.697.007.667.667 0 00.594-.686 2.665 2.665 0 011.64-2.557c.987-.403 2.256-.108 2.97.675a.67.67 0 00.904.076 11.936 11.936 0 001.94-1.918.666.666 0 00-.072-.91 2.657 2.657 0 01-.671-2.992 2.684 2.684 0 012.452-1.625l.149.004a.667.667 0 00.701-.588 12 12 0 00.006-2.727zm-11.896 5.356c-2.205 0-3.999-1.794-3.999-4 0-2.204 1.794-3.998 4-3.998 2.205 0 3.999 1.794 3.999 3.999s-1.794 4-4 4z"})))},h=function(e){return n.a.createElement("svg",{viewBox:"0 0 32 32",className:e.className},n.a.createElement("g",{transform:"translate(-14 -834)",fillRule:"nonzero"},n.a.createElement("path",{d:"M30 836c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945C35.634 844.177 33.322 841 30 841c-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246A9.954 9.954 0 0120 848c0-5.514 4.486-10 10-10s10 4.486 10 10a9.956 9.956 0 01-2.247 6.305z"})))},p=function(e){return n.a.createElement("nav",null,n.a.createElement("ul",{className:"logo"},n.a.createElement("li",null,n.a.createElement(i.a,{to:"/"},n.a.createElement(c,{type:"large"},n.a.createElement(u,{className:"theme-primary-color-fill"}))))),n.a.createElement("ul",{className:"site"},n.a.createElement("li",null,n.a.createElement(i.a,{to:"/",activeClassName:"theme-primary-color-active-nav"},n.a.createElement(c,{type:"large"},n.a.createElement(s,null)))),n.a.createElement("li",null,n.a.createElement(i.a,{to:"/dashboard/",activeClassName:"theme-primary-color-active-nav"},n.a.createElement(c,{type:"large"},n.a.createElement(d,null)))),n.a.createElement("li",null,n.a.createElement(i.a,{to:"/dashboard/",activeClassName:"theme-primary-color-active-nav"},n.a.createElement(c,{type:"large"},n.a.createElement(m,null))))),n.a.createElement("ul",{className:"util"},n.a.createElement("li",null,n.a.createElement(i.a,{to:"/dashboard/",activeClassName:"theme-primary-color-active-nav"},n.a.createElement(c,{type:"large"},n.a.createElement(f,null)))),n.a.createElement("li",null,n.a.createElement(i.a,{to:"/dashboard/",activeClassName:"theme-primary-color-active-nav"},n.a.createElement(c,{type:"large"},n.a.createElement(h,null))))))},g=a("17x9"),E=function(e){return n.a.createElement("main",null,e.props)};E.defaultProps={props:a.n(g).a.any};var y=E,b=function(e){return n.a.createElement("div",null,n.a.createElement(l.a,null,n.a.createElement("style",{type:"text/css"},"\n                    :root {\n                        --primary-color: #EC407A;\n                        --primary-color-hover: #C2185B;\n                    }\n                    \n                    .theme-primary-color-background {\n                        background: var(--primary-color) !important;\n                    }\n                    .theme-primary-color-background:hover {\n                        background: var(--primary-color-hover) !important;\n                    }\n\n                    .theme-primary-color-background {\n                        background: var(--primary-color) !important;\n                    }\n                    \n\n                    .theme-primary-color-fill, .theme-primary-color-fill > svg {\n                        fill: var(--primary-color) !important;\n                    }\n\n\n                    nav .theme-primary-color-active-nav svg {\n                        fill: var(--primary-color) !important;\n                    }\n                    \n                    .m-icon:hover svg {\n                        fill: var(--primary-color) !important;\n                    }\n\n\n\n                ")),n.a.createElement("div",{id:"theme",className:"darkTheme"},n.a.createElement("div",{className:"app t-layout"},n.a.createElement(p,null),n.a.createElement(y,{props:e.children}))))},v=a("i8i4"),w=a.n(v),T=function(e){return n.a.createElement("button",{className:"m-button "+e.scheme,onClick:e.handleClick,onKeyPress:e.handleClick,tabIndex:e.tabIndex,width:e.width},e.text)};T.defaultProps={tabIndex:"0",text:"BUTTON",width:"80"};var k=T,C=function(e){return n.a.createElement("div",{className:"m-button-group "+e.scheme},e.children)};C.defaultProps={scheme:""};var S=C,A=function(e){return n.a.createElement("div",{className:"m-notification"},n.a.createElement("div",{className:"title"},e.title),n.a.createElement("div",{className:"description"},e.description),n.a.createElement("div",{className:"action"},n.a.createElement("div",null,"READ"),n.a.createElement("div",null,"ARCHIVE")))},N=function(e){return n.a.createElement("svg",{viewBox:"0 0 47.971 47.971",className:e.className},n.a.createElement("path",{d:"M28.228 23.986L47.092 5.122a2.998 2.998 0 000-4.242 2.998 2.998 0 00-4.242 0L23.986 19.744 5.121.88a2.998 2.998 0 00-4.242 0 2.998 2.998 0 000 4.242l18.865 18.864L.879 42.85a2.998 2.998 0 104.242 4.241l18.865-18.864L42.85 47.091c.586.586 1.354.879 2.121.879s1.535-.293 2.121-.879a2.998 2.998 0 000-4.242L28.228 23.986z"}))},O=function(e){var t=e.isDrawerShowing,a=e.hideDrawer;return t?w.a.createPortal(n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"drawer-mask"}),n.a.createElement("div",{className:"drawer-con","aria-modal":!0,"aria-hidden":!0,tabIndex:-1,role:"dialog"},n.a.createElement("div",{className:"drawer"},n.a.createElement("div",{className:"drawer-header"},n.a.createElement("div",null,"Drawer Header"),n.a.createElement(c,{className:"drawer-close-button",type:"small",handleClick:a,"data-dismiss":"drawer","aria-label":"Close",role:"button"},n.a.createElement(N,null))),n.a.createElement("div",{className:"drawer-content"},n.a.createElement("ul",{className:"m-notifications"},n.a.createElement("li",null,n.a.createElement(A,{title:"Release candidate ready",description:"This is a description for a notification"})),n.a.createElement("li",null,n.a.createElement(A,{title:"Release candidate ready",description:"This is a description for a notification"})),n.a.createElement("li",null,n.a.createElement(A,{title:"Release candidate ready",description:"This is a description for a notification"})),n.a.createElement("li",null,n.a.createElement(A,{title:"Release candidate ready",description:"This is a description for a notification"})),n.a.createElement("li",null,n.a.createElement(A,{title:"Release candidate ready",description:"This is a description for a notification"})),n.a.createElement("li",null,n.a.createElement(A,{title:"Release candidate ready",description:"This is a description for a notification"})),n.a.createElement("li",null,n.a.createElement(A,{title:"Release candidate ready",description:"This is a description for a notification"})))),n.a.createElement("div",{className:"drawer-footer"},n.a.createElement(S,{scheme:"m-button-group-right"},n.a.createElement(k,{"aria-label":"Mark all as read",className:"m-button","data-dismiss":"modal",handleClick:a,scheme:"m-button-secondary theme-secondary-color-background",text:"Mark all as read"}),n.a.createElement(k,{"aria-label":"Archive",className:"m-button","data-dismiss":"modal",handleClick:a,scheme:"theme-primary-color-background",text:"Archive all"})))))),document.getElementById("theme")):null},M=function(){var e=Object(r.useState)(!1),t=e[0],a=e[1];return{isDrawerShowing:t,toggleDrawer:function(){a(!t)}}},x=function(e){return n.a.createElement("svg",{viewBox:"0 0 512 512",className:e.className},n.a.createElement("path",{d:"M511.97 243.904c-.216-3.277-1.236-6.539-3.041-9.549l-95.989-160A21.311 21.311 0 00394.65 64h-277.3a21.31 21.31 0 00-18.289 10.354l-95.989 160c-1.806 3.01-2.825 6.269-3.041 9.546-.068.488 0 161.433 0 161.433C.03 428.865 19.174 448 42.692 448h426.617c23.518 0 42.662-19.135 42.662-42.667-.001 0 .067-160.941-.001-161.429zm-106.654-9.237c-23.518 0-42.662 19.135-42.662 42.667 0 11.76-9.561 21.333-21.331 21.333H170.677c-11.769 0-21.331-9.573-21.331-21.333 0-23.531-19.144-42.667-42.662-42.667H52.637l76.794-128h253.137l76.794 128h-54.046z"}))},I=function(e){var t=M(),a=t.isDrawerShowing,r=t.toggleDrawer;return n.a.createElement("header",null,n.a.createElement(O,{isDrawerShowing:a,hideDrawer:r}),e.children,n.a.createElement("div",{className:"notification-inbox theme-primary-color-fill"},n.a.createElement(c,{type:"medium",handleClick:r},n.a.createElement(x,null))),n.a.createElement("div",{className:"notification-inbox-count"},"+99"))},R=function(e){var t=e.isModalShowing,a=e.hideModal;return t?w.a.createPortal(n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"modal-mask"}),n.a.createElement("div",{className:"modal-con","aria-modal":!0,"aria-hidden":!0,tabIndex:-1,role:"dialog"},n.a.createElement("div",{className:"modal"},n.a.createElement("div",{className:"modal-header"},n.a.createElement("div",null,"Modal Header"),n.a.createElement(c,{className:"modal-close-button",type:"small",handleClick:a,"data-dismiss":"modal","aria-label":"Close",role:"button"},n.a.createElement(N,null))),n.a.createElement("div",{className:"modal-content"},n.a.createElement("div",null,n.a.createElement("h1",null,"Tooks birds precedes contains laid start."),n.a.createElement("p",null,"I will take the Ring to Mordor. Shrink interesting until devouring inside launching Isildur's? Sodding funeral fit water mustn't Smeagol."),n.a.createElement("h2",null,"Troubled forged ablaze bird world's source Arwen."),n.a.createElement("p",null,"Don't you leave him, Samwise Gamgee. Horses slain unexpected been fair point worms who Elfs agents? Perish sauteed reforge Fenmarch much? Dwalin devil raising we'd draining defend!"),n.a.createElement("h3",null,"Required Meriadoc warts spoke committees filth hearth?"),n.a.createElement("p",null,"Water Treebeard suspect northeast day's key pursuit! Suffer everyday retake Ring force kitchen cooking neck raw. Forked Smeagol's pillage sowing tale binding. Today is my 111th birthday!"),n.a.createElement("ul",null,n.a.createElement("li",null,"Gollum's!"),n.a.createElement("li",null,"Boromir's."),n.a.createElement("li",null,"Elessar."),n.a.createElement("li",null,"Bifur."),n.a.createElement("li",null,"Lower.")),n.a.createElement("ul",null,n.a.createElement("li",null,"Forebearers favorite gather Wizards halls."),n.a.createElement("li",null,"Vagabond tempted Thorin promised pace wager."),n.a.createElement("li",null,"Greed toss no mindless number language Brego ready surety orders?"),n.a.createElement("li",null,"Rises locking fried tested Radagast the Brown."),n.a.createElement("li",null,"Dragged defeats nothing's distance hungry Bar-hrum courage.")),n.a.createElement("h3",null,"Mind brats possible Gamgee addled skin-changer ruby."),n.a.createElement("p",null,"Witch-king machine liquor escaped smallest. Grond horror wide distract fruity collared defenses. Do not take me for some conjurer of cheap tricks. Generous permitted unmade wandering Tooks concealed perfected."),n.a.createElement("h1",null,"Tooks birds precedes contains laid start."),n.a.createElement("p",null,"I will take the Ring to Mordor. Shrink interesting until devouring inside launching Isildur's? Sodding funeral fit water mustn't Smeagol."),n.a.createElement("h2",null,"Troubled forged ablaze bird world's source Arwen."),n.a.createElement("p",null,"Don't you leave him, Samwise Gamgee. Horses slain unexpected been fair point worms who Elfs agents? Perish sauteed reforge Fenmarch much? Dwalin devil raising we'd draining defend!"),n.a.createElement("h3",null,"Required Meriadoc warts spoke committees filth hearth?"),n.a.createElement("p",null,"Water Treebeard suspect northeast day's key pursuit! Suffer everyday retake Ring force kitchen cooking neck raw. Forked Smeagol's pillage sowing tale binding. Today is my 111th birthday!"),n.a.createElement("ul",null,n.a.createElement("li",null,"Gollum's!"),n.a.createElement("li",null,"Boromir's."),n.a.createElement("li",null,"Elessar."),n.a.createElement("li",null,"Bifur."),n.a.createElement("li",null,"Lower.")),n.a.createElement("ul",null,n.a.createElement("li",null,"Forebearers favorite gather Wizards halls."),n.a.createElement("li",null,"Vagabond tempted Thorin promised pace wager."),n.a.createElement("li",null,"Greed toss no mindless number language Brego ready surety orders?"),n.a.createElement("li",null,"Rises locking fried tested Radagast the Brown."),n.a.createElement("li",null,"Dragged defeats nothing's distance hungry Bar-hrum courage.")),n.a.createElement("h3",null,"Mind brats possible Gamgee addled skin-changer ruby."),n.a.createElement("p",null,"Witch-king machine liquor escaped smallest. Grond horror wide distract fruity collared defenses. Do not take me for some conjurer of cheap tricks. Generous permitted unmade wandering Tooks concealed perfected."))),n.a.createElement("div",{className:"modal-footer"},n.a.createElement(S,{scheme:"m-button-group-right"},n.a.createElement(k,{"aria-label":"Cancel",className:"m-button","data-dismiss":"modal",handleClick:a,scheme:"m-button-secondary theme-secondary-color-background",text:"Cancel"}),n.a.createElement(k,{"aria-label":"Apply",className:"m-button","data-dismiss":"modal",handleClick:a,scheme:"theme-primary-color-background",text:"Apply"})))))),document.getElementById("theme")):null},j=function(){var e=Object(r.useState)(!1),t=e[0],a=e[1];return{isModalShowing:t,toggleModal:function(){a(!t)}}};t.default=function(e){var t=j(),a=t.isModalShowing,r=t.toggleModal;return n.a.createElement(b,null,n.a.createElement(R,{isModalShowing:a,hideModal:r}),n.a.createElement(I,null,n.a.createElement("div",{className:"title"},"DASHBOARD")),n.a.createElement("section",null,n.a.createElement(k,{text:"THEME SWITCH",handleClick:function(){var e=document.getElementById("theme");"darkTheme"===e.className?e.className="lightTheme":e.className="darkTheme"},scheme:"m-button-secondary theme-secondary-color-background",tabIndex:"0",width:"200"}),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement(k,{text:"SHOW MODAL",handleClick:r,scheme:"m-button-secondary theme-secondary-color-background",tabIndex:"0",width:"200"}),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",null,n.a.createElement("h1",null,"Tooks birds precedes contains laid start."),n.a.createElement("p",null,"I will take the Ring to Mordor. Shrink interesting until devouring inside launching Isildur's? Sodding funeral fit water mustn't Smeagol."),n.a.createElement("h2",null,"Troubled forged ablaze bird world's source Arwen."),n.a.createElement("p",null,"Don't you leave him, Samwise Gamgee. Horses slain unexpected been fair point worms who Elfs agents? Perish sauteed reforge Fenmarch much? Dwalin devil raising we'd draining defend!"),n.a.createElement("h3",null,"Required Meriadoc warts spoke committees filth hearth?"),n.a.createElement("p",null,"Water Treebeard suspect northeast day's key pursuit! Suffer everyday retake Ring force kitchen cooking neck raw. Forked Smeagol's pillage sowing tale binding. Today is my 111th birthday!"),n.a.createElement("ul",null,n.a.createElement("li",null,"Gollum's!"),n.a.createElement("li",null,"Boromir's."),n.a.createElement("li",null,"Elessar."),n.a.createElement("li",null,"Bifur."),n.a.createElement("li",null,"Lower.")),n.a.createElement("ul",null,n.a.createElement("li",null,"Forebearers favorite gather Wizards halls."),n.a.createElement("li",null,"Vagabond tempted Thorin promised pace wager."),n.a.createElement("li",null,"Greed toss no mindless number language Brego ready surety orders?"),n.a.createElement("li",null,"Rises locking fried tested Radagast the Brown."),n.a.createElement("li",null,"Dragged defeats nothing's distance hungry Bar-hrum courage.")),n.a.createElement("h3",null,"Mind brats possible Gamgee addled skin-changer ruby."),n.a.createElement("p",null,"Witch-king machine liquor escaped smallest. Grond horror wide distract fruity collared defenses. Do not take me for some conjurer of cheap tricks. Generous permitted unmade wandering Tooks concealed perfected."),n.a.createElement("h1",null,"Tooks birds precedes contains laid start."),n.a.createElement("p",null,"I will take the Ring to Mordor. Shrink interesting until devouring inside launching Isildur's? Sodding funeral fit water mustn't Smeagol."),n.a.createElement("h2",null,"Troubled forged ablaze bird world's source Arwen."),n.a.createElement("p",null,"Don't you leave him, Samwise Gamgee. Horses slain unexpected been fair point worms who Elfs agents? Perish sauteed reforge Fenmarch much? Dwalin devil raising we'd draining defend!"),n.a.createElement("h3",null,"Required Meriadoc warts spoke committees filth hearth?"),n.a.createElement("p",null,"Water Treebeard suspect northeast day's key pursuit! Suffer everyday retake Ring force kitchen cooking neck raw. Forked Smeagol's pillage sowing tale binding. Today is my 111th birthday!"),n.a.createElement("ul",null,n.a.createElement("li",null,"Gollum's!"),n.a.createElement("li",null,"Boromir's."),n.a.createElement("li",null,"Elessar."),n.a.createElement("li",null,"Bifur."),n.a.createElement("li",null,"Lower.")),n.a.createElement("ul",null,n.a.createElement("li",null,"Forebearers favorite gather Wizards halls."),n.a.createElement("li",null,"Vagabond tempted Thorin promised pace wager."),n.a.createElement("li",null,"Greed toss no mindless number language Brego ready surety orders?"),n.a.createElement("li",null,"Rises locking fried tested Radagast the Brown."),n.a.createElement("li",null,"Dragged defeats nothing's distance hungry Bar-hrum courage.")),n.a.createElement("h3",null,"Mind brats possible Gamgee addled skin-changer ruby."),n.a.createElement("p",null,"Witch-king machine liquor escaped smallest. Grond horror wide distract fruity collared defenses. Do not take me for some conjurer of cheap tricks. Generous permitted unmade wandering Tooks concealed perfected."))))}},ZhWT:function(e,t){var a="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,l="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,i){if(t===i)return!0;if(t&&i&&"object"==typeof t&&"object"==typeof i){if(t.constructor!==i.constructor)return!1;var o,c,s,u;if(Array.isArray(t)){if((o=t.length)!=i.length)return!1;for(c=o;0!=c--;)if(!e(t[c],i[c]))return!1;return!0}if(r&&t instanceof Map&&i instanceof Map){if(t.size!==i.size)return!1;for(u=t.entries();!(c=u.next()).done;)if(!i.has(c.value[0]))return!1;for(u=t.entries();!(c=u.next()).done;)if(!e(c.value[1],i.get(c.value[0])))return!1;return!0}if(n&&t instanceof Set&&i instanceof Set){if(t.size!==i.size)return!1;for(u=t.entries();!(c=u.next()).done;)if(!i.has(c.value[0]))return!1;return!0}if(l&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(i)){if((o=t.length)!=i.length)return!1;for(c=o;0!=c--;)if(t[c]!==i[c])return!1;return!0}if(t.constructor===RegExp)return t.source===i.source&&t.flags===i.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===i.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===i.toString();if((o=(s=Object.keys(t)).length)!==Object.keys(i).length)return!1;for(c=o;0!=c--;)if(!Object.prototype.hasOwnProperty.call(i,s[c]))return!1;if(a&&t instanceof Element)return!1;for(c=o;0!=c--;)if(("_owner"!==s[c]&&"__v"!==s[c]&&"__o"!==s[c]||!t.$$typeof)&&!e(t[s[c]],i[s[c]]))return!1;return!0}return t!=t&&i!=i}(e,t)}catch(i){if((i.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw i}}},qhky:function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return pe}));var r,n,l,i,o=a("17x9"),c=a.n(o),s=a("8+s/"),u=a.n(s),d=a("ZhWT"),m=a.n(d),f=a("q1tI"),h=a.n(f),p=a("6qGY"),g=a.n(p),E="bodyAttributes",y="htmlAttributes",b="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(v).map((function(e){return v[e]})),"charset"),T="cssText",k="href",C="http-equiv",S="innerHTML",A="itemprop",N="name",O="property",M="rel",x="src",I="target",R={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},j="defaultTitle",P="defer",L="encodeSpecialCharacters",B="onChangeClientState",z="titleTemplate",D=Object.keys(R).reduce((function(e,t){return e[R[t]]=t,e}),{}),G=[v.NOSCRIPT,v.SCRIPT,v.STYLE],H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},F=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},_=function(e,t){var a={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(a[r]=e[r]);return a},Y=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},U=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},K=function(e){var t=X(e,v.TITLE),a=X(e,z);if(a&&t)return a.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=X(e,j);return t||r||void 0},V=function(e){return X(e,B)||function(){}},J=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return W({},e,t)}),{})},Z=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,a){if(!t.length)for(var r=Object.keys(a),n=0;n<r.length;n++){var l=r[n].toLowerCase();if(-1!==e.indexOf(l)&&a[l])return t.concat(a)}return t}),[])},$=function(e,t,a){var r={};return a.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+H(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,a){var n={};a.filter((function(e){for(var a=void 0,l=Object.keys(e),i=0;i<l.length;i++){var o=l[i],c=o.toLowerCase();-1===t.indexOf(c)||a===M&&"canonical"===e[a].toLowerCase()||c===M&&"stylesheet"===e[c].toLowerCase()||(a=c),-1===t.indexOf(o)||o!==S&&o!==T&&o!==A||(a=o)}if(!a||!e[a])return!1;var s=e[a].toLowerCase();return r[a]||(r[a]={}),n[a]||(n[a]={}),!r[a][s]&&(n[a][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var l=Object.keys(n),i=0;i<l.length;i++){var o=l[i],c=g()({},r[o],n[o]);r[o]=c}return e}),[]).reverse()},X=function(e,t){for(var a=e.length-1;a>=0;a--){var r=e[a];if(r.hasOwnProperty(t))return r[t]}return null},Q=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){Q(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Q:e.requestAnimationFrame||Q,ae="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ne=null,le=function(e,t){var a=e.baseTag,r=e.bodyAttributes,n=e.htmlAttributes,l=e.linkTags,i=e.metaTags,o=e.noscriptTags,c=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,d=e.title,m=e.titleAttributes;ce(v.BODY,r),ce(v.HTML,n),oe(d,m);var f={baseTag:se(v.BASE,a),linkTags:se(v.LINK,l),metaTags:se(v.META,i),noscriptTags:se(v.NOSCRIPT,o),scriptTags:se(v.SCRIPT,s),styleTags:se(v.STYLE,u)},h={},p={};Object.keys(f).forEach((function(e){var t=f[e],a=t.newTags,r=t.oldTags;a.length&&(h[e]=a),r.length&&(p[e]=f[e].oldTags)})),t&&t(),c(e,h,p)},ie=function(e){return Array.isArray(e)?e.join(""):e},oe=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),ce(v.TITLE,t)},ce=function(e,t){var a=document.getElementsByTagName(e)[0];if(a){for(var r=a.getAttribute("data-react-helmet"),n=r?r.split(","):[],l=[].concat(n),i=Object.keys(t),o=0;o<i.length;o++){var c=i[o],s=t[c]||"";a.getAttribute(c)!==s&&a.setAttribute(c,s),-1===n.indexOf(c)&&n.push(c);var u=l.indexOf(c);-1!==u&&l.splice(u,1)}for(var d=l.length-1;d>=0;d--)a.removeAttribute(l[d]);n.length===l.length?a.removeAttribute("data-react-helmet"):a.getAttribute("data-react-helmet")!==i.join(",")&&a.setAttribute("data-react-helmet",i.join(","))}},se=function(e,t){var a=document.head||document.querySelector(v.HEAD),r=a.querySelectorAll(e+"[data-react-helmet]"),n=Array.prototype.slice.call(r),l=[],i=void 0;return t&&t.length&&t.forEach((function(t){var a=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===S)a.innerHTML=t.innerHTML;else if(r===T)a.styleSheet?a.styleSheet.cssText=t.cssText:a.appendChild(document.createTextNode(t.cssText));else{var o=void 0===t[r]?"":t[r];a.setAttribute(r,o)}a.setAttribute("data-react-helmet","true"),n.some((function(e,t){return i=t,a.isEqualNode(e)}))?n.splice(i,1):l.push(a)})),n.forEach((function(e){return e.parentNode.removeChild(e)})),l.forEach((function(e){return a.appendChild(e)})),{oldTags:n,newTags:l}},ue=function(e){return Object.keys(e).reduce((function(t,a){var r=void 0!==e[a]?a+'="'+e[a]+'"':""+a;return t?t+" "+r:r}),"")},de=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,a){return t[R[a]||a]=e[a],t}),t)},me=function(e,t,a){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,a=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,n=de(a,r),[h.a.createElement(v.TITLE,n,e)];var e,a,r,n},toString:function(){return function(e,t,a,r){var n=ue(a),l=ie(t);return n?"<"+e+' data-react-helmet="true" '+n+">"+U(l,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+U(l,r)+"</"+e+">"}(e,t.title,t.titleAttributes,a)}};case E:case y:return{toComponent:function(){return de(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,a){var r,n=((r={key:a})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var a=R[e]||e;if(a===S||a===T){var r=t.innerHTML||t.cssText;n.dangerouslySetInnerHTML={__html:r}}else n[a]=t[e]})),h.a.createElement(e,n)}))}(e,t)},toString:function(){return function(e,t,a){return t.reduce((function(t,r){var n=Object.keys(r).filter((function(e){return!(e===S||e===T)})).reduce((function(e,t){var n=void 0===r[t]?t:t+'="'+U(r[t],a)+'"';return e?e+" "+n:n}),""),l=r.innerHTML||r.cssText||"",i=-1===G.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+n+(i?"/>":">"+l+"</"+e+">")}),"")}(e,t,a)}}}},fe=function(e){var t=e.baseTag,a=e.bodyAttributes,r=e.encode,n=e.htmlAttributes,l=e.linkTags,i=e.metaTags,o=e.noscriptTags,c=e.scriptTags,s=e.styleTags,u=e.title,d=void 0===u?"":u,m=e.titleAttributes;return{base:me(v.BASE,t,r),bodyAttributes:me(E,a,r),htmlAttributes:me(y,n,r),link:me(v.LINK,l,r),meta:me(v.META,i,r),noscript:me(v.NOSCRIPT,o,r),script:me(v.SCRIPT,c,r),style:me(v.STYLE,s,r),title:me(v.TITLE,{title:d,titleAttributes:m},r)}},he=u()((function(e){return{baseTag:Z([k,I],e),bodyAttributes:J(E,e),defer:X(e,P),encode:X(e,L),htmlAttributes:J(y,e),linkTags:$(v.LINK,[M,k],e),metaTags:$(v.META,[N,w,C,O,A],e),noscriptTags:$(v.NOSCRIPT,[S],e),onChangeClientState:V(e),scriptTags:$(v.SCRIPT,[x,S],e),styleTags:$(v.STYLE,[T],e),title:K(e),titleAttributes:J(b,e)}}),(function(e){ne&&ae(ne),e.defer?ne=te((function(){le(e,(function(){ne=null}))})):(le(e),ne=null)}),fe)((function(){return null})),pe=(n=he,i=l=function(e){function t(){return q(this,t),Y(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!m()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,a=e.child,r=e.arrayTypeChildren,n=e.newChildProps,l=e.nestedChildren;return W({},r,((t={})[a.type]=[].concat(r[a.type]||[],[W({},n,this.mapNestedChildrenToProps(a,l))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,a,r=e.child,n=e.newProps,l=e.newChildProps,i=e.nestedChildren;switch(r.type){case v.TITLE:return W({},n,((t={})[r.type]=i,t.titleAttributes=W({},l),t));case v.BODY:return W({},n,{bodyAttributes:W({},l)});case v.HTML:return W({},n,{htmlAttributes:W({},l)})}return W({},n,((a={})[r.type]=W({},l),a))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var a=W({},t);return Object.keys(e).forEach((function(t){var r;a=W({},a,((r={})[t]=e[t],r))})),a},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var a=this,r={};return h.a.Children.forEach(e,(function(e){if(e&&e.props){var n=e.props,l=n.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,a){return t[D[a]||a]=e[a],t}),t)}(_(n,["children"]));switch(a.warnOnInvalidChildren(e,l),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:r=a.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:l});break;default:t=a.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:l})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,a=_(e,["children"]),r=W({},a);return t&&(r=this.mapChildrenToProps(t,r)),h.a.createElement(n,r)},F(t,null,[{key:"canUseDOM",set:function(e){n.canUseDOM=e}}]),t}(h.a.Component),l.propTypes={base:c.a.object,bodyAttributes:c.a.object,children:c.a.oneOfType([c.a.arrayOf(c.a.node),c.a.node]),defaultTitle:c.a.string,defer:c.a.bool,encodeSpecialCharacters:c.a.bool,htmlAttributes:c.a.object,link:c.a.arrayOf(c.a.object),meta:c.a.arrayOf(c.a.object),noscript:c.a.arrayOf(c.a.object),onChangeClientState:c.a.func,script:c.a.arrayOf(c.a.object),style:c.a.arrayOf(c.a.object),title:c.a.string,titleAttributes:c.a.object,titleTemplate:c.a.string},l.defaultProps={defer:!0,encodeSpecialCharacters:!0},l.peek=n.peek,l.rewind=function(){var e=n.rewind();return e||(e=fe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);pe.renderStatic=pe.rewind}).call(this,a("yLpj"))},yLpj:function(e,t){var a;a=function(){return this}();try{a=a||new Function("return this")()}catch(r){"object"==typeof window&&(a=window)}e.exports=a}}]);
//# sourceMappingURL=component---src-pages-index-js-516d3e4972f2a9c917fc.js.map