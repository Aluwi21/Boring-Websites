self.addEventListener('notificationclick', function (event) {
  if (event.action === 'action-yes') {
    alert("Kamu Memilih \"Ya\"")
    console.log("Terpilih \"Ya\"");
  } else if (event.action === 'action-no') {
    alert("Kamu Memilih \"Tidak\"")
    console.log("Terpilih \"Tidak\"");
  } else {
    console.log("Notifikasi Di Klik");
  }
  event.notification.close();
});

self.addEventListener('push', function (event) {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: 'path/ke/gambar/icon-notifikasi.png', // Ganti dengan path gambar ikon notifikasi
      actions: [
        { action: 'action-yes', title: 'Ya' },
        { action: 'action-no', title: 'Tidak' }
      ]
    };
    event.waitUntil(self.registration.showNotification(data.title, options));
  }
});
