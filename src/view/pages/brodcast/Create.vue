<template>
  <div>
    <!--begin::Dashboard-->
    <div class="row gutter-b">
      <div class="col-xxl-12">
        <b-card header-tag="header" footer-tag="footer">
          <template v-slot:header>
            <h6 class="mb-0">Form Broadcast Message</h6>
          </template>
          <div class="mb-4">
            <h6 class="mb-1">Judul</h6>
            <b-form-input
              v-model="judul"
              placeholder="Masukan judul brodcast"
            ></b-form-input>
          </div>
          <div class="mb-4">
            <h6 class="mb-1">Pesan</h6>
            <b-form-textarea
              id="textarea-rows"
              v-model="pesan"
              placeholder="Masukan area brodcast"
              rows="8"
              style="height: 116px"
            ></b-form-textarea>
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
  name: "CreateBrodcast",
  data() {
    return {
      selected: null,
      judul: "",
      pesan: "",
    };
  },
  components: {},
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Dashboard", route: "/dashboard" },
      { title: "Brodcast", route: "/brodcast" },
      { title: "Create Brodcast" },
    ]);
  },
  methods: {},
};
</script>
<style lang="scss"></style>
