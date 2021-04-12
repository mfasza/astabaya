<template>
  <div>
    <!-- publikasi container -->
    <div class="mt-5">
      <div class="mb-2 d-flex align-center">
        <small class="text-sm-body font-weight-bold grey--text"
          >Publikasi Terbaru</small
        >
      </div>

    <v-list two-line>
        <v-list-item-group>
            <div v-for="publikasi, index in publikasis" :key="index">
                <v-divider v-if="index != 0" :key="index"></v-divider>
                <v-list-item>
                    <v-img
                        class="mr-7"
                        max-width="50"
                        max-height="70"
                        src="../assets/getImageCover.jpg"
                    ></v-img>
                    <v-list-item-content>
                        <v-text class="mb-5 body-2" v-html="publikasi.judul"></v-text>
                        <v-list-item-subtitle class="red--text caption" v-html="publikasi.tanggal"></v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </div>
        </v-list-item-group>
      </v-list>
    </div>
  </div>
</template>

<script>
export default {
  name: "Publikasi",
  data: () => ({
    publikasis: [
        {
          cover: '../assets/getImageCover.jpg',
          judul: 'Produk Domestik Regional Bruto Kota Surabaya Menurut Lapangan Usaha 2016-2020',
          tanggal: '5 April 2021',
        },
        {
          cover: '../assets/getImageCover.jpg',
          judul: 'Produk Domestik Regional Bruto Kota Surabaya Menurut Lapangan Usaha 2016-2020',
          tanggal: '5 April 2021',
        },
        {
          cover: '../assets/getImageCover.jpg',
          judul: 'Produk Domestik Regional Bruto Kota Surabaya Menurut Lapangan Usaha 2016-2020',
          tanggal: '5 April 2021',
        },
        {
          cover: '../assets/getImageCover.jpg',
          judul: 'Produk Domestik Regional Bruto Kota Surabaya Menurut Lapangan Usaha 2016-2020',
          tanggal: '5 April 2021',
        },
        {
          cover: '../assets/getImageCover.jpg',
          judul: 'Produk Domestik Regional Bruto Kota Surabaya Menurut Lapangan Usaha 2016-2020',
          tanggal: '5 April 2021',
        },
        {
          cover: '../assets/getImageCover.jpg',
          judul: 'Produk Domestik Regional Bruto Kota Surabaya Menurut Lapangan Usaha 2016-2020',
          tanggal: '5 April 2021',
        },
        {
          cover: '../assets/getImageCover.jpg',
          judul: 'Produk Domestik Regional Bruto Kota Surabaya Menurut Lapangan Usaha 2016-2020',
          tanggal: '5 April 2021',
        },
        {
          cover: '../assets/getImageCover.jpg',
          judul: 'Produk Domestik Regional Bruto Kota Surabaya Menurut Lapangan Usaha 2016-2020',
          tanggal: '5 April 2021',
        },
    ],
  }),
};
</script>
