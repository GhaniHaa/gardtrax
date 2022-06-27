<template>
  <div>
    <!--begin::Dashboard-->
    <div class="row gutter-b">
      <div class="col-xxl-12">
        <b-card header-tag="header" footer-tag="footer">
          <template v-slot:header>
            <h6 class="mb-0">Form Inisiasi</h6>
          </template>
          <div class="mb-4">
            <h6 class="mb-1">Nama</h6>
            <b-form-input
              v-model="nama"
              placeholder="Masukan nama inisiasi"
            ></b-form-input>
          </div>
          <div class="mb-4">
            <h6 class="mb-1">Jenis</h6>
            <b-form-select
              v-model="inisiasi.jenis"
              :options="optionJenis"
            ></b-form-select>
          </div>
          <template v-slot:footer>
            <b-button variant="primary">Submit</b-button>
          </template>
        </b-card>
      </div>
    </div>
    <!--end::Dashboard-->
  </div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";

export default {
  name: "CreateMasterInisiasi",
  data() {
    return {
      selected: null,
      inisiasi: {
        nama: "",
        jenis: ""
      },
      optionJenis: [
        { value: "", text: "Pilih Jenis Inisiasi" },
        { value: "lelang", text: "Lelang" },
        { value: "canvas", text: "Canvas" },
      ]
    };
  },
  components: {},
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Dashboard", route: "/dashboard" },
      { title: "Inisiasi", route: "/master/inisiasi" },
      { title: "Create Inisiasi" },
    ]);
  },
  methods: {},
};
</script>
<style lang="scss"></style>
