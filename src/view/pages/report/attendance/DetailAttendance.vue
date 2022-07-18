<template>
  <div
    class="v-application v-application--is-ltr theme--light menuable__content__active"
  >
    <!--begin::Detail Attendance-->
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
    <!--end::Attendance-->
  </div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
let DB_DATA = [];
export default {
  name: "DetailAttendance",
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
          key: "nip",
          label: "NIP",
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
          key: "customer",
          label: "Customer",
          align: "left",
          sortBy: "",
        },
        {
          key: "tanggal",
          label: "Tanggal",
          align: "left",
          width: "",
          sortBy: "",
        },
        {
          key: "shift",
          label: "Shift",
          align: "left",
          width: "",
          sortBy: "",
        },
        {
          key: "checkIn",
          label: "Check In",
          align: "left",
          width: "",
          sortBy: "",
        },
        {
          key: "checkOut",
          label: "Check Out",
          align: "left",
          width: "",
          sortBy: "",
        },
        {
          key: "status",
          label: "Status",
          align: "left",
          width: "",
          sortBy: "",
        },
        {
          key: "pengganti",
          label: "Pengganti",
          align: "left",
          width: "",
          sortBy: "",
        },
        {
          key: "danru",
          label: "Danru",
          align: "left",
          width: "",
          sortBy: "",
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
      { title: "Absensi", route: "/report" },
      { title: "Laporan Detail Absensi" },
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
    initDatabase() {
      DB_DATA = [];
      for (let i = 0; i < 1000; i++) {
        DB_DATA.push({
          nip: "01207214399",
          petugas: "ARIYANTO",
          customer: "BANK INDONESIA",
          tanggal: "01-06-2022",
          shift: 1,
          checkIn: "06:37:04",
          checkOut: "06:37:04",
          status: "Hadir",
          pengganti: "",
          danru: "",
        });
      }
    },
  },
};
</script>
