// Membuka atau membuat database IndexedDB
const dbName = "db-bg";
const dbVersion = 1;

const request = indexedDB.open(dbName, dbVersion);

request.onupgradeneeded = (event) => {
  const db = event.target.result;

  // Membuat objek penyimpanan jika belum ada
  if (!db.objectStoreNames.contains("dataStore")) {
    db.createObjectStore("dataStore", { keyPath: "id", autoIncrement: true });
  }
};

// Fungsi untuk menambahkan data ke IndexedDB
function addData(data, callback) {
  const transaction = request.result.transaction(["dataStore"], "readwrite");
  const store = transaction.objectStore("dataStore");

  const addRequest = store.add(data);

  addRequest.onsuccess = (event) => {
    if (typeof callback === "function") {
      callback(null, event.target.result);
    }
  };

  addRequest.onerror = (event) => {
    if (typeof callback === "function") {
      callback(event.target.error);
    }
  };
}

// Fungsi untuk mengambil data dari IndexedDB
function getData(id, callback) {
  const transaction = request.result.transaction(["dataStore"], "readonly");
  const store = transaction.objectStore("dataStore");

  const getRequest = store.get(id);

  getRequest.onsuccess = (event) => {
    if (typeof callback === "function") {
      callback(null, event.target.result);
    }
  };

  getRequest.onerror = (event) => {
    if (typeof callback === "function") {
      callback(event.target.error);
    }
  };
    }
    function deleteData(id) {
      const textIdToDelete = id; // Ganti dengan ID yang ingin dihapus

const request = indexedDB.open("db-bg", 1);

request.onsuccess = (event) => {
  const db = event.target.result;
  const transaction = db.transaction(storeName, "readwrite");
  const store = transaction.objectStore(storeName);

  const requestDelete = store.delete(textIdToDelete);

  requestDelete.onsuccess = () => {
    console.log("Teks dengan ID " + textIdToDelete + " berhasil dihapus.");
  };
};
      }
