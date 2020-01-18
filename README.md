# vue-barcode

[![Build Status](https://img.shields.io/travis/fengyuanchen/vue-barcode.svg)](https://travis-ci.org/fengyuanchen/vue-barcode) [![Coverage Status](https://img.shields.io/codecov/c/github/fengyuanchen/vue-barcode.svg)](https://codecov.io/gh/fengyuanchen/vue-barcode) [![Downloads](https://img.shields.io/npm/dm/@chenfengyuan/vue-barcode.svg)](https://www.npmjs.com/package/@chenfengyuan/vue-barcode) [![Version](https://img.shields.io/npm/v/@chenfengyuan/vue-barcode.svg)](https://www.npmjs.com/package/@chenfengyuan/vue-barcode) [![Dependencies](https://img.shields.io/david/fengyuanchen/vue-barcode.svg)](https://www.npmjs.com/package/@chenfengyuan/vue-barcode)

> Bar code component for [Vue.js](https://vuejs.org/), bases on [JsBarcode](https://github.com/lindell/JsBarcode).

- [Website](https://fengyuanchen.github.io/vue-barcode)

## Table of contents

- [Main](#main)
- [Getting started](#getting-started)
- [Props](#props)
- [Browser support](#browser-support)
- [Versioning](#versioning)
- [License](#license)

## Main

```text
dist/
├── vue-barcode.js        (UMD)
├── vue-barcode.min.js    (UMD, compressed)
├── vue-barcode.common.js (CommonJS)
└── vue-barcode.esm.js    (ES Module)
```

## Getting started

### Install

```shell
npm install @chenfengyuan/vue-barcode vue
```

In browser:

```html
<script src="/path/to/vue.js"></script>
<script src="/path/to/vue-barcode.js"></script>
<script>Vue.component(VueBarcode.name, VueBarcode);</script>
```

### Usage

```js
import Vue from 'vue';
import VueBarcode from '@chenfengyuan/vue-barcode';

Vue.component(VueBarcode.name, VueBarcode);
```

```html
<barcode value="Hello, World!" :options="{ displayValue: false }"></barcode>
```

[⬆ back to top](#table-of-contents)

## Props

### value

- Type: `String`

The value of the bar code.

### options

- Type: `Object`

The options for the bar code generator. References the [JsBarcode's options](https://github.com/lindell/JsBarcode#options).

### tag

- Type: `String`
- Default: `'canvas'`
- Options: `'canvas'`, `'svg'` and `'img'`

The tag name of the component's root element.

## Browser support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)
- Edge (latest)
- Internet Explorer 9+

## Versioning

Maintained under the [Semantic Versioning guidelines](https://semver.org/).

## License

[MIT](https://opensource.org/licenses/MIT) © [Chen Fengyuan](https://chenfengyuan.com/)

[⬆ back to top](#table-of-contents)
