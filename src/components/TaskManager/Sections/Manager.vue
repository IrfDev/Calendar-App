<template>
<div class="container">
    <div class="row">
      <div class="col">
        <h1>
          Track your daily distractions and improve your productivity
        </h1>
      <input-task
      :placeholder="placeholder"
      />
      <distraction-counter/>
    </div>
    <div class="col">
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">
              Distraction
            </th>
            <th scope="col">
              Time
            </th>
          </tr>
        </thead>
        <tbody>
          <task
            v-for="objectt in objectDistraction"
            :key="objectt"
            :title="objectt.distraction"
            :time="objectt.timestamp"
            :minutes="objectt.minutes"
            :hours="objectt.hours"
          />
        </tbody>
      </table>
    </div>
  </div>
</div>
</template>

<script>
import InputTask from '@/components/TaskManager/Ui/InputTask.vue';
import Task from '@/components/TaskManager/Ui/Task.vue';
import DistractionCounter from '@/components/TaskManager/Ui/DistractionCounter.vue';
import EventBus from '@/data/bus';

export default {
  name: 'Manager',
  components: {
    InputTask,
    Task,
    DistractionCounter,
  },
  methods: {
    addNote(e) {
      this.objectDistraction.push({
        distraction: e.distraction,
        timestamp: e.timestamp,
        hours: e.hours,
        minutes: e.minutes,
      });
      this.placeholder = 'Enter a distraction';
    },
  },
  data() {
    return {
      objectDistraction: [],
      distractions: [],
      timestamps: [],
      hour: '',
      mintues: '',
    };
  },
  created() {
    EventBus.$on('add-distraction', ev => this.addNote(ev));
  },
};
</script>

<style lang="scss" scoped>
h1{
  @extend .h3-font;
  color:$beta;
  font-size:5em;
  text-align:left;
}
th{
  @extend .h4-font;
  font-size: 1.8em;
}
</style>
