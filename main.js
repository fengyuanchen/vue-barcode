!function(){"use strict";var e={21:function(e,t){t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[e,a]of t)n[e]=a;return n}}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var c=t[a]={exports:{}};return e[a](c,c.exports,n),c.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e=Vue;const t={class:"app"},a={class:"navbar navbar-light navbar-expand-md"},o={class:"container"},c={class:"navbar-brand",href:"./"},r=(0,e.createElementVNode)("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbar-collapse","aria-controls":"navbar-collapse","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,e.createElementVNode)("span",{class:"navbar-toggler-icon"})],-1),l=(0,e.createElementVNode)("div",{id:"navbar-collapse",class:"collapse navbar-collapse justify-content-end",role:"navigation"},[(0,e.createElementVNode)("nav",{class:"nav navbar-nav"},[(0,e.createElementVNode)("a",{class:"nav-link",href:"https://github.com/fengyuanchen/vue-barcode",title:"View the GitHub project"}," GitHub "),(0,e.createElementVNode)("a",{class:"nav-link",href:"https://fengyuanchen.github.io/",title:"Explore more projects"}," Explore "),(0,e.createElementVNode)("a",{class:"nav-link",href:"https://chenfengyuan.com/",title:"About the author"}," About ")])],-1),s={class:"bg-primary text-white py-5"},d={class:"container"},i={class:"row"},u={class:"col-md"},p={class:"h6"},m={class:"lead"},v={class:"col-md"},b={ref:"carbonads",class:"carbonads"},h={class:"container"},g={class:"markdown-body"},f=(0,e.createStaticVNode)('<footer><div class="container"><p class="heart"></p><nav class="nav flex-wrap justify-content-center mb-3"><a class="nav-link" href="https://github.com/fengyuanchen/vue-barcode"> GitHub </a><a class="nav-link" href="https://github.com/fengyuanchen/vue-barcode/blob/main/CHANGELOG.md"> Changelog </a><a class="nav-link" href="https://github.com/fengyuanchen/vue-barcode/blob/main/LICENSE"> License </a><a class="nav-link" href="https://chenfengyuan.com/"> About </a></nav></div></footer>',1);var y=JSON.parse('{"name":"@chenfengyuan/vue-barcode","version":"2.0.2","description":"Bar code component for Vue 3.","main":"dist/vue-barcode.js","module":"dist/vue-barcode.esm.js","types":"dist/vue-barcode.d.ts","files":["dist"],"scripts":{"build":"rollup -c --environment BUILD:production","build:docs":"webpack --env production","build:types":"move-file dist/index.d.ts dist/vue-barcode.d.ts","changelog":"conventional-changelog -p angular -i CHANGELOG.md -s -r 0","clean":"del-cli dist","lint":"npm run lint:js && npm run lint:css","lint:css":"stylelint **/*.{css,scss,vue} --fix","lint:js":"eslint . --ext .js,.ts,.vue --fix","prepare":"husky install","release":"npm run clean && npm run lint && npm run build && npm run build:types && npm run build:docs && npm test && npm run changelog","serve":"webpack serve --hot --open","start":"npm run serve","test":"jest","test:coverage":"cat coverage/lcov.info | codecov"},"repository":{"type":"git","url":"https://github.com/fengyuanchen/vue-barcode.git"},"keywords":["barcode","bar-code","vue","vue3","vue-component","front-end","web"],"author":"Chen Fengyuan (https://chenfengyuan.com/)","license":"MIT","bugs":"https://github.com/fengyuanchen/vue-barcode/issues","homepage":"https://fengyuanchen.github.io/vue-barcode","devDependencies":{"@babel/core":"^7.22.10","@babel/preset-env":"^7.22.10","@commitlint/cli":"^17.7.1","@commitlint/config-conventional":"^17.7.0","@types/jest":"^27.5.2","@typescript-eslint/eslint-plugin":"^5.62.0","@typescript-eslint/parser":"^5.62.0","@vue/test-utils":"^2.4.1","babel-jest":"^27.5.1","babel-loader":"^8.3.0","canvas":"^2.11.2","change-case":"^4.1.2","codecov":"^3.8.3","conventional-changelog-cli":"^2.2.2","create-banner":"^2.0.0","css-loader":"^6.8.1","del-cli":"^5.0.0","eslint":"^8.47.0","eslint-config-airbnb-typescript":"^16.2.0","eslint-plugin-import":"^2.28.0","eslint-plugin-vue":"^8.7.1","html-webpack-plugin":"^5.5.3","husky":"^8.0.3","jest":"^27.5.1","jsbarcode":"^3.11.5","lint-staged":"^12.5.0","markdown-to-vue-loader":"^3.1.5","mini-css-extract-plugin":"^2.7.6","move-file-cli":"^3.0.0","rollup":"^2.79.1","rollup-plugin-terser":"^7.0.2","rollup-plugin-typescript2":"^0.35.0","sass":"^1.65.1","sass-loader":"^12.6.0","style-loader":"^3.3.3","stylelint":"^14.16.1","stylelint-config-recommended-scss":"^5.0.2","stylelint-config-recommended-vue":"^1.5.0","stylelint-order":"^5.0.0","ts-jest":"^27.1.5","ts-loader":"^9.4.4","tslib":"^2.6.1","typescript":"^4.9.5","vue":"^3.2.41","vue-loader":"^17.2.2","webpack":"^5.88.2","webpack-cli":"^4.10.0","webpack-dev-server":"^4.15.1"},"peerDependencies":{"jsbarcode":"^3.11.0","vue":"^3.0.0"},"publishConfig":{"access":"public"}}');const N={class:"component-readme"},V=(0,e.createElementVNode)("h1",null,"Bar Code",-1),E=(0,e.createElementVNode)("blockquote",null,[(0,e.createElementVNode)("p",null,[(0,e.createTextVNode)("Easy to use bar code component, bases on "),(0,e.createElementVNode)("a",{href:"https://github.com/lindell/JsBarcode"},"JsBarcode"),(0,e.createTextVNode)(".")])],-1),k=(0,e.createElementVNode)("h2",null,"Basic usage",-1),j=(0,e.createElementVNode)("pre",null,[(0,e.createElementVNode)("code",{class:"language-html"},'<template>\n  <vue-barcode value="Hello, World!"></vue-barcode>\n  <vue-barcode value="1234567890"></vue-barcode>\n</template>\n')],-1),C=(0,e.createElementVNode)("h2",null,"Add options",-1),x=(0,e.createElementVNode)("pre",null,[(0,e.createElementVNode)("code",{class:"language-html"},'<template>\n  <vue-barcode value="1234567890"></vue-barcode>\n  <vue-barcode value="1234567890" :options="{ lineColor: \'#007bff\' }"></vue-barcode>\n</template>\n')],-1),w=(0,e.createElementVNode)("h2",null,"Custom tag",-1),B=(0,e.createStaticVNode)('<pre><code class="language-html">&lt;template&gt;\n  &lt;vue-barcode value=&quot;1234567890&quot; tag=&quot;img&quot;&gt;&lt;/vue-barcode&gt;\n  &lt;vue-barcode value=&quot;1234567890&quot; tag=&quot;svg&quot;&gt;&lt;/vue-barcode&gt;\n&lt;/template&gt;\n</code></pre><h2>Props</h2><div class="table-responsive"><table class="table"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Options</th><th>Description</th></tr></thead><tbody><tr><td>value</td><td><code>string</code></td><td>-</td><td>-</td><td>The value of the bar code.</td></tr><tr><td>options</td><td><code>Object</code></td><td>-</td><td><a href="https://github.com/lindell/JsBarcode#options">Checkout the available options</a></td><td>The options for the bar code generator.</td></tr><tr><td>tag</td><td><code>string</code></td><td><code>&quot;canvas&quot;</code></td><td>canvas, img, svg</td><td>The tag of the bar code.</td></tr></tbody></table></div>',3);var O,S={components:{"component-readme-0":(O={},"function"==typeof O&&(O=O()),"object"!=typeof O&&(O={}),Object.assign(O,{name:"component-readme-0",template:'<div class="component-readme-0">\n  <vue-barcode value="Hello, World!"></vue-barcode>\n  <vue-barcode value="1234567890"></vue-barcode>\n</div>'})),"component-readme-1":function(){var e={};return"function"==typeof e&&(e=e()),"object"!=typeof e&&(e={}),Object.assign(e,{name:"component-readme-1",template:'<div class="component-readme-1">\n  <vue-barcode value="1234567890"></vue-barcode>\n  <vue-barcode value="1234567890" :options="{ lineColor: \'#007bff\' }"></vue-barcode>\n</div>'})}(),"component-readme-2":function(){var e={};return"function"==typeof e&&(e=e()),"object"!=typeof e&&(e={}),Object.assign(e,{name:"component-readme-2",template:'<div class="component-readme-2">\n  <vue-barcode value="1234567890" tag="img"></vue-barcode>\n  <vue-barcode value="1234567890" tag="svg"></vue-barcode>\n</div>'})}()}},q=n(21),D=(0,q.Z)(S,[["render",function(t,n,a,o,c,r){const l=(0,e.resolveComponent)("component-readme-0"),s=(0,e.resolveComponent)("demo-block"),d=(0,e.resolveComponent)("component-readme-1"),i=(0,e.resolveComponent)("component-readme-2");return(0,e.openBlock)(),(0,e.createElementBlock)("div",N,[V,E,k,(0,e.createVNode)(s,null,{default:(0,e.withCtx)((()=>[(0,e.createVNode)(l)])),_:1}),j,C,(0,e.createVNode)(s,null,{default:(0,e.withCtx)((()=>[(0,e.createVNode)(d)])),_:1}),x,w,(0,e.createVNode)(s,null,{default:(0,e.withCtx)((()=>[(0,e.createVNode)(i)])),_:1}),B])}]]);y.name=y.name.split("/").pop()||"";var T=(0,e.defineComponent)({components:{Readme:D},data(){return y},mounted(){const e=document.createElement("script");e.async=!0,e.id="_carbonads_js",e.src="//cdn.carbonads.com/carbon.js?serve=CKYI55Q7&placement=fengyuanchengithubio",this.$refs.carbonads.appendChild(e)}}),_=(0,q.Z)(T,[["render",function(n,y,N,V,E,k){const j=(0,e.resolveComponent)("readme");return(0,e.openBlock)(),(0,e.createElementBlock)("div",t,[(0,e.createElementVNode)("header",a,[(0,e.createElementVNode)("nav",o,[(0,e.createElementVNode)("a",c,(0,e.toDisplayString)(n.name),1),r,l])]),(0,e.createElementVNode)("main",null,[(0,e.createElementVNode)("div",s,[(0,e.createElementVNode)("div",d,[(0,e.createElementVNode)("div",i,[(0,e.createElementVNode)("div",u,[(0,e.createElementVNode)("h1",null,[(0,e.createTextVNode)((0,e.toDisplayString)(n.name)+" ",1),(0,e.createElementVNode)("small",p," v"+(0,e.toDisplayString)(n.version),1)]),(0,e.createElementVNode)("p",m,(0,e.toDisplayString)(n.description),1)]),(0,e.createElementVNode)("div",v,[(0,e.createElementVNode)("div",b,null,512)])])])]),(0,e.createElementVNode)("div",h,[(0,e.createElementVNode)("div",g,[(0,e.createVNode)(j)])])]),f])}]]);const A={class:"demo-block"};var G=(0,e.defineComponent)({name:"DemoBlock"}),H=(0,q.Z)(G,[["render",function(t,n,a,o,c,r){return(0,e.openBlock)(),(0,e.createElementBlock)("div",A,[(0,e.renderSlot)(t.$slots,"default")])}]]),$=JsBarcode,J=n.n($),L=(0,e.defineComponent)({name:"VueBarcode",props:{value:{type:String,default:void 0},options:{type:Object,default:void 0},tag:{type:String,default:"canvas"}},watch:{$props:{deep:!0,immediate:!0,handler(){this.$el&&this.generate()}}},mounted(){this.generate()},methods:{generate(){J()(this.$el,String(this.value),this.options)}},render(){return(0,e.h)(this.tag,this.$slots.default)}});const I=(0,e.createApp)(_);I.component(H.name,H),I.component(L.name,L),I.mount("#app")}()}();