<template>
  <div>
    <!-- publikasi container -->
    <div class="mt-5">
      <div class="mb-2 d-flex align-center">
        <small class="text-sm-body font-weight-bold grey--text">
          Publikasi
        </small>
      </div>

      <v-list two-line>
        <v-list-item-group>
            <div v-for="publikasi, index in publikasis" :key="publikasi.id">
                <v-divider v-if="index != 0" :key="index"></v-divider>
                <v-list-item :to="`/publikasis/`+publikasi.id">
                    <v-img 
                      class="mr-7 rounded" 
                      max-height="70" 
                      max-width="50" 
                      :src="require(`@/assets/publikasi/${publikasi.cover}`)"
                    ></v-img>
                    <v-list-item-content>
                        <span class="mb-5 body-2" v-text="publikasi.judul"></span>
                        <span class="red--text caption" v-text="publikasi.tanggal"></span>
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
  name: "Publikasis",
  data: () => ({
    publikasis: [
        {
          id: 1,
          cover: 'getImageCover.jpg',
          judul: 'Produk Domestik Regional Bruto Kota Surabaya Menurut Lapangan Usaha 2016-2020',
          tanggal: '5 April 2021',
        },
        {
          id: 2,
          cover: 'getImageCover.jpg',
          judul: 'Produk Domestik Regional Bruto Kota Surabaya Menurut Lapangan Usaha 2016-2020',
          tanggal: '5 April 2021',
        },
        {
          id: 3,
          cover: 'getImageCover.jpg',
          judul: 'Produk Domestik Regional Bruto Kota Surabaya Menurut Lapangan Usaha 2016-2020',
          tanggal: '5 April 2021',
        },
        {
          id: 4,
          cover: 'getImageCover.jpg',
          judul: 'Produk Domestik Regional Bruto Kota Surabaya Menurut Lapangan Usaha 2016-2020',
          tanggal: '5 April 2021',
        },
        {
          id: 5,
          cover: 'getImageCover.jpg',
          judul: 'Produk Domestik Regional Bruto Kota Surabaya Menurut Lapangan Usaha 2016-2020',
          tanggal: '5 April 2021',
        },
        {
          id: 6,
          cover: 'getImageCover.jpg',
          judul: 'Produk Domestik Regional Bruto Kota Surabaya Menurut Lapangan Usaha 2016-2020',
          tanggal: '5 April 2021',
        },
        {
          id: 7,
          cover: 'getImageCover.jpg',
          judul: 'Produk Domestik Regional Bruto Kota Surabaya Menurut Lapangan Usaha 2016-2020',
          tanggal: '5 April 2021',
        },
        {
          id: 8,
          cover: 'getImageCover.jpg',
          judul: 'Produk Domestik Regional Bruto Kota Surabaya Menurut Lapangan Usaha 2016-2020',
          tanggal: '5 April 2021',
        },
    ],
  }),
};
</script>
