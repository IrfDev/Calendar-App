<template>
<div id="calendar-event" class="container-fluid" :style="getEventBackgroundColor">
  <div
    class="regular-event"
    v-if="!event.edit"
  >
  <h2>
    {{ event.details }}
  </h2>
  <i class="far fa-edit" @click="editEvent(day.id,event.details)"></i>
  <i class="fas fa-trash-alt ml-3" @click="deleteEvent(day.id, event.details)"></i>
  </div>
  <div
    class="event-edit"
    v-if="event.edit"
  >
    <input type="text" :placeholder="event.details" v-model="newEventDetails"/>
    <a
      class="cta-edit-event"
       @click="updateEvent(day.id, event.details, newEventDetails)"
    >
    <i
      class="fas fa-check-square"
    />
    </a>
  </div>
</div>
</template>

<script>
import { store } from '@/data/store';

export default {
  name: 'CalendarEvent',
  props: [
    'event',
    'day'],
  data() {
    return {
      newEventDetails: '',
    };
  },
  computed: {
    getEventBackgroundColor() {
      const colors = ['#EBF5DF', '#BAD4AA', '#EDB458', '#E8871E'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      return `background-color: ${randomColor}`;
    },
  },
  methods: {
    editEvent(d, e) {
      store.editEvent(d, e);
    },
    updateEvent(d, e, ne) {
      store.updateEvent(d, e, ne);
      this.newEventDetails = '';
    },
    deleteEvent(d, e) {
      store.deleteEvent(d, e);
    },
  },
};
</script>

<style lang="scss" scoped>
#calendar-event{}
</style>
