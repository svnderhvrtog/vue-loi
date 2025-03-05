<template>
    <v-container fluid class="container-spacing">
      <v-row>
        <v-col v-for="(item, index) in items" :key="index">
          <v-sheet :elevation="2" class="item-spacing">
            <v-icon size="64" class="icon-spacing">{{ item.icon }}</v-icon>
            <div>{{ item.name }}</div>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
</template>
  
<script>
  export default {
    name: 'Home',
    data() {
      return {
        items: [
          { name: 'Toegewezen rapportages', icon: 'mdi-badge-account-horizontal-outline' },
          { name: 'Uitgevoerde rapportages openen', icon: 'mdi-check-decagram-outline' },
          { name: 'Kennisbase/documentatie', icon: 'mdi-text-box-outline' },
          { name: 'Instellingen', icon: 'mdi-cog-outline' },
        ]
      };
    }
  };
</script>
  
<style scoped>
.container-spacing {
    padding-top: 60px; 
    padding-bottom: 60px;
}

.item-spacing {
    display: flex;
    align-items: center;
    padding: 32px;
}

.icon-spacing {
    margin-right: 16px;
}
</style>