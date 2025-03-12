<template>
  <v-bottom-navigation v-model="activeTab" grow class="bg-blue-grey-darken-4 text-white">
    <v-btn to="/" :class="{ 'active-btn': activeTab === 'home' }">
      <v-icon>mdi-home-outline</v-icon>
    </v-btn>
    <v-btn to="/toegewezen-rapportages" :class="{ 'active-btn': activeTab === 'toegewezen-rapportages' }">
      <v-icon>mdi-badge-account-horizontal-outline</v-icon>
    </v-btn>
    <v-btn to="/uitgevoerde-rapportages" :class="{ 'active-btn': activeTab === 'uitgevoerde-rapportages' }">
      <v-icon>mdi-check-decagram-outline</v-icon>
    </v-btn>
    <v-btn to="/kennisbase" :class="{ 'active-btn': activeTab === 'kennisbase' }">
      <v-icon>mdi-text-box-outline</v-icon>
    </v-btn>
    <v-btn to="/instellingen" :class="{ 'active-btn': activeTab === 'instellingen' }">
      <v-icon>mdi-cog-outline</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
  export default {
    name: "TabBar",
    data() {
      return {
        activeTab: this.$route.name,
      };
    },
    watch: {
      $route(to) {
        this.activeTab = to.name;
      },
    },
  };
</script>

<style scoped>
  .v-btn {
    color: white !important;
    transition: background-color 0.3s ease;
  }

  .active-btn, .v-btn.v-btn--active {
    background-color: #17A798 !important;
    color: white !important;
  }
</style>
