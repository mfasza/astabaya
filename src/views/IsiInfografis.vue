<template>
  <div>
    <!-- infografis container -->
    <div class="mt-5">
      <div class="mb-2">
        <p
          class="headline grey--text text-center"
          v-text="infografis.judul"
        ></p>
      </div>

      <div>
        <v-img
          :src="infografis.file_path"
          :lazy-src="infografis.file_path"
          max-height="auto"
          max-width="auto"
          class="grey lighten-2"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "IsiInfografis",
  data: () => ({
    infografis: {},
  }),
  computed: {
    id_infografis: function () {
      return this.$route.params.id_infografis;
    },
  },
  created: async function () {
    var infografis = await this.fetchInfografis();
    const id_infografis = this.id_infografis;
    infografis = infografis.filter(function (i) {
      return i.id == id_infografis;
    });
    this.infografis = infografis[0];
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
