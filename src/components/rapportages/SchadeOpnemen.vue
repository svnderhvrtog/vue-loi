<template>
  <v-container>
    <v-form>
      <v-text-field label="Locatie" v-model="damageData.damageLocation"/>
      <v-select 
        label="Schade type" 
        v-model="damageData.damageType"
        :items="[
          { text: 'Moedwillig', value: 'moedwillig' },
          { text: 'Slijtage', value: 'slijtage' },
          { text: 'Geweld', value: 'geweld' },
          { text: 'Normaal gebruik', value: 'normaalGebruik' },
          { text: 'Calamiteit', value: 'calamiteit' },
          { text: 'Anders', value: 'anders' }
        ]"
        item-title="text"
        item-value="value"
      />
      <v-date-picker label="Datum" v-model="damageData.damageDate"></v-date-picker>
      <v-radio-group label="Acute actie vereist" v-model="damageData.damageAcuteActionRequired">
        <v-radio label="Ja" value="ja" />
        <v-radio label="Nee" value="nee" />
      </v-radio-group>
      <v-textarea label="Omschrijving" v-model="damageData.damageDescription" />
    </v-form>
  </v-container>
</template>

<script>
  export default {
    name: 'SchadeOpnemen',
    props: {
      modelValue: {
        type: Object,
        default: () => ({
          damageLocation: '',
          damageType: '',
          damageDate: '',
          damageAcuteActionRequired: '',
          damageDescription: ''
        })
      }
    },
    computed: {
      damageData: {
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