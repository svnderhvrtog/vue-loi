<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="Dit is m'n eerste vue app" />
      <HelloWorld name="Van: Sander" />
    </div>
  </header>

  <main>
    <HelloWorld />
    <CustomerList/>
    <Visitors visitor1="Jan" visitor2="Piet"/>
  </main>
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
import CustomerList from './components/CustomerList.vue'
import Visitors from './components/Visitors.vue'
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
