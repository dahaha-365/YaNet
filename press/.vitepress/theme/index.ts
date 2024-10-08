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
      "c-embed",
      defineAsyncComponent(() => import("../../components/embed.vue"))
    );
    app.component(
      "github",
      defineAsyncComponent(() => import("../../components/embeds/github.vue"))
    );
  }
} satisfies Theme
