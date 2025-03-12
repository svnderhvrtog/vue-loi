<template>
  <v-container class="container-spacing">
    <v-card :elevation="3" class="settings-card">
      <v-row justify="center">
        <v-col cols="12" md="8" lg="6">
          <h3>Instellingen</h3>
          <br>
          <div class="avatar-section">
              <v-avatar size="80" class="avatar-wrapper" @click="changeAvatar">
              <img :src="settings.avatar" alt="Avatar" />
              <v-icon class="camera-icon">mdi-camera</v-icon>
              </v-avatar>
          </div>
          <v-text-field v-model="settings.name" label="Naam" prepend-icon="mdi-account" />
          <v-text-field v-model="settings.email" label="E-mail" prepend-icon="mdi-email" type="email" />
          <v-text-field v-model="settings.password" label="Nieuw wachtwoord" prepend-icon="mdi-lock" type="password" />
          <hr>
          <h4 class="section-title">Systeem voorkeuren</h4>
          <p>Dark mode</p>
          <v-switch v-model="settings.darkMode" class="apple-toggle"></v-switch>
          <p>Meldingen</p>
          <v-switch v-model="settings.notifications" class="apple-toggle"></v-switch>
          <p>Geluid</p>
          <v-switch v-model="settings.sound" class="apple-toggle"></v-switch>
          <v-card-actions class="justify-center">
            <v-btn class="button-styling" @click="saveSettings">Instellingen opslaan</v-btn>
          </v-card-actions>
          <v-alert v-if="successMessage" type="success" dismissible class="mx-4 my-3">
            {{ successMessage }}
          </v-alert>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
  export default {
    name: 'Instellingen',
    data() {
      return {
        settings: {
          name: "Roos Hartog",
          email: "roos-hartog@gmail.com",
          password: "veilig2024",
          avatar: "https://store.playstation.com/store/api/chihiro/00_09_000/container/NL/nl/99/EP1004-CUSA08519_00-AV00000000000003/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=150&h=150",
          darkMode: false,
          notifications: true,
          sound: true,
        },
        successMessage: "",
      };
    },
    created() {
      this.loadSettings();
    },
    methods: {
      saveSettings() {
        localStorage.setItem("userSettings", JSON.stringify(this.settings));
        this.successMessage = "Instellingen succesvol opgeslagen!";
      },
      loadSettings() {
        const savedSettings = localStorage.getItem("userSettings");
        if (savedSettings) {
          this.settings = JSON.parse(savedSettings);
        }
      },
      changeAvatar() {
        const newAvatar = prompt("Geef een nieuwe avatar URL op:");
        if (newAvatar) {
          this.settings.avatar = newAvatar;
        }
      }
    },
  };
</script>
  
<style scoped>
  .container-spacing {
      padding-top: 80px;
      padding-bottom: 80px;
  }
    
  .settings-card {
      padding: 20px;
      border-radius: 12px;
  }

  .v-switch {
      padding-left: 8%;
  }
    
  .avatar-section {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-top: -16px;
    padding-bottom: 16px;
  }

  .avatar-wrapper {
    position: relative;
    cursor: pointer;
  }

  .avatar-wrapper img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  .camera-icon {
    position: absolute;
    bottom: 5px;
    right: 30px;
    color: white;
    padding: 5px;
    font-size: 18px;
  }
    
  .section-title {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 10px;
  }
    
  .apple-toggle {
      transform: scale(1.2);
  }
    
  .justify-center {
      display: flex;
      justify-content: center;
  }

  .button-styling {
    color: white;
    background-color: #17A798;
  }

  hr {
    margin-block-start: 8px;
    margin-block-end: 16px;
  }
</style>