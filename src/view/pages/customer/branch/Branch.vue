<template>
  <div
    class="v-application v-application--is-ltr theme--light menuable__content__active"
  >
    <!--begin:: Add customer-->
    <div class="row gutter-b">
      <div class="col-md-12">
        <b-card header-tag="header" footer-tag="footer">
          <template v-slot:header>
            <h6 class="mb-0">Form Customer</h6>
          </template>
          <div class="row">
            <div class="col-md-6">
              <div class="mb-4">
                <h6 class="mb-1">Parent <span class="text-danger">*</span></h6>
                <b-form-select
                  v-model="customer.parent"
                  :options="optionParent"
                ></b-form-select>
              </div>
              <div class="mb-4">
                <h6 class="mb-1">
                  Nama Client <span class="text-danger">*</span>
                </h6>
                <b-form-input
                  v-model="customer.name"
                  placeholder="Masukan nama client anda"
                ></b-form-input>
              </div>
              <div class="mb-4">
                <h6 class="mb-1">Email <span class="text-danger">*</span></h6>
                <b-form-input
                  v-model="customer.email"
                  placeholder="Masukan email anda"
                  type="email"
                ></b-form-input>
              </div>
              <div class="mb-4">
                <h6 class="mb-1">Cabang <span class="text-danger">*</span></h6>
                <b-form-select
                  v-model="customer.cabang"
                  :options="optionCabang"
                ></b-form-select>
              </div>
              <div class="mb-4">
                <h6 class="mb-1">
                  No Telepon <span class="text-danger">*</span>
                </h6>
                <b-form-input
                  v-model="customer.phone"
                  placeholder="Masukan no telepon"
                ></b-form-input>
              </div>
              <div class="mb-4">
                <h6 class="mb-1">
                  Tanggal Berlaku Perjanjian <span class="text-danger">*</span>
                </h6>
                <b-form-input
                  v-model="customer.email"
                  type="date"
                ></b-form-input>
              </div>
              <div class="mb-4">
                <h6 class="mb-1">
                  No Kontrak <span class="text-danger">*</span>
                </h6>
                <b-form-input
                  v-model="customer.kontrak"
                  placeholder="Masukan no kontrak anda"
                ></b-form-input>
              </div>
            </div>
            <div class="col-md-6">
              <div>
                <h6 class="mb-1">
                  Alamat Lengkap <span class="text-danger">*</span>
                </h6>
                <div class="mb-4">
                  <b-form-textarea
                    id="textarea-rows"
                    v-model="customer.address"
                    placeholder="Masukan alamat lengkap"
                    rows="8"
                    style="height: 116px"
                  ></b-form-textarea>
                </div>
              </div>
              <div class="mb-4">
                <h6 class="mb-1">Provinsi</h6>
                <b-form-select
                  v-model="customer.provinsi"
                  :options="optionProvinsi"
                ></b-form-select>
              </div>
              <div class="mb-4">
                <h6 class="mb-1">Kabupaten/Kota</h6>
                <b-form-select
                  v-model="customer.kabupaten"
                  :options="optionKabupaten"
                ></b-form-select>
              </div>
              <div class="mb-4">
                <h6 class="mb-1">Kecamatan</h6>
                <b-form-select
                  v-model="customer.kecamatan"
                  :options="optionKecamatan"
                ></b-form-select>
              </div>
              <div class="mb-4">
                <h6 class="mb-1">Kelurahan</h6>
                <b-form-select
                  v-model="customer.kelurahan"
                  :options="optionKelurahan"
                ></b-form-select>
              </div>
            </div>
          </div>
        </b-card>
      </div>
    </div>
    <div class="row gutter-b">
      <div class="col-md-4">
        <b-card header-tag="header" footer-tag="footer">
          <template v-slot:header>
            <h6 class="mb-0">Services</h6>
          </template>
          <b-form-checkbox
            v-for="(service, index) in optionServices"
            :key="index"
            :value="service.value"
            v-model="selectedServices"
          >
            {{ service.text }}
          </b-form-checkbox>
        </b-card>
      </div>
      <div class="col-md-8">
        <b-card header-tag="header" footer-tag="footer">
          <template v-slot:header>
            <h6 class="mb-0">Kontak PIC</h6>
          </template>
          <div class="row" v-for="(list, index) in listKontakPIC" :key="index">
            <div class="col-md-5">
              <div class="mb-4">
                <h6 class="mb-1">Nama PIC</h6>
                <b-form-input
                  v-model="list.name"
                  placeholder="Masukan nama pic"
                ></b-form-input>
              </div>
            </div>
            <div class="col-md-5">
              <div class="mb-4">
                <h6 class="mb-1">No Handphone</h6>
                <b-form-input
                  v-model="list.phone"
                  placeholder="Masukan no handphone"
                ></b-form-input>
              </div>
            </div>
            <div class="col-md-2">
              <b-button
                v-if="listKontakPIC.length !== index + 1"
                variant="danger"
                class="w-100"
                style="margin-top: 21px"
                @click="handleDeletePic(index)"
                >Delete</b-button
              >
              <b-button
                v-else
                variant="primary"
                class="w-100"
                style="margin-top: 21px"
                @click="handleAddPic()"
                >Add</b-button
              >
            </div>
          </div>
        </b-card>
      </div>
    </div>
    <div class="row gutter-b">
      <div class="col-12">
        <b-card header-tag="header" footer-tag="footer" class="gutter-b">
          <template v-slot:header>
            <h6 class="mb-0">Jadwal & Shift</h6>
            <span class="text-danger"
              >*Kosongkan Shift maka sistem tidak akan menyimpan data Jadwal &
              Shift pada saat Submit.</span
            >
          </template>
          <div class="row" v-for="(list, index) in listShift" :key="index">
            <div class="col-md-3">
              <div class="mb-4">
                <h6 class="mb-1">Shift</h6>
                <b-form-input
                  v-model="list.shift"
                  placeholder="Masukan shift"
                  type="number"
                ></b-form-input>
              </div>
            </div>
            <div class="col-md-3">
              <div class="mb-4">
                <h6 class="mb-1">Jam Mulai Shift</h6>
                <b-form-input
                  v-model="list.start"
                  placeholder="Masukan start"
                  type="time"
                ></b-form-input>
              </div>
            </div>
            <div class="col-md-3">
              <div class="mb-4">
                <h6 class="mb-1">Jam Selesai Shift</h6>
                <b-form-input
                  v-model="list.end"
                  placeholder="Masukan end"
                  type="time"
                ></b-form-input>
              </div>
            </div>
            <div class="col-md-3">
              <b-button
                v-if="listShift.length !== index + 1"
                variant="danger"
                class="w-100"
                style="margin-top: 21px"
                @click="handleDeleteShift(index)"
                >Delete</b-button
              >
              <b-button
                v-else
                variant="primary"
                class="w-100"
                style="margin-top: 21px"
                @click="handleAddShift()"
                >Add</b-button
              >
            </div>
          </div>
        </b-card>
      </div>
    </div>
    <div class="row justify-content-center gutter-b">
      <div class="col-md-2">
        <b-button variant="primary" class="w-100">Submit</b-button>
      </div>
    </div>
    <!--end:: Add customer-->
  </div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
export default {
  name: "Customer",
  data() {
    return {
      // PROFILE Customer
      previewUrl: null,
      customer: {
        parent: "",
        name: "",
        address: "",
        provinsi: "",
        kecamatan: "",
        phone: "",
        //
        email: "",
        cabang: "",
        kabupaten: "",
        kelurahan: "",
        kontrak: "",
      },
      optionBloodType: [
        {
          value: "",
          text: "Pilih golongan darah",
        },
        {
          value: "A",
          text: "A",
        },
        {
          value: "AB",
          text: "AB",
        },
        {
          value: "B",
          text: "B",
        },
        {
          value: "O",
          text: "O",
        },
      ],
      optionParent: [
        { value: "", text: "Pilih Parent" },
        { value: "mandiri", text: "Bank Mandiri" },
        { value: "bca", text: "BCA" },
      ],
      optionProvinsi: [
        { value: "", text: "Pilih Provinsi" },
        { value: "mandiri", text: "Bank Mandiri" },
        { value: "bca", text: "BCA" },
      ],
      optionKecamatan: [
        { value: "", text: "Pilih Kecamatan" },
        { value: "mandiri", text: "Bank Mandiri" },
        { value: "bca", text: "BCA" },
      ],
      optionCabang: [
        { value: "", text: "Pilih Cabang" },
        { value: "mandiri", text: "Bank Mandiri" },
        { value: "bca", text: "BCA" },
      ],
      optionKabupaten: [
        { value: "", text: "Pilih Kabupaten" },
        { value: "mandiri", text: "Bank Mandiri" },
        { value: "bca", text: "BCA" },
      ],
      optionKelurahan: [
        { value: "", text: "Pilih Kelurahan" },
        { value: "mandiri", text: "Bank Mandiri" },
        { value: "bca", text: "BCA" },
      ],
      optionReligion: [
        { value: "", text: "Pilih Agama" },
        { value: "islam", text: "Islam" },
        { value: "protestan", text: "Protestan" },
        { value: "katolik", text: "Katolik" },
        { value: "hindu", text: "Hindu" },
        { value: "budha", text: "Budha" },
        { value: "konghucu", text: "Kong Hu Cu" },
      ],
      // SITE GROUP CUSTOMER
      selectedServices: [],
      optionServices: [
        { text: "Security", value: "security" },
        { text: "Driver", value: "driver" },
        { text: "Support", value: "support" },
        { text: "Cleaning Service", value: "cleaning service" },
      ],
      // Kontak PIC
      listKontakPIC: [
        {
          name: "",
          phone: "",
        },
      ],
      listShift: [
        {
          shift: 1,
          start: "",
          end: "",
        },
      ],
    };
  },
  components: {},
  computed: {},
  mounted() {
    let lastBreadcrumb = {};
    if (this.$route.name === "customer-edit")
      lastBreadcrumb = { title: "Edit Customer Branch" };
    else lastBreadcrumb = { title: "Add Customer Branch" };
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Dashboard", route: "/dashboard" },
      { title: "Customer", route: "/customer" },
      lastBreadcrumb,
    ]);
  },
  created() {},
  methods: {
    handelFoto(e) {
      const file = e.target.files[0];
      this.previewUrl = URL.createObjectURL(file);
    },
    handleDeletePic(index) {
      this.listKontakPIC.splice(index, 1);
    },
    handleAddPic() {
      this.listKontakPIC.push({
        nama: "",
        phone: "",
      });
    },
    handleDeleteShift(index) {
      this.listShift.splice(index, 1);
    },
    handleAddShift() {
      this.listShift.push({
        nama: "",
        start: "",
        end: "",
      });
    },
  },
};
</script>
