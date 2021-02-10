import { mount } from '@vue/test-utils';
import VueBarcode from '../src';

describe('props', () => {
  describe('options', () => {
    it('should apply the options', (done) => {
      const wrapper = mount(VueBarcode, {
        props: {
          value: 'foo',
          options: {
            displayValue: false,
            height: 200,
            margin: 0,
          },
        },
      });

      setTimeout(() => {
        expect(wrapper.vm.$el.height).toBe(200);
        done();
      }, 100);
    });

    it('should update the bar code automatically when the options changed', (done) => {
      const wrapper = mount({
        components: {
          VueBarcode,
        },
        data() {
          return {
            options: {
              displayValue: false,
              height: 200,
              margin: 0,
            },
          };
        },
        mounted() {
          setTimeout(() => {
            expect(wrapper.vm.$el.height).toBe(200);
            this.options.height = 400;
            setTimeout(() => {
              expect(wrapper.vm.$el.height).toBe(400);
              done();
            }, 100);
          }, 100);
        },
        template: '<vue-barcode :options="options" value="foo" />',
      });
    });
  });

  describe('tag', () => {
    it('should be "canvas" by default', () => {
      const wrapper = mount(VueBarcode, {
        props: {
          value: 'foo',
        },
      });

      expect(wrapper.props('tag')).toBe('canvas');
      expect(wrapper.vm.$el.tagName.toLowerCase()).toBe('canvas');
    });

    it('should be "img"', () => {
      const wrapper = mount(VueBarcode, {
        props: {
          value: 'foo',
          tag: 'img',
        },
      });

      expect(wrapper.props('tag')).toBe('img');
      expect(wrapper.vm.$el.tagName.toLowerCase()).toBe('img');
    });

    it('should be "svg"', () => {
      const wrapper = mount(VueBarcode, {
        props: {
          value: 'foo',
          tag: 'svg',
        },
      });

      expect(wrapper.props('tag')).toBe('svg');
      expect(wrapper.vm.$el.tagName.toLowerCase()).toBe('svg');
    });
  });

  describe('value', () => {
    it('should be undefined by default', () => {
      const wrapper = mount(VueBarcode);

      expect(wrapper.props('value')).toBeUndefined();
    });

    it('should match the given value', () => {
      const wrapper = mount(VueBarcode, {
        props: {
          value: 'foo',
        },
      });

      expect(wrapper.props('value')).toBe('foo');
    });

    it('should update the bar code automatically when the value changed', (done) => {
      const wrapper = mount({
        components: {
          VueBarcode,
        },
        data() {
          return {
            value: 'foo',
          };
        },
        mounted() {
          setTimeout(() => {
            const oldDataURL = wrapper.vm.$el.toDataURL();

            this.value = 'bar';
            setTimeout(() => {
              const newDataURL = wrapper.vm.$el.toDataURL();

              expect(newDataURL).not.toBe(oldDataURL);
              done();
            }, 100);
          }, 100);
        },
        template: '<vue-barcode :value="value" />',
      });
    });
  });
});
