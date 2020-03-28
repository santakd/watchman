(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{138:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(1),i=n(6),r=(n(0),n(170)),o={id:"trigger",title:"trigger"},l={id:"trigger",title:"trigger",description:"The trigger command will create or replace a trigger.",source:"@site/docs/trigger.md",permalink:"/watchman/docs/trigger",editUrl:"https://github.com/facebook/watchman/edit/master/website/docs/trigger.md",sidebar:"sidebar",previous:{title:"subscribe",permalink:"/watchman/docs/subscribe"},next:{title:"trigger-del",permalink:"/watchman/docs/trigger-del"}},s=[{value:"Extended syntax",id:"extended-syntax",children:[]},{value:"Simple syntax",id:"simple-syntax",children:[]},{value:"Environment for trigger commands",id:"environment-for-trigger-commands",children:[]},{value:"Relative roots",id:"relative-roots",children:[]}],c={rightToc:s};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The trigger command will create or replace a trigger."),Object(r.b)("p",null,"A trigger is a saved incremental query over a watched root. When files change\nthat match the query expression, Watchman will spawn a process and pass\ninformation about the changed files to it."),Object(r.b)("p",null,"Triggered processes are spawned by the Watchman server process that runs in\nthe background; they do not have access to your terminal and their output is\nredirected (by default) to the Watchman log file."),Object(r.b)("p",null,"Watchman waits for the filesystem to settle before processing any triggers,\nbatching the list of changed files together before invoking the registered\ncommand. You can adjust the settle period via the ",Object(r.b)("inlineCode",{parentName:"p"},".watchmanconfig")," file."),Object(r.b)("p",null,"Note that deleted files are counted as changed files and are passed the\ncommand in exactly the same way as changed-but-existing files."),Object(r.b)("p",null,"Watchman will only run a single instance of the trigger process at a time.\nThat avoids fork-bomb style behavior in cases where your trigger also modifies\nfiles. When the process terminates, watchman will re-evaluate the trigger\ncriteria based on the clock at the time the process was last spawned; if a\nfile list is generated watchman will spawn a new child with the files that\nchanged in the meantime."),Object(r.b)("p",null,"Unless ",Object(r.b)("inlineCode",{parentName:"p"},"no-save-state")," is in use, triggers are saved and re-established across\na Watchman process restart. If you had triggeres saved prior to upgrading to\nWatchman 2.9.7, those triggers will be forgotten as you upgrade past version\n2.9.7; you will need to re-register them."),Object(r.b)("p",null,"There are two syntaxes for registering triggers; a simple syntax that allows\nvery simple trigger configuration with some reasonable defaults, and a second\nextended syntax which is available since Watchman version 2.9.7."),Object(r.b)("p",null,"The simple syntax is implemented in terms of the extended syntax and is\npreserved for backwards compatibility with older clients."),Object(r.b)("h3",{id:"extended-syntax"},"Extended syntax"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Since 2.9.7.")),Object(r.b)("p",null,"You may use the extended JSON trigger definition syntax detailed below. It\nprovides more control over how the triggered commands are invoked than was\npossible in earlier versions."),Object(r.b)("p",null,"JSON:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'["trigger", "/path/to/dir", <triggerobj>]\n')),Object(r.b)("p",null,"Where ",Object(r.b)("inlineCode",{parentName:"p"},"triggerobj")," is a trigger configuration object with the fields defined\nbelow."),Object(r.b)("p",null,"Here's an example trigger specified via the CLI that will cause ",Object(r.b)("inlineCode",{parentName:"p"},"make")," to be\nrun whenever assets or sources are changed:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'$ watchman -j <<-EOT\n["trigger", "/path/to/root", {\n  "name": "assets",\n  "expression": ["pcre", "\\.(js|css|c|cpp)$"],\n  "command": ["make"]\n}]\nEOT\n')),Object(r.b)("p",null,"The possible trigger object properties are:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"name")," defines the name of the trigger. You may use this name to remove the\ntrigger later. Registering a different trigger with the same name as an\nexisting trigger will implicitly delete the old trigger and then register\nthe new one, causing the trigger expression to be evaluated for the whole\ntree.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"command")," specifies the command to invoke. It must be an array of string\nvalues; this will form the argv array of the trigger process. When the\ntrigger is spawned, the ",Object(r.b)("inlineCode",{parentName:"p"},"$PATH")," of the Watchman process will be used to\nlocate the command. If you have changed your ",Object(r.b)("inlineCode",{parentName:"p"},"$PATH")," since the Watchman\nprocess was started, Watchman won't be able to see your new ",Object(r.b)("inlineCode",{parentName:"p"},"$PATH"),". If you\nare registering trigger that runs something from an unusual or non-default\nlocation, it is recommended that you specify the full path to that command.\nIf you are registering a trigger script that can be found in the watched\nroot, just specify the path relative to the root.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"append_files")," is an optional boolean parameter; if enabled, the ",Object(r.b)("inlineCode",{parentName:"p"},"command"),"\narray will have the set of matching file names appended when the trigger is\ninvoked. System limits such as ",Object(r.b)("inlineCode",{parentName:"p"},"sysconf(_SC_ARG_MAX)")," and/or ",Object(r.b)("inlineCode",{parentName:"p"},"RLIMIT_STACK"),"\nset an upper bound on the size of the parameters and environment that are\npassed to a spawned process. Watchman will try to ensure that the command is\nrunnable by keeping the number of file name arguments below the system\nlimits. If the full set cannot be passed to the process, Watchman will pass\nas many as it thinks will fit and omit the rest. When this argument list\ntruncation occurs, Watchman will export ",Object(r.b)("inlineCode",{parentName:"p"},"WATCHMAN_FILES_OVERFLOW=true")," into\nthe environment so that the child process can determine that this has\nhappened. Watchman cannot break the arguments apart and run multiple\nprocesses for each argument batch; for that functionality, use ",Object(r.b)("inlineCode",{parentName:"p"},"xargs(1)"),"\nfor the ",Object(r.b)("inlineCode",{parentName:"p"},"command")," and set the ",Object(r.b)("inlineCode",{parentName:"p"},"stdin")," property to ",Object(r.b)("inlineCode",{parentName:"p"},"NAME_PER_LINE"),".")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"expression")," accepts a query expression. The expression is applied to the\nlist of changed files to generate the set of files that are relevant to this\ntrigger. If no files match, the command will not be invoked. Omitting the\nexpression will match all changed files.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"stdin")," specifies how stdin should be configured for the command invocation.\nYou may set the value of this property to one of the following:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"the string value ",Object(r.b)("inlineCode",{parentName:"p"},"/dev/null")," - sets stdin to read from ",Object(r.b)("inlineCode",{parentName:"p"},"/dev/null"),". This\nis the default and will be used if you omit the ",Object(r.b)("inlineCode",{parentName:"p"},"stdin")," property.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"an array value will be interpreted as a list of field names. When the\ncommand is invoked, Watchman will generate an array of JSON objects that\ncontain those field names on stdin. For example, if ",Object(r.b)("inlineCode",{parentName:"p"},"stdin")," is set to\n",Object(r.b)("inlineCode",{parentName:"p"},'["name", "size"]'),", stdin will be a JSON array containing the list of\nchanged files, represented as objects with the ",Object(r.b)("inlineCode",{parentName:"p"},"name")," and ",Object(r.b)("inlineCode",{parentName:"p"},"size"),"\nproperties: ",Object(r.b)("inlineCode",{parentName:"p"},'[{"name": "filename.txt", "size": 123}]'),". The list of valid\nfields is the same as the same as that documented in the ",Object(r.b)("inlineCode",{parentName:"p"},"query")," command.\nJust as with the ",Object(r.b)("inlineCode",{parentName:"p"},"query")," command, if the field list is comprised of a\nsingle field then the JSON will be an array of those field values. For\ninstance, if you set ",Object(r.b)("inlineCode",{parentName:"p"},"stdin")," to ",Object(r.b)("inlineCode",{parentName:"p"},'["name"]')," the JSON will be of the form\n",Object(r.b)("inlineCode",{parentName:"p"},'["filename.txt"]')," instead of ",Object(r.b)("inlineCode",{parentName:"p"},'[{"name": "filename.txt"}]'),".")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"the string value ",Object(r.b)("inlineCode",{parentName:"p"},"NAME_PER_LINE")," will cause Watchman to generate a list of\nfile names on stdin, one name per line. No quoting will be applied to the\nnames, and they may contain spaces.")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"stdout")," and ",Object(r.b)("inlineCode",{parentName:"p"},"stderr")," control the output and error streams. If omitted, the\ncorresponding stream will be inherited from the Watchman process, which\ntypically means that the command output/error stream will show up in the\nWatchman log file. If specified, the value must be a string:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},">path/to/file")," - causes output to redirected to the specified file. The\npath is relative to the watched root, and will be truncated prior to being\nwritten to, if it exists, or created if it does not exist.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},">>path/to/file")," - causes output to redirected to the specified file. The\npath is relative to the watched root. If the file already exists then it\nwill be appended to. The file will be created if it does not exist.")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"max_files_stdin")," specifies a limit on the number of files reported on stdin\nwhen stdin is set to hold the set of matched files. If the number of files\nthat matched exceeds this limit, the input will be truncated to match this\nlimit and ",Object(r.b)("inlineCode",{parentName:"p"},"WATCHMAN_FILES_OVERFLOW=true")," will also be exported into the\nenvironment. The default, if omitted, is no limit.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"chdir")," can be used to specify the working directory that should be set\nprior to spawning the process. The default is to set the working directory\nto the watched root. The value of this property is a string that will be\ninterpreted relative to the watched root. Note that changing the working dir\ndoes not cause the file names from the query result to be re-written: they\nwill ",Object(r.b)("em",{parentName:"p"},"always")," be relative to the watched root. The path to the root can be\nfound in the ",Object(r.b)("inlineCode",{parentName:"p"},"$WATCHMAN_ROOT")," environmental variable."))),Object(r.b)("h3",{id:"simple-syntax"},"Simple syntax"),Object(r.b)("p",null,"The simple syntax is easier to execute from the CLI than the JSON based\nextended syntax, but doesn't allow all of the trigger options to be set. In\nonly supports the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"simple-query"}),"Simple Pattern Syntax")," for queries."),Object(r.b)("p",null,"From the command line:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ watchman -- trigger /path/to/dir triggername [patterns] -- [cmd]\n")),Object(r.b)("p",null,"Note that the first ",Object(r.b)("inlineCode",{parentName:"p"},"--")," is to distinguish watchman CLI switches from the\nsecond ",Object(r.b)("inlineCode",{parentName:"p"},"--"),", which delimits patterns from the trigger command. This is only\nneeded when using the CLI, not when using the JSON protocol."),Object(r.b)("p",null,"JSON:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'["trigger", "/path/to/dir", "triggername", <patterns>, "--", <cmd>]\n')),Object(r.b)("p",null,"For example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ watchman -- trigger ~/www jsfiles '*.js' -- ls -l\n")),Object(r.b)("p",null,"Note the single quotes around the ",Object(r.b)("inlineCode",{parentName:"p"},"*.js"),"; if you omit them, your shell will\nexpand it to a list of file names and register those in the trigger. While\nthis would work, any ",Object(r.b)("inlineCode",{parentName:"p"},"*.js")," files that you add after registering the trigger\nwill not cause the trigger to run."),Object(r.b)("p",null,"or in JSON:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'["trigger", "/home/wez/www", "jsfiles", "*.js", "--", "ls", "-l"]\n')),Object(r.b)("p",null,"The simple syntax is interpreted as a trigger object with the following\nsettings:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"name")," is set to the ",Object(r.b)("inlineCode",{parentName:"li"},"triggername")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"command")," is set to the ",Object(r.b)("inlineCode",{parentName:"li"},"<cmd>")," list"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"expression")," is generated from the ",Object(r.b)("inlineCode",{parentName:"li"},"<patterns>")," list using the rules laid\nout in ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"simple-query"}),"Simple Pattern Syntax")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"append_files")," is set to ",Object(r.b)("inlineCode",{parentName:"li"},"true")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"stdin")," is set to ",Object(r.b)("inlineCode",{parentName:"li"},'["name", "exists", "new", "size", "mode"]')),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"stdout")," and ",Object(r.b)("inlineCode",{parentName:"li"},"stderr")," will be set to output to the Watchman log file"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"max_files_stdin")," will be left unset")),Object(r.b)("p",null,"For this simple example, if ",Object(r.b)("inlineCode",{parentName:"p"},"~/www/scripts/foo.js")," is changed, watchman will\nchdir to ",Object(r.b)("inlineCode",{parentName:"p"},"~/www")," then invoke ",Object(r.b)("inlineCode",{parentName:"p"},"ls -l scripts/foo.js"),". Note that the output will\nshow up in the Watchman log file, not in your terminal."),Object(r.b)("h3",{id:"environment-for-trigger-commands"},"Environment for trigger commands"),Object(r.b)("p",null,"Since Watchman version 2.9.7, the following environment variables are set for\nall trigger commands, even those registered using the simple trigger syntax:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"WATCHMAN_FILES_OVERFLOW")," is set to ",Object(r.b)("inlineCode",{parentName:"li"},"true")," if the number of files exceeds\neither the ",Object(r.b)("inlineCode",{parentName:"li"},"max_files_stdin")," limit or the system argument size limit."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"WATCHMAN_CLOCK")," is set to the current clock at the time of the trigger\ninvocation"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"WATCHMAN_SINCE")," is set to the clock value of the prior trigger invocation,\nor unset if this is the first trigger invocation."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"WATCHMAN_ROOT")," is set to the path to the watched root"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"WATCHMAN_TRIGGER")," is set to the name of the trigger"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"WATCHMAN_SOCK")," is set to the path to the Watchman socket, so that you can\nfigure out how to connect back to Watchman.")),Object(r.b)("h3",{id:"relative-roots"},"Relative roots"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Since 3.4.")),Object(r.b)("p",null,"Watchman supports optionally evaluating triggers with respect to a path within\na watched root. This is used with the ",Object(r.b)("inlineCode",{parentName:"p"},"relative_root")," parameter:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'[\n  "trigger",\n  "/path/to/watched/root",\n  {\n    "name": "relative-assets",\n    "expression": ["pcre", ".(js|css|c|cpp)$"],\n    "command": ["make"],\n    "relative_root": "project1"\n  }\n]\n')),Object(r.b)("p",null,"Setting a relative root results in the following modifications to triggers:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Queries are evaluated with respect to the relative root. See\n",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"file-query"}),"File Queries")," for more."),Object(r.b)("li",{parentName:"ul"},"The current directory for triggered processes is set to the relative root,\nunless it is changed with ",Object(r.b)("inlineCode",{parentName:"li"},"chdir"),". If ",Object(r.b)("inlineCode",{parentName:"li"},"chdir")," is a relative path then it\nwill be evaluated with respect to the relative root. So, for the example\ntrigger above, if ",Object(r.b)("inlineCode",{parentName:"li"},"chdir")," is ",Object(r.b)("inlineCode",{parentName:"li"},'"subdir2"'),", the current directory for\ntriggered ",Object(r.b)("inlineCode",{parentName:"li"},"make")," invocations is ",Object(r.b)("inlineCode",{parentName:"li"},"/path/to/watched/root/project1/subdir2"),"."),Object(r.b)("li",{parentName:"ul"},"In the environment, ",Object(r.b)("inlineCode",{parentName:"li"},"WATCHMAN_ROOT")," is still set to the actual root."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"WATCHMAN_RELATIVE_ROOT")," is set to the full path of the relative root.")),Object(r.b)("p",null,"Relative roots behave similarly to a separate Watchman watch on the\nsubdirectory, without any of the system overhead that that imposes. This is\nuseful for large repositories, where your script or tool is only interested in\na particular directory inside the repository."))}p.isMDXComponent=!0},170:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},b=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=p(n),h=a,d=b["".concat(o,".").concat(h)]||b[h]||m[h]||r;return n?i.a.createElement(d,l({ref:t},c,{components:n})):i.a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);