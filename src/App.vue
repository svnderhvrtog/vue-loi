<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/Logo1.png" width="125" height="125" />
    <h1>Opzet van Webapplicatie voor RealEstateCare</h1>
  </header>

  <main>
    <ToegewezenRapportages />
    <UitgevoerdeRapportages />
    <Kennisbase />
    <Instellingen />
  </main>
</template>

<script setup>
import ToegewezenRapportages from './components/ToegewezenRapportages.vue'
import UitgevoerdeRapportages from './components/UitgevoerdeRapportages.vue'
import Kennisbase from './components/Kennisbase.vue'
import Instellingen from './components/Instellingen.vue'
</script>

<style scoped>
header {
  padding-top: 5%;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  main {
    display: block;
  }
}
</style>