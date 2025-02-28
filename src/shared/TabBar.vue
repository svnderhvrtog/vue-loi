<template>
  <v-bottom-navigation v-model="activeTab" grow class="bg-blue-grey-darken-4 text-white">
    <v-btn value="home" :class="{ 'active-btn': activeTab === 'home' }">
      <v-icon>mdi-home-outline</v-icon>
    </v-btn>
  
    <v-btn value="toegewezen-rapportages" :class="{ 'active-btn': activeTab === 'toegewezen-rapportages' }">
      <v-icon>mdi-badge-account-horizontal-outline</v-icon>
    </v-btn>
  
    <v-btn value="uitgevoerde-rapportages-openen" :class="{ 'active-btn': activeTab === 'uitgevoerde-rapportages-openen' }">
      <v-icon>mdi-check-decagram-outline</v-icon>
    </v-btn>
  
    <v-btn value="kennisbase-documentatie" :class="{ 'active-btn': activeTab === 'kennisbase-documentatie' }">
      <v-icon>mdi-text-box-outline</v-icon>
    </v-btn>
  
    <v-btn value="instellingen" :class="{ 'active-btn': activeTab === 'instellingen'}">
      <v-icon>mdi-cog-outline</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
    export default {
        name: 'TabBar',
        data() {
            return {
                activeTab: "home",
            }
        }
    }
</script>

<style scoped>
.v-btn {
  color: white !important;
  transition: background-color 0.3s ease;
}

.active-btn {
  background-color: #17A798 !important;
  color: rgb(255, 255, 255) !important;
}
</style>