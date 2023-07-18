self.addEventListener('notificationclick', function (event) {
  event.notification.close();

  if (event.action === 'action-yes') {
    alert("Tombol \"Ya\" Diklik.");
    console.log('"Ya" Button Clicked.')
    // Lakukan tindakan sesuai dengan tombol "Ya" di sini
  } else if (event.action === 'action-no') {
     alert("Tombol \"Tidak\" Diklik.");
    console.log('"Tidak" Button Clicked.')
    // Lakukan tindakan sesuai dengan tombol "Tidak" di sini
  } else {
    alert("Notfikasi Diklik.");
    console.log('"ONLY-notfication" clicked')
    // Lakukan tindakan sesuai dengan notifikasi diklik di sini
  }
});
