<template>
  <q-card class="cursor-pointer | myroutine">
    <q-card-section>
      <div class="text-h6">{{ props.name }}</div>
      <div class="text-subtitle2">{{ numDays }} Day split</div>
    </q-card-section>

    <q-card-section class="description">
      {{ description }}
    </q-card-section>

    <q-separator dark />

    <q-card-actions class="q-pb-md justify-center">
      <q-btn class="cardButton" flat>Delete</q-btn>
      <q-btn class="cardButton" flat>Duplicate</q-btn>
    </q-card-actions>
  </q-card>
</template>

<style scoped>
.myroutine {
  background-color: var(--background-col);
  width: 225px;
  height: 290px;
  display: flex;
  flex-flow: column nowrap;
}

.myroutine:hover {
  background-color: #ffffff;
}

.myroutine > .description {
  height: 100%;
}

.cardButton {
  min-width: 100px;
}
</style>

<script setup lang="ts">
import { ref, type Ref, defineProps } from "vue";
import { QCard, QCardActions, QCardSection, QSeparator } from "quasar";

const props = defineProps<{
  name: string;
  numDays: number;
  description?: string;
}>();
</script>
