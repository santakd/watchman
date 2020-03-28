(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return d}));var r=n(1),a=n(6),i=(n(0),n(170)),o={id:"dirname",title:"dirname & idirname"},c={id:"dirname",title:"dirname & idirname",description:"_Since version 3.1_",source:"@site/docs/dirname.md",permalink:"/watchman/docs/dirname",editUrl:"https://github.com/facebook/watchman/edit/master/website/docs/dirname.md",sidebar:"sidebar",previous:{title:"anyof",permalink:"/watchman/docs/anyof"},next:{title:"empty",permalink:"/watchman/docs/empty"}},p=[],l={rightToc:p};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Since version 3.1")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"dirname")," term allows matching on the parent directory structure for a\ngiven file."),Object(i.b)("p",null,"For the examples below, given a file with a wholename (the relative path from\nthe project root) of ",Object(i.b)("inlineCode",{parentName:"p"},"foo/bar/baz"),", the dirname portion is ",Object(i.b)("inlineCode",{parentName:"p"},"foo/bar"),"."),Object(i.b)("p",null,"The following two terms will match any file whose dirname is either exactly a\nmatch for ",Object(i.b)("inlineCode",{parentName:"p"},"foo/bar")," or is any child directory of ",Object(i.b)("inlineCode",{parentName:"p"},"foo/bar"),". The first of these\ntwo is a shortcut for the second:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'  ["dirname", "foo/bar"]\n  ["dirname", "foo/bar", ["depth", "ge", 0]]\n')),Object(i.b)("p",null,"The second of those terms uses a relational expression based on the depth of\nthe file within the specified dirname. A file is considered to have\n",Object(i.b)("inlineCode",{parentName:"p"},"depth == 0")," if it is contained directly within the specified dirname. It has\n",Object(i.b)("inlineCode",{parentName:"p"},"depth == 1")," if it is contained in a direct child directory of the specified\ndirname, ",Object(i.b)("inlineCode",{parentName:"p"},"depth == 2")," if it is contained in a grand-child directory and so on."),Object(i.b)("p",null,"The relational expression accepts the same relational operators as described\nin the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"size"}),"size term"),"."),Object(i.b)("p",null,"If you wanted to match only files that were directly in the ",Object(i.b)("inlineCode",{parentName:"p"},"foo/bar")," dir:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'  ["dirname", "foo/bar", ["depth", "eq", 0]]\n')),Object(i.b)("p",null,"If you wanted to match only files that were in a grand-child or deeper:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'  ["dirname", "foo/bar", ["depth", "ge", 2]]\n')),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"idirname")," is the case insensitive version of ",Object(i.b)("inlineCode",{parentName:"p"},"dirname"),". If the watched root\nis detected as a case insensitive fileystem, ",Object(i.b)("inlineCode",{parentName:"p"},"dirname")," is equivalent to\n",Object(i.b)("inlineCode",{parentName:"p"},"idirname"),"."))}d.isMDXComponent=!0},170:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=d(n),m=r,f=b["".concat(o,".").concat(m)]||b[m]||s[m]||i;return n?a.a.createElement(f,c({ref:t},l,{components:n})):a.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);