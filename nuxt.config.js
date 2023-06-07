// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  router: {
    base: "/test-nat/",
  },
  head: {
    title: "We bcn test",
    meta: [
      { name: "description", content: "All the best products in one place" },
      {
        name: "google-site-verification",
        content: "ugIsV3zEV6OO2pd3FPdhCbz0QkjxsaIuLMKimFWpQ6I",
      },
    ],
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/icon?family=Material+Icons",
      },
    ],
  },
  ssr: true,
  modules: ["nuxt-simple-sitemap"],
  sitemap: {
    hostname: "https://NataliaPuig.github.io/test-nat",
    gzip: true,
    routes: [
      "/",
      "/about",
      "/filter",
      "/details/dotnetdot/",
      "/details/frontend_cluster/",
      "/details/php_lovers/",
      "/details/pythonises/",
    ],
  },
};
