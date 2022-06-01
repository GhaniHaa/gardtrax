<template>
  <div
    class="v-application v-application--is-ltr theme--light menuable__content__active"
  >
    <!--begin::Dashboard-->
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
        <ve-table
          :columns="columns"
          :table-data="tableData"
          :sort-option="sortOption"
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
      </div>
    </div>
    <!--end::Dashboard-->
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
      search: "",
      pageIndex: 1,
      pageSize: 10,
      sortOption: {
        sortChange: (params) => {
          console.log("sortChange::", params);
          this.sortChange(params);
        },
      },
      columns: [
        {
          field: "",
          key: "a",
          title: "#",
          align: "center",
          // eslint-disable-next-line
							renderBodyCell: ({ row, column, rowIndex }, h) => {
            return (this.pageIndex - 1) * this.pageSize + rowIndex + 1;
          },
        },
        { field: "name", key: "b", title: "Name", align: "center" },
        { field: "date", key: "c", title: "Date", align: "left" },
        { field: "hobby", key: "d", title: "Hobby", align: "left" },
        { field: "address", key: "e", title: "Address", width: "" },
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
      { title: "Dashboard" },
      { title: "Absensi" },
    ]);
  },
  created() {
    this.initDatabase();
  },
  methods: {
    sortChange(params) {
      this.tableData.sort((a, b) => {
        if (params.age) {
          if (params.age === "asc") {
            return a.age - b.age;
          } else if (params.age === "desc") {
            return b.age - a.age;
          } else {
            return 0;
          }
        } else if (params.weight) {
          if (params.weight === "asc") {
            return a.weight - b.weight;
          } else if (params.weight === "desc") {
            return b.weight - a.weight;
          } else {
            return 0;
          }
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
          name: "John" + i,
          date: "1900-05-20",
          hobby: "coding and coding repeat" + i,
          address: "No.1 Century Avenue, Shanghai" + i,
        });
      }
      console.log("DB_DATA", DB_DATA);
    },
  },
};
</script>
