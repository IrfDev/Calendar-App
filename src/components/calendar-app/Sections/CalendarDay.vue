<template>
  <div id="calendar-day" :class="{active:day.active}">
    <div class="calendar-title" :id="'calendar-title-'+day.id" @click="setActiveDay(day.id)">
      <h1 class="text-center ">
        {{ day.abbvTitle }}
      </h1>
    </div>
    <div class="calendar-day-body">
    <calendar-event
     v-for="event in day.events" :key="event" :event="event" :day="day"
    />
    </div>
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
#calendar-day{
  display: flex;
    flex-direction: column;
    align-items: center;
    #calendar-title-0{
      border-radius: 8px 0px 0px 8px;
      color:black;
    }
    #calendar-title-6{
      border-radius: 0px 8px 8px 0px;
      color:black;
    }
  .calendar-title{
    background-color:#739CBB;
    width:100%;
    padding: 3% 5%;
    text-align:center;
    display:flex;
    justify-content: center;
    h1{
      color:white;
      font-family: Montserrat;
      font-style: normal;
      font-weight: 600;
      font-size: 40px;
    }
  }
  .calendar-day-body{
     min-height:300px;
     display:flex;
     flex-direction: column;
     justify-content: space-around;
  }
}
.active{
   transition: cubic-bezier(0.47, 0, 0.745, 0.715).3s;
  border-radius: 0px 0px 8px 8px;
  box-shadow: 3px 4px 11px rgba(0, 0, 0, 0.25);
  animation: active-calendar-day .35s  alternate ease-in-out forwards;
  background-color:#D6E0EA;
  .calendar-title{
    background-color: #2E6289!important;
    border-radius: 8px 8px 0px 0px;
    transition: cubic-bezier(0.47, 0, 0.745, 0.715).3s;
  }
  .calendar-day-body{
    min-height: 335px;
    border-radius: 0px 0px 8px 8px;
  }
  @keyframes active-calendar-day{
    0%{
       margin-top:0%;
    }
    50%{
         margin-top:-9%;
    }
    100%{
         margin-top:-7%;
    }
  }
}
</style>
