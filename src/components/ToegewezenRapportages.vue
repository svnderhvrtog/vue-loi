<template>
  <v-container class="container-spacing">
    <v-card elevation="3" class="settings-card">
      <h3>Toegewezen rapportages</h3>
      <br>
      <v-row>
        <v-col>
          <v-checkbox v-model="selectedOptions.schadeOpnemen" label="Schade opnemen" />
          <v-checkbox v-model="selectedOptions.achterstalligOnderhoud" label="Achterstallig onderhoud opnemen" />
          <v-checkbox v-model="selectedOptions.technischeInstallaties" label="Technische installaties inspecteren" />
          <v-checkbox v-model="selectedOptions.modificatiesInventariseren" label="Modificaties inventariseren" />
        </v-col>
      </v-row>
      <SchadeOpnemen v-if="selectedOptions.schadeOpnemen" v-model="damageData" />
      <AchterstalligOnderhoud v-if="selectedOptions.achterstalligOnderhoud" v-model="maintenanceData" />
      <TechnischeInstallaties v-if="selectedOptions.technischeInstallaties" v-model="installationData" />
      <ModificatiesInventariseren v-if="selectedOptions.modificatiesInventariseren" v-model="modificationsData" />
      <v-file-input v-model="photo" label="Foto's toevoegen" />
      <v-btn @click="submitForm" class="button-styling spacing">Verzend Rapportage</v-btn>
      <v-alert v-if="successMessage" type="success" dismissible class="spacing">
        {{ successMessage }}
      </v-alert>
      <v-alert v-if="errorMessage" type="error" dismissible class="spacing">
        {{ errorMessage }}
      </v-alert>
    </v-card>
  </v-container>
</template>

<script>
  import SchadeOpnemen from "@/components/rapportages/SchadeOpnemen.vue";
  import AchterstalligOnderhoud from "@/components/rapportages/AchterstalligOnderhoudOpnemen.vue";
  import TechnischeInstallaties from "@/components/rapportages/TechnischeInstallatiesInspecteren.vue";
  import ModificatiesInventariseren from "@/components/rapportages/ModificatiesInventariseren.vue";
  import { submitInspection } from "@/services/inspectionService.js";
  
  export default {
    name: 'ToegewezenRapportages',
    components: {
      SchadeOpnemen,
      AchterstalligOnderhoud,
      TechnischeInstallaties,
      ModificatiesInventariseren
    },
    data() {
      return {
        selectedOptions: {
          schadeOpnemen: false,
          achterstalligOnderhoud: false,
          technischeInstallaties: false,
          modificatiesInventariseren: false,
        },
        damageData: { damageLocation: "", damageType: "", damageDate: new Date(), damageAcuteActionRequired: "", damageDescription: "" },
        maintenanceData: { maintenanceLocation: "", maintenanceType: "", maintenanceAcuteActionRequired: "", maintenanceCostEstimate: "" },
        installationData: { technicalInstallationlocation: "", technicalInstallationType: "", technicalInstallationReportedIssues: "", technicalInstallationTestprocedure: null, technicalInstallationApproved: "", technicalInstallationComments: "" },
        modificationsData: { modificationExistingSituation: null, modificationLocation: "", modificationModifiedBy: "", modificationDescription: "", modificationActionRequired: "", modificationComments: "" },
        photo: null,
        successMessage: "",
        errorMessage: ""
      };
    },
    methods: {
      async submitForm() {
        const formData = {
          selectedOptions: this.selectedOptions,
          damageData: this.damageData,
          maintenanceData: this.maintenanceData,
          installationData: this.installationData,
          modificationsData: this.modificationsData,
          photo: this.photo
        };
        try {
          const response = await submitInspection(formData);
          console.log("Rapportage succesvol verzonden:", response);
          this.successMessage = "Rapportage succesvol verzonden!";
          this.errorMessage = "";
        } catch (error) {
          console.error("Er is een fout opgetreden bij het verzenden van de rapportage:", error);
          this.errorMessage = "Er is een fout opgetreden bij het verzenden van de rapportage.";
          this.successMessage = "";
        }
      }
    }
  };
</script>

<style scoped>
  .container-spacing {
    padding-top: 80px;
    padding-bottom: 60px;
  }

  .settings-card {
      padding: 20px;
      border-radius: 12px;
  }

  .spacing {
    margin-bottom: 16px;
  }

  .button-styling {
    color: white;
    background-color: #17A798;
  }
</style>