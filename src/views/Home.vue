<template>
  <div>
    <!-- kategori container -->
    <div class="mb-2" v-for="kategori in kategoris" :key="kategori.index">
      <small class="text-sm-body font-weight-bold grey--text">{{
        kategori.kategori
      }}</small>
      <!-- sub-kategori container -->
      <v-slide-group
        v-model="subkategori_selected"
        class="pa-0 ma-0"
        active-class="success"
      >
        <v-slide-item
          v-for="subKategori in kategori.subKategoris"
          :key="subKategori.index"
        >
          <v-row class="ma-2" align="center" justify="center">
            <v-scale-transition>
              <div class="d-flex flex-column flex-wrap align-center">
                <v-btn fab dark :color="subKategori.color">
                  <v-icon dark>{{ subKategori.icon }}</v-icon>
                </v-btn>
                <small class="mt-1">{{ subKategori.subKategori }}</small>
              </div>
            </v-scale-transition>
          </v-row>
        </v-slide-item>
      </v-slide-group>
    </div>
    <!-- publikasi container -->
    <div class="mt-5">
      <div class="mb-2 d-flex align-center">
        <small class="text-sm-body font-weight-bold grey--text"
          >Publikasi Terbaru</small
        >
        <v-spacer></v-spacer>
        <v-btn x-small text class="blue--text">
          Lainnya <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </div>

      <v-slide-group
        v-model="publikasi_selected"
        class="pa-0 ma-0"
        active-class="success"
      >
        <v-slide-item v-for="n in 5" :key="n">
          <v-card
            class="ma-2"
            max-height="144"
            min-height="80"
            max-width="90"
            min-width="50"
            to="/"
          >
            <v-scale-transition>
              <v-img src="../assets/getImageCover.jpg"></v-img>
            </v-scale-transition>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    subkategori_selected: null,
    publikasi_selected: null,
    kategoris: [
      {
        kategori: "Sosial dan Kependudukan",
        subKategoris: [
          {
            subKategori: "Penduduk",
            icon: "mdi-account-multiple",
            color: "#0F8ED6",
          },
          {
            subKategori: "Kemiskinan",
            icon: "mdi-account",
            color: "#FFC635",
          },
          {
            subKategori: "Tenaga Kerja",
            icon: "mdi-cogs",
            color: "#C693F9",
          },
          {
            subKategori: "IPM",
            icon: "mdi-yoga",
            color: "#3549FF",
          },
          {
            subKategori: "Pemerintahan",
            icon: "mdi-office-building",
            color: "#53A340",
          },
          {
            subKategori: "Lainnya",
            icon: "mdi-drag",
            color: "grey",
          },
        ],
      },
      {
        kategori: "Ekonomi dan Perdagangan",
        subKategoris: [
          {
            subKategori: "Penduduk",
            icon: "mdi-account-multiple",
            color: "#0F8ED6",
          },
          {
            subKategori: "Kemiskinan",
            icon: "mdi-account",
            color: "#FFC635",
          },
          {
            subKategori: "Tenaga Kerja",
            icon: "mdi-cogs",
            color: "#C693F9",
          },
          {
            subKategori: "IPM",
            icon: "mdi-yoga",
            color: "#3549FF",
          },
          {
            subKategori: "Pemerintahan",
            icon: "mdi-office-building",
            color: "#53A340",
          },
          {
            subKategori: "Lainnya",
            icon: "mdi-drag",
            color: "grey",
          },
        ],
      },
    ],
  }),
};
</script>
