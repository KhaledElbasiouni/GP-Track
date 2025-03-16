<template>
  <div class="column" style="min-height: 100dvh">
    <!-- <AppHeader v-if="toggle"></AppHeader> -->

    <!-- <SignIn class="col-grow"></SignIn> -->
    <!-- <SignUp class="col-grow" @response="toggleToggle"></SignUp> -->
    <Dashboard class="col-grow"></Dashboard>
  </div>
</template>

<style scoped></style>

<script setup lang="ts">
import AppHeader from "@/components/AppHeader.vue";
import SignIn from "@@/SignIn.vue";
import SignUp from "@@/SignUp.vue";
import Dashboard from "@@/Dashboard.vue";
import { Dumbbell, Sun, Moon, Settings } from "lucide-vue-next";

import { ref } from "vue";

const toggle = ref(true);

function toggleToggle(valid: any) {
  toggle.value = valid;
}
</script>
