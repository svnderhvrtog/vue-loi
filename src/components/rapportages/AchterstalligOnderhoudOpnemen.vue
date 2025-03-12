<template>
  <v-container>
    <v-form>
      <v-text-field label="Locatie" v-model="maintenanceData.maintenanceLocation" />
      <v-select label="Soort onderhoud" v-model="maintenanceData.maintenanceType" 
        :items="[
          { text: 'Schilderwerk', value: 'schilderwerk' },
          { text: 'Houtrot', value: 'houtrot' },
          { text: 'Elektra', value: 'elektra' },
          { text: 'Leidingwerk', value: 'leidingwerk' },
          { text: 'Beglazing', value: 'beglazing' }
        ]"  
        item-title="text"
        item-value="value"
      />
      <v-radio-group label="Acute actie vereist" v-model="maintenanceData.maintenanceAcuteActionRequired">
        <v-radio label="Ja" value="ja" />
        <v-radio label="Nee" value="nee" />
      </v-radio-group>
      <v-select label="Kostenindicatie" v-model="maintenanceData.maintenanceCostEstimate"
        :items="[
          { text: '0-500', value: '0-500' },
          { text: '500-1500', value: '500-1500' },
          { text: '1500+', value: '1500+' }
        ]"
        item-title="text"
        item-value="value"
      />
    </v-form>
  </v-container>
</template>
  
<script>
  export default {
    name: 'AchterstalligOnderhoudOpnemen',
    props: {
    modelValue: {
      type: Object,
      default: () => ({
        maintenanceLocation: '',
        maintenanceType: '',
        maintenanceAcuteActionRequired: '',
        maintenanceCostEstimate: ''
      })
    }
  },
  computed: {
    maintenanceData: {
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