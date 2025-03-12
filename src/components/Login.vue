<template>
  <v-container class="container-spacing">
    <v-card class="login-card">
      <h3>Inloggen</h3>
      <v-card-text>
        <v-form @submit.prevent="handleLogin">
          <v-text-field v-model="username" label="Gebruikersnaam" required />
          <v-text-field v-model="password" label="Wachtwoord" type="password" required />
          <v-btn color="primary spacing" type="submit">Inloggen</v-btn>
        </v-form>
        <v-form v-if="authStore.twoFA" @submit.prevent="verify2FA">
          <v-text-field v-model="twoFACode" label="2FA Code" required />
          <v-btn color="secondary" type="submit">Verifieer 2FA</v-btn>
        </v-form>
        <v-alert v-if="errorMessage" type="error">{{ errorMessage }}</v-alert>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
  import { ref, watch } from 'vue';
  import { useRouter } from 'vue-router';
  import { useAuthStore } from '@/stores/authStore';

  const authStore = useAuthStore();
  const router = useRouter();

  const username = ref('');
  const password = ref('');
  const twoFACode = ref('');
  const errorMessage = ref('');

  const handleLogin = async () => {
    const success = await authStore.login(username.value, password.value);
    if (!success) {
      errorMessage.value = 'Ongeldige inloggegevens!';
    }
  };

  const verify2FA = async () => {
    const verified = await authStore.verify2FA(twoFACode.value);
    if (verified) {
      router.push('/');
    } else {
      errorMessage.value = 'Ongeldige 2FA-code!';
    }
  };

  watch(() => authStore.twoFA, (newValue) => {
    if (!newValue && authStore.isAuthenticated) {
      router.push('/');
    }
  });
</script>

<style scoped>
  .container-spacing {
      padding-top: 80px;
      padding-bottom: 80px;
  }

  .login-card {
      max-width: 400px;
      margin: auto;
      padding: 20px;
      text-align: center;
  }

  .spacing {
    margin-bottom: 16px;
  }
</style>