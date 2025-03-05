<template>
    <v-container class="container-spacing">
      <v-row>
        <v-col v-for="(inspection, index) in sortedInspections" :key="inspection.id">
          <v-sheet :elevation="2" class="item-spacing" @click="showInspectionDetails(inspection)">
            <v-icon size="64" class="icon-spacing">
              {{ inspection.type === 'Schade' ? 'mdi-bug' : 'mdi-wrench' }}
            </v-icon>
            <div class="fixed-width">
              <div class="spacing">{{ inspection.date }}</div>
              <div>{{ inspection.location }}</div>
            </div>
            <div>
              <div class="spacing">{{ inspection.description }}</div>
              <v-btn size="small" rounded="xl" variant="tonal" color="warning" v-if="inspection.urgent">Urgent</v-btn>
            </div>
          </v-sheet>
          <v-row v-if="selectedInspection && selectedInspection.id === inspection.id">
            <v-col>
              <v-sheet class="item-spacing-2" :elevation="2">
                <h3>Details van Inspectie</h3>
                <p><strong>Locatie:</strong> {{ inspection.location }}</p>
                <p><strong>Type:</strong> {{ inspection.type }}</p>
                <p><strong>Beschrijving:</strong> {{ inspection.description }}</p>
                <p><strong>Datum:</strong> {{ inspection.date }}</p>
                <p>
                    <strong>Urgent:</strong> 
                    <span v-if="inspection.urgent"> Ja</span>
                    <span v-else> Nee</span>
                </p>
                <p>
                    <strong>Foto's:</strong> 
                    <span v-if="inspection.photos.length > 0"> Beschikbaar </span>
                    <span v-else> Niet beschikbaar</span>
                </p>
              </v-sheet>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
</template>
  
<script>
    import { getInspections } from "@/services/inspectionService";
  
    export default {
      name: "InspectionsList",
      data() {
        return {
          inspections: [],
          sortedInspections: [],
          selectedInspection: null
        };
      },
      methods: {
        async fetchInspections() {
          try {
            const data = await getInspections();
            this.inspections = data;
            this.sortedInspections = data.sort((a, b) => new Date(b.date) - new Date(a.date));
          } catch (error) {
            console.error("Er is een fout opgetreden bij het ophalen van de inspecties:", error);
          }
        },
        showInspectionDetails(inspection) {
          if (this.selectedInspection && this.selectedInspection.id === inspection.id) {
            this.selectedInspection = null;
          } else {
            this.selectedInspection = inspection;
          }
        }
      },
      mounted() {
        this.fetchInspections();
      }
    };
</script>
  
<style scoped>
.container-spacing {
    display: flex;
    flex-direction: column;
    padding-top: 0px; 
    margin-top: -65px;
    margin-bottom: 50px;
    gap: 16px;
}

.item-spacing {
    display: flex;
    gap: 24px;
    align-items: center;
    padding: 40px;
    cursor: pointer;
}

.item-spacing-2 {
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;
    padding-inline: 48px;
    padding-block: 24px;
    cursor: pointer;
}

.icon-spacing {
    margin-right: 16px;
}

.fixed-width {
    width: 160px;
}

.spacing {
    padding-block-end: 8px;
}
</style>