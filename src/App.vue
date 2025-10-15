<script setup lang="ts">
import { ref } from 'vue'
import {RouterView} from "vue-router";

const theme = ref('dark')

function onClick () {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
    <v-responsive class="border rounded">
        <v-app :theme="theme">
            <v-navigation-drawer>
                <v-list>
                    <v-list-item title="Navigation drawer"></v-list-item>
                </v-list>
            </v-navigation-drawer>
            <v-app-bar class="px-3">
                <v-spacer></v-spacer>

                <v-btn
                        :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
                        text="Toggle Theme"
                        slim
                        @click="onClick"
                ></v-btn>
            </v-app-bar>

            <v-main>
                <v-container>
                    <RouterView />
                </v-container>
            </v-main>
        </v-app>
    </v-responsive>
</template>

<style scoped>
</style>
