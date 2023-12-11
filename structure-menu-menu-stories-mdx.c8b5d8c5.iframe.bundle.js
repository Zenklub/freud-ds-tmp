"use strict";(self.webpackChunk_freud_ds_web=self.webpackChunk_freud_ds_web||[]).push([[2853],{"./stories/structure/menu/menu.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{_BGColor_:()=>_BGColor_,_Default_:()=>_Default_,__namedExportsOrder:()=>menu_stories_namedExportsOrder,default:()=>menu_stories});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),angular_dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),public_api=__webpack_require__("./projects/web-components/src/public-api.ts"),header_component=__webpack_require__("./stories/header/header.component.tsx"),animations=__webpack_require__("./node_modules/@angular/platform-browser/fesm2022/animations.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");const items=[{label:"Options",items:[{label:"Update",icon:"freud-icon freud-icon-refresh",command:()=>{}},{label:"Delete",icon:"freud-icon freud-icon-times"}]},{label:"Navigate",items:[{label:"Update",icon:"freud-icon freud-icon-external-link"},{label:"Router",icon:"freud-icon freud-icon-upload",routerLink:"/fileupload"}]}],Template=args=>({props:{...args},template:'\n    <freud-menu [items]="items" [popup]="popup"></freud-menu>\n  '}),Default=Template.bind({});Default.args={items};const BGColor=Template.bind({});BGColor.args={items};(0,angular_dist.applicationConfig)({providers:[(0,core.importProvidersFrom)(animations.BrowserAnimationsModule)]});var testing=__webpack_require__("./node_modules/@angular/router/fesm2022/testing.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h2:"h2",pre:"pre",code:"code",p:"p",h3:"h3"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{decorators:[(0,angular_dist.moduleMetadata)({imports:[public_api.yr,testing.Z_]})],parameters:{layout:"centered",viewMode:"docs",previewTabs:{canvas:{hidden:!0}}},title:"@freud-ds/web-components/Structure/Menu",component:public_api.Os}),"\n",(0,jsx_runtime.jsx)(header_component.z,{title:"Menu",description:"Um menu suspenso comum após clicar sobre algum elemento."}),"\n",(0,jsx_runtime.jsxs)(_components.h2,{id:"import",children:[(0,jsx_runtime.jsx)("a",{id:"importing"}),"Import"]}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-ts",children:"import { FreudMenuModule } from '@freud-ds/web-components';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["FreudMenu requer uma coleção de itens de menu, para isso utilize a interface ",(0,jsx_runtime.jsx)(_components.code,{children:"FreudMenuItem"})]}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-ts",children:"import { FreudMenuItem } from '@freud-ds/web-components';\n\nitems: FreudMenuItem[] = [{\n  label: 'Options',\n  items: [{\n    label: 'Update',\n    icon: 'freud-icon freud-icon-refresh',\n    command: () => {/* Comando */ }\n  },\n    {\n      label: 'Delete',\n      icon: 'freud-icon freud-icon-times'\n    }\n  ]}\n]\n"})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-html",children:'<freud-menu [items]="items" [popup]="false"> </freud-menu>\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"popup-mode",children:"Popup Mode"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"O menu é embutido por padrão, o modo pop-up também é compatível com a ativação da propriedade pop-up e o método de alternância de chamada passando o evento do elemento âncora."}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-html",children:'<freud-menu #menu [popup]="true" [items]="items"></freud-menu>\n<freud-button (click)="menu.reference.toggle($event)"\n  >Clique para mostrar menu!</freud-button\n>\n'})}),"\n",(0,jsx_runtime.jsxs)(_components.h2,{id:"exemplos",children:[(0,jsx_runtime.jsx)("a",{id:"exemplos"}),"Exemplos"]}),"\n",(0,jsx_runtime.jsx)("br",{}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{story:Default})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"bg-color",children:"BG Color"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{style:{backgroundColor:"#241249"},children:(0,jsx_runtime.jsx)(dist.oG,{story:BGColor})}),"\n",(0,jsx_runtime.jsxs)(_components.h2,{id:"api",children:[(0,jsx_runtime.jsx)("a",{id:"api"}),"API"]}),"\n",(0,jsx_runtime.jsx)(dist.Ed,{of:public_api.Os})]})}const _Default_=Default,_BGColor_=BGColor,componentMeta={title:"@freud-ds/web-components/Structure/Menu",parameters:{layout:"centered",viewMode:"docs",previewTabs:{canvas:{hidden:!0}}},decorators:[(0,angular_dist.moduleMetadata)({imports:[public_api.yr,testing.Z_]})],component:public_api.Os,tags:["stories-mdx"],includeStories:["_Default_","_BGColor_"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const menu_stories=componentMeta,menu_stories_namedExportsOrder=["_Default_","_BGColor_"]}}]);