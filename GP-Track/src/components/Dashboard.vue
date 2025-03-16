<template>
  <main class="dashboard">
    <div class="sidebar">
      <div class="row no-wrap justify-center items-center q-mt-lg" style="gap: 10px">
        <Dumbbell :size="40" :stroke-width="1.5" />
        <span class="appTitle">GP-Track</span>
      </div>

      <ul class="q-mt-xl q-px-sm | list-style-none">
        <template v-for="(item, index) in sidebarItems" :key="item.name">
          <li
            class="cursor-pointer q-px-sm q-py-xs q-mt-sm"
            style="font-weight: 500"
            @click="setActiveLink(index)"
          >
            <a
              class="row items-center | gap text-decoration-none"
              :class="{ activeLink: activeLinkIndex === index }"
              style="font-size: 1.75rem"
            >
              <q-icon
                :name="item.icon"
                size="2.5rem"
                style="flex-shrink: 0; font-weight: 600"
              />

              <span>{{ item.text }}</span>
            </a>
          </li>
        </template>
      </ul>
    </div>
    <div class="content">
      <div class="chart"></div>
      <hr />
      <div class="routinesContainer">
        <div class="routine"></div>
        <div class="routine"></div>
        <div class="routine"></div>
        <div class="routine"></div>
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
import { Dumbbell } from "lucide-vue-next";
import { ref, type Ref } from "vue";

type sidebarItem = {
  icon: string;
  text: string;
};

const sidebarItems: Ref<Array<sidebarItem>> = ref([
  {
    icon: "sym_r_home",
    text: "Home",
  },
  {
    icon: "sym_r_exercise",
    text: "Exercise",
  },
  {
    icon: "sym_r_settings",
    text: "Settings",
  },
]);

const activeLinkIndex: Ref<number> = ref(0);

function setActiveLink(index: number): void {
  activeLinkIndex.value = index;
}
</script>
