// Membuka atau membuat database IndexedDB
    const dbName = "db-1";
    const dbVersion = 1;

    const request = indexedDB.open(dbName, dbVersion);
    let db;

    request.onupgradeneeded = (event) => {
      db = event.target.result;

      // Membuat objek penyimpanan jika belum ada
      if (!db.objectStoreNames.contains("data-store")) {
        db.createObjectStore("db-1-store", { keyPath: "id" });
      }
    };

    request.onsuccess = (event) => {
      db = event.target.result;
    };

    request.onerror = (event) => {
      console.error("Ada Kesalahan Saat Membuka Database :\n", event.target.error);
    };

    // Fungsi untuk menambahkan data ke IndexedDB
    function addData(data, id) {
      const transaction = db.transaction(["db-1-store"], "readwrite");
      const store = transaction.objectStore("db-1-store");
      
      const request = store.add({ id, data });
    
      request.onsuccess = (event) => {
        console.log("Data Dengan ID " + id + " Berhasil Ditambahkan");
      };

      request.onerror = (event) => {
        console.error("Ada Kesalahan Saat Menambahkan Data :\n", event.target.error);
      };
    }

    // Fungsi untuk mengambil data dari IndexedDB berdasarkan ID
    function getData(id) {
      const transaction = db.transaction(["db-1-store"], "readonly");
      const store = transaction.objectStore("db-1-store");

      const request = store.get(id);

      request.onsuccess = (event) => {
        const data = event.target.result;
        if (data) {
          console.log("Data Yang Diambil :\n", data.data);
        } else {
          console.log("Data Dengan ID " + id + " Tidak Ditemukan");
        }
      };

      request.onerror = (event) => {
        console.error("Ada Kesalahan Saat Mengambil Data :\n", event.target.error);
      };
    }

    // Fungsi untuk menghapus data dari IndexedDB berdasarkan ID
    function deleteData(id) {
      const transaction = db.transaction(["db-1-store"], "readwrite");
      const store = transaction.objectStore("db-1-store");
      
      const request = store.delete(id);

      request.onsuccess = (event) => {
          const id_data = event.target.result;
          if (id_data) {
        console.log("Data Dengan ID " + id_data + " Berhasil Dihapus");
          } else {
            console.log("Data Dengan ID " + id_data + " Tidak Ada");  
          }
      };

      request.onerror = (event) => {
        console.error("Ada Kesalahan Saat Menghapus Data :\n", event.target.error);
      };
    }

    // Fungsi untuk mendapatkan informasi penyimpanan (sisa dan terpakai)
    function getStorageData() {
      const usage = navigator.storage.estimate();

      usage.then((data) => {
        console.log("Total Kapasitas IndexedDB : " + data.quota + " bytes");
        console.log("Ruang Terpakai : " + data.usage + " bytes");
        console.log("Ruang Tersedia : " + (data.quota - data.usage) + " bytes");
      });
    }
