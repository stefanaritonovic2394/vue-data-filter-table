<script setup>
import DataTable from "./components/DataTable.vue";
import {onMounted, ref} from "vue";

const items = ref([]);

onMounted(async () => {
  const response = await fetch('http://localhost:8000/api/tasks');
  items.value = await response.json();
});
</script>

<template>
  <div class="p-8 bg-gray-100 min-h-screen">
    <DataTable :items="items" />
  </div>
</template>

<style scoped>

</style>
