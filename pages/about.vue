<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton></IonBackButton>
        </IonButtons>
        <IonTitle> About Page </IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent class="ion-padding"> </IonContent>
  </IonPage>
</template>
<script setup lang="ts">

definePageMeta({
    middleware : ['auth']
})
</script>
