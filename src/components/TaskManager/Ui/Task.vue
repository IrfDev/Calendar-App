<template>
    <tr>
      <th scope="row">{{title}}</th>
      <td>{{time}} - {{ hours }}:{{ minutes }} </td>
    </tr>
</template>

<script>
const stringRequired = {
  type: String,
  required: true,
};

export default {
  name: 'Task',
  props: {
    title: stringRequired,
    time: stringRequired,
    minutes: stringRequired,
    hours: stringRequired,
  },
};
</script>

<style lang="scss" scoped>

</style>
