// Firebase Çekirdek ve Servislerini İçe Aktarıyoruz
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-storage.js";

// Senin Projene Ait Şifreler ve Bağlantı Ayarları
const firebaseConfig = {
  apiKey: "AIzaSyBOoCpGIcpuqMcT5my7dNzuX6ETqSrHsME",
  authDomain: "kibrisbazar-123.firebaseapp.com",
  projectId: "kibrisbazar-123",
  storageBucket: "kibrisbazar-123.firebasestorage.app",
  messagingSenderId: "631069680353",
  appId: "1:631069680353:web:8d9512ed4f3be1e738cda0",
  measurementId: "G-GMX9YFPN3M"
};

// Firebase'i Başlatıyoruz
const app = initializeApp(firebaseConfig);

// Diğer dosyalarda kullanmak üzere servisleri dışa aktarıyoruz (Export)
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, db, auth, storage };
