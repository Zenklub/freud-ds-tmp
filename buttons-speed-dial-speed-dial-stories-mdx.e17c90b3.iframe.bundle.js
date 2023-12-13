"use strict";(self.webpackChunk_freud_ds_web=self.webpackChunk_freud_ds_web||[]).push([[1277],{"./stories/buttons/speed-dial/speed-dial.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{_BGColor_:()=>_BGColor_,_DirectionDown_:()=>_DirectionDown_,_DirectionLeft_:()=>_DirectionLeft_,_Disabled_:()=>_Disabled_,_Mask_:()=>_Mask_,_TypeCircle_:()=>_TypeCircle_,_TypeQuarterCircle_:()=>_TypeQuarterCircle_,_TypeQuarterDownRight_:()=>_TypeQuarterDownRight_,__namedExportsOrder:()=>speed_dial_stories_namedExportsOrder,default:()=>speed_dial_stories});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),angular_dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),public_api=__webpack_require__("./projects/web-components/src/public-api.ts"),header_component=__webpack_require__("./stories/header/header.component.tsx");const itemsWithLabel=[{icon:"freud-icon freud-icon-refresh",command:()=>{console.log("Evento update")}},{icon:"freud-icon freud-icon-close",command:()=>{console.log("Evento delete")}},{icon:"freud-icon freud-icon-check"}],Template=args=>({props:{...args},template:'\n  <div style="height: 250px; width: 120px">\n      <freud-speed-dial\n        [id]="id"\n        [visible]="visible"\n        [mask]="mask"\n        [disabled]="disabled"\n        [showIcon]="showIcon"\n        [hideIcon]="hideIcon"\n        [type]="type"\n        [direction]="direction"\n        [items]="items"\n        [bgColor]="bgColor">\n      </freud-speed-dial>\n  </div>\n  '}),TemplateCircle=args=>({props:{...args},template:'\n  <div style="height: 80px; width: 80px; margin: 50px">\n      <freud-speed-dial\n        [id]="id"\n        [visible]="visible"\n        [mask]="mask"\n        [disabled]="disabled"\n        [showIcon]="showIcon"\n        [hideIcon]="hideIcon"\n        [type]="type"\n        [direction]="direction"\n        [items]="items"\n        [bgColor]="bgColor">\n      </freud-speed-dial>\n  </div>\n  '}),DirectionDown=Template.bind({});DirectionDown.args={items:itemsWithLabel,direction:"down"};const DirectionLeft=Template.bind({});DirectionLeft.args={items:itemsWithLabel,direction:"left"};const TypeQuarterDownRight=TemplateCircle.bind({});TypeQuarterDownRight.args={items:itemsWithLabel,type:"quarter-circle",direction:"down-right"};const TypeCircle=TemplateCircle.bind({});TypeCircle.args={items:itemsWithLabel,type:"circle"};const TypeQuarterCircle=TemplateCircle.bind({});TypeQuarterCircle.args={items:itemsWithLabel,type:"quarter-circle",direction:"up-right"};const Disabled=Template.bind({});Disabled.args={items:itemsWithLabel,disabled:!0,direction:"down"};const BGColor=Template.bind({});BGColor.args={items:itemsWithLabel,direction:"down",bgColor:!0};const Mask=Template.bind({});Mask.args={items:itemsWithLabel,mask:!0,direction:"down"};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h2:"h2",pre:"pre",code:"code",h3:"h3",p:"p"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{decorators:[(0,angular_dist.moduleMetadata)({imports:[public_api.Kq]})],parameters:{layout:"centered",docs:{story:{iframeHeight:"500px"}},backgrounds:{default:"Default",values:[{name:"Default",value:"#FFFFFF"},{name:"BgColor",value:"#6732D1"}]}},title:"@freud-ds/web-components/Buttons/SpeedDial",component:public_api.n4}),"\n",(0,jsx_runtime.jsx)(header_component.z,{title:"SpeedDial",description:"Quando pressionado, um botão de ação flutuante pode exibir várias ações primárias que podem ser executadas em uma página."}),"\n",(0,jsx_runtime.jsxs)(_components.h2,{id:"import",children:[(0,jsx_runtime.jsx)("a",{id:"importing"}),"Import"]}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-ts",children:"import { FreudSpeedDialModule } from '@freud-ds/web-components';\n"})}),"\n",(0,jsx_runtime.jsxs)(_components.h2,{id:"declaração-dos-items",children:[(0,jsx_runtime.jsx)("a",{id:"importing"}),"Declaração dos items"]}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-ts",children:"// No Componente declare a lista de opções de acordo com a interface \"FreudMenuItem\"\nimport { FreudMenuItem } from '@freud-ds/web-components';\nexport class Componente {\n  items: FreudMenuItem[];\n  constructor() {\n    this.items = [\n      {\n        icon: 'freud-icon freud-icon-refresh',\n        command: () => this.update.bind(this),\n      },\n      {\n        icon: 'freud-icon freud-icon-delete',\n        command: () => {\n          this.delete();\n        },\n      },\n      {\n        label: 'Angular.io',\n        icon: 'freud-icon freud-icon-info',\n        url: 'http://angular.io',\n      },\n      {\n        label: 'Setup',\n        icon: 'freud-icon freud-icon-cog',\n        routerLink: ['/setup'],\n      },\n    ];\n  }\n  update() {\n    // Ação quando o usuário clicar no botão de update\n  }\n\n  delete() {\n    // Ação quando o usuário clicar no botão de delete\n  }\n}\n"})}),"\n",(0,jsx_runtime.jsxs)(_components.h2,{id:"exemplos",children:[(0,jsx_runtime.jsx)("a",{id:"exemplos"}),"Exemplos"]}),"\n",(0,jsx_runtime.jsx)("br",{}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"directions",children:"Directions"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Especifica a direção de abertura das ações. Para ",(0,jsx_runtime.jsx)(_components.code,{children:"linear"})," e ",(0,jsx_runtime.jsx)(_components.code,{children:"semi-circle"})," tipos; up, down, left e right. Para ",(0,jsx_runtime.jsx)(_components.code,{children:"quarter-circle"})," tipos; up-left, up-right, down-left and down-right."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Nos exemplos abaixo estão sendo utilizados as opções ",(0,jsx_runtime.jsx)(_components.code,{children:"down"})," e ",(0,jsx_runtime.jsx)(_components.code,{children:"left"})," respectivamente, utilize a aba canvas para visualizar\nas outras opções."]}),"\n",(0,jsx_runtime.jsxs)(dist.Xz,{children:[(0,jsx_runtime.jsx)(dist.oG,{story:DirectionDown}),(0,jsx_runtime.jsx)(dist.oG,{story:DirectionLeft})]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"others",children:"Others"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["SpeedDial tem 4 tipos; ",(0,jsx_runtime.jsx)(_components.code,{children:"linear"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"circle"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"semi-circle"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"quarter-circle"}),"."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["1 - Type: ",(0,jsx_runtime.jsx)(_components.code,{children:"circle"})]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["2 - Type: ",(0,jsx_runtime.jsx)(_components.code,{children:"quarter-circle"})," | Direction: ",(0,jsx_runtime.jsx)(_components.code,{children:"down-right"})]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["3 - Type: ",(0,jsx_runtime.jsx)(_components.code,{children:"quarter-circle"})," | Direction: ",(0,jsx_runtime.jsx)(_components.code,{children:"up-right"})]}),"\n",(0,jsx_runtime.jsxs)(dist.Xz,{children:[(0,jsx_runtime.jsx)(dist.oG,{story:TypeCircle}),(0,jsx_runtime.jsx)(dist.oG,{story:TypeQuarterDownRight}),(0,jsx_runtime.jsx)(dist.oG,{story:TypeQuarterCircle})]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-mask",children:"With Mask"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{story:Mask})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"disabled",children:"Disabled"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{story:Disabled})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"bg-color",children:"BG Color"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{style:{backgroundColor:"#241249"},children:(0,jsx_runtime.jsx)(dist.oG,{story:BGColor})}),"\n",(0,jsx_runtime.jsxs)(_components.h2,{id:"api",children:[(0,jsx_runtime.jsx)("a",{id:"api"}),"API"]}),"\n",(0,jsx_runtime.jsx)(dist.Ed,{of:public_api.n4})]})}const _DirectionDown_=DirectionDown,_DirectionLeft_=DirectionLeft,_TypeCircle_=TypeCircle,_TypeQuarterDownRight_=TypeQuarterDownRight,_TypeQuarterCircle_=TypeQuarterCircle,_Mask_=Mask,_Disabled_=Disabled,_BGColor_=BGColor,componentMeta={title:"@freud-ds/web-components/Buttons/SpeedDial",parameters:{layout:"centered",docs:{story:{iframeHeight:"500px"}},backgrounds:{default:"Default",values:[{name:"Default",value:"#FFFFFF"},{name:"BgColor",value:"#6732D1"}]}},decorators:[(0,angular_dist.moduleMetadata)({imports:[public_api.Kq]})],component:public_api.n4,tags:["stories-mdx"],includeStories:["_DirectionDown_","_DirectionLeft_","_TypeCircle_","_TypeQuarterDownRight_","_TypeQuarterCircle_","_Mask_","_Disabled_","_BGColor_"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const speed_dial_stories=componentMeta,speed_dial_stories_namedExportsOrder=["_DirectionDown_","_DirectionLeft_","_TypeCircle_","_TypeQuarterDownRight_","_TypeQuarterCircle_","_Mask_","_Disabled_","_BGColor_"]}}]);