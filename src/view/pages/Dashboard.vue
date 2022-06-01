<template>
  <div>
    <!--begin::Dashboard-->
    <div class="row gutter-b">
      <div class="col-xxl-3">
        <b-form-select v-model="selected" :options="filterYear"></b-form-select>
      </div>
      <div class="col-xxl-3">
        <b-form-select
          v-model="selected"
          :options="filterMonth"
        ></b-form-select>
      </div>
      <div class="col-xxl-3">
        <b-form-select v-model="selected" :options="filterArea"></b-form-select>
      </div>
      <!-- <div class="col-xxl-3">
        <b-form-select v-model="selected" :options="filterCustomer"></b-form-select>
      </div> -->
      <div class="col-xxl-3">
        <b-button variant="primary" class="w-100">Filter</b-button>
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
  name: "dashboard",
  data() {
    return {
      filterYear: [
        { value: null, text: "Filter Tahun" },
        { value: "a", text: "This is First option" },
        { value: "b", text: "Selected Option" },
        { value: { C: "3PO" }, text: "This is an option with object value" },
        { value: "d", text: "This one is disabled", disabled: true },
      ],
      filterMonth: [
        { value: null, text: "Filter Bulan" },
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
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Dashboard" }]);
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
<style lang="scss"></style>
