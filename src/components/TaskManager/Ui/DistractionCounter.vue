<template>
    <div>
        <h4>
          You get distracted <span>{{ objectDistraction.length }}</span>
          <span
            v-if="objectDistraction.length===1"
          > time</span>
          <span
            v-if="objectDistraction.length>1"
          > times</span>
        </h4>
    </div>
</template>

<script>
import EventBus from '@/data/bus';

export default {
  name: 'DistractionCounter',
  data() {
    return {
      objectDistraction: [],
    };
  },
  methods: {
    addNote(e) {
      this.objectDistraction.push({ distraction: e.distraction, timestamp: e.timestamp });
    },
  },
  created() {
    EventBus.$on('add-distraction', e => this.addNote(e));
  },
};
</script>

<style lang="scss" scoped>
h4{
  @extend .h3-font;
  color: $alpha;
  font-size: 3em;
  text-align:left;
}
</style>
