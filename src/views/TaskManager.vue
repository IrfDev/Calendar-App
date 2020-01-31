<template>
  <main class="container-fluid">
      <header-cta/>
      <manager/>
  </main>
</template>

<script>
import Manager from '@/components/TaskManager/Sections/Manager.vue';
import HeaderCta from '@/components/TaskManager/Sections/HeaderCta.vue';

export default {
  name: 'TaskManager',
  components: {
    HeaderCta,
    Manager,
  },
};
</script>

<style lang="scss" scoped>

</style>
