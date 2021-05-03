<template>
  <div>
    <!-- kategori container -->
    <div class="mb-2" v-for="kategori in kategoris" :key="kategori.id">
      <div class="mb-2 d-flex align-center">
        <small class="text-sm-body font-weight-bold grey--text">{{
          kategori.kategori
        }}</small>
        <v-spacer></v-spacer>
        <v-btn x-small text class="blue--text" :to="`/kategori/` + kategori.id">
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
          :key="subKategori.id"
        >
          <v-row class="ma-2" align="center" justify="center">
            <v-scale-transition>
              <div class="d-flex flex-column flex-wrap align-center">
                <v-btn
                  fab
                  dark
                  :color="subKategori.color"
                  :to="
                    `/kategori/` +
                    kategori.id +
                    `/subkategori/` +
                    subKategori.id
                  "
                >
                  <v-icon dark>{{ subKategori.icon }}</v-icon>
                </v-btn>
                <small
                  class="mt-1 d-inline-block text-truncate text-center"
                  style="max-width: 80px"
                  >{{ subKategori.subKategori }}</small
                >
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
        <v-btn x-small text class="blue--text" to="/publikasis">
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
              <v-img
                src="../assets/publikasi/getImageCover.jpg"
                lazy-src="../assets/publikasi/getImageCover.jpg"
              ></v-img>
            </v-scale-transition>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  data: () => ({
    subkategori_selected: null,
    publikasi_selected: null,
    kategoris: [],
  }),
  mounted: async function () {
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
  methods: {
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
};
</script>
