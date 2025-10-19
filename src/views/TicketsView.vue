<template>
  <v-container fill-height>
  <div class="tickets-title">Мои билеты</div>
  <div v-for="section in sections" :key="section.title">
    <div class="section-title">{{ section.title }}</div>
    <v-divider class="section-divider"></v-divider>
    <div v-for="(ticket, idx) in section.tickets" :key="idx" class="ticket-block">
      <div class="ticket-row">
        <div class="ticket-info">
          <div class="movie-title">{{ ticket.movie }}</div>
          <div class="cinema-title">{{ ticket.cinema }}</div>
          <div class="ticket-date">{{ ticket.date }}</div>
        </div>
        <div class="ticket-seats">
          <div v-for="(seat, i) in ticket.seats" :key="i" class="seat-row">
            {{ seat }}
          </div>
        </div>
        <div v-if="section.title === 'Не оплаченные'" class="pay-col">
          <v-btn variant="outlined" color="white" class="pay-btn">Оплатить</v-btn>
        </div>
        <div v-if="section.title === 'Не оплаченные'" class="left-col">
          Осталось {{ ticket.left }}
        </div>
      </div>
    </div>
  </div>
  </v-container>
</template>

<script setup lang="ts">
const sections = [
  {
    title: 'Не оплаченные',
    tickets: [
      {
        movie: 'Мстители',
        cinema: 'Skyline Cinema',
        date: '24.03  22:15',
        seats: ['Ряд 1, место 1', 'Ряд 1, место 2'],
        left: '2:59'
      }
    ]
  },
  {
    title: 'Будущие',
    tickets: [
      {
        movie: 'Мстители',
        cinema: 'Skyline Cinema',
        date: '24.03  22:15',
        seats: ['Ряд 1, место 1', 'Ряд 1, место 2']
      },
      {
        movie: 'Темный рыцарь',
        cinema: 'Салют',
        date: '20.03  22:15',
        seats: ['Ряд 1, место 1', 'Ряд 1, место 2']
      }
    ]
  },
  {
    title: 'Прошедшие',
    tickets: [
      {
        movie: 'Мстители',
        cinema: 'Skyline Cinema',
        date: '24.01  22:15',
        seats: ['Ряд 1, место 1', 'Ряд 1, место 2']
      }
    ]
  }
]

</script>

<style scoped>
.tickets-root {
  background: #000;
  color: #fff;
  min-height: 100vh;
  font-family: inherit;
  padding-top: 2.5rem;
}

.tickets-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2.3rem;
}

.section-title {
  margin-top: 1.7rem;
  font-size: 1.25rem;
  font-weight: 400;
}

.section-divider {
  border-color: #fff;
  opacity: 0.8;
  margin-bottom: 1.2rem;
}

.ticket-block {
  margin-bottom: 1.8rem;
}

.ticket-row {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 2vw;
}

.ticket-info {
  display: flex;
  flex-direction: column;
  gap: 1px;
  min-width: 180px;
  font-size: 1.45rem;
}

.cinema-title, .ticket-date {
  font-size: 1.15rem;
}

.ticket-seats {
  display: flex;
  flex-direction: column;
  margin-left: 32px;
  min-width: 130px;
  font-size: 1.22rem;
}

.pay-col {
  margin-left: 30px;
}

.pay-btn {
  border: 1.5px solid #fff !important;
  color: #fff !important;
  min-width: 105px;
  margin-top: 3px;
}

.left-col {
  margin-left: 30px;
  font-size: 1.1rem;
  margin-top: 6px;
  color: #fff;
}
</style>


