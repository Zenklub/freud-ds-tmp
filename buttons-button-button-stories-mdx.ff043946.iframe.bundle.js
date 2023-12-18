"use strict";(self.webpackChunk_freud_ds_web=self.webpackChunk_freud_ds_web||[]).push([[2351],{"./stories/buttons/button/button.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{_BGColorGhost_:()=>_BGColorGhost_,_BGColorPrimary_:()=>_BGColorPrimary_,_BGColorSecondary_:()=>_BGColorSecondary_,_ButtonTest_:()=>_ButtonTest_,_Disabled_:()=>_Disabled_,_Ghost_:()=>_Ghost_,_IconOnly_:()=>_IconOnly_,_Loading_:()=>_Loading_,_Primary_:()=>_Primary_,_Secondary_:()=>_Secondary_,_SizeLg_:()=>_SizeLg_,_SizeMd_:()=>_SizeMd_,_SizeSm_:()=>_SizeSm_,_WithIconLeft_:()=>_WithIconLeft_,_WithIconRight_:()=>_WithIconRight_,_WithNGContent_:()=>_WithNGContent_,__namedExportsOrder:()=>button_stories_namedExportsOrder,_fullWidth_:()=>_fullWidth_,default:()=>button_stories});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),blocks_dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),angular_dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),public_api=__webpack_require__("./projects/web-components/src/public-api.ts"),header_component=__webpack_require__("./stories/header/header.component.tsx");const ButtonTest=(args=>({props:{...args},template:'<freud-button [color]="color" [bgColor]="bgColor" [size]="size" [disabled]="disabled" \n[loading]="loading" [icon]="icon" [label]="label" [iconPos]="iconPos"></freud-button>'})).bind({});ButtonTest.args={label:"Teste"};const Primary=()=>({template:'<freud-button label="Button primary"></freud-button>'}),Secondary=()=>({template:'<freud-button color="secondary" label="Button secondary"></freud-button>'}),Ghost=()=>({template:'<freud-button color="ghost" label="Button ghost"></freud-button>'}),BGColorPrimary=()=>({template:'<freud-button [bgColor]="true" label="ButtonBG primary"></freud-button>'}),BGColorSecondary=()=>({template:'<freud-button [bgColor]="true" color="secondary" label="ButtonBG secondary"></freud-button>'}),BGColorGhost=()=>({template:'<freud-button [bgColor]="true" color="ghost" label="ButtonBG ghost"></freud-button>'}),Disabled=()=>({template:'<freud-button [disabled]="true" label="Button disabled"></freud-button>'}),Loading=()=>({template:'<freud-button [loading]="true" [bgColor]="false" label="Button loading" iconPos="right"></freud-button>'}),SizeLg=()=>({template:'<freud-button [bgColor]="bgColor" size="lg" label="Button large"></freud-button>'}),SizeMd=()=>({template:'<freud-button [bgColor]="bgColor" size="md" label="Button medium"></freud-button>'}),SizeSm=()=>({template:'<freud-button [bgColor]="bgColor" size="sm" label="Button small"></freud-button>'}),fullWidth=()=>({template:'<freud-button [bgColor]="bgColor" [fullWidth]="true" label="Button fullWidth"></freud-button>'}),IconOnly=()=>({template:'<freud-button icon="freud-icon freud-icon-check"></freud-button>'}),WithIconRight=()=>({template:'<freud-button icon="freud-icon freud-icon-check" label="Button right" iconPos="right"></freud-button>'}),WithIconLeft=()=>({template:'<freud-button icon="freud-icon freud-icon-check" label="Button left"></freud-button>'}),WithNGContent=()=>({template:"<freud-button>Button sem label</freud-button>"});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h2:"h2",p:"p",h3:"h3",h4:"h4",pre:"pre",code:"code",strong:"strong",em:"em"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{decorators:[(0,angular_dist.moduleMetadata)({imports:[public_api.v7]})],parameters:{layout:"centered",backgrounds:{default:"Default",values:[{name:"Default",value:"#FFFFFF"},{name:"BgColor",value:"#6732D1"}]}},title:"@freud-ds/web-components/Buttons/Button",component:public_api.XJ}),"\n",(0,jsx_runtime.jsx)(header_component.z,{title:"Button",description:"Componente próprio do Freud DS, utilizado para acionar uma ação ou evento."}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"pré-requisitos",children:"Pré-requisitos"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Estes são alguns pré-requisitos necessários para utilizar os botões do Freud DS:"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"libs",children:"Libs"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"É necessário instalar a lib de componentes do Freud DS para utilizar os botões. Para instalar, rode o comando abaixo\nno terminal do seu projeto:"}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"web-components",children:"Web Components"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-bash",children:"npm i @freud-ds/web-components\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"imports",children:"Imports"}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"módulo",children:"Módulo"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Importe o ",(0,jsx_runtime.jsx)(_components.code,{children:"FreudButtonModule"})," em cada módulo que for utilizar o ",(0,jsx_runtime.jsx)(_components.code,{children:"FreudButtonComponent"}),". Utilizando o código:"]}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-ts",children:"import { FreudButtonModule } from '@freud-ds/web-components';\n\n@NgModule({\n  imports: [\n    FreudButtonModule\n    //e outros imports...\n  ]\n})\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"teste-os-botões",children:"Teste os botões"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Clique em ",(0,jsx_runtime.jsx)(_components.code,{children:"Button Test"})," (na lista de componentes no canto esquerdo) e depois em ",(0,jsx_runtime.jsx)(_components.code,{children:"Canvas"})," (no canto superior esquerdo dessa página)\npara ter acesso a área de testes, onde você pode testar todos os parâmetros do componente ",(0,jsx_runtime.jsx)(_components.code,{children:"Button"}),"."]}),"\n",(0,jsx_runtime.jsx)(blocks_dist.Xz,{sourceState:blocks_dist.sK.NONE,children:(0,jsx_runtime.jsx)(dist.oG,{story:ButtonTest})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"exemplos-de-utilização",children:"Exemplos de utilização"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"colors",children:"Colors"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Por padrão, o botão será exibido na cor ",(0,jsx_runtime.jsx)(_components.code,{children:"primary"})," em qualquer situação, mas você pode mudar isso utilizando o parâmetro ",(0,jsx_runtime.jsx)(_components.code,{children:"color"}),"."]}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"theme",children:"Theme"}),"\n",(0,jsx_runtime.jsxs)(blocks_dist.Xz,{sourceState:blocks_dist.sK.OPEN,children:[(0,jsx_runtime.jsx)(dist.oG,{story:Primary}),(0,jsx_runtime.jsx)(dist.oG,{story:Secondary}),(0,jsx_runtime.jsx)(dist.oG,{story:Ghost})]}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"bg-color",children:"BG Color"}),"\n",(0,jsx_runtime.jsxs)(blocks_dist.Xz,{style:{backgroundColor:"#241249"},sourceState:blocks_dist.sK.OPEN,children:[(0,jsx_runtime.jsx)(dist.oG,{story:BGColorPrimary}),(0,jsx_runtime.jsx)(dist.oG,{story:BGColorSecondary}),(0,jsx_runtime.jsx)(dist.oG,{story:BGColorGhost})]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"sizes",children:"Sizes"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Por padrão, o botão será exibido no tamanho ",(0,jsx_runtime.jsx)(_components.code,{children:"md"}),", mas você pode mudar isso utilizando o parâmetro ",(0,jsx_runtime.jsx)(_components.code,{children:"size"}),"."]}),"\n",(0,jsx_runtime.jsxs)(blocks_dist.Xz,{sourceState:blocks_dist.sK.OPEN,children:[(0,jsx_runtime.jsx)(dist.oG,{story:SizeLg}),(0,jsx_runtime.jsx)(dist.oG,{story:SizeMd}),(0,jsx_runtime.jsx)(dist.oG,{story:SizeSm})]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"full-width",children:"Full Width"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Por padrão, o botão não ocupará a largura total do seu container, mas você pode mudar isso utilizando o parâmetro ",(0,jsx_runtime.jsx)(_components.code,{children:"fullWidth"}),"."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsxs)(_components.strong,{children:["OBS.: O parâmetro só aceita valores booleanos, ou seja, ",(0,jsx_runtime.jsx)(_components.code,{children:"true"})," ou ",(0,jsx_runtime.jsx)(_components.code,{children:"false"}),"."]})}),"\n",(0,jsx_runtime.jsx)(blocks_dist.Xz,{sourceState:blocks_dist.sK.OPEN,children:(0,jsx_runtime.jsx)(dist.oG,{story:fullWidth})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"disabled",children:"Disabled"}),"\n",(0,jsx_runtime.jsx)(blocks_dist.Xz,{sourceState:blocks_dist.sK.OPEN,children:(0,jsx_runtime.jsx)(dist.oG,{story:Disabled})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"loading",children:"Loading"}),"\n",(0,jsx_runtime.jsx)(blocks_dist.Xz,{sourceState:blocks_dist.sK.OPEN,children:(0,jsx_runtime.jsx)(dist.oG,{story:Loading})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-icon",children:"With icon"}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"icon-only",children:"Icon Only"}),"\n",(0,jsx_runtime.jsx)(blocks_dist.Xz,{sourceState:blocks_dist.sK.OPEN,children:(0,jsx_runtime.jsx)(dist.oG,{story:IconOnly})}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"icon-position",children:"Icon position"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Por padrão, o ícone será exibido a esquerda do ",(0,jsx_runtime.jsx)(_components.code,{children:"label"}),", mas você pode mudar isso utilizando o parâmetro ",(0,jsx_runtime.jsx)(_components.code,{children:"iconPos"}),"."]}),"\n",(0,jsx_runtime.jsxs)(blocks_dist.Xz,{sourceState:blocks_dist.sK.OPEN,children:[(0,jsx_runtime.jsx)(dist.oG,{story:WithIconLeft}),(0,jsx_runtime.jsx)(dist.oG,{story:WithIconRight})]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"outra-forma-de-utilização",children:"Outra forma de utilização"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Além de utilizar ",(0,jsx_runtime.jsx)(_components.code,{children:"label"}),", você também pode utilizar outro meio para inserir o texto do botão, o ",(0,jsx_runtime.jsx)(_components.code,{children:"ng-content"}),".\nPorém ",(0,jsx_runtime.jsx)(_components.strong,{children:"recomenda-se"})," utilizar da forma apresentada acima, com o ",(0,jsx_runtime.jsx)(_components.code,{children:"label"}),", que é a forma padrão do Freud DS.\nCaso você opte por utilizar o ",(0,jsx_runtime.jsx)(_components.code,{children:"ng-content"}),", leve em consideração que ",(0,jsx_runtime.jsx)(_components.strong,{children:"não"})," será possível mudar a posição do ícone no componente,\nisso só ocorre com a utilização do ",(0,jsx_runtime.jsx)(_components.code,{children:"label"}),"."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"ATENÇÃO"}),": se você já utilizava o componente ",(0,jsx_runtime.jsx)(_components.code,{children:"Button"})," antes dessa atualização, é necessário e recomendado alterar a utilização do texto do botão de ",(0,jsx_runtime.jsx)(_components.code,{children:"ng-content"})," para ",(0,jsx_runtime.jsx)(_components.code,{children:"label"}),",\ngarantindo que você possa modificar a posição do ícone do botão, além de estar utilizando o novo padrão estabelecido pelo Freud DS."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Para utilizar é simples, basta não passar o ",(0,jsx_runtime.jsx)(_components.code,{children:"label"})," e inserir o texto dentro da ",(0,jsx_runtime.jsx)(_components.em,{children:"tag"})," do componente, como no exemplo abaixo:"]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"--\x3e os outros parâmetros continuam funcionando da mesma forma!"})}),"\n",(0,jsx_runtime.jsx)(blocks_dist.Xz,{sourceState:blocks_dist.sK.OPEN,children:(0,jsx_runtime.jsx)(dist.oG,{story:WithNGContent})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"api",children:"API"}),"\n",(0,jsx_runtime.jsx)(dist.Ed,{of:public_api.XJ})]})}const _ButtonTest_=ButtonTest,_Primary_=Primary,_Secondary_=Secondary,_Ghost_=Ghost,_BGColorPrimary_=BGColorPrimary,_BGColorSecondary_=BGColorSecondary,_BGColorGhost_=BGColorGhost,_SizeLg_=SizeLg,_SizeMd_=SizeMd,_SizeSm_=SizeSm,_fullWidth_=fullWidth,_Disabled_=Disabled,_Loading_=Loading,_IconOnly_=IconOnly,_WithIconLeft_=WithIconLeft,_WithIconRight_=WithIconRight,_WithNGContent_=WithNGContent,componentMeta={title:"@freud-ds/web-components/Buttons/Button",parameters:{layout:"centered",backgrounds:{default:"Default",values:[{name:"Default",value:"#FFFFFF"},{name:"BgColor",value:"#6732D1"}]}},decorators:[(0,angular_dist.moduleMetadata)({imports:[public_api.v7]})],component:public_api.XJ,tags:["stories-mdx"],includeStories:["_ButtonTest_","_Primary_","_Secondary_","_Ghost_","_BGColorPrimary_","_BGColorSecondary_","_BGColorGhost_","_SizeLg_","_SizeMd_","_SizeSm_","_fullWidth_","_Disabled_","_Loading_","_IconOnly_","_WithIconLeft_","_WithIconRight_","_WithNGContent_"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const button_stories=componentMeta,button_stories_namedExportsOrder=["_ButtonTest_","_Primary_","_Secondary_","_Ghost_","_BGColorPrimary_","_BGColorSecondary_","_BGColorGhost_","_SizeLg_","_SizeMd_","_SizeSm_","_fullWidth_","_Disabled_","_Loading_","_IconOnly_","_WithIconLeft_","_WithIconRight_","_WithNGContent_"]}}]);