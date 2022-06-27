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
            :options="filterArea"
          ></b-form-select>
        </div>
      </div>
      <div class="col-xxl-3 col-12 col-md-3 pt-0 pb-0">
        <div class="card gutter-b">
          <b-form-select
            v-model="selected"
            :options="filterCustomer"
          ></b-form-select>
        </div>
      </div>
      <div class="col-xxl-2 col-12 col-md-3 pt-0 pb-0">
        <div class="card gutter-b">
          <b-button variant="primary" class="w-100">Export Excel</b-button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xxl-12 col-12 col-md-12">
        <b-card>
          <b-button variant="primary gutter-b" @click="handleButtonAdd()"
            >Tambah</b-button
          >
          <b-form-group label-for="file-default">
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
          </b-form-group>
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
  name: "ListEmployee",
  data() {
    return {
      filterArea: [
        { value: null, text: "Filter Area Kerja" },
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
          field: "id",
          key: "a",
          title: "ID",
          align: "left",
          sortBy: "",
        },
        {
          field: "parent",
          key: "b",
          title: "Parent",
          align: "left",
          sortBy: "",
        },
        {
          field: "nama",
          key: "c",
          title: "Nama",
          align: "left",
          sortBy: "",
          width: "30%",
        },
        {
          field: "cabang",
          key: "d",
          title: "Cabang",
          align: "left",
          sortBy: "",
        },
        {
          field: "tanggalPerjanjian",
          key: "e",
          title: "Tanggal Berlaku Perjanjian",
          align: "left",
          width: "",
          sortBy: "",
        },
        {
          field: "",
          key: "f",
          title: "Aksi",
          align: "center",
          // eslint-disable-next-line
            renderBodyCell: ({ row, column, rowIndex }, h) => {
            return (
              <span>
                <b-button
                  variant="success"
                  class="py-1 px-2 mr-1"
                  id="detail"
                  title="edit"
                  on-click={() => {
                    this.handleEdit(row);
                  }}
                >
                  <i
                    class="menu-icon flaticon-edit pr-0"
                    style="font-size: 13px"
                  ></i>
                </b-button>
                <b-button
                  variant="danger"
                  class="py-1 px-2 mr-1"
                  id="detail"
                  title="delete"
                  on-click={() => {
                    this.handleView(row);
                  }}
                >
                  <i
                    class="menu-icon flaticon-delete pr-0"
                    style="font-size: 13px"
                  ></i>
                </b-button>
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
      { title: "Customer" },
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
    handleButtonAdd() {
      this.$router.push({ path: `/customer/create` });
    },
    handleEdit(item) {
      this.$router.push({ path: `/customer/edit/${item.id}` });
    },
    initDatabase() {
      DB_DATA = [];
      for (let i = 0; i < 1000; i++) {
        DB_DATA.push({
          id: i,
          parent: "Papah",
          nama: "Feri (Danru)",
          cabang: "BNI",
          tanggalPerjanjian: "01/12/2021",
        });
      }
    },
  },
};
</script>
