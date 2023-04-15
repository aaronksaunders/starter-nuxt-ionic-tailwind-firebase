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
