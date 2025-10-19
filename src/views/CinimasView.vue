<template>
  <v-container fill-height>
    <v-data-table
      :header="headers"
      :items="movies"
      class="movie-data-table"
      hide-default-footer
    >
      <template v-slot:item.image="{ item }">
        <v-icon size="40" color="white">mdi-image-outline</v-icon>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-btn variant="outlined" color="white" class="show-btn" rounded>
          Посмотреть сеансы
        </v-btn>
      </template>
    </v-data-table>
  </v-container>
</template>

<script setup lang="ts">
const headers = [
  { text: '', value: 'image', width: 60 },
  { text: 'Название', value: 'title' },
  { text: 'Продолжительность', value: 'duration', align: 'center' },
  { text: 'Рейтинг', value: 'rating', align: 'center' },
  { text: '', value: 'actions', sortable: false, align: 'center', width: 210 }
]

const movies = [
  { id: 1, title: 'Мстители', duration: '2:20', rating: '4.21' },
  { id: 2, title: 'Темный рыцарь', duration: '1:45', rating: '4.79' }
]
</script>

<style scoped>

</style>
