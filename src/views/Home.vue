<template>
  <div>
    <!-- kategori container -->
    <div class="mb-2" v-for="kategori in kategoris" :key="kategori.index">
      <small class="text-sm-body font-weight-bold grey--text">{{
        kategori.kategori
      }}</small>
      <!-- sub-kategori container -->
      <v-slide-group
        v-model="model"
        class="pa-0 ma-0 d-relative"
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
  </div>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    model: null,
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
