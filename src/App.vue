<template>
  <v-app>
    <v-app-bar app dark color="#0F8ED6">
      <div class="app-bar-logo-bg">
        <v-img src="./assets/logo_bps.png"></v-img>
      </div>
      <v-toolbar-title>ASTABAYA</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main app color="#E5E5E5">
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <v-slide-y-transition hide-on-leave>
          <router-view></router-view>
        </v-slide-y-transition>
      </v-container>
    </v-main>
    <v-bottom-navigation
      class="fixedMenu"
      app
      dark
      color="yellow"
      v-model="menu"
      :style="{ 'background-color': '#0F8ED6' }"
    >
      <v-btn value="beranda" to="/">
        <span>Beranda</span>

        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn value="tabel" to="/tabel/0">
        <span>Tabel</span>

        <v-icon>mdi-table</v-icon>
      </v-btn>

      <v-btn value="publikasi">
        <span>Publikasi</span>

        <v-icon>mdi-book</v-icon>
      </v-btn>

      <v-menu top offset-y close-on-click close-on-content-click>
        <template v-slot:activator="{ on, attrs }">
          <v-btn dark v-bind="attrs" v-on="on" value="lainnya">
            <span>Lainnya</span>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    drawer: null,
    menu: "beranda",
    items: [
      { title: "Informasi Umum" },
      { title: "Visi dan Misi" },
      { title: "Tentang Kita" },
    ],
  }),
};
</script>

<style>
.app-bar-logo-bg {
  display: flex;
  align-items: center;
  padding: 1px;
  margin-right: 1rem;
  width: 35px;
  height: 35px;
  background-color: hsl(177, 41%, 91%);
  border-radius: 50%;
}
.fixedMenu {
  position: fixed;
}
</style>
