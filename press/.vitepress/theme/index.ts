// https://vitepress.dev/guide/custom-theme
import { h, defineAsyncComponent } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import "virtual:uno.css";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component(
      "Embed",
      defineAsyncComponent(() => import("../../components/Embed.vue"))
    );
    app.component(
      "AppStore",
      defineAsyncComponent(() => import("../../components/Embeds/AppStore.vue"))
    );
    app.component(
      "Github",
      defineAsyncComponent(() => import("../../components/Embeds/Github.vue"))
    );
    app.component(
      "Link",
      defineAsyncComponent(() => import("../../components/Embeds/Link.vue"))
    );
    app.component(
      "FilterBar",
      defineAsyncComponent(() => import("../../components/Filter/FilterBar.vue"))
    );
    app.component(
      "FilterItem",
      defineAsyncComponent(() => import("../../components/Filter/FilterItem.vue"))
    );
  }
} satisfies Theme
