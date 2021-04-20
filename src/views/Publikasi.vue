<template>
  <v-card
      class="mx-auto"
      max-width="600"
    >
      <v-img
        :aspect-ratio="16/9"
        :src="require(`@/assets/publikasi/${publikasi.cover}`)"
      >
      </v-img>
      <v-card-text
        class="pt-6"
        style="position: relative;"
      >
        <v-btn
          absolute
          color="orange"
          class="mb-5 white--text"
          fab
          medium
          right
          top
        >
          <v-icon>mdi-download</v-icon>
        </v-btn>
        <div class="font-weight-medium title orange--text mb-2" v-text="publikasi.judul"></div>
        <table class="ml-3">
          <tbody>
            <tr>
              <td class="caption">Nomor Katalog</td>
              <td class="caption pl-1 blue--text">: {{ publikasi.noKatalog }}</td>
            </tr>
            <tr>
              <td class="caption">Nomor Publikasi</td>
              <td class="caption pl-1 orange--text">: {{ publikasi.noPublikasi }}</td>
            </tr>
            <tr>
              <td class="caption">Tanggal Rilis</td>
              <td class="caption pl-1 red--text">: {{ publikasi.tanggal }}</td>
            </tr>
          </tbody>
        </table>
        <p class="mt-3" v-text="publikasi.deskripsi"></p>
      </v-card-text>
    </v-card>
</template>

<script>
export default {
  name: "Publikasi",
  data: () => ({
    publikasi:
      {
        id: 1,
        cover: 'getImageCover.jpg',
        judul: 'Produk Domestik Regional Bruto Kota Surabaya Menurut Lapangan Usaha 2016-2020',
        noKatalog: '9302021.3578',
        noPublikasi: '35780.2103',
        tanggal: '5 April 2021',
        deskripsi: 'Buku Produk Domestik Regional Bruto Kota Surabaya Menurut Lapangan Usaha Tahun 2016 - 2020 ini merupakan publikasi tahunan yang diterbitkan oleh Badan Pusat Statistik Kota Surabaya. Publikasi ini menyajikan tinjauan perkembangan perekonomian Kota Surabaya secara deskriptif. Dalam publikasi ini disajikan tabel-tabel Produk Domestik Regional Bruto tahun 2016 - 2020 atas dasar harga berlaku dan harga konstan 2010 dalam nilai nominal dan persentase. Sebagai pelengkap ulasan tabel-tabel tersebut, disajikan pula konsep, definisi, ruang lingkup dan metode penghitungan Produk Domestik Regional Bruto (PDRB) menurut lapangan usaha.'
      },
  }),
};
</script>
