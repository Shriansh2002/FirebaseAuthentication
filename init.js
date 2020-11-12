var firebaseConfig = {
  apiKey: "Your api key",
  authDomain: "Your domain",
  databaseURL: "Your database url",
  projectId: "Your project id",
  storageBucket: "Your storage bucket id",
  messagingSenderId: "Your messaging sender ID",
  appId: "Your App ID",
  measurementId: "Your Measurement Id"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();