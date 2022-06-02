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
      pageSize: 10,
      sortOption: {
        sortChange: (params) => {
          this.sortChange(params);
        },
      },
      columns: [
        {
          field: "customer",
          key: "a",
          title: "Customer",
          align: "left",
          sortBy: "",
        },
        {
          field: "tanggal",
          key: "b",
          title: "Tanggal",
          align: "left",
          sortBy: "",
        },
        {
          field: "petugas",
          key: "C",
          title: "Petugas",
          align: "left",
          sortBy: "",
        },
        { field: "area", key: "d", title: "Area", align: "left", sortBy: "" },
        {
          field: "lokasi",
          key: "e",
          title: "Lokasi",
          align: "left",
          sortBy: "",
        },
        { field: "PIC", key: "f", title: "PIC", align: "left", sortBy: "" },
        {
          field: "perihal",
          key: "g",
          title: "Perihal",
          align: "left",
          sortBy: "",
          width: "20%",
        },
        { field: "user", key: "h", title: "User", align: "left", sortBy: "" },
        {
          field: "alamat",
          key: "i",
          title: "Alamat",
          align: "left",
          sortBy: "",
          width: "20%",
        },
        {
          field: "",
          key: "j",
          title: "Foto",
          align: "left",
          sortBy: "",
          width: "5%",
          // eslint-disable-next-line
          renderBodyCell: ({ row, column, rowIndex }, h) => {
            return (
              <img
                src={row.foto}
                style="width: 100%;object-fit: scale-down"
              ></img>
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
