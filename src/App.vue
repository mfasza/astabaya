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
      app
      v-model="menu"
      background-color="#0F8ED6"
      dark
      shift
    >
      <v-btn value="beranda" to="/">
        <span>Beranda</span>

        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn value="tabel" to="/tabel">
        <span>Tabel</span>

        <v-icon>mdi-table</v-icon>
      </v-btn>

      <v-btn value="publikasi" to="/publikasis">
        <span>Publikasi</span>

        <v-icon>mdi-book</v-icon>
      </v-btn>

      <v-btn value="lainnya" to="/lainnya">
        <span>Lainnya</span>

        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    drawer: null,
    menu: "beranda",
  }),
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;200;300;400;500;700&display=swap");

html,
body {
  font-family: "Josefin Sans", sans-serif;
}

#app {
  font-family: "Josefin Sans", sans-serif;
}

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

.theme--dark.v-btn.v-btn--has-bg {
  background-color: #0f8ed6 !important;
}

.v-btn:not(.v-btn--round).v-size--default {
  height: inherit !important;
}
</style>
