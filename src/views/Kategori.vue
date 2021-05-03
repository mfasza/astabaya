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
          v-for="kategori in kategoris"
          :key="kategori.id"
        >
          <v-expansion-panel-header>{{
            kategori.kategori
          }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-list flat dense>
              <v-list-item-group v-model="selectedSubKategori" color="primary">
                <v-list-item
                  v-for="subKategori in kategori.subKategoris"
                  :key="subKategori.id"
                  :to="
                    `/kategori/` +
                    kategori.id +
                    `/subkategori/` +
                    subKategori.id
                  "
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
import axios from "axios";

export default {
  name: "Kategori",
  data: () => ({
    panel: [null],
    kategoris: [],
    selectedSubKategori: 0,
    items: [
      { text: "Real-Time", icon: "mdi-clock" },
      { text: "Audience", icon: "mdi-account" },
      { text: "Conversions", icon: "mdi-flag" },
    ],
  }),
  methods: {
    openPanel: function (panel) {
      this.panel.splice(0, 1, parseInt(panel));
    },
    fetchKategori: async function () {
      const result = await axios
        .get(this.url + "/kategori/get")
        .then(function (response) {
          return response.data.data.kategori;
        });
      return result;
    },
    fetchSubKategori: async function (kategori_id) {
      const result = await axios
        .get(this.url + "/sub_kategori/get?kategori_id=" + kategori_id)
        .then(function (response) {
          return response.data.data.sub_kategori;
        });
      return result;
    },
  },
  mounted: async function () {
    this.openPanel(this.$route.params.panel - 1);
    const kategoris = await this.fetchKategori();
    for (let i = 0; i < kategoris.length; i++) {
      const subKategori = await this.fetchSubKategori(kategoris[i].id);
      kategoris[i].subKategoris = subKategori.map(function (sk) {
        return {
          subKategori: sk.sub_kategori,
          id: sk.id,
          link: sk.link,
          icon: "mdi-drag",
          color: "grey",
        };
      });
      this.kategoris.push(kategoris[i]);
    }
  },
};
</script>

<style scoped>
.outline {
  border: solid #0f8ed6 1px;
}
</style>
