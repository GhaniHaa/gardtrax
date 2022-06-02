<template>
  <div
    class="v-application v-application--is-ltr theme--light menuable__content__active"
  >
    <!--begin::Detail Attendance-->
    <div class="row">
      <div class="col-xxl-12">
        <b-card>
          <ve-table
            :columns="columns"
            :table-data="tableData"
            :sort-option="sortOption"
            :border-y="true"
            :row-style-option="rowStyleOption"
          />
          <div class="table-pagination">
            <ve-pagination
              :total="totalCount"
              :page-index="pageIndex"
              :page-size="pageSize"
              @on-page-number-change="pageNumberChange"
              @on-page-size-change="pageSizeChange"
              :border-y="true"
              class="w-100"
            />
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
      pageSize: 10,
      sortOption: {
        sortChange: (params) => {
          this.sortChange(params);
        },
      },
      columns: [
        {
          field: "nip",
          key: "b",
          title: "NIP",
          align: "left",
          sortBy: "",
        },
        {
          field: "petugas",
          key: "c",
          title: "Petugas",
          align: "left",
          sortBy: "",
        },
        {
          field: "customer",
          key: "d",
          title: "Customer",
          align: "left",
          sortBy: "",
        },
        {
          field: "tanggal",
          key: "e",
          title: "Tanggal",
          align: "left",
          width: "",
          sortBy: "",
        },
        {
          field: "shift",
          key: "f",
          title: "Shift",
          align: "left",
          width: "",
          sortBy: "",
        },
        {
          field: "checkIn",
          key: "g",
          title: "Check In",
          align: "left",
          width: "",
          sortBy: "",
        },
        {
          field: "checkOut",
          key: "h",
          title: "Check Out",
          align: "left",
          width: "",
          sortBy: "",
        },
        {
          field: "status",
          key: "i",
          title: "Status",
          align: "left",
          width: "",
          sortBy: "",
        },
        {
          field: "pengganti",
          key: "j",
          title: "Pengganti",
          align: "left",
          width: "",
          sortBy: "",
        },
        {
          field: "danru",
          key: "k",
          title: "Danru",
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
      const { pageIndex, pageSize } = this;
      return DB_DATA.slice((pageIndex - 1) * pageSize, pageIndex * pageSize);
    },
    totalCount() {
      return DB_DATA.length;
    },
  },
  mounted() {
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
