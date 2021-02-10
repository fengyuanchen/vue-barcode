# Bar Code

> Easy to use bar code component, bases on [JsBarcode](https://github.com/lindell/JsBarcode).

## Basic usage

```html
<template>
  <vue-barcode value="Hello, World!"></vue-barcode>
  <vue-barcode value="1234567890"></vue-barcode>
</template>
```

## Add options

```html
<template>
  <vue-barcode value="1234567890"></vue-barcode>
  <vue-barcode value="1234567890" :options="{ lineColor: '#007bff' }"></vue-barcode>
</template>
```

## Custom tag

```html
<template>
  <vue-barcode value="1234567890" tag="img"></vue-barcode>
  <vue-barcode value="1234567890" tag="svg"></vue-barcode>
</template>
```

## Props

| Name | Type | Default | Options | Description |
| --- | --- | --- | --- | --- |
| value | `string` | - | - | The value of the bar code. |
| options | `Object` | - | [Checkout the available options](https://github.com/lindell/JsBarcode#options) | The options for the bar code generator.
| tag | `string` | `"canvas"` | canvas, img, svg | The tag of the bar code. |
