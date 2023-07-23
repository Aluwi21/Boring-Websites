self.addEventListener('notificationclick', function (event) {
    event.notification.close();

    if (event.action === 'action-1') {
        console.log('Tombol ' + event.action + ' Diklik.');
        event.waitUntil(clients.matchAll().then(clients => {
            clients.forEach(client => {
                client.postMessage({ action: 'tampilkan_teks', teks: 'Tombol "' + event.notification.actions[0].title + '"', judul: event.notification.title, isi: event.notification.body });
            });
        }));
    } else if (event.action === 'action-2') {
        console.log('Tombol ' + event.action + ' Diklik');
        event.waitUntil(clients.matchAll().then(clients => {
            clients.forEach(client => {
                client.postMessage({ action: 'tampilkan_teks', teks: 'Tombol "' + event.notification.actions[1].title + '"', judul: event.notification.title, isi: event.notification.body });
            });
        }));
    } else {
        console.log('Hanya Notifikasi Saja Yang Diklik.');
        event.waitUntil(clients.matchAll().then(clients => {
            clients.forEach(client => {
                client.postMessage({ action: 'tampilkan_teks', teks: 'Hanya Mengklik Notifikasi', judul: event.notification.title, isi: event.notification.body });
            });
        }));
    }
});
