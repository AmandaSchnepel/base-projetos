(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{480:function(module,exports,__webpack_require__){__webpack_require__(481),__webpack_require__(636),__webpack_require__(637),__webpack_require__(842),__webpack_require__(843),__webpack_require__(850),__webpack_require__(851),__webpack_require__(847),__webpack_require__(844),__webpack_require__(852),__webpack_require__(845),__webpack_require__(846),__webpack_require__(848),module.exports=__webpack_require__(839)},547:function(module,exports){},637:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(346)},839:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(346).configure)([__webpack_require__(840),__webpack_require__(841)],module,!1)}).call(this,__webpack_require__(200)(module))},840:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=840},841:function(module,exports,__webpack_require__){var map={"./Main/stories.tsx":849};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=841},848:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"decorators",(function(){return decorators}));__webpack_require__(22),__webpack_require__(5),__webpack_require__(49),__webpack_require__(427),__webpack_require__(835),__webpack_require__(45),__webpack_require__(836),__webpack_require__(837),__webpack_require__(426);var client_api=__webpack_require__(859),esm=__webpack_require__(4),react=__webpack_require__(0),react_default=__webpack_require__.n(react),styled_components_browser_esm=__webpack_require__(108),global=Object(styled_components_browser_esm.a)(["*{margin:0;padding:0;box-sizing:border-box;}Html{font-size:62.5%;}Html,body,#__next{height:100%;}body{font-family:--apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;}"]),jsx_runtime=__webpack_require__(52),decorators=(react_default.a.createElement,[function(Story){return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(global,{}),Object(jsx_runtime.jsx)(Story,{})]})}]);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.c)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.d)(loader,!1)}));case"parameters":return Object(client_api.e)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(client_api.b)(enhancer)}));case"render":return Object(client_api.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.e)(v,!1);default:return console.log(key+" was not supported :( !")}}))},849:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Basic",(function(){return stories_Basic})),__webpack_require__.d(__webpack_exports__,"Default",(function(){return stories_Default}));var react=__webpack_require__(0),react_default=__webpack_require__.n(react),styled_components_browser_esm=(__webpack_require__(16),__webpack_require__(108)),Wrapper=styled_components_browser_esm.b.main.withConfig({displayName:"styles__Wrapper",componentId:"sc-9y4lzz-0"})(["background-color:#06002b;color:#fff;width:100%;height:100%;padding:3rem;text-align:center;flex-direction:column;display:flex;align-items:center;justify-content:center;"]),Logo=styled_components_browser_esm.b.img.withConfig({displayName:"styles__Logo",componentId:"sc-9y4lzz-1"})(["width:25rem;margin-bottom:2rem;"]),Title=styled_components_browser_esm.b.h1.withConfig({displayName:"styles__Title",componentId:"sc-9y4lzz-2"})(["font-size:2.5rem;"]),Description=styled_components_browser_esm.b.h2.withConfig({displayName:"styles__Description",componentId:"sc-9y4lzz-3"})(["font-size:2rem;font-weight:400;"]),Illustration=styled_components_browser_esm.b.img.withConfig({displayName:"styles__Illustration",componentId:"sc-9y4lzz-4"})(["margin-top:3rem;width:min(30rem,100%);"]),jsx_runtime=__webpack_require__(52),Main_Main=(react_default.a.createElement,function Main(){return Object(jsx_runtime.jsxs)(Wrapper,{children:[Object(jsx_runtime.jsx)(Logo,{src:"/img/logo.svg",alt:"imagem da logo do react"}),Object(jsx_runtime.jsx)(Title,{children:"React Avançado"}),Object(jsx_runtime.jsx)(Description,{children:"Typescript, React.js, Next.js e Styled Components"}),Object(jsx_runtime.jsx)(Illustration,{src:"/img/hero-illustration.svg",alt:"um desenvolvedor de frante para uma tela com codigo"})]})});Main_Main.displayName="Main";var components_Main=Main_Main,stories_Basic=(react_default.a.createElement,__webpack_exports__.default={title:"Main",component:components_Main,args:{title:"title default",description:"description default"}},function Basic(args){return Object(jsx_runtime.jsx)(components_Main,Object.assign({},args))});stories_Basic.displayName="Basic",stories_Basic.args={title:"title basic",description:"description basic"};var stories_Default=function Default(args){return Object(jsx_runtime.jsx)(components_Main,Object.assign({},args))};stories_Default.displayName="Default"}},[[480,2,3]]]);