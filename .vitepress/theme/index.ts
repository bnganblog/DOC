import DefaultTheme from 'vitepress/theme';
import WLink from './components/WLink/index.vue';
import './style.css';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('WLink', WLink);
  }
}
