import JsBarcode from 'jsbarcode';

export default {
  name: 'barcode',

  props: {
    /**
     * The value of the bar code.
     */
    value: null,

    /**
     * The options for the bar code generator.
     * {@link https://github.com/lindell/JsBarcode#options}
     */
    options: Object,

    /**
     * The tag name of the component's root element.
     */
    tag: {
      type: String,
      default: 'canvas',
    },
  },

  render(createElement) {
    return createElement(this.tag, this.$slots.default);
  },

  watch: {
    $props: {
      deep: true,
      immediate: true,

      /**
       * Update the bar code when props changed.
       */
      handler() {
        if (this.$el) {
          this.generate();
        }
      },
    },
  },

  methods: {
    /**
     * Generate bar code.
     */
    generate() {
      JsBarcode(this.$el, String(this.value), this.options);
    },
  },

  mounted() {
    this.generate();
  },
};
