<template>
  <div>
    <!--begin::Dashboard-->
    <div class="row gutter-b">
      <div class="col-xxl-12">
        <b-card header-tag="header" footer-tag="footer">
          <template v-slot:header>
            <h6 class="mb-0">QR Code List</h6>
          </template>
          <b-form-group label-for="file-default">
            <div class="row">
              <div class="col-md-2" v-for="item in 6" :key="item">
                <div class="mb-4">
                  <span class="font-weight-bold">Sector {{ item }}</span>
                  <img
                    src="https://gardtrax-admin.tdpindonesia.id/images/BANK_INDONESIA/lantai1/TDP-08e62c72b8f0eefd069c54d0e241199b.png"
                    width="100%"
                    style="object-fit: scale-down"
                  />
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
      { title: "View QR" },
    ]);
  },
  methods: {},
};
</script>
<style lang="scss"></style>
