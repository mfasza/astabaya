<template>
  <div>
    <p class="text-subtitle-2 text-center" v-text="selected.judul"></p>
    <v-row align="center">
      <v-col cols="6" offset="3">
        <v-select
          rounded
          solo
          dense
          v-model="value"
          :items="data"
          label="Seri"
          item-text="series"
          required
        ></v-select>
      </v-col>
    </v-row>
    <div class="overflow-table">
      <div v-html="selected.tabel"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Data",
  data: function () {
    return {
      selected: {},
      value: "",
      data: [
        {
          judul: "Tingkat Konsumsi di Bulan Ramadhan Tahun 2014-2018",
          series: "2014-2018",
          tabel: `
          <table id="customers">
            <tr>
              <th>Company</th>
              <th>Contact</th>
              <th>Country</th>
              <th>Company</th>
              <th>Contact</th>
              <th>Country</th>
            </tr>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>Berglunds snabbköp</td>
              <td>Christina Berglund</td>
              <td>Sweden</td>
              <td>Berglunds snabbköp</td>
              <td>Christina Berglund</td>
              <td>Sweden</td>
            </tr>
            <tr>
              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>
              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>
            </tr>
            <tr>
              <td>Ernst Handel</td>
              <td>Roland Mendel</td>
              <td>Austria</td>
              <td>Ernst Handel</td>
              <td>Roland Mendel</td>
              <td>Austria</td>
            </tr>
            <tr>
              <td>Island Trading</td>
              <td>Helen Bennett</td>
              <td>UK</td>
              <td>Island Trading</td>
              <td>Helen Bennett</td>
              <td>UK</td>
            </tr>
            <tr>
              <td>Königlich Essen</td>
              <td>Philip Cramer</td>
              <td>Germany</td>
              <td>Königlich Essen</td>
              <td>Philip Cramer</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>Laughing Bacchus Winecellars</td>
              <td>Yoshi Tannamuri</td>
              <td>Canada</td>
              <td>Laughing Bacchus Winecellars</td>
              <td>Yoshi Tannamuri</td>
              <td>Canada</td>
            </tr>
            <tr>
              <td>Magazzini Alimentari Riuniti</td>
              <td>Giovanni Rovelli</td>
              <td>Italy</td>
              <td>Magazzini Alimentari Riuniti</td>
              <td>Giovanni Rovelli</td>
              <td>Italy</td>
            </tr>
            <tr>
              <td>North/South</td>
              <td>Simon Crowther</td>
              <td>UK</td>
              <td>North/South</td>
              <td>Simon Crowther</td>
              <td>UK</td>
            </tr>
            <tr>
              <td>Paris spécialités</td>
              <td>Marie Bertrand</td>
              <td>France</td>
              <td>Paris spécialités</td>
              <td>Marie Bertrand</td>
              <td>France</td>
            </tr>
          </table>`,
        },
        {
          judul: "Tingkat Konsumsi di Bulan Ramadhan Tahun 2019-2020",
          series: "2019-2020",
          tabel: `<table>Tabel Harusnya Disini</table>`,
        },
      ],
    };
  },
  mounted() {
    this.selected = this.data[0];
    this.value = this.selected.series;
  },
  watch: {
    value() {
      this.selected = this.data.find((x) => x.series === this.value);
    },
  },
};
</script>

<style>
.overflow-table {
  overflow: auto;
}
</style>
