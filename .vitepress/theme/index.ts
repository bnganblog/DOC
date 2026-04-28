import DefaultTheme from 'vitepress/theme';
import WLink from './components/WLink/index.vue';
import NavSite from './components/navsite/index.vue';
import LinkScroll from './components/LinkScroll/index.vue';
import MyLayout from './MyLayout.vue';
import './style.css';

export default {
  extends: DefaultTheme,
  Layout: MyLayout,
  enhanceApp({ app }) {
    app.component('WLink', WLink);
    app.component('NavSite', NavSite);
    app.component('LinkScroll', LinkScroll);
  }
}
