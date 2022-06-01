<template>
  <div>
    <!--begin::Dashboard-->
    <div class="row">
      <div class="col-xxl-4 col-12 col-md-4">
        <div class="card gutter-b">
          <b-form-select
            v-model="selected"
            :options="filterCustomer"
          ></b-form-select>
        </div>
      </div>
      <div class="col-xxl-4 col-12 col-md-4">
        <div class="card gutter-b">
          <b-form-select
            v-model="selected"
            :options="filterPeriod"
          ></b-form-select>
        </div>
      </div>
      <div class="col-xxl-4 col-12 col-md-4">
        <div class="card gutter-b">
          <b-button variant="primary" class="w-100">Export Excel</b-button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xxl-4">
        <StatsWidget7></StatsWidget7>
      </div>
      <div class="col-xxl-4">
        <StatsWidget7></StatsWidget7>
      </div>
      <div class="col-xxl-4">
        <StatsWidget7></StatsWidget7>
      </div>
    </div>
    <!--end::Dashboard-->
  </div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import StatsWidget7 from "@/view/content/widgets/stats/Widget7.vue";

export default {
  name: "Patrol",
  data() {
    return {
      filterPeriod: [
        { value: null, text: "Filter Periode" },
        { value: "a", text: "This is First option" },
        { value: "b", text: "Selected Option" },
        { value: { C: "3PO" }, text: "This is an option with object value" },
        { value: "d", text: "This one is disabled", disabled: true },
      ],
      filterArea: [
        { value: null, text: "Filter Area" },
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
    };
  },
  components: {
    StatsWidget7,
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Dashboard" },
      { title: "Patroli" },
    ]);
  },
  methods: {
    setActiveTab1(event) {
      this.tabIndex = this.setActiveTab(event);
    },
    setActiveTab2(event) {
      this.tabIndex2 = this.setActiveTab(event);
    },
    /**
     * Set current active on click
     * @param event
     */
    setActiveTab(event) {
      // get all tab links
      const tab = event.target.closest('[role="tablist"]');
      const links = tab.querySelectorAll(".nav-link");
      // remove active tab links
      for (let i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
      }

      // set current active tab
      event.target.classList.add("active");

      // set clicked tab index to bootstrap tab
      return parseInt(event.target.getAttribute("data-tab"));
    },
  },
};
</script>
