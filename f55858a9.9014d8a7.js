(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{166:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(1),c=n(6),o=(n(0),n(170)),a={id:"clock",title:"clock",layout:"docs",section:"Commands",permalink:"docs/cmd/clock.html"},i={id:"clock",title:"clock",description:"Returns the current clock value for a watched root.",source:"@site/docs/clock.md",permalink:"/watchman/docs/clock",editUrl:"https://github.com/facebook/watchman/edit/master/website/docs/clock.md"},l=[],u={rightToc:l};function s(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Returns the current clock value for a watched root."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Since 3.9.")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"The ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"capabilities"}),"capability")," name associated with this enhanced\nfunctionality is ",Object(o.b)("inlineCode",{parentName:"em"},"clock-sync-timeout"),".")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"sync_timeout")," specifies the number of milliseconds that you want to wait to\nobserve a synchronization cookie. The synchronization cookie is created at the\nstart of your clock call and, once the cookie is observed, means that the\nclock value returned by this command is at least as current as the time of\nyour clock call."),Object(o.b)("p",null,"If no ",Object(o.b)("inlineCode",{parentName:"p"},"sync_timeout")," is specified, the returned clock value is the\ninstantaneous value of the clock associated with the watched root, and may be\nalmost immediately invalidated if there are any filesystem notifications that\nare yet to be processed."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ watchman clock /path/to/dir\n")),Object(o.b)("p",null,"JSON:"),Object(o.b)("p",null,"Note the third options argument is optional."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'["clock", "/path/to/dir", {"sync_timeout": 100}]\n')))}s.isMDXComponent=!0},170:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),c=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var u=c.a.createContext({}),s=function(e){var t=c.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},p=function(e){var t=s(e.components);return c.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,d=p["".concat(a,".").concat(m)]||p[m]||b[m]||o;return n?c.a.createElement(d,i({ref:t},u,{components:n})):c.a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var u=2;u<o;u++)a[u]=n[u];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);