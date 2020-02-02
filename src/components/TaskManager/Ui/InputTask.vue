<template>
<div class="form-group">
    <label for="exampleInputEmail1">Press enter to save</label>
    <input
        type="text"
        class="form-control"
        id="exampleInputEmail1"
        :placeholder="placeholder"
        v-model="input"
        @keyup.enter="monitorEnterKey"
     />
  </div>
</template>

<script>
import EventBus from '@/data/bus';

export default {
  name: 'InputTask',
  data() {
    return {
      input: '',
      notes: [],
      timestamps: [],
      placeholder: 'Enter a distraction...',
    };
  },
  methods: {
    monitorEnterKey() {
      EventBus.$emit('add-distraction', {
        distraction: this.input,
        timestamp: new Date().toLocaleDateString(),
        hours: new Date().getHours(),
        minutes: new Date().getMinutes(),
      });
      this.input = '';
    },
  },
};
</script>

<style lang="scss" scoped>
input{
  background: #739CBB;
  box-shadow: 3px 4px 10px #739CBB;
  border-radius: 11px;
  height:66px;
  color:white;
  width: 65%;
  @extend .h4-font;
  font-size: 1.4em;
  align-self: left;
}
</style>
