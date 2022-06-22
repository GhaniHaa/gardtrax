<template>
  <div
    class="v-application v-application--is-ltr theme--light menuable__content__active"
  >
    <!--begin::Brodcast-->
    <div class="row">
      <div class="col-xxl-12 col-12 col-md-12">
        <b-card>
          <b-button variant="primary gutter-b" @click="handleButtonAdd()"
            >Tambah</b-button
          >
          <b-table hover :items="tableData" :fields="columns">
            <template #cell(action)="row">
              <span @click="handleView(row.item)">
                <b-button
                  variant="success"
                  class="py-1 px-2"
                  id="detail"
                  title="detail"
                >
                  <i class="menu-icon flaticon-eye pr-0"></i>
                </b-button>
              </span>
            </template>
          </b-table>
        </b-card>
      </div>
    </div>
    <!--end::Brodcast-->
  </div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
let DB_DATA = [];
export default {
  name: "ListBrodcast",
  data() {
    return {
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
          key: "judul",
          label: "Judul",
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
          key: "action",
          label: "Aksi",
          align: "center",
          width: "10%",
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
      { title: "Brodcast" },
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
      this.$router.push({ path: `/brodcast/create` });
    },
    handleView(item) {
      this.$router.push({ path: `/employee/view/${item.id}` });
    },
    initDatabase() {
      DB_DATA = [];
      for (let i = 0; i < 1000; i++) {
        DB_DATA.push({
          id: i,
          judul: "Feri (Danru)",
          tanggal: "0001",
        });
      }
    },
  },
};
</script>
