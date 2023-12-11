(self.webpackChunk_freud_ds_web=self.webpackChunk_freud_ds_web||[]).push([[73],{"./stories/icons/all-icons/all-icons.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{x:()=>AllIconsComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var all_icons_componentngResource=__webpack_require__("./stories/icons/all-icons/all-icons.component.scss?ngResource"),all_icons_componentngResource_default=__webpack_require__.n(all_icons_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),ngx_clipboard=__webpack_require__("./node_modules/ngx-clipboard/fesm2020/ngx-clipboard.mjs");const icons=["accessible","adjustments-horizontal","adjustments","alert-circle","alert-octagon","align-center","align-justify","align-left","align-right","angle-double-down","angle-double-left","angle-double-right","angle-double-up","apps","archive","arrow-circle-down","arrow-circle-left","arrow-circle-right","arrow-circle-up","arrow-down-circle","arrow-down-left-circle","arrow-down-left","arrow-down-right-circle","arrow-down-right","arrow-down","arrow-left","arrow-right-arrow-left","arrow-right","arrow-up-circle","arrow-up-left-circle","arrow-up-left","arrow-up-right-circle","arrow-up-right","arrow-up","arrows-alt","arrows-h","arrows-right-left","arrows-v","at","award","backward","ballon","ban","bandage","barcode","bars","beach","bell-off","bell-ringing","bell","bitcoin","bolt","book","bookmark-fill","bookmark-off","bookmark","box","brand-android","brand-apple","brand-facebook","brand-figma","brand-github","brand-google-drive","brand-google-play","brand-instagram","brand-linkedin","brand-netflix","brand-twitter","brand-whatsapp","brand-youtube","briefcase","browser","building-bank","building-castle","building-church","building-community","building-cottage","building-factory","building-fortress","building-hospital","building-pavilon","building-skyscraper","building-store","building-warehouse","building","bulb","businessplan","calculator","calendar-event","calendar-minus","calendar-plus","calendar-time","calendar-times","calendar","camera-off","camera","car","caret-down","caret-left","caret-right","caret-up","cart-plus","certificate","chart-bar-2","chart-bar","chart-line","chart-pie-2","chart-pie","check-circle","check-square","check","chevron-circle-down","chevron-circle-left","chevron-circle-right","chevron-circle-up","chevron-down","chevron-left","chevron-right","chevron-up","circle-check","circle-fill","circle-minus","circle-plus","circle-x","circle","clipboard-check","clipboard-list","clipboard-x","clock","clone","close","cloud-download","cloud-rain","cloud-storm","cloud-upload","cloud","code","coffee","cog","coin","comment","comments","compass","copy","credit-card","currency-dollar","database","delete-left","desktop","device-desktop","device-laptop","device-mobile","device-tablet","device-tv","device-watch","devices-2","devices-pc","devices","diamond","directions-alt","directions","disabled","discount-2","discount","dollar","dots-vertical","dots","download","edit","eject","ellipsis-h","ellipsis-v","envelope","eraser","euro","exclamation-circle","exclamation-triangle","external-link","eye-off","eye-slash","eye","face-id","fast-backward","fast-forward","file-certificate","file-edit","file-excel","file-export","file-import","file-o","file-pdf","file-text","file-word","file","filter-fill","filter-off","filter-slash","filter","fingerprint","flag-fill","flag","folder-open","folder","folders","forward","ghost","gift","globe","grid-dots","hand-rock","hashtag","headphones-off","headphones","heart-fill","heart","help","history","home","hourglass","id-card","image","images","inbox","infinity","info-circle","info","instagram","key","language","layout-grid-add","layout-grid","layout-sidebar","license","link","list-check","list-search","list","live-view","loader","location","lock-off","lock-open","lock","login","logout","mail-opened","mail","map-marker","map-pin-off","map-pin","map","meditation","megaphone","menu","message-circle-off","message-circle","messages","microphone-off","microphone","minus-circle","minus","mobile","money-bill","mood-confuzed","mood-crazy-happy","mood-empty","mood-happy","mood-sad","mood-smile","mood-suprised","mood-tongue","moon","motorbike","movie","mug","music","palette","paperclip","pause fill","pause","peace","pencil","percentage","phone-off","phone","photo","pill","pills","pin","pinned-off","pinned","pizza","plane","plant-2","plant","play fill","play","player-pause","player-play","playlist","plus-circle","plus","pound","power-off","power","print","puzzle","qrcode","question-circle","question","receipt-2","receipt-off","receipt","refresh-2","refresh","replay","reply","report-money","report","rocket","rotate-clockwise","save","school","search-minus","search-plus","search","send","server","settings","share-alt","share","shield-check","shield","shopping-bag","shopping-cart","sign-in","sign-out","sitemap","sliders-h","sliders-v","snowflake","sort-alpha-alt-down","sort-alpha-alt-up","sort-alpha-down","sort-alpha-up","sort-alt-slash","sort-alt","sort-amount-down-alt","sort-amount-down","sort-amount-up-alt","sort-amount-up","sort-down","sort-numeric-alt-down","sort-numeric-alt-up","sort-numeric-down","sort-numeric-up","sort-up","sort","speakerphone","spinner","stack","star-fill","star-half","star-off","star","step-backward-alt","step-backward","step-forward-alt","step-forward","stop-circle","stop","stopwatch","sun","switch-vertical","sync","table","tablet","tag","tags","th-large","thumb-down","thumb-up","thumbs-down-fill","thumbs-down","thumbs-up-fill","thumbs-up","ticket","times-circle","times","trash-off","trash","trophy","truck","undo","unlink","unlock","upload","urgent","user-circle","user-edit","user-minus","user-plus","user","users","vaccine","verificated","video-off","video","volume-2","volume-3","volume-down","volume-off","volume-up","volume","wallet","whatsapp","wifi-off","wifi","window-maximize","window-minimize","world","wrench","x","yin-yang"];let AllIconsComponent=class AllIconsComponent{constructor(clipboardService){this.clipboardService=clipboardService,this.iconNames=[],this.fullIconNames=[],this.baseMessage="Copied to clipboard",this.message=this.baseMessage,this.searchText="",this.copyMode="class"}ngOnInit(){this.fullIconNames=[...icons],this.filterIcons()}clipboard(iconName){if("class"===this.copyMode){const freudClass=`freud-icon freud-icon-${iconName}`;this.clipboardService.copyFromContent(freudClass)}else if("component"===this.copyMode){const freudComponent=`<freud-icon icon="${iconName}"></freud-icon>`;this.clipboardService.copyFromContent(freudComponent)}this.toast(iconName)}filterIcons($event){$event&&(this.searchText=$event.srcElement.value.toLowerCase()),this.searchText?this.iconNames=this.fullIconNames.filter((iconName=>iconName.includes(this.searchText))):this.iconNames=[...icons]}toast(iconName){this.message=`"${iconName}" ${this.baseMessage}!`}static#_=this.ctorParameters=()=>[{type:ngx_clipboard.Yv}];static#_2=this.propDecorators={copyMode:[{type:core.Input}]}};AllIconsComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"all-icons",template:'<div\n  class="all-icons-container"\n  freud-typography\n  [fontType]="\'smallRegular1-5\'"\n>\n  <freud-input-text\n    [(ngModel)]="searchText"\n    placeholder="Digite o nome do ícone"\n    rightIcon="freud-icon freud-icon-filter"\n    (keyup)="filterIcons($event)"\n  ></freud-input-text>\n  <ng-container *ngFor="let iconName of iconNames">\n    <div\n      class="icon-item"\n      (click)="clipboard(iconName)"\n      title="Send to clipboard"\n    >\n      <i class="freud-icon freud-icon-{{ iconName }}"></i>\n      <span>{{ iconName }}</span>\n    </div>\n  </ng-container>\n</div>\n',styles:[all_icons_componentngResource_default()]})],AllIconsComponent)},"./stories/icons/all-icons/all-icons.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{b:()=>AllIconsModule});var tslib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),ngx_clipboard__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/ngx-clipboard/fesm2020/ngx-clipboard.mjs"),_all_icons_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./stories/icons/all-icons/all-icons.component.ts"),_freud_ds_web_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./projects/web-components/src/public-api.ts"),_angular_forms__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs");let AllIconsModule=class AllIconsModule{};AllIconsModule=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({declarations:[_all_icons_component__WEBPACK_IMPORTED_MODULE_0__.x],imports:[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,ngx_clipboard__WEBPACK_IMPORTED_MODULE_5__.Iq,_freud_ds_web_components__WEBPACK_IMPORTED_MODULE_1__.Jw,_freud_ds_web_components__WEBPACK_IMPORTED_MODULE_1__.My,_angular_forms__WEBPACK_IMPORTED_MODULE_6__.u5],exports:[_all_icons_component__WEBPACK_IMPORTED_MODULE_0__.x]})],AllIconsModule)},"./stories/icons/icon-class/icons.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{_AllIcons_:()=>_AllIcons_,_Default_i_:()=>_Default_i_,_Default_span_:()=>_Default_span_,_Small_i_:()=>_Small_i_,_Small_span_:()=>_Small_span_,__namedExportsOrder:()=>icons_stories_namedExportsOrder,default:()=>icons_stories});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),angular_dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),header_component=__webpack_require__("./stories/header/header.component.tsx"),public_api=__webpack_require__("./projects/web-components/src/public-api.ts"),all_icons_component=__webpack_require__("./stories/icons/all-icons/all-icons.component.ts");(0,angular_dist.moduleMetadata)({declarations:[all_icons_component.x]});const AllIcons=()=>({template:'\n      <all-icons copyMode="class"></all-icons>\n     '}),Default_i=()=>({template:'\n      <i class="freud-icon freud-icon-verificated"></i>\n     '}),Small_i=()=>({template:'\n      <i class="freud-icon freud-icon-verificated freud-icon-small"></i>\n     '}),Default_span=()=>({template:'\n      <span class="freud-icon freud-icon-verificated"></span>\n     '}),Small_span=()=>({template:'\n      <span class="freud-icon freud-icon-verificated freud-icon-small"></span>\n     '});var all_icons_module=__webpack_require__("./stories/icons/all-icons/all-icons.module.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h2:"h2",h3:"h3",p:"p",h4:"h4",code:"code",pre:"pre",strong:"strong"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{decorators:[(0,angular_dist.moduleMetadata)({imports:[public_api.Jm,public_api.My,public_api.Jw,all_icons_module.b]})],argTypes:{},parameters:{layout:"centered",backgrounds:{default:"Default",values:[{name:"Default",value:"#FFFFFF"},{name:"BgColor",value:"#6732D1"}]}},title:"@freud-ds/web-components/Icons/Ícone como classe CSS",component:AllIcons}),"\n",(0,jsx_runtime.jsx)(header_component.z,{title:"Icon",description:"Utilizando classe CSS para exibir ícones na tela."}),"\n",(0,jsx_runtime.jsxs)(_components.h2,{id:"import",children:[(0,jsx_runtime.jsx)("a",{id:"importing"}),"Import"]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"estilo",children:"Estilo"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Importe o arquivo de estilo dos ícones:"}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"css-global",children:"CSS Global"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["O arquivo de estilo dos ícones será importado globalmente, ou seja, em toda a aplicação. Para isso, coloque esse código\nno seu arquivo ",(0,jsx_runtime.jsx)(_components.code,{children:".css"})," global:"]}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-css",children:"@import '@freud-ds/icons/style/style.css';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"icon",children:"Icon"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Para utilizar o componente, basta utilizar a tag ",(0,jsx_runtime.jsx)(_components.code,{children:"<i>"})," ou ",(0,jsx_runtime.jsx)(_components.code,{children:"<span>"})," passando a classe com o nome do ícone (",(0,jsx_runtime.jsx)(_components.code,{children:"freud-icon freud-icon-[icon-name]"}),")\ncomo parâmetro."]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"exemplo",children:"Exemplo"}),"\n",(0,jsx_runtime.jsxs)(_components.h4,{id:"utilizando-a-tag-i",children:["Utilizando a tag ",(0,jsx_runtime.jsx)(_components.code,{children:"<i>"})]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{sourceState:dist.sK.OPEN,children:(0,jsx_runtime.jsx)(dist.oG,{story:Default_i})}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{sourceState:dist.sK.OPEN,children:(0,jsx_runtime.jsx)(dist.oG,{story:Small_i})}),"\n",(0,jsx_runtime.jsxs)(_components.h4,{id:"utilizando-a-tag-span",children:["Utilizando a tag ",(0,jsx_runtime.jsx)(_components.code,{children:"<span>"})]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{sourceState:dist.sK.OPEN,children:(0,jsx_runtime.jsx)(dist.oG,{story:Default_span})}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{sourceState:dist.sK.OPEN,children:(0,jsx_runtime.jsx)(dist.oG,{story:Small_span})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"lista-de-ícones-disponíveis",children:"Lista de ícones disponíveis"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Essa é a lista com todos os ícones disponíveis no Freud DS. Selecione um ícone e o parâmetro ",(0,jsx_runtime.jsx)(_components.code,{children:"class"})," será copiado para o seu clipboard."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"Clique no ícone, ele será enviado para sua área de transferência."})}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{sourceState:dist.sK.NONE,children:(0,jsx_runtime.jsx)(dist.oG,{story:AllIcons})})]})}const _Default_i_=Default_i,_Small_i_=Small_i,_Default_span_=Default_span,_Small_span_=Small_span,_AllIcons_=AllIcons,componentMeta={title:"@freud-ds/web-components/Icons/Ícone como classe CSS",parameters:{layout:"centered",backgrounds:{default:"Default",values:[{name:"Default",value:"#FFFFFF"},{name:"BgColor",value:"#6732D1"}]}},decorators:[(0,angular_dist.moduleMetadata)({imports:[public_api.Jm,public_api.My,public_api.Jw,all_icons_module.b]})],component:AllIcons,argTypes:{},tags:["stories-mdx"],includeStories:["_Default_i_","_Small_i_","_Default_span_","_Small_span_","_AllIcons_"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const icons_stories=componentMeta,icons_stories_namedExportsOrder=["_Default_i_","_Small_i_","_Default_span_","_Small_span_","_AllIcons_"]},"./stories/icons/all-icons/all-icons.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".all-icons-container {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: flex-start;\n}\n.all-icons-container freud-input-text {\n  width: 100%;\n  margin-bottom: 16px;\n}\n.all-icons-container .icon-item {\n  cursor: pointer;\n  width: 143.5px;\n  margin: 8px;\n  padding: 8px;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n}\n.all-icons-container .icon-item .freud-icon {\n  font-size: 24px;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);