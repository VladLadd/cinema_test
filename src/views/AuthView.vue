<template>
    <v-container fill-height>
        <v-row align="center" justify="center" class="h-100">
            <v-col cols="12" sm="8" md="4">
                <span class="login-title">Вход</span>
                <v-form @submit.prevent="submit">
                    <v-text-field
                            v-model="login"
                            label="Логин"
                            variant="outlined"
                            class="login-input"
                            required
                            color="white"
                            autocomplete="username"
                            hide-details
                    />
                    <v-text-field
                            v-model="password"
                            label="Пароль"
                            type="password"
                            variant="outlined"
                            :error="showError"
                            :append-inner-icon="showError ? 'mdi-alert-circle-outline' : undefined"
                            aria-label="Password"
                            color="white"
                            autocomplete="current-password"
                            class="login-input"
                            @blur="validate"
                    >
                        <template #error>
                            <div v-if="showError" class="input-error">Введите пароль</div>
                        </template>
                    </v-text-field>
                    <v-btn type="submit" class="login-btn" block>Войти</v-btn>
                </v-form>
                <div class="register-link">
                    Если у вас нет аккаунта <span class="underline">зарегистрируйтесь</span>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const login = ref('');
const password = ref('');
const showError = ref(false);

function validate() {
    showError.value = !password.value;
}

function submit() {
    validate();
    if (!login.value || !password.value) return;
    // your sign in logic
}
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
.v-text-field--error .v-field__outline  {
    border-color: #de6161 !important; /* light red shade on error */
}
</style>
