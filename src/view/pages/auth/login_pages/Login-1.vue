<style lang="scss" scoped>
.bg-signin-overlay {
  background-image: url("/media/bg/background-signin.png");
  background-color: #1e37a5;
  background-blend-mode: overlay;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
<template>
  <div class="d-flex flex-column flex-root">
    <div
      class="login login-1 d-flex flex-column flex-lg-row flex-column-fluid bg-white"
      :class="{
        'login-signin-on': this.state == 'signin',
        'login-signup-on': this.state == 'signup',
        'login-forgot-on': this.state == 'forgot',
      }"
      id="kt_login"
    >
      <!--begin::Aside-->
      <div
        class="login-aside d-flex flex-column flex-row-auto bg-signin-overlay"
        :style="{ backgroundImage: `url(${backgroundImage})` }"
      >
        <div
          class="d-flex flex-column-auto flex-column pt-lg-40 pt-15 justify-content-between h-100"
        >
          <a href="#" class="text-center mb-10">
            <img src="media/logos/logo-login.png" alt="" width="239px" />
          </a>
          <h3
            class="font-weight-bolder text-center font-size-h4 font-size-h1-lg text-white"
          >
            We're created a purposive value<br />not just a professional people.
          </h3>
          <h5 class="text-white text-center font-weight-bold pb-lg-15">
            Gardtrax by TDP Indonesia
          </h5>
        </div>
      </div>
      <!--begin::Aside-->
      <!--begin::Content-->
      <div
        class="login-content flex-row-fluid d-flex flex-column justify-content-center position-relative overflow-hidden p-7 mx-auto"
      >
        <div class="d-flex flex-column-fluid flex-center">
          <!--begin::Signin-->
          <div class="login-form login-signin">
            <form
              class="form"
              novalidate="novalidate"
              id="kt_login_signin_form"
            >
              <div class="pb-13 pt-lg-0 pt-5">
                <h3
                  class="font-weight-bolder text-dark font-size-h4 font-size-h1-lg"
                >
                  Welcome to Gardtrax
                </h3>
                <span class="text-muted font-weight-bold font-size-h4"
                  >Need Help?
                  <a
                    id="kt_login_signup"
                    class="text-primary font-weight-bolder"
                    @click="showForm('signup')"
                    >Contact Admin</a
                  ></span
                >
              </div>
              <div class="form-group">
                <label class="font-size-h6 font-weight-bolder text-dark"
                  >Email</label
                >
                <div
                  id="example-input-group-1"
                  label=""
                  label-for="example-input-1"
                >
                  <input
                    class="form-control form-control-solid h-auto py-7 px-6 rounded-lg"
                    type="text"
                    name="email"
                    ref="email"
                    v-model="form.email"
                  />
                </div>
              </div>
              <div class="form-group">
                <div class="d-flex justify-content-between mt-n5">
                  <label class="font-size-h6 font-weight-bolder text-dark pt-5"
                    >Password</label
                  >
                  <a
                    class="text-primary font-size-h6 font-weight-bolder text-hover-primary pt-5"
                    id="kt_login_forgot"
                    @click="showForm('forgot')"
                    >Forgot Password ?</a
                  >
                </div>
                <div
                  id="example-input-group-2"
                  label=""
                  label-for="example-input-2"
                >
                  <input
                    class="form-control form-control-solid h-auto py-7 px-6 rounded-lg"
                    type="password"
                    name="password"
                    ref="password"
                    v-model="form.password"
                    autocomplete="off"
                  />
                </div>
              </div>
              <div class="pb-lg-0 pb-5">
                <button
                  ref="kt_login_signin_submit"
                  class="btn btn-primary font-weight-bolder font-size-h6 px-15 py-4 my-3 mr-3"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
          <!--end::Signin-->
          <!--begin::Signup-->
          <div class="login-form login-signup">
            <form
              class="form"
              novalidate="novalidate"
              id="kt_login_signup_form"
            >
              <div class="pb-13 pt-lg-0 pt-5">
                <h3
                  class="font-weight-bolder text-dark font-size-h4 font-size-h1-lg"
                >
                  Sign Up
                </h3>
                <p class="text-muted font-weight-bold font-size-h4">
                  Enter your details to create your account
                </p>
              </div>
              <div class="form-group">
                <input
                  class="form-control form-control-solid h-auto py-7 px-6 rounded-lg font-size-h6"
                  type="text"
                  placeholder="Fullname"
                  name="fullname"
                  ref="fullname"
                  autocomplete="off"
                />
              </div>
              <div class="form-group">
                <input
                  class="form-control form-control-solid h-auto py-7 px-6 rounded-lg font-size-h6"
                  type="email"
                  placeholder="Email"
                  name="email"
                  ref="remail"
                  autocomplete="off"
                />
              </div>
              <div class="form-group">
                <input
                  class="form-control form-control-solid h-auto py-7 px-6 rounded-lg font-size-h6"
                  type="password"
                  placeholder="Password"
                  name="password"
                  ref="rpassword"
                  autocomplete="off"
                />
              </div>
              <div class="form-group">
                <input
                  class="form-control form-control-solid h-auto py-7 px-6 rounded-lg font-size-h6"
                  type="password"
                  placeholder="Confirm password"
                  name="cpassword"
                  ref="cpassword"
                  autocomplete="off"
                />
              </div>
              <div class="form-group">
                <label class="checkbox mb-0">
                  <input type="checkbox" name="agree" />
                  <span class="mr-2"></span>
                  I Agree the
                  <a href="#" class="ml-2">terms and conditions</a>.
                </label>
              </div>
              <div class="form-group d-flex flex-wrap pb-lg-0 pb-3">
                <button
                  ref="kt_login_signup_submit"
                  class="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-4"
                  style="width: 150px"
                >
                  Submit
                </button>
                <button
                  type="button"
                  id="kt_login_signup_cancel"
                  class="btn btn-light-primary font-weight-bolder font-size-h6 px-8 py-4 my-3"
                  @click="showForm('signin')"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
          <!--end::Signup-->
          <!--begin::Forgot-->
          <div class="login-form login-forgot">
            <!--begin::Form-->
            <form
              class="form"
              novalidate="novalidate"
              id="kt_login_forgot_form"
              ref="kt_login_forgot_form"
            >
              <div class="pb-13 pt-lg-0 pt-5">
                <h3
                  class="font-weight-bolder text-dark font-size-h4 font-size-h1-lg"
                >
                  Forgotten Password ?
                </h3>
                <p class="text-muted font-weight-bold font-size-h4">
                  Enter your email to reset your password
                </p>
              </div>
              <div class="form-group">
                <input
                  class="form-control form-control-solid h-auto py-7 px-6 rounded-lg font-size-h6"
                  type="email"
                  placeholder="Email"
                  name="email"
                  autocomplete="off"
                />
              </div>
              <div class="form-group d-flex flex-wrap pb-lg-0">
                <button
                  type="button"
                  id="kt_login_forgot_submit"
                  class="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-4"
                >
                  Submit
                </button>
                <button
                  type="button"
                  id="kt_login_forgot_cancel"
                  class="btn btn-light-primary font-weight-bolder font-size-h6 px-8 py-4 my-3"
                  @click="showForm('signin')"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
          <!--end::Forgot-->
        </div>
        <!--begin::Content footer-->
        <div
          class="d-flex justify-content-lg-start justify-content-center align-items-end py-7 py-lg-0 pb-lg-10"
        >
          <a href="#" class="text-primary font-weight-bolder font-size-h5"
            >Terms</a
          >
          <a href="#" class="text-primary ml-10 font-weight-bolder font-size-h5"
            >Plans</a
          >
          <a href="#" class="text-primary ml-10 font-weight-bolder font-size-h5"
            >Contact Us</a
          >
        </div>
        <!--end::Content footer-->
      </div>
      <!--end::Content-->
    </div>
  </div>
</template>

<!-- Load login custom page styles -->
<style lang="scss">
@import "@/assets/sass/pages/login/login-1.scss";
</style>

<script>
import formValidation from "@/assets/plugins/formvalidation/dist/es6/core/Core";

// FormValidation plugins
import Trigger from "@/assets/plugins/formvalidation/dist/es6/plugins/Trigger";
import Bootstrap from "@/assets/plugins/formvalidation/dist/es6/plugins/Bootstrap";
import SubmitButton from "@/assets/plugins/formvalidation/dist/es6/plugins/SubmitButton";

import KTUtil from "@/assets/js/components/util";
import { mapGetters, mapState } from "vuex";
import { LOGIN, LOGOUT, REGISTER } from "@/core/services/store/auth.module";
import Swal from "sweetalert2";

export default {
  name: "login-1",
  data() {
    return {
      state: "signin",
      // Remove this dummy login info
      form: {
        email: "admin@demo.com",
        password: "demo",
      },
    };
  },
  computed: {
    ...mapState({
      errors: (state) => state.auth.errors,
    }),
    ...mapGetters(["currentUser"]),

    backgroundImage() {
      return process.env.BASE_URL + "media/bg/background-signin.png";
    },
  },
  mounted() {
    const signin_form = KTUtil.getById("kt_login_signin_form");
    const signup_form = KTUtil.getById("kt_login_signup_form");
    const forgot_form = KTUtil.getById("kt_login_forgot_form");

    this.fv = formValidation(signin_form, {
      fields: {
        email: {
          validators: {
            notEmpty: {
              message: "Username is required",
            },
          },
        },
        password: {
          validators: {
            notEmpty: {
              message: "Password is required",
            },
          },
        },
      },
      plugins: {
        trigger: new Trigger(),
        submitButton: new SubmitButton(),
        bootstrap: new Bootstrap(),
      },
    });

    this.fv1 = formValidation(signup_form, {
      fields: {
        fullname: {
          validators: {
            notEmpty: {
              message: "Full name is required",
            },
          },
        },
        email: {
          validators: {
            notEmpty: {
              message: "Email is required",
            },
            emailAddress: {
              message: "The value is not a valid email address",
            },
          },
        },
        password: {
          validators: {
            notEmpty: {
              message: "Password is required",
            },
          },
        },
        cpassword: {
          validators: {
            notEmpty: {
              message: "Confirm password is required",
            },
            identical: {
              compare: function () {
                return signup_form.querySelector('[name="password"]').value;
              },
              message: "The password and its confirm are not the same",
            },
          },
        },
        agree: {
          validators: {
            notEmpty: {
              message: "You should agree terms and conditions",
            },
          },
        },
      },
      plugins: {
        trigger: new Trigger(),
        submitButton: new SubmitButton(),
        bootstrap: new Bootstrap(),
      },
    });

    this.fv2 = formValidation(forgot_form, {
      fields: {
        email: {
          validators: {
            notEmpty: {
              message: "Email is required",
            },
            emailAddress: {
              message: "The value is not a valid email address",
            },
          },
        },
      },
      plugins: {
        trigger: new Trigger(),
        submitButton: new SubmitButton(),
        bootstrap: new Bootstrap(),
      },
    });

    this.fv.on("core.form.valid", () => {
      var email = this.form.email;
      var password = this.form.password;

      // clear existing errors
      this.$store.dispatch(LOGOUT);

      // set spinner to submit button
      const submitButton = this.$refs["kt_login_signin_submit"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");

      // dummy delay
      setTimeout(() => {
        // send login request
        this.$store
          .dispatch(LOGIN, { email, password })
          // go to which page after successfully login
          .then(() => this.$router.push({ name: "dashboard" }))
          .catch(() => {});

        submitButton.classList.remove(
          "spinner",
          "spinner-light",
          "spinner-right"
        );
      }, 2000);
    });

    this.fv.on("core.form.invalid", () => {
      Swal.fire({
        title: "",
        text: "Please, provide correct data!",
        icon: "error",
        confirmButtonClass: "btn btn-secondary",
        heightAuto: false,
      });
    });

    this.fv1.on("core.form.valid", () => {
      const email = this.$refs.remail.value;
      const password = this.$refs.rpassword.value;

      // clear existing errors
      this.$store.dispatch(LOGOUT);

      // set spinner to submit button
      const submitButton = this.$refs["kt_login_signup_submit"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");

      // dummy delay
      setTimeout(() => {
        // send register request
        this.$store
          .dispatch(REGISTER, {
            email: email,
            password: password,
          })
          .then(() => this.$router.push({ name: "dashboard" }));

        submitButton.classList.remove(
          "spinner",
          "spinner-light",
          "spinner-right"
        );
      }, 2000);
    });

    this.fv1.on("core.form.invalid", () => {
      Swal.fire({
        title: "",
        text: "Please, provide correct data!",
        icon: "error",
        confirmButtonClass: "btn btn-secondary",
        heightAuto: false,
      });
    });
  },
  methods: {
    showForm(form) {
      this.state = form;
      var form_name = "kt_login_" + form + "_form";
      KTUtil.animateClass(
        KTUtil.getById(form_name),
        "animate__animated animate__backInUp"
      );
    },
  },
};
</script>
