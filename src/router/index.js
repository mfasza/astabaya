import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/tabel/",
    name: "TabelAll",
    component: () =>
      import(/* webpackChunkName: "tabel" */ "../views/Tabel.vue"),
  },
  {
    path: "/tabel/:panel",
    name: "Tabel",
    component: () =>
      import(/* webpackChunkName: "tabel" */ "../views/Tabel.vue"),
  },
  {
    path: "/tabel/:id_tabel/subkategori/:id_subkategori",
    name: "SubKategori",
    component: () =>
      import(/* webpackChunkName: "sub_kategori" */ "../views/SubKategori.vue"),
  },
  {
    path: "/tabel/:id_tabel/subkategori/:id_subkategori/data/:id_data",
    name: "Data",
    component: () =>
      import(/* webpackChunkName: "data" */ "../views/Data.vue"),
  },
  {
    path: "/publikasi",
    name: "Publikasi",
    component: () =>
      import(/* webpackChunkName: "publikasi" */ "../views/Publikasi"),
  },
  {
    path: "/lainnya",
    name: "Lainnya",
    component: () =>
      import(/* webpackChunkName: "publikasi" */ "../views/Lainnya"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "*",
    component: Home,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
