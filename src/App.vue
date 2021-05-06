<template>
  <v-app>
    <v-app-bar app dark color="#0F8ED6">
      <v-btn v-show="isMain" icon @click.stop="$router.go(-1)">
        <v-icon>mdi-arrow-left-circle</v-icon>
      </v-btn>
      <div class="app-bar-logo-bg">
        <v-img src="./assets/logo_bps.png"></v-img>
      </div>
      <v-toolbar-title>ASTABAYA</v-toolbar-title>
      <v-spacer></v-spacer>
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
      color="#FFC635"
      dark
    >
      <v-btn value="beranda" to="/">
        <span>Beranda</span>

        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn value="tabel" to="/kategori">
        <span>Tabel</span>

        <v-icon>mdi-table</v-icon>
      </v-btn>

      <v-btn value="infografis" to="/Infografis">
        <span>Infografis</span>

        <v-icon>mdi-image</v-icon>
      </v-btn>

      <v-btn value="lainnya" to="/lainnya">
        <span>Tentang</span>

        <v-icon>mdi-information-variant</v-icon>
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
  computed: {
    isMain() {
      const url = this.$route.path;
      const splited_url = url.split("/");
      return splited_url.length > 2;
    },
  },
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
  width: inherit !important;
}
</style>
