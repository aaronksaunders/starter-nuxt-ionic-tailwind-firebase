<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton></IonBackButton>
        </IonButtons>
        <IonTitle> Tailwind Page </IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent class="ion-padding">
      <div
        class="px-4 pt-16 min-h-full flex flex-col justify-center sm:px-6 lg:px-8"
      >
        <div class="bg-orange-300 w-full h-full rounded-md py-8 px-2 shadow-xl">
          <div class="text-2xl text-white font-semibold">
            This is tailwind css
          </div>
        </div>
        <div
         @click="$router.back()"
          class="bg-orange-700 hover:bg-orange-500 text-white px-4 py-4 rounded mt-3 w-full font-bold text-center"
        >
          <button>GO BACK</button>
        </div>
      </div>
    </IonContent>
  </IonPage>
</template>
<script setup lang="ts">

definePageMeta({
    middleware : ['auth']
})
</script>