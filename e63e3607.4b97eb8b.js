(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{164:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return m}));var a=n(1),r=n(6),o=(n(0),n(170)),i={id:"name",title:"name & iname"},c={id:"name",title:"name & iname",description:"The `name` expression performs exact matches against file names. By default it",source:"@site/docs/name.md",permalink:"/watchman/docs/name",editUrl:"https://github.com/facebook/watchman/edit/master/website/docs/name.md",sidebar:"sidebar",previous:{title:"match & imatch",permalink:"/watchman/docs/match"},next:{title:"not",permalink:"/watchman/docs/not"}},p=[],l={rightToc:p};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"name")," expression performs exact matches against file names. By default it\nis scoped to the basename of the file:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'["name", "Makefile"]\n')),Object(o.b)("p",null,"You may specify multiple names to match against by setting the second argument\nto an array:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'["name", ["foo.txt", "Makefile"]]\n')),Object(o.b)("p",null,"This second form can be accelerated and is preferred over an ",Object(o.b)("inlineCode",{parentName:"p"},"anyof"),"\nconstruction."),Object(o.b)("p",null,"You may change the scope of the match via the optional third argument:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'["name", "path/to/file.txt", "wholename"]\n["name", ["path/to/one", "path/to/two"], "wholename"]\n')),Object(o.b)("p",null,"Finally, you may specify case insensitive evaluation by using ",Object(o.b)("inlineCode",{parentName:"p"},"iname")," instead\nof ",Object(o.b)("inlineCode",{parentName:"p"},"name"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Since 2.9.9.")),Object(o.b)("p",null,"Starting in version 2.9.9, on macOS systems where the watched root is a case\ninsensitive filesystem (this is the common case for macOS), ",Object(o.b)("inlineCode",{parentName:"p"},"name")," is\nequivalent to ",Object(o.b)("inlineCode",{parentName:"p"},"iname"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Since 4.7.")),Object(o.b)("p",null,"You can override the case sensitivity of all name matching operations used in\nthe query by setting the ",Object(o.b)("inlineCode",{parentName:"p"},"case_sensitive")," field in your query."))}m.isMDXComponent=!0},170:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),m=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},s=function(e){var t=m(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=m(n),u=a,f=s["".concat(i,".").concat(u)]||s[u]||b[u]||o;return n?r.a.createElement(f,c({ref:t},l,{components:n})):r.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);