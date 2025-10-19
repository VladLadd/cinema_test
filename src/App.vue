<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'

const theme = ref('dark')
let drawer = ref(false)
let items = ref([
  {
    title: 'Фильмы',
    value: 'films',
    icon: 'mdi-movie',
    route: '/films',
  },
  {
    title: 'Кинотеатры',
    value: 'cinemas',
    icon: 'mdi-theater',
    route: '/cinema',
  },
  {
    title: 'Мои билеты',
    value: 'tickets',
    icon: 'mdi-ticket',
    route: '/tickets',
  },
  {
    title: 'Вход',
    value: 'auth',
    icon: 'mdi-login',
    route: '/',
  },
])

function onClick() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <v-responsive class="border rounded">
    <v-app :theme="theme">
      <v-navigation-drawer v-model="drawer" temporary>
        <v-list :items="items">
          <v-list-item
            v-for="item in items"
            :key="item.value"
            :to="item.route"
            :prepend-icon="item.icon"
          >
            {{ item.title }}
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar class="px-3">
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-spacer></v-spacer>

        <v-btn icon slim @click="onClick">
          <v-icon>{{ theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night' }}</v-icon>
        </v-btn>
      </v-app-bar>

      <v-main>
        <v-container>
          <RouterView />
        </v-container>
      </v-main>
    </v-app>
  </v-responsive>
</template>

<style scoped></style>
