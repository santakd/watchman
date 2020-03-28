(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{155:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return h}));var a=n(1),i=n(6),r=(n(0),n(170)),o={id:"watch-project",title:"watch-project"},c={id:"watch-project",title:"watch-project",description:"_Since 3.1._",source:"@site/docs/watch-project.md",permalink:"/watchman/docs/watch-project",editUrl:"https://github.com/facebook/watchman/edit/master/website/docs/watch-project.md",sidebar:"sidebar",previous:{title:"watch-list",permalink:"/watchman/docs/watch-list"},next:{title:"Clockspec",permalink:"/watchman/docs/clockspec"}},s=[{value:"Rationale",id:"rationale",children:[]},{value:"What&#39;s a project path?",id:"whats-a-project-path",children:[]},{value:"Using watch-project",id:"using-watch-project",children:[]},{value:"Initiating a watch",id:"initiating-a-watch",children:[]},{value:"Persistence",id:"persistence",children:[]}],l={rightToc:s};function h(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Since 3.1.")),Object(r.b)("p",null,"Requests that the ",Object(r.b)("em",{parentName:"p"},"project")," containing the requested dir is watched for\nchanges. Watchman will track all files and dirs rooted at the ",Object(r.b)("em",{parentName:"p"},"project")," path,\nand respond with the relative path difference between the ",Object(r.b)("em",{parentName:"p"},"project")," path and\nthe requested dir."),Object(r.b)("h3",{id:"rationale"},"Rationale"),Object(r.b)("p",null,"With a proliferation of tools that wish to take advantage of filesystem\nwatching at different locations in a filesystem tree, it is possible and\nlikely for those tools to establish multiple overlapping watches."),Object(r.b)("p",null,"Most systems have a finite limit on the number of directories that can be\nwatched effectively; when that limit is exceeded the performance and\nreliability of filesystem watching is degraded, sometimes to the point that it\nceases to function."),Object(r.b)("p",null,"It is therefore desirable to avoid this situation and consolidate the\nfilesystem watches. Watchman offers the ",Object(r.b)("inlineCode",{parentName:"p"},"watch-project")," command to allow\nclients to opt-in to the watch consolidation behavior described below."),Object(r.b)("h3",{id:"whats-a-project-path"},"What's a project path?"),Object(r.b)("p",null,"A project is the logical root of a set of related files in a filesystem tree\nand is a good point at which to consolidate watches. Tools such as\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://bitbucket.org/facebook/hgwatchman"}),"hgwatchman")," will most likely have\nalready established a watch at the root of a project, so any other tools that\nwish to watch a sub-directory can do so for no additional cost if they re-use\nthat existing watch at a higher level in the filesystem tree."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"watch-project")," command uses a simple procedure to locate the ",Object(r.b)("em",{parentName:"p"},"project"),"\npath that corresponds to a given path. While simple it is rather verbose to\ndescribe it precisely:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"The search is begun with a list of file names; we'll refer to it as\n",Object(r.b)("inlineCode",{parentName:"li"},"root_files"),". Any file in this list, if present in a directory, identifies\nthat directory as being a valid project directory."),Object(r.b)("li",{parentName:"ol"},"The search is begun with the candidate directory set to the argument passed\nto ",Object(r.b)("inlineCode",{parentName:"li"},"watch-project"),". The candidate directory is passed to the ",Object(r.b)("inlineCode",{parentName:"li"},"realpath(3)"),"\nfunction and the result is set as the new value of the candidate directory."),Object(r.b)("li",{parentName:"ol"},"The candidate directory is concatenated with each of the ",Object(r.b)("inlineCode",{parentName:"li"},"root_files"),", one\nby one, and the resultant path is tested for existence. If the path exists\nthen the candidate directory is the path that will be used for watch and\nthe search is halted successfully."),Object(r.b)("li",{parentName:"ol"},"If none of the ",Object(r.b)("inlineCode",{parentName:"li"},"root_files")," can be found in the candidate directory then\nthe parent of the candidate directory is used as a new candidate and the\nprocess is repeated at step 3 above."),Object(r.b)("li",{parentName:"ol"},"If no viable candidates are found and the root of the filesystem is\nreached, then the search terminates unsuccessfully.")),Object(r.b)("p",null,"Watchman may perform the above search procedure twice. The logic is:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"root_files")," will be set to list only ",Object(r.b)("inlineCode",{parentName:"li"},".watchmanconfig")),Object(r.b)("li",{parentName:"ol"},"Perform the search procedure above"),Object(r.b)("li",{parentName:"ol"},"If the search terminates successfully, then the watch is established for\nthe current value of the candidate directory."),Object(r.b)("li",{parentName:"ol"},"If the search terminates unsuccessfully, ",Object(r.b)("inlineCode",{parentName:"li"},"root_files")," is set to the global\nconfiguration option ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"config#root_files"}),"root_files")," and the search\nprocedure is re-run."),Object(r.b)("li",{parentName:"ol"},"If the search terminates successfully, then the watch is established for\nthe current value of the candidate directory."),Object(r.b)("li",{parentName:"ol"},"If the global configuration option\n",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"config#enforce_root_files"}),"enforce_root_files")," is set to true then the\nwatch attempt fails."),Object(r.b)("li",{parentName:"ol"},"Otherwise, the watch is established for the original argument to the\n",Object(r.b)("inlineCode",{parentName:"li"},"watch-project")," command")),Object(r.b)("p",null,"What this means in laymans terms is that the definitive location of the\nproject root is where the ",Object(r.b)("inlineCode",{parentName:"p"},".watchmanconfig")," file is found. If it is not found\nthen the set of files defined by the ",Object(r.b)("inlineCode",{parentName:"p"},"root_files")," configuration is used to\nlocate a candidate."),Object(r.b)("p",null,"If no viable candidate is found then watchman will watch the requested\ndirectory, unless the ",Object(r.b)("inlineCode",{parentName:"p"},"enforce_root_files")," setting is set to true."),Object(r.b)("p",null,"The default value for ",Object(r.b)("inlineCode",{parentName:"p"},"root_files")," will match most common version control root\ndirectories. The default value for ",Object(r.b)("inlineCode",{parentName:"p"},"enforce_root_files")," is ",Object(r.b)("inlineCode",{parentName:"p"},"false"),"."),Object(r.b)("h3",{id:"using-watch-project"},"Using watch-project"),Object(r.b)("p",null,"Assuming that ",Object(r.b)("inlineCode",{parentName:"p"},"~/www/.hg")," and ",Object(r.b)("inlineCode",{parentName:"p"},"~/www/some/child/dir")," both exist, then the\ncommand:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'$ watchman watch-project ~/www/some/child/dir\n{\n  "version": "3.0.1",\n  "watch": "/Users/wez/www",\n  "relative_path": "some/child/dir"\n}\n')),Object(r.b)("p",null,"establishes a watch on the ",Object(r.b)("inlineCode",{parentName:"p"},"~/www")," directory because that is the directory\nthat contains ",Object(r.b)("inlineCode",{parentName:"p"},".hg"),", which is one of the items listed in the default value for\n",Object(r.b)("inlineCode",{parentName:"p"},"root_files"),"."),Object(r.b)("p",null,"As a client using ",Object(r.b)("inlineCode",{parentName:"p"},"watch-project")," it is important to observe the\n",Object(r.b)("inlineCode",{parentName:"p"},"relative_path")," and/or ",Object(r.b)("inlineCode",{parentName:"p"},"watch")," elements of the response; they identify which\ndirectory is actually being watched. ",Object(r.b)("strong",{parentName:"p"},"Any triggers, subscriptions or queries\nthat the client issues must be relative to the watched root to operate as\nexpected.")," A client can use ",Object(r.b)("inlineCode",{parentName:"p"},"relative_path")," to more easily construct queries\nor adjust the results of queries by either concatenating the string when\ncomposing paths in a query expression or removing the string from the prefix\nwhen processing the results."),Object(r.b)("p",null,"If ",Object(r.b)("inlineCode",{parentName:"p"},"relative_path")," is missing from the response it means that the requested\ndir is the same as the watched dir and that the ",Object(r.b)("inlineCode",{parentName:"p"},"watch-project")," invocation\nturned out to be exactly equivalent to a ",Object(r.b)("inlineCode",{parentName:"p"},"watch")," invocation for the requested\ndirectory."),Object(r.b)("p",null,"Note that, when you're using the CLI, you can specify the root as\n",Object(r.b)("inlineCode",{parentName:"p"},"~/www/some/child/dir")," because the shell will resolve ",Object(r.b)("inlineCode",{parentName:"p"},"~/www/some/child/dir"),"\nto ",Object(r.b)("inlineCode",{parentName:"p"},"/Users/wez/www/some/child/dir"),", but when you use the JSON protocol, you\nare responsible for supplying an absolute path."),Object(r.b)("p",null,"JSON:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'["watch", "/Users/wez/www/some/child/dir"]\n')),Object(r.b)("h3",{id:"initiating-a-watch"},"Initiating a watch"),Object(r.b)("p",null,"Once a viable candidate is found, if watchman is not already watching the\ndirectory, then watchman will:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Establish change notification for the directory with the kernel"),Object(r.b)("li",{parentName:"ul"},"Queues up a request to crawl the directory"),Object(r.b)("li",{parentName:"ul"},"As the directory contents are resolved, those are watched in a similar\nfashion"),Object(r.b)("li",{parentName:"ul"},"All newly observed files are considered changed")),Object(r.b)("h3",{id:"persistence"},"Persistence"),Object(r.b)("p",null,"Unless the ",Object(r.b)("inlineCode",{parentName:"p"},"--no-save-state")," server option was used to start the watchman\nservice, watches and their associated triggers are saved and re-established\nacross a process restart."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Since 3.7.")),Object(r.b)("p",null,"The watchman service may decide to reap watches that have been idle for an\nextended period of time. A watch is considered to be idle if no watchman\nqueries have been issued against the watch. If a watch is idle, and has no\ntriggers registered or active subscriptions then it is a candidate for\nreaping."),Object(r.b)("p",null,"The ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"config#idle-reap-age-seconds"}),"idle_reap_age_seconds")," configuration\nparameter controls the idle timeout for a watch. The default is 5 days. A\nreaped watch is cancelled and removed from the state file."))}h.isMDXComponent=!0},170:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),h=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=h(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=h(n),b=a,u=p["".concat(o,".").concat(b)]||p[b]||d[b]||r;return n?i.a.createElement(u,c({ref:t},l,{components:n})):i.a.createElement(u,c({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<r;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);