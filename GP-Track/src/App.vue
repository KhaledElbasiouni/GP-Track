<template>
  <div class="column no-wrap items-stretch" style="min-height: 100dvh">
    <!-- <HeaderComponent></HeaderComponent> -->
    <SignIn class="col-grow"></SignIn>
    <!-- <SignUp></SignUp> -->
  </div>
</template>

<style scoped></style>

<script setup lang="ts">
import HeaderComponent from "@@/TheHeader.vue";
import SignIn from "@@/SignIn.vue";
import SignUp from "@@/SignUp.vue";
</script>
