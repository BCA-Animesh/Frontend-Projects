const Conf={
     apiKey:String(import.meta.env.VITE_FIREBASE_APIKEY),
     authDomain:String(import.meta.env.VITE_FIREBASE_AUTH_DOMAIN),
     projectId:String(import.meta.env.VITE_FIREBASE_PROJECT_ID),
     storageBucket:String(import.meta.env.VITE_FIREBASE_STORAGE_BUCKET),
     messagingSenderId:String(import.meta.env.VITE_FIREBASE_MESSAGINGSENDER_ID),
     appId:String(import.meta.env.VITE_FIREBASE_APP_ID),
     measurementId:String(import.meta.env.VITE_FIREBASE_MEASUREMENT_ID),
     databaseURL:String(import.meta.env.VITE_FIREBASE_DATABASE_URL),
     cloudName:String(import.meta.env.VITE_CLOUD_NAME),
     uploadPreset:String(import.meta.env.VITE_UPLOAD_PRESET)
}

export default Conf