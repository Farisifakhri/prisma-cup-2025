// Menunggu seluruh konten halaman dan CSS dimuat sebelum script dijalankan
document.addEventListener('DOMContentLoaded', () => {

    // ===================================
    // BAGIAN 1: LOGIKA UNTUK INTRO SCREEN
    // ===================================

    // Pilih elemen-elemen yang kita butuhkan
    const introScreen = document.getElementById('intro-screen');
    const mainContent = document.querySelector('.main-content-wrapper');

    // Kunci scroll di body saat intro aktif
    document.body.style.overflow = 'hidden';

    // Atur durasi intro dalam milidetik (contoh: 4000ms = 4 detik)
    const introDuration = 4000; 

    setTimeout(() => {
        // 1. Buat layar intro menghilang dengan transisi
        introScreen.style.opacity = '0';
        introScreen.style.visibility = 'hidden';
        
        // 2. Tampilkan konten utama dan picu animasinya
        mainContent.style.visibility = 'visible';
        mainContent.classList.add('loaded'); // Menambah class untuk memicu animasi CSS

        // 3. Buka kembali kunci scroll di body
        document.body.style.overflow = 'auto';

    }, introDuration);


    // =======================================
    // BAGIAN 2: LOGIKA UNTUK COUNTDOWN TIMER
    // =======================================

    // Tentukan tanggal dan waktu acara akan dimulai
    const targetDate = new Date('Oct 25, 2025 08:00:00').getTime();

    // Pilih elemen-elemen span tempat kita akan menampilkan angka
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    // Jalankan fungsi updateCountdown setiap 1 detik
    const interval = setInterval(updateCountdown, 1000);

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        // Jika waktu target sudah lewat, hentikan countdown
        if (distance < 0) {
            clearInterval(interval);
            document.getElementById('countdown').innerHTML = "<h2 style='font-size: 1.5em;'>ACARA TELAH DIMULAI!</h2>";
            return;
        }

        // Perhitungan untuk mengubah milidetik menjadi hari, jam, menit, detik
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Tampilkan hasilnya ke elemen HTML (tambahkan '0' jika angka < 10)
        daysEl.innerText = days < 10 ? '0' + days : days;
        hoursEl.innerText = hours < 10 ? '0' + hours : hours;
        minutesEl.innerText = minutes < 10 ? '0' + minutes : minutes;
        secondsEl.innerText = seconds < 10 ? '0' + seconds : seconds;
    }

});