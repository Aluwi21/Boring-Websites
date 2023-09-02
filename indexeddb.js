// Membuka atau membuat database IndexedDB
const dbName = "myDatabase";
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
function addData(data, id, callback) {
  const transaction = request.result.transaction(["dataStore"], "readwrite");
  const store = transaction.objectStore("dataStore");

  data.id = id; // Menambahkan id ke objek data

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

// Fungsi untuk mengambil data dari IndexedDB berdasarkan id
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

// Fungsi untuk menghapus data dari IndexedDB berdasarkan id
function deleteData(id, callback) {
  const transaction = request.result.transaction(["dataStore"], "readwrite");
  const store = transaction.objectStore("dataStore");

  const deleteRequest = store.delete(id);

  deleteRequest.onsuccess = (event) => {
    if (typeof callback === "function") {
      callback(null, true);
    }
  };

  deleteRequest.onerror = (event) => {
    if (typeof callback === "function") {
      callback(event.target.error);
    }
  };
}
