<template>
  <div>
    <!--begin::Dashboard-->
    <div class="row gutter-b">
      <div class="col-xxl-12">
        <b-card header-tag="header" footer-tag="footer">
          <template v-slot:header>
            <h6 class="mb-0">Form Penugasan & Jadwal</h6>
          </template>
          <b-form-group label-for="file-default">
            <div class="row">
              <div class="col-md-6">
                <div class="mb-4">
                  <span class="font-weight-bold"
                    >Customer : BANK INDONESIA</span
                  >
                </div>
                <div class="mb-4">
                  <span class="font-weight-bold">No Kontrak : 111111111</span>
                </div>
                <div class="mb-4">
                  <span class="font-weight-bold">Jumlah Lantai</span>
                  <b-form-input
                    v-model="floor"
                    placeholder="Masukan jumlah lantai"
                  ></b-form-input>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-4">
                  <span class="font-weight-bold">Status : Prospek</span>
                </div>
                <div class="mb-4">
                  <span class="font-weight-bold"
                    >Tanggal Berlaku Perjanjian : 01 Jul 2021</span
                  >
                </div>
                <div class="mb-4">
                  <span class="font-weight-bold">Jumlah Sector per-Lantai</span>
                  <b-form-input
                    v-model="sectorFloor"
                    placeholder="Masukan jumlah sector"
                  ></b-form-input>
                </div>
              </div>
            </div>
          </b-form-group>
          <template v-slot:footer>
            <b-button variant="primary mr-3">Submit</b-button>
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
  name: "dashboard",
  data() {
    return {
      selected: null,
      floor: 1,
      sectorFloor: 1,
    };
  },
  components: {},
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Dashboard", route: "/dashboard" },
      { title: "List QR", route: "/customer/qr-code/list" },
      { title: "Import Employee" },
    ]);
  },
  methods: {},
};
</script>
<style lang="scss"></style>
