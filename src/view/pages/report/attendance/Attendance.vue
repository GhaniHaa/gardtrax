<template>
  <div
    class="v-application v-application--is-ltr theme--light menuable__content__active"
  >
    <!--begin::Attendance-->
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
      <div class="col-xxl-3 col-12 col-md-3 pt-0 pb-0">
        <div class="card gutter-b">
          <b-button variant="primary" class="w-100"
            >Export Detail to Excel</b-button
          >
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
  name: "Attendance",
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
          field: "customer",
          key: "b",
          title: "Customer",
          align: "left",
          sortBy: "",
        },
        {
          field: "date",
          key: "c",
          title: "Tanggal",
          align: "left",
          sortBy: "",
        },
        { field: "shift", key: "d", title: "Shift", align: "left", sortBy: "" },
        {
          field: "mustPresent",
          key: "e",
          title: "Harus Hadir",
          align: "left",
          width: "",
          sortBy: "",
        },
        {
          field: "actualPresent",
          key: "f",
          title: "Aktual Hadir",
          align: "left",
          width: "",
          sortBy: "",
        },
        {
          field: "notPresenet",
          key: "g",
          title: "Tidak Hadir",
          align: "left",
          width: "",
          sortBy: "",
        },
        {
          field: "permit",
          key: "h",
          title: "Izin",
          align: "left",
          width: "",
          sortBy: "",
        },
        {
          field: "sick",
          key: "i",
          title: "Sakit",
          align: "left",
          width: "",
          sortBy: "",
        },
        {
          field: "withoutExplanation",
          key: "j",
          title: "Tanpa Keterangan",
          align: "left",
          width: "",
          sortBy: "",
        },
        {
          field: "paidLeave",
          key: "k",
          title: "Cuti",
          align: "left",
          width: "",
          sortBy: "",
        },
        {
          field: "replacement",
          key: "l",
          title: "Pengganti",
          align: "left",
          width: "",
          sortBy: "",
        },
        {
          field: "",
          key: "m",
          title: "Aksi",
          align: "center",
          // eslint-disable-next-line
            renderBodyCell: ({ row, column, rowIndex }, h) => {
            return (
              <span
                on-click={() => {
                  this.handleView(row);
                }}
              >
                <b-button variant="success" class="py-1 px-2" id="detail">
                  <i class="menu-icon flaticon-eye pr-0"></i>
                </b-button>
                <b-tooltip ref="tooltip" target="detail" triggers="hover">
                  Detail
                </b-tooltip>
              </span>
            );
          },
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
      { title: "Absensi" },
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
          date: "1900-05-20",
          shift: 1,
          mustPresent: "1",
          actualPresent: 6 + i,
          notPresenet: 2 + i,
          permit: 3 + i,
          sick: 3 + i,
          withoutExplanation: 3 + i,
          paidLeave: 2 + i,
          replacement: 2 + i,
        });
      }
    },
  },
};
</script>
