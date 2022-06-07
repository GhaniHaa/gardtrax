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

      <div class="navi navi-hover min-w-md-300px">
        <b-dropdown-text tag="div" class="navi-header font-weight-bold">
          <h3 class="font-weight-bold m-0">User Profile</h3>
        </b-dropdown-text>
        <b-dropdown-text
          tag="div"
          class="navi-separator mb-3"
        ></b-dropdown-text>
        <b-dropdown-text tag="div" class="navi-item">
          <div class="d-flex align-items-center p-6">
            <div
              class="symbol symbol-60 symbol-xxl-100 mr-5 align-self-start align-self-xxl-center symbol-35 symbol-light-success"
            >
              <div class="symbol-label font-size-h5 font-weight-bold">J</div>
            </div>
            <div>
              <a
                href="#"
                class="font-weight-bold font-size-h5 text-dark-75 text-hover-primary"
              >
                James Jones
              </a>
              <div class="text-muted">Application Developer</div>
              <div class="mt-2">
                <a
                  href="#"
                  class="btn btn-sm btn-primary font-weight-bold mr-2 py-2 px-3 px-xxl-5 my-1"
                  >Profile</a
                >
              </div>
            </div>
          </div>
        </b-dropdown-text>
        <b-dropdown-text
          tag="div"
          class="navi-separator mt-3"
        ></b-dropdown-text>
        <b-dropdown-text tag="div" class="navi-footer">
          <a class="btn btn-light-primary font-weight-bolder btn-sm" href="#"
            >Logout</a
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
    ...mapGetters(["currentUserPersonalInfo", "currentUserPhoto"]),

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
