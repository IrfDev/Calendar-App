<template>
  <div id="calendar-week" class="container-fluid">
    <div class="col"
    v-for="day in days"
    :key="day"
    >
    <calendar-day
    :day="day"
    />
  </div>
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
#calendar-week{
  display:flex;
  max-width: 100%;
  .col{
    padding:0%;
    border-right: 1.5px solid #FFB395;
    border-bottom: 1.5px solid #FFB395;
  }
.col:first-of-type{
  border-left: 1.5px solid #FFB395;
}
}
</style>
