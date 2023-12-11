"use strict";(self.webpackChunk_freud_ds_web=self.webpackChunk_freud_ds_web||[]).push([[6798],{"./stories/feedback/tag/tag.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{_BGColorOutline_:()=>_BGColorOutline_,_BGColor_:()=>_BGColor_,_Default_:()=>_Default_,_Error_:()=>_Error_,_Info_:()=>_Info_,_OutlineDefault_:()=>_OutlineDefault_,_OutlineError_:()=>_OutlineError_,_OutlineInfo_:()=>_OutlineInfo_,_OutlineSuccess_:()=>_OutlineSuccess_,_OutlineWarning_:()=>_OutlineWarning_,_Success_:()=>_Success_,_Warning_:()=>_Warning_,__namedExportsOrder:()=>tag_stories_namedExportsOrder,default:()=>tag_stories});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),angular_dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),public_api=__webpack_require__("./projects/web-components/src/public-api.ts"),header_component=__webpack_require__("./stories/header/header.component.tsx");const Template=args=>({props:{...args},template:'\n    <freud-tag [outline]="outline" [color]="color" [value]="value"></freud-tag>\n  '}),Default=Template.bind({});Default.args={value:"Default",color:"primary"};const Success=Template.bind({});Success.args={value:"Success",color:"success"};const Info=Template.bind({});Info.args={value:"Info",color:"info"};const Warning=Template.bind({});Warning.args={value:"Warning",color:"warning"};const Error=Template.bind({});Error.args={value:"Error",color:"error"};const OutlineDefault=Template.bind({});OutlineDefault.args={value:"Default",outline:!0};const OutlineSuccess=Template.bind({});OutlineSuccess.args={value:"Success",color:"success",outline:!0};const OutlineInfo=Template.bind({});OutlineInfo.args={value:"Info",color:"info",outline:!0};const OutlineWarning=Template.bind({});OutlineWarning.args={value:"Warning",color:"warning",outline:!0};const OutlineError=Template.bind({});OutlineError.args={value:"Error",color:"error",outline:!0};const TemplateBgColor=args=>({props:{...args},template:'\n    <freud-tag style="margin-right: 8px" [outline]="outline" [value]="\'Default\'"></freud-tag>\n    <freud-tag style="margin-right: 8px" [outline]="outline" [color]="\'success\'" [value]="\'Success\'"></freud-tag>\n    <freud-tag style="margin-right: 8px" [outline]="outline" [color]="\'info\'" [value]="\'Info\'"></freud-tag>\n    <freud-tag style="margin-right: 8px" [outline]="outline" [color]="\'warning\'" [value]="\'Warning\'"></freud-tag>\n    <freud-tag style="margin-right: 8px" [outline]="outline" [color]="\'error\'" [value]="\'Error\'"></freud-tag>\n  '}),BGColor=TemplateBgColor.bind({});BGColor.args={outline:!1};const BGColorOutline=TemplateBgColor.bind({});BGColorOutline.args={outline:!0};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h2:"h2",pre:"pre",code:"code",h3:"h3"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{decorators:[(0,angular_dist.moduleMetadata)({imports:[public_api.xZ]})],argTypes:{color:{control:{type:"select",options:["primary","success","info","warning","error"]}}},parameters:{layout:"centered",backgrounds:{default:"Default",values:[{name:"Default",value:"#FFFFFF"},{name:"BgColor",value:"#6732D1"}]}},title:"@freud-ds/web-components/Feedback/Tag",component:public_api.PL}),"\n",(0,jsx_runtime.jsx)(header_component.z,{title:"Tag",description:"São usados para destacar o status de um item para reconhecimento rápido."}),"\n",(0,jsx_runtime.jsxs)(_components.h2,{id:"import",children:[(0,jsx_runtime.jsx)("a",{id:"importing"}),"Import"]}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-ts",children:"import FreudTagModule from '@freud-ds/web-components';\n"})}),"\n",(0,jsx_runtime.jsxs)(_components.h2,{id:"exemplos",children:[(0,jsx_runtime.jsx)("a",{id:"exemplos"}),"Exemplos"]}),"\n",(0,jsx_runtime.jsx)("br",{}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"theme",children:"Theme"}),"\n",(0,jsx_runtime.jsxs)(dist.Xz,{children:[(0,jsx_runtime.jsx)(dist.oG,{story:Default}),(0,jsx_runtime.jsx)(dist.oG,{story:Success}),(0,jsx_runtime.jsx)(dist.oG,{story:Info}),(0,jsx_runtime.jsx)(dist.oG,{story:Warning}),(0,jsx_runtime.jsx)(dist.oG,{story:Error})]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"outline",children:"Outline"}),"\n",(0,jsx_runtime.jsxs)(dist.Xz,{children:[(0,jsx_runtime.jsx)(dist.oG,{story:OutlineDefault}),(0,jsx_runtime.jsx)(dist.oG,{story:OutlineSuccess}),(0,jsx_runtime.jsx)(dist.oG,{story:OutlineInfo}),(0,jsx_runtime.jsx)(dist.oG,{story:OutlineWarning}),(0,jsx_runtime.jsx)(dist.oG,{story:OutlineError})]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"bg-color",children:"BG Color"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{style:{backgroundColor:"#241249"},children:(0,jsx_runtime.jsx)(dist.oG,{story:BGColor})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"bg-color-outline",children:"BG Color Outline"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{style:{backgroundColor:"#241249"},children:(0,jsx_runtime.jsx)(dist.oG,{story:BGColorOutline})}),"\n",(0,jsx_runtime.jsxs)(_components.h2,{id:"api",children:[(0,jsx_runtime.jsx)("a",{id:"api"}),"API"]}),"\n",(0,jsx_runtime.jsx)(dist.Ed,{of:public_api.PL})]})}const _Default_=Default,_Success_=Success,_Info_=Info,_Warning_=Warning,_Error_=Error,_OutlineDefault_=OutlineDefault,_OutlineSuccess_=OutlineSuccess,_OutlineInfo_=OutlineInfo,_OutlineWarning_=OutlineWarning,_OutlineError_=OutlineError,_BGColor_=BGColor,_BGColorOutline_=BGColorOutline,componentMeta={title:"@freud-ds/web-components/Feedback/Tag",parameters:{layout:"centered",backgrounds:{default:"Default",values:[{name:"Default",value:"#FFFFFF"},{name:"BgColor",value:"#6732D1"}]}},decorators:[(0,angular_dist.moduleMetadata)({imports:[public_api.xZ]})],component:public_api.PL,argTypes:{color:{control:{type:"select",options:["primary","success","info","warning","error"]}}},tags:["stories-mdx"],includeStories:["_Default_","_Success_","_Info_","_Warning_","_Error_","_OutlineDefault_","_OutlineSuccess_","_OutlineInfo_","_OutlineWarning_","_OutlineError_","_BGColor_","_BGColorOutline_"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const tag_stories=componentMeta,tag_stories_namedExportsOrder=["_Default_","_Success_","_Info_","_Warning_","_Error_","_OutlineDefault_","_OutlineSuccess_","_OutlineInfo_","_OutlineWarning_","_OutlineError_","_BGColor_","_BGColorOutline_"]}}]);