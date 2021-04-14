<template>
  <div>
    <div class="my-2">
      <small class="text-sm-body font-weight-bold grey--text"
        >Tabel / Indikator</small
      >
    </div>

    <div>
      <v-expansion-panels v-model="panel" multiple>
        <v-expansion-panel
          class="outline mb-3"
          v-for="(kategori, index) in kategoris"
          :key="`kategori-` + index"
        >
          <v-expansion-panel-header>{{
            kategori.kategori
          }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-list flat dense>
              <v-list-item-group v-model="selectedSubKategori" color="primary">
                <v-list-item
                  v-for="(subKategori, i) in kategori.subKategoris"
                  :key="i"
                  :to="`/tabel/` + index + `/subkategori/` + i"
                >
                  <v-list-item-icon>
                    <v-icon v-text="subKategori.icon"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title
                      v-text="subKategori.subKategori"
                    ></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tabel",
  data: () => ({
    panel: [null],
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
    selectedSubKategori: 0,
    items: [
      { text: "Real-Time", icon: "mdi-clock" },
      { text: "Audience", icon: "mdi-account" },
      { text: "Conversions", icon: "mdi-flag" },
    ],
  }),
  methods: {
    openPanel(panel) {
      this.panel.splice(0, 1, parseInt(panel));
    },
  },
  mounted() {
    this.openPanel(this.$route.params.panel);
  },
};
</script>

<style scoped>
.outline {
  border: solid #0f8ed6 1px;
}
</style>
