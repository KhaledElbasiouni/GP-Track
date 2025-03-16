<template>
  <main class="row no-wrap justify-center items-center full-height">
    <div class="card column no-wrap">
      <div
        class="row no-wrap justify-center items-center col-grow q-mt-lg"
        style="gap: 10px"
      >
        <Dumbbell :size="40" :stroke-width="1.5" />
        <span class="appTitle">GP-Track</span>
      </div>
      <div class="self-center" style="font-size: 2rem; font-weight: 600">
        Create Your Account!
      </div>
      <q-form
        @submit="submitSignUp"
        class="column no-wrap full-height justify-center items-center"
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
            (val) => val.length > 3 || 'Minimum username length is 4 characters',
          ]"
          hint="Minimum length: 4"
          :lazy-rules="true"
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
          hint="Minimum length: 6"
          :lazy-rules="true"
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
          label="Confirm"
          type="submit"
          color="primary"
          padding="xs sm"
          unelevated
          no-caps
        />
      </q-form>
    </div>
  </main>
</template>

<style scoped>
.appTitle {
  font-size: 3rem;
  font-weight: 600;
}

.signInBtn {
  background-color: rgba(0, 0, 0, 0.05);
}

.formInput {
  width: 300px;
}

.card {
  width: 45rem;
  height: 40rem;
  border: solid rgba(234, 225, 225, 0.8) 1px;
  border-radius: 8px;
}

.inputGroup {
  max-width: 350px;
}
</style>
<script setup lang="ts">
import { Dumbbell } from "lucide-vue-next";
import { QBtn, QForm, QIcon } from "quasar";
import { ref, inject, type Ref } from "vue";
import { DI_KEYS } from "@/di-keys.ts";
import type { UserCredentials } from "@/types/types.ts";

const http = inject<HttpClient>(DI_KEYS.HttpClient) as HttpClient;

const username: Ref<string> = ref("");
const password: Ref<string> = ref("");

const isPwd: Ref<boolean> = ref(true);

const emit = defineEmits(["response"]);

async function submitSignUp() {
  const payload: UserCredentials = {
    username: username.value,
    password: password.value,
  };

  try {
    const { data } = await http.post("/api/sign-up", payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(data);
    emit("response", data.success);
  } catch (err) {
    console.error(err);
    emit("response", false);
  }
}
</script>
