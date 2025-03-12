import { createApp } from 'vue';
import App from './App.vue';
import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';
import router from '@/router';
import { createPinia } from 'pinia';

import { 
  VApp, VBtn, VIcon, VBottomNavigation, VAppBar, VAppBarTitle, VSheet, 
  VContainer, VRow, VCol, VCheckbox, VTextField, VSelect, VDatePicker, 
  VFileInput, VRadio, VRadioGroup, VTextarea, VForm, VAlert, VListItem, 
  VCard, VCardText, VCardActions, VAvatar, VDivider, VListItemTitle, 
  VSwitch, VList 
} from 'vuetify/components';  

const vuetify = createVuetify({
  components: {
    VApp, VBtn, VIcon, VBottomNavigation, VAppBar, VAppBarTitle, VSheet,
    VContainer, VRow, VCol, VCheckbox, VTextField, VSelect, VDatePicker,
    VFileInput, VRadio, VRadioGroup, VTextarea, VForm, VAlert, VDivider,
    VAvatar, VListItemTitle, VSwitch, VList, VListItem, VCard, VCardText, VCardActions,
  }
});

const pinia = createPinia();

createApp(App)
  .use(vuetify)
  .use(router)
  .use(pinia)
  .mount('#app');