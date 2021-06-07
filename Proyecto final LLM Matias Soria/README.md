# Firebase CRUD
- Backend: Firebase as a Backend (Firestore como base de datos)
- Frontend: HTML, CSS y vanilla Javascript

# Cambios para cada proyecto personal
## Cambiar la variable firebaseConfig con la configuración personal que se encuentrar en: icono rueda -> Configuración proyecto -> sección "tus apps" -> en firebaseConfig ->configuración
    var firebaseConfig = {
      apiKey: "AIzaSyDMnk2iSrvEMdyLQPfoH_upA4ew5D7CNSU",
      authDomain: "task-8e923.firebaseapp.com",
      projectId: "task-8e923",
      storageBucket: "task-8e923.appspot.com",
      messagingSenderId: "828405039809",
      appId: "1:828405039809:web:ddfc529f5f7e2d4dd2ca40"
    };

    <!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.6.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/8.6.0/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDLTRZH4CiCafx9RujF8y3etAF5AYKdEUE",
    authDomain: "task-37504.firebaseapp.com",
    projectId: "task-37504",
    storageBucket: "task-37504.appspot.com",
    messagingSenderId: "756891420206",
    appId: "1:756891420206:web:e01f8132eadd54c24b81bf",
    measurementId: "G-D5CKSYS9C9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>
