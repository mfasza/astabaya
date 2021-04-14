<template>
  <div>
    <!-- publikasi container -->
    <div class="mt-5">
      <div class="mb-2">
        <p
            class="headline grey--text text-center"
            v-text="infografi.judul"
        >
        </p>
      </div>
      
      <div >
        <v-img
            :src="require(`@/assets/infografis/${infografi.gambar}`)"
            :lazy-src="require(`@/assets/infografis/${infografi.gambar}`)"
            max-height="auto"
            max-width="auto"
            class="grey lighten-2"
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "Infografi",
    data: () => ({
        infografi: 
        {
            id: 1,
            gambar: 'sp2020.jpg',
            judul: 'Hasil SP2020 Kota Surabaya',
            tanggal: '5 April 2021',
        },
  }),
};
</script>
