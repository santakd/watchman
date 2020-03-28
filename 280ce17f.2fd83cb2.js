(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{110:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(1),i=n(6),r=(n(0),n(170)),o={id:"subscribe",title:"subscribe"},s={id:"subscribe",title:"subscribe",description:"_Since 1.6_",source:"@site/docs/subscribe.md",permalink:"/watchman/docs/subscribe",editUrl:"https://github.com/facebook/watchman/edit/master/website/docs/subscribe.md",sidebar:"sidebar",previous:{title:"state-leave",permalink:"/watchman/docs/state-leave"},next:{title:"trigger",permalink:"/watchman/docs/trigger"}},c=[{value:"Filesystem Settling",id:"filesystem-settling",children:[]},{value:"Advanced Settling",id:"advanced-settling",children:[{value:"defer",id:"defer",children:[]},{value:"drop",id:"drop",children:[]}]},{value:"Source Control Aware Subscriptions",id:"source-control-aware-subscriptions",children:[]}],l={rightToc:c};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Since 1.6")),Object(r.b)("p",null,"Subscribes to changes against a specified root and requests that they be sent\nto the client via its connection. The updates will continue to be sent while\nthe connection is open. If the connection is closed, the subscription is\nimplicitly removed."),Object(r.b)("p",null,"This makes the most sense in an application connecting via the socket\ninterface, but you may also subscribe via the command line tool if you're\ninterested in observing the changes for yourself:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'$ watchman -j --server-encoding=json -p <<-EOT\n["subscribe", "/path/to/root", "mysubscriptionname", {\n  "expression": ["allof",\n    ["type", "f"],\n    ["not", "empty"],\n    ["suffix", "php"]\n  ],\n  "fields": ["name"]\n}]\nEOT\n')),Object(r.b)("p",null,"The example above registers a subscription against the specified root with the\nname ",Object(r.b)("inlineCode",{parentName:"p"},"mysubscriptionname"),"."),Object(r.b)("p",null,"The response to a subscribe command looks like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "version": "1.6",\n  "subscribe": "mysubscriptionname"\n}\n')),Object(r.b)("p",null,"When the subscription is first established, the expression term is evaluated\nand if any files match, a subscription notification packet is generated and\nsent, unilaterally to the client."),Object(r.b)("p",null,"Then, each time a change is observed, and after the settle period has passed,\nthe expression is evaluated again. If any files are matched, the server will\nunilaterally send the query results to the client with a packet that looks\nlike this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "version": "1.6",\n  "clock": "c:1234:123",\n  "files": ["one.php"],\n  "root": "/path/being/watched",\n  "subscription": "mysubscriptionname"\n}\n')),Object(r.b)("p",null,"The subscribe command object allows the client to specify a since parameter;\nif present in the command, the initial set of subscription results will only\ninclude files that changed since the specified clockspec, equivalent to using\nthe ",Object(r.b)("inlineCode",{parentName:"p"},"query")," command with the ",Object(r.b)("inlineCode",{parentName:"p"},"since")," generator."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'[\n  "subscribe",\n  "/path/to/root",\n  "myname",\n  {\n    "since": "c:1234:123",\n    "expression": ["not", "empty"],\n    "fields": ["name"]\n  }\n]\n')),Object(r.b)("p",null,'The suggested mode of operation is for the client process to maintain its own\nlocal copy of the last "clock" value and use that to establish the\nsubscription when it first connects.'),Object(r.b)("h2",{id:"filesystem-settling"},"Filesystem Settling"),Object(r.b)("p",null,"Prior to watchman version 3.2, the settling behavior was to hold subscription\nnotifications until the kernel notification stream was complete."),Object(r.b)("p",null,"Starting in watchman version 3.2, after the notification stream is complete,\nif the root appears to be a version control directory, subscription\nnotifications will be held until an outstanding version control operation is\ncomplete (at the time of writing, this is based on the presence of either\n",Object(r.b)("inlineCode",{parentName:"p"},".hg/wlock")," or ",Object(r.b)("inlineCode",{parentName:"p"},".git/index.lock"),"). This behavior matches triggers and helps to\navoid performing transient work in response to files changing, for example,\nduring a rebase operation."),Object(r.b)("p",null,"In some circumstances it is desirable for a client to observe the creation of\nthe control files at the start of a version control operation. You may specify\nthat you want this behavior by passing the ",Object(r.b)("inlineCode",{parentName:"p"},"defer_vcs")," flag to your\nsubscription command invocation:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'$ watchman -j -p <<-EOT\n["subscribe", "/path/to/root", "mysubscriptionname", {\n  "expression": ["allof",\n    ["type", "f"],\n    ["not", "empty"],\n    ["suffix", "php"]\n  ],\n  "defer_vcs": false,\n  "fields": ["name"]\n}]\nEOT\n')),Object(r.b)("h2",{id:"advanced-settling"},"Advanced Settling"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Since 4.4")),Object(r.b)("p",null,"In more complex integrations it is desirable to be able to have a watchman\naware application signal the beginning and end of some work that will generate\na lot of change notifications. For example, Mercurial or Git could communicate\nwith watchman before and after updating the working copy."),Object(r.b)("p",null,"Some applications will want to know that the update is in progress and\ncontinue to process notifications. Others may want to defer processing the\nnotifications until the update completes, and some may wish to drop any\nnotifications produced while the update was in progress."),Object(r.b)("p",null,"Watchman subscriptions provide the mechanism for each of these use cases and\nexpose it via two new fields in the subscription object; ",Object(r.b)("inlineCode",{parentName:"p"},"defer")," and ",Object(r.b)("inlineCode",{parentName:"p"},"drop"),"\nare described below."),Object(r.b)("p",null,"It can be difficult to mix ",Object(r.b)("inlineCode",{parentName:"p"},"defer")," and ",Object(r.b)("inlineCode",{parentName:"p"},"drop")," with multiple overlapping states\nin the context of a given subscription stream as there is a single cursor to\ntrack the subscription position."),Object(r.b)("p",null,"If your application uses multiple overlapping states and wants to ",Object(r.b)("inlineCode",{parentName:"p"},"defer")," some\nresults and ",Object(r.b)("inlineCode",{parentName:"p"},"drop")," others, it is recommended that you use ",Object(r.b)("inlineCode",{parentName:"p"},"drop")," for all of\nthe states and then issues queries with ",Object(r.b)("inlineCode",{parentName:"p"},"since")," terms bounded by the ",Object(r.b)("inlineCode",{parentName:"p"},"clock"),"\nfields from the subscription state PDUs to ensure that it observes all of the\nresults of interest."),Object(r.b)("h3",{id:"defer"},"defer"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'[\n  "subscribe",\n  "/path/to/root",\n  "mysubscriptionname",\n  {\n    "defer": ["mystatename"],\n    "fields": ["name"]\n  }\n]\n')),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"defer")," field specifies a list of state names for which the subscriber\nwishes to defer the notification stream. When a watchman client signals that a\nstate has been entered via the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"state-enter"}),"state-enter")," command, if the\nstate name matches any in the ",Object(r.b)("inlineCode",{parentName:"p"},"defer")," list then the subscription will emit a\nunilateral subscription PDU like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "subscription":  "mysubscriptionname",\n  "root":          "/path/to/root",\n  "state-enter":   "mystatename",\n  "clock":         "<clock>",\n  "metadata":      <metadata from the state-enter command>\n}\n')),Object(r.b)("p",null,"Watchman will then defer sending any subscription PDUs with ",Object(r.b)("inlineCode",{parentName:"p"},"files")," payloads\nuntil the state is vacated either by a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"state-leave"}),"state-leave")," command or\nby the client that entered the state disconnecting from the watchman service."),Object(r.b)("p",null,"Once the state is vacated, watchman will emit a unilateral subscription PDU\nlike this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "subscription":  "mysubscriptionname",\n  "root":          "/path/to/root",\n  "state-leave":   "mystatename",\n  "clock":         "<clock>",\n  "metadata":      <metadata from the exit-state command>\n}\n')),Object(r.b)("p",null,"The subscription stream will then be re-enabled and notifications received\nsince the corresponding ",Object(r.b)("inlineCode",{parentName:"p"},"state-enter")," will be delivered to clients."),Object(r.b)("h3",{id:"drop"},"drop"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'[\n  "subscribe",\n  "/path/to/root",\n  "mysubscriptionname",\n  {\n    "drop": ["mystatename"],\n    "fields": ["name"]\n  }\n]\n')),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"drop")," field specifies a list of state names for which the subscriber\nwishes to discard the notification stream. It works very much like ",Object(r.b)("inlineCode",{parentName:"p"},"defer")," as\ndescribed above, but when a state is vacated, the pending notification stream\nis fast-forwarded to the clock of the ",Object(r.b)("inlineCode",{parentName:"p"},"state-leave")," command, effectively\nsuppressing any notifications that were generated between the ",Object(r.b)("inlineCode",{parentName:"p"},"state-enter"),"\nand the ",Object(r.b)("inlineCode",{parentName:"p"},"state-leave")," commands."),Object(r.b)("h2",{id:"source-control-aware-subscriptions"},"Source Control Aware Subscriptions"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Since 4.9")),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"scm-query"}),"Read more about these here")))}b.isMDXComponent=!0},170:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),b=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},p=function(e){var t=b(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=b(n),m=a,u=p["".concat(o,".").concat(m)]||p[m]||d[m]||r;return n?i.a.createElement(u,s({ref:t},l,{components:n})):i.a.createElement(u,s({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);