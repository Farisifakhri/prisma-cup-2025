// Menunggu seluruh konten halaman dan CSS dimuat sebelum script dijalankan


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


    document.addEventListener('DOMContentLoaded', () => {

    // === FUNGSI COUNTDOWN TIMER ===
    
    const targetDate = new Date('Oct 15, 2025 08:00:00').getTime();
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    const interval = setInterval(updateCountdown, 1000);

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            clearInterval(interval);
            document.getElementById('countdown').innerHTML = "<h2>ACARA TELAH DIMULAI!</h2>";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        daysEl.innerText = days < 10 ? '0' + days : days;
        hoursEl.innerText = hours < 10 ? '0' + hours : hours;
        minutesEl.innerText = minutes < 10 ? '0' + minutes : minutes;
        secondsEl.innerText = seconds < 10 ? '0' + seconds : seconds;
    }

});