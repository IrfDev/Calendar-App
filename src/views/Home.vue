<template>
 <main>
<h1>

</h1>
<calendar-week/>
<calendar-day/>
<calendar-event/>
<calendar-entry/>
 </main>
</template>

<script>
// @ is an alias to /src
import CalendarWeek from '@/components/Sections/CalendarWeek.vue';
import CalendarDay from '@/components/Sections/CalendarDay.vue';
import CalendarEntry from '@/components/Sections/CalendarEntry.vue';
import CalendarEvent from '@/components/Ui/CalendarEvent.vue';

export default {
  name: 'home',
  components: {
    CalendarWeek,
    CalendarDay,
    CalendarEntry,
    CalendarEvent,
  },
};
</script>
