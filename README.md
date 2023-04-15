# Nuxt 3 Ionic Tailwind Firebase Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

- Nuxt Ionic Module - https://ionic.nuxtjs.org/
- Nuxt Supabase Module - https://supabase.nuxtjs.org/
- Nuxt Tailwind Module - https://tailwindcss.nuxtjs.org/
- Nuxt VueFire - https://vuefire.vuejs.org/nuxt/getting-started.html
  - Auth Issue: https://github.com/firebase/firebase-js-sdk/issues/5019
- Ionic VS Code Extension - https://ionicframework.com/docs/intro/vscode-extension


changes `package.json`  for using ionic extension and build apps for mobile devices
```
  "scripts": {
    "dev": "nuxi dev",
    "build": "nuxi generate",
    "ionic:build": "npm run build",
    "ionic:serve": "npm run dev"
  },
```

changes `nuxt.config.ts` for using ionic extension and build apps for mobile devices, you must set `ssr:false` and `auth:false` for vurefire
```
export default defineNuxtConfig({
  modules: ["@nuxtjs/ionic", "@nuxtjs/tailwindcss", "nuxt-vuefire"],
  ssr: false,
  vuefire: {
    auth: false,
    config: {
      apiKey: process.env.FIREBASE_API_KEY,
      projectId: process.env.FIREBASE_PROJECT_ID,
      appId: process.env.FIREBASE_APP_ID,
    },
  },
  ionic: {
    css: {
      utilities: true,
    },
  },
});

```

changes `capacitor.config.ts`  for using ionic extension and build apps for mobile devices, you must set webDir to `dist`
```
import { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'nuxt-ionic-playground',
  webDir: 'dist',
  bundledWebRuntime: false,
}

export default config
```

### Resolving Firebase Issue
Due to the firebase issue on Capacitor, I wrote my own getAuth composable that must be used when running on device
```
import {
  indexedDBLocalPersistence,
  initializeAuth,
} from "firebase/auth";
import { getApp } from "firebase/app";
export const useFbAuth = () => {
  let auth;
  console.log("use persistence");
  auth = initializeAuth(getApp(), {
    persistence: indexedDBLocalPersistence,
  });
  return auth;
};

```