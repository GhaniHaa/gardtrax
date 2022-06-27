<template>
  <div>
    <!--begin::Create Jabatan-->
    <div class="row gutter-b">
      <div class="col-xxl-12">
        <b-card header-tag="header" footer-tag="footer">
          <template v-slot:header>
            <h6 class="mb-0">Form Jabatan</h6>
          </template>
          <div class="mb-4">
            <h6 class="mb-1">Divisi <span class="text-danger">*</span></h6>
            <b-form-select
              v-model="jabatan.divisi"
              :options="optionDivisi"
            ></b-form-select>
          </div>
          <div class="mb-4">
            <h6 class="mb-1">
              Level Jabatan <span class="text-danger">*</span>
            </h6>
            <b-form-select
              v-model="jabatan.level"
              :options="optionLevel"
            ></b-form-select>
          </div>
          <div class="mb-4">
            <h6 class="mb-1">Parent</h6>
            <b-form-select
              v-model="jabatan.parent"
              :options="optionParent"
            ></b-form-select>
          </div>
          <div class="mb-4">
            <h6 class="mb-1">Nama <span class="text-danger">*</span></h6>
            <b-form-input
              v-model="nama"
              placeholder="Masukan nama jabatan"
            ></b-form-input>
          </div>
          <template v-slot:footer>
            <b-button variant="primary">Submit</b-button>
          </template>
        </b-card>
      </div>
    </div>
    <!--end::Create Jabatan-->
  </div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";

export default {
  name: "CreateMasterJabatan",
  data() {
    return {
      selected: null,
      jabatan: {
        nama: "",
        divisi: "",
        level: "",
        parent: "",
      },
      optionDivisi: [
        { value: "", text: "Pilih Divisi" },
        { value: "operasional", text: "Operasional" },
        { value: "marketing", text: "Marketing" },
      ],
      optionLevel: [
        { value: "", text: "Pilih Level Jabatan" },
        { value: "direksi", text: "Direksi" },
        { value: "manager", text: "Manager" },
        { value: "staff", text: "Staff" },
      ],
      optionParent: [
        { value: "", text: "Pilih Parent" },
        { value: "parent1", text: "Parent 1" },
        { value: "parent2", text: "Parent 2" },
      ],
    };
  },
  components: {},
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Dashboard", route: "/dashboard" },
      { title: "Jabatan", route: "/master/jabatan" },
      { title: "Create Jabatan" },
    ]);
  },
  methods: {},
};
</script>
<style lang="scss"></style>
