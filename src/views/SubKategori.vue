<template>
  <div>
    <v-tabs v-model="tab">
      <v-tabs-slider color="primary"></v-tabs-slider>
      <v-tab>Konsep</v-tab>
      <v-tab>Tabel</v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item v-html="konsep"></v-tab-item>
      <v-tab-item>
        <v-list two-line>
          <v-list-item-group>
            <div v-for="tabel in tabels" :key="tabel.id">
              <v-list-item
                :to="
                  `/kategori/` +
                  id_kategori +
                  `/subkategori/` +
                  id_sub_kategori +
                  `/tabel/` +
                  tabel.id
                "
              >
                <v-list-item-content>
                  <span class="text-subtitle-2" v-text="tabel.tabel"></span>
                </v-list-item-content>
              </v-list-item>
              <v-divider></v-divider>
            </div>
          </v-list-item-group>
        </v-list>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SubKategori",
  data: () => ({
    tab: null,
    konsep: "",
    tabels: [],
  }),
  computed: {
    id_kategori: function () {
      return this.$route.params.id_kategori;
    },
    id_sub_kategori: function () {
      return this.$route.params.id_subkategori;
    },
  },
  created: async function () {
    var subKategoris = await this.fetchSubKategori(this.id_kategori);
    const id_sub_kategori = this.id_sub_kategori;
    subKategoris = subKategoris.filter(function (sk) {
      return sk.id == id_sub_kategori;
    });
    this.konsep = subKategoris[0].konsep;
    console.log(this.konsep);
    this.tabels = await this.fetchTabel(this.id_sub_kategori);
  },
  methods: {
    fetchSubKategori: async function (kategori_id) {
      const result = await axios
        .get(this.url + "/sub_kategori/get?kategori_id=" + kategori_id)
        .then(function (response) {
          return response.data.data.sub_kategori;
        });
      return result;
    },
    fetchTabel: async function (sub_kategori_id) {
      const result = await axios
        .get(this.url + "/tabel/get?sub_kategori_id=" + sub_kategori_id)
        .then(function (response) {
          return response.data.data.tabel;
        });
      return result;
    },
  },
};
</script>

<style></style>
