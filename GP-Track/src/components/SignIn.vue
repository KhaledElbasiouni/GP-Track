<template>
  <main class="row no-wrap justify-center items-center" style="height: 100vh">
    <div class="card justify-center">
      <q-form
        @submit=""
        action="#"
        method="post"
        class="q-gutter-y-sm column no-wrap full-height justify-center items-center"
        style="gap: 20px"
      >
        <q-input
          class="formInput"
          name="username"
          v-model="username"
          label="Username"
          maxlength="20"
          :rules="[
            (val) => (val && val.length > 0) || 'Please enter your username',
            (val) => val.length > 3 || 'Minimum username length is 3 characters',
          ]"
          lazy-rules
          dense
          outlined
        >
          <template v-slot:prepend>
            <q-icon name="o_person" />
          </template>
        </q-input>

        <q-input
          class="formInput"
          name="password"
          v-model="password"
          label="Password"
          maxlength="32"
          :rules="[
            (val) => (val && val.length > 0) || 'Please enter your password',
            (val) => val.length > 5 || 'Minimum password length is 6 characters',
          ]"
          :type="isPwd ? 'password' : 'text'"
          lazy-rules
          dense
          outlined
        >
          <template v-slot:prepend>
            <q-icon name="o_lock" />
          </template>
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>

        <q-btn
          class="signInBtn"
          label="Sign In"
          type="submit"
          color="primary"
          padding="xs sm"
          flat
          dense
          no-caps
        />
      </q-form>
    </div>
  </main>
</template>

<style scoped>
.signInBtn {
  background-color: rgba(0, 0, 0, 0.05);
}

.formInput {
  width: 300px;
}

.card {
  width: 40rem;
  height: 35rem;
  border: solid rgba(234, 225, 225, 0.8) 1px;
  border-radius: 8px;
}

.inputGroup {
  max-width: 350px;
}
</style>
<script setup lang="ts">
import { Dumbbell, Lock, User } from "lucide-vue-next";
import { QBtn, QForm, QIcon } from "quasar";

import { ref, type Ref } from "vue";

const username: Ref<string> = ref("");
const password: Ref<string> = ref("");

const isPwd: Ref<boolean> = ref(true);
</script>
