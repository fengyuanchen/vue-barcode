Vue.component(VueBarcode.name, VueBarcode);

describe('props', () => {
  describe('options', () => {
    it('should apply the options', (done) => {
      new Vue({
        template: '<barcode value="1" :options="{ displayValue: false, height: 200, margin: 0 }"></barcode>',
        mounted() {
          setTimeout(() => {
            expect(this.$el.height).to.equal(200);
            done();
          }, 100);
        },
      }).$mount();
    });

    it('should update the bar code automatically when the options changed', (done) => {
      new Vue({
        data() {
          return {
            options: {
              margin: 0,
              lineColor: '#000',
            },
          };
        },
        template: '<barcode value="1" :options="options"></barcode>',
        mounted() {
          setTimeout(() => {
            const context = this.$el.getContext('2d');
            let { data } = context.getImageData(0, 0, 1, 1);

            // #000 (black)
            expect(data[0]).to.equal(0);
            expect(data[1]).to.equal(0);
            expect(data[2]).to.equal(0);
            expect(data[3]).to.equal(255);
            this.options.lineColor = '#007bff';
            setTimeout(() => {
              ({ data } = context.getImageData(0, 0, 1, 1));

              // #007bff (blue)
              expect(data[0]).to.equal(0);
              expect(data[1]).to.equal(123);
              expect(data[2]).to.equal(255);
              expect(data[3]).to.equal(255);
              done();
            }, 100);
          }, 100);
        },
      }).$mount();
    });
  });

  describe('tag', () => {
    it('should be "canvas" by default', (done) => {
      new Vue({
        template: '<barcode value="1"></barcode>',
        mounted() {
          expect(this.$el.tagName.toLowerCase()).to.equal('canvas');
          done();
        },
      }).$mount();
    });

    it('should be "img"', (done) => {
      new Vue({
        template: '<barcode tag="img" value="1"></barcode>',
        mounted() {
          expect(this.$el.tagName.toLowerCase()).to.equal('img');
          done();
        },
      }).$mount();
    });
  });

  describe('value', () => {
    it('should be undefined by default', (done) => {
      new Vue({
        template: '<barcode ref="barcode"></barcode>',
        mounted() {
          expect(this.$refs.barcode.value).to.be.undefined;
          done();
        },
      }).$mount();
    });

    it('should throw error when the value is empty', () => {
      try {
        new Vue({
          template: '<barcode ref="barcode" value=""></barcode>',
        }).$mount();
      } catch (error) {
        expect(error).to.be.an('error');
      }
    });

    it('should match the given value', (done) => {
      new Vue({
        template: '<barcode ref="barcode" value="1"></barcode>',
        mounted() {
          expect(this.$refs.barcode.value).to.equal('1');
          done();
        },
      }).$mount();
    });

    it('should update the QR code automatically when the value changed', (done) => {
      new Vue({
        data() {
          return {
            value: '1',
          };
        },
        template: '<barcode :value="value"></barcode>',
        mounted() {
          setTimeout(() => {
            const dataURL = this.$el.toDataURL();

            this.value = '2';
            setTimeout(() => {
              expect(this.$el.toDataURL()).to.not.equal(dataURL);
              done();
            }, 100);
          }, 100);
        },
      }).$mount();
    });
  });
});
