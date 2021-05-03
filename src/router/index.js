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
    path: "/kategori/",
    name: "KategoriAll",
    component: () =>
      import(/* webpackChunkName: "kategori" */ "../views/Kategori.vue"),
  },
  {
    path: "/kategori/:panel",
    name: "Kategori",
    component: () =>
      import(/* webpackChunkName: "kategori" */ "../views/Kategori.vue"),
  },
  {
    path: "/kategori/:id_kategori/subkategori/:id_subkategori",
    name: "SubKategori",
    component: () =>
      import(/* webpackChunkName: "sub_kategori" */ "../views/SubKategori.vue"),
  },
  {
    path: "/kategori/:id_kategori/subkategori/:id_subkategori/tabel/:id_tabel",
    name: "Tabel",
    component: () =>
      import(/* webpackChunkName: "tabel" */ "../views/Tabel.vue"),
  },
  {
    path: "/publikasis",
    name: "Publikasis",
    component: () =>
      import(/* webpackChunkName: "publikasi" */ "../views/Publikasis"),
  },
  {
    path: "/publikasis/:id",
    name: "Publikasi",
    component: () =>
      import(/* webpackChunkName: "publikasi" */ "../views/Publikasi"),
  },
  {
    path: "/lainnya/infografis",
    name: "Infografis",
    component: () =>
      import(/* webpackChunkName: "infografis" */ "../views/Infografis"),
  },
  {
    path: "/lainnya/infografi/:id",
    name: "Infografi",
    component: () =>
      import(/* webpackChunkName: "infografi" */ "../views/Infografi"),
  },
  {
    path: "/lainnya",
    name: "Lainnya",
    component: () =>
      import(/* webpackChunkName: "lainnya" */ "../views/Lainnya"),
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
