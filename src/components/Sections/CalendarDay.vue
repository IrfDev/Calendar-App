<template>
  <div id="calendar-day" class="container-fluid" @click="setActiveDay(day.id)">
    <h1>
      {{ day.abbvTitle }}
    </h1>
    <h1>
      {{ day.fullTitle }}
    </h1>
    <calendar-event
     v-for="event in day.events" :key="event" :event="event" :day="day"
    />
  </div>
</template>

<script>
import CalendarEvent from '../Ui/CalendarEvent.vue';
import { store } from '@/data/store';

export default {
  name: 'CalendarDay',
  props: ['day'],
  components: {
    CalendarEvent,
  },
  methods: {
    setActiveDay(dayId) {
      store.setActiveDay(dayId);
    },
  },
};
</script>

<style lang="scss" scoped>
#calendar-day{}
</style>
