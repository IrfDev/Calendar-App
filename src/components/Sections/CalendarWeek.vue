<template>
  <div id="calendar-week" class="container-fluid">
    <calendar-day
    v-for="day in days"
    :key="day"
    :day="day"
    />
  </div>
</template>

<script>
/* eslint no-use-before-define: 0 */ // --> OFF
import { store } from '@/data/store';
import CalendarDay from './CalendarDay.vue';

export default {
  name: 'CalendarWeek',
  components: {
    CalendarDay,
  },
  data() {
    return {
      days: store.state.dataBase,
    };
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
#calendar-week{}
</style>
