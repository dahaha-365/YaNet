import DefaultTheme from "vitepress/theme";
import { defineAsyncComponent } from "vue";
import "virtual:uno.css";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component(
      "c-embed",
      defineAsyncComponent(() => import("../../components/embed.vue"))
    );
    app.component(
      "github",
      defineAsyncComponent(() => import("../../components/embeds/github.vue"))
    );
  },
};
