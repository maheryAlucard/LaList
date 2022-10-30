<template>
  <v-row justify="center" align="center">
    <v-card class="login-container">
      <v-col align="center">
        <NuxtLogo />
        <v-card-title class="my-title headline">
          Welcome to LaListe
        </v-card-title>
      </v-col>
      <v-col>
        <v-text-field
          type="email"
          label="Email"
          outlined
          append-icon="mdi-email-outline"
          :value="uEmail"
        ></v-text-field>
        <v-text-field
          :value="uEmail"
          :type="showPassword ? 'text' : 'password'"
          label="Password"
          outlined
          :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
          @click:append="swithPassVew"
        ></v-text-field>

        <v-btn class="bt-login" depressed color="primary" @click="logUser">
          Login
        </v-btn>
      </v-col>
    </v-card>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  data: () => {
    return {
      uEmail: '',
      uPassword: '',
      showPassword: false,
    }
  },
  methods: {
    swithPassVew() {
      this.showPassword = !this.showPassword
    },
    logUser() {
      console.log(this.uEmail, this.uPassword)
    },
  },
}
</script>

<style>
.my-title {
  text-align: center;
}
.login-container {
  max-width: 420px;
}
.bt-login {
  width: 100%;
}
</style>
