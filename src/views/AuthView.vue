<template>
  <v-container fill-height>
    <v-row align="center" justify="center" class="h-100">
      <v-col cols="12" sm="8" md="4">
        <span class="login-title">{{ isLogin ? 'Вход' : 'Регистрация' }}</span>
        <v-form @submit.prevent="submit">
          <v-text-field
            v-model="loginField"
            label="Логин"
            variant="outlined"
            class="login-input"
            :rules="[rules.required, rules.min, rules.latinAlphanumeric]"
            color="white"
            autocomplete="username"
          />
          <v-text-field
            v-model="passwordField"
            label="Пароль"
            :type="showPass ? 'text' : 'password'"
            variant="outlined"
            :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min, rules.hasUppercase, rules.hasDigit]"
            aria-label="Password"
            color="white"
            autocomplete="current-password"
            class="login-input"
            @blur="validate"
            @click:append="showPass = !showPass"
          >
          </v-text-field>
          <v-text-field
            v-if="!isLogin"
            v-model="passwordConfirmField"
            label="Пароль"
            :type="showPassConf ? 'text' : 'password'"
            variant="outlined"
            :append-icon="showPassConf ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.match]"
            aria-label="Password"
            color="white"
            class="login-input"
            @blur="validate"
            @click:append="showPassConf = !showPassConf"
          >
          </v-text-field>
          <v-btn type="submit" class="login-btn" block @click="submitForm">{{
            isLogin ? 'Войти' : 'Зарегистрироваться'
          }}</v-btn>
        </v-form>
        <div class="register-link" v-if="isLogin">
          Если у вас нет аккаунта
          <router-link :to="'/registration'" class="underline">зарегистрируйтесь</router-link>
        </div>
        <div class="register-link" v-else>
          Если у вас есть аккаунт
          <router-link :to="'/'" class="underline">войдите</router-link>
        </div>
      </v-col>

      {{ cinemas }}
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { computed, onMounted, type Ref, ref } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'

const route = useRoute()
const loginField = ref('')
const passwordField = ref('')
const passwordConfirmField = ref('')
const showError = ref(false)
const showPass = ref(false)
const showPassConf = ref(false)

function validate() {
  showError.value = !passwordField.value
}

function submit() {
  validate()
  if (!loginField.value || !passwordField.value) return
  // your sign in logic
}
function login() {
  axios
    .post('/api/login', {
      username: loginField.value,
      password: passwordField.value,
    })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
}
function register() {
  axios
    .post('/api/register', {
      username: loginField.value,
      password: passwordField.value,
    })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
  // your register logic
}
const isLogin = computed(() => {
  return route.name === 'login'
})

function submitForm() {
  if (isLogin.value) {
    login()
  } else {
    register()
  }
}
type RuleFn = (value: string) => boolean | string

function matchPasswordRule(password: Ref<string>) {
  return (confirm: string) => confirm === password.value || 'Пароли должны совпадать'
}

const rules = {
  required: (value: string) => !!value || 'Обязательное поле',
  min: (v: string) => v.length >= 8 || 'Минимум 8 символов',
  hasUppercase: (value: string) => /[A-Z]/.test(value) || 'Минимум одна заглавная буква',
  hasDigit: (value: string) => /\d/.test(value) || 'Минимум одна цифра',
  match: matchPasswordRule(passwordField),
  latinAlphanumeric: (value: string) =>
    /^[a-zA-Z0-9]+$/.test(value) || 'Только латинские буквы и цифры',
}
const cinemas = onMounted(async () => {
  return await axios
    .get('/api/cinemas')
    .then((response) => {
      console.log(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>

<style scoped>
.login-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  font-family: inherit;
}
.login-input {
  margin-bottom: 1.5rem;
}
.input-error {
  color: #ffbbbb;
  font-size: 1rem;
  margin-top: -1rem;
  margin-bottom: 1.5rem;
}
.login-btn {
  color: #fff;
  border: 1px solid #fff;
  background: transparent;
  margin-top: 1rem;
  font-size: 1.1rem;
}
.register-link {
  margin-top: 3rem;
  text-align: center;
  font-size: 1.5rem;
}
.underline {
  text-decoration: underline;
  cursor: pointer;
}
.v-text-field--error input,
.v-text-field--error .v-field__outline {
  border-color: #de6161 !important; /* light red shade on error */
}
</style>
