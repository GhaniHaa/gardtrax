<template>
  <div class="topbar-item">
    <b-dropdown
      size="sm"
      variant="link"
      toggle-class="btn btn-icon btn-clean btn-dropdown btn-lg mr-1 text-decoration-none w-100"
      no-caret
      right
      no-flip
    >
      <template v-slot:button-content>
        <div
          class="btn btn-icon w-auto btn-clean d-flex align-items-center btn-lg px-2"
          id="kt_quick_user_toggle"
        >
          <span
            class="text-muted font-weight-bold font-size-base d-none d-md-inline mr-1"
          >
            Hi,
          </span>
          <span
            class="text-dark-50 font-weight-bolder font-size-base d-none d-md-inline mr-3"
          >
            {{ currentUserPersonalInfo.name }}
          </span>
          <span class="symbol symbol-35 symbol-light-success">
            <img v-if="false" alt="Pic" :src="currentUserPersonalInfo.photo" />
            <span
              v-if="true"
              class="symbol-label font-size-h5 font-weight-bold"
            >
              {{ currentUserPersonalInfo.name.charAt(0).toUpperCase() }}
            </span>
          </span>
        </div>
      </template>

      <div class="navi navi-hover min-w-md-250px">
        <b-dropdown-text tag="div" class="navi-header font-weight-bold">
          Jump to:
          <i
            class="flaticon2-information"
            data-toggle="tooltip"
            data-placement="left"
            v-b-tooltip.hover
            title="Click to learn more..."
          />
        </b-dropdown-text>
        <b-dropdown-text
          tag="div"
          class="navi-separator mb-3"
        ></b-dropdown-text>
        <b-dropdown-text tag="div" class="navi-item">
          <a href="#" class="navi-link">
            <span class="navi-icon">
              <i class="flaticon2-drop"></i>
            </span>
            <span class="navi-text">Recent Orders</span>
          </a>
        </b-dropdown-text>
        <b-dropdown-text tag="div" class="navi-item">
          <a href="#" class="navi-link">
            <span class="navi-icon">
              <i class="flaticon2-calendar-8"></i>
            </span>
            <span class="navi-text">Support Cases</span>
          </a>
        </b-dropdown-text>
        <b-dropdown-text tag="div" class="navi-item">
          <a href="#" class="navi-link">
            <span class="navi-icon">
              <i class="flaticon2-telegram-logo"></i>
            </span>
            <span class="navi-text">Projects</span>
          </a>
        </b-dropdown-text>
        <b-dropdown-text tag="div" class="navi-item">
          <a href="#" class="navi-link">
            <span class="navi-icon">
              <i class="flaticon2-new-email"></i>
            </span>
            <span class="navi-text">Messages</span>
            <span class="navi-label">
              <span class="label label-success label-rounded">5</span>
            </span>
          </a>
        </b-dropdown-text>
        <b-dropdown-text
          tag="div"
          class="navi-separator mt-3"
        ></b-dropdown-text>
        <b-dropdown-text tag="div" class="navi-footer">
          <a class="btn btn-light-primary font-weight-bolder btn-sm" href="#"
            >Upgrade plan</a
          >
          <a
            class="btn btn-clean font-weight-bold btn-sm"
            href="#"
            data-toggle="tooltip"
            data-placement="left"
            v-b-tooltip.hover
            title="Click to learn more..."
            >Learn more</a
          >
        </b-dropdown-text>
      </div>
    </b-dropdown>
  </div>
</template>

<style lang="scss" scoped>
#kt_quick_user {
  overflow: hidden;
}
</style>

<script>
import { mapGetters } from "vuex";
import { LOGOUT } from "@/core/services/store/auth.module";
import KTLayoutQuickUser from "@/assets/js/layout/extended/quick-user.js";
import KTOffcanvas from "@/assets/js/components/offcanvas.js";

export default {
  name: "KTQuickUser",
  data() {
    return {
      list: [
        {
          title: "Another purpose persuade",
          desc: "Due in 2 Days",
          alt: "+28%",
          svg: "media/svg/icons/Home/Library.svg",
          type: "warning",
        },
        {
          title: "Would be to people",
          desc: "Due in 2 Days",
          alt: "+50%",
          svg: "media/svg/icons/Communication/Write.svg",
          type: "success",
        },
        {
          title: "Purpose would be to persuade",
          desc: "Due in 2 Days",
          alt: "-27%",
          svg: "media/svg/icons/Communication/Group-chat.svg",
          type: "danger",
        },
        {
          title: "The best product",
          desc: "Due in 2 Days",
          alt: "+8%",
          svg: "media/svg/icons/General/Attachment2.svg",
          type: "info",
        },
      ],
    };
  },
  mounted() {
    // Init Quick User Panel
    KTLayoutQuickUser.init(this.$refs["kt_quick_user"]);
  },
  methods: {
    onLogout() {
      this.$store
        .dispatch(LOGOUT)
        .then(() => this.$router.push({ name: "login" }));
    },
    closeOffcanvas() {
      new KTOffcanvas(KTLayoutQuickUser.getElement()).hide();
    },
  },
  computed: {
    ...mapGetters(["currentUserPersonalInfo"]),

    getFullName() {
      return (
        this.currentUserPersonalInfo.name +
        " " +
        this.currentUserPersonalInfo.surname
      );
    },
  },
};
</script>
