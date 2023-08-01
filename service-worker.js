self.addEventListener('notificationclick', function (event) {
    event.notification.close();

    if (event.action === 'button-1') {
        console.log('Tombol ' + event.notification.actions[0].title + ' Diklik. / Tombol ' + event.action + 'Diklik.');
        event.waitUntil(clients.matchAll().then(clients => {
            clients.forEach(client => {
                client.postMessage({ action: 'notification-data', buttonclicked: 'Tombol "' + event.notification.actions[0].title + '"', title: event.notification.title, desc: event.notification.body });
            });
        }));
    } else if (event.action === 'button-2') {
        console.log('Tombol ' + event.notification.actions[1].title + ' Diklik. / Tombol ' + event.action + 'Diklik.');
        event.waitUntil(clients.matchAll().then(clients => {
            clients.forEach(client => {
                client.postMessage({ action: 'notification-data', buttonclicked: 'Tombol "' + event.notification.actions[0].title + '"', title: event.notification.title, desc: event.notification.body });
            });
        }));
    } else {
        console.log('Hanya Notifikasi Saja Yang Diklik.');
        event.waitUntil(clients.matchAll().then(clients => {
            clients.forEach(client => {
                client.postMessage({ action: 'notification-data', buttonclicked: 'Hanya Mengklik Notifikasi', title: event.notification.title, desc: event.notification.body });
            });
        }));
    }
});
