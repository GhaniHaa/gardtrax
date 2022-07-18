<template>
  <div
    class="v-application v-application--is-ltr theme--light menuable__content__active"
  >
    <!--begin::View Jabatan-->
    <div class="row">
      <div class="col-xxl-12 col-12 col-md-12">
        <b-card>
          <b-button variant="primary gutter-b" @click="handleButtonAdd()"
            >Tambah</b-button
          >
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
              <span class="mr-2" @click="handleEdit(row.item)">
                <b-button
                  variant="success"
                  class="py-1 px-2"
                  id="detail"
                  title="detail"
                >
                  <i class="menu-icon flaticon-edit pr-0"></i>
                </b-button>
              </span>
              <span @click="handleDelete(row.item)">
                <b-button
                  variant="danger"
                  class="py-1 px-2"
                  id="detail"
                  title="detail"
                >
                  <i class="menu-icon flaticon-delete pr-0"></i>
                </b-button>
              </span>
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
    <!--end::View Jabatan-->
  </div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
let DB_DATA = [];
export default {
  name: "ViewMasterJabatan",
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
      //
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
          key: "divisi",
          label: "Divisi",
          align: "left",
          sortBy: "",
        },
        {
          key: "level",
          label: "Level Jabatan",
          align: "left",
          sortBy: "",
        },
        {
          key: "nama",
          label: "Nama",
          align: "left",
          sortBy: "",
        },
        {
          key: "parent",
          label: "Parent",
          align: "left",
          width: "",
        },
        {
          key: "action",
          label: "Aksi",
          align: "center",
          width: "10%",
        },
      ],
      deleteValue: "",
    };
  },
  components: {},
  computed: {
    tableData() {
      //   const { pageIndex, pageSize } = this;
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
      { title: "Jabatan" },
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
      this.$router.push({ path: `/master/jabatan/create` });
    },
    handleEdit(item) {
      this.$router.push({ path: `/master/jabatan/edit/${item.id}` });
    },
    handleDelete(item) {
      this.deleteValue = "";
      this.$bvModal
        .msgBoxConfirm("Please confirm that you want to delete this data.", {
          title: "Confirm Delete",
          size: "sm",
          buttonSize: "sm",
          okVariant: "danger",
          okTitle: "Delete",
          cancelTitle: "Cancel",
          footerClass: "p-2",
          hideHeaderClose: false,
          centered: true,
        })
        .then(() => {
          this.deleteValue = item;
        });
    },
    initDatabase() {
      DB_DATA = [];
      for (let i = 0; i < 100; i++) {
        DB_DATA.push({
          id: i,
          divisi: "Operasional-" + i,
          level: "Direksi-" + i,
          nama: "Jabatan-" + i,
          parent: "-",
        });
      }
    },
  },
};
</script>
