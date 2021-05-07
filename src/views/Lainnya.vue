<template>
  <div>
    <!-- lainnya container -->
    <div class="mt-5">
      <div class="mt-5 mb-2 d-flex align-center">
        <small class="text-sm-body font-weight-bold grey--text">
          Tentang BPS Surabaya
        </small>
      </div>

      <v-expansion-panels focusable>
        <v-expansion-panel>
          <v-expansion-panel-header>
            <span>Informasi Umum</span>
            <template v-slot:actions>
              <v-icon color="primary">$expand</v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <p class="ml-3 mt-3 caption text-justify">
              {{ tentang.info[0].isi }}
            </p>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>
            <span>Visi dan Misi</span>
            <template v-slot:actions>
              <v-icon color="primary">$expand</v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <p class="mt-3 h6">Visi</p>
            <p class="ml-3 caption font-weight-bold">
              {{ tentang.visi[0].isi }}
            </p>
            <p>&nbsp;</p>
            <p>Misi</p>
            <ol class="caption text-justify" v-html="tentang.misi[0].isi"></ol>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>
            <span>Kontak</span>
            <template v-slot:actions>
              <v-icon color="primary">$expand</v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-subtitle>
                  <v-row dense align="center" class="mt-2">
                    <v-col cols="2">
                      <v-icon class="mr-3">mdi-map-marker</v-icon>
                    </v-col>
                    <v-col class="text-wrap">
                      {{ tentang.alamat[0].isi }}
                    </v-col>
                  </v-row>
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  <v-row dense align="center" class="mt-2">
                    <v-col cols="2">
                      <v-icon class="mr-3">mdi-phone</v-icon>
                    </v-col>
                    <v-col class="text-wrap">
                      {{ tentang.telepon[0].isi }}
                    </v-col>
                  </v-row>
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  <v-row dense align="center" class="mt-2">
                    <v-col cols="2">
                      <v-icon class="mr-3">mdi-fax</v-icon>
                    </v-col>
                    <v-col class="text-wrap"> {{ tentang.fax[0].isi }} </v-col>
                  </v-row>
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  <v-row dense align="center" class="mt-2">
                    <v-col cols="2">
                      <v-icon class="mr-3">mdi-email-outline</v-icon>
                    </v-col>
                    <v-col class="text-wrap">
                      {{ tentang.email[0].isi }}
                    </v-col>
                  </v-row>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>
            <span>Media Sosial</span>
            <template v-slot:actions>
              <v-icon color="primary">$expand</v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-subtitle>
                  <v-row dense align="center" class="mt-2">
                    <v-col cols="2">
                      <v-icon class="mr-3">mdi-facebook</v-icon>
                    </v-col>
                    <v-col class="text-wrap">
                      {{ tentang.facebook[0].isi }}
                    </v-col>
                  </v-row>
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  <v-row dense align="center" class="mt-2">
                    <v-col cols="2">
                      <v-icon class="mr-3">mdi-instagram</v-icon>
                    </v-col>
                    <v-col class="text-wrap">
                      {{ tentang.instagram[0].isi }}
                    </v-col>
                  </v-row>
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  <v-row dense align="center" class="mt-2">
                    <v-col cols="2">
                      <v-icon class="mr-3">mdi-youtube</v-icon>
                    </v-col>
                    <v-col class="text-wrap">
                      {{ tentang.youtube[0].isi }}
                    </v-col>
                  </v-row>
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  <v-row dense align="center" class="mt-2">
                    <v-col cols="2">
                      <v-icon class="mr-3">mdi-web</v-icon>
                    </v-col>
                    <v-col class="text-wrap">
                      {{ tentang.website[0].isi }}
                    </v-col>
                  </v-row>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Lainnya",
  data: () => ({
    tentang: {},
  }),
  created: async function () {
    this.tentang = await this.fetchTentang();
    this.tentang.misi[0].isi = this.tentang.misi[0].isi.replace(/\n/g, "<br>");
  },
  methods: {
    fetchTentang: async function () {
      const result = await axios
        .get(this.url + "/tentang/get")
        .then(function (response) {
          return response.data.data;
        });
      return result;
    },
  },
};
</script>
