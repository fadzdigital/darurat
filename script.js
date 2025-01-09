function showTutorial(tutorialType) {
  const tutorials = {
    // Tutorial untuk Nekobox
    nekobox: `
      <!-- Langkah 1: Salin Akun VMESS -->
      <h4>Langkah 1: Salin Akun VMESS</h4>
      <img src="image/nekobox_step1.jpg" class="d-block w-100 step-image" alt="Langkah 1 - Gambar">
      <p class="mt-3">Langkah Pertama: salin akun VMESS yang telah diberikan oleh admin atau seller. Pastikan Anda menyalin dengan benar.</p>

      <!-- Langkah 2: Import Konfigurasi VPN -->
      <h4>Langkah 2: Import Konfigurasi VPN</h4>
      <div id="carouselNekobox2" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <!-- Slide 1 -->
          <div class="carousel-item active">
            <img src="image/nekobox_step2.jpg" class="d-block w-100 step-image" alt="Langkah 2 - Gambar 1">
          </div>
          <!-- Slide 2 -->
          <div class="carousel-item">
            <img src="image/nekobox_step3.jpg" class="d-block w-100 step-image" alt="Langkah 2 - Gambar 2">
          </div>
          <!-- Slide 3 -->
          <div class="carousel-item">
            <img src="image/nekobox_step4.jpg" class="d-block w-100 step-image" alt="Langkah 2 - Gambar 3">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselNekobox2" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselNekobox2" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
       </button>
</div>
<p class="mt-3">Langkah Kedua: Setelah menyalin akun Vmess pada langkah sebelumnya, sekarang saatnya menambahkan akun tersebut ke aplikasi Nekobox. Ikuti langkah-langkah berikut:</p>
<ol>
  <li>Klik ikon "+" seperti yang ditunjukkan pada <strong>slide pertama</strong>.</li>
  <li>Pilih <strong>"Import from clipboard"</strong> seperti pada <strong>slide kedua</strong>.</li>
  <li>Setelah itu, akun VPN akan otomatis muncul dengan nama sesuai akun yang Anda pesan, seperti yang terlihat pada <strong>slide ketiga</strong>.</li>
  <li>Jika akun sudah berhasil ditambahkan, Anda hanya perlu mengetuk atau menekan nama akun tersebut sekali untuk memilih akun yang ingin digunakan atau dijalankan (start/running).</li>
</ol>


      <!-- Langkah 3: Cara Start/Running VPN -->
      <h4>Langkah 3: Cara Start/Running VPN</h4>
      <img src="image/nekobox_step5.jpg" class="d-block w-100 step-image" alt="Langkah 3 - Gambar">
      <p class="mt-3">Langkah Ketiga: Untuk memulai atau menjalankan koneksi (start/running), ikuti langkah berikut:</p>
<ol>
  <li>Tekan tombol dengan ikon pesawat kertas yang terletak di bagian bawah, seperti yang ditunjukkan pada gambar di atas.</li>
  <li>Jika muncul keterangan <strong>"SUCCESS HTTP HANDSHAKE"</strong>, itu berarti koneksi sudah berhasil.</li>
  <li>Anda dapat membuka YouTube untuk memastikan apakah koneksi sudah aktif dan berjalan dengan baik.</li>
</ol>
    `,

// Tutorial untuk HttpCustom
HttpCustom: `
  <h4>Langkah 1: Salin Akun VMESS</h4>
  <img src="image/HttpCustom_step1.jpg" class="step-image" alt="Langkah 1">
  <p>Langkah Pertama: salin akun VMESS yang telah diberikan oleh admin atau seller. Pastikan Anda menyalin dengan benar.</p>

  <h4>Langkah 2: Import Konfigurasi VPN</h4>
  <div id="carouselHttpCustomStep2" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <!-- Slide 1 -->
      <div class="carousel-item active">
        <img src="image/HttpCustom_step2.jpg" class="d-block w-100 step-image" alt="Langkah 2 - Gambar 1">
      </div>
      <!-- Slide 2 -->
      <div class="carousel-item">
        <img src="image/HttpCustom_step3.jpg" class="d-block w-100 step-image" alt="Langkah 2 - Gambar 2">
      </div>
      <!-- Slide 3 -->
      <div class="carousel-item">
        <img src="image/HttpCustom_step4.jpg" class="d-block w-100 step-image" alt="Langkah 2 - Gambar 3">
      </div>
      <!-- Slide 4 -->
      <div class="carousel-item">
        <img src="image/HttpCustom_step5.jpg" class="d-block w-100 step-image" alt="Langkah 2 - Gambar 4">
      </div>
      <!-- Slide 5 -->
      <div class="carousel-item">
        <img src="image/HttpCustom_step6.jpg" class="d-block w-100 step-image" alt="Langkah 2 - Gambar 5">
      </div>
      <!-- Slide 6 -->
      <div class="carousel-item">
        <img src="image/HttpCustom_step7.jpg" class="d-block w-100 step-image" alt="Langkah 2 - Gambar 6">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselHttpCustomStep2" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselHttpCustomStep2" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <p class="mt-3">Langkah Kedua: Setelah menyalin akun V2Ray yang diberikan oleh admin/seller, ikuti langkah-langkah berikut untuk menambahkan akun tersebut:</p>
<ol>
  <li>Klik ikon tiga titik seperti yang ditunjukkan pada <strong>slide 1</strong>.</li>
  <li>Pilih opsi <strong>Clear/Reset Config</strong> sesuai contoh pada <strong>slide 2</strong>.</li>
  <li>Klik ikon yang ditunjuk oleh tanda panah pada <strong>slide 3</strong>.</li>
  <li>Pilih <strong>V2Ray Setting</strong> seperti yang terlihat pada <strong>slide 4</strong>.</li>
  <li>Klik ikon papan tempel seperti yang ditunjukkan pada <strong>slide 5</strong>. Akun V2Ray akan otomatis terpasang dan ditampilkan.</li>
  <li>Klik tombol <strong>Back</strong> atau ikuti tanda panah seperti pada <strong>slide 6</strong> untuk menyelesaikan proses.</li>
</ol>
<p>Setelah semua langkah ini selesai, akun V2Ray Anda siap digunakan.</p>


   <h4>Langkah 3: Jalankan VPN</h4>
  <div id="carouselHttpCustomStep3" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <!-- Slide 1 -->
      <div class="carousel-item active">
        <img src="image/HttpCustom_step8.jpg" class="d-block w-100 step-image" alt="Langkah 3 - Gambar 1">
      </div>
      <!-- Slide 2 -->
      <div class="carousel-item">
        <img src="image/HttpCustom_step9.jpg" class="d-block w-100 step-image" alt="Langkah 3 - Gambar 2">
      </div>
      <!-- Slide 3 -->
      <div class="carousel-item">
        <img src="image/HttpCustom_step10.jpg" class="d-block w-100 step-image" alt="Langkah 3 - Gambar 3">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselHttpCustomStep3" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselHttpCustomStep3" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
 <p class="mt-3">Langkah Ketiga: Setelah menambahkan akun V2Ray, ikuti langkah berikut untuk memulai koneksi:</p>
<ol>
  <li>Centang pilihan V2Ray seperti yang ditunjukkan pada <strong>slide 1</strong>, pastikan Anda mencentang opsi <strong>Enable DNS</strong> dan <strong>V2Ray</strong>.</li>
  <li>Klik tombol <strong>CONNECT</strong> untuk memulai atau menjalankan VPN, seperti yang terlihat pada <strong>slide 2</strong>.</li>
  <li>Setelah berhasil, tombol <strong>CONNECT</strong> akan berubah menjadi <strong>DISCONNECT</strong>, seperti yang ditunjukkan pada <strong>slide 3</strong>.</li>
  <li>Untuk memastikan koneksi berhasil, Anda bisa mencoba membuka YouTube. Jika YouTube dapat diputar dengan lancar, itu artinya koneksi sudah berhasil.</li>
</ol>
    `,
// Tutorial untuk Hotspot dengan Nekobox
  Hotspots: `
    <h4>Langkah 1: Siapkan Aplikasi Nekobox</h4>
    <img src="image/nekobox_step1.jpg" class="step-image" alt="Langkah 1">
    <p>Unduh dan buka aplikasi Nekobox pada perangkat Anda. Pastikan aplikasi sudah terpasang dengan benar sebelum melanjutkan.</p>

    <h4>Langkah 2: Pilih Proxy Port</h4>
    <img src="image/nekobox_step2.jpg" class="step-image" alt="Langkah 2">
    <p>Pada halaman utama Nekobox, pilih opsi untuk mengatur Proxy Port. Sesuaikan pengaturan sesuai kebutuhan Anda.</p>

    <h4>Langkah 3: Menyusun Hotspot</h4>
    <img src="image/nekobox_step3.jpg" class="step-image" alt="Langkah 3">
    <p>Setelah memilih Proxy Port, aktifkan hotspot dengan cara menekan tombol "Start" pada aplikasi Nekobox. Pastikan hotspot berjalan dengan lancar.</p>

    <h4>Langkah 4: Verifikasi Koneksi</h4>
    <img src="image/nekobox_step4.jpg" class="step-image" alt="Langkah 4">
    <p>Periksa koneksi hotspot dengan membuka browser atau aplikasi lain untuk memastikan semuanya bekerja dengan baik.</p>

    <h4>Langkah 5: Selesai</h4>
    <img src="image/nekobox_step5.jpg" class="step-image" alt="Langkah 5">
    <p>Setelah hotspot berhasil dijalankan, Anda bisa menggunakan koneksi proxy di perangkat lain. Selamat mencoba!</p>
`
};

  // Menampilkan tutorial sesuai tipe
  document.getElementById("tutorialContent").innerHTML = tutorials[tutorialType] || "Tutorial belum tersedia.";
  const tutorialModal = new bootstrap.Modal(document.getElementById("tutorialModal"));
  tutorialModal.show();
}
