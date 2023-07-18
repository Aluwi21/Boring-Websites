function requestNotificationPermission() {
      if ('Notification' in window) {
        Notification.requestPermission()
          .then(function (permission) {
            if (permission === 'granted') {
              showCustomNotification();
            } else {
              alert("Kamu Menolak Akses Lokasi!");
              console.error("NOTIFICATION.ACCESS denied.")
            }
          });
      } else {
        alert("Browser Ini Gak Mendukung API Notifikasi.");
        console.warn("Browser Doesnt Support NOTIFICATION.API.");
      }
    }

    function showCustomNotification() {
      if ('Notification' in window) {
        const notificationText = prompt("Masukkan Teks Notifikasi : ");
        if (notificationText) {
          const options = {
            body: notificationText,
            icon: 'home_FILL0_wght400_GRAD0_opsz48.png' // Ganti dengan path gambar ikon notifikasi
          };

          // Tambahkan tombol ke notifikasi
          options.actions = [
            { action: 'action-yes', title: 'Ya' },
            { action: 'action-no', title: 'Tidak' }
          ];

          const notificationPromise = new Promise(function(resolve, reject) {
            const notification = new Notification("Notifikasi Dengan Tombol", options);
            notification.onclick = function(event) {
              if (event.action === 'action-yes') {
                alert("Kamu Memilih \"Ya\"");
              } else if (event.action === 'action-no') {
                alert("Kamu Memilih \"Tidak\"");
                console.log("Terpilih \"Tidak\"");
              } else {
                alert("Kamu Mengklik Notifikasi");
                console.log("Notifikasi Di Klik");
              }
              resolve();
            };
          });

          // Tambahan untuk menangani ketika notifikasi ditutup tanpa interaksi
          notificationPromise.then(function() {
            console.log("Notifikasi Ditutup");
            alert("Kamu Menutup Notifikasi");
          });
        } else {
          alert("Masukkan Teks Notifikasi Yang Valid!");
          console.warn("Invalid Input!");
        }
      } else {
        alert("Browser Ini Gak Mendukung API Notifikasi.");
        console.warn("Browser Doesnt Support NOTIFICATION.API.");
      }
    }
function security() {
  var password = "administrator000";
  var promptA = prompt("Masukkan Kata Sandi Sebelum Mengakses Terminal");
  if (promptA === password) {
    evalP();
  } else if (promptA !== password) {
    alert("Kata Sandi Salah, Ulangi.");
  }
}

function evalP() {
  alert("Kata Sandi Benar!, Klik Oke Untuk Melanjutkan.");
  var code = prompt("Ketik Kode Untuk Dieksekusi/Dijalankan(Jika Kamu Mengklik Oke, Tetapi Gak Ada Apa-Apa, Mungkin Karena kamu Menggunakan Fungsi/Kode Yang Tidak valid/console.log/warn/error, Gunakan \",\"/Koma Kalo Kodenya Banyak) :", "console.warn(\"ga tau\")");

  if (code) {
    try {
      eval(code);
    } catch (error) {
      alert("Terjadi kesalahan saat eval : \n" + error);
    }
  }
}

function generatePassword() {
  const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()';

  const allCharacters = lowercaseLetters + uppercaseLetters + numbers + symbols;
  const passwordLength = prompt("Panjang Kata Sandi:", "10"); // Panjang kata sandi yang dihasilkan

  if (passwordLength && !isNaN(passwordLength)) {
    let generatedPassword = '';

    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * allCharacters.length);
      generatedPassword += allCharacters.charAt(randomIndex);
    }

    const passwordInput = document.getElementById('password');
    passwordInput.setAttribute('placeholder', generatedPassword);
    passwordInput.value = generatedPassword;
    alert("Berhasil Menghasilkan Kata Sandi Ketat!");
    // Menjadwalkan pesan segera ditampilkan setelah kata sandi dihasilkan
  } else {
    alert("Panjang Kata Sandi Bukan Angka, Coba Lagi.");
  }
}

function copyPassword() {
  const passwordInput = document.getElementById('password');
  passwordInput.select();
  document.execCommand("copy");
  alert("Berhasil Menyalin Kata Sandi!");
}

    (function() {
        var container = document.getElementById("giscus-container");
        var script = document.createElement("script");

        script.src = "https://giscus.app/client.js";
        script.setAttribute("data-repo", "Syaamilmaulana256/My-Rep");
        script.setAttribute("data-repo-id", "R_kgDOJ1D-yQ");
        script.setAttribute("data-category", "General");
        script.setAttribute("data-category-id", "DIC_kwDOJ1D-yc4CXxAX");
        script.setAttribute("data-mapping", "pathname");
        script.setAttribute("data-strict", "1");
        script.setAttribute("data-reactions-enabled", "1");
        script.setAttribute("data-emit-metadata", "0");
        script.setAttribute("data-input-position", "top");
        script.setAttribute("data-theme", "cobalt");
        script.setAttribute("data-lang", "id");
        script.setAttribute("data-loading", "lazy");
        script.setAttribute("crossorigin", "anonymous");
        script.async = true;

        container.appendChild(script);
      })();
    function switcher() {
      var switcherVar = prompt("Ingin Memasukan Masalah Atau Saran? (Masalah/Saran, Huruf Depan Harus Kapital[masalah <= Salah | Masalah <= Betul]):")
      if (switcherVar) {
        if (switcherVar.startsWith("M")) {
          feedbackProblem()
        } else if (switcherVar.startsWith("S")) {
          feedbackSuggestion()
        } else {
          alert("undefined : bukan masukan saran/masalah, try again.")
        }
      }
    }
    function feedbackSuggestion() {
      var webhookURL = "https://discord.com/api/webhooks/1126861182163234939/d8iV2CzMsIYjZ67L5NSc5n382R-q7U2d5d_j4tI9BZ7jlrSg7YUakY4H27YyXRJYonEV";
      var username = prompt("Nama Kamu(Boleh Nama Asli/Panggilan/Discord Atau Sosmed Kamu) :", "Baterai")
      var title = prompt("Apa Saran?(Judul Masukan) :", "Jadiin Background Website Jadi Gambar")
      var description = prompt("Deskripsi Saran :", "Kalau Bisa Hehehehe")
      var userAcc = prompt("Masukkan Email Mu(Kami Akan Membalas Jawaban Kamu Atau Menggunakan Nama Discord Mu) : ", "emailkamu1234@gmail.com")
      var accType;
    if (userAcc.endsWith("@gmail.com")) {
         accType = "Google";
        } else if (userAcc.includes("#") || userAcc.endsWith("_", ".", "_.", "._")) {
        accType = "Discord";
        } else {
        accType = "undefined";
        }
      var waktu = new Date();
      var tahun = waktu.getFullYear();
      var bulan = waktu.toLocaleDateString('id-ID', { month: 'long' });
      var tanggal = waktu.getDate();
      var hari = waktu.toLocaleDateString('id-ID', { weekday: 'long' });
      var jam = waktu.getHours();
      var menit = waktu.getMinutes();
      var detik = waktu.getSeconds();
      var result = hari + ', ' + tanggal + ' ' + bulan + ' ' + tahun + ' ' + jam + ':' + menit + ':' + detik;
      var waktu1 = new Date();
            var tahun1 = waktu1.getFullYear();
            var bulan1 = waktu1.getMonth() + 1; // Menggunakan index 0-11, tambahkan 1 untuk mendapatkan bulan aktual
            var tanggal1 = waktu1.getDate();
            var hari1 = waktu1.getDay(); // Menggunakan index 0-6, 0 adalah Minggu, 1 adalah Senin, dst.

            var jam1 = waktu1.getHours();
            var menit1 = waktu1.getMinutes();
            var detik1 = waktu1.getSeconds();

            var result2 = hari1 + "/" + tanggal1 + "/" + bulan1 + "/" + tahun1 + " " + jam1 + ":" + menit1 + ":" + detik1;
      var embed = {
          "username": "Masukan Website boring-websites",
          "avatar_url": "https://cdn.discordapp.com/attachments/1088372650138681366/1127128136304316460/forum_FILL0_wght400_GRAD0_opsz48.png",
          "content": "<@1088006543900942379><@873700121467047966>\n# MASUKAN BARU!\n- **MASUKAN DARI :*__ " + username + "__*** \n- **PADA WAKTU *__ " + result + "__*** \n- **WAKTU SIMPEL :*__ " + result2 + "__***" + "\n- **TIPE MASUKAN : __\`SARAN\`__**",
          "embeds": [
            {
              "title": title,
              "description": description,
              "color": 3211008,
              "footer": {
                "text": result2
              },
              "author": {
                "name": "Akun " + accType + " : " + userAcc
              },
              "thumbnail": {
               "url": ""
              }
              }
          ]
        };

        // Mengirim pesan ke webhook Discord
      if (username || userAcc || title || description) {
        fetch(webhookURL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(embed)
        }).then(function(response) {
          alert("Terimkasih Atas Masukannya, Aku Akan Membalas Jawaban Kamu Di Discord/Email Yang Kamu Berikan, Jika Kamu Mendapatkan Pesan Di Discord Bernama \"maulanaxyz25_\", Itu Aku Ya, Kalo Di Gmail Ada Gmail \"syaamilmaulana2755@gmail.com\" Itu Aku Juga Yak.");
        }).catch(function(error) {
          alert("Gagal mengirim embed ke Discord:", error);
        });
      }
    }
    function feedbackProblem() {
      var webhookURL = "https://discord.com/api/webhooks/1126861182163234939/d8iV2CzMsIYjZ67L5NSc5n382R-q7U2d5d_j4tI9BZ7jlrSg7YUakY4H27YyXRJYonEV";
      var username = prompt("Nama Kamu(Boleh Nama Asli/Panggilan/Discord Atau Sosmed Kamu) :", "Baterai")
      var title = prompt("Apa Masalahnya?(Judul Masukan) :", "Desain Berantakan")
      var description = prompt("Deskripsi Masalah :", "Kenapa Desain Sangat BURIQ?????!?")
      var userAcc = prompt("Masukkan Email Mu(Kami Akan Membalas Jawaban Kamu Atau Menggunakan Nama Discord Mu) : ", "emailkamu1234@gmail.com")
      var accType;
    if (userAcc.endsWith("@gmail.com")) {
         accType = "Google";
        } else if (userAcc.includes("#")) {
        accType = "Discord";
        }
      var waktu = new Date();
      var tahun = waktu.getFullYear();
      var bulan = waktu.toLocaleDateString('id-ID', { month: 'long' });
      var tanggal = waktu.getDate();
      var hari = waktu.toLocaleDateString('id-ID', { weekday: 'long' });
      var jam = waktu.getHours();
      var menit = waktu.getMinutes();
      var detik = waktu.getSeconds();
      var result = hari + ', ' + tanggal + ' ' + bulan + ' ' + tahun + ' ' + jam + ':' + menit + ':' + detik;
      var waktu1 = new Date();
            var tahun1 = waktu1.getFullYear();
            var bulan1 = waktu1.getMonth() + 1; // Menggunakan index 0-11, tambahkan 1 untuk mendapatkan bulan aktual
            var tanggal1 = waktu1.getDate();
            var hari1 = waktu1.getDay(); // Menggunakan index 0-6, 0 adalah Minggu, 1 adalah Senin, dst.

            var jam1 = waktu1.getHours();
            var menit1 = waktu1.getMinutes();
            var detik1 = waktu1.getSeconds();

            var result2 = hari1 + "/" + tanggal1 + "/" + bulan1 + "/" + tahun1 + " " + jam1 + ":" + menit1 + ":" + detik1;
      var embed = {
          "username": "Masukan Website boring-websites",
          "avatar_url": "https://cdn.discordapp.com/attachments/1088372650138681366/1127128136304316460/forum_FILL0_wght400_GRAD0_opsz48.png",
          "content": "<@1088006543900942379><@873700121467047966>\n# MASUKAN BARU!\n- **MASUKAN DARI :*__ " + username + "__*** \n- **PADA WAKTU *__ " + result + "__*** \n- **WAKTU SIMPEL :*__ " + result2 + "__***" + "\n- **TIPE MASUKAN : __\`MASALAH\`__**",
          "embeds": [
            {
              "title": title,
              "description": description,
              "color": 3211008,
              "footer": {
                "text": result2
              },
              "author": {
                "name": "Akun " + accType + " : " + userAcc
              },
              "thumbnail": {
               "url": ""
              }
              }
          ]
        };

        // Mengirim pesan ke webhook Discord
      if (username || userAcc || title || description) {
        fetch(webhookURL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(embed)
        }).then(function(response) {
          alert("Terimkasih Atas Masukannya, Aku Akan Membalas Jawaban Kamu Di Discord/Email Yang Kamu Berikan, Jika Kamu Mendapatkan Pesan Di Discord Bernama \"maulanaxyz25_\", Itu Aku Ya, Kalo Di Gmail Ada Gmail \"syaamilmaulana2755@gmail.com\" Itu Aku Juga Yak.");
        }).catch(function(error) {
          alert("Gagal mengirim embed ke Discord:", error);
        });
      }
    }
    /* Update the hex code value when color picker changes */
    var colorPicker = document.getElementById("colorPicker");
    var hexCodeField = document.getElementById("hexCode");

    colorPicker.addEventListener("change", function() {
      var hexCode = colorPicker.value;
      hexCodeField.value = hexCode;
    });
    function copyHexCode() {
      /* Get the hex code */
      var hexCode = document.getElementById("colorPicker").value;

      /* Copy the hex code to clipboard */
      var tempInput = document.createElement("input");
      tempInput.setAttribute("value", hexCode);
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);

      /* Show a success message */
      var successMsg = document.getElementById("copySuccess");
      var successIcon = document.getElementById('iconSuccess');
        successMsg.style.display = "inline";
        successIcon.style.display = "inline";
      setTimeout(function() {
        successMsg.style.display = "none";
        successIcon.style.display = "none";
      }, 2000)
    }
    
function downloadFile() {
  var fileContent = document.getElementById("text").value;

  if (fileContent.startsWith("http") || fileContent.startsWith("https")) {
    if (isImageFile(fileContent)) {
      downloadImage(fileContent);
    } else if (isVideoFile(fileContent)) {
      downloadVideo(fileContent);
    } else if (isAudioFile(fileContent)) {
      downloadAudio(fileContent);
    } else {
      alert("Format file tidak didukung.");
    }
  } else {
    downloadTextFile(fileContent);
  }
}

function isImageFile(url) {
  var imageExtensions = ["jpg", "jpeg", "png", "gif"];
  var extension = url.split(".").pop().toLowerCase();
  return imageExtensions.includes(extension);
}

function isVideoFile(url) {
  var videoExtensions = ["mp4", "avi", "mkv", "mov"];
  var extension = url.split(".").pop().toLowerCase();
  return videoExtensions.includes(extension);
}

function isAudioFile(url) {
  var audioExtensions = ["mp3", "wav", "ogg"];
  var extension = url.split(".").pop().toLowerCase();
  return audioExtensions.includes(extension);
}

function downloadTextFile(fileContent) {
  var fileName = prompt("Nama File (Nama File Gak Boleh Kosong & Juga Jangan Menggunakan Simbol Ini Sebagai Nama File: \\ / : * ? \" < > |)", fileContent);

  if (fileName) {
    var blob = new Blob([fileContent], { type: "text/plain;charset=utf-8" });
    var link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName + ".txt";
    link.click();
  } else {
    alert("Nama file tidak valid.");
  }
}

function downloadImage(url) {
  var fileName = prompt("Nama Gambar (Nama File Gak Boleh Kosong & Juga Jangan Menggunakan Simbol Ini Sebagai Nama File: \\ / : * ? \" < > |)", fileContent);

  if (fileName) {
    var link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.click();
  } else {
    alert("Nama file tidak valid.");
  }
}

function downloadVideo(url) {
  var fileName = prompt("Nama Video (Nama File Gak Boleh Kosong & Juga Jangan Menggunakan Simbol Ini Sebagai Nama File: \\ / : * ? \" < > |)", fileContent);

  if (fileName) {
    var link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.click();
  } else {
    alert("Nama file tidak valid.");
  }
}

function downloadAudio(url) {
  var fileName = prompt("Nama Audio (Nama File Gak Boleh Kosong & Juga Jangan Menggunakan Simbol Ini Sebagai Nama File: \\ / : * ? \" < > |)", fileContent);

  if (fileName) {
    var link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.click();
  } else {
    alert("Nama file tidak valid.");
  }
}


var inputDateTimeLocal = document.getElementById("datetime-local");

inputDateTimeLocal.addEventListener("change", function() {
  var selectedDateTimeLocal = inputDateTimeLocal.value;
  var result = selectedDateTimeLocal.replace('T', ' ');
  result = result.replace(/(\d{1,2}\/\d{1,2}\/\d{4})/g, function(match, p1) {
    return p1 + ' ';
  });

  alert("Waktu & Tanggal Lokal Yang Dipilih: " + result);
});
          var inputWeeks = document.getElementById("weeks");

inputWeeks.addEventListener("change", function() {
  var selectedWeeks = inputWeeks.value;
  var result = selectedWeeks.replace('-', ' ');
  result = result.replace(/(\d{1,2}\/\d{1,2}\/\d{4})/g, function(match, p1) {
    return p1 + ' ';
  });
  var total = result.replace('W', 'Minggu Ke- ');

  alert("Minggu Yang Dipilih : " + total);
});

    var inputTime = document.getElementById("time");

  inputTime.addEventListener("change", function() {
    var selectedTime = inputTime.value;
    alert("Waktu Yang Dipilih : " + selectedTime);
  });
     var inputDate = document.getElementById("date");

  inputDate.addEventListener("change", function() {
    var selectedDate = inputDate.value;
    alert("Tanggal Yang Dipilih : " + selectedDate);
  });
    const fileInput = document.getElementById('file-input');
    const mediaContainer = document.getElementById('media-container');

    fileInput.addEventListener('change', function(event) {
      const selectedFile = event.target.files[0];

      if (selectedFile) {
        const reader = new FileReader();

        reader.onload = function(event) {
          const mediaType = selectedFile.type.split('/')[0];

          switch (mediaType) {
            case 'image':
              const image = new Image();
              image.src = event.target.result;
              mediaContainer.innerHTML = '';
              mediaContainer.appendChild(image);
              break;
            case 'video':
              const video = document.createElement('video');
              video.src = event.target.result;
              video.controls = true;
              mediaContainer.innerHTML = '';
              mediaContainer.appendChild(video);
              break;
            case 'audio':
              const audio = document.createElement('audio');
              audio.src = event.target.result;
              audio.controls = true;
              mediaContainer.innerHTML = '';
              mediaContainer.appendChild(audio);
              break;
            default:
              mediaContainer.innerHTML = 'Jenis media tidak didukung.';
              break;
          }
        };

        reader.readAsDataURL(selectedFile);
      }
    });
        // Memeriksa status koneksi saat halaman dimuat
        window.addEventListener('load', function() {
            var offlineContent = document.getElementById('online-content');
            var offlineMessage = document.getElementById('offline-message');

            function handleConnectionChange(event) {
                var online = navigator.onLine;
                if (online) {
                    offlineContent.style.display = 'block';
                    offlineMessage.style.display = 'none';
                } else {
                    offlineContent.style.display = 'none';
                    offlineMessage.style.display = 'block';
                }
            }

            window.addEventListener('online', handleConnectionChange);
            window.addEventListener('offline', handleConnectionChange);

            handleConnectionChange();
        });
function showPrompt() {
  var userInput = prompt("Ketik Untuk Mengirim alert() Sekali!:", "Hai!");
  var userName = prompt("Berikan Nama Untuk alert() Dikirim Oleh Siapa:", "Manusia")
  if (userInput || userName) {
    var msg = userName + " Bilang : " + userInput;
    alert(msg);
  } else {
          alert("Masukkan Input Yang Benar!!")
  }
}

  function showAlertSPAM() {
    var userInput = prompt("Ketik Teks Untuk Mengspam alert()!:", "SPAM BROOOO!!!!")
    var counter = 1
    var max = prompt("Seberapa Banyak Spam Dikirim?:", "10")
    var timeout = prompt("Waktu Delay/Kirim Spam(milidetik):", "1000")
          if (userInput || max || timeout) {
    if(confirm("Apakah Kamu Yakin Pengen Ngelanjutin Untuk Mengirim Spam alert()?")) {
      var intervalID = setInterval(function() {
        alert(userInput + " Spam Ke-" + counter);
        counter++;
        if (counter == max) {
          clearInterval(intervalID)
         alert("Dah Selesai.");
        }
      }, timeout);
    } else {
      alert("Gak Jadi.")
    }
          } else {
                  alert("Masukkan Input Yang Benar!!")
          }
  }
  function refresh() {
    location.reload();
  }
