# vue-barcode

> Bar code component for [Vue 2](https://v2.vuejs.org/), bases on [JsBarcode](https://github.com/lindell/JsBarcode).

- [Website](https://fengyuanchen.github.io/vue-barcode)

## Table of contents

- [vue-barcode](#vue-barcode)
  - [Table of contents](#table-of-contents)
  - [Main files](#main-files)
  - [Getting started](#getting-started)
    - [Install](#install)
    - [Usage](#usage)
  - [Props](#props)
    - [value](#value)
    - [options](#options)
    - [tag](#tag)
  - [Browser support](#browser-support)
  - [Versioning](#versioning)
  - [License](#license)

## Main files

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
npm install vue@2 @chenfengyuan/vue-barcode@1
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
