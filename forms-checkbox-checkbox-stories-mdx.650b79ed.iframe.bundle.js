"use strict";(self.webpackChunk_freud_ds_web=self.webpackChunk_freud_ds_web||[]).push([[9626],{"./stories/forms/checkbox/checkbox.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{_BGColor_:()=>_BGColor_,_Default_:()=>_Default_,_Disabled_:()=>_Disabled_,_Label_:()=>_Label_,__namedExportsOrder:()=>checkbox_stories_namedExportsOrder,default:()=>checkbox_stories});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),angular_dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),public_api=__webpack_require__("./projects/web-components/src/public-api.ts"),header_component=__webpack_require__("./stories/header/header.component.tsx"),animations=__webpack_require__("./node_modules/@angular/platform-browser/fesm2022/animations.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");(0,angular_dist.applicationConfig)({providers:[(0,core.importProvidersFrom)(animations.BrowserAnimationsModule)]});const Template=args=>({props:{...args},template:'\n      <freud-checkbox\n        [(ngModel)]="value"\n        [disabled]="disabled"\n        [label]="label"\n        [bgColor]="bgColor"\n        [invalid]="invalid">\n    </freud-checkbox>\n'}),Default=Template.bind({});Default.args={value:!1};const BGColor=Template.bind({});BGColor.args={label:"Label",bgColor:!0};const Disabled=Template.bind({});Disabled.args={label:"Label",disabled:!0};const Label=Template.bind({});Label.args={label:"Label"};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h2:"h2",pre:"pre",code:"code",p:"p",h3:"h3"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{decorators:[(0,angular_dist.moduleMetadata)({imports:[public_api.Jr]})],parameters:{layout:"centered",backgrounds:{default:"Default",values:[{name:"Default",value:"#FFFFFF"},{name:"BgColor",value:"#6732D1"}]}},title:"@freud-ds/web-components/Forms/Checkbox",component:public_api.L2}),"\n",(0,jsx_runtime.jsx)(header_component.z,{title:"Checkbox",description:"É usado em formulários quando um usuário precisa selecionar vários valores de várias opções."}),"\n",(0,jsx_runtime.jsxs)(_components.h2,{id:"import",children:[(0,jsx_runtime.jsx)("a",{id:"importing"}),"Import"]}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-ts",children:"import { FreudCheckboxModule } from '@freud-ds/web-components';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"O modo múltiplo é ativado por padrão, a propriedade ngModel refere-se a uma matriz para vincular os valores selecionados."}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"model-driven-forms",children:"Model Driven Forms"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"A caixa de seleção também pode ser usada em um formulário orientado a modelo.\nNeste caso, devido a um problema no Angular, vincule a instância formControl em vez de usar formControlName."}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-html\x3c!--",children:'<freud-checkbox formControlName="cities"></freud-checkbox>\n\n\x3c!-- Correct --\x3e\n<freud-checkbox [formControl]="myFormGroup.controls[\'cities\']"></freud-checkbox>\n'})}),"\n",(0,jsx_runtime.jsxs)(_components.h2,{id:"exemplos",children:[(0,jsx_runtime.jsx)("a",{id:"exemplos"}),"Exemplos"]}),"\n",(0,jsx_runtime.jsx)("br",{}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{story:Default})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"label",children:"Label"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{story:Label})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"disabled",children:"Disabled"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{story:Disabled})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"bg-color",children:"BG Color"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{style:{backgroundColor:"#241249"},children:(0,jsx_runtime.jsx)(dist.oG,{story:BGColor})}),"\n",(0,jsx_runtime.jsxs)(_components.h2,{id:"api",children:[(0,jsx_runtime.jsx)("a",{id:"api"}),"API"]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"label-1",children:"Label"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["O atributo ",(0,jsx_runtime.jsx)(_components.code,{children:"label"})," fornece um texto de rótulo para a caixa de seleção. Esse rótulo também pode ser clicado e alterna o estado marcado."]}),"\n",(0,jsx_runtime.jsx)(dist.Ed,{of:public_api.L2})]})}const _Default_=Default,_Label_=Label,_Disabled_=Disabled,_BGColor_=BGColor,componentMeta={title:"@freud-ds/web-components/Forms/Checkbox",parameters:{layout:"centered",backgrounds:{default:"Default",values:[{name:"Default",value:"#FFFFFF"},{name:"BgColor",value:"#6732D1"}]}},decorators:[(0,angular_dist.moduleMetadata)({imports:[public_api.Jr]})],component:public_api.L2,tags:["stories-mdx"],includeStories:["_Default_","_Label_","_Disabled_","_BGColor_"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const checkbox_stories=componentMeta,checkbox_stories_namedExportsOrder=["_Default_","_Label_","_Disabled_","_BGColor_"]}}]);