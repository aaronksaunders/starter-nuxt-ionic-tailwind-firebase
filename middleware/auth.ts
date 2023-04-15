import { getAuth } from "firebase/auth"

// middleware/auth.ts
export default defineNuxtRouteMiddleware(async (to, from) => {
    
    const user = useFbAuth()?.currentUser
  
    // redirect the user to the login page
    if (!user) {
      return navigateTo({
        path: '/login',
        query: {
          redirect: to.fullPath,
        },
      })
    }
  })
  