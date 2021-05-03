<template>
  <div>
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
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SubKategori",
  data: () => ({
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
  mounted: async function () {
    this.tabels = await this.fetchTabel(this.id_sub_kategori);
  },
  methods: {
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
