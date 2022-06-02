<template>
  <div>
    <!--begin::Dashboard-->
    <div class="row gutter-b">
      <div class="col-xxl-12">
        <b-card
          title="Upload File Excel"
          header-tag="header"
          footer-tag="footer"
        >
          <template v-slot:header>
            <h6 class="mb-0">Form Service</h6>
          </template>
          <b-form-group label-for="file-default">
            <b-form-file
              placeholder="Choose a file or drop it here..."
              id="file-default"
            ></b-form-file>
          </b-form-group>
          <template v-slot:footer>
            <b-button variant="primary mr-3">Submit</b-button>
            <b-button variant="success">Download Template</b-button>
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
    };
  },
  components: {},
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Dashboard", route: "/dashboard" },
      { title: "Import Employee" },
    ]);
  },
  methods: {},
};
</script>
<style lang="scss"></style>
