<template>
  <div
    class="v-application v-application--is-ltr theme--light menuable__content__active"
  >
    <!--begin::Daily-->
    <div class="row">
      <div class="col-xxl-3 col-12 col-md-3 pt-0 pb-0">
        <div class="card gutter-b">
          <b-form-select
            v-model="selected"
            :options="filterCustomer"
          ></b-form-select>
        </div>
      </div>
      <div class="col-xxl-3 col-12 col-md-3 pt-0 pb-0">
        <div class="card gutter-b">
          <b-form-select
            v-model="selected"
            :options="filterPeriod"
          ></b-form-select>
        </div>
      </div>
      <div class="col-xxl-3 col-12 col-md-3 pt-0 pb-0">
        <div class="card gutter-b">
          <b-button variant="primary" class="w-100">Export Excel</b-button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xxl-12 col-12 col-md-12">
        <b-card>
          <div class="row justify-content-between">
            <div class="col-md-1">
              <b-form-group class="mb-0">
                <b-form-select
                  id="per-page-select"
                  v-model="perPage"
                  :options="pageOptions"
                  size="sm"
                ></b-form-select>
              </b-form-group>
            </div>
            <div class="col-md-3">
              <b-form-group class="mb-0">
                <b-input-group>
                  <template #prepend>
                    <b-input-group-text>
                      <i class="menu-icon flaticon-search"></i>
                    </b-input-group-text>
                  </template>
                  <b-form-input
                    v-model="search"
                    placeholder="Search"
                  ></b-form-input>
                </b-input-group>
              </b-form-group>
            </div>
          </div>
          <b-table
            hover
            :items="tableData"
            :fields="columns"
            :per-page="perPage"
            :current-page="currentPage"
          >
            <template #cell(action)="row">
              <img
                :src="row.item.foto"
                style="width: 100%; object-fit: scale-down"
              />
            </template>
          </b-table>
          <div class="row justify-content-end">
            <div class="col-md-3">
              <b-pagination
                v-model="currentPage"
                :total-rows="totalRows"
                :per-page="perPage"
                size="md"
                align="fill"
                class="ml-auto"
                style="padding: 0"
              ></b-pagination>
            </div>
          </div>
        </b-card>
      </div>
    </div>
    <!--end::Daily-->
  </div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
let DB_DATA = [];
export default {
  name: "Daily",
  data() {
    return {
      filterPeriod: [
        { value: null, text: "Filter Periode" },
        { value: "a", text: "This is First option" },
        { value: "b", text: "Selected Option" },
        { value: { C: "3PO" }, text: "This is an option with object value" },
        { value: "d", text: "This one is disabled", disabled: true },
      ],
      filterCustomer: [
        { value: null, text: "Filter Customer" },
        { value: "a", text: "This is First option" },
        { value: "b", text: "Selected Option" },
        { value: { C: "3PO" }, text: "This is an option with object value" },
        { value: "d", text: "This one is disabled", disabled: true },
      ],
      selected: null,
      isLoading: false,
      // Table
      rowStyleOption: {
        stripe: true,
      },
      search: "",
      pageIndex: 1,
      totalRows: 10,
      currentPage: 1,
      pageSize: 10,
      perPage: 10,
      pageOptions: [10, 15, { value: 100, text: "Show a lot" }],
      sortOption: {
        sortChange: (params) => {
          this.sortChange(params);
        },
      },
      columns: [
        {
          key: "customer",
          label: "Customer",
          align: "left",
          sortBy: "",
        },
        {
          key: "tanggal",
          label: "Tanggal",
          align: "left",
          sortBy: "",
        },
        {
          key: "petugas",
          label: "Petugas",
          align: "left",
          sortBy: "",
        },
        {
          key: "area",
          label: "Area",
          align: "left",
          sortBy: "",
        },
        {
          key: "lokasi",
          label: "Lokasi",
          align: "left",
          sortBy: "",
        },
        {
          key: "PIC",
          label: "PIC",
          align: "left",
          sortBy: "",
        },
        {
          key: "perihal",
          label: "Perihal",
          align: "left",
          sortBy: "",
          width: "20%",
        },
        {
          key: "user",
          label: "User",
          align: "left",
          sortBy: "",
        },
        {
          key: "alamat",
          label: "Alamat",
          align: "left",
          sortBy: "",
          width: "20%",
        },
        {
          key: "action",
          label: "Foto",
          align: "left",
          sortBy: "",
          width: "10%",
        },
      ],
    };
  },
  components: {},
  computed: {
    tableData() {
      return DB_DATA;
    },
    totalCount() {
      return DB_DATA.length;
    },
  },
  mounted() {
    this.totalRows = this.tableData.length;
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Dashboard", route: "/dashboard" },
      { title: "Harian" },
    ]);
  },
  created() {
    this.initDatabase();
  },
  methods: {
    sortChange(params) {
      Object.entries(params).forEach((item) => {
        if (item[1]) {
          console.log(item[0], item[1]);
        }
      });
    },
    pageNumberChange(pageIndex) {
      this.pageIndex = pageIndex;
    },
    // page size change
    pageSizeChange(pageSize) {
      this.pageIndex = 1;
      this.pageSize = pageSize;
    },
    handleView(item) {
      this.$router.push({ path: `/report/absensi/detail/${item.id}/1122` });
    },
    initDatabase() {
      DB_DATA = [];
      for (let i = 0; i < 1000; i++) {
        DB_DATA.push({
          id: i,
          customer: "Bank Indonesia",
          tanggal: "29-05-2022",
          petugas: "Ferdian Abdurrasyid",
          area: "Kebon sirih lt4 DPLF TMI",
          lokasi: "Bank Indonesia",
          PIC: "Ardiansyah",
          perihal:
            "Input pb scan dan initiate dokumen serta mengirim bukti potong pajak ke vendor",
          user: "Bank Indonesia",
          alamat:
            "Jl. Kebon Sirih No.82, RT.2/RW.3, Gambir, Kecamatan Gambir, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10110, Indonesia",
          foto: "https://gardtrax-admin.tdpindonesia.id/dist/img/logo_tdp.jpeg",
        });
      }
    },
  },
};
</script>
