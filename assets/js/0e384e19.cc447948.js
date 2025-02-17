"use strict";(self.webpackChunkwebsite_miralis=self.webpackChunkwebsite_miralis||[]).push([[976],{8775:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>j,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var t=i(4848),s=i(8453);function r(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"miralis",children:"Miralis"})}),"\n",(0,t.jsx)(n.p,{children:"Miralis is an experimental system that virtualises firmware to enforce strong isolation between opaque and SoC-dependant firmware and user-controlled hypervisor or operating system."}),"\n",(0,t.jsx)(n.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,t.jsxs)(n.p,{children:["The Miralis project uses ",(0,t.jsx)(n.a,{href:"https://github.com/casey/just",children:(0,t.jsx)(n.code,{children:"just"})})," to easily build, run, and test code.\nYou can easily install ",(0,t.jsx)(n.code,{children:"just"})," with your favorite package manager or ",(0,t.jsx)(n.code,{children:"cargo"})," by following ",(0,t.jsx)(n.a,{href:"https://just.systems/man/en/chapter_4.html",children:"the instructions"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Miralis is primary developed and tested on QEMU, therefore you will need to install ",(0,t.jsx)(n.code,{children:"qemu-system-riscv64"})," on your system.\nThen you will need to install the rust toolchain, if rust is installed through rustup on the machine this can be done by running ",(0,t.jsx)(n.code,{children:"just install-toolchain"})]}),"\n",(0,t.jsxs)(n.p,{children:["Then running Miralis is as simple as invoking ",(0,t.jsx)(n.code,{children:"just run"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"project-organisation",children:"Project Organisation"}),"\n",(0,t.jsxs)(n.p,{children:["The Miralis sources live in ",(0,t.jsx)(n.code,{children:"src"}),", that is where the main body of code live for now.\nMiralis does nothing by itself, however, and it needs a ",(0,t.jsx)(n.em,{children:"firmware"})," to virtualise.\nThe ",(0,t.jsx)(n.code,{children:"firmware"})," folder contains simple firmware used for testing, including the ",(0,t.jsx)(n.code,{children:"default"})," firmware selected by ",(0,t.jsx)(n.code,{children:"just run"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["To make development and testing easier, the ",(0,t.jsx)(n.code,{children:"runner"})," folder contains a simple command line tool to build, prepare, and load executables on QEMU.\nThe runner is invoked automatically by ",(0,t.jsx)(n.code,{children:"just run"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"justfile"})," holds a collection of useful commands, you can think of it as similar to a Makefile without the C build system bits.\nRunning ",(0,t.jsx)(n.code,{children:"just"})," or ",(0,t.jsx)(n.code,{children:"just help"})," give the list of available commands."]}),"\n",(0,t.jsx)(n.h2,{id:"testing-and-debugging",children:"Testing and Debugging"}),"\n",(0,t.jsxs)(n.p,{children:["Integration tests can be run with ",(0,t.jsx)(n.code,{children:"just test"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The firmware can be selected as an additional argument to ",(0,t.jsx)(n.code,{children:"just run"}),".\nValid firmware are either names of firmware under the ",(0,t.jsx)(n.code,{children:"./firmware/"})," directory, some pre-build binaries (such as ",(0,t.jsx)(n.code,{children:"opensbi"}),"), or paths to external firmware images.\nThus, ",(0,t.jsx)(n.code,{children:"just run opensbi"})," will execute OpenSBI on top of Miralis."]}),"\n",(0,t.jsxs)(n.p,{children:["We provide support for debugging with GDB.\nTo start a GDB session, first run Miralis with ",(0,t.jsx)(n.code,{children:"just debug"})," and then run ",(0,t.jsx)(n.code,{children:"just gdb"})," in another terminal.\nSimilar to ",(0,t.jsx)(n.code,{children:"just run"}),", ",(0,t.jsx)(n.code,{children:"just debug"})," takes an optional firmware argument which can be used to debug a particular image.\nDebugging with GDB requires a RISC-V capable GDB executable in path.\nIf ",(0,t.jsx)(n.code,{children:"just gdb"})," can't locate such a binary it will provide a list of supported GDB binaries, installing any one of them will resolve the issue."]}),"\n",(0,t.jsxs)(n.p,{children:["The log level can be adjusted using a ",(0,t.jsx)(n.code,{children:"config.toml"})," file. See ",(0,t.jsx)(n.code,{children:"./config/example.config.toml"})," for reference."]}),"\n",(0,t.jsx)(n.h2,{id:"contributing",children:"Contributing"}),"\n",(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"/docs/contributing",children:"docs/contributing.md"}),"."]})]})}function o(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}const a={title:"Introduction",sidebar_position:1},d=void 0,l={id:"intro",title:"Introduction",description:"",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Introduction",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Tooling",permalink:"/docs/tooling"}},c={},u=[{value:"Getting Started",id:"getting-started",level:2},{value:"Project Organisation",id:"project-organisation",level:2},{value:"Testing and Debugging",id:"testing-and-debugging",level:2},{value:"Contributing",id:"contributing",level:2}];function h(e){return(0,t.jsx)(o,{})}function j(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h()}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var t=i(6540);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);