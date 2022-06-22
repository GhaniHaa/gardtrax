<template>
  <div>
    <!--begin::Dashboard-->
    <div class="row gutter-b">
      <div class="col-xxl-12">
        <b-card header-tag="header" footer-tag="footer">
          <template v-slot:header>
            <h6 class="mb-0">Form User</h6>
          </template>
          <div class="mb-4">
            <h6 class="mb-1">Nama</h6>
            <b-form-input
              v-model="user.name"
              placeholder="Masukan nama user"
            ></b-form-input>
          </div>
          <div class="mb-4">
            <h6 class="mb-1">Email address</h6>
            <b-form-input
              v-model="user.email"
              placeholder="Masukan email user"
              type="email"
            ></b-form-input>
          </div>
          <div class="mb-4">
            <h6 class="mb-1">Role <span class="text-danger">*</span></h6>
            <b-form-select
              v-model="user.role"
              :options="optionRole"
            ></b-form-select>
          </div>
          <div class="mb-4">
            <h6 class="mb-1">Perusahaan</h6>
            <b-form-select
              v-model="user.perusahaan"
              :options="optionCompany"
            ></b-form-select>
          </div>
          <div class="mb-4">
            <h6 class="mb-1">Username</h6>
            <b-form-input
              v-model="user.username"
              placeholder="Masukan username user"
            ></b-form-input>
          </div>
          <div class="mb-4">
            <h6 class="mb-1">Password</h6>
            <b-form-input
              v-model="user.password"
              placeholder="Masukan password user"
              type="password"
            ></b-form-input>
          </div>
          <div class="mb-4">
            <h6 class="mb-1">Password Confirmation</h6>
            <b-form-input
              v-model="user.confirmPassword"
              placeholder="Masukan confrimation password"
              type="password"
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
  name: "CreateBrodcast",
  data() {
    return {
      selected: null,
      optionRole: [
        { value: "", text: "Pilih Role" },
        { value: "user", text: "User" },
        { value: "admin", text: "Admin" },
      ],
      optionCompany: [
        { value: "", text: "Pilih Perusahaan" },
        { value: "user", text: "User" },
        { value: "admin", text: "Admin" },
      ],
      user: {
        name: "",
        email: "",
        role: "",
        perusahaan: "",
        username: "",
        password: "",
        confirmPassowrd: "",
      },
      judul: "",
      pesan: "",
    };
  },
  components: {},
  mounted() {
    let lastBreadcrumb = "";
    if (this.$route.name === "user-create")
      lastBreadcrumb = { title: "Create User" };
    else lastBreadcrumb = { title: "Edit User" };
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Dashboard", route: "/dashboard" },
      { title: "Brodcast", route: "/brodcast" },
      lastBreadcrumb,
    ]);
  },
  methods: {},
};
</script>
<style lang="scss"></style>
