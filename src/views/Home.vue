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
                  ></v-img>
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
    kategoris: [],
    infografiss: [],
  }),
  created: async function () {
    const sub_kategori_options = [
      {
        kategori: "Sosial dan Kependudukan",
        subKategori: [
          "Indeks Pembangunan Manusia",
          "Kemiskinan dan Ketimpangan",
          "Kependudukan",
          "Pemerintahan",
          "Tenaga Kerja",
        ],
        icon: [
          "mdi-eye",
          "mdi-account",
          "mdi-human-male-female",
          "mdi-office-building",
          "mdi-cogs",
        ],
        color: ["#ab47bc", "#ffc107", "#1976d2", "#283593", "#795548"],
      },
      {
        kategori: "Ekonomi dan Perdagangan",
        subKategori: [
          "Industri",
          "Inflasi",
          "Pariwisata",
          "Produk Domestik Regional Bruto",
          "Transportasi",
        ],
        icon: [
          "mdi-factory",
          "mdi-currency-usd",
          "mdi-map-marker",
          "mdi-shopping",
          "mdi-train-car",
        ],
        color: ["#ff6f00", "#bf360c", "#26c6da", "#37474f", "#689f38"],
      },
      {
        kategori: "Pertanian dan Pertambangan",
        subKategori: [
          "Hortikultura",
          "Perikanan",
          "Perkebunan",
          "Peternakan",
          "Tanaman Pangan",
        ],
        icon: [
          "mdi-fruit-cherries",
          "mdi-fish",
          "mdi-shovel",
          "mdi-cow",
          "mdi-sprout",
        ],
        color: ["grey", "red", "blue", "green", "yellow"],
      },
    ];
    const kategoris = await this.fetchKategori();
    for (let i = 0; i < kategoris.length; i++) {
      for (let j = 0; j < sub_kategori_options.length; j++) {
        if (kategoris[i].kategori == sub_kategori_options[j].kategori) {
          var subKategori = await this.fetchSubKategori(kategoris[i].id);
          subKategori = subKategori.map(function (sk) {
            return {
              subKategori: sk.sub_kategori,
              id: sk.id,
              link: sk.link,
            };
          });
          subKategori = subKategori.filter(function (sk) {
            let r = false;
            for (
              let ski = 0;
              ski < sub_kategori_options[j].subKategori.length;
              ski++
            ) {
              if (sk.subKategori == sub_kategori_options[j].subKategori[ski]) {
                sk.icon = sub_kategori_options[j].icon[ski];
                sk.color = sub_kategori_options[j].color[ski];
                r = true;
              }
            }
            return r;
          });
          kategoris[i].subKategoris = subKategori;
          this.kategoris.push(kategoris[i]);
          break;
        }
      }
    }
    var infografiss = await this.fetchInfografis();
    infografiss.sort(function (a, b) {
      return b.id - a.id;
    });
    infografiss = infografiss.slice(0, 5);
    this.infografiss = infografiss;
  },
  beforeDestroy: function () {
    document.removeEventListener("backbutton", this.yourCallBackFunction);
  },
  methods: {
    back: function () {
      alert("aaa");
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
