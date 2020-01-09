<template>
  <div id="calendar-entry">
    <div class="card">
      <form>
        <p>{{ titleOfActiveDay }}</p>
        <input
          type="text"
          name="Event"
          id="EventDescription"
          v-model="eventDescription"
        />
        <a @click="submitEvent(eventDescription)">
          Submit event
        </a>
      </form>
      <h1
        v-if="error"
      >
        You must type a event description!
      </h1>
    </div>
  </div>
</template>

<script>
import { store } from '@/data/store';

export default {
  name: 'CalendarEntry',
  data() {
    return {
      eventDescription: 'e',
      error: false,
    };
  },
  computed: {
    titleOfActiveDay() {
      const dayObj = store.getActiveDay();
      return dayObj.fullTitle;
    },
  },
  methods: {
    submitEvent(newEvent) {
      store.submitEvent(newEvent);
      this.eventDescription = '';
      this.error = false;
    },
  },
};
</script>

<style lang="scss" scoped>
#calendar-entry{}
</style>
