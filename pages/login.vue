<template>
  <IonPage>
    <IonContent>
      <div
        class="px-4 min-h-full flex flex-col justify-center sm:px-6 lg:px-8"
      >
        <h2 class="my-6 text-center text-3xl font-extrabold">
          Sign in to your account
        </h2>
        <div class="px-6">
          <input
            v-model="credentials.email"
            autocapitalize="none"
            autocomplete="none"
            type="text"
            class="w-full mb-4 text-normal py-2 px-1 border-cyan-700 border-solid border-2 rounded-md"
          />
          <input
            v-model="credentials.password"
            autocapitalize="none"
            autocomplete="none"
            type="password"
            class="w-full mb-4 text-normal py-2 px-1 border-cyan-700 border-solid border-2 rounded-md"
          />
        </div>
        <div class="px-6">
          <button
            @click="doSignIn"
            class="bg-cyan-700 hover:bg-cyan-500 text-white px-4 py-4 rounded mt-3 w-full font-bold"
          >
            SIGN IN
          </button>
        </div>
      </div>
    </IonContent>
  </IonPage>
</template>
<script lang="ts" setup>
import { Auth, signInWithEmailAndPassword } from "@firebase/auth";

const auth = useFbAuth();
const credentials = ref({
  email: "",
  password: "",
});

const doSignIn = async () => {
  try {
    const { email, password } = credentials.value;

    const authResp = await signInWithEmailAndPassword(
      auth as Auth,
      email,
      password
    );
    if (!authResp?.user) throw Error("NO User");
    useRouter().replace("/index");
  } catch (error) {
    alert((error as Error)?.message);
  }
};
</script>
