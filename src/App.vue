<template>
  <v-app>
    <HeaderBar />
    <router-view />
    <TabBar />
  </v-app>
</template>

<script>
  import 'vuetify/styles';
  import '@mdi/font/css/materialdesignicons.css';
  import HeaderBar from '@/shared/HeaderBar.vue';
  import TabBar from '@/shared/TabBar.vue';

  export default {
    components: {
      HeaderBar,
      TabBar,
    }
  };
</script>