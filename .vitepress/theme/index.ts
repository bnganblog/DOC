import DefaultTheme from 'vitepress/theme';
import WLink from './components/WLink/index.vue';
import NavSite from './components/NavSite/index.vue';
import './style.css';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('WLink', WLink);
    app.component('NavSite', NavSite);
  }
}