<template>
  <div>
    <!-- publikasi container -->
    <div class="mt-5">
      <div class="mb-2 d-flex align-center">
        <small class="text-sm-body font-weight-bold grey--text">
          Infografi
        </small>
      </div>

      <v-container class="ma-0 pa-0" grid-list-sm>
        <v-layout wrap>
            <v-flex v-for="infografi in infografis" :key="`infografis-`+infografi.id" xs6>
              <v-card class="mx-1 my-1" max-width="344" :to="`/lainnya/infografi/`+infografi.id">
                  <v-img 
                    :aspect-ratio="16/9" 
                    :src="require(`@/assets/infografis/${infografi.gambar}`)"
                    class="white--text"
                    height="200"
                  >
                  </v-img>
              </v-card>
            </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "Infografis",
  data: () => ({
    infografis: [
        {
          id: 1,
          gambar: 'sp2020.jpg',
          judul: 'Hasil SP2020 Kota Surabaya',
          tanggal: '5 April 2021',
        },
        {
          id: 2,
          gambar: 'sp2020.jpg',
          judul: 'Hasil SP2020 Kota Surabaya',
          tanggal: '5 April 2021',
        },
        {
          id: 3,
          gambar: 'sp2020.jpg',
          judul: 'Hasil SP2020 Kota Surabaya',
          tanggal: '5 April 2021',
        },
        {
          id: 4,
          gambar: 'sp2020.jpg',
          judul: 'Hasil SP2020 Kota Surabaya',
          tanggal: '5 April 2021',
        },
        {
          id: 5,
          gambar: 'sp2020.jpg',
          judul: 'Hasil SP2020 Kota Surabaya',
          tanggal: '5 April 2021',
        },
        {
          id: 6,
          gambar: 'sp2020.jpg',
          judul: 'Hasil SP2020 Kota Surabaya',
          tanggal: '5 April 2021',
        },
        {
          id: 7,
          gambar: 'sp2020.jpg',
          judul: 'Hasil SP2020 Kota Surabaya',
          tanggal: '5 April 2021',
        },
        {
          id: 8,
          gambar: 'sp2020.jpg',
          judul: 'Hasil SP2020 Kota Surabaya',
          tanggal: '5 April 2021',
        },
    ],
  }),
};
</script>
