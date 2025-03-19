<template>
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
          @click="setActiveLink(item.text)"
        >
          <a
            class="row items-center | gap text-decoration-none"
            :class="{ activeLink: activeLink === item.text }"
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
</template>
<style scoped>
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

.activeLink {
  color: var(--accent);
}
</style>
<script setup lang="ts">
import { Dumbbell } from "lucide-vue-next";
import { ref, type Ref, defineProps } from "vue";

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

const activeLink: Ref<string> = ref("Home");

function setActiveLink(link: string) {
  activeLink.value = link;
}
</script>
