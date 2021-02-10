import { createApp } from 'vue';
import App from './app.vue';
import DemoBlock from './components/demo-block.vue';
import VueBarcode from '../src';

const app = createApp(App);

app.component(DemoBlock.name, DemoBlock);
app.component(VueBarcode.name, VueBarcode);
app.mount('#app');
