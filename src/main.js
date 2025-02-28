import { createApp } from 'vue'
import App from './App.vue'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

import { VApp, VBtn, VIcon, VBottomNavigation, VAppBar, VAppBarTitle, VSheet } from 'vuetify/components'  // Voeg hier componenten toe

const vuetify = createVuetify({
  components: {
    VApp,
    VBtn,
    VIcon,
    VBottomNavigation,
    VAppBar,
    VAppBarTitle,
    VSheet
  }
})

createApp(App)
  .use(vuetify)
  .mount('#app')