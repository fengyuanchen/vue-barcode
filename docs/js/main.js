window.onload = function () {
  Vue.component(VueBarcode.name, VueBarcode);

  new Vue({
    el: '#app',
  });
};
