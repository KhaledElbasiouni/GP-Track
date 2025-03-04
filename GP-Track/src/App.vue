<template>
  <div class="column no-wrap items-stretch" style="min-height: 100dvh">
    <Header></Header>
    <SignIn class="col-grow"></SignIn>
    <!-- <SignUp></SignUp> -->
  </div>
</template>

<style scoped></style>

<script setup lang="ts">
import Header from "./components/Header.vue";
import SignIn from "./components/SignIn.vue";
import SignUp from "./components/SignUp.vue";
</script>
