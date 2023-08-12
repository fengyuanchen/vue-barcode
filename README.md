# vue-barcode

[![Coverage Status](https://img.shields.io/codecov/c/github/fengyuanchen/vue-barcode.svg)](https://codecov.io/gh/fengyuanchen/vue-barcode) [![Downloads](https://img.shields.io/npm/dm/@chenfengyuan/vue-barcode.svg)](https://www.npmjs.com/package/@chenfengyuan/vue-barcode) [![Version](https://img.shields.io/npm/v/@chenfengyuan/vue-barcode.svg)](https://www.npmjs.com/package/@chenfengyuan/vue-barcode) [![Gzip Size](https://img.shields.io/bundlephobia/minzip/@chenfengyuan/vue-barcode.svg)](https://unpkg.com/@chenfengyuan/vue-barcode/dist/vue-barcode.js)

> Bar code component for Vue 3, bases on [JsBarcode](https://github.com/lindell/JsBarcode). For Vue 2, check out the [`v1`](https://github.com/fengyuanchen/vue-barcode/tree/v1) branch.

- [Docs](src/README.md)
- [Demo](https://fengyuanchen.github.io/vue-barcode)

## Main npm package files

```text
dist/
├── vue-barcode.js         (UMD, default)
├── vue-barcode.min.js     (UMD, compressed)
├── vue-barcode.esm.js     (ECMAScript Module)
├── vue-barcode.esm.min.js (ECMAScript Module, compressed)
└── vue-barcode.d.ts       (TypeScript Declaration File)
```

## Getting started

### Installation

Using npm:

```shell
npm install jsbarcode@3 @chenfengyuan/vue-barcode@2
```

Using pnpm:

```shell
pnpm add jsbarcode@3 @chenfengyuan/vue-barcode@2
```

Using Yarn:

```shell
yarn add jsbarcode@3 @chenfengyuan/vue-barcode@2
```

Using CDN:

```html
<script src="https://unpkg.com/vue@3"></script><!-- Vue.js is required -->
<script src="https://unpkg.com/jsbarcode@3/dist/JsBarcode.all.min.js"></script><!-- JsBarcode is required -->
<script src="https://unpkg.com/@chenfengyuan/vue-barcode@2"></script>
```

### Usage

```js
import { createApp } from 'vue';
import VueBarcode from '@chenfengyuan/vue-barcode';

const app = createApp({});

app.component(VueBarcode.name, VueBarcode);
```

```html
<vue-barcode  value="Hello, World!" :options="{ displayValue: false }"></vue-barcode>
```

## Browser support

Same as Vue 3.

## Versioning

Maintained under the [Semantic Versioning guidelines](https://semver.org/).

## License

[MIT](https://opensource.org/licenses/MIT) © [Chen Fengyuan](https://chenfengyuan.com/)
