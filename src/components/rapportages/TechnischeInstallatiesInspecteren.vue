<template>
  <v-container>
    <v-form>
      <v-text-field label="Locatie" v-model="installationData.technicalInstallationlocation" />
      <v-select label="Soort installatie" v-model="installationData.technicalInstallationType" 
        :items="[
          { text: 'Koeling', value: 'koeling' },
          { text: 'Verwarming', value: 'verwarming' },
          { text: 'Luchtverversing', value: 'luchtverversing' },
          { text: 'Elektra', value: 'elektra' },
          { text: 'Beveiliging', value: 'beveiliging' }
        ]" 
        item-title="text"
        item-value="value"
      />
      <v-textarea label="Gemelde storingen" v-model="installationData.technicalInstallationReportedIssues" />
      <v-file-input label="Testprocedure (PDF)" v-model="installationData.technicalInstallationTestprocedure" accept=".pdf" />
      <v-radio-group label="Goedgekeurd" v-model="installationData.technicalInstallationApproved">
        <v-radio label="Goedgekeurd" value="ja" />
        <v-radio label="Niet goedgekeurd" value="nee" />
      </v-radio-group>
      <v-textarea label="Opmerkingen" v-model="installationData.technicalInstallationComments" />
    </v-form>
  </v-container>
</template>

<script>
  export default {
    name: 'TechnischeInstallatiesInspecteren',
    props: {
    modelValue: {
      type: Object,
      default: () => ({
        technicalInstallationlocation: '',
        technicalInstallationType: '',
        technicalInstallationReportedIssues: '',
        technicalInstallationTestprocedure: '',
        technicalInstallationApproved: '',
        technicalInstallationComments: ''
      })
    }
  },
  computed: {
    installationData: {
      get() {
        return this.modelValue;
      },
      set(newValue) {
        this.$emit('update:modelValue', newValue);
      }
    }
  }
  };
</script>