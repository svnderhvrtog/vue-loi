<template>
  <v-container class="container-spacing">
    <v-card :elevation="3" class="settings-card">
      <h3>Kennisbase & documentatie</h3>
      <br>
      <v-list>
        <v-list-item v-for="doc in documents" :key="doc.id">
          <v-list-item-content>
            <v-list-item-title>{{ doc.title }}</v-list-item-title>
            <v-list-item-subtitle>Type: {{ doc.type }} | Categorie: {{ doc.category }} | Datum: {{ doc.date }}</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <br>
            <v-btn class="spacing button-styling" :href="doc.url" target="_blank">Open</v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>
  
<script>
  export default {
    name: 'Kennisbase',
    data() {
      return {
        documents: [
          { id: 1, title: "Normblad Inspecties", type: "PDF", category: "Normen", date: "01-02-2024", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
          { id: 2, title: "Testprocedure Installaties", type: "Handleiding", category: "Technisch", date: "15-01-2024", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
          { id: 3, title: "Handleiding Inspectie App", type: "PDF", category: "Software", date: "10-03-2024", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
          { id: 4, title: "Protocol Brandveiligheid", type: "Reglement", category: "Veiligheid", date: "05-12-2023", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
        ],
      };
    },
  };
</script>
  
<style scoped>
.container-spacing {
    padding-top: 80px;
    padding-bottom: 80px;
}

.settings-card {
    padding: 20px;
    border-radius: 12px;
}

.spacing {
  margin-block-start: 8px;
  margin-block-end: 16px;
}

.button-styling {
  color: white;
  background-color: #17A798;
}
</style>