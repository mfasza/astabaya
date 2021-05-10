<template>
  <div>
    <!-- infografis container -->
    <div class="mt-5">
      <div class="mb-2 d-flex align-center">
        <small class="text-sm-body font-weight-bold grey--text">
          Infografis
        </small>
      </div>

      <v-container class="ma-0 pa-0" grid-list-sm>
        <v-layout wrap>
          <v-flex v-for="infografis in infografiss" :key="infografis.id" xs6>
            <v-card
              class="mx-1 my-1"
              max-width="344"
              :to="`/infografis/isi_infografis/` + infografis.id"
            >
              <v-img
                :aspect-ratio="16 / 9"
                :src="infografis.file_path"
                :lazy-src="infografis.file_path"
                class="white--text"
                height="200"
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
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Infografis",
  data: () => ({
    infografiss: [],
  }),
  created: async function () {
    var infografiss = await this.fetchInfografis();
    infografiss.sort(function (a, b) {
      return b.id - a.id;
    });
    this.infografiss = infografiss;
  },
  methods: {
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
