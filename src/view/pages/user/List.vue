<template>
  <div
    class="v-application v-application--is-ltr theme--light menuable__content__active"
  >
    <b-row class="mb-4">
      <b-col lg="4" class="my-1">
        <b-form-group
          class="mb-0"
          v-slot="{ ariaDescribedby }"
        >
          <b-input-group size="sm">
            <b-form-select
              id="sort-by-select"
              v-model="sortBy"
              :options="sortOptions"
              :aria-describedby="ariaDescribedby"
              class="w-75"
            >
              <template #first>
                <option value="">-- none --</option>
              </template>
            </b-form-select>

            <b-form-select
              v-model="sortDesc"
              :disabled="!sortBy"
              :aria-describedby="ariaDescribedby"
              size="sm"
              class="w-25"
            >
              <option :value="false">Asc</option>
              <option :value="true">Desc</option>
            </b-form-select>
          </b-input-group>
        </b-form-group>
      </b-col>
    </b-row>
    <!--begin::Brodcast-->
    <div class="row">
      <div class="col-xxl-12 col-12 col-md-12">
        <b-card>
          <b-button variant="primary gutter-b" @click="handleButtonAdd()"
            >Tambah</b-button
          >
          <div class=""></div>
          <b-table
            hover
            :items="tableData"
            :fields="fields"
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
              <span @click="handleEdit(row.item)">
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
      fields: [
        {
          key: "nama",
          label: "Nama",
          align: "left",
          sortBy: "",
          sortByFormatted: true,
          filterByFormatted: true,
          sortable: true
        },
        {
          key: "username",
          label: "Username",
          align: "left",
          sortBy: "",
          sortable: true
        },
        {
          key: "email",
          label: "Email",
          align: "left",
          sortBy: "",
          sortable: true
        },
        {
          key: "action",
          label: "Aksi",
          align: "center",
          width: "10%",
        },
      ],
      sortBy: '',
      sortDesc: false,
      sortDirection: 'asc',
      filter: null,
      filterOn: [],
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
    sortOptions() {
      return this.fields
        .filter(f => f.sortable)
        .map(f => {
          return { text: f.label, value: f.key }
        })
    }
  },
  mounted() {
    this.totalRows = this.tableData.length;
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Dashboard", route: "/dashboard" },
      { title: "User" },
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
      this.$router.push({ path: `/user/create` });
    },
    handleEdit(item) {
      this.$router.push({ path: `/user/edit/${item.id}` });
    },
    initDatabase() {
      DB_DATA = [];
      for (let i = 0; i < 100; i++) {
        DB_DATA.push({
          id: i,
          nama: "Ardiyan Noer Cahyoko" + i,
          username: "yoko",
          email: "ardiyanyoko20@gmail.com",
        });
      }
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    }
  },
};
</script>
