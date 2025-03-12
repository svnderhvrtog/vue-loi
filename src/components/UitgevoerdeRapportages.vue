<template>
  <v-container class="container-spacing">
    <v-card :elevation="3" class="settings-card">
      <h3>Uitgevoerde rapportages</h3>
      <br>
    </v-card>
    <v-row>
      <v-col v-for="inspection in inspections" :key="inspection.id" cols="12">
        <v-sheet :elevation="2" class="item-spacing" @click="showInspectionDetails(inspection)">
          <v-icon size="64" class="icon-spacing">mdi-file-document-outline</v-icon>
          <div>
            <div><strong>ID:</strong> {{ inspection.id }}</div>
            <div v-if="inspection.damageData.damageLocation">
              <strong>Locatie:</strong> {{ inspection.damageData.damageLocation }}
            </div>
            <div v-else-if="inspection.maintenanceData.maintenanceLocation">
              <strong>Locatie:</strong> {{ inspection.maintenanceData.maintenanceLocation }}
            </div>
            <div v-else-if="inspection.installationData && inspection.installationData.technicalInstallationlocation">
              <strong>Locatie:</strong> {{ inspection.installationData.technicalInstallationlocation || 'Geen locatie beschikbaar' }}
            </div>
            <div v-else-if="inspection.modificationsData.modificationLocation">
              <strong>Locatie:</strong> {{ inspection.modificationsData.modificationLocation || 'Geen locatie beschikbaar' }}
            </div>
            <div><strong>Type(s):</strong> {{ getInspectionTypes(inspection) }}</div>
          </div>
        </v-sheet>
        <v-row v-if="selectedInspection && selectedInspection.id === inspection.id">
          <v-col>
            <v-sheet class="item-spacing-2" :elevation="2">
              <h3>Details van Inspectie</h3>
              <p><strong>ID:</strong> {{ selectedInspection.id }}</p>
              <p><strong>Locatie:</strong> {{ getLocation(selectedInspection) }}</p>
              <p><strong>Type(s):</strong> {{ getInspectionTypes(selectedInspection) }}</p>
              <p><strong>Beschrijving en opmerking(en):</strong><br> {{ selectedInspection.damageData.damageDescription || selectedInspection.modificationsData.modificationComments || selectedInspection.installationData.technicalInstallationComments || 'Geen beschrijving of opmerkingen beschikbaar' }}</p>
              <v-btn class="button-styling" @click="editInspection">Bewerken</v-btn>
            </v-sheet>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import axios from "axios";

  export default {
    name: 'UitgevoerdeRapportages',
    data() {
      return {
        inspections: [],
        selectedInspection: null,
      };
    },
    methods: {
      async fetchInspections() {
        try {
          const response = await axios.get("https://my-json-server.typicode.com/svnderhvrtog/vue-loi/inspections");
          this.inspections = response.data;
          console.log("Fetched inspections:", this.inspections);
        } catch (error) {
          console.error("Fout bij ophalen van inspecties:", error);
        }
      },
      showInspectionDetails(inspection) {
        this.selectedInspection = this.selectedInspection?.id === inspection.id ? null : inspection;
      },
      getLocation(inspection) {
        if (inspection.damageData && inspection.damageData.damageLocation) {
          return inspection.damageData.damageLocation;
        } else if (inspection.maintenanceData && inspection.maintenanceData.maintenanceLocation) {
          return inspection.maintenanceData.maintenanceLocation;
        } else if (inspection.installationData && inspection.installationData.technicalInstallationlocation) {
          return inspection.installationData.technicalInstallationlocation;
        } else if (inspection.modificationsData && inspection.modificationsData.modificationLocation) {
          return inspection.modificationsData.modificationLocation;
        }
        return "Onbekend";
      },
      getInspectionTypes(inspection) {
        const types = [];
        if (inspection.selectedOptions.schadeOpnemen) types.push("Schade");
        if (inspection.selectedOptions.achterstalligOnderhoud) types.push("Onderhoud");
        if (inspection.selectedOptions.technischeInstallaties) types.push("Installatie");
        if (inspection.selectedOptions.modificatiesInventariseren) types.push("Modificatie");
        return types.length ? types.join(", ") : "Onbekend";
      },
      editInspection() {
        alert("Bewerken (nog) niet geïmplementeerd");
      },
    },
    mounted() {
      this.fetchInspections();
    },
  };
</script>

<style scoped>
  .container-spacing {
    padding-top: 80px;
    padding-bottom: 80px;
  }

  .settings-card {
      padding-block-start: 20px;
      padding-inline: 20px;
      border-radius: 12px;
      margin-bottom: 20px;
  }

  .item-spacing {
    display: flex;
    gap: 16px;
    align-items: center;
    padding: 24px;
  }

  .item-spacing-2 {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 24px;
  }

  .icon-spacing {
    margin-right: 16px;
  }

  .button-styling {
    color: white;
    background-color: #17A798;
  }
</style>