<template>
    <v-container fluid class="container-spacing">
      <v-row class="grid-layout">
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
    height: calc(100vh - 54px);
    display: flex;
    justify-content: center;
    align-items: center;
}

.grid-layout {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  max-width: 800px;
  width: 100%;
}

.item-spacing {
    display: flex;
    align-items: center;
    padding: 40px;
}

.icon-spacing {
    margin-right: 16px;
}
</style>