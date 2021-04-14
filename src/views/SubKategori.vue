<template>
  <div>
    <v-list two-line>
      <v-list-item-group>
        <div v-for="(data, index) in datas" :key="index">
          <v-list-item
            :to="
              `/tabel/` +
              tabel +
              `/subkategori/` +
              sub_kategori +
              `/data/` +
              index
            "
          >
            <v-list-item-content>
              <span class="text-subtitle-2" v-text="data.judul"></span>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
        </div>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
export default {
  name: "SubKategori",
  data: () => ({
    datas: [
      {
        judul:
          "Produk Domestik Regional Bruto Kota Surabaya Menurut Lapangan Usaha 2016-2020",
      },
      {
        judul:
          "Produk Domestik Regional Bruto Kota Surabaya Menurut Lapangan Usaha 2016-2020",
      },
      {
        judul:
          "Produk Domestik Regional Bruto Kota Surabaya Menurut Lapangan Usaha 2016-2020",
      },
      {
        judul:
          "Produk Domestik Regional Bruto Kota Surabaya Menurut Lapangan Usaha 2016-2020",
      },
      {
        judul:
          "Produk Domestik Regional Bruto Kota Surabaya Menurut Lapangan Usaha 2016-2020",
      },
      {
        judul:
          "Produk Domestik Regional Bruto Kota Surabaya Menurut Lapangan Usaha 2016-2020",
      },
      {
        judul:
          "Produk Domestik Regional Bruto Kota Surabaya Menurut Lapangan Usaha 2016-2020",
      },
      {
        judul:
          "Produk Domestik Regional Bruto Kota Surabaya Menurut Lapangan Usaha 2016-2020",
      },
    ],
  }),
  computed: {
    tabel: function () {
      return this.$route.params.id_tabel;
    },
    sub_kategori: function () {
      return this.$route.params.id_subkategori;
    },
  },
};
</script>

<style>
</style>