<template>
  <div id="calendar-entry" class="">
    <div class="card">
      <form>
        <h2>
          New goal
        </h2>
        <h3>
          Day: <i>{{ titleOfActiveDay }}</i>
        </h3>
        <input
          type="text"
          name="Event"
          id="EventDescription"
          v-model="eventDescription"
        />
        <a class="submit-event-button" @click="submitEvent(eventDescription)">
          Submit goal
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
      eventDescription: '',
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
#calendar-entry{
  display:flex;
      justify-content: center;
    text-align: center;
    font-family: Oswald;
  font-style: normal;
  .card {
    margin-top:3em;
  box-shadow: 4px 4px 13px #739CBB;
  background: #1A4D74;
  border-radius: 8px;
  width: 333px;
  height: 318px;
  display:flex;
  flex-direction: column;
  justify-content: center;
  h2{
    font-size: 47px;
    color:white;
  }
  h3{
    font-weight: 500;
    font-size: 39px;
    color: #FFB395;
  }
    }
    form{
      display:flex;
      flex-direction: column;
      align-items:center;
  input{
    width:80%;
    height: 3em;
    border: 1px solid #739CBB;
    box-sizing: border-box;
    box-shadow: 0px 4px 13px rgba(115, 156, 187, 0.57);
    border-radius: 8px;
    margin-top:.5em;
      }
  .submit-event-button{
    background-color: transparent;
    padding: 2% 0%;
    width:80%;
    margin-top:.5em;
    border: 4px solid #FFFFFF;
    box-sizing: border-box;
    box-shadow: 0px 4px 13px rgba(115, 156, 187, 0.57);
    border-radius: 8px;
    color:white;
    font-size:1.5em;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
  }
    }
}
</style>
