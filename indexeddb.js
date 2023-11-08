// Fungsi untuk membuka atau meng-upgrade database
function openDatabase(dbName, dbVersion) {
  const request = indexedDB.open(dbName, dbVersion);
  
  request.onupgradeneeded = (event) => {
    const db = event.target.result;
    
    // Membuat atau meng-upgrade struktur database
    if (!db.objectStoreNames.contains("db-1-store")) {
      db.createObjectStore("db-1-store", { keyPath: "id" });
    }
    
    // Tambahkan toko lain jika diperlukan
    // db.createObjectStore("db-2-store", { keyPath: "id" });
  };
  
  request.onsuccess = (event) => {
    const db = event.target.result;
    console.log(`Basis Data \"${dbName}\" Berhasil Dibuka.`);
  };
  
  request.onerror = (event) => {
    console.error(`Ada Kesalahan Saat Membuka Basis Data \"${dbName}\" :\n`, event.target.error);
  };
}

// Fungsi untuk menghapus sebuah toko dari database
function deleteStore(dbName, storeName) {
  const request = indexedDB.open(dbName);
  
  request.onupgradeneeded = (event) => {
    const db = event.target.result;
    if (db.objectStoreNames.contains(storeName)) {
      db.deleteObjectStore(storeName);
      console.log(`Toko \"${storeName}\" Dihapus Dari Basis Data \"${dbName}\".`);
    } else {
      console.warn(`Toko \"${storeName}\" Tidak Ditemukan Di Basis Data \"${dbName}\".`);
    }
  };
}

// Fungsi untuk menghapus sebuah database
function deleteDatabase(dbName) {
  const request = indexedDB.deleteDatabase(dbName);
  
  request.onsuccess = (event) => {
    console.log(`Basis Data \"${dbName}\" Berhasil Dihapus.`);
  };
  
  request.onerror = (event) => {
    console.error(`Ada Kesalahan Saat Menghapus Basis Data \"${dbName}\" :\n`, event.target.error);
  };
}

// Fungsi untuk menambahkan sebuah toko ke dalam database
function addStore(dbName, storeName) {
  const request = indexedDB.open(dbName);
  
  request.onupgradeneeded = (event) => {
    const db = event.target.result;
    
    if (!db.objectStoreNames.contains(storeName)) {
      db.createObjectStore(storeName, { keyPath: "id" });
      console.log(`Toko \"${storeName}\" Berhasil Ditambahkan Ke Dalam Basis Data \"${dbName}\".`);
    } else {
      console.warn(`Toko \"${storeName}\" Sudah Ada Di Dalam Basis Data \"${dbName}\".`);
    }
}

// Fungsi untuk menambahkan sebuah database
function addDatabase(dbName) {
  const request = indexedDB.open(dbName);
  
  request.onupgradeneeded = (event) => {
    // Ini akan membuat database baru dengan nama yang ditentukan
  };
}

// Fungsi untuk menambahkan data ke dalam toko tertentu di dalam database
function addData(id, data, dbName, storeName) {
  const request = indexedDB.open(dbName);
  
  request.onsuccess = (event) => {
    const db = event.target.result;
    const transaction = db.transaction([storeName], "readwrite");
    const store = transaction.objectStore(storeName);
    
    const requestData = { id, data };
    const addRequest = store.add(requestData);
    
    addRequest.onsuccess = (event) => {
      console.log(`Data Dengan ID \"${id}\" Berhasil Ditambahkan Ke Dalam \"${storeName}\" Dii Dalam Basis Data \"${dbName}\".`);
    };
    
    addRequest.onerror = (event) => {
      console.error(`Ada Kesalahan Saat Menambahkan Data Ke Dalam \"${storeName}\" Di Dalam Basis Data \"${dbName}\" :\n`, event.target.error);
    };
  };
}

// Fungsi untuk mengambil data dari toko tertentu di dalam database
function getData(id, dbName, storeName) {
  const request = indexedDB.open(dbName);
  
  request.onsuccess = (event) => {
    const db = event.target.result;
    const transaction = db.transaction([storeName], "readonly");
    const store = transaction.objectStore(storeName);
    
    const getRequest = store.get(id);
    
    getRequest.onsuccess = (event) => {
      const data = event.target.result;
      if (data) {
        console.log(`Data Dengan ID \"${id}\" Di Dalam Toko \"${storeName}\" Di Dalam Basis Data \"${dbName}\" :\n`, data.data);
      } else {
        console.warn(`Data Dengan ID \"${id}\" Tidak Ditemukan Di Dalam Toko \"${storeName}\" Di Dalam Basis Data \"${dbName}\".`);
      }
    };
    
    getRequest.onerror = (event) => {
      console.error(`Ada Kesalahan Saat Mengambil Data Dari Toko \"${storeName}\" Di Dalam Basis Data \"${dbName}\" :\n`, event.target.error);
    };
  };
}

// Fungsi untuk menghapus data dari toko tertentu di dalam database
function deleteData(id, dbName, storeName) {
  const request = indexedDB.open(dbName);
  
  request.onsuccess = (event) => {
    const db = event.target.result;
    const transaction = db.transaction([storeName], "readwrite");
    const store = transaction.objectStore(storeName);
    
    const deleteRequest = store.delete(id);
    
    deleteRequest.onsuccess = (event) => {
      console.log(`Data Dengan ID \"${id}\" Berhasil Dihapus Dari Toko \"${storeName}\" Di Dalam Basis Data \"${dbName}\".`);
    };
    
    deleteRequest.onerror = (event) => {
      console.error(`Ada Kesalahan Saat Menghapus Data Dari Toko \"${storeName}\" Di Dalam Basis Data \"${dbName}\" :\n`, event.target.error);
    };
  };
}

// Fungsi untuk mendapatkan informasi penyimpanan
function getStorageData(dbName) {
  const request = indexedDB.open(dbName);
  
  request.onsuccess = (event) => {
    const db = event.target.result;
    const usage = navigator.storage.estimate();
    
    usage.then((data) => {
      console.log(`Basis Data : ${dbName}`);
      console.log(`Kapasitas IndexedDB Total: ${data.quota} byte`);
      console.log(`Ruang Terpakai: ${data.usage} byte`);
      console.log(`Ruang Tersedia: ${data.quota - data.usage} byte`);
    });
  };
}
