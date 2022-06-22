<template>
  <div
    class="v-application v-application--is-ltr theme--light menuable__content__active"
  >
    <!--begin:: Add Employee-->
    <div class="row gutter-b">
      <div class="col-md-6">
        <b-card header-tag="header" footer-tag="footer">
          <template v-slot:header>
            <h6 class="mb-0">Profile Employee</h6>
          </template>
          <div class="row">
            <div class="col-md-6 pl-0 pr-2">
              <div class="mb-4">
                <h6 class="mb-1">NIP <span class="text-danger">*</span></h6>
                <b-form-input
                  v-model="employee.nip"
                  placeholder="Masukan NIP anda"
                  required
                ></b-form-input>
              </div>
              <div class="mb-4">
                <h6 class="mb-1">Tempat Lahir</h6>
                <b-form-input
                  v-model="employee.placeBirth"
                  placeholder="Masukan tempat lahir anda"
                ></b-form-input>
              </div>
              <div style="margin-bottom: 35px">
                <h6 class="mb-1">
                  Jenis Kelamin <span class="text-danger">*</span>
                </h6>
                <div class="d-flex" style="gap: 8px">
                  <b-form-radio v-model="employee.gender" name="jk" value="pria"
                    >Pria</b-form-radio
                  >
                  <b-form-radio
                    v-model="employee.gender"
                    name="jk"
                    value="wanita"
                    >Wanita</b-form-radio
                  >
                </div>
              </div>
              <div class="mb-4">
                <h6 class="mb-1">No E-KTP</h6>
                <b-form-input
                  v-model="employee.ktp"
                  placeholder="Masukan no E-KTP anda"
                ></b-form-input>
              </div>
              <div class="mb-4">
                <h6 class="mb-1">Nama Bank</h6>
                <b-form-select
                  v-model="employee.nameBank"
                  :options="optionBank"
                ></b-form-select>
              </div>
              <div class="mb-4">
                <h6 class="mb-1">No NPWP</h6>
                <b-form-input
                  v-model="employee.npwp"
                  placeholder="Masukan no NPWP anda"
                ></b-form-input>
              </div>
              <div class="mb-4">
                <h6 class="mb-1">Email <span class="text-danger">*</span></h6>
                <b-form-input
                  v-model="employee.email"
                  placeholder="Masukan email anda"
                ></b-form-input>
              </div>
              <div class="mb-4">
                <h6 class="mb-1">Alamat</h6>
                <b-form-input
                  v-model="employee.address"
                  placeholder="Masukan alamat anda"
                ></b-form-input>
              </div>
              <div class="mb-4">
                <h6 class="mb-1">Suku</h6>
                <b-form-input
                  v-model="employee.suku"
                  placeholder="Masukan suku anda"
                ></b-form-input>
              </div>
              <div class="mb-4">
                <h6 class="mb-1">Foto</h6>
                <b-form-file
                  placeholder="Choose a file..."
                  id="choose-foto"
                  v-model="employee.foto"
                  @change="handelFoto"
                  class="mb-2"
                ></b-form-file>
              </div>
            </div>
            <div class="col-md-6 pr-0">
              <div class="mb-4">
                <h6 class="mb-1">Nama <span class="text-danger">*</span></h6>
                <b-form-input
                  v-model="employee.name"
                  placeholder="Masukan nama anda"
                ></b-form-input>
              </div>
              <div class="mb-4">
                <h6 class="mb-1">
                  Tanggal Lahir <span class="text-danger">*</span>
                </h6>
                <b-form-input
                  type="date"
                  v-model="employee.dateBirth"
                  placeholder="Masukan tanggal lahir anda"
                ></b-form-input>
              </div>
              <div class="mb-4">
                <h6 class="mb-1">
                  Golongan Darah <span class="text-danger">*</span>
                </h6>
                <b-form-select
                  v-model="employee.bloodType"
                  :options="optionBloodType"
                ></b-form-select>
              </div>
              <div class="mb-4">
                <h6 class="mb-1">No KK</h6>
                <b-form-input
                  v-model="employee.kk"
                  placeholder="Masukan no KK anda"
                ></b-form-input>
              </div>
              <div class="mb-4">
                <h6 class="mb-1">No Rekening</h6>
                <b-form-input
                  v-model="employee.dateBirth"
                  placeholder="Masukan nomer rekening anda"
                ></b-form-input>
              </div>
              <div class="mb-4">
                <h6 class="mb-1">Agama</h6>
                <b-form-select
                  v-model="employee.religion"
                  :options="optionReligion"
                ></b-form-select>
              </div>
              <div class="mb-4">
                <h6 class="mb-1">
                  No Telepon <span class="text-danger">*</span>
                </h6>
                <b-form-input
                  v-model="employee.phone"
                  placeholder="Masukan nomer telepon anda"
                ></b-form-input>
              </div>
              <div class="mb-4">
                <h6 class="mb-1">Status Perkawinan</h6>
                <b-form-input
                  v-model="employee.relationshipStatus"
                  placeholder="Masukan status perkawinan anda"
                ></b-form-input>
              </div>
              <div class="mb-4">
                <h6 class="mb-1">Pendidikan Terakhir</h6>
                <b-form-input
                  v-model="employee.lastEducation"
                  placeholder="Pendidikan terakhir"
                ></b-form-input>
              </div>
              <div class="mb-4" v-if="previewUrl">
                <h6 class="mb-1">Preview</h6>
                <img
                  :src="previewUrl"
                  width="100px"
                  style="border-radius: 8px"
                />
              </div>
            </div>
          </div>
        </b-card>
      </div>
      <div class="col-md-6">
        <b-card header-tag="header" footer-tag="footer" class="gutter-b">
          <template v-slot:header>
            <h6 class="mb-0">Assignment</h6>
          </template>
          <div class="row">
            <div class="col-md-12">
              <div class="mb-4">
                <h6 class="mb-1">Site Group (Customer)</h6>
                <b-form-select
                  v-model="assignment.siteGroup"
                  :options="optionSiteGroup"
                ></b-form-select>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="mb-4">
                <h6 class="mb-1">Site (Customer Detail)</h6>
                <b-form-select
                  v-model="assignment.site"
                  :options="optionSite"
                  value-field="id"
                  text-field="nama_client"
                ></b-form-select>
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-4">
                <h6 class="mb-1">Shift</h6>
                <b-form-select
                  v-model="assignment.shift"
                  :options="optionShift"
                ></b-form-select>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="mb-4">
                <h6 class="mb-1">Divisi <span class="text-danger">*</span></h6>
                <b-form-select
                  v-model="assignment.divisi"
                  :options="optionDivisi"
                ></b-form-select>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="mb-4">
                <h6 class="mb-1">
                  Application User <span class="text-danger">*</span>
                </h6>
                <b-form-select
                  v-model="assignment.applicationUser"
                  :options="optionAppUser"
                  value-field="id"
                  text-field="nama"
                ></b-form-select>
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-4">
                <h6 class="mb-1">
                  Supervisor Name <span class="text-danger">*</span>
                </h6>
                <b-form-select
                  v-model="assignment.supervisorName"
                  :options="optionSupervisorName"
                  value-field="id"
                  text-field="nama"
                ></b-form-select>
              </div>
            </div>
          </div>
        </b-card>
        <b-card header-tag="header" footer-tag="footer">
          <template v-slot:header>
            <h6 class="mb-0">Kontrak Kerja</h6>
          </template>
          <div class="row">
            <div class="col-md-6">
              <div class="mb-4">
                <h6 class="mb-1">No Kontrak</h6>
                <b-form-input
                  v-model="employmentContract.noContract"
                  placeholder="Masukan no kontrak anda"
                ></b-form-input>
              </div>
              <div class="mb-4">
                <h6 class="mb-1">Mulai Kontrak</h6>
                <b-form-input
                  type="date"
                  v-model="employmentContract.startContract"
                  placeholder="Masukan mulai kontrak anda"
                ></b-form-input>
              </div>
              <div class="mb-4">
                <h6 class="mb-1">
                  Area Kerja <span class="text-danger">*</span>
                </h6>
                <b-form-select
                  v-model="assignment.workArea"
                  :options="optionWorkArea"
                ></b-form-select>
              </div>
              <div class="mb-4">
                <h6 class="mb-1">Keluar/Resign</h6>
                <b-form-input
                  type="date"
                  v-model="employmentContract.out"
                  placeholder="Masukan keluar/resign anda"
                ></b-form-input>
              </div>
              <div class="mb-4">
                <h6 class="mb-1">Jenis KTA</h6>
                <b-form-input
                  v-model="employmentContract.typeKTA"
                  placeholder="Masukan jenis kta anda"
                ></b-form-input>
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-4">
                <h6 class="mb-1">Status Kontrak</h6>
                <b-form-select
                  v-model="assignment.statusContract"
                  :options="optionStatusContract"
                ></b-form-select>
              </div>
              <div class="mb-4">
                <h6 class="mb-1">Akhir Kontrak</h6>
                <b-form-input
                  type="date"
                  v-model="employmentContract.endContract"
                  placeholder="Masukan akhir kontrak anda"
                ></b-form-input>
              </div>
              <div class="mb-4">
                <h6 class="mb-1">Jabatan</h6>
                <b-form-select
                  v-model="assignment.position"
                  :options="optionPosition"
                  value-field="id"
                  text-field="nama"
                ></b-form-select>
              </div>
              <div class="mb-4">
                <h6 class="mb-1">No KTA</h6>
                <b-form-input
                  v-model="employmentContract.noKTA"
                  placeholder="Masukan no KTA anda"
                ></b-form-input>
              </div>
            </div>
          </div>
        </b-card>
      </div>
    </div>
    <div class="row justify-content-center gutter-b">
      <div class="col-md-2">
        <b-button variant="primary" class="w-100">Submit</b-button>
      </div>
    </div>
    <!--end:: Add Employee-->
  </div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
export default {
  name: "Employee",
  data() {
    return {
      // PROFILE EMPLOYEE
      previewUrl: null,
      employee: {
        nip: "",
        name: "",
        placeBirth: "",
        dateBirth: "",
        gender: "",
        bloodType: "",
        ktp: "",
        kk: "",
        nameBank: "",
        noRek: "",
        npwp: "",
        religion: "",
        email: "",
        phone: "",
        address: "",
        relationshipStatus: "",
        suku: "",
        lastEducation: "",
        foto: null,
      },
      optionBloodType: [
        {
          value: "",
          text: "Pilih golongan darah",
        },
        {
          value: "A",
          text: "A",
        },
        {
          value: "AB",
          text: "AB",
        },
        {
          value: "B",
          text: "B",
        },
        {
          value: "O",
          text: "O",
        },
      ],
      optionBank: [
        { value: "", text: "Pilih Bank" },
        { value: "mandiri", text: "Bank Mandiri" },
        { value: "bca", text: "BCA" },
      ],
      optionReligion: [
        { value: "", text: "Pilih Agama" },
        { value: "islam", text: "Islam" },
        { value: "protestan", text: "Protestan" },
        { value: "katolik", text: "Katolik" },
        { value: "hindu", text: "Hindu" },
        { value: "budha", text: "Budha" },
        { value: "konghucu", text: "Kong Hu Cu" },
      ],
      // SITE GROUP CUSTOMER
      assignment: {
        siteGroup: "",
        site: "",
        shift: "",
        divisi: "",
        applicationUser: "",
        supervisorName: "",
      },
      optionSiteGroup: [
        { value: "", text: "Pilih Site Group" },
        { value: "hindu", text: "Hindu" },
        { value: "budha", text: "Budha" },
        { value: "konghucu", text: "Kong Hu Cu" },
      ],
      optionSite: [
        { id: "", nama_client: "Pilih Site" },
        { id: 2, nama_client: "BNI Cibaregbeg" },
        { id: 1, nama_client: "BNI Mampang" },
      ],
      optionShift: [
        { value: "", text: "Pilih shift" },
        { value: "hindu", text: "Hindu" },
        { value: "budha", text: "Budha" },
        { value: "konghucu", text: "Kong Hu Cu" },
      ],
      optionDivisi: [
        { value: "", text: "Pilih divisi" },
        { value: "marketing", text: "Marketing" },
        { value: "operational", text: "Operational" },
      ],
      optionAppUser: [
        { id: "", nama: "Pilih application user" },
        { id: 14, nama: "Tax Manager" },
        { id: 19, nama: "HR Staff" },
        { id: 20, nama: "Finance Staff" },
        { id: 21, nama: "Ops Staff" },
        { id: 4, nama: "Direktur" },
        { id: 23, nama: "Komisaris" },
        { id: 7, nama: "General Manager Support" },
        { id: 6, nama: "General Manager Operational" },
        { id: 11, nama: "Operational Manager" },
        { id: 8, nama: "HR Manager" },
        { id: 9, nama: "Finance Manager" },
        { id: 12, nama: "AR Manager" },
        { id: 13, nama: "AP Manager" },
        { id: 10, nama: "Accounting Manager" },
        { id: 15, nama: "IT Manager" },
        { id: 18, nama: "GA Supervisor" },
        { id: 16, nama: "Koordinator Lapangan Cheif" },
        { id: 25, nama: "Komandan Regu (Danru)" },
        { id: 17, nama: "Adm Manager" },
        { id: 26, nama: "Adm Supervisor" },
        { id: 27, nama: "Adm Staff" },
        { id: 22, nama: "Staff Level Aps (Only)" },
      ],
      optionSupervisorName: [
        { id: "", nama: "Pilih nama supervisor" },
        { id: 3669, nama: "ZZ Feri (Danru)" },
        { id: 4176, nama: "Julika Siregar" },
        { id: 3795, nama: "DANURWEDA" },
        { id: 4392, nama: "Setyo Budi" },
        { id: 4389, nama: "Rianto" },
        { id: 4182, nama: "RADHITYA" },
        { id: 4179, nama: "Ikhsan" },
        { id: 3997, nama: "IBNU NUGROHO" },
        { id: 4369, nama: "Ervan Fathoni" },
        { id: 4014, nama: "AHMAD BUSTAMI" },
        { id: 4371, nama: "Gunawan" },
        { id: 3994, nama: "RUSNA APPU" },
        { id: 4008, nama: "MUHAMMAD TOHA" },
        { id: 4013, nama: "ADIS MUHADIS" },
        { id: 4020, nama: "YANA SURYANA" },
        { id: 4175, nama: "John" },
        { id: 4017, nama: "SUNDARI WIJAYA SUKMANA" },
        { id: 4367, nama: "Edy Sutrisno" },
        { id: 3700, nama: "HERWINDRA BARATA" },
        { id: 4019, nama: "WILSON DJANGU" },
        { id: 3808, nama: "IKA YUNI ASTANTI" },
        { id: 3717, nama: "FIKRI TAUFIQ ASSEGAF" },
        { id: 3776, nama: "AMAN SIMAMORA" },
        { id: 4378, nama: "Misran" },
        { id: 4355, nama: "Asep Supriadi" },
        { id: 4016, nama: "IDRIS" },
        { id: 3741, nama: "B. VICTORIOUS FEBER" },
        { id: 4383, nama: "Mujiono" },
        { id: 4359, nama: "Budi Wahyu Dwi R" },
        { id: 4395, nama: "Totok Hari Santoso" },
        { id: 5733, nama: "YOHANES KRISMA UNGGUL PRASETYA" },
        { id: 5560, nama: "Endang Arohman" },
        { id: 4352, nama: "Amat Tohirin" },
        { id: 4357, nama: "Benekditus Antonius Sukirman" },
        { id: 4354, nama: "Aris Sutiawan" },
        { id: 4362, nama: "Darso" },
        { id: 4358, nama: "Budi Setiono" },
        { id: 4015, nama: "HARTONO" },
        { id: 4364, nama: "Deden Rustandi" },
        { id: 4370, nama: "Faqih Abdullah" },
        { id: 4379, nama: "Miyanto" },
        { id: 5318, nama: "MAJA UTAMA" },
        { id: 4377, nama: "Min Hajul Qowim" },
        { id: 4388, nama: "Rahmat Iskandar" },
        { id: 3950, nama: "Ardiansyah" },
        { id: 4372, nama: "Handika Sushendratmo" },
        { id: 4393, nama: "Suswandi" },
        { id: 4398, nama: "Untung Sunarto" },
        { id: 4399, nama: "Wayan Suparta" },
        { id: 4375, nama: "Kasmani" },
        { id: 4401, nama: "Gunadi" },
        { id: 5464, nama: "M. Ichwan K" },
        { id: 4403, nama: "Mutia Andani" },
        { id: 4402, nama: "Ma'Mur Syarif" },
        { id: 5756, nama: "Gusri Meldi" },
        { id: 4376, nama: "Mariyanto" },
        { id: 4366, nama: "Didin Miranto" },
        { id: 4384, nama: "Muryanto" },
        { id: 4394, nama: "Sutarso" },
        { id: 4356, nama: "Bambang Dwiyatno" },
        { id: 5504, nama: "Sudianto" },
        { id: 4382, nama: "Mugiyono" },
        { id: 4018, nama: "UNTUNG WIDODO" },
        { id: 4361, nama: "Daroji" },
        { id: 4207, nama: "RUDOLPH O PELAPELAPON" },
        { id: 5274, nama: "Dedi Nasril" },
        { id: 4387, nama: "Rahman Eka Prayogi" },
        { id: 5299, nama: "Ahmad Robin K" },
        { id: 5319, nama: "TAUFIK HIDAYAH" },
        { id: 5322, nama: "Putut Unvikta" },
        { id: 5335, nama: "Dedi Nasril" },
        { id: 5341, nama: "ADANG SUBANDI" },
        { id: 5382, nama: "Riki Johansyah" },
        { id: 5403, nama: "M. Nasrullah" },
        { id: 4373, nama: "Hery Kriswanto" },
        { id: 5451, nama: "Eko Budiarso" },
        { id: 5467, nama: "Abdulah" },
        { id: 4350, nama: "Ade Arusjen" },
        { id: 5466, nama: "Abdul Azis" },
        { id: 5485, nama: "Marhadi Efendi" },
        { id: 5516, nama: "Sugandi" },
        { id: 5528, nama: "Wawan Hermawan" },
        { id: 5541, nama: "Muhammad Restu" },
        { id: 5547, nama: "Salim" },
        { id: 4390, nama: "Rohim" },
        { id: 5573, nama: "Arip" },
        { id: 5563, nama: "Sudiana" },
        { id: 5585, nama: "Slamet Rahayu" },
        { id: 4363, nama: "Dasuki" },
        { id: 5405, nama: "Yondi Irawan" },
        { id: 5609, nama: "Jejen Syafriyuddin" },
        { id: 5626, nama: "Bahaudin" },
        { id: 5283, nama: "MUKHAMAD JAMIL" },
        { id: 4397, nama: "Ucok Eryanto" },
        { id: 4374, nama: "Iif Irfan Syafe'I" },
        { id: 4360, nama: "Candidus Sutardjo" },
        { id: 5515, nama: "Yayan Suryana" },
        { id: 5425, nama: "Hadra" },
        { id: 5580, nama: "Haryadi" },
        { id: 4385, nama: "Nindyo Wrehatnolo" },
        { id: 5411, nama: "Fajar Bahari" },
        { id: 4381, nama: "Mokhamad Kafidin" },
        { id: 4351, nama: "Ade Matriana" },
        { id: 5273, nama: "NANANG KOSIM" },
        { id: 5639, nama: "Bagiyo Prayitno" },
        { id: 5635, nama: "Hosnan" },
        { id: 5636, nama: "Sumindar" },
        { id: 5637, nama: "Gunawan Hari Kartono" },
        { id: 5638, nama: "Rio Ditya Resman" },
        { id: 5248, nama: "ISWANDI" },
        { id: 4365, nama: "Dedi Suhendar" },
        { id: 4380, nama: "Mochamad Wali Fatma" },
        { id: 4400, nama: "Yoga Yudistia Assa" },
        { id: 4391, nama: "Santoso" },
        { id: 4396, nama: "Tusiran" },
        { id: 4353, nama: "Ardian Trilaksono" },
        { id: 4368, nama: "Endra Nuswantoro" },
      ],
      // KONTRAK KERJA
      employmentContract: {
        noContract: "",
        startContract: "",
        workArea: "",
        out: "",
        typeKTA: "",
        //
        statusContract: "",
        endContract: "",
        position: "",
        noKTA: "",
      },
      optionWorkArea: [
        { value: "", text: "Pilih Area Kerja" },
        { value: "jakarta", text: "TDP Jakarta" },
        { value: "bandung", text: "TDP Bandung" },
      ],
      //
      optionStatusContract: [
        { value: "", text: "Pilih Status Contract" },
        { value: "pkwt", text: "PKWT" },
        { value: "pkwtt", text: "PKWTT" },
      ],
      optionPosition: [
        { id: "", nama: "Pilih application user" },
        { id: 14, nama: "Tax Manager" },
        { id: 19, nama: "HR Staff" },
        { id: 20, nama: "Finance Staff" },
        { id: 21, nama: "Ops Staff" },
      ],
    };
  },
  components: {},
  computed: {},
  mounted() {
    let lastBreadcrumb = {};
    if (this.$route.name === "employee-edit")
      lastBreadcrumb = { title: "Edit Employee" };
    else lastBreadcrumb = { title: "Add Employee" };
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Dashboard", route: "/dashboard" },
      { title: "Employee", route: "/employee" },
      lastBreadcrumb,
    ]);
  },
  created() {},
  methods: {
    handelFoto(e) {
      const file = e.target.files[0];
      this.previewUrl = URL.createObjectURL(file);
    },
  },
};
</script>
