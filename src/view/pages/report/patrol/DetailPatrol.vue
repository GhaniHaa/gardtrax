<template>
  <div
    class="v-application v-application--is-ltr theme--light menuable__content__active"
  >
    <!--begin::Detail DetailPatrol-->
    <div class="row">
      <div class="col-xxl-2 col-12 col-md-3 pt-0 pb-0">
        <div class="card gutter-b">
          <b-button variant="primary" class="w-100">Export to Excel</b-button>
        </div>
      </div>
    </div>
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
              class="w-100"
            />
          </div>
        </b-card>
      </div>
    </div>
    <!--end::DetailPatrol-->
  </div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
let DB_DATA = [];
export default {
  name: "DetailPatrol",
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
          field: "petugas",
          key: "a",
          title: "Petugas",
          align: "left",
          sortBy: "",
        },
        {
          field: "customer",
          key: "b",
          title: "Customer",
          align: "left",
          sortBy: "",
        },
        {
          field: "tanggal",
          key: "c",
          title: "Tanggal",
          align: "left",
          width: "",
          sortBy: "",
        },
        {
          field: "tanggalScan",
          key: "d",
          title: "Tanggal Scan",
          align: "left",
          width: "",
          sortBy: "",
        },
        {
          field: "lantai",
          key: "e",
          title: "Lantai",
          align: "left",
          width: "",
          sortBy: "",
        },
        {
          field: "sektor",
          key: "f",
          title: "Sektor",
          align: "left",
          width: "",
          sortBy: "",
        },
        {
          field: "shift",
          key: "g",
          title: "Shift",
          align: "left",
          width: "",
          sortBy: "",
        },
        {
          field: "alamat",
          key: "h",
          title: "Alamat",
          align: "left",
          width: "40%",
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
      { title: "Patroli", route: "/report/patroli" },
      { title: "Laporan Patroli" },
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
          petugas: "ARIYANTO",
          customer: "BANK INDONESIA",
          tanggal: "01-06-2022",
          tanggalScan: "01-06-2022",
          jam: "06:37:04",
          lantai: 1,
          sektor: 1,
          shift: 1,
          alamat:
            "bukit hegar no.5 rt, Hegarmanah, Kecamatan Cidadap, Jawa Barat, Indonesia",
        });
      }
    },
  },
};
</script>
