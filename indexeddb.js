// Membuka atau membuat database IndexedDB
    const dbName = "myDatabase";
    const dbVersion = 1;

    const request = indexedDB.open(dbName, dbVersion);
    let db;

    request.onupgradeneeded = (event) => {
      db = event.target.result;

      // Membuat objek penyimpanan jika belum ada
      if (!db.objectStoreNames.contains("dataStore")) {
        db.createObjectStore("dataStore", { keyPath: "id" });
      }
    };

    request.onsuccess = (event) => {
      db = event.target.result;
    };

    request.onerror = (event) => {
      console.error("Error opening database:", event.target.error);
    };

    // Fungsi untuk menambahkan data ke IndexedDB
    function addData(data, id) {
      const transaction = db.transaction(["dataStore"], "readwrite");
      const store = transaction.objectStore("dataStore");
      
      const request = store.add({ id, data });

      request.onsuccess = (event) => {
        console.log("Data berhasil ditambahkan ke IndexedDB.");
      };

      request.onerror = (event) => {
        console.error("Error adding data:", event.target.error);
      };
    }

    // Fungsi untuk mengambil data dari IndexedDB berdasarkan ID
    function getData(id) {
      const transaction = db.transaction(["dataStore"], "readonly");
      const store = transaction.objectStore("dataStore");

      const request = store.get(id);

      request.onsuccess = (event) => {
        const data = event.target.result;
        if (data) {
          console.log("Data yang diambil:", data.data);
        } else {
          console.log("Data dengan ID " + id + " tidak ditemukan.");
        }
      };

      request.onerror = (event) => {
        console.error("Error getting data:", event.target.error);
      };
    }

    // Fungsi untuk menghapus data dari IndexedDB berdasarkan ID
    function deleteData(id) {
      const transaction = db.transaction(["dataStore"], "readwrite");
      const store = transaction.objectStore("dataStore");

      const request = store.delete(id);

      request.onsuccess = (event) => {
        console.log("Data dengan ID " + id + " berhasil dihapus.");
      };

      request.onerror = (event) => {
        console.error("Error deleting data:", event.target.error);
      };
    }

    // Fungsi untuk mendapatkan informasi penyimpanan (sisa dan terpakai)
    function getStorageData() {
      const usage = navigator.storage.estimate();

      usage.then((data) => {
        console.log("Total kapasitas penyimpanan: " + data.quota + " bytes");
        console.log("Terpakai: " + data.usage + " bytes");
        console.log("Sisa: " + (data.quota - data.usage) + " bytes");
      });
    }
