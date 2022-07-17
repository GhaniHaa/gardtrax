import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/dashboard",
      component: () => import("@/view/layout/Layout"),
      children: [
        {
          path: "/dashboard",
          name: "dashboard",
          component: () => import("@/view/pages/Dashboard.vue"),
        },
        {
          path: "/builder",
          name: "builder",
          component: () => import("@/view/pages/Builder.vue"),
        },
        {
          path: "/report",
          redirect: "/report/absensi",
          name: "report",
          component: () => import("@/view/pages/report/Index.vue"),
          children: [
            {
              path: "absensi",
              name: "attendance",
              component: () => import("@/view/pages/report/Index.vue"),
              children: [
                {
                  path: "",
                  name: "attendance-main",
                  component: () =>
                    import("@/view/pages/report/attendance/Attendance.vue"),
                },
                {
                  path: "detail/:id/:date",
                  name: "attendance-detail",
                  component: () =>
                    import(
                      "@/view/pages/report/attendance/DetailAttendance.vue"
                    ),
                },
              ],
            },
            {
              path: "harian",
              name: "daily",
              component: () => import("@/view/pages/report/Daily.vue"),
            },
            {
              path: "kejadian",
              name: "incident",
              component: () => import("@/view/pages/report/Incident.vue"),
            },
            {
              path: "patroli",
              name: "patrol",
              component: () => import("@/view/pages/report/Index.vue"),
              children: [
                {
                  path: "",
                  name: "patrol-main",
                  component: () =>
                    import("@/view/pages/report/patrol/Patrol.vue"),
                },
                {
                  path: "detail/:id/:date",
                  name: "patrol-detail",
                  component: () =>
                    import("@/view/pages/report/patrol/DetailPatrol.vue"),
                },
              ],
            },
          ],
        },
        {
          path: "/employee",
          redirect: "/employee/list",
          name: "employee",
          component: () => import("@/view/pages/employee/Index.vue"),
          children: [
            {
              path: "list",
              name: "employee-list",
              component: () => import("@/view/pages/employee/List.vue"),
            },
            {
              path: "create",
              name: "employee-create",
              component: () => import("@/view/pages/employee/Employee.vue"),
            },
            {
              path: "edit/:id",
              name: "employee-edit",
              component: () => import("@/view/pages/employee/Employee.vue"),
            },
            {
              path: "view/:id",
              name: "employee-view",
              component: () => import("@/view/pages/employee/View.vue"),
            },
            {
              path: "import",
              name: "employee-import",
              component: () => import("@/view/pages/employee/Import.vue"),
            },
          ],
        },
        {
          path: "/customer",
          redirect: "/customer/list",
          name: "customer",
          component: () => import("@/view/pages/customer/Index.vue"),
          children: [
            {
              path: "list",
              name: "customer-list",
              component: () => import("@/view/pages/customer/List.vue"),
            },
            {
              path: "create",
              name: "customer-create",
              component: () => import("@/view/pages/customer/Customer.vue"),
            },
            {
              path: "edit/:id",
              name: "customer-edit",
              component: () => import("@/view/pages/customer/Customer.vue"),
            },
            {
              path: "branch",
              name: "branch",
              redirect: "/customer/branch/list",
              component: () => import("@/view/pages/customer/Index.vue"),
              children: [
                {
                  path: "list",
                  name: "customer-branch-list",
                  component: () =>
                    import("@/view/pages/customer/branch/List.vue"),
                },
                {
                  path: "create",
                  name: "customer-branch-create",
                  component: () => 
                    import("@/view/pages/customer/branch/Branch.vue"),
                },
                {
                  path: "edit/:id",
                  name: "customer-branch-edit",
                  component: () =>
                    import("@/view/pages/customer/branch/Branch.vue"),
                },
              ],
            },
            {
              path: "qr-code",
              name: "customer-qr-code",
              redirect: "/customer/qr-code/list",
              component: () => import("@/view/pages/customer/Index.vue"),
              children: [
                {
                  path: "list",
                  name: "qr-code-create",
                  component: () =>
                    import("@/view/pages/customer/QRCode/List.vue"),
                },
                {
                  path: "edit/:id",
                  name: "qr-code-edit",
                  component: () =>
                    import("@/view/pages/customer/QRCode/QRCode.vue"),
                },
                {
                  path: "view/:id",
                  name: "qr-code-view",
                  component: () =>
                    import("@/view/pages/customer/QRCode/View.vue"),
                },
              ],
            },
          ],
        },
        
        {
          path: "/brodcast",
          redirect: "/brodcast/list",
          name: "brodcast",
          component: () => import("@/view/pages/brodcast/Index.vue"),
          children: [
            {
              path: "list",
              name: "brodcast-list",
              component: () => import("@/view/pages/brodcast/List.vue"),
            },
            {
              path: "create",
              name: "brodcast-create",
              component: () => import("@/view/pages/brodcast/Create.vue"),
            },
          ],
        },
        {
          path: "/user",
          redirect: "/user/list",
          name: "user",
          component: () => import("@/view/pages/user/Index.vue"),
          children: [
            {
              path: "list",
              name: "user-list",
              component: () => import("@/view/pages/user/List.vue"),
            },
            {
              path: "create",
              name: "user-create",
              component: () => import("@/view/pages/user/User.vue"),
            },
            {
              path: "edit/:id",
              name: "user-edit",
              component: () => import("@/view/pages/user/User.vue"),
            },
          ],
        },
        {
          path: "/master",
          redirect: "/master/service",
          name: "master",
          component: () => import("@/view/pages/master/Index.vue"),
          children: [
            {
              path: "service",
              name: "master-service",
              component: () => import("@/view/pages/master/Index.vue"),
              children: [
                {
                  path: "",
                  name: "master-service-main",
                  component: () =>
                    import("@/view/pages/master/service/View.vue"),
                },
                {
                  path: "create",
                  name: "master-service-create",
                  component: () =>
                    import("@/view/pages/master/service/Create.vue"),
                },
                {
                  path: "edit/:id",
                  name: "master-service-edit",
                  component: () =>
                    import("@/view/pages/master/service/Edit.vue"),
                },
              ],
            },
            {
              path: "bank",
              name: "master-bank",
              component: () => import("@/view/pages/master/Index.vue"),
              children: [
                {
                  path: "",
                  name: "master-bank-main",
                  component: () => import("@/view/pages/master/bank/View.vue"),
                },
                {
                  path: "create",
                  name: "master-bank-create",
                  component: () =>
                    import("@/view/pages/master/bank/Create.vue"),
                },
                {
                  path: "edit/:id",
                  name: "master-bank-edit",
                  component: () => import("@/view/pages/master/bank/Edit.vue"),
                },
              ],
            },
            {
              path: "lvl-jabatan",
              name: "master-lvl-jabatan",
              component: () => import("@/view/pages/master/Index.vue"),
              children: [
                {
                  path: "",
                  name: "master-lvl-jabatan-main",
                  component: () =>
                    import("@/view/pages/master/lvl-jabatan/View.vue"),
                },
                {
                  path: "create",
                  name: "master-lvl-jabatan-create",
                  component: () =>
                    import("@/view/pages/master/lvl-jabatan/Create.vue"),
                },
                {
                  path: "edit/:id",
                  name: "master-lvl-jabatan-edit",
                  component: () =>
                    import("@/view/pages/master/lvl-jabatan/Edit.vue"),
                },
              ],
            },
            {
              path: "jabatan",
              name: "master-jabatan",
              component: () => import("@/view/pages/master/Index.vue"),
              children: [
                {
                  path: "",
                  name: "master-jabatan-main",
                  component: () =>
                    import("@/view/pages/master/jabatan/View.vue"),
                },
                {
                  path: "create",
                  name: "master-jabatan-create",
                  component: () =>
                    import("@/view/pages/master/jabatan/Create.vue"),
                },
                {
                  path: "edit/:id",
                  name: "master-jabatan-edit",
                  component: () =>
                    import("@/view/pages/master/jabatan/Edit.vue"),
                },
              ],
            },
            {
              path: "divisi",
              name: "master-divisi",
              component: () => import("@/view/pages/master/Index.vue"),
              children: [
                {
                  path: "",
                  name: "master-divisi-main",
                  component: () =>
                    import("@/view/pages/master/divisi/View.vue"),
                },
                {
                  path: "create",
                  name: "master-divisi-create",
                  component: () =>
                    import("@/view/pages/master/divisi/Create.vue"),
                },
                {
                  path: "edit/:id",
                  name: "master-divisi-edit",
                  component: () =>
                    import("@/view/pages/master/divisi/Edit.vue"),
                },
              ],
            },
            {
              path: "inisiasi",
              name: "master-inisiasi",
              component: () => import("@/view/pages/master/Index.vue"),
              children: [
                {
                  path: "",
                  name: "master-inisiasi-main",
                  component: () =>
                    import("@/view/pages/master/inisiasi/View.vue"),
                },
                {
                  path: "create",
                  name: "master-inisiasi-create",
                  component: () =>
                    import("@/view/pages/master/inisiasi/Create.vue"),
                },
                {
                  path: "edit/:id",
                  name: "master-inisiasi-edit",
                  component: () =>
                    import("@/view/pages/master/inisiasi/Edit.vue"),
                },
              ],
            },
            {
              path: "cabang",
              name: "master-cabang",
              component: () => import("@/view/pages/master/Index.vue"),
              children: [
                {
                  path: "",
                  name: "master-cabang-main",
                  component: () =>
                    import("@/view/pages/master/cabang/View.vue"),
                },
                {
                  path: "create",
                  name: "master-cabang-create",
                  component: () =>
                    import("@/view/pages/master/cabang/Create.vue"),
                },
                {
                  path: "edit/:id",
                  name: "master-cabang-edit",
                  component: () =>
                    import("@/view/pages/master/cabang/Edit.vue"),
                },
              ],
            },
            {
              path: "site-group",
              name: "master-site-group",
              component: () => import("@/view/pages/master/Index.vue"),
              children: [
                {
                  path: "",
                  name: "master-site-group-main",
                  component: () =>
                    import("@/view/pages/master/site-group/View.vue"),
                },
                {
                  path: "create",
                  name: "master-site-group-create",
                  component: () =>
                    import("@/view/pages/master/site-group/Create.vue"),
                },
                {
                  path: "edit/:id",
                  name: "master-site-group-edit",
                  component: () =>
                    import("@/view/pages/master/site-group/Edit.vue"),
                },
              ],
            },
          ],
        },
        {
          path: "/vue-bootstrap",
          name: "vue-bootstrap",
          component: () =>
            import("@/view/pages/vue-bootstrap/VueBootstrap.vue"),
          children: [
            {
              path: "alert",
              name: "vue-bootstrap-alert",
              component: () => import("@/view/pages/vue-bootstrap/Alert.vue"),
            },
            {
              path: "badge",
              name: "vue-bootstrap-badge",
              component: () => import("@/view/pages/vue-bootstrap/Badge.vue"),
            },
            {
              path: "button",
              name: "vue-bootstrap-button",
              component: () => import("@/view/pages/vue-bootstrap/Button.vue"),
            },
            {
              path: "button-group",
              name: "vue-bootstrap-button-group",
              component: () =>
                import("@/view/pages/vue-bootstrap/ButtonGroup.vue"),
            },
            {
              path: "button-toolbar",
              name: "vue-bootstrap-button-toolbar",
              component: () =>
                import("@/view/pages/vue-bootstrap/ButtonToolbar.vue"),
            },
            {
              path: "card",
              name: "vue-bootstrap-card",
              component: () => import("@/view/pages/vue-bootstrap/Card.vue"),
            },
            {
              path: "carousel",
              name: "vue-bootstrap-carousel",
              component: () =>
                import("@/view/pages/vue-bootstrap/Carousel.vue"),
            },
            {
              path: "collapse",
              name: "vue-bootstrap-collapse",
              component: () =>
                import("@/view/pages/vue-bootstrap/Collapse.vue"),
            },
            {
              path: "dropdown",
              name: "vue-bootstrap-dropdown",
              component: () =>
                import("@/view/pages/vue-bootstrap/Dropdown.vue"),
            },
            {
              path: "embed",
              name: "vue-bootstrap-embed",
              component: () => import("@/view/pages/vue-bootstrap/Embed.vue"),
            },
            {
              path: "form",
              name: "vue-bootstrap-form",
              component: () => import("@/view/pages/vue-bootstrap/Form.vue"),
            },
            {
              path: "form-checkbox",
              name: "vue-bootstrap-form-checkbox",
              component: () =>
                import("@/view/pages/vue-bootstrap/FormCheckbox.vue"),
            },
            {
              path: "form-file",
              name: "vue-bootstrap-form-file",
              component: () =>
                import("@/view/pages/vue-bootstrap/FormFile.vue"),
            },
            {
              path: "form-group",
              name: "vue-bootstrap-form-group",
              component: () =>
                import("@/view/pages/vue-bootstrap/FormGroup.vue"),
            },
            {
              path: "form-input",
              name: "vue-bootstrap-form-input",
              component: () =>
                import("@/view/pages/vue-bootstrap/FormInput.vue"),
            },
            {
              path: "form-radio",
              name: "vue-bootstrap-form-radio",
              component: () =>
                import("@/view/pages/vue-bootstrap/FormRadio.vue"),
            },
            {
              path: "form-select",
              name: "vue-bootstrap-form-select",
              component: () =>
                import("@/view/pages/vue-bootstrap/FormSelect.vue"),
            },
            {
              path: "form-textarea",
              name: "vue-bootstrap-form-textarea",
              component: () =>
                import("@/view/pages/vue-bootstrap/FormTextarea.vue"),
            },
            {
              path: "image",
              name: "vue-bootstrap-image",
              component: () => import("@/view/pages/vue-bootstrap/Image.vue"),
            },
            {
              path: "input-group",
              name: "vue-bootstrap-input-group",
              component: () =>
                import("@/view/pages/vue-bootstrap/InputGroup.vue"),
            },
            {
              path: "jumbotron",
              name: "vue-bootstrap-jumbotron",
              component: () =>
                import("@/view/pages/vue-bootstrap/Jumbotron.vue"),
            },
            {
              path: "layout-grid-system",
              name: "vue-bootstrap-layout-grid-system",
              component: () =>
                import("@/view/pages/vue-bootstrap/LayoutGridSystem.vue"),
            },
            {
              path: "link",
              name: "vue-bootstrap-link",
              component: () => import("@/view/pages/vue-bootstrap/Link.vue"),
            },
            {
              path: "list-group",
              name: "vue-bootstrap-list-group",
              component: () =>
                import("@/view/pages/vue-bootstrap/ListGroup.vue"),
            },
            {
              path: "media",
              name: "vue-bootstrap-media",
              component: () => import("@/view/pages/vue-bootstrap/Media.vue"),
            },
            {
              path: "modal",
              name: "vue-bootstrap-modal",
              component: () => import("@/view/pages/vue-bootstrap/Modal.vue"),
            },
            {
              path: "nav",
              name: "vue-bootstrap-nav",
              component: () => import("@/view/pages/vue-bootstrap/Nav.vue"),
            },
            {
              path: "navbar",
              name: "vue-bootstrap-navbar",
              component: () => import("@/view/pages/vue-bootstrap/Navbar.vue"),
            },
            {
              path: "pagination",
              name: "vue-bootstrap-pagination",
              component: () =>
                import("@/view/pages/vue-bootstrap/Pagination.vue"),
            },
            {
              path: "pagination-nav",
              name: "vue-bootstrap-pagination-nav",
              component: () =>
                import("@/view/pages/vue-bootstrap/PaginationNav.vue"),
            },
            {
              path: "notify-popover",
              name: "vue-bootstrap-popover",
              component: () => import("@/view/pages/vue-bootstrap/Popover.vue"),
            },
            {
              path: "notify-toasts",
              name: "vue-bootstrap-toasts",
              component: () => import("@/view/pages/vue-bootstrap/Toasts.vue"),
            },
            {
              path: "notify-tooltip",
              name: "vue-bootstrap-tooltip",
              component: () => import("@/view/pages/vue-bootstrap/Tooltip.vue"),
            },
            {
              path: "progress",
              name: "vue-bootstrap-progress",
              component: () =>
                import("@/view/pages/vue-bootstrap/Progress.vue"),
            },
            {
              path: "progress-spinner",
              name: "vue-bootstrap-spinner",
              component: () => import("@/view/pages/vue-bootstrap/Spinner.vue"),
            },
            {
              path: "table",
              name: "vue-bootstrap-table",
              component: () => import("@/view/pages/vue-bootstrap/Table.vue"),
            },
            {
              path: "tabs",
              name: "vue-bootstrap-tabs",
              component: () => import("@/view/pages/vue-bootstrap/Tabs.vue"),
            },
          ],
        },
        {
          path: "/vuetify",
          name: "vuetify",
          component: () => import("@/view/pages/vuetify/Vuetify.vue"),
          children: [
            {
              path: "alerts",
              name: "vuetify-alerts",
              component: () => import("@/view/pages/vuetify/Alerts.vue"),
            },
            {
              path: "avatars",
              name: "vuetify-avatars",
              component: () => import("@/view/pages/vuetify/Avatars.vue"),
            },
            {
              path: "badges",
              name: "vuetify-badges",
              component: () => import("@/view/pages/vuetify/Badges.vue"),
            },
            {
              path: "buttons",
              name: "vuetify-buttons",
              component: () => import("@/view/pages/vuetify/Buttons.vue"),
            },
            {
              path: "calendars",
              name: "vuetify-calendars",
              component: () => import("@/view/pages/vuetify/Calendars.vue"),
            },
            {
              path: "cards",
              name: "vuetify-cards",
              component: () => import("@/view/pages/vuetify/Cards.vue"),
            },
            {
              path: "chips",
              name: "vuetify-chips",
              component: () => import("@/view/pages/vuetify/Chips.vue"),
            },
            {
              path: "dialog",
              name: "vuetify-dialog",
              component: () => import("@/view/pages/vuetify/Dialog.vue"),
            },
            {
              path: "forms-autocompletes",
              name: "vuetify-autocompletes",
              component: () =>
                import("@/view/pages/vuetify/forms/Autocompletes.vue"),
            },
            {
              path: "forms-file-inputs",
              name: "vuetify-file-inputs",
              component: () =>
                import("@/view/pages/vuetify/forms/FileInputs.vue"),
            },
            {
              path: "forms",
              name: "vuetify-forms",
              component: () => import("@/view/pages/vuetify/forms/Forms.vue"),
            },
            {
              path: "forms-selection-controls",
              name: "vuetify-selection-controls",
              component: () =>
                import("@/view/pages/vuetify/forms/SelectionControls.vue"),
            },
            {
              path: "forms-selects",
              name: "vuetify-selects",
              component: () => import("@/view/pages/vuetify/forms/Selects.vue"),
            },
            {
              path: "forms-textareas",
              name: "vuetify-textareas",
              component: () =>
                import("@/view/pages/vuetify/forms/Textareas.vue"),
            },
            {
              path: "forms-text-fields",
              name: "vuetify-text-fields",
              component: () =>
                import("@/view/pages/vuetify/forms/TextFields.vue"),
            },
            {
              path: "tables-simple-tables",
              name: "vuetify-simple-tables",
              component: () =>
                import("@/view/pages/vuetify/tables/SimpleTables.vue"),
            },
            {
              path: "tables-data-tables",
              name: "vuetify-data-tables",
              component: () =>
                import("@/view/pages/vuetify/tables/DataTables.vue"),
            },
            {
              path: "tabs",
              name: "vuetify-tabs",
              component: () => import("@/view/pages/vuetify/Tabs.vue"),
            },
            {
              path: "timelines",
              name: "vuetify-timelines",
              component: () => import("@/view/pages/vuetify/Timelines.vue"),
            },
            {
              path: "tooltips",
              name: "vuetify-tooltips",
              component: () => import("@/view/pages/vuetify/Tooltips.vue"),
            },
            {
              path: "treeview",
              name: "vuetify-treeview",
              component: () => import("@/view/pages/vuetify/Treeview.vue"),
            },
          ],
        },
        {
          path: "/custom-wizard",
          name: "wizard",
          component: () => import("@/view/pages/wizard/Wizard.vue"),
          children: [
            {
              path: "wizard-1",
              name: "wizard-1",
              component: () => import("@/view/pages/wizard/Wizard-1.vue"),
            },
            {
              path: "wizard-2",
              name: "wizard-2",
              component: () => import("@/view/pages/wizard/Wizard-2.vue"),
            },
            {
              path: "wizard-3",
              name: "wizard-3",
              component: () => import("@/view/pages/wizard/Wizard-3.vue"),
            },
            {
              path: "wizard-4",
              name: "wizard-4",
              component: () => import("@/view/pages/wizard/Wizard-4.vue"),
            },
          ],
        },
        {
          path: "/custom-plugins",
          name: "plugins",
          component: () => import("@/view/pages/plugins/Plugins.vue"),
          children: [
            {
              path: "cropper",
              name: "cropper",
              component: () => import("@/view/pages/plugins/Cropper.vue"),
            },
            {
              path: "treeselect",
              name: "treeselect",
              component: () => import("@/view/pages/plugins/Treeselect.vue"),
            },
          ],
        },
        {
          path: "/profile",
          name: "profile",
          component: () => import("@/view/pages/profile/Profile.vue"),
          children: [
            {
              path: "profile-1",
              name: "profile-1",
              component: () => import("@/view/pages/profile/Profile-1.vue"),
            },
            {
              path: "profile-2",
              name: "profile-2",
              component: () => import("@/view/pages/profile/Profile-2.vue"),
            },
            {
              path: "profile-3",
              name: "profile-3",
              component: () => import("@/view/pages/profile/Profile-3.vue"),
            },
            {
              path: "profile-4",
              name: "profile-4",
              component: () => import("@/view/pages/profile/Profile-4.vue"),
            },
          ],
        },
      ],
    },
    {
      path: "/custom-error",
      name: "error",
      component: () => import("@/view/pages/error/Error.vue"),
      children: [
        {
          path: "error-1",
          name: "error-1",
          component: () => import("@/view/pages/error/Error-1.vue"),
        },
        {
          path: "error-2",
          name: "error-2",
          component: () => import("@/view/pages/error/Error-2.vue"),
        },
        {
          path: "error-3",
          name: "error-3",
          component: () => import("@/view/pages/error/Error-3.vue"),
        },
        {
          path: "error-4",
          name: "error-4",
          component: () => import("@/view/pages/error/Error-4.vue"),
        },
        {
          path: "error-5",
          name: "error-5",
          component: () => import("@/view/pages/error/Error-5.vue"),
        },
        {
          path: "error-6",
          name: "error-6",
          component: () => import("@/view/pages/error/Error-6.vue"),
        },
      ],
    },
    {
      path: "/",
      component: () => import("@/view/pages/auth/login_pages/Login-1"),
      children: [
        {
          name: "login",
          path: "/login",
          component: () => import("@/view/pages/auth/login_pages/Login-1"),
        },
        {
          name: "register",
          path: "/register",
          component: () => import("@/view/pages/auth/login_pages/Login-1"),
        },
      ],
    },
    {
      path: "*",
      redirect: "/404",
    },
    {
      // the 404 route, when none of the above matches
      path: "/404",
      name: "404",
      component: () => import("@/view/pages/error/Error-1.vue"),
    },
  ],
});
