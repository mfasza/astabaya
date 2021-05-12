<template>
  <div>
    <!-- data strategis container -->
    <v-expansion-panels multiple>
      <v-expansion-panel
        class="outline mb-3"
        v-for="db in dataBeranda"
        :key="db.id"
        :disabled="db.disabled"
      >
        <v-expansion-panel-header>
          <v-container class="pt-3 pb-0 px-0">
            <v-row>
              <v-col cols="2" class="pl-1 pr-0 py-0">
                <v-icon x-large>{{ db.ikon }}</v-icon>
              </v-col>
              <v-col cols="10">
                <v-row>
                  <div class="mx-2 mb-1 black--text">{{ db.judul }}</div>
                </v-row>
                <v-row>
                  <div class="red--text text--darken-1">
                    <span class="mx-2" style="font-size: 32px">{{ db.isi }}</span>
                    <span class="grey--text" style="font-size: 14px">
                      {{ db.satuan }}
                    </span>
                  </div>
                </v-row>
              </v-col>
            </v-row>
          </v-container>
          <template v-slot:actions>
            <v-icon color="primary"> $expand </v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content class="text-justify">
          <span class="grey--text text--darken-2" style="font-size: 14px">{{
            db.deskripsi
          }}</span>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <!-- infografis container -->
    <div class="mt-5">
      <div class="mb-2 d-flex align-center">
        <small class="text-sm-body font-weight-bold grey--text"
          >Infografis Terbaru</small
        >
        <v-spacer></v-spacer>
        <v-btn x-small text class="blue--text" to="/infografis">
          Lainnya <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </div>

      <v-slide-group
        v-model="infografis_selected"
        class="pa-0 ma-0"
        active-class="success"
      >
        <v-slide-item v-for="infografis in infografiss" :key="infografis.id">
          <v-row class="ma-2" align="center" justify="center">
            <v-scale-transition>
              <v-card
                class="ma-2"
                max-height="144"
                min-height="80"
                max-width="90"
                min-width="50"
                :to="`/infografis/isi_infografis/` + infografis.id"
              >
                <v-img
                  :src="infografis.file_path"
                  :lazy-src="infografis.file_path"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-card>
            </v-scale-transition>
          </v-row>
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
    infografis_selected: null,
    dataBeranda: [],
    infografiss: [],
  }),
  created: async function () {
    var dataBeranda = await this.fetchDataBeranda();
    dataBeranda = dataBeranda.map(function (db) {
      return {
        ...db,
        disabled: db.deskripsi ? false : true,
      };
    });
    this.dataBeranda = dataBeranda;
    var infografiss = await this.fetchInfografis();
    infografiss.sort(function (a, b) {
      return b.id - a.id;
    });
    infografiss = infografiss.slice(0, 5);
    this.infografiss = infografiss;
  },
  methods: {
    fetchDataBeranda: async function () {
      const result = await axios
        .get(this.url + "/beranda/get")
        .then(function (response) {
          return response.data.data.beranda;
        });
      return result;
    },
    fetchInfografis: async function () {
      const result = await axios
        .get(this.url + "/infografis/get")
        .then(function (response) {
          return response.data.data.infografis;
        });
      return result;
    },
  },
};
</script>
