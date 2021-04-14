<template>
  <div>
    <!-- kategori container -->
    <div
      class="mb-2"
      v-for="(kategori, index) in kategoris"
      :key="kategori.index"
    >
      <div class="mb-2 d-flex align-center">
        <small class="text-sm-body font-weight-bold grey--text">{{
          kategori.kategori
        }}</small>
        <v-spacer></v-spacer>
        <v-btn x-small text class="blue--text" :to="`/tabel/` + index">
          Lainnya <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </div>
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
                <small class="mt-1 d-inline-block text-truncate text-center" style="max-width: 80px">{{ subKategori.subKategori }}</small>
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
        <v-btn x-small text class="blue--text" to="/publikasi">
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
            icon: "mdi-human-male-female",
            color: "#1976d2",
          },
          {
            subKategori: "Kemiskinan",
            icon: "mdi-account",
            color: "#ffc107",
          },
          {
            subKategori: "Tenaga Kerja",
            icon: "mdi-cogs",
            color: "#795548",
          },
          {
            subKategori: "IPM",
            icon: "mdi-eye",
            color: "#ab47bc",
          },
          {
            subKategori: "Pemerintahan",
            icon: "mdi-office-building",
            color: "#283593",
          },
        ],
      },
      {
        kategori: "Ekonomi dan Perdagangan",
        subKategoris: [
          {
            subKategori: "Pertumbuhan Ekonomi",
            icon: "mdi-finance",
            color: "#ff6f00",
          },
          {
            subKategori: "Inflasi",
            icon: "mdi-currency-usd",
            color: "#bf360c",
          },
          {
            subKategori: "Ekspor dan Impor",
            icon: "mdi-arrow-expand",
            color: "#37474f",
          },
          {
            subKategori: "Pariwisata",
            icon: "mdi-map-marker",
            color: "#26c6da",
          },
          {
            subKategori: "Nilai Tukar Petani",
            icon: "mdi-sprout",
            color: "#689f38",
          },
        ],
      },
    ],
  }),
};
</script>
