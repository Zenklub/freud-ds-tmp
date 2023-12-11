"use strict";(self.webpackChunk_freud_ds_web=self.webpackChunk_freud_ds_web||[]).push([[1466],{"./stories/others/paginator/paginator.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{_BGColor_:()=>_BGColor_,_Default_:()=>_Default_,_PageReport_:()=>_PageReport_,__namedExportsOrder:()=>paginator_stories_namedExportsOrder,default:()=>paginator_stories});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),angular_dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),public_api=__webpack_require__("./projects/web-components/src/public-api.ts"),header_component=__webpack_require__("./stories/header/header.component.tsx");const Template=args=>({props:{...args},template:'<freud-paginator\n    [rows]="rows"\n    [totalRecords]="totalRecords"\n    [pageLinkSize]="pageLinkSize"\n    [first]="first"\n    [showFirstLastIcon]="showFirstLastIcon"\n    [alwaysShow]="alwaysShow"\n    [currentPageReportTemplate]="currentPageReportTemplate"\n    [showCurrentPageReport]="showCurrentPageReport"\n    [bgColor]="bgColor">\n    </freud-paginator>'}),Default=Template.bind({});Default.args={bgColor:!1,rows:5,totalRecords:100,pageLinkSize:4,first:0,showFirstLastIcon:!0,alwaysShow:!0};const PageReport=Template.bind({});PageReport.args={bgColor:!1,rows:5,totalRecords:100,pageLinkSize:4,showCurrentPageReport:!0,currentPageReportTemplate:"({currentPage} de {totalPages})",first:0,showFirstLastIcon:!0,alwaysShow:!0};const BGColor=Template.bind({});BGColor.args={bgColor:!0,rows:5,totalRecords:100,pageLinkSize:4,first:0,showFirstLastIcon:!0,alwaysShow:!0};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h2:"h2",pre:"pre",code:"code",h3:"h3",p:"p"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{decorators:[(0,angular_dist.moduleMetadata)({imports:[public_api.mo]})],parameters:{layout:"centered",backgrounds:{default:"Default"}},title:"@freud-ds/web-components/Others/Paginator",component:public_api.rN}),"\n",(0,jsx_runtime.jsx)(header_component.z,{title:"Paginator",description:"É um componente genérico para exibir conteúdo em formato paginado."}),"\n",(0,jsx_runtime.jsxs)(_components.h2,{id:"import",children:[(0,jsx_runtime.jsx)("a",{id:"importing"}),"Import"]}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-ts",children:"import { FreudPaginatorModule } from '@freud-ds/web-components';\n"})}),"\n",(0,jsx_runtime.jsxs)(_components.h2,{id:"exemplos",children:[(0,jsx_runtime.jsx)("a",{id:"exemplos"}),"Exemplos"]}),"\n",(0,jsx_runtime.jsx)("br",{}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{story:Default})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"pagereport",children:"PageReport"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Utilize a propriedade ",(0,jsx_runtime.jsx)(_components.code,{children:"currentPageReportTemplate"})," para montar o template. Os espaços reservados disponíveis são ",(0,jsx_runtime.jsx)(_components.code,{children:"{currentPage}"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"{totalPages}"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"{rows}"}),",\n",(0,jsx_runtime.jsx)(_components.code,{children:"{first}"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"{last}"})," e ",(0,jsx_runtime.jsx)(_components.code,{children:"{totalRecords}"}),"."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Atual: ",(0,jsx_runtime.jsx)(_components.code,{children:"({currentPage} de {totalPages})"})]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{story:PageReport})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"bg-color",children:"BG Color"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{style:{backgroundColor:"#241249"},children:(0,jsx_runtime.jsx)(dist.oG,{story:BGColor})}),"\n",(0,jsx_runtime.jsxs)(_components.h2,{id:"api",children:[(0,jsx_runtime.jsx)("a",{id:"api"}),"API"]}),"\n",(0,jsx_runtime.jsx)(dist.Ed,{of:public_api.rN})]})}const _Default_=Default,_PageReport_=PageReport,_BGColor_=BGColor,componentMeta={title:"@freud-ds/web-components/Others/Paginator",parameters:{layout:"centered",backgrounds:{default:"Default"}},decorators:[(0,angular_dist.moduleMetadata)({imports:[public_api.mo]})],component:public_api.rN,tags:["stories-mdx"],includeStories:["_Default_","_PageReport_","_BGColor_"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const paginator_stories=componentMeta,paginator_stories_namedExportsOrder=["_Default_","_PageReport_","_BGColor_"]}}]);