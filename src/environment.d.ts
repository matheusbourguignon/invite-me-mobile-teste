 declare module 'src/environments/environment' {
  interface FirebaseConfig {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
    measurementId: string;
  }

  export const environment: {
    production: boolean;
    firebaseConfig: FirebaseConfig;
  };
}
