<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle> Home Page </IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent class="ion-padding">
      <IonButton @click="doLogout"> LOGOUT </IonButton>
      <IonButton router-link="/about"> ABOUT PAGE </IonButton>
      <button @click="router.push('/tailwindcss')"
        class="bg-cyan-700 hover:bg-cyan-500 text-white px-4 py-4 rounded mt-3 w-full font-bold"
      >
        TAILWIND PAGE
      </button>
      <IonCard>
        <IonCardContent> {{user?.email}} </IonCardContent>
      </IonCard>
    </IonContent>
  </IonPage>
</template>
<script setup lang="ts">
definePageMeta({
    alias : ['/index'],
    middleware : ['auth']
})
const router = useRouter();
const user = useFbAuth()?.currentUser
console.log(user)


const doLogout = async () => {
    await useFbAuth()?.signOut()
    router.replace('/login');
} 
</script>
