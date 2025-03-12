<template>
  <v-container>
    <v-form>
      <v-file-input label="Bestaande situatie en reeds gedocumenteerde modificaties (PDF)" v-model="modificationsData.modificationExistingSituation" accept=".pdf" />
      <v-text-field label="Locatie aangetroffen modificatie" v-model="modificationsData.modificationLocation" />
      <v-select label="Uitgevoerd door" v-model="modificationsData.modificationModifiedBy" 
        :items="[
          { text: 'Huurder', value: 'huurder' },
          { text: 'Aannemer', value: 'aannemer' },
          { text: 'Onbekend', value: 'onbekend' }
        ]" 
        item-title="text"
        item-value="value"
      />
      <v-textarea label="Beschrijving modificatie" v-model="modificationsData.modificationDescription" />
      <v-select label="Te ondernemen actie" v-model="modificationsData.modificationActionRequired" 
        :items="[
          { text: 'Accepteren', value: 'accepteren' },
          { text: 'Laten keuren', value: 'laten keuren' },
          { text: 'Laten verwijderen', value: 'laten verwijderen' },
          { text: 'Laten aanpassen en keuren', value: 'laten aanpassen en keuren' }
        ]" 
        item-title="text"
        item-value="value"
      />
      <v-textarea label="Opmerkingen" v-model="modificationsData.modificationComments" />
    </v-form>
  </v-container>
</template>

<script>
  export default {
    name: 'ModificatiesInventariseren',
    props: {
    modelValue: {
      type: Object,
      default: () => ({
        modificationExistingSituation: '',
        modificationLocation: '',
        modificationModifiedBy: '',  
        modificationDescription: '',
        modificationActionRequired: '',
        modificationComments: ''
      })
    }
    },
    computed: {
      modificationsData: {
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