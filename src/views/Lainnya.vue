<template>
  <div>
    <!-- lainnya container -->
    <div class="mt-5">
      <div class="mt-5 mb-2 d-flex align-center">
        <small class="text-sm-body font-weight-bold grey--text">
          Tentang BPS
        </small>
      </div>

      <v-expansion-panels focusable>
        <v-expansion-panel>
          <v-expansion-panel-header>
            <span>Informasi Umum</span>
            <template v-slot:actions>
              <v-icon color="primary">$expand</v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <p class="ml-3 mt-3 caption text-justify">
              BPS Kota Surabaya adalah instansi vertikal yang berada di bawah
              dan bertanggung jawab kepada kepala BPS Provinsi Jawa Timur.
              Struktur organisasi BPS Kota Surabaya sesuai dengan Peraturan
              Presiden Nomor 86 Tahun 2007 terdiri dari Kepala, Subbagian Tata
              Usaha, Seksi Statistik Sosial, Seksi Statistik Produksi. Seksi
              Statistik Distribusi, Seksi Neraca Wilayah dan Analisis Statistik,
              dan Seksi Integrasi Pengolahan dan Diseminasi Statistik.
            </p>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>
            <span>Visi dan Misi</span>
            <template v-slot:actions>
              <v-icon color="primary">$expand</v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <p class="mt-3 h6">Visi</p>
            <p class="ml-3 caption font-weight-bold">
              Pelopor data statistik terpercaya untuk semua
            </p>
            <p>&nbsp;</p>
            <p>Misi</p>
            <ol class="caption text-justify">
              <li>
                Menyediakan data statistik berkualitas melalui kegiatan
                statistik yang terintegrasi dan berstandar nasional maupun
                internasional.
              </li>
              <li>
                Memperkuat Sistem Statistik Nasional yang berkesinambungan
                melalui pembinaan dan koordinasi di bidang statistik.
              </li>
              <li>
                Membangun insan statistik yang profesional, berintegritas dan
                amanah untuk kemajuan perstatistikan.
              </li>
            </ol>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>
            <span>Kontak</span>
            <template v-slot:actions>
              <v-icon color="primary">$expand</v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-subtitle>
                  <v-row dense align="center" class="mt-2">
                    <v-col cols="2">
                      <v-icon class="mr-3">mdi-map-marker</v-icon>
                    </v-col>
                    <v-col class="text-wrap">
                      Jl. Ahmad Yani 152E Surabaya 60235
                    </v-col>
                  </v-row>
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  <v-row dense align="center" class="mt-2">
                    <v-col cols="2">
                      <v-icon class="mr-3">mdi-phone</v-icon>
                    </v-col>
                    <v-col class="text-wrap"> (031) 8296692 </v-col>
                  </v-row>
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  <v-row dense align="center" class="mt-2">
                    <v-col cols="2">
                      <v-icon class="mr-3">mdi-fax</v-icon>
                    </v-col>
                    <v-col class="text-wrap"> (031) 8296691 </v-col>
                  </v-row>
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  <v-row dense align="center" class="mt-2">
                    <v-col cols="2">
                      <v-icon class="mr-3">mdi-email-outline</v-icon>
                    </v-col>
                    <v-col class="text-wrap"> bps3578@bps.go.id </v-col>
                  </v-row>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>
            <span>Media Sosial</span>
            <template v-slot:actions>
              <v-icon color="primary">$expand</v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-subtitle>
                  <v-row dense align="center" class="mt-2">
                    <v-col cols="2">
                      <v-icon class="mr-3">mdi-facebook</v-icon>
                    </v-col>
                    <v-col class="text-wrap"> BPS Kota Surabaya </v-col>
                  </v-row>
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  <v-row dense align="center" class="mt-2">
                    <v-col cols="2">
                      <v-icon class="mr-3">mdi-instagram</v-icon>
                    </v-col>
                    <v-col class="text-wrap"> @bpskotasurabaya </v-col>
                  </v-row>
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  <v-row dense align="center" class="mt-2">
                    <v-col cols="2">
                      <v-icon class="mr-3">mdi-youtube</v-icon>
                    </v-col>
                    <v-col class="text-wrap"> BPS Kota Surabaya </v-col>
                  </v-row>
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  <v-row dense align="center" class="mt-2">
                    <v-col cols="2">
                      <v-icon class="mr-3">mdi-web</v-icon>
                    </v-col>
                    <v-col class="text-wrap"> surabayakota.bps.go.id </v-col>
                  </v-row>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>

<script>
export default {
  name: "Lainnya",
  data: () => ({}),
};
</script>
