<template>
  <div>
    <v-row align="center" v-show="seris.length > 1">
      <v-col cols="6" offset="3">
        <v-select
          rounded
          solo
          dense
          v-model="seri"
          :items="seris"
          label="Seri"
          item-text="seris"
          required
        ></v-select>
      </v-col>
    </v-row>
    <div class="overflow-table">
      <div v-html="selected.isi_tabel"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "IsiTabel",
  data: () => ({
    selected: null,
    seri: "",
    seris: [],
    isi_tabels: [],
  }),
  computed: {
    id_tabel: function () {
      return this.$route.params.id_tabel;
    },
  },
  watch: {
    seri: function () {
      this.watchSeri();
    },
  },
  created: async function () {
    this.watchSeri();
    this.isi_tabels = await this.fetchIsiTabel(this.id_tabel);
    this.selected = this.isi_tabels[0];
    this.seri = this.selected.series;
    this.seris = this.isi_tabels.map(function (it) {
      return it.series;
    });
  },
  methods: {
    fetchIsiTabel: async function (tabel_id) {
      const result = await axios
        .get(this.url + "/isi_tabel/get?tabel_id=" + tabel_id)
        .then(function (response) {
          return response.data.data.isi_tabel;
        });
      return result;
    },
    watchSeri: function () {
      const seri = this.seri;
      return (this.selected = this.isi_tabels.find(function (it) {
        return it.series == seri;
      }));
    },
  },
};
</script>

<style>
.overflow-table {
  overflow: auto;
}
</style>
