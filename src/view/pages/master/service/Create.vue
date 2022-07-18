<template>
  <div>
    <!--begin::Dashboard-->
    <div class="row gutter-b">
      <div class="col-xxl-12">
        <b-card header-tag="header" footer-tag="footer">
          <template v-slot:header>
            <h6 class="mb-0">Form Service</h6>
          </template>
          <div class="mb-4">
            <h6 class="mb-1">Nama</h6>
            <b-form-input
              v-model="nama"
              placeholder="Masukan nama service"
            ></b-form-input>
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
  name: "CreateMasterService",
  data() {
    return {
      selected: null,
      nama: "",
    };
  },
  components: {},
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Dashboard", route: "/dashboard" },
      { title: "Service", route: "/master/service" },
      { title: "Create Service" },
    ]);
  },
  methods: {},
};
</script>
<style lang="scss"></style>
