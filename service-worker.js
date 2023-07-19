self.addEventListener('notificationclick', function (event) {
  event.notification.close();

  if (event.action === 'action-yes') {
    console.log('Tombol "Ya" Diklik.')
    // Lakukan tindakan sesuai dengan tombol "Ya" di sini
  } else if (event.action === 'action-no') {
   console.log('Tombol "Tidak" Diklik')
    // Lakukan tindakan sesuai dengan tombol "Tidak" di sini
  } else {
    console.log('Hanya Notifikasi Saja Yang Diklik.')
    // Lakukan tindakan sesuai dengan notifikasi diklik di sini
  }
});
