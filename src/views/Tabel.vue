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
          v-for="(kategori, i) in kategoris"
          :key="`kategori-` + i"
        >
          <v-expansion-panel-header>{{
            kategori.kategori
          }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <ul v-for="subKategori,i in kategori.subKategoris" :key="`index-`+i">
              <router-link to="/tabel/0" class="text-decoration-none black--text">
                <li>{{subKategori.subKategori}}</li>
              </router-link>
            </ul>
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
        color: "blue",
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
        ],
      },
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

<style>
</style>