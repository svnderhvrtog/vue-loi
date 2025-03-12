<template>
  <v-container class="container-spacing">
    <v-row>
      <v-col v-for="(item, index) in items" :key="index" class="item-card">
        <router-link :to="item.route" class="no-decoration">
          <v-sheet :elevation="2" class="item-spacing">
            <v-icon size="64" class="icon-spacing">{{ item.icon }}</v-icon>
            <div>{{ item.name }}</div>
          </v-sheet>
        </router-link>
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
          { name: 'Toegewezen rapportages', icon: 'mdi-badge-account-horizontal-outline', route: '/toegewezen-rapportages' },
          { name: 'Uitgevoerde rapportages', icon: 'mdi-check-decagram-outline', route: '/uitgevoerde-rapportages' },
          { name: 'Kennisbase', icon: 'mdi-text-box-outline', route: '/kennisbase' },
          { name: 'Instellingen', icon: 'mdi-cog-outline', route: '/instellingen' }
        ]
      };
    }
  };
</script>

<style scoped>
  .container-spacing {
      padding-top: 80px; 
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

  .no-decoration {
    text-decoration: none;
    color: inherit;
  }
</style>