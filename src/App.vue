<template>
  <v-app>
    <HeaderBar />
    <Home />
    <InspectieLijst />
    <TabBar />
  </v-app>
</template>

<script>
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';
import HeaderBar from '@/shared/HeaderBar.vue';
import TabBar from '@/shared/TabBar.vue';
import Home from '@/components/Home.vue';
import ToegewezenRapportages from '@/components/ToegewezenRapportages.vue';
import UitgevoerdeRapportages from '@/components/UitgevoerdeRapportages.vue';
import Kennisbase from '@/components/Kennisbase.vue';
import Instellingen from '@/components/Instellingen.vue';
import InspectieLijst from '@/components/InspectieLijst.vue';

export default {
  components: {
    HeaderBar,
    TabBar,
    Home,
    InspectieLijst,
    ToegewezenRapportages,
    UitgevoerdeRapportages,
    Kennisbase,
    Instellingen
  }
};
</script>

<style scoped>
</style>
