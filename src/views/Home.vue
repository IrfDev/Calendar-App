<template>
 <main id="home-view">
<hero-header/>
  <h2 >
    As Hero As You Want
  </h2>
  <h3 class="title-content">
    Just plan your weekly goals and print it!
  </h3>
<calendar-week/>
<calendar-day/>
<calendar-event/>
<calendar-entry/>
</main>
</template>

<script>
import HeroHeader from '@/components/Sections/HeroHeader.vue';
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
    HeroHeader,
  },
};
</script>

<style scoped>
.title-content {
font-family: Oswald;
font-style: normal;
font-weight: bold;
font-size: 3em;
color: #D5693E;
margin-bottom:1.5em;
}
   h2{
    font-family: Oswald;
    font-style: normal;
    font-weight: 800;
    font-size: 4em;
    line-height: 125.5%;
    color: #2E6289;
    margin-top:2em;
   }
</style>
