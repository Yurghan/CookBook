<template>
  <base-layout page-title="Add a recipe" page-default-back-link="/memories">
    <create-memory-form @save-memory="saveMemory"> </create-memory-form>
  </base-layout>
</template>

<script>
import CreateMemoryForm from '../components/memories/CreateRecipeForm.vue';
export default {
  components: {
    CreateMemoryForm,
  },

  methods: {
    saveMemory(memoryData) {
      this.$store.dispatch('addMemory', memoryData);
      this.$router.replace('/memories');
    },
  },
};
</script>
