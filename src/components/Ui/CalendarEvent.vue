<template>
<div id="calendar-event"  :style="getEventBackgroundColor">
  <div
    class="'regular-event'"
    v-if="!event.edit"
  >
  <h2>
    {{ event.details }}
  </h2>
  <div class="event-controlers">
  <i class="far fa-edit" @click="editEvent(day.id,event.details)"></i>
  <i class="fas fa-trash-alt ml-3" @click="deleteEvent(day.id, event.details)"></i>
  </div>
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
      <i class="fas fa-save"></i>
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
      const colors = ['#7F7EFF', '#739CBB', '#E71D36', '#FFC145', '#1F7A8C', '#739CBB', '#D90368', '#D7BCE8', '#BFB48F'];
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
#calendar-event{
  border-radius:8px;
  border: 1.5px solid #2E6289;
  min-width: 150px;
  min-height: 90px;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.25);
  display:flex;
  flex-direction: column;
  justify-content:center;
  .afteredit{
  transition: .5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  h2{
    color:white;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    padding-top:3%;
  }
  .event-controlers{
    display: flex;
    justify-content: space-around;
    width: 100%;
    position:relative;
    bottom:3px;
    top: 19%;
    }
    .event-edit{
      animation: editing-event .3s cubic-bezier(.3,-0.02,0,1.55) forwards alternate;
      transition: .6s cubic-bezier(.3,-0.02,0,1.55);
      display: flex;
      justify-content: space-around;
      input{
        width: 77%;
        border-radius: 8px;
        border: 1px solid #739CBB;
        transition: .5s ease-in-out;
      }
      input:focus{
        box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.25);
        outline:none;
        transition: .3s ease-in;
        border: 1px solid #0b395c;
      }
      .cta-edit-event{
       font-size:1.5em;
      }
      @keyframes editing-event{
    0%{
       width:0%;
       opacity: 0%;
    }
    100%{
         width:100%;
         opacity: 100%;
    }
    }
    }
}
</style>
