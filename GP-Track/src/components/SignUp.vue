<template></template>

<style scoped>
#headerContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  border-bottom: solid rgba(234, 225, 225, 0.8) 1px;

  padding: 0 5%;
}

#headerButtonGroup {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}

#appTitle {
  font-size: 3rem;
  font-weight: 600;
}

.icon {
  user-select: none;
  cursor: pointer;
  border-radius: 8px;
  border: solid rgba(234, 225, 225, 0.8) 1px;
  padding: 2px;
}

.icon:hover {
  border: solid rgba(187, 185, 185, 0.8) 1px;
}
</style>
<script setup lang="ts">
import { Dumbbell, Sun, Moon, Settings } from "lucide-vue-next";
import { ref, type Ref } from "vue";

const lightMode: Ref<boolean> = ref(true);
const modeSize: Ref<number> = ref(35);

function toggleLightMode() {
  lightMode.value = lightMode.value ? false : true;
}
</script>
