<template>
  <main class="dashboard">
    <Sidebar />
    <div class="content">
      <div class="chart"></div>
      <hr />
      <div class="routinesContainer">
        <RoutineCard name="Push/Pull/Legs" :num-days="5" :description />
        <RoutineCard name="Push/Pull/Legs" :num-days="5" :description />
        <RoutineCard name="Push/Pull/Legs" :num-days="5" :description />
        <RoutineCard name="Push/Pull/Legs" :num-days="5" :description />
      </div>
    </div>
  </main>
</template>

<style scoped>
.dashboard {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto;
}

.sidebar {
  background-color: var(--background-col);
  border-right: solid 1px rgb(232, 231, 231);
  position: sticky;
  align-self: start;
  top: 0;
  height: 100dvh;

  .appTitle {
    font-size: 3rem;
    font-weight: 600;
  }

  ul {
    border-radius: 4px;
    /* padding: 2px; */
  }
  li:hover {
    background-color: rgb(235, 235, 235);
  }
}

.chart {
  margin: 10px;
  height: 500px;
  background-color: lightcoral;
}

.routinesContainer {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 4px;

  .routine {
    width: 500px;
    height: 200px;
    background-color: lightgreen;
  }
}

.activeLink {
  color: var(--accent);
}
</style>

<script setup lang="ts">
import { ref, type Ref } from "vue";
import RoutineCard from "./RoutineCard.vue";
import Sidebar from "./Sidebar.vue";

const description: Ref<string> = ref(
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur nemo, ipsa Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur nemo, ipsa"
);
</script>
