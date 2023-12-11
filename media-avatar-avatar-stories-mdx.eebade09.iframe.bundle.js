"use strict";(self.webpackChunk_freud_ds_web=self.webpackChunk_freud_ds_web||[]).push([[1150],{"./stories/media/avatar/avatar.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{_AvatarTest_:()=>_AvatarTest_,_BGColor_:()=>_BGColor_,_Icon_:()=>_Icon_,_Imagem_:()=>_Imagem_,_SizeLG_:()=>_SizeLG_,_SizeMD_:()=>_SizeMD_,_SizeSM_:()=>_SizeSM_,_WithBadge_:()=>_WithBadge_,_WithLabel_:()=>_WithLabel_,__namedExportsOrder:()=>avatar_stories_namedExportsOrder,default:()=>avatar_stories});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),angular_dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),public_api=__webpack_require__("./projects/web-components/src/public-api.ts"),header_component=__webpack_require__("./stories/header/header.component.tsx");const AvatarTest=(args=>({props:{...args},template:'\n    <freud-avatar [size]="size" [label]="label" [badge]="badge" [bgColor]="bgColor" [withIcon]="withIcon" [image]="image"></freud-avatar>\n  '})).bind({}),Icon=()=>({template:"\n      <freud-avatar></freud-avatar>\n    "}),WithLabel=()=>({template:'\n      <freud-avatar label="A"></freud-avatar>\n    '}),Imagem=()=>({template:'\n      <freud-avatar image="assets/img/avatar.png"></freud-avatar>\n    '}),WithBadge=()=>({template:'\n      <freud-avatar badge="7"></freud-avatar>\n    '}),BGColor=()=>({template:'\n      <freud-avatar bgColor="true" label="BG"></freud-avatar>\n    '}),SizeLG=()=>({template:'\n      <freud-avatar size="lg"></freud-avatar>\n    '}),SizeMD=()=>({template:"\n    <freud-avatar></freud-avatar> \n    "}),SizeSM=()=>({template:'\n    <freud-avatar size="sm"></freud-avatar> \n    '});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code",pre:"pre",h4:"h4"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{decorators:[(0,angular_dist.moduleMetadata)({imports:[public_api.LM]})],argTypes:{size:{control:{type:"select",options:["sm","md","lg"]}}},parameters:{layout:"centered",backgrounds:{default:"Default",values:[{name:"Default",value:"#FFFFFF"},{name:"BgColor",value:"#6732D1"}]}},title:"@freud-ds/web-components/Media/Avatar",component:public_api.vv}),"\n",(0,jsx_runtime.jsx)(header_component.z,{title:"Avatar",description:"É normalmente usado para exibir imagens de perfil de usuário."}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"pré-requisitos",children:"Pré-requisitos"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"libs",children:"Libs"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["É necessário instalar a lib de ",(0,jsx_runtime.jsx)(_components.code,{children:"web-components"})," para o correto funcionamento do componente:"]}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-bash",children:"npm i @freud-ds/web-components\n"})}),"\n",(0,jsx_runtime.jsxs)(_components.h2,{id:"import",children:[(0,jsx_runtime.jsx)("a",{id:"importing"}),"Import"]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Importe o ",(0,jsx_runtime.jsx)(_components.code,{children:"FreudAvatarModule"})," em cada módulo que for utilizar o ",(0,jsx_runtime.jsx)(_components.code,{children:"FreudAvatarComponent"})," em seu projeto:"]}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-ts",children:"import FreudAvatarModule from '@freud-ds/web-components';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"avatar",children:"Avatar"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Para utilizar o componente, basta utilizar a tag ",(0,jsx_runtime.jsx)(_components.code,{children:"<freud-avatar>"})," passando os parâmetros necessários."]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"teste-os-tipos-de-avatar",children:"Teste os tipos de avatar"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Clique em ",(0,jsx_runtime.jsx)(_components.code,{children:"Avatar Test"})," (na lista de componentes no canto esquerdo) e depois em ",(0,jsx_runtime.jsx)(_components.code,{children:"Canvas"})," (no canto superior esquerdo dessa página)\npara ter acesso a área de testes, onde você pode testar todos os exemplos listados abaixo."]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{sourceState:dist.sK.NONE,children:(0,jsx_runtime.jsx)(dist.oG,{story:AvatarTest})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"exemplos-de-uso",children:"Exemplos de uso"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Cada um dos exemplos são apresentados separadamente, mas nada impede que mais de um parâmetro seja utilizado ao mesmo tempo, desde que a lógica de uso faça sentido."}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"icon",children:"Icon"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Por padrão, quando nenhuma ",(0,jsx_runtime.jsx)(_components.code,{children:"label"})," ou ",(0,jsx_runtime.jsx)(_components.code,{children:"image"})," são passadas, o avatar é exibido com o ",(0,jsx_runtime.jsx)(_components.code,{children:"icon"}),"."]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{sourceState:dist.sK.OPEN,children:(0,jsx_runtime.jsx)(dist.oG,{story:Icon})}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"with-label",children:"With Label"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{sourceState:dist.sK.OPEN,children:(0,jsx_runtime.jsx)(dist.oG,{story:WithLabel})}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"image",children:"Image"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{sourceState:dist.sK.OPEN,children:(0,jsx_runtime.jsx)(dist.oG,{story:Imagem})}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"with-badge",children:"With Badge"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{sourceState:dist.sK.OPEN,children:(0,jsx_runtime.jsx)(dist.oG,{story:WithBadge})}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"bg-color",children:"BG Color"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{sourceState:dist.sK.OPEN,children:(0,jsx_runtime.jsx)(dist.oG,{story:BGColor})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"tamanhos-do-avatar",children:"Tamanhos do avatar"}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"large",children:"Large"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{sourceState:dist.sK.OPEN,children:(0,jsx_runtime.jsx)(dist.oG,{story:SizeLG})}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"medium",children:"Medium"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Por padrão, quando não é colocado nenhum parâmetro de tamanho, o avatar é exibido no tamanho ",(0,jsx_runtime.jsx)(_components.code,{children:"md"}),"."]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{sourceState:dist.sK.OPEN,children:(0,jsx_runtime.jsx)(dist.oG,{story:SizeMD})}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"small",children:"Small"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{sourceState:dist.sK.OPEN,children:(0,jsx_runtime.jsx)(dist.oG,{story:SizeSM})}),"\n",(0,jsx_runtime.jsxs)(_components.h2,{id:"api",children:[(0,jsx_runtime.jsx)("a",{id:"api"}),"API"]}),"\n",(0,jsx_runtime.jsx)(dist.Ed,{of:public_api.vv})]})}const _AvatarTest_=AvatarTest,_Icon_=Icon,_WithLabel_=WithLabel,_Imagem_=Imagem,_WithBadge_=WithBadge,_BGColor_=BGColor,_SizeLG_=SizeLG,_SizeMD_=SizeMD,_SizeSM_=SizeSM,componentMeta={title:"@freud-ds/web-components/Media/Avatar",parameters:{layout:"centered",backgrounds:{default:"Default",values:[{name:"Default",value:"#FFFFFF"},{name:"BgColor",value:"#6732D1"}]}},decorators:[(0,angular_dist.moduleMetadata)({imports:[public_api.LM]})],component:public_api.vv,argTypes:{size:{control:{type:"select",options:["sm","md","lg"]}}},tags:["stories-mdx"],includeStories:["_AvatarTest_","_Icon_","_WithLabel_","_Imagem_","_WithBadge_","_BGColor_","_SizeLG_","_SizeMD_","_SizeSM_"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const avatar_stories=componentMeta,avatar_stories_namedExportsOrder=["_AvatarTest_","_Icon_","_WithLabel_","_Imagem_","_WithBadge_","_BGColor_","_SizeLG_","_SizeMD_","_SizeSM_"]}}]);